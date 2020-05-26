function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~my-profile-my-profile-module~unit-users-unit-users-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js ***!
    \******************************************************************/

  /*! exports provided: DataSource, BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, STICKY_DIRECTIONS, StickyStyler, TEXT_COLUMN_OPTIONS, mixinHasStickyInput */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015TableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function () {
      return BaseCdkCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseRowDef", function () {
      return BaseRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function () {
      return CDK_ROW_TEMPLATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_TABLE", function () {
      return CDK_TABLE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function () {
      return CDK_TABLE_TEMPLATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkCell", function () {
      return CdkCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkCellDef", function () {
      return CdkCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function () {
      return CdkCellOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function () {
      return CdkColumnDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function () {
      return CdkFooterCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function () {
      return CdkFooterCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function () {
      return CdkFooterRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function () {
      return CdkFooterRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function () {
      return CdkHeaderCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function () {
      return CdkHeaderCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function () {
      return CdkHeaderRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function () {
      return CdkHeaderRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkRow", function () {
      return CdkRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkRowDef", function () {
      return CdkRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTable", function () {
      return CdkTable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTableModule", function () {
      return CdkTableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function () {
      return CdkTextColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function () {
      return DataRowOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function () {
      return FooterRowOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function () {
      return HeaderRowOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function () {
      return STICKY_DIRECTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StickyStyler", function () {
      return StickyStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function () {
      return TEXT_COLUMN_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function () {
      return mixinHasStickyInput;
    });
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataSource", function () {
      return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"];
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var _c0 = [[["caption"]]];
    var _c1 = ["caption"];

    function CdkTextColumn_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r655 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r655.justify);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r655.headerText, " ");
      }
    }

    function CdkTextColumn_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r657 = ctx.$implicit;

        var ctx_r656 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r656.justify);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r656.dataAccessor(data_r657, ctx_r656.name), " ");
      }
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/can-stick.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface for a mixin to provide a directive with a function that checks if the sticky input has
     * been changed since the last time the function was called. Essentially adds a dirty-check to the
     * sticky value.
     * \@docs-private
     * @record
     */


    function CanStick() {}

    if (false) {}
    /**
     * Mixin to provide a directive with a function that checks if the sticky input has been
     * changed since the last time the function was called. Essentially adds a dirty-check to the
     * sticky value.
     * \@docs-private
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinHasStickyInput(base) {
      return (
        /*#__PURE__*/
        function (_base) {
          _inherits(_class, _base);

          var _super = _createSuper(_class);

          /**
           * @param {...?} args
           */
          function _class() {
            var _this;

            _classCallCheck(this, _class);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));
            _this._sticky = false;
            /**
             * Whether the sticky input has changed since it was last checked.
             */

            _this._hasStickyChanged = false;
            return _this;
          }
          /**
           * Whether sticky positioning should be applied.
           * @return {?}
           */


          _createClass(_class, [{
            key: "hasStickyChanged",

            /**
             * Whether the sticky value has changed since this was last called.
             * @return {?}
             */
            value: function hasStickyChanged() {
              /** @type {?} */
              var hasStickyChanged = this._hasStickyChanged;
              this._hasStickyChanged = false;
              return hasStickyChanged;
            }
            /**
             * Resets the dirty check for cases where the sticky state has been used without checking.
             * @return {?}
             */

          }, {
            key: "resetStickyChanged",
            value: function resetStickyChanged() {
              this._hasStickyChanged = false;
            }
          }, {
            key: "sticky",
            get: function get() {
              return this._sticky;
            }
            /**
             * @param {?} v
             * @return {?}
             */
            ,
            set: function set(v) {
              /** @type {?} */
              var prevValue = this._sticky;
              this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
              this._hasStickyChanged = prevValue !== this._sticky;
            }
          }]);

          return _class;
        }(base)
      );
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/tokens.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to provide a table to some of the sub-components without causing a circular dependency.
     * \@docs-private
     * @type {?}
     */


    var CDK_TABLE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TABLE');
    /**
     * Configurable options for `CdkTextColumn`.
     * @record
     * @template T
     */

    function TextColumnOptions() {}

    if (false) {}
    /**
     * Injection token that can be used to specify the text column options.
     * @type {?}
     */


    var TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('text-column-options');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/cell.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base interface for a cell definition. Captures a column's cell template definition.
     * @record
     */

    function CellDef() {}

    if (false) {}
    /**
     * Cell definition for a CDK table.
     * Captures the template of a column's data row cell as well as cell-specific properties.
     */


    var CdkCellDef =
    /**
     * @param {?} template
     */
    function CdkCellDef(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkCellDef);

      this.template = template;
    };

    CdkCellDef.ɵfac = function CdkCellDef_Factory(t) {
      return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
    };

    CdkCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkCellDef,
      selectors: [["", "cdkCellDef", ""]]
    });
    /** @nocollapse */

    CdkCellDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkCellDef]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Header cell definition for a CDK table.
     * Captures the template of a column's header cell and as well as cell-specific properties.
     */


    var CdkHeaderCellDef =
    /**
     * @param {?} template
     */
    function CdkHeaderCellDef(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkHeaderCellDef);

      this.template = template;
    };

    CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) {
      return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
    };

    CdkHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkHeaderCellDef,
      selectors: [["", "cdkHeaderCellDef", ""]]
    });
    /** @nocollapse */

    CdkHeaderCellDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkHeaderCellDef]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Footer cell definition for a CDK table.
     * Captures the template of a column's footer cell and as well as cell-specific properties.
     */


    var CdkFooterCellDef =
    /**
     * @param {?} template
     */
    function CdkFooterCellDef(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkFooterCellDef);

      this.template = template;
    };

    CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) {
      return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
    };

    CdkFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkFooterCellDef,
      selectors: [["", "cdkFooterCellDef", ""]]
    });
    /** @nocollapse */

    CdkFooterCellDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkFooterCellDef]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {} // Boilerplate for applying mixins to CdkColumnDef.

    /**
     * \@docs-private
     */


    var CdkColumnDefBase = function CdkColumnDefBase() {
      _classCallCheck(this, CdkColumnDefBase);
    };
    /** @type {?} */


    var _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
    /**
     * Column definition for the CDK table.
     * Defines a set of cells available for a table column.
     */


    var CdkColumnDef =
    /*#__PURE__*/
    function (_CdkColumnDefBase2) {
      _inherits(CdkColumnDef, _CdkColumnDefBase2);

      var _super2 = _createSuper(CdkColumnDef);

      /**
       * @param {?=} _table
       */
      function CdkColumnDef(_table) {
        var _this2;

        _classCallCheck(this, CdkColumnDef);

        _this2 = _super2.call(this);
        _this2._table = _table;
        _this2._stickyEnd = false;
        return _this2;
      }
      /**
       * Unique name for this column.
       * @return {?}
       */


      _createClass(CdkColumnDef, [{
        key: "name",
        get: function get() {
          return this._name;
        }
        /**
         * @param {?} name
         * @return {?}
         */
        ,
        set: function set(name) {
          // If the directive is set without a name (updated programatically), then this setter will
          // trigger with an empty string and should not overwrite the programatically set value.
          if (name) {
            this._name = name;
            this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
          }
        }
        /**
         * Whether this column should be sticky positioned on the end of the row. Should make sure
         * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
         * has been changed.
         * @return {?}
         */

      }, {
        key: "stickyEnd",
        get: function get() {
          return this._stickyEnd;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          /** @type {?} */
          var prevValue = this._stickyEnd;
          this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
          this._hasStickyChanged = prevValue !== this._stickyEnd;
        }
      }]);

      return CdkColumnDef;
    }(_CdkColumnDefBase);

    CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) {
      return new (t || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
    };

    CdkColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkColumnDef,
      selectors: [["", "cdkColumnDef", ""]],
      contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkCellDef, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
        }
      },
      inputs: {
        sticky: "sticky",
        name: ["cdkColumnDef", "name"],
        stickyEnd: "stickyEnd"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: 'MAT_SORT_HEADER_COLUMN_DEF',
        useExisting: CdkColumnDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkColumnDef.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [CDK_TABLE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    CdkColumnDef.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkColumnDef']
      }],
      stickyEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['stickyEnd']
      }],
      cell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [CdkCellDef]
      }],
      headerCell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [CdkHeaderCellDef]
      }],
      footerCell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [CdkFooterCellDef]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkColumnDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkColumnDef]',
          inputs: ['sticky'],
          providers: [{
            provide: 'MAT_SORT_HEADER_COLUMN_DEF',
            useExisting: CdkColumnDef
          }]
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['cdkColumnDef']
        }],
        stickyEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['stickyEnd']
        }],
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [CdkCellDef]
        }],
        headerCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [CdkHeaderCellDef]
        }],
        footerCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [CdkFooterCellDef]
        }]
      });
    })();

    if (false) {}
    /**
     * Base class for the cells. Adds a CSS classname that identifies the column it renders in.
     */


    var BaseCdkCell =
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    function BaseCdkCell(columnDef, elementRef) {
      _classCallCheck(this, BaseCdkCell);

      /** @type {?} */
      var columnClassName = "cdk-column-".concat(columnDef.cssClassFriendlyName);
      elementRef.nativeElement.classList.add(columnClassName);
    };
    /**
     * Header cell template container that adds the right classes and role.
     */


    var CdkHeaderCell =
    /*#__PURE__*/
    function (_BaseCdkCell) {
      _inherits(CdkHeaderCell, _BaseCdkCell);

      var _super3 = _createSuper(CdkHeaderCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function CdkHeaderCell(columnDef, elementRef) {
        _classCallCheck(this, CdkHeaderCell);

        return _super3.call(this, columnDef, elementRef);
      }

      return CdkHeaderCell;
    }(BaseCdkCell);

    CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) {
      return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    CdkHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkHeaderCell,
      selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
      hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkHeaderCell.ctorParameters = function () {
      return [{
        type: CdkColumnDef
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'cdk-header-cell, th[cdk-header-cell]',
          host: {
            'class': 'cdk-header-cell',
            'role': 'columnheader'
          }
        }]
      }], function () {
        return [{
          type: CdkColumnDef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * Footer cell template container that adds the right classes and role.
     */


    var CdkFooterCell =
    /*#__PURE__*/
    function (_BaseCdkCell2) {
      _inherits(CdkFooterCell, _BaseCdkCell2);

      var _super4 = _createSuper(CdkFooterCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function CdkFooterCell(columnDef, elementRef) {
        _classCallCheck(this, CdkFooterCell);

        return _super4.call(this, columnDef, elementRef);
      }

      return CdkFooterCell;
    }(BaseCdkCell);

    CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) {
      return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    CdkFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkFooterCell,
      selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
      hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkFooterCell.ctorParameters = function () {
      return [{
        type: CdkColumnDef
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'cdk-footer-cell, td[cdk-footer-cell]',
          host: {
            'class': 'cdk-footer-cell',
            'role': 'gridcell'
          }
        }]
      }], function () {
        return [{
          type: CdkColumnDef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * Cell template container that adds the right classes and role.
     */


    var CdkCell =
    /*#__PURE__*/
    function (_BaseCdkCell3) {
      _inherits(CdkCell, _BaseCdkCell3);

      var _super5 = _createSuper(CdkCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function CdkCell(columnDef, elementRef) {
        _classCallCheck(this, CdkCell);

        return _super5.call(this, columnDef, elementRef);
      }

      return CdkCell;
    }(BaseCdkCell);

    CdkCell.ɵfac = function CdkCell_Factory(t) {
      return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    CdkCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkCell,
      selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
      hostAttrs: ["role", "gridcell", 1, "cdk-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkCell.ctorParameters = function () {
      return [{
        type: CdkColumnDef
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'cdk-cell, td[cdk-cell]',
          host: {
            'class': 'cdk-cell',
            'role': 'gridcell'
          }
        }]
      }], function () {
        return [{
          type: CdkColumnDef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/row.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The row template that can be used by the mat-table. Should not be used outside of the
     * material library.
     * @type {?}
     */


    var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
    /**
     * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
     * for changes and notifying the table.
     * @abstract
     */

    var BaseRowDef =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} template
       * @param {?} _differs
       */
      function BaseRowDef(template, _differs) {
        _classCallCheck(this, BaseRowDef);

        this.template = template;
        this._differs = _differs;
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(BaseRowDef, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // Create a new columns differ if one does not yet exist. Initialize it based on initial value
          // of the columns property or an empty array if none is provided.
          if (!this._columnsDiffer) {
            /** @type {?} */
            var columns = changes['columns'] && changes['columns'].currentValue || [];
            this._columnsDiffer = this._differs.find(columns).create();

            this._columnsDiffer.diff(columns);
          }
        }
        /**
         * Returns the difference between the current columns and the columns from the last diff, or null
         * if there is no difference.
         * @return {?}
         */

      }, {
        key: "getColumnsDiff",
        value: function getColumnsDiff() {
          return this._columnsDiffer.diff(this.columns);
        }
        /**
         * Gets this row def's relevant cell template from the provided column def.
         * @param {?} column
         * @return {?}
         */

      }, {
        key: "extractCellTemplate",
        value: function extractCellTemplate(column) {
          if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
          }

          if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
          } else {
            return column.cell.template;
          }
        }
      }]);

      return BaseRowDef;
    }();

    BaseRowDef.ɵfac = function BaseRowDef_Factory(t) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinvalidFactory"]();
    };

    BaseRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: BaseRowDef,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
    });

    if (false) {} // Boilerplate for applying mixins to CdkHeaderRowDef.

    /**
     * \@docs-private
     */


    var CdkHeaderRowDefBase =
    /*#__PURE__*/
    function (_BaseRowDef) {
      _inherits(CdkHeaderRowDefBase, _BaseRowDef);

      var _super6 = _createSuper(CdkHeaderRowDefBase);

      function CdkHeaderRowDefBase() {
        _classCallCheck(this, CdkHeaderRowDefBase);

        return _super6.apply(this, arguments);
      }

      return CdkHeaderRowDefBase;
    }(BaseRowDef);
    /** @type {?} */


    var _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
    /**
     * Header row definition for the CDK table.
     * Captures the header row's template and other header properties such as the columns to display.
     */


    var CdkHeaderRowDef =
    /*#__PURE__*/
    function (_CdkHeaderRowDefBase2) {
      _inherits(CdkHeaderRowDef, _CdkHeaderRowDefBase2);

      var _super7 = _createSuper(CdkHeaderRowDef);

      /**
       * @param {?} template
       * @param {?} _differs
       * @param {?=} _table
       */
      function CdkHeaderRowDef(template, _differs, _table) {
        var _this3;

        _classCallCheck(this, CdkHeaderRowDef);

        _this3 = _super7.call(this, template, _differs);
        _this3._table = _table;
        return _this3;
      } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
      // Explicitly define it so that the method is called as part of the Angular lifecycle.

      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(CdkHeaderRowDef, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          _get(_getPrototypeOf(CdkHeaderRowDef.prototype), "ngOnChanges", this).call(this, changes);
        }
      }]);

      return CdkHeaderRowDef;
    }(_CdkHeaderRowDefBase);

    CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) {
      return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
    };

    CdkHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkHeaderRowDef,
      selectors: [["", "cdkHeaderRowDef", ""]],
      inputs: {
        columns: ["cdkHeaderRowDef", "columns"],
        sticky: ["cdkHeaderRowDefSticky", "sticky"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    CdkHeaderRowDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [CDK_TABLE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkHeaderRowDef]',
          inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {} // Boilerplate for applying mixins to CdkFooterRowDef.

    /**
     * \@docs-private
     */


    var CdkFooterRowDefBase =
    /*#__PURE__*/
    function (_BaseRowDef2) {
      _inherits(CdkFooterRowDefBase, _BaseRowDef2);

      var _super8 = _createSuper(CdkFooterRowDefBase);

      function CdkFooterRowDefBase() {
        _classCallCheck(this, CdkFooterRowDefBase);

        return _super8.apply(this, arguments);
      }

      return CdkFooterRowDefBase;
    }(BaseRowDef);
    /** @type {?} */


    var _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
    /**
     * Footer row definition for the CDK table.
     * Captures the footer row's template and other footer properties such as the columns to display.
     */


    var CdkFooterRowDef =
    /*#__PURE__*/
    function (_CdkFooterRowDefBase2) {
      _inherits(CdkFooterRowDef, _CdkFooterRowDefBase2);

      var _super9 = _createSuper(CdkFooterRowDef);

      /**
       * @param {?} template
       * @param {?} _differs
       * @param {?=} _table
       */
      function CdkFooterRowDef(template, _differs, _table) {
        var _this4;

        _classCallCheck(this, CdkFooterRowDef);

        _this4 = _super9.call(this, template, _differs);
        _this4._table = _table;
        return _this4;
      } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
      // Explicitly define it so that the method is called as part of the Angular lifecycle.

      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(CdkFooterRowDef, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          _get(_getPrototypeOf(CdkFooterRowDef.prototype), "ngOnChanges", this).call(this, changes);
        }
      }]);

      return CdkFooterRowDef;
    }(_CdkFooterRowDefBase);

    CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) {
      return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
    };

    CdkFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkFooterRowDef,
      selectors: [["", "cdkFooterRowDef", ""]],
      inputs: {
        columns: ["cdkFooterRowDef", "columns"],
        sticky: ["cdkFooterRowDefSticky", "sticky"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    CdkFooterRowDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [CDK_TABLE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkFooterRowDef]',
          inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Data row definition for the CDK table.
     * Captures the header row's template and other row properties such as the columns to display and
     * a when predicate that describes when this row should be used.
     * @template T
     */


    var CdkRowDef =
    /*#__PURE__*/
    function (_BaseRowDef3) {
      _inherits(CdkRowDef, _BaseRowDef3);

      var _super10 = _createSuper(CdkRowDef);

      // TODO(andrewseguin): Add an input for providing a switch function to determine
      //   if this template should be used.

      /**
       * @param {?} template
       * @param {?} _differs
       * @param {?=} _table
       */
      function CdkRowDef(template, _differs, _table) {
        var _this5;

        _classCallCheck(this, CdkRowDef);

        _this5 = _super10.call(this, template, _differs);
        _this5._table = _table;
        return _this5;
      }

      return CdkRowDef;
    }(BaseRowDef);

    CdkRowDef.ɵfac = function CdkRowDef_Factory(t) {
      return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
    };

    CdkRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkRowDef,
      selectors: [["", "cdkRowDef", ""]],
      inputs: {
        columns: ["cdkRowDefColumns", "columns"],
        when: ["cdkRowDefWhen", "when"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkRowDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [CDK_TABLE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkRowDef]',
          inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Context provided to the row cells when `multiTemplateDataRows` is false
     * @record
     * @template T
     */


    function CdkCellOutletRowContext() {}

    if (false) {}
    /**
     * Context provided to the row cells when `multiTemplateDataRows` is true. This context is the same
     * as CdkCellOutletRowContext except that the single `index` value is replaced by `dataIndex` and
     * `renderIndex`.
     * @record
     * @template T
     */


    function CdkCellOutletMultiRowContext() {}

    if (false) {}
    /**
     * Outlet for rendering cells inside of a row or header row.
     * \@docs-private
     */


    var CdkCellOutlet =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _viewContainer
       */
      function CdkCellOutlet(_viewContainer) {
        _classCallCheck(this, CdkCellOutlet);

        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
      }
      /**
       * @return {?}
       */


      _createClass(CdkCellOutlet, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // If this was the last outlet being rendered in the view, remove the reference
          // from the static property after it has been destroyed to avoid leaking memory.
          if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
          }
        }
      }]);

      return CdkCellOutlet;
    }();

    CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) {
      return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]));
    };

    CdkCellOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkCellOutlet,
      selectors: [["", "cdkCellOutlet", ""]]
    });
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     */

    CdkCellOutlet.mostRecentCellOutlet = null;
    /** @nocollapse */

    CdkCellOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkCellOutlet]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Header template container that contains the cell outlet. Adds the right class and role.
     */


    var CdkHeaderRow = function CdkHeaderRow() {
      _classCallCheck(this, CdkHeaderRow);
    };

    CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) {
      return new (t || CdkHeaderRow)();
    };

    CdkHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CdkHeaderRow,
      selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
      hostAttrs: ["role", "row", 1, "cdk-header-row"],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function CdkHeaderRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [CdkCellOutlet],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'cdk-header-row, tr[cdk-header-row]',
          template: CDK_ROW_TEMPLATE,
          host: {
            'class': 'cdk-header-row',
            'role': 'row'
          },
          // See note on CdkTable for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();
    /**
     * Footer template container that contains the cell outlet. Adds the right class and role.
     */


    var CdkFooterRow = function CdkFooterRow() {
      _classCallCheck(this, CdkFooterRow);
    };

    CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) {
      return new (t || CdkFooterRow)();
    };

    CdkFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CdkFooterRow,
      selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
      hostAttrs: ["role", "row", 1, "cdk-footer-row"],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function CdkFooterRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [CdkCellOutlet],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'cdk-footer-row, tr[cdk-footer-row]',
          template: CDK_ROW_TEMPLATE,
          host: {
            'class': 'cdk-footer-row',
            'role': 'row'
          },
          // See note on CdkTable for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();
    /**
     * Data row template container that contains the cell outlet. Adds the right class and role.
     */


    var CdkRow = function CdkRow() {
      _classCallCheck(this, CdkRow);
    };

    CdkRow.ɵfac = function CdkRow_Factory(t) {
      return new (t || CdkRow)();
    };

    CdkRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CdkRow,
      selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
      hostAttrs: ["role", "row", 1, "cdk-row"],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function CdkRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [CdkCellOutlet],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'cdk-row, tr[cdk-row]',
          template: CDK_ROW_TEMPLATE,
          host: {
            'class': 'cdk-row',
            'role': 'row'
          },
          // See note on CdkTable for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/sticky-styler.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * List of all possible directions that can be used for sticky positioning.
     * \@docs-private
     * @type {?}
     */


    var STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
    /**
     * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
     * \@docs-private
     */

    var StickyStyler =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _isNativeHtmlTable Whether the sticky logic should be based on a table
       *     that uses the native `<table>` element.
       * @param {?} _stickCellCss The CSS class that will be applied to every row/cell that has
       *     sticky positioning applied.
       * @param {?} direction The directionality context of the table (ltr/rtl); affects column positioning
       *     by reversing left/right positions.
       * @param {?=} _isBrowser Whether the table is currently being rendered on the server or the client.
       */
      function StickyStyler(_isNativeHtmlTable, _stickCellCss, direction) {
        var _isBrowser = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        _classCallCheck(this, StickyStyler);

        this._isNativeHtmlTable = _isNativeHtmlTable;
        this._stickCellCss = _stickCellCss;
        this.direction = direction;
        this._isBrowser = _isBrowser;
      }
      /**
       * Clears the sticky positioning styles from the row and its cells by resetting the `position`
       * style, setting the zIndex to 0, and unsetting each provided sticky direction.
       * @param {?} rows The list of rows that should be cleared from sticking in the provided directions
       * @param {?} stickyDirections The directions that should no longer be set as sticky on the rows.
       * @return {?}
       */


      _createClass(StickyStyler, [{
        key: "clearStickyPositioning",
        value: function clearStickyPositioning(rows, stickyDirections) {
          var _iterator = _createForOfIteratorHelper(rows),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var row = _step.value;

              // If the row isn't an element (e.g. if it's an `ng-container`),
              // it won't have inline styles or `children` so we skip it.
              if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
              }

              this._removeStickyStyle(row, stickyDirections);

              for (var i = 0; i < row.children.length; i++) {
                /** @type {?} */
                var cell =
                /** @type {?} */
                row.children[i];

                this._removeStickyStyle(cell, stickyDirections);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        /**
         * Applies sticky left and right positions to the cells of each row according to the sticky
         * states of the rendered column definitions.
         * @param {?} rows The rows that should have its set of cells stuck according to the sticky states.
         * @param {?} stickyStartStates A list of boolean states where each state represents whether the cell
         *     in this index position should be stuck to the start of the row.
         * @param {?} stickyEndStates A list of boolean states where each state represents whether the cell
         *     in this index position should be stuck to the end of the row.
         * @return {?}
         */

      }, {
        key: "updateStickyColumns",
        value: function updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
          /** @type {?} */
          var hasStickyColumns = stickyStartStates.some(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state;
          }) || stickyEndStates.some(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state;
          });

          if (!rows.length || !hasStickyColumns || !this._isBrowser) {
            return;
          }
          /** @type {?} */


          var firstRow = rows[0];
          /** @type {?} */

          var numCells = firstRow.children.length;
          /** @type {?} */

          var cellWidths = this._getCellWidths(firstRow);
          /** @type {?} */


          var startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
          /** @type {?} */


          var endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
          /** @type {?} */


          var isRtl = this.direction === 'rtl';

          var _iterator2 = _createForOfIteratorHelper(rows),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var row = _step2.value;

              for (var i = 0; i < numCells; i++) {
                /** @type {?} */
                var cell =
                /** @type {?} */
                row.children[i];

                if (stickyStartStates[i]) {
                  this._addStickyStyle(cell, isRtl ? 'right' : 'left', startPositions[i]);
                }

                if (stickyEndStates[i]) {
                  this._addStickyStyle(cell, isRtl ? 'left' : 'right', endPositions[i]);
                }
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        /**
         * Applies sticky positioning to the row's cells if using the native table layout, and to the
         * row itself otherwise.
         * @param {?} rowsToStick The list of rows that should be stuck according to their corresponding
         *     sticky state and to the provided top or bottom position.
         * @param {?} stickyStates A list of boolean states where each state represents whether the row
         *     should be stuck in the particular top or bottom position.
         * @param {?} position The position direction in which the row should be stuck if that row should be
         *     sticky.
         *
         * @return {?}
         */

      }, {
        key: "stickRows",
        value: function stickRows(rowsToStick, stickyStates, position) {
          // Since we can't measure the rows on the server, we can't stick the rows properly.
          if (!this._isBrowser) {
            return;
          } // If positioning the rows to the bottom, reverse their order when evaluating the sticky
          // position such that the last row stuck will be "bottom: 0px" and so on.

          /** @type {?} */


          var rows = position === 'bottom' ? rowsToStick.reverse() : rowsToStick;
          /** @type {?} */

          var stickyHeight = 0;

          for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            if (!stickyStates[rowIndex]) {
              continue;
            }
            /** @type {?} */


            var row = rows[rowIndex];

            if (this._isNativeHtmlTable) {
              for (var j = 0; j < row.children.length; j++) {
                /** @type {?} */
                var cell =
                /** @type {?} */
                row.children[j];

                this._addStickyStyle(cell, position, stickyHeight);
              }
            } else {
              // Flex does not respect the stick positioning on the cells, needs to be applied to the row.
              // If this is applied on a native table, Safari causes the header to fly in wrong direction.
              this._addStickyStyle(row, position, stickyHeight);
            }

            if (rowIndex === rows.length - 1) {
              // prevent unnecessary reflow from getBoundingClientRect()
              return;
            }

            stickyHeight += row.getBoundingClientRect().height;
          }
        }
        /**
         * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
         * footer rows is to apply sticky styling to the tfoot container. This should only be done if
         * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
         * the tfoot element.
         * @param {?} tableElement
         * @param {?} stickyStates
         * @return {?}
         */

      }, {
        key: "updateStickyFooterContainer",
        value: function updateStickyFooterContainer(tableElement, stickyStates) {
          if (!this._isNativeHtmlTable) {
            return;
          }
          /** @type {?} */


          var tfoot =
          /** @type {?} */
          tableElement.querySelector('tfoot');

          if (stickyStates.some(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return !state;
          })) {
            this._removeStickyStyle(tfoot, ['bottom']);
          } else {
            this._addStickyStyle(tfoot, 'bottom', 0);
          }
        }
        /**
         * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
         * the zIndex, removing each of the provided sticky directions, and removing the
         * sticky position if there are no more directions.
         * @param {?} element
         * @param {?} stickyDirections
         * @return {?}
         */

      }, {
        key: "_removeStickyStyle",
        value: function _removeStickyStyle(element, stickyDirections) {
          var _iterator3 = _createForOfIteratorHelper(stickyDirections),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var dir = _step3.value;
              element.style[dir] = '';
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          element.style.zIndex = this._getCalculatedZIndex(element); // If the element no longer has any more sticky directions, remove sticky positioning and
          // the sticky CSS class.

          /** @type {?} */

          var hasDirection = STICKY_DIRECTIONS.some(
          /**
          * @param {?} dir
          * @return {?}
          */
          function (dir) {
            return !!element.style[dir];
          });

          if (!hasDirection) {
            element.style.position = '';
            element.classList.remove(this._stickCellCss);
          }
        }
        /**
         * Adds the sticky styling to the element by adding the sticky style class, changing position
         * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
         * direction and value.
         * @param {?} element
         * @param {?} dir
         * @param {?} dirValue
         * @return {?}
         */

      }, {
        key: "_addStickyStyle",
        value: function _addStickyStyle(element, dir, dirValue) {
          element.classList.add(this._stickCellCss);
          element.style[dir] = "".concat(dirValue, "px");
          element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
          element.style.zIndex = this._getCalculatedZIndex(element);
        }
        /**
         * Calculate what the z-index should be for the element, depending on what directions (top,
         * bottom, left, right) have been set. It should be true that elements with a top direction
         * should have the highest index since these are elements like a table header. If any of those
         * elements are also sticky in another direction, then they should appear above other elements
         * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
         * (e.g. footer rows) should then be next in the ordering such that they are below the header
         * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
         * should minimally increment so that they are above non-sticky elements but below top and bottom
         * elements.
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_getCalculatedZIndex",
        value: function _getCalculatedZIndex(element) {
          /** @type {?} */
          var zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1
          };
          /** @type {?} */

          var zIndex = 0; // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
          // loses the array generic type in the `for of`. But we *also* have to use `Array` because
          // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`

          var _iterator4 = _createForOfIteratorHelper(
          /** @type {?} */
          STICKY_DIRECTIONS),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var dir = _step4.value;

              if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return zIndex ? "".concat(zIndex) : '';
        }
        /**
         * Gets the widths for each cell in the provided row.
         * @param {?} row
         * @return {?}
         */

      }, {
        key: "_getCellWidths",
        value: function _getCellWidths(row) {
          /** @type {?} */
          var cellWidths = [];
          /** @type {?} */

          var firstRowCells = row.children;

          for (var i = 0; i < firstRowCells.length; i++) {
            /** @type {?} */
            var cell =
            /** @type {?} */
            firstRowCells[i];
            cellWidths.push(cell.getBoundingClientRect().width);
          }

          return cellWidths;
        }
        /**
         * Determines the left and right positions of each sticky column cell, which will be the
         * accumulation of all sticky column cell widths to the left and right, respectively.
         * Non-sticky cells do not need to have a value set since their positions will not be applied.
         * @param {?} widths
         * @param {?} stickyStates
         * @return {?}
         */

      }, {
        key: "_getStickyStartColumnPositions",
        value: function _getStickyStartColumnPositions(widths, stickyStates) {
          /** @type {?} */
          var positions = [];
          /** @type {?} */

          var nextPosition = 0;

          for (var i = 0; i < widths.length; i++) {
            if (stickyStates[i]) {
              positions[i] = nextPosition;
              nextPosition += widths[i];
            }
          }

          return positions;
        }
        /**
         * Determines the left and right positions of each sticky column cell, which will be the
         * accumulation of all sticky column cell widths to the left and right, respectively.
         * Non-sticky cells do not need to have a value set since their positions will not be applied.
         * @param {?} widths
         * @param {?} stickyStates
         * @return {?}
         */

      }, {
        key: "_getStickyEndColumnPositions",
        value: function _getStickyEndColumnPositions(widths, stickyStates) {
          /** @type {?} */
          var positions = [];
          /** @type {?} */

          var nextPosition = 0;

          for (var i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
              positions[i] = nextPosition;
              nextPosition += widths[i];
            }
          }

          return positions;
        }
      }]);

      return StickyStyler;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/table-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Returns an error to be thrown when attempting to find an unexisting column.
     * \@docs-private
     * @param {?} id Id whose lookup failed.
     * @return {?}
     */


    function getTableUnknownColumnError(id) {
      return Error("Could not find column with id \"".concat(id, "\"."));
    }
    /**
     * Returns an error to be thrown when two column definitions have the same name.
     * \@docs-private
     * @param {?} name
     * @return {?}
     */


    function getTableDuplicateColumnNameError(name) {
      return Error("Duplicate column definition name provided: \"".concat(name, "\"."));
    }
    /**
     * Returns an error to be thrown when there are multiple rows that are missing a when function.
     * \@docs-private
     * @return {?}
     */


    function getTableMultipleDefaultRowDefsError() {
      return Error("There can only be one default row without a when predicate function.");
    }
    /**
     * Returns an error to be thrown when there are no matching row defs for a particular set of data.
     * \@docs-private
     * @param {?} data
     * @return {?}
     */


    function getTableMissingMatchingRowDefError(data) {
      return Error("Could not find a matching row definition for the" + "provided row data: ".concat(JSON.stringify(data)));
    }
    /**
     * Returns an error to be thrown when there is no row definitions present in the content.
     * \@docs-private
     * @return {?}
     */


    function getTableMissingRowDefsError() {
      return Error('Missing definitions for header, footer, and row; ' + 'cannot determine which columns should be rendered.');
    }
    /**
     * Returns an error to be thrown when the data source does not match the compatible types.
     * \@docs-private
     * @return {?}
     */


    function getTableUnknownDataSourceError() {
      return Error("Provided data source did not match an array, Observable, or DataSource");
    }
    /**
     * Returns an error to be thrown when the text column cannot find a parent table to inject.
     * \@docs-private
     * @return {?}
     */


    function getTableTextColumnMissingParentTableError() {
      return Error("Text column could not find a parent table for registration.");
    }
    /**
     * Returns an error to be thrown when a table text column doesn't have a name.
     * \@docs-private
     * @return {?}
     */


    function getTableTextColumnMissingNameError() {
      return Error("Table text column must have a name.");
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/table.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface used to provide an outlet for rows to be inserted into.
     * @record
     */


    function RowOutlet() {}

    if (false) {}
    /**
     * Provides a handle for the table to grab the view container's ng-container to insert data rows.
     * \@docs-private
     */


    var DataRowOutlet =
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    function DataRowOutlet(viewContainer, elementRef) {
      _classCallCheck(this, DataRowOutlet);

      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    };

    DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) {
      return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    DataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: DataRowOutlet,
      selectors: [["", "rowOutlet", ""]]
    });
    /** @nocollapse */

    DataRowOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DataRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[rowOutlet]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Provides a handle for the table to grab the view container's ng-container to insert the header.
     * \@docs-private
     */


    var HeaderRowOutlet =
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    function HeaderRowOutlet(viewContainer, elementRef) {
      _classCallCheck(this, HeaderRowOutlet);

      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    };

    HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) {
      return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    HeaderRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: HeaderRowOutlet,
      selectors: [["", "headerRowOutlet", ""]]
    });
    /** @nocollapse */

    HeaderRowOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HeaderRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[headerRowOutlet]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Provides a handle for the table to grab the view container's ng-container to insert the footer.
     * \@docs-private
     */


    var FooterRowOutlet =
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    function FooterRowOutlet(viewContainer, elementRef) {
      _classCallCheck(this, FooterRowOutlet);

      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    };

    FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) {
      return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    FooterRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: FooterRowOutlet,
      selectors: [["", "footerRowOutlet", ""]]
    });
    /** @nocollapse */

    FooterRowOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FooterRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[footerRowOutlet]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * The table template that can be used by the mat-table. Should not be used outside of the
     * material library.
     * \@docs-private
     * @type {?}
     */


    var CDK_TABLE_TEMPLATE = // Note that according to MDN, the `caption` element has to be projected as the **first**
    // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
    "\n  <ng-content select=\"caption\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
    /**
     * Interface used to conveniently type the possible context interfaces for the render row.
     * \@docs-private
     * @record
     * @template T
     */

    function RowContext() {}
    /**
     * Class used to conveniently type the embedded view ref for rows with a context.
     * \@docs-private
     * @abstract
     * @template T
     */


    var RowViewRef =
    /*#__PURE__*/
    function (_angular_core__WEBPAC) {
      _inherits(RowViewRef, _angular_core__WEBPAC);

      var _super11 = _createSuper(RowViewRef);

      function RowViewRef() {
        _classCallCheck(this, RowViewRef);

        return _super11.apply(this, arguments);
      }

      return RowViewRef;
    }(_angular_core__WEBPACK_IMPORTED_MODULE_3__["EmbeddedViewRef"]);
    /**
     * Set of properties that represents the identity of a single rendered row.
     *
     * When the table needs to determine the list of rows to render, it will do so by iterating through
     * each data object and evaluating its list of row templates to display (when multiTemplateDataRows
     * is false, there is only one template per data object). For each pair of data object and row
     * template, a `RenderRow` is added to the list of rows to render. If the data object and row
     * template pair has already been rendered, the previously used `RenderRow` is added; else a new
     * `RenderRow` is * created. Once the list is complete and all data objects have been itereated
     * through, a diff is performed to determine the changes that need to be made to the rendered rows.
     *
     * \@docs-private
     * @record
     * @template T
     */


    function RenderRow() {}

    if (false) {}
    /**
     * A data table that can render a header row, data rows, and a footer row.
     * Uses the dataSource input to determine the data to be rendered. The data can be provided either
     * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
     * connect function that will return an Observable stream that emits the data array to render.
     * @template T
     */


    var CdkTable =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _differs
       * @param {?} _changeDetectorRef
       * @param {?} _elementRef
       * @param {?} role
       * @param {?} _dir
       * @param {?} _document
       * @param {?} _platform
       */
      function CdkTable(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform) {
        _classCallCheck(this, CdkTable);

        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this._platform = _platform;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Map of all the user's defined columns (header, data, and footer cell template) identified by
         * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
         * any custom column definitions added to `_customColumnDefs`.
         */

        this._columnDefsByName = new Map();
        /**
         * Column definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * column definitions as *its* content child.
         */

        this._customColumnDefs = new Set();
        /**
         * Data row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in data rows as *its* content child.
         */

        this._customRowDefs = new Set();
        /**
         * Header row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in header rows as *its* content child.
         */

        this._customHeaderRowDefs = new Set();
        /**
         * Footer row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
         * built-in footer row as *its* content child.
         */

        this._customFooterRowDefs = new Set();
        /**
         * Whether the header row definition has been changed. Triggers an update to the header row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */

        this._headerRowDefChanged = true;
        /**
         * Whether the footer row definition has been changed. Triggers an update to the footer row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */

        this._footerRowDefChanged = true;
        /**
         * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
         * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
         * the cached `RenderRow` objects when possible, the row identity is preserved when the data
         * and row template matches, which allows the `IterableDiffer` to check rows by reference
         * and understand which rows are added/moved/removed.
         *
         * Implemented as a map of maps where the first key is the `data: T` object and the second is the
         * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
         * contains an array of created pairs. The array is necessary to handle cases where the data
         * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
         * stored.
         */

        this._cachedRenderRowsMap = new Map();
        /**
         * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
         * table subclasses.
         */

        this.stickyCssClass = 'cdk-table-sticky';
        this._multiTemplateDataRows = false; // TODO(andrewseguin): Remove max value as the end index
        //   and instead calculate the view on init and scroll.

        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         *
         * \@docs-private
         */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({
          start: 0,
          end: Number.MAX_VALUE
        });

        if (!role) {
          this._elementRef.nativeElement.setAttribute('role', 'grid');
        }

        this._document = _document;
        this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
      }
      /**
       * Tracking function that will be used to check the differences in data changes. Used similarly
       * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
       * relative to the function to know if a row should be added/removed/moved.
       * Accepts a function that takes two parameters, `index` and `item`.
       * @return {?}
       */


      _createClass(CdkTable, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this6 = this;

          this._setupStickyStyler();

          if (this._isNativeHtmlTable) {
            this._applyNativeTableSections();
          } // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
          // the user has provided a custom trackBy, return the result of that function as evaluated
          // with the values of the `RenderRow`'s data and index.


          this._dataDiffer = this._differs.find([]).create(
          /**
          * @param {?} _i
          * @param {?} dataRow
          * @return {?}
          */
          function (_i, dataRow) {
            return _this6.trackBy ? _this6.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
          this._cacheRowDefs();

          this._cacheColumnDefs(); // Make sure that the user has at least added header, footer, or data row def.


          if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
            throw getTableMissingRowDefsError();
          } // Render updates if the list of columns have been changed for the header, row, or footer defs.


          this._renderUpdatedColumns(); // If the header row definition has been changed, trigger a render to the header row.


          if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();

            this._headerRowDefChanged = false;
          } // If the footer row definition has been changed, trigger a render to the footer row.


          if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();

            this._footerRowDefChanged = false;
          } // If there is a data source and row definitions, connect to the data source unless a
          // connection has already been made.


          if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
          }

          this._checkStickyStates();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._rowOutlet.viewContainer.clear();

          this._headerRowOutlet.viewContainer.clear();

          this._footerRowOutlet.viewContainer.clear();

          this._cachedRenderRowsMap.clear();

          this._onDestroy.next();

          this._onDestroy.complete();

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
          }
        }
        /**
         * Renders rows based on the table's latest set of data, which was either provided directly as an
         * input or retrieved through an Observable stream (directly or from a DataSource).
         * Checks for differences in the data since the last diff to perform only the necessary
         * changes (add/remove/move rows).
         *
         * If the table's data source is a DataSource or Observable, this will be invoked automatically
         * each time the provided Observable stream emits a new data array. Otherwise if your data is
         * an array, this function will need to be called to render any changes.
         * @return {?}
         */

      }, {
        key: "renderRows",
        value: function renderRows() {
          var _this7 = this;

          this._renderRows = this._getAllRenderRows();
          /** @type {?} */

          var changes = this._dataDiffer.diff(this._renderRows);

          if (!changes) {
            return;
          }
          /** @type {?} */


          var viewContainer = this._rowOutlet.viewContainer;
          changes.forEachOperation(
          /**
          * @param {?} record
          * @param {?} prevIndex
          * @param {?} currentIndex
          * @return {?}
          */
          function (record, prevIndex, currentIndex) {
            if (record.previousIndex == null) {
              _this7._insertRow(record.item,
              /** @type {?} */
              currentIndex);
            } else if (currentIndex == null) {
              viewContainer.remove(
              /** @type {?} */
              prevIndex);
            } else {
              /** @type {?} */
              var view =
              /** @type {?} */
              viewContainer.get(
              /** @type {?} */
              prevIndex);
              viewContainer.move(
              /** @type {?} */
              view, currentIndex);
            }
          }); // Update the meta context of a row's context data (index, count, first, last, ...)

          this._updateRowIndexContext(); // Update rows that did not get added/removed/moved but may have had their identity changed,
          // e.g. if trackBy matched data on some property but the actual data reference changed.


          changes.forEachIdentityChange(
          /**
          * @param {?} record
          * @return {?}
          */
          function (record) {
            /** @type {?} */
            var rowView =
            /** @type {?} */
            viewContainer.get(
            /** @type {?} */
            record.currentIndex);
            rowView.context.$implicit = record.item.data;
          });
          this.updateStickyColumnStyles();
        }
        /**
         * Sets the header row definition to be used. Overrides the header row definition gathered by
         * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
         * table's content is checked.
         * \@docs-private
         * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
         * \@breaking-change 8.0.0
         * @param {?} headerRowDef
         * @return {?}
         */

      }, {
        key: "setHeaderRowDef",
        value: function setHeaderRowDef(headerRowDef) {
          this._customHeaderRowDefs = new Set([headerRowDef]);
          this._headerRowDefChanged = true;
        }
        /**
         * Sets the footer row definition to be used. Overrides the footer row definition gathered by
         * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
         * table's content is checked.
         * \@docs-private
         * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
         * \@breaking-change 8.0.0
         * @param {?} footerRowDef
         * @return {?}
         */

      }, {
        key: "setFooterRowDef",
        value: function setFooterRowDef(footerRowDef) {
          this._customFooterRowDefs = new Set([footerRowDef]);
          this._footerRowDefChanged = true;
        }
        /**
         * Adds a column definition that was not included as part of the content children.
         * @param {?} columnDef
         * @return {?}
         */

      }, {
        key: "addColumnDef",
        value: function addColumnDef(columnDef) {
          this._customColumnDefs.add(columnDef);
        }
        /**
         * Removes a column definition that was not included as part of the content children.
         * @param {?} columnDef
         * @return {?}
         */

      }, {
        key: "removeColumnDef",
        value: function removeColumnDef(columnDef) {
          this._customColumnDefs["delete"](columnDef);
        }
        /**
         * Adds a row definition that was not included as part of the content children.
         * @param {?} rowDef
         * @return {?}
         */

      }, {
        key: "addRowDef",
        value: function addRowDef(rowDef) {
          this._customRowDefs.add(rowDef);
        }
        /**
         * Removes a row definition that was not included as part of the content children.
         * @param {?} rowDef
         * @return {?}
         */

      }, {
        key: "removeRowDef",
        value: function removeRowDef(rowDef) {
          this._customRowDefs["delete"](rowDef);
        }
        /**
         * Adds a header row definition that was not included as part of the content children.
         * @param {?} headerRowDef
         * @return {?}
         */

      }, {
        key: "addHeaderRowDef",
        value: function addHeaderRowDef(headerRowDef) {
          this._customHeaderRowDefs.add(headerRowDef);

          this._headerRowDefChanged = true;
        }
        /**
         * Removes a header row definition that was not included as part of the content children.
         * @param {?} headerRowDef
         * @return {?}
         */

      }, {
        key: "removeHeaderRowDef",
        value: function removeHeaderRowDef(headerRowDef) {
          this._customHeaderRowDefs["delete"](headerRowDef);

          this._headerRowDefChanged = true;
        }
        /**
         * Adds a footer row definition that was not included as part of the content children.
         * @param {?} footerRowDef
         * @return {?}
         */

      }, {
        key: "addFooterRowDef",
        value: function addFooterRowDef(footerRowDef) {
          this._customFooterRowDefs.add(footerRowDef);

          this._footerRowDefChanged = true;
        }
        /**
         * Removes a footer row definition that was not included as part of the content children.
         * @param {?} footerRowDef
         * @return {?}
         */

      }, {
        key: "removeFooterRowDef",
        value: function removeFooterRowDef(footerRowDef) {
          this._customFooterRowDefs["delete"](footerRowDef);

          this._footerRowDefChanged = true;
        }
        /**
         * Updates the header sticky styles. First resets all applied styles with respect to the cells
         * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
         * automatically called when the header row changes its displayed set of columns, or if its
         * sticky input changes. May be called manually for cases where the cell content changes outside
         * of these events.
         * @return {?}
         */

      }, {
        key: "updateStickyHeaderRowStyles",
        value: function updateStickyHeaderRowStyles() {
          /** @type {?} */
          var headerRows = this._getRenderedRows(this._headerRowOutlet);
          /** @type {?} */


          var tableElement =
          /** @type {?} */
          this._elementRef.nativeElement; // Hide the thead element if there are no header rows. This is necessary to satisfy
          // overzealous a11y checkers that fail because the `rowgroup` element does not contain
          // required child `row`.

          /** @type {?} */

          var thead = tableElement.querySelector('thead');

          if (thead) {
            thead.style.display = headerRows.length ? '' : 'none';
          }
          /** @type {?} */


          var stickyStates = this._headerRowDefs.map(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.sticky;
          });

          this._stickyStyler.clearStickyPositioning(headerRows, ['top']);

          this._stickyStyler.stickRows(headerRows, stickyStates, 'top'); // Reset the dirty state of the sticky input change since it has been used.


          this._headerRowDefs.forEach(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.resetStickyChanged();
          });
        }
        /**
         * Updates the footer sticky styles. First resets all applied styles with respect to the cells
         * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
         * automatically called when the footer row changes its displayed set of columns, or if its
         * sticky input changes. May be called manually for cases where the cell content changes outside
         * of these events.
         * @return {?}
         */

      }, {
        key: "updateStickyFooterRowStyles",
        value: function updateStickyFooterRowStyles() {
          /** @type {?} */
          var footerRows = this._getRenderedRows(this._footerRowOutlet);
          /** @type {?} */


          var tableElement =
          /** @type {?} */
          this._elementRef.nativeElement; // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
          // overzealous a11y checkers that fail because the `rowgroup` element does not contain
          // required child `row`.

          /** @type {?} */

          var tfoot = tableElement.querySelector('tfoot');

          if (tfoot) {
            tfoot.style.display = footerRows.length ? '' : 'none';
          }
          /** @type {?} */


          var stickyStates = this._footerRowDefs.map(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.sticky;
          });

          this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);

          this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');

          this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates); // Reset the dirty state of the sticky input change since it has been used.


          this._footerRowDefs.forEach(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.resetStickyChanged();
          });
        }
        /**
         * Updates the column sticky styles. First resets all applied styles with respect to the cells
         * sticking to the left and right. Then sticky styles are added for the left and right according
         * to the column definitions for each cell in each row. This is automatically called when
         * the data source provides a new set of data or when a column definition changes its sticky
         * input. May be called manually for cases where the cell content changes outside of these events.
         * @return {?}
         */

      }, {
        key: "updateStickyColumnStyles",
        value: function updateStickyColumnStyles() {
          var _this8 = this;

          /** @type {?} */
          var headerRows = this._getRenderedRows(this._headerRowOutlet);
          /** @type {?} */


          var dataRows = this._getRenderedRows(this._rowOutlet);
          /** @type {?} */


          var footerRows = this._getRenderedRows(this._footerRowOutlet); // Clear the left and right positioning from all columns in the table across all rows since
          // sticky columns span across all table sections (header, data, footer)


          this._stickyStyler.clearStickyPositioning([].concat(_toConsumableArray(headerRows), _toConsumableArray(dataRows), _toConsumableArray(footerRows)), ['left', 'right']); // Update the sticky styles for each header row depending on the def's sticky state


          headerRows.forEach(
          /**
          * @param {?} headerRow
          * @param {?} i
          * @return {?}
          */
          function (headerRow, i) {
            _this8._addStickyColumnStyles([headerRow], _this8._headerRowDefs[i]);
          }); // Update the sticky styles for each data row depending on its def's sticky state

          this._rowDefs.forEach(
          /**
          * @param {?} rowDef
          * @return {?}
          */
          function (rowDef) {
            // Collect all the rows rendered with this row definition.

            /** @type {?} */
            var rows = [];

            for (var i = 0; i < dataRows.length; i++) {
              if (_this8._renderRows[i].rowDef === rowDef) {
                rows.push(dataRows[i]);
              }
            }

            _this8._addStickyColumnStyles(rows, rowDef);
          }); // Update the sticky styles for each footer row depending on the def's sticky state


          footerRows.forEach(
          /**
          * @param {?} footerRow
          * @param {?} i
          * @return {?}
          */
          function (footerRow, i) {
            _this8._addStickyColumnStyles([footerRow], _this8._footerRowDefs[i]);
          }); // Reset the dirty state of the sticky input change since it has been used.

          Array.from(this._columnDefsByName.values()).forEach(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.resetStickyChanged();
          });
        }
        /**
         * Get the list of RenderRow objects to render according to the current list of data and defined
         * row definitions. If the previous list already contained a particular pair, it should be reused
         * so that the differ equates their references.
         * @private
         * @return {?}
         */

      }, {
        key: "_getAllRenderRows",
        value: function _getAllRenderRows() {
          /** @type {?} */
          var renderRows = []; // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
          // new cache while unused ones can be picked up by garbage collection.

          /** @type {?} */

          var prevCachedRenderRows = this._cachedRenderRowsMap;
          this._cachedRenderRowsMap = new Map(); // For each data object, get the list of rows that should be rendered, represented by the
          // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.

          for (var i = 0; i < this._data.length; i++) {
            /** @type {?} */
            var data = this._data[i];
            /** @type {?} */

            var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));

            if (!this._cachedRenderRowsMap.has(data)) {
              this._cachedRenderRowsMap.set(data, new WeakMap());
            }

            for (var j = 0; j < renderRowsForData.length; j++) {
              /** @type {?} */
              var renderRow = renderRowsForData[j];
              /** @type {?} */

              var cache =
              /** @type {?} */
              this._cachedRenderRowsMap.get(renderRow.data);

              if (cache.has(renderRow.rowDef)) {
                /** @type {?} */
                cache.get(renderRow.rowDef).push(renderRow);
              } else {
                cache.set(renderRow.rowDef, [renderRow]);
              }

              renderRows.push(renderRow);
            }
          }

          return renderRows;
        }
        /**
         * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
         * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
         * `(T, CdkRowDef)` pair.
         * @private
         * @param {?} data
         * @param {?} dataIndex
         * @param {?=} cache
         * @return {?}
         */

      }, {
        key: "_getRenderRowsForData",
        value: function _getRenderRowsForData(data, dataIndex, cache) {
          /** @type {?} */
          var rowDefs = this._getRowDefs(data, dataIndex);

          return rowDefs.map(
          /**
          * @param {?} rowDef
          * @return {?}
          */
          function (rowDef) {
            /** @type {?} */
            var cachedRenderRows = cache && cache.has(rowDef) ?
            /** @type {?} */
            cache.get(rowDef) : [];

            if (cachedRenderRows.length) {
              /** @type {?} */
              var dataRow =
              /** @type {?} */
              cachedRenderRows.shift();
              dataRow.dataIndex = dataIndex;
              return dataRow;
            } else {
              return {
                data: data,
                rowDef: rowDef,
                dataIndex: dataIndex
              };
            }
          });
        }
        /**
         * Update the map containing the content's column definitions.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheColumnDefs",
        value: function _cacheColumnDefs() {
          var _this9 = this;

          this._columnDefsByName.clear();
          /** @type {?} */


          var columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
          columnDefs.forEach(
          /**
          * @param {?} columnDef
          * @return {?}
          */
          function (columnDef) {
            if (_this9._columnDefsByName.has(columnDef.name)) {
              throw getTableDuplicateColumnNameError(columnDef.name);
            }

            _this9._columnDefsByName.set(columnDef.name, columnDef);
          });
        }
        /**
         * Update the list of all available row definitions that can be used.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheRowDefs",
        value: function _cacheRowDefs() {
          this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
          this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
          this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs); // After all row definitions are determined, find the row definition to be considered default.

          /** @type {?} */

          var defaultRowDefs = this._rowDefs.filter(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return !def.when;
          });

          if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
            throw getTableMultipleDefaultRowDefsError();
          }

          this._defaultRowDef = defaultRowDefs[0];
        }
        /**
         * Check if the header, data, or footer rows have changed what columns they want to display or
         * whether the sticky states have changed for the header or footer. If there is a diff, then
         * re-render that section.
         * @private
         * @return {?}
         */

      }, {
        key: "_renderUpdatedColumns",
        value: function _renderUpdatedColumns() {
          /** @type {?} */
          var columnsDiffReducer =
          /**
          * @param {?} acc
          * @param {?} def
          * @return {?}
          */
          function columnsDiffReducer(acc, def) {
            return acc || !!def.getColumnsDiff();
          }; // Force re-render data rows if the list of column definitions have changed.


          if (this._rowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderDataRows();
          } // Force re-render header/footer rows if the list of column definitions have changed..


          if (this._headerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderHeaderRows();
          }

          if (this._footerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderFooterRows();
          }
        }
        /**
         * Switch to the provided data source by resetting the data and unsubscribing from the current
         * render change subscription if one exists. If the data source is null, interpret this by
         * clearing the row outlet. Otherwise start listening for new data.
         * @private
         * @param {?} dataSource
         * @return {?}
         */

      }, {
        key: "_switchDataSource",
        value: function _switchDataSource(dataSource) {
          this._data = [];

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
          } // Stop listening for data from the previous data source.


          if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();

            this._renderChangeSubscription = null;
          }

          if (!dataSource) {
            if (this._dataDiffer) {
              this._dataDiffer.diff([]);
            }

            this._rowOutlet.viewContainer.clear();
          }

          this._dataSource = dataSource;
        }
        /**
         * Set up a subscription for the data provided by the data source.
         * @private
         * @return {?}
         */

      }, {
        key: "_observeRenderChanges",
        value: function _observeRenderChanges() {
          var _this10 = this;

          // If no data source has been set, there is nothing to observe for changes.
          if (!this.dataSource) {
            return;
          }
          /** @type {?} */


          var dataStream;

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            dataStream = this.dataSource.connect(this);
          } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(this.dataSource)) {
            dataStream = this.dataSource;
          } else if (Array.isArray(this.dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.dataSource);
          }

          if (dataStream === undefined) {
            throw getTableUnknownDataSourceError();
          }

          this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this10._data = data || [];

            _this10.renderRows();
          });
        }
        /**
         * Clears any existing content in the header row outlet and creates a new embedded view
         * in the outlet using the header row definition.
         * @private
         * @return {?}
         */

      }, {
        key: "_forceRenderHeaderRows",
        value: function _forceRenderHeaderRows() {
          var _this11 = this;

          // Clear the header row outlet if any content exists.
          if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
          }

          this._headerRowDefs.forEach(
          /**
          * @param {?} def
          * @param {?} i
          * @return {?}
          */
          function (def, i) {
            return _this11._renderRow(_this11._headerRowOutlet, def, i);
          });

          this.updateStickyHeaderRowStyles();
          this.updateStickyColumnStyles();
        }
        /**
         * Clears any existing content in the footer row outlet and creates a new embedded view
         * in the outlet using the footer row definition.
         * @private
         * @return {?}
         */

      }, {
        key: "_forceRenderFooterRows",
        value: function _forceRenderFooterRows() {
          var _this12 = this;

          // Clear the footer row outlet if any content exists.
          if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
          }

          this._footerRowDefs.forEach(
          /**
          * @param {?} def
          * @param {?} i
          * @return {?}
          */
          function (def, i) {
            return _this12._renderRow(_this12._footerRowOutlet, def, i);
          });

          this.updateStickyFooterRowStyles();
          this.updateStickyColumnStyles();
        }
        /**
         * Adds the sticky column styles for the rows according to the columns' stick states.
         * @private
         * @param {?} rows
         * @param {?} rowDef
         * @return {?}
         */

      }, {
        key: "_addStickyColumnStyles",
        value: function _addStickyColumnStyles(rows, rowDef) {
          var _this13 = this;

          /** @type {?} */
          var columnDefs = Array.from(rowDef.columns || []).map(
          /**
          * @param {?} columnName
          * @return {?}
          */
          function (columnName) {
            /** @type {?} */
            var columnDef = _this13._columnDefsByName.get(columnName);

            if (!columnDef) {
              throw getTableUnknownColumnError(columnName);
            }

            return (
              /** @type {?} */
              columnDef
            );
          });
          /** @type {?} */

          var stickyStartStates = columnDefs.map(
          /**
          * @param {?} columnDef
          * @return {?}
          */
          function (columnDef) {
            return columnDef.sticky;
          });
          /** @type {?} */

          var stickyEndStates = columnDefs.map(
          /**
          * @param {?} columnDef
          * @return {?}
          */
          function (columnDef) {
            return columnDef.stickyEnd;
          });

          this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
        }
        /**
         * Gets the list of rows that have been rendered in the row outlet.
         * @param {?} rowOutlet
         * @return {?}
         */

      }, {
        key: "_getRenderedRows",
        value: function _getRenderedRows(rowOutlet) {
          /** @type {?} */
          var renderedRows = [];

          for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
            /** @type {?} */
            var viewRef =
            /** @type {?} */

            /** @type {?} */
            rowOutlet.viewContainer.get(i);
            renderedRows.push(viewRef.rootNodes[0]);
          }

          return renderedRows;
        }
        /**
         * Get the matching row definitions that should be used for this row data. If there is only
         * one row definition, it is returned. Otherwise, find the row definitions that has a when
         * predicate that returns true with the data. If none return true, return the default row
         * definition.
         * @param {?} data
         * @param {?} dataIndex
         * @return {?}
         */

      }, {
        key: "_getRowDefs",
        value: function _getRowDefs(data, dataIndex) {
          if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
          }
          /** @type {?} */


          var rowDefs = [];

          if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter(
            /**
            * @param {?} def
            * @return {?}
            */
            function (def) {
              return !def.when || def.when(dataIndex, data);
            });
          } else {
            /** @type {?} */
            var rowDef = this._rowDefs.find(
            /**
            * @param {?} def
            * @return {?}
            */
            function (def) {
              return def.when && def.when(dataIndex, data);
            }) || this._defaultRowDef;

            if (rowDef) {
              rowDefs.push(rowDef);
            }
          }

          if (!rowDefs.length) {
            throw getTableMissingMatchingRowDefError(data);
          }

          return rowDefs;
        }
        /**
         * Create the embedded view for the data row template and place it in the correct index location
         * within the data row view container.
         * @private
         * @param {?} renderRow
         * @param {?} renderIndex
         * @return {?}
         */

      }, {
        key: "_insertRow",
        value: function _insertRow(renderRow, renderIndex) {
          /** @type {?} */
          var rowDef = renderRow.rowDef;
          /** @type {?} */

          var context = {
            $implicit: renderRow.data
          };

          this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
        }
        /**
         * Creates a new row template in the outlet and fills it with the set of cell templates.
         * Optionally takes a context to provide to the row and cells, as well as an optional index
         * of where to place the new row template in the outlet.
         * @private
         * @param {?} outlet
         * @param {?} rowDef
         * @param {?} index
         * @param {?=} context
         * @return {?}
         */

      }, {
        key: "_renderRow",
        value: function _renderRow(outlet, rowDef, index) {
          var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
          outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);

          var _iterator5 = _createForOfIteratorHelper(this._getCellTemplates(rowDef)),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var cellTemplate = _step5.value;

              if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Updates the index-related context for each row to reflect any changes in the index of the rows,
         * e.g. first/last/even/odd.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRowIndexContext",
        value: function _updateRowIndexContext() {
          /** @type {?} */
          var viewContainer = this._rowOutlet.viewContainer;

          for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            var viewRef =
            /** @type {?} */
            viewContainer.get(renderIndex);
            /** @type {?} */

            var context =
            /** @type {?} */
            viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;

            if (this.multiTemplateDataRows) {
              context.dataIndex = this._renderRows[renderIndex].dataIndex;
              context.renderIndex = renderIndex;
            } else {
              context.index = this._renderRows[renderIndex].dataIndex;
            }
          }
        }
        /**
         * Gets the column definitions for the provided row def.
         * @private
         * @param {?} rowDef
         * @return {?}
         */

      }, {
        key: "_getCellTemplates",
        value: function _getCellTemplates(rowDef) {
          var _this14 = this;

          if (!rowDef || !rowDef.columns) {
            return [];
          }

          return Array.from(rowDef.columns,
          /**
          * @param {?} columnId
          * @return {?}
          */
          function (columnId) {
            /** @type {?} */
            var column = _this14._columnDefsByName.get(columnId);

            if (!column) {
              throw getTableUnknownColumnError(columnId);
            }

            return rowDef.extractCellTemplate(column);
          });
        }
        /**
         * Adds native table sections (e.g. tbody) and moves the row outlets into them.
         * @private
         * @return {?}
         */

      }, {
        key: "_applyNativeTableSections",
        value: function _applyNativeTableSections() {
          /** @type {?} */
          var documentFragment = this._document.createDocumentFragment();
          /** @type {?} */


          var sections = [{
            tag: 'thead',
            outlet: this._headerRowOutlet
          }, {
            tag: 'tbody',
            outlet: this._rowOutlet
          }, {
            tag: 'tfoot',
            outlet: this._footerRowOutlet
          }];

          for (var _i2 = 0, _sections = sections; _i2 < _sections.length; _i2++) {
            var section = _sections[_i2];

            /** @type {?} */
            var element = this._document.createElement(section.tag);

            element.setAttribute('role', 'rowgroup');
            element.appendChild(section.outlet.elementRef.nativeElement);
            documentFragment.appendChild(element);
          } // Use a DocumentFragment so we don't hit the DOM on each iteration.


          this._elementRef.nativeElement.appendChild(documentFragment);
        }
        /**
         * Forces a re-render of the data rows. Should be called in cases where there has been an input
         * change that affects the evaluation of which rows should be rendered, e.g. toggling
         * `multiTemplateDataRows` or adding/removing row definitions.
         * @private
         * @return {?}
         */

      }, {
        key: "_forceRenderDataRows",
        value: function _forceRenderDataRows() {
          this._dataDiffer.diff([]);

          this._rowOutlet.viewContainer.clear();

          this.renderRows();
          this.updateStickyColumnStyles();
        }
        /**
         * Checks if there has been a change in sticky states since last check and applies the correct
         * sticky styles. Since checking resets the "dirty" state, this should only be performed once
         * during a change detection and after the inputs are settled (after content check).
         * @private
         * @return {?}
         */

      }, {
        key: "_checkStickyStates",
        value: function _checkStickyStates() {
          /** @type {?} */
          var stickyCheckReducer =
          /**
          * @param {?} acc
          * @param {?} d
          * @return {?}
          */
          function stickyCheckReducer(acc, d) {
            return acc || d.hasStickyChanged();
          }; // Note that the check needs to occur for every definition since it notifies the definition
          // that it can reset its dirty state. Using another operator like `some` may short-circuit
          // remaining definitions and leave them in an unchecked state.


          if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyHeaderRowStyles();
          }

          if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyFooterRowStyles();
          }

          if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
            this.updateStickyColumnStyles();
          }
        }
        /**
         * Creates the sticky styler that will be used for sticky rows and columns. Listens
         * for directionality changes and provides the latest direction to the styler. Re-applies column
         * stickiness when directionality changes.
         * @private
         * @return {?}
         */

      }, {
        key: "_setupStickyStyler",
        value: function _setupStickyStyler() {
          var _this15 = this;

          /** @type {?} */
          var direction = this._dir ? this._dir.value : 'ltr';
          this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._platform.isBrowser);
          (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            _this15._stickyStyler.direction = value;

            _this15.updateStickyColumnStyles();
          });
        }
        /**
         * Filters definitions that belong to this table from a QueryList.
         * @private
         * @template I
         * @param {?} items
         * @return {?}
         */

      }, {
        key: "_getOwnDefs",
        value: function _getOwnDefs(items) {
          var _this16 = this;

          return items.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return !item._table || item._table === _this16;
          });
        }
      }, {
        key: "trackBy",
        get: function get() {
          return this._trackByFn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && fn != null && typeof fn !== 'function' &&
          /** @type {?} */
          console &&
          /** @type {?} */
          console.warn) {
            console.warn("trackBy must be a function, but received ".concat(JSON.stringify(fn), "."));
          }

          this._trackByFn = fn;
        }
        /**
         * The table's source of data, which can be provided in three ways (in order of complexity):
         *   - Simple data array (each object represents one table row)
         *   - Stream that emits a data array each time the array changes
         *   - `DataSource` object that implements the connect/disconnect interface.
         *
         * If a data array is provided, the table must be notified when the array's objects are
         * added, removed, or moved. This can be done by calling the `renderRows()` function which will
         * render the diff since the last table render. If the data array reference is changed, the table
         * will automatically trigger an update to the rows.
         *
         * When providing an Observable stream, the table will trigger an update automatically when the
         * stream emits a new array of data.
         *
         * Finally, when providing a `DataSource` object, the table will use the Observable stream
         * provided by the connect function and trigger updates when that stream emits new data array
         * values. During the table's ngOnDestroy or when the data source is removed from the table, the
         * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
         * subscriptions registered during the connect process).
         * @return {?}
         */

      }, {
        key: "dataSource",
        get: function get() {
          return this._dataSource;
        }
        /**
         * @param {?} dataSource
         * @return {?}
         */
        ,
        set: function set(dataSource) {
          if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
          }
        }
        /**
         * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
         * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
         * dataobject will render the first row that evaluates its when predicate to true, in the order
         * defined in the table, or otherwise the default row which does not have a when predicate.
         * @return {?}
         */

      }, {
        key: "multiTemplateDataRows",
        get: function get() {
          return this._multiTemplateDataRows;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v); // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
          // this setter will be invoked before the row outlet has been defined hence the null check.

          if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
            this._forceRenderDataRows();
          }
        }
      }]);

      return CdkTable;
    }();

    CdkTable.ɵfac = function CdkTable_Factory(t) {
      return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]));
    };

    CdkTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CdkTable,
      selectors: [["cdk-table"], ["table", "cdk-table", ""]],
      contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkRowDef, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
        }
      },
      viewQuery: function CdkTable_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](DataRowOutlet, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](HeaderRowOutlet, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](FooterRowOutlet, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
        }
      },
      hostAttrs: [1, "cdk-table"],
      inputs: {
        trackBy: "trackBy",
        dataSource: "dataSource",
        multiTemplateDataRows: "multiTemplateDataRows"
      },
      exportAs: ["cdkTable"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: CDK_TABLE,
        useExisting: CdkTable
      }])],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 0,
      consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["footerRowOutlet", ""]],
      template: function CdkTable_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](3, 2);
        }
      },
      directives: [HeaderRowOutlet, DataRowOutlet, FooterRowOutlet],
      encapsulation: 2
    });
    /** @nocollapse */

    CdkTable.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
          args: ['role']
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    CdkTable.propDecorators = {
      trackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dataSource: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      multiTemplateDataRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      _rowOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [DataRowOutlet, {
          "static": true
        }]
      }],
      _headerRowOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [HeaderRowOutlet, {
          "static": true
        }]
      }],
      _footerRowOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [FooterRowOutlet, {
          "static": true
        }]
      }],
      _contentColumnDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkColumnDef, {
          descendants: true
        }]
      }],
      _contentRowDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkRowDef, {
          descendants: true
        }]
      }],
      _contentHeaderRowDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkHeaderRowDef, {
          descendants: true
        }]
      }],
      _contentFooterRowDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkFooterRowDef, {
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'cdk-table, table[cdk-table]',
          exportAs: 'cdkTable',
          template: CDK_TABLE_TEMPLATE,
          host: {
            'class': 'cdk-table'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
          // The view for `MatTable` consists entirely of templates declared in other views. As they are
          // declared elsewhere, they are checked when their declaration points are checked.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
          providers: [{
            provide: CDK_TABLE,
            useExisting: CdkTable
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
            args: ['role']
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      }, {
        trackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dataSource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        multiTemplateDataRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _rowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [DataRowOutlet, {
            "static": true
          }]
        }],
        _headerRowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [HeaderRowOutlet, {
            "static": true
          }]
        }],
        _footerRowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [FooterRowOutlet, {
            "static": true
          }]
        }],
        _contentColumnDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkColumnDef, {
            descendants: true
          }]
        }],
        _contentRowDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkRowDef, {
            descendants: true
          }]
        }],
        _contentHeaderRowDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkHeaderRowDef, {
            descendants: true
          }]
        }],
        _contentFooterRowDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkFooterRowDef, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * Utility function that gets a merged list of the entries in an array and values of a Set.
     * @template T
     * @param {?} array
     * @param {?} set
     * @return {?}
     */


    function mergeArrayAndSet(array, set) {
      return array.concat(Array.from(set));
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/text-column.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Column that simply shows text content for the header and row cells. Assumes that the table
     * is using the native table implementation (`<table>`).
     *
     * By default, the name of this column will be the header text and data property accessor.
     * The header text can be overridden with the `headerText` input. Cell values can be overridden with
     * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
     * input.
     * @template T
     */


    var CdkTextColumn =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _table
       * @param {?} _options
       */
      function CdkTextColumn(_table, _options) {
        _classCallCheck(this, CdkTextColumn);

        this._table = _table;
        this._options = _options;
        /**
         * Alignment of the cell values.
         */

        this.justify = 'start';
        this._options = _options || {};
      }
      /**
       * Column name that should be used to reference this column.
       * @return {?}
       */


      _createClass(CdkTextColumn, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._syncColumnDefName();

          if (this.headerText === undefined) {
            this.headerText = this._createDefaultHeaderText();
          }

          if (!this.dataAccessor) {
            this.dataAccessor = this._options.defaultDataAccessor ||
            /**
            * @param {?} data
            * @param {?} name
            * @return {?}
            */
            function (data, name) {
              return (
                /** @type {?} */
                data[name]
              );
            };
          }

          if (this._table) {
            // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
            // since the columnDef will not pick up its content by the time the table finishes checking
            // its content and initializing the rows.
            this.columnDef.cell = this.cell;
            this.columnDef.headerCell = this.headerCell;

            this._table.addColumnDef(this.columnDef);
          } else {
            throw getTableTextColumnMissingParentTableError();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._table) {
            this._table.removeColumnDef(this.columnDef);
          }
        }
        /**
         * Creates a default header text. Use the options' header text transformation function if one
         * has been provided. Otherwise simply capitalize the column name.
         * @return {?}
         */

      }, {
        key: "_createDefaultHeaderText",
        value: function _createDefaultHeaderText() {
          /** @type {?} */
          var name = this.name;

          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && !name) {
            throw getTableTextColumnMissingNameError();
          }

          if (this._options && this._options.defaultHeaderTextTransform) {
            return this._options.defaultHeaderTextTransform(name);
          }

          return name[0].toUpperCase() + name.slice(1);
        }
        /**
         * Synchronizes the column definition name with the text column name.
         * @private
         * @return {?}
         */

      }, {
        key: "_syncColumnDefName",
        value: function _syncColumnDefName() {
          if (this.columnDef) {
            this.columnDef.name = this.name;
          }
        }
      }, {
        key: "name",
        get: function get() {
          return this._name;
        }
        /**
         * @param {?} name
         * @return {?}
         */
        ,
        set: function set(name) {
          this._name = name; // With Ivy, inputs can be initialized before static query results are
          // available. In that case, we defer the synchronization until "ngOnInit" fires.

          this._syncColumnDefName();
        }
      }]);

      return CdkTextColumn;
    }();

    CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) {
      return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8));
    };

    CdkTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CdkTextColumn,
      selectors: [["cdk-text-column"]],
      viewQuery: function CdkTextColumn_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkColumnDef, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkCellDef, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkHeaderCellDef, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
        }
      },
      inputs: {
        justify: "justify",
        name: "name",
        headerText: "headerText",
        dataAccessor: "dataAccessor"
      },
      decls: 3,
      vars: 0,
      consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
      template: function CdkTextColumn_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }
      },
      directives: [CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderCell, CdkCell],
      encapsulation: 2
    });
    /** @nocollapse */

    CdkTextColumn.ctorParameters = function () {
      return [{
        type: CdkTable,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [TEXT_COLUMN_OPTIONS]
        }]
      }];
    };

    CdkTextColumn.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      headerText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dataAccessor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      justify: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      columnDef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [CdkColumnDef, {
          "static": true
        }]
      }],
      cell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [CdkCellDef, {
          "static": true
        }]
      }],
      headerCell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [CdkHeaderCellDef, {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTextColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'cdk-text-column',
          template: "\n    <ng-container cdkColumnDef>\n      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td cdk-cell *cdkCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          // Change detection is intentionally not set to OnPush. This component's template will be provided
          // to the table to be inserted into its view. This is problematic when change detection runs since
          // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
          // mean's the template in the table's view will not have the updated value (and in fact will cause
          // an ExpressionChangedAfterItHasBeenCheckedError).
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
        }]
      }], function () {
        return [{
          type: CdkTable,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [TEXT_COLUMN_OPTIONS]
          }]
        }];
      }, {
        justify: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        headerText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dataAccessor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        columnDef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [CdkColumnDef, {
            "static": true
          }]
        }],
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [CdkCellDef, {
            "static": true
          }]
        }],
        headerCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [CdkHeaderCellDef, {
            "static": true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/table-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn];

    var CdkTableModule = function CdkTableModule() {
      _classCallCheck(this, CdkTableModule);
    };

    CdkTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: CdkTableModule
    });
    CdkTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function CdkTableModule_Factory(t) {
        return new (t || CdkTableModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTableModule, {
        declarations: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn],
        exports: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          exports: EXPORTED_DECLARATIONS,
          declarations: EXPORTED_DECLARATIONS
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=table.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js ***!
    \***********************************************************************/

  /*! exports provided: MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule, MatTextColumn */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015TableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCell", function () {
      return MatCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCellDef", function () {
      return MatCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatColumnDef", function () {
      return MatColumnDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFooterCell", function () {
      return MatFooterCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function () {
      return MatFooterCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFooterRow", function () {
      return MatFooterRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function () {
      return MatFooterRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function () {
      return MatHeaderCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function () {
      return MatHeaderCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function () {
      return MatHeaderRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function () {
      return MatHeaderRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRow", function () {
      return MatRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRowDef", function () {
      return MatRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTable", function () {
      return MatTable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function () {
      return MatTableDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTableModule", function () {
      return MatTableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTextColumn", function () {
      return MatTextColumn;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/table/table.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTable with Material design styles.
     * @template T
     */


    var _c0 = [[["caption"]]];
    var _c1 = ["caption"];

    function MatTextColumn_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r675 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r675.justify);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r675.headerText, " ");
      }
    }

    function MatTextColumn_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r677 = ctx.$implicit;

        var ctx_r676 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r676.justify);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r676.dataAccessor(data_r677, ctx_r676.name), " ");
      }
    }

    var MatTable =
    /*#__PURE__*/
    function (_angular_cdk_table__W) {
      _inherits(MatTable, _angular_cdk_table__W);

      var _super12 = _createSuper(MatTable);

      function MatTable() {
        var _this17;

        _classCallCheck(this, MatTable);

        _this17 = _super12.apply(this, arguments);
        /**
         * Overrides the sticky CSS class set by the `CdkTable`.
         */

        _this17.stickyCssClass = 'mat-table-sticky';
        return _this17;
      }

      return MatTable;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"]);

    MatTable.ɵfac = function MatTable_Factory(t) {
      return ɵMatTable_BaseFactory(t || MatTable);
    };

    MatTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatTable,
      selectors: [["mat-table"], ["table", "mat-table", ""]],
      hostAttrs: [1, "mat-table"],
      exportAs: ["matTable"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"],
        useExisting: MatTable
      }, {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"],
        useExisting: MatTable
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 0,
      consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["footerRowOutlet", ""]],
      template: function MatTable_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 2);
        }
      },
      directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["FooterRowOutlet"]],
      styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n"],
      encapsulation: 2
    });

    var ɵMatTable_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTable);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-table, table[mat-table]',
          exportAs: 'matTable',
          template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE_TEMPLATE"],
          host: {
            'class': 'mat-table'
          },
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"],
            useExisting: MatTable
          }, {
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"],
            useExisting: MatTable
          }],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          // See note on CdkTable for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
          styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n"]
        }]
      }], null, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/table/cell.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Cell definition for the mat-table.
     * Captures the template of a column's data row cell as well as cell-specific properties.
     */


    var MatCellDef =
    /*#__PURE__*/
    function (_angular_cdk_table__W2) {
      _inherits(MatCellDef, _angular_cdk_table__W2);

      var _super13 = _createSuper(MatCellDef);

      function MatCellDef() {
        _classCallCheck(this, MatCellDef);

        return _super13.apply(this, arguments);
      }

      return MatCellDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"]);

    MatCellDef.ɵfac = function MatCellDef_Factory(t) {
      return ɵMatCellDef_BaseFactory(t || MatCellDef);
    };

    MatCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCellDef,
      selectors: [["", "matCellDef", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"],
        useExisting: MatCellDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCellDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matCellDef]',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"],
            useExisting: MatCellDef
          }]
        }]
      }], null, null);
    })();
    /**
     * Header cell definition for the mat-table.
     * Captures the template of a column's header cell and as well as cell-specific properties.
     */


    var MatHeaderCellDef =
    /*#__PURE__*/
    function (_angular_cdk_table__W3) {
      _inherits(MatHeaderCellDef, _angular_cdk_table__W3);

      var _super14 = _createSuper(MatHeaderCellDef);

      function MatHeaderCellDef() {
        _classCallCheck(this, MatHeaderCellDef);

        return _super14.apply(this, arguments);
      }

      return MatHeaderCellDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"]);

    MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) {
      return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef);
    };

    MatHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatHeaderCellDef,
      selectors: [["", "matHeaderCellDef", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"],
        useExisting: MatHeaderCellDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatHeaderCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCellDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matHeaderCellDef]',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"],
            useExisting: MatHeaderCellDef
          }]
        }]
      }], null, null);
    })();
    /**
     * Footer cell definition for the mat-table.
     * Captures the template of a column's footer cell and as well as cell-specific properties.
     */


    var MatFooterCellDef =
    /*#__PURE__*/
    function (_angular_cdk_table__W4) {
      _inherits(MatFooterCellDef, _angular_cdk_table__W4);

      var _super15 = _createSuper(MatFooterCellDef);

      function MatFooterCellDef() {
        _classCallCheck(this, MatFooterCellDef);

        return _super15.apply(this, arguments);
      }

      return MatFooterCellDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"]);

    MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) {
      return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef);
    };

    MatFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatFooterCellDef,
      selectors: [["", "matFooterCellDef", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"],
        useExisting: MatFooterCellDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatFooterCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCellDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matFooterCellDef]',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"],
            useExisting: MatFooterCellDef
          }]
        }]
      }], null, null);
    })();
    /**
     * Column definition for the mat-table.
     * Defines a set of cells available for a table column.
     */


    var MatColumnDef =
    /*#__PURE__*/
    function (_angular_cdk_table__W5) {
      _inherits(MatColumnDef, _angular_cdk_table__W5);

      var _super16 = _createSuper(MatColumnDef);

      function MatColumnDef() {
        _classCallCheck(this, MatColumnDef);

        return _super16.apply(this, arguments);
      }

      return MatColumnDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]);

    MatColumnDef.ɵfac = function MatColumnDef_Factory(t) {
      return ɵMatColumnDef_BaseFactory(t || MatColumnDef);
    };

    MatColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatColumnDef,
      selectors: [["", "matColumnDef", ""]],
      inputs: {
        sticky: "sticky",
        name: ["matColumnDef", "name"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"],
        useExisting: MatColumnDef
      }, {
        provide: 'MAT_SORT_HEADER_COLUMN_DEF',
        useExisting: MatColumnDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    MatColumnDef.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matColumnDef']
      }]
    };

    var ɵMatColumnDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatColumnDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatColumnDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matColumnDef]',
          inputs: ['sticky'],
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"],
            useExisting: MatColumnDef
          }, {
            provide: 'MAT_SORT_HEADER_COLUMN_DEF',
            useExisting: MatColumnDef
          }]
        }]
      }], null, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matColumnDef']
        }]
      });
    })();

    if (false) {}
    /**
     * Header cell template container that adds the right classes and role.
     */


    var MatHeaderCell =
    /*#__PURE__*/
    function (_angular_cdk_table__W6) {
      _inherits(MatHeaderCell, _angular_cdk_table__W6);

      var _super17 = _createSuper(MatHeaderCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function MatHeaderCell(columnDef, elementRef) {
        var _this18;

        _classCallCheck(this, MatHeaderCell);

        _this18 = _super17.call(this, columnDef, elementRef);
        elementRef.nativeElement.classList.add("mat-column-".concat(columnDef.cssClassFriendlyName));
        return _this18;
      }

      return MatHeaderCell;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCell"]);

    MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) {
      return new (t || MatHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    MatHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatHeaderCell,
      selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
      hostAttrs: ["role", "columnheader", 1, "mat-header-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatHeaderCell.ctorParameters = function () {
      return [{
        type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-header-cell, th[mat-header-cell]',
          host: {
            'class': 'mat-header-cell',
            'role': 'columnheader'
          }
        }]
      }], function () {
        return [{
          type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * Footer cell template container that adds the right classes and role.
     */


    var MatFooterCell =
    /*#__PURE__*/
    function (_angular_cdk_table__W7) {
      _inherits(MatFooterCell, _angular_cdk_table__W7);

      var _super18 = _createSuper(MatFooterCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function MatFooterCell(columnDef, elementRef) {
        var _this19;

        _classCallCheck(this, MatFooterCell);

        _this19 = _super18.call(this, columnDef, elementRef);
        elementRef.nativeElement.classList.add("mat-column-".concat(columnDef.cssClassFriendlyName));
        return _this19;
      }

      return MatFooterCell;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCell"]);

    MatFooterCell.ɵfac = function MatFooterCell_Factory(t) {
      return new (t || MatFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    MatFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatFooterCell,
      selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
      hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatFooterCell.ctorParameters = function () {
      return [{
        type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-footer-cell, td[mat-footer-cell]',
          host: {
            'class': 'mat-footer-cell',
            'role': 'gridcell'
          }
        }]
      }], function () {
        return [{
          type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * Cell template container that adds the right classes and role.
     */


    var MatCell =
    /*#__PURE__*/
    function (_angular_cdk_table__W8) {
      _inherits(MatCell, _angular_cdk_table__W8);

      var _super19 = _createSuper(MatCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function MatCell(columnDef, elementRef) {
        var _this20;

        _classCallCheck(this, MatCell);

        _this20 = _super19.call(this, columnDef, elementRef);
        elementRef.nativeElement.classList.add("mat-column-".concat(columnDef.cssClassFriendlyName));
        return _this20;
      }

      return MatCell;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCell"]);

    MatCell.ɵfac = function MatCell_Factory(t) {
      return new (t || MatCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    MatCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCell,
      selectors: [["mat-cell"], ["td", "mat-cell", ""]],
      hostAttrs: ["role", "gridcell", 1, "mat-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatCell.ctorParameters = function () {
      return [{
        type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-cell, td[mat-cell]',
          host: {
            'class': 'mat-cell',
            'role': 'gridcell'
          }
        }]
      }], function () {
        return [{
          type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/table/row.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Header row definition for the mat-table.
     * Captures the header row's template and other header properties such as the columns to display.
     */


    var MatHeaderRowDef =
    /*#__PURE__*/
    function (_angular_cdk_table__W9) {
      _inherits(MatHeaderRowDef, _angular_cdk_table__W9);

      var _super20 = _createSuper(MatHeaderRowDef);

      function MatHeaderRowDef() {
        _classCallCheck(this, MatHeaderRowDef);

        return _super20.apply(this, arguments);
      }

      return MatHeaderRowDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"]);

    MatHeaderRowDef.ɵfac = function MatHeaderRowDef_Factory(t) {
      return ɵMatHeaderRowDef_BaseFactory(t || MatHeaderRowDef);
    };

    MatHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatHeaderRowDef,
      selectors: [["", "matHeaderRowDef", ""]],
      inputs: {
        columns: ["matHeaderRowDef", "columns"],
        sticky: ["matHeaderRowDefSticky", "sticky"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"],
        useExisting: MatHeaderRowDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatHeaderRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRowDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matHeaderRowDef]',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"],
            useExisting: MatHeaderRowDef
          }],
          inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
        }]
      }], null, null);
    })();

    if (false) {}
    /**
     * Footer row definition for the mat-table.
     * Captures the footer row's template and other footer properties such as the columns to display.
     */


    var MatFooterRowDef =
    /*#__PURE__*/
    function (_angular_cdk_table__W10) {
      _inherits(MatFooterRowDef, _angular_cdk_table__W10);

      var _super21 = _createSuper(MatFooterRowDef);

      function MatFooterRowDef() {
        _classCallCheck(this, MatFooterRowDef);

        return _super21.apply(this, arguments);
      }

      return MatFooterRowDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"]);

    MatFooterRowDef.ɵfac = function MatFooterRowDef_Factory(t) {
      return ɵMatFooterRowDef_BaseFactory(t || MatFooterRowDef);
    };

    MatFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatFooterRowDef,
      selectors: [["", "matFooterRowDef", ""]],
      inputs: {
        columns: ["matFooterRowDef", "columns"],
        sticky: ["matFooterRowDefSticky", "sticky"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"],
        useExisting: MatFooterRowDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatFooterRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRowDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matFooterRowDef]',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"],
            useExisting: MatFooterRowDef
          }],
          inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
        }]
      }], null, null);
    })();

    if (false) {}
    /**
     * Data row definition for the mat-table.
     * Captures the data row's template and other properties such as the columns to display and
     * a when predicate that describes when this row should be used.
     * @template T
     */


    var MatRowDef =
    /*#__PURE__*/
    function (_angular_cdk_table__W11) {
      _inherits(MatRowDef, _angular_cdk_table__W11);

      var _super22 = _createSuper(MatRowDef);

      function MatRowDef() {
        _classCallCheck(this, MatRowDef);

        return _super22.apply(this, arguments);
      }

      return MatRowDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"]);

    MatRowDef.ɵfac = function MatRowDef_Factory(t) {
      return ɵMatRowDef_BaseFactory(t || MatRowDef);
    };

    MatRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatRowDef,
      selectors: [["", "matRowDef", ""]],
      inputs: {
        columns: ["matRowDefColumns", "columns"],
        when: ["matRowDefWhen", "when"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"],
        useExisting: MatRowDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRowDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matRowDef]',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"],
            useExisting: MatRowDef
          }],
          inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
        }]
      }], null, null);
    })();
    /**
     * Header template container that contains the cell outlet. Adds the right class and role.
     */


    var MatHeaderRow =
    /*#__PURE__*/
    function (_angular_cdk_table__W12) {
      _inherits(MatHeaderRow, _angular_cdk_table__W12);

      var _super23 = _createSuper(MatHeaderRow);

      function MatHeaderRow() {
        _classCallCheck(this, MatHeaderRow);

        return _super23.apply(this, arguments);
      }

      return MatHeaderRow;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"]);

    MatHeaderRow.ɵfac = function MatHeaderRow_Factory(t) {
      return ɵMatHeaderRow_BaseFactory(t || MatHeaderRow);
    };

    MatHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatHeaderRow,
      selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
      hostAttrs: ["role", "row", 1, "mat-header-row"],
      exportAs: ["matHeaderRow"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"],
        useExisting: MatHeaderRow
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function MatHeaderRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]],
      encapsulation: 2
    });

    var ɵMatHeaderRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRow);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-header-row, tr[mat-header-row]',
          template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
          host: {
            'class': 'mat-header-row',
            'role': 'row'
          },
          // See note on CdkTable for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          exportAs: 'matHeaderRow',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"],
            useExisting: MatHeaderRow
          }]
        }]
      }], null, null);
    })();
    /**
     * Footer template container that contains the cell outlet. Adds the right class and role.
     */


    var MatFooterRow =
    /*#__PURE__*/
    function (_angular_cdk_table__W13) {
      _inherits(MatFooterRow, _angular_cdk_table__W13);

      var _super24 = _createSuper(MatFooterRow);

      function MatFooterRow() {
        _classCallCheck(this, MatFooterRow);

        return _super24.apply(this, arguments);
      }

      return MatFooterRow;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"]);

    MatFooterRow.ɵfac = function MatFooterRow_Factory(t) {
      return ɵMatFooterRow_BaseFactory(t || MatFooterRow);
    };

    MatFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatFooterRow,
      selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
      hostAttrs: ["role", "row", 1, "mat-footer-row"],
      exportAs: ["matFooterRow"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"],
        useExisting: MatFooterRow
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function MatFooterRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]],
      encapsulation: 2
    });

    var ɵMatFooterRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRow);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-footer-row, tr[mat-footer-row]',
          template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
          host: {
            'class': 'mat-footer-row',
            'role': 'row'
          },
          // See note on CdkTable for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          exportAs: 'matFooterRow',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"],
            useExisting: MatFooterRow
          }]
        }]
      }], null, null);
    })();
    /**
     * Data row template container that contains the cell outlet. Adds the right class and role.
     */


    var MatRow =
    /*#__PURE__*/
    function (_angular_cdk_table__W14) {
      _inherits(MatRow, _angular_cdk_table__W14);

      var _super25 = _createSuper(MatRow);

      function MatRow() {
        _classCallCheck(this, MatRow);

        return _super25.apply(this, arguments);
      }

      return MatRow;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"]);

    MatRow.ɵfac = function MatRow_Factory(t) {
      return ɵMatRow_BaseFactory(t || MatRow);
    };

    MatRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatRow,
      selectors: [["mat-row"], ["tr", "mat-row", ""]],
      hostAttrs: ["role", "row", 1, "mat-row"],
      exportAs: ["matRow"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"],
        useExisting: MatRow
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function MatRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]],
      encapsulation: 2
    });

    var ɵMatRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRow);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-row, tr[mat-row]',
          template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
          host: {
            'class': 'mat-row',
            'role': 'row'
          },
          // See note on CdkTable for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          exportAs: 'matRow',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"],
            useExisting: MatRow
          }]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/table/text-column.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Column that simply shows text content for the header and row cells. Assumes that the table
     * is using the native table implementation (`<table>`).
     *
     * By default, the name of this column will be the header text and data property accessor.
     * The header text can be overridden with the `headerText` input. Cell values can be overridden with
     * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
     * input.
     * @template T
     */


    var MatTextColumn =
    /*#__PURE__*/
    function (_angular_cdk_table__W15) {
      _inherits(MatTextColumn, _angular_cdk_table__W15);

      var _super26 = _createSuper(MatTextColumn);

      function MatTextColumn() {
        _classCallCheck(this, MatTextColumn);

        return _super26.apply(this, arguments);
      }

      return MatTextColumn;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTextColumn"]);

    MatTextColumn.ɵfac = function MatTextColumn_Factory(t) {
      return ɵMatTextColumn_BaseFactory(t || MatTextColumn);
    };

    MatTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatTextColumn,
      selectors: [["mat-text-column"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 0,
      consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
      template: function MatTextColumn_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      },
      directives: [MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderCell, MatCell],
      encapsulation: 2
    });

    var ɵMatTextColumn_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTextColumn);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTextColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-text-column',
          template: "\n    <ng-container matColumnDef>\n      <th mat-header-cell *matHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td mat-cell *matCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          // Change detection is intentionally not set to OnPush. This component's template will be provided
          // to the table to be inserted into its view. This is problematic when change detection runs since
          // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
          // mean's the template in the table's view will not have the updated value (and in fact will cause
          // an ExpressionChangedAfterItHasBeenCheckedError).
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/table/table-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var EXPORTED_DECLARATIONS = [// Table
    MatTable, // Template defs
    MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, // Cell directives
    MatHeaderCell, MatCell, MatFooterCell, // Row directives
    MatHeaderRow, MatRow, MatFooterRow, MatTextColumn];

    var MatTableModule = function MatTableModule() {
      _classCallCheck(this, MatTableModule);
    };

    MatTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatTableModule
    });
    MatTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatTableModule_Factory(t) {
        return new (t || MatTableModule)();
      },
      imports: [[_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatTableModule, {
        declarations: function declarations() {
          return [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatTextColumn];
        },
        imports: function imports() {
          return [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatTextColumn];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          exports: EXPORTED_DECLARATIONS,
          declarations: EXPORTED_DECLARATIONS
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/table/table-data-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
     * flaky browser support and the value not being defined in Closure's typings.
     * @type {?}
     */


    var MAX_SAFE_INTEGER = 9007199254740991;
    /**
     * Data source that accepts a client-side data array and includes native support of filtering,
     * sorting (using MatSort), and pagination (using MatPaginator).
     *
     * Allows for sort customization by overriding sortingDataAccessor, which defines how data
     * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
     * which defines how row data is converted to a string for filter matching.
     *
     * **Note:** This class is meant to be a simple data source to help you get started. As such
     * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
     * interactions. If your app needs to support more advanced use cases, consider implementing your
     * own `DataSource`.
     * @template T
     */

    var MatTableDataSource =
    /*#__PURE__*/
    function (_angular_cdk_table__W16) {
      _inherits(MatTableDataSource, _angular_cdk_table__W16);

      var _super27 = _createSuper(MatTableDataSource);

      /**
       * @param {?=} initialData
       */
      function MatTableDataSource() {
        var _this21;

        var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, MatTableDataSource);

        _this21 = _super27.call(this);
        /**
         * Stream emitting render data to the table (depends on ordered data changes).
         */

        _this21._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        /**
         * Stream that emits when a new filter string is set on the data source.
         */

        _this21._filter = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        /**
         * Used to react to internal changes of the paginator that are made by the data source itself.
         */

        _this21._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Subscription to the changes that should trigger an update to the table's rendered rows, such
         * as filtering, sorting, pagination, or base data changes.
         */

        _this21._renderChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Data accessor function that is used for accessing data properties for sorting through
         * the default sortData function.
         * This default function assumes that the sort header IDs (which defaults to the column name)
         * matches the data's properties (e.g. column Xyz represents data['Xyz']).
         * May be set to a custom function for different behavior.
         * @param data Data object that is being accessed.
         * @param sortHeaderId The name of the column that represents the data.
         */

        _this21.sortingDataAccessor =
        /**
        * @param {?} data
        * @param {?} sortHeaderId
        * @return {?}
        */
        function (data, sortHeaderId) {
          /** @type {?} */
          var value =
          /** @type {?} */
          data[sortHeaderId];

          if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["_isNumberValue"])(value)) {
            /** @type {?} */
            var numberValue = Number(value); // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
            // leave them as strings. For more info: https://goo.gl/y5vbSg

            return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
          }

          return value;
        };
        /**
         * Gets a sorted copy of the data array based on the state of the MatSort. Called
         * after changes are made to the filtered data or when sort changes are emitted from MatSort.
         * By default, the function retrieves the active sort and its direction and compares data
         * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
         * of data ordering.
         * @param data The array of data that should be sorted.
         * @param sort The connected MatSort that holds the current sort state.
         */


        _this21.sortData =
        /**
        * @param {?} data
        * @param {?} sort
        * @return {?}
        */
        function (data, sort) {
          /** @type {?} */
          var active = sort.active;
          /** @type {?} */

          var direction = sort.direction;

          if (!active || direction == '') {
            return data;
          }

          return data.sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            /** @type {?} */
            var valueA = _this21.sortingDataAccessor(a, active);
            /** @type {?} */


            var valueB = _this21.sortingDataAccessor(b, active); // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
            // one value exists while the other doesn't. In this case, existing value should come last.
            // This avoids inconsistent results when comparing values to undefined/null.
            // If neither value exists, return 0 (equal).

            /** @type {?} */


            var comparatorResult = 0;

            if (valueA != null && valueB != null) {
              // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
              if (valueA > valueB) {
                comparatorResult = 1;
              } else if (valueA < valueB) {
                comparatorResult = -1;
              }
            } else if (valueA != null) {
              comparatorResult = 1;
            } else if (valueB != null) {
              comparatorResult = -1;
            }

            return comparatorResult * (direction == 'asc' ? 1 : -1);
          });
        };
        /**
         * Checks if a data object matches the data source's filter string. By default, each data object
         * is converted to a string of its properties and returns true if the filter has
         * at least one occurrence in that string. By default, the filter string has its whitespace
         * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
         * filter matching.
         * @param data Data object used to check against the filter.
         * @param filter Filter string that has been set on the data source.
         * @return Whether the filter matches against the data
         */


        _this21.filterPredicate =
        /**
        * @param {?} data
        * @param {?} filter
        * @return {?}
        */
        function (data, filter) {
          // Transform the data into a lowercase string of all property values.

          /** @type {?} */
          var dataStr = Object.keys(data).reduce(
          /**
          * @param {?} currentTerm
          * @param {?} key
          * @return {?}
          */
          function (currentTerm, key) {
            // Use an obscure Unicode character to delimit the words in the concatenated string.
            // This avoids matches where the values of two columns combined will match the user's query
            // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
            // that has a very low chance of being typed in by somebody in a text field. This one in
            // particular is "White up-pointing triangle with dot" from
            // https://en.wikipedia.org/wiki/List_of_Unicode_characters
            return currentTerm +
            /** @type {?} */
            data[key] + '◬';
          }, '').toLowerCase(); // Transform the filter by converting it to lowercase and removing whitespace.

          /** @type {?} */

          var transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) != -1;
        };

        _this21._data = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](initialData);

        _this21._updateChangeSubscription();

        return _this21;
      }
      /**
       * Array of data that should be rendered by the table, where each object represents one row.
       * @return {?}
       */


      _createClass(MatTableDataSource, [{
        key: "_updateChangeSubscription",

        /**
         * Subscribe to changes that should trigger an update to the table's rendered rows. When the
         * changes occur, process the current state of the filter, sort, and pagination along with
         * the provided base data and send it to the table for rendering.
         * @return {?}
         */
        value: function _updateChangeSubscription() {
          var _this22 = this;

          // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
          // The events should emit whenever the component emits a change or initializes, or if no
          // component is provided, a stream with just a null event should be provided.
          // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
          // pipeline can progress to the next step. Note that the value from these streams are not used,
          // they purely act as a signal to progress in the pipeline.

          /** @type {?} */
          var sortChange = this._sort ?
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._sort.sortChange, this._sort.initialized) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
          /** @type {?} */

          var pageChange = this._paginator ?
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
          /** @type {?} */

          var dataStream = this._data; // Watch for base data or filter changes to provide a filtered set of data.

          /** @type {?} */

          var filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([dataStream, this._filter]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref) {
            var _ref2 = _slicedToArray(_ref, 1),
                data = _ref2[0];

            return _this22._filterData(data);
          })); // Watch for filtered data or sort changes to provide an ordered set of data.

          /** @type {?} */

          var orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([filteredData, sortChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 1),
                data = _ref4[0];

            return _this22._orderData(data);
          })); // Watch for ordered data or page changes to provide a paged set of data.

          /** @type {?} */

          var paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([orderedData, pageChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 1),
                data = _ref6[0];

            return _this22._pageData(data);
          })); // Watched for paged data changes and send the result to the table to render.

          this._renderChangesSubscription.unsubscribe();

          this._renderChangesSubscription = paginatedData.subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            return _this22._renderData.next(data);
          });
        }
        /**
         * Returns a filtered data array where each filter object contains the filter string within
         * the result of the filterTermAccessor function. If no filter is set, returns the data array
         * as provided.
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "_filterData",
        value: function _filterData(data) {
          var _this23 = this;

          // If there is a filter string, filter out data that does not contain it.
          // Each data object is converted to a string using the function defined by filterTermAccessor.
          // May be overridden for customization.
          this.filteredData = !this.filter ? data : data.filter(
          /**
          * @param {?} obj
          * @return {?}
          */
          function (obj) {
            return _this23.filterPredicate(obj, _this23.filter);
          });

          if (this.paginator) {
            this._updatePaginator(this.filteredData.length);
          }

          return this.filteredData;
        }
        /**
         * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
         * data array as provided. Uses the default data accessor for data lookup, unless a
         * sortDataAccessor function is defined.
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "_orderData",
        value: function _orderData(data) {
          // If there is no active sort or direction, return the data without trying to sort.
          if (!this.sort) {
            return data;
          }

          return this.sortData(data.slice(), this.sort);
        }
        /**
         * Returns a paged slice of the provided data array according to the provided MatPaginator's page
         * index and length. If there is no paginator provided, returns the data array as provided.
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "_pageData",
        value: function _pageData(data) {
          if (!this.paginator) {
            return data;
          }
          /** @type {?} */


          var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
          return data.slice(startIndex, startIndex + this.paginator.pageSize);
        }
        /**
         * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
         * index does not exceed the paginator's last page. Values are changed in a resolved promise to
         * guard against making property changes within a round of change detection.
         * @param {?} filteredDataLength
         * @return {?}
         */

      }, {
        key: "_updatePaginator",
        value: function _updatePaginator(filteredDataLength) {
          var _this24 = this;

          Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var paginator = _this24.paginator;

            if (!paginator) {
              return;
            }

            paginator.length = filteredDataLength; // If the page index is set beyond the page, reduce it to the last page.

            if (paginator.pageIndex > 0) {
              /** @type {?} */
              var lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
              /** @type {?} */

              var newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);

              if (newPageIndex !== paginator.pageIndex) {
                paginator.pageIndex = newPageIndex; // Since the paginator only emits after user-generated changes,
                // we need our own stream so we know to should re-render the data.

                _this24._internalPageChanges.next();
              }
            }
          });
        }
        /**
         * Used by the MatTable. Called when it connects to the data source.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "connect",
        value: function connect() {
          return this._renderData;
        }
        /**
         * Used by the MatTable. Called when it is destroyed. No-op.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {}
      }, {
        key: "data",
        get: function get() {
          return this._data.value;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        ,
        set: function set(data) {
          this._data.next(data);
        }
        /**
         * Filter term that should be used to filter out objects from the data array. To override how
         * data objects match to this filter string, provide a custom function for filterPredicate.
         * @return {?}
         */

      }, {
        key: "filter",
        get: function get() {
          return this._filter.value;
        }
        /**
         * @param {?} filter
         * @return {?}
         */
        ,
        set: function set(filter) {
          this._filter.next(filter);
        }
        /**
         * Instance of the MatSort directive used by the table to control its sorting. Sort changes
         * emitted by the MatSort will trigger an update to the table's rendered data.
         * @return {?}
         */

      }, {
        key: "sort",
        get: function get() {
          return this._sort;
        }
        /**
         * @param {?} sort
         * @return {?}
         */
        ,
        set: function set(sort) {
          this._sort = sort;

          this._updateChangeSubscription();
        }
        /**
         * Instance of the MatPaginator component used by the table to control what page of the data is
         * displayed. Page changes emitted by the MatPaginator will trigger an update to the
         * table's rendered data.
         *
         * Note that the data source uses the paginator's properties to calculate which page of data
         * should be displayed. If the paginator receives its properties as template inputs,
         * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
         * initialized before assigning it to this data source.
         * @return {?}
         */

      }, {
        key: "paginator",
        get: function get() {
          return this._paginator;
        }
        /**
         * @param {?} paginator
         * @return {?}
         */
        ,
        set: function set(paginator) {
          this._paginator = paginator;

          this._updateChangeSubscription();
        }
      }]);

      return MatTableDataSource;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"]);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/table/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=table.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/unapproved/unapproved.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/unapproved/unapproved.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsUnitUsersComponentsUnapprovedUnapprovedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"unapproved-wrapper\">\n\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\t\n\t<!-- <div class=\"customize-email\" *ngIf=\"isUserDataLoaded\">\n\t\t<p>You can send customized form to users for approving and onboarding the users in clickmycondo application</p>\n\t\t <a class=\"btn lime-green\">\n\t\t\t<span>Customize Approval Email</span>\n\t\t</a> \n\t</div>  -->\n\n\t<div class=\"card ov card-table\" *ngIf=\"isUserDataLoaded\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Unapproved Users <span class=\"badge blue\">{{totalUserItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Edit, View and approve documents</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" \n\t\t\t\t\t[(ngModel)]=\"unitData\" (ngModelChange)=\"onGlSearchFilter()\">\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn trans-white mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/unit&users/add-users\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add User</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\t\t<div class=\"card-body ov p-0\">\n\t\t\t\n\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"unitListData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n\t\t\t<!-- <table  class=\"table table-resizable table-checker\" cellpadding=\"0\" cellspacing=\"0\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" class=\"select\">\n\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t    id=\"selectAllUnapprovedUser\" \n\t\t\t\t\t\t\t    name=\"selectAllUnapprovedUser\" \n\t\t\t\t\t\t\t    [(ngModel)]=\"selectAllUnapprovedUser\"\n                            \t(ngModelChange)=\"getAllUnapprovedUser()\" >\n\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"selectAllUnapprovedUser\"></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t      \t</div>\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tName \n\t\t\t\t      \t<span (click)=\"sortUnitData('name')\" [ngClass]=\"getFieldOrderBy('name')\"></span>\n\t\t\t            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"columnField['name']\" (ngModelChange)=\"selectColInput('name')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tPhone <span (click)=\"sortUnitData('phone')\" [ngClass]=\"getFieldOrderBy('phone')\"></span>\n\t\t\t\t      \t <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" [(ngModel)]=\"columnField['phone']\" (ngModelChange)=\"selectColInput('phone')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tEmail <span  (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t      \t <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"columnField['email']\" (ngModelChange)=\"selectColInput('email')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tBlock No <span  (click)=\"sortUnitData('apartmentBlockNumber')\" [ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Block No\" [(ngModel)]=\"columnField['apartmentBlockNumber']\" (ngModelChange)=\"selectColInput('apartmentBlockNumber')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Unit No <span  (click)=\"sortUnitData('apartmentBlockUnitNumber')\" [ngClass]=\"getFieldOrderBy('apartmentBlockUnitNumber')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Unit No\" [(ngModel)]=\"columnField['apartmentBlockUnitNumber']\" (ngModelChange)=\"selectColInput('apartmentBlockUnitNumber')\">\n\t\t\t\t\t  </th>\n\t\t\t\t\t  <th scope=\"col\">Requested On \n\t\t\t\t\t\t<span (click)=\"sortUnitData('insertedOn')\" [ngClass]=\"getFieldOrderBy('insertedOn')\"></span>\n\t\t\t\t\t\t<app-simple-date-box \n\t\t\t\t\t\t  [dateModel]=\"insertedOn\"\n\t\t\t\t\t\t  (inputChange) = \"onDateChange($event, 'insertedOn')\"\n\t\t\t\t\t\t  ></app-simple-date-box>\n\t\t\t\t\t</th>\n\n\t\t\t\t      <th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t      Actions\n\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t  \t  </th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let unit of unitListData | orderBy : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | columnSearch: columnField:selectedInput | simpleSearch: unitData ; let i = index\" \n\t\t\t\t    [ngClass]=\"[ unit.checked ? 'selected' : '', unit.active ? '' : 'notactive' ]\">\n\t\t\t\t      <td class=\"select w-50\">\n\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t    id=\"{{unit.id}}\" \n\t                            name=\"{{unit.id}}\"\n\t                            [(ngModel)]=\"unit.checked\"\n\t                            (ngModelChange)=\"getSelectedUnapprovedUser(unit)\"\n\t\t\t\t\t\t\t    >\n\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"{{unit.id}}\"></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t      \t</div>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t      \t{{unit.name}}</a>\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h6>Status/Notes</h6>\n\t\t\t\t\t\t    \t\t\t<p>{{getNotes(unit.apartmentBlockUnit)}}</p>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h6>Owner/Tenant</h6>\n\t\t\t\t\t\t    \t\t\t<p>{{getUserRole(unit.userRole, i)}}</p>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t  \t  </td>\n\t\t\t\t      <td class=\"grey\">{{unit.phone}}</td>\n\t\t\t\t      <td class=\"grey\">{{unit.email}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBlockNo(unit, unit.apartmentBlockUnit[0].apartmentBlockNumber)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBlockUnitNo(unit, unit.apartmentBlockUnit[0].apartmentBlockUnitNumber)}}</td>\n\t\t\t\t\t  <td class=\"grey\">{{getBookedDate(i, unit.insertedOn)}}</td> \n\t\t\t\t\t <td><i class=\"fa fa-file\" aria-hidden=\"true\" [ngStyle]=\"{'color': getColor(unit.isdocsubmitted)}\" style=\"border: 1;\"></i></td> \n\t\t\t\t\t  <td class=\"simple-actions\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"viewUserInfo(unit.id)\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"editUserInfo(unit)\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"  (click)=\"showConfirmModal(unit.id)\"><i-feather class=\"icon del\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table> -->\n\t\t\t<div class=\"button-wrapper\">\n\t\t\t\t<a class=\"btn lime-green sf\"\n    \t\t\t\t(click)=\"approveUsers()\"\n\t\t\t\t\t[ngClass]=\"!isUserSelected ? 'disabled' : ''\">\n\t\t\t\t\t<span>Approve Selected Users</span>\n    \t\t\t</a>\n    \t\t\t<a class=\"btn trans-white sf \"\n    \t\t\t\trouterLink=\"addunit\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"\n\t\t\t\t\t[ngClass]=\"!isUserSelected ? 'disabled' : ''\">\n\t\t\t\t\t<span>Re-send verification link</span>\n    \t\t\t</a>\n    \t\t\t<p>Once approved the user will be informed automatically</p>\n\t\t\t</div>\n\t\t\t<!-- <app-pagination \n\t\t\t\t[totalItems]=\"totalUserItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemUserStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemUserEndIndex\"\n\t\t\t\t[itemLimit] = \"itemUserLimit\"\n\t\t\t\t(outputParams) = \"getUserIndexParams($event)\">\t\n\t\t\t</app-pagination> -->\n\n\t\t</div>\n\t</div>\n\n\t<!-- user Profile -->\n\t<div class=\"user-info-card\" *ngIf=\"isProfile\">\n\t\t<app-my-profile type=\"admin\" [isProfile]=\"isProfile\" [userId]=\"viewUserId\" (outputParams)=\"getParams($event)\"></app-my-profile>\n\t</div>\n\n\t<div class=\"card mt-30\">\n\t\t<!-- <div class=\"card-header pointer\" (click)=\"showLogs()\" [ngClass]=\"isLogs ? '' : 'no-border'\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5 class=\"p-0\">Logs</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right switch\" [ngClass]=\"isLogs ? 'up' : 'down'\">\n    \t\t\t<a href=\"javascript:void(0)\"></a>\n    \t\t</div>\n  \t\t</div> -->\n  \t\t<div class=\"card-body p-0\" *ngIf=\"isLogs\">\n  \t\t\t\n  \t\t\t<app-loader *ngIf=\"!isLogsDataLoaded\"></app-loader>\n\n  \t\t\t<ng-container *ngIf=\"isLogsDataLoaded\">\n\n\t  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockno')\">Date <span [ngClass]=\"getFieldOrderBy('blockno')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitno')\">By <span [ngClass]=\"getFieldOrderBy('unitno')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('sqrt')\">Comment <span [ngClass]=\"getFieldOrderBy('sqrt')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('intercom')\">Before <span [ngClass]=\"getFieldOrderBy('intercom')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('intercom')\">After <span [ngClass]=\"getFieldOrderBy('intercom')\"></span></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let log of logsData | slice:ItemLogStartIndex:ItemLogEndIndex\">\n\t\t\t\t\t      <td class=\"name\"><a href=\"javascript:void(0)\">{{log.date}}</a></td>\n\t\t\t\t\t      <td class=\"grey\">{{log.by}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{log.comment}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{log.before}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{log.after}}</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalLogItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemLogStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemLogEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLogLimit\"\n\t\t\t\t\t(outputParams) = \"getLogIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\n\t\t\t</ng-container>\n\n  \t\t</div>\n\t</div>\n\n\n\t<!-- <div class=\"card mt-30\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Mass Upload</h5>\n    \t\t\t<p>To create Residents accounts in mass, Download this<a href=\"javascript:void(0)\" class=\"tc-blue ml-2 t-decor\">Excel Template</a>\n    \t\t\t</p>\n    \t\t</div>\n    \t\t\n  \t\t</div>\n  \t\t<div class=\"card-body\">\n  \t\t\t<a class=\"btn sf lime-green\">\n\t\t\t\t<span>Upload Document</span>\n\t\t\t</a>\n\t\t\t<p class=\"info\">If you have any trouble in uploading document, Please raise a\n\t\t\t<a href=\"javascript:void(0)\" class=\"tc-red ml-2 t-decor\">support ticket</a></p>\n  \t\t</div>\n  \t</div> -->\n\n\n  \t<ng-template #viewUnapprovedUserRef let-user>\n    \t<div class=\"user-info info-modal-box rel\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>User Info</h5>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t  <div class=\"icon mr-4\"><img src=\"assets/images/user-icon.svg\" width=\"36\" /></div>\n\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t    <h5 class=\"mt-0\">{{user.firstName}} {{user.lastName}}</h5>\n\t\t\t\t\t    <p class=\"grey\">{{user.roleName}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body lists\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">User ID</h6>\n\t\t\t\t\t\t\t<p>{{user.userId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Email</h6>\n\t\t\t\t\t\t\t<p>{{user.emailId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Block No</h6>\n\t\t\t\t\t\t\t<p>{{user.blockNo}} {{user.unitNo}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Phone No</h6>\n\t\t\t\t\t\t\t<p>{{user.phoneNumber}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Blood Group</h6>\n\t\t\t\t\t\t\t<p>{{user.bloodGroup}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Address</h6>\n\t\t\t\t\t\t\t<p>{{user.address1}} {{user.address2}} {{user.zipCode}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n    \t</div>\n\t</ng-template>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsEmergencyContactEmergencyContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  emergency-contact works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/my-staffs/my-staffs.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/my-staffs/my-staffs.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsMyStaffsMyStaffsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  my-staffs works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-basic/profile-basic.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-basic/profile-basic.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsProfileBasicProfileBasicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-basic wrapper profile-section\">\n\t\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isUserDataLoaded && !isEdit\">\n\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit\">\n\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<ng-container *ngIf=\"isUserDataLoaded && !isEdit\">\n\t\t\n\t\t<form #profileBasicForm = \"ngForm\" name=\"profileBasicForm\" novalidate>\n\n\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>First Name</label>\n\t\t\t                <p>{{user.firstName}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Last Name</label>\n\t\t\t                <p>{{user.lastName}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Phone/Mobile</label>\n\t\t                    <p>{{user.phoneNumber}}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Address</label>\n\t\t                    <p>{{user.address1}}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Email</label>\n\t\t                    <p>{{user.emailId}}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Date Of Birth</label>\n\t\t                    <p>{{getDOB(user.dob)}}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t<label>Gender</label>\n\t\t\t\t\t\t<p>{{getGender(user.genderId)}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                   <label>Blood Group</label>\n\t                   <p>{{user.bloodGroup}}</p>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\n\t</ng-container>\n\n\t<ng-container *ngIf=\"isUserDataLoaded && isEdit\">\n\t\t\n\t\t<form #profileBasicForm = \"ngForm\" name=\"profileBasicForm\" (ngSubmit)=\"submitProfileBasicForm(profileBasicForm)\"  novalidate>\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>First Name*</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" name=\"firstName\" [(ngModel)]=\"user.firstName\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Last Name*</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" name=\"lastName\" [(ngModel)]=\"user.lastName\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Phone/Mobile*</label>\n\t\t\t\t\t\t<input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"number\" class=\"form-control\" placeholder=\"Phoneno\" name=\"phoneNo\" [(ngModel)]=\"user.phoneNumber\">\n\t\t\t\t\t\t<!-- <input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"number\"  #phoneNo=\"ngModel\" pattern=\"^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[789]\\d{9}$\" \n\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Phoneno\" name=\"phoneNo\" [(ngModel)]=\"user.phoneNumber\" required [ngClass]=\"isInvalidLogin ? 'error' :''\">\n\t\t\t\t\t\t<span *ngIf=\"phoneNo.errors && phoneNo.dirty\" class = \"error-message\" >Invalid input</span> -->\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Address</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Address\" name=\"address\" [(ngModel)]=\"user.address1\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Email*</label>\n\t                    <input (blur)=\"IsValidEmail($event.target.value)\" type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"user.emailId\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Date Of Birth</label>\n\t                    <input class=\"form-control\" name=\"userDOB\" [owlDateTime]=\"userDOB\" [owlDateTimeTrigger]=\"userDOB\" placeholder=\"Date of Birth\" [(ngModel)]=\"user.dob\">\n\t\t\t\t\t\t<owl-date-time #userDOB [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"userDOB\">\n\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t</div>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t<label>Gender*</label>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t                        <input name=\"genderType\" id=\"male\" [(ngModel)]=\"genderType\"  value=\"43\" type=\"radio\" required>\n\t                        <label class=\"radio-inline\" for=\"male\">Male</label>\n\t             \t\t</div>\n\t                \t<div class=\"form-group\">\n\t                        <input name=\"genderType\" id=\"female\" [(ngModel)]=\"genderType\" value=\"44\" type=\"radio\" required>\n\t                        <label class=\"radio-inline\" for=\"female\">Female</label>\n\t                     </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                   <label>Blood Group</label>\n\t                   <select \n\t\t\t\t\t        name=\"bloodGroup\" \n\t\t\t\t\t        id=\"bloodGroup\" \n\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t        [(ngModel)]=\"user.bloodGroup\">\n\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t        <option *ngFor=\"let item of bloodGroupData\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t    </select>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\" *ngIf=\"!isStaffSubmitted\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"profileBasicForm.invalid\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.html":
  /*!***************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.html ***!
    \***************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsProfileFamilyMembersDetailsProfileFamilyMembersDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"family-members-details-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\t\t\n\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"!isEdit && !isFamilyNew\">\n\t\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t\t</div>\n\n\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit && !isFamilyNew\">\n\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t\t</div>\n\n\t\t<div class=\"icon-wrapper red float-right\" *ngIf=\"!isEdit && !isFamilyNew\">\n\t\t\t<i-feather class=\"icon delete\" name=\"trash\" (click)=\"deleteMember()\"></i-feather>\n\t\t</div>\n\n\t</ng-container>\n\n\n\t<ng-container *ngIf=\"!isEdit && !isFamilyNew\">\n\t\t\n\t\t<form #profileFamilyForm = \"ngForm\" name=\"profileFamilyForm\"  novalidate>\n\n\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>First Name {{userId}}</label>\n\t\t\t                <p>{{user.firstName | notAvail }}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Middle Name</label>\n\t\t\t                <p>{{user.middleName | notAvail }}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Last Name</label>\n\t\t\t                <p>{{user.lastName | notAvail }}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Relationship</label>\n\t\t                    <p>{{user.relationship | notAvail }}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Phone/Mobile</label>\n\t\t                    <p>{{user.phoneNumber | notAvail }}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Email</label>\n\t\t                    <p>{{user.emailId | notAvail }}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Date Of Birth</label>\n\t\t                    <p>{{getDOB(user.dob) | notAvail }}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t<label>Gender</label>\n\t\t\t\t\t\t<p>{{getGender(user.genderId) | notAvail }}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                   <label>Blood Group</label>\n\t                   <p>{{user.bloodGroup | notAvail }}</p>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\t<ng-container *ngIf=\"isEdit || isFamilyNew\">\n\t\t\n\t\t<form #profileFamilyForm = \"ngForm\" name=\"profileFamilyForm\" (ngSubmit)=\"submitProfileFamilyForm(profileFamilyForm)\"  novalidate>\n\t\t\t\n\t\t\t<div class=\"data-wrapper\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>First Name*</label>\n\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"firstName\" [(ngModel)]=\"user.firstName\" required>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Middle Name</label>\n\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"middleName\" [(ngModel)]=\"user.middleName\">\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Last Name*</label>\n\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"lastName\" [(ngModel)]=\"user.lastName\" required>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Phone/Mobile*</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"phoneNo\" [(ngModel)]=\"user.phoneNumber\">\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Relationship*</label>\n\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"relationship\" [(ngModel)]=\"user.relationship\" required>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Email</label>\n\t\t                    <input type=\"email\" class=\"form-control\" placeholder=\"Enter value\" name=\"email\" [(ngModel)]=\"user.emailId\">\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Date Of Birth</label>\n\t\t                    <input class=\"form-control\" name=\"userDOB\" [owlDateTime]=\"userDOB\" [owlDateTimeTrigger]=\"userDOB\" placeholder=\"Date\" [(ngModel)]=\"user.dob\">\n\t\t\t\t\t\t\t<owl-date-time #userDOB [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t<label>Gender*</label>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t                        <input name=\"genderType\" id=\"male\" [(ngModel)]=\"genderType\"  value=\"43\" type=\"radio\" required>\n\t\t                        <label class=\"radio-inline\" for=\"male\">Male</label>\n\t\t             \t\t</div>\n\t\t                \t<div class=\"form-group\">\n\t\t                        <input name=\"genderType\" id=\"female\" [(ngModel)]=\"genderType\" value=\"44\" type=\"radio\" required>\n\t\t                        <label class=\"radio-inline\" for=\"female\">Female</label>\n\t\t                     </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                   <label>Blood Group</label>\n\t\t                   <select \n\t\t\t\t\t\t        name=\"bloodGroup\" \n\t\t\t\t\t\t        id=\"bloodGroup\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"user.bloodGroup\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of bloodGroupData\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t    </select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"profileFamilyForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t\n\n\t\t</form>\n\n\t</ng-container>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsProfileFamilyMembersProfileFamilyMembersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-family-wrapper profile-section\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card mb-20 no-shadow\" *ngIf=\"isDataLoaded && !isFamilyMembersAvailable()\">\n\t\t\n\t\t<div class=\"card-header at-header red\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\">\n    \t\t\t\t<h6 class=\"mb-2\">No Members added yet</h6>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t</div>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\t\t\n\t\t<div class=\"accor-special\" id=\"familyAccordion\">\n\n\t\t\t<ng-container *ngIf=\"isFamilyMembersAvailable()\">\n\n\t\t\t\t<div class=\"accor-box\" *ngFor=\"let person of familyDataList; let i = index\">\n\n\t\t\t\t\t<li class=\"accor-lists\" data-toggle=\"collapse\" attr.data-target=\"#familyLevel{{i}}\" aria-expanded=\"true\" attr.aria-controls=\"Level{{i}}\" [ngClass]=\"person.isCollapsed ? '' : 'collapsed'\" (click)=\"person.isCollapsed = !person.isCollapsed\">\n\t\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t\t<h6 class=\"text-capitalize\">{{person.firstName}} {{person.lastName}}</h6>\n\t\t\t\t\t\t\t<div class=\"desp\">\n\t\t\t\t\t\t\t\t<p>Relationship: <span>{{person.relationship}}</span></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<div id=\"familyLevel{{i}}\" class=\"collapse details\" attr.aria-labelledby=\"Level{{i}}\" data-parent=\"#familyAccordion\">\n\t\t\t\t\t\t<app-profile-family-members-details [user]=\"person\" (outputParams)=\"getParams($event)\"></app-profile-family-members-details>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"accor-box\">\n\t\t\t\t\n\t\t\t\t<li class=\"accor-lists add-list collapsed\" data-toggle=\"collapse\" data-target=\"#addfamilyLevel\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t<h6>Add family Members</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<div id=\"addfamilyLevel\" class=\"collapse details\" aria-labelledby=\"collapseOne\" data-parent=\"#familyAccordion\">\n\t\t\t\t\t<app-profile-family-members-details [isFamilyNew]=\"true\" (outputParams)=\"getParams($event)\"></app-profile-family-members-details>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsProfileInterestGroupProfileInterestGroupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row profile-interest-Group-wrapper profile-section\">\n\n  <div class=\"col-sm-6\">\n    <h5>User previleged</h5>\n\n     <div *ngFor=\"let interestGroup of userInterestGroupCategory\" class=\"form-check mt-3\">\n        <input type=\"checkbox\" [checked]=\"interestGroup.IsAssigned\"  class=\"form-check-input\" [id]=\"interestGroup.groupName\" [name]=\"interestGroup.groupName\" (change)=ChangeInterestGroup(interestGroup.IsAssigned,interestGroup.broadCastGroupCategoryId)>\n      <label class=\"form-check-label\" [for]=\"interestGroup.groupName\">\n       {{interestGroup.groupName}}</label>\n     </div>\n  </div>\n  <div class=\"col-sm-6\">\n      <h5>Admin previleged</h5>\n      <div class=\"form-check mt-3\" *ngFor=\"let interestGroup of adminInterestGroupCategory\">\n          <input type=\"checkbox\" [checked]=\"interestGroup.IsAssigned\" class=\"form-check-input\" \n          [id]=\"interestGroup.groupName\" [name]=\"interestGroup.groupName\" disabled>\n      <label class=\"form-check-label\" [for]=\"interestGroup.groupName\">\n    {{interestGroup.groupName}}</label>\n       </div>\n  </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsProfileLeaseInfoCreateLeaseInfoCreateLeaseInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"create-lease-info-wrapper\">\n    <div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span >Create Rental/Lease Information</span>\n    \t\t\t</h5>\n            </div>\n            <ul class=\"list-inline float-right\">\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn lime-green mt_5\" href=\"javascript:void(0)\" (click)=\"goBack();\">\n                        <i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n                    </a>\n    \t\t\t</li>\n    \t\t</ul>\n\t\t</div>\n <div class=\"card-body\">\n\t<ng-container>\n\t\t\n\t\t<form #leaseInfoForm = \"ngForm\" name=\"leaseInfoForm\" (ngSubmit)=\"submitLeaseInfoForm(leaseInfoForm)\"  novalidate>\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6\">\n          <div class=\"input-box\">\n            <label>Start Date*</label>\n             <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Date Time\" [(ngModel)]=\"rent.startDate\" required>\n            <owl-date-time #startDate></owl-date-time>\n            <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n              </div>\n                  </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"input-box\">\n            <label>Expiry Date*</label>\n             <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"Date Time\" [(ngModel)]=\"rent.expiryDate\" required>\n            <owl-date-time #endDate></owl-date-time>\n            <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n              </div>\n                  </div>\n        </div>\n        <div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Advance Amount*</label>\n\t                    <input  type=\"text\" class=\"form-control\" placeholder=\"Advance Amount\" name=\"advance\" [(ngModel)]=\"rent.advanceAmount\" required>\n            \t\t</div>\n        </div>\n        <div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Rent Amount*</label>\n\t                    <input  type=\"text\" class=\"form-control\" placeholder=\"Rent Amount\" name=\"rent\" [(ngModel)]=\"rent.rentAmount\" required>\n            \t\t</div>\n        </div>\n        <div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Lease Amount*</label>\n\t                    <input  type=\"text\" class=\"form-control\" placeholder=\"Lease Amount\" name=\"lease\" [(ngModel)]=\"rent.leaseAmount\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n      <div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"leaseInfoForm.invalid\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\n    </ng-container>\n    </div>\n </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsProfileLeaseInfoProfileLeaseInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-lease-info-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear table-card\" *ngIf=\"isDataLoaded && !isAddInfo\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>History <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"leaseData\" \n    \t\t\t\t(ngModelChange)=\"onGlSearchFilter()\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\" (click)=\"showLeaseInfo()\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add Rental/Lease Info</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<div class=\"card-body p-0\">\n\n  \t\t\t  <jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\" \n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"rentListData\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#datagrid>\n\t\t\t</jqxGrid> \n  \t\t\t \n\n  \t\t</div>\n\n\t</div>\n\n</div>\n\n<app-create-lease-info *ngIf=\"isAddInfo\" [apartmentBlockUnitId]=\"apartmentBlockUnitId\" (outputParams)=\"getOutPutParams($event);\"></app-create-lease-info>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsProfilePetDetailsProfilePetDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-pet-details-wrapper profile-section\">\n\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"icon-wrapper float-right\" *ngIf=\"!isEdit && !isPetNew\">\n\t\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t\t</div>\n\n\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit && !isPetNew\">\n\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t\t</div>\n\n\t\t<div class=\"icon-wrapper red float-right\" *ngIf=\"!isEdit && !isPetNew\">\n\t\t\t<i-feather class=\"icon delete\" name=\"trash\" (click)=\"deletePet()\"></i-feather>\n\t\t</div>\n\n\t\t<ng-container *ngIf=\"!isEdit && !isPetNew\">\n\t\t\t\n\t\t\t<form #profilePetForm = \"ngForm\" name=\"profilePetForm\"  novalidate>\n\n\t\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Pet Type</label>\n\t\t\t\t                <p>{{getPetType(pet.petTypeId)}}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Pet DOB</label>\n\t\t\t\t                <p>{{getDate(pet.dob)}}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</ng-container>\n\n\n\t\t<ng-container *ngIf=\"isEdit || isPetNew\">\n\t\t\t\n\t\t\t<form #profilePetForm = \"ngForm\" name=\"profilePetForm\" (ngSubmit)=\"submitProfilPetForm(profilePetForm)\"  novalidate>\n\t\t\t\n\t\t\t\t<div class=\"data-wrapper\">\n\n\t\t\t\t\t<div class=\"row\">\n\n\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Pet Type*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"petTypeId\" \n\t\t\t\t\t\t\t        id=\"petTypeId\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"pet.petTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of petTypeList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Date Of Birth</label>\n\t\t\t                    <input class=\"form-control\" name=\"PetDOB\" [owlDateTime]=\"PetDOB\" [owlDateTimeTrigger]=\"PetDOB\" placeholder=\"Date\" [(ngModel)]=\"pet.dob\">\n\t\t\t\t\t\t\t\t<owl-date-time #PetDOB [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PetDOB\">\n\t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t\t</div>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"profilePetForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\n\t\t</ng-container>\n\n\t</ng-container>\n\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-pet/profile-pet.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-pet/profile-pet.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsProfilePetProfilePetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-pets-wrapper profile-section\">\n\t\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t<ng-container *ngIf=\"isUserDataLoaded\">\n\n\t\t<form #profileVehicleForm = \"ngForm\" name=\"profileVehicleForm\" novalidate>\n\n\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Select Unit</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"userUnitId\" (ngModelChange)=\"showUnitDetails(userUnitId)\" required>\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of unitListData\" [value]=\"item.apartmentBlockUnitId\">{{ getUnitName(item.apartmentBlockUnitId) }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\t<div class=\"card mb-20 no-shadow\" *ngIf=\"isUnitSelected && isUserDataLoaded && isPetsNotAvailable()\">\n\t\t\n\t\t<div class=\"card-header at-header red\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\">\n    \t\t\t\t<h6 class=\"mb-2\">No Pet added yet</h6>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t</div>\n\n\n\t<ng-container *ngIf=\"isUnitSelected && isUserDataLoaded\">\n\t\t\n\t\t<div class=\"accor-special\" id=\"petsAccordion\">\n\n\t\t\t<div class=\"accor-box\" *ngFor=\"let item of petDataList; let i = index\">\n\n\t\t\t\t<li class=\"accor-lists\" data-toggle=\"collapse\" attr.data-target=\"#petsCollapse{{i}}\" aria-expanded=\"true\" attr.aria-controls=\"Collapse{{i}}\" [ngClass]=\"item.isCollapsed ? '' : 'collapsed'\" (click)=\"item.isCollapsed = !item.isCollapsed\">\n\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t<h6>{{getPetType(item.pet.petTypeId)}}</h6>\n\t\t\t\t\t\t<div class=\"desp\">\n\t\t\t\t\t\t\t<p>DOB: <span>{{getDate(item.pet.dob)}}</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<div id=\"petsCollapse{{i}}\" class=\"collapse details\" attr.aria-labelledby=\"Collapse{{i}}\" data-parent=\"#petsAccordion\">\n\t\t\t\t\t<app-profile-pet-details [petData]=\"item\" [apartmentBlockUnitId]=\"userUnitId\" (outputParams)=\"getParams($event)\"></app-profile-pet-details>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"accor-box\">\n\t\t\t\t\n\t\t\t\t<li class=\"accor-lists add-list collapsed\" data-toggle=\"collapse\" data-target=\"#addPetsCollapse\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t<h6>Add Pet</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<div id=\"addPetsCollapse\" class=\"collapse details\" aria-labelledby=\"collapseOne\" data-parent=\"#petsAccordion\">\n\t\t\t\t\t<app-profile-pet-details [isPetNew]=\"true\"  [apartmentBlockUnitId]=\"userUnitId\" (outputParams)=\"getParams($event)\"></app-profile-pet-details>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsProfileUnitDetailsProfileUnitDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-unit wrapper profile-section\">\n\t\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isUserDataLoaded && !isEdit\">\n\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit\">\n\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<ng-container *ngIf=\"isUserDataLoaded && !isEdit\">\n\t\t\n\t\t<form #profileUnitForm = \"ngForm\" name=\"profileUnitForm\" novalidate>\n\n\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\t\t\t\n\t\t\t\t<ng-container>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Unit Name</label>\n\t\t\t\t                <p>{{block.apartmentBlockUnitNumber}}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Block Name</label>\n\t\t\t\t                <p>{{block.apartmentBlockNumber}}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Unit Type</label>\n\t\t\t\t                <p>{{block.unitType}}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Intercom</label>\n\t\t\t                    <p>{{block.intercom}}</p>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Car</label>\n\t\t\t\t                <p>{{block.cars}}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\t<ng-container *ngIf=\"isUserDataLoaded && isEdit\">\n\t\t\n\t\t<form #profileUnitForm = \"ngForm\" name=\"profileUnitForm\" (ngSubmit)=\"submitProfileUnitForm(profileUnitForm)\"  novalidate>\n\t\t\t\n\t\t\t<div class=\"data-wrapper\">\n\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Block No*</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t        id=\"blockNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"block.apartmentBlockId\" (ngModelChange)=\"getUnits(block.apartmentBlockId)\" required>\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of blockData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Unit No*</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"block.apartmentBlockUnitId\" required [disabled]=\"!isBlockSelected\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of blockUnitData\" [value]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Unit Type*</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"unitType\" \n\t\t\t\t\t\t        id=\"unitType\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"block.unitType\" (ngModelChange)=\"getUnitType(block.unitType)\" required>\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of unitTypeData\" [value]=\"item.lookupValueName\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t    </select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Car (in number)*</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"unitCar\" \n\t\t                    [(ngModel)]=\"block.cars\" required>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Intercom</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"advanceAmount\" [(ngModel)]=\"block.intercom\" minlength=\"6\" maxlength=\"10\" required>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\" *ngIf=\"!isStaffSubmitted\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"profileUnitForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsProfileUnitStaffsProfileUnitStaffsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  profile-unit-staffs works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsProfileUserAbsenceProfileUserAbsenceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-basic wrapper profile-section\">\n  <ng-container *ngIf=\"!showHistory\">\n    <form #absenceForm=\"ngForm\" name=\"absenceForm\" (ngSubmit)=\"submitAbsenceForm(absenceForm)\"\n      novalidate>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"input-box\">\n            <h6>I will be out of Condo</h6>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"input-box\">\n            <label>From Date*</label>\n            <input class=\"form-control\" name=\"fromDate\" [owlDateTime]=\"fromDate\"\n              [owlDateTimeTrigger]=\"fromDate\" placeholder=\"Date Time\" [(ngModel)]=\"data.outFrom\" required>\n            <owl-date-time #fromDate></owl-date-time>\n            <div class=\"date-btn\" [owlDateTimeTrigger]=\"fromDate\">\n              <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"input-box\">\n            <label>To Date*</label>\n            <input class=\"form-control\" name=\"toDate\" [owlDateTime]=\"toDate\"\n              [owlDateTimeTrigger]=\"toDate\" placeholder=\"Date Time\" [(ngModel)]=\"data.outTo\" required>\n            <owl-date-time #toDate></owl-date-time>\n            <div class=\"date-btn\" [owlDateTimeTrigger]=\"toDate\">\n              <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12\">\n          <div class=\"input-box\">\n            <h6>Please contact my local representative given below</h6>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"input-box\">\n            <label>Local Representative Name 1*</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"name\"\n              [(ngModel)]=\"data.localContactP1\" required>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"input-box\">\n            <label>Phone/Mobile*</label>\n            <input type=\"text\" class=\"form-control\"\n              placeholder=\"Phoneno\" name=\"phoneNo\" [(ngModel)]=\"data.localContactP1phone\">\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"input-box\">\n            <label>Alternate Phone Number</label>\n            <input type=\"text\" class=\"form-control\"\n              placeholder=\"Phoneno\" name=\"phoneNo\" [(ngModel)]=\"data.localcontactP1alternatephone\">\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"input-box\">\n            <label>Email*</label>\n            <input  type=\"email\" class=\"form-control\" placeholder=\"Email\"\n              name=\"email\" [(ngModel)]=\"data.localcontactP1email\" required>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"input-box\">\n            <label>Local Representative Name 2*</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"alternateName\"\n              [(ngModel)]=\"data.localContactP2\"required>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"input-box\">\n            <label>Phone/Mobile*</label>\n            <input type=\"text\" class=\"form-control\"\n              placeholder=\"Phoneno\" name=\"phoneNo1\" [(ngModel)]=\"data.localContactP2phone\" required>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"input-box\">\n            <label>Alternate Phone Number</label>\n            <input type=\"text\" class=\"form-control\"\n              placeholder=\"Phoneno\" name=\"phoneNo1\" [(ngModel)]=\"data.localcontactP2alternatephone\">\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"input-box\">\n            <label>Email*</label>\n            <input type=\"email\" class=\"form-control\" placeholder=\"Email\"\n              name=\"email1\" [(ngModel)]=\"data.localcontactP2email\" required>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"text-center mt-5\">\n            <button type=\"button\" class=\"btn lime-green\" (click)=\"showHistoryList()\">Show History</button>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"text-center mt-5\">\n            <button class=\"btn lime-green\" [disabled]=\"absenceForm.invalid\">Submit</button>\n          </div>\n        </div>\n      </div>\n\n    </form>\n\n  </ng-container>\n\n</div>\n\n<app-user-absence-history *ngIf=\"showHistory\" [apartmentBlockUnitId]=\"apartmentBlockUnitId\" (outputParams)=\"getOutPutParams($event);\"></app-user-absence-history>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsProfileVehicleDetailsProfileVehicleDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-vehicle-details-wrapper profile-section\">\n\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isDataLoaded && !isEdit && !isVehicleNew\">\n\t\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t\t</div>\n\n\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit && !isVehicleNew\">\n\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t\t</div>\n\n\t\t<ng-container *ngIf=\"!isEdit && !isVehicleNew\">\n\t\t\t\n\t\t\t<form #profileVehicleForm = \"ngForm\" name=\"profileVehicleForm\"  novalidate>\n\n\t\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Vehicle Number</label>\n\t\t\t\t                <p>{{vehicle.vehicleNumber | notAvail }}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Vehicle Type</label>\n\t\t\t\t                <p>{{getVehicleType(vehicle.vehicleTypeId) | notAvail }}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Vehicle Manufacturer</label>\n\t\t\t\t                <p>{{vehicle.vehicleManufacturer | notAvail }}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Vehicle Color</label>\n\t\t\t\t                <p>{{vehicle.vehicleColor | notAvail }}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Vehicle Driver Number</label>\n\t\t\t\t                <p>{{vehicle.vehicleDriverNumber | notAvail }}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</ng-container>\n\n\n\t\t<ng-container *ngIf=\"isEdit || isVehicleNew\">\n\t\t\t\n\t\t\t<form #profileVehicleForm = \"ngForm\" name=\"profileVehicleForm\" (ngSubmit)=\"submitProfilVehicleForm(profileVehicleForm)\"  novalidate>\n\t\t\t\n\t\t\t\t<div class=\"data-wrapper\">\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Number*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleNumber\" \n\t\t\t                    [(ngModel)]=\"vehicle.vehicleNumber\" required>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Vehicle Type*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"vehicleTypeId\" \n\t\t\t\t\t\t\t        id=\"vehicleTypeId\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"vehicle.vehicleTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of vehicleTypeList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Manufacturer*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleManufacturer\" \n\t\t\t                    [(ngModel)]=\"vehicle.vehicleManufacturer\" required>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Color</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleColor\" \n\t\t\t                    [(ngModel)]=\"vehicle.vehicleColor\">\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Driver Number</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleDriverNumber\" \n\t\t\t                    [(ngModel)]=\"vehicle.vehicleDriverNumber\">\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"profileVehicleForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\n\t\t</ng-container>\n\n\t</ng-container>\n\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsProfileVehiclesProfileVehiclesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-vehicles-wrapper profile-section\">\n\t\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\t\t\n\t<div class=\"card mb-20 no-shadow\" *ngIf=\"isUserDataLoaded\">\n\t\t\n\t\t<div class=\"card-header at-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\">\n    \t\t\t\t<h6 class=\"mb-2\">Parking Slots Available</h6>\n\t\t\t\t\t<p class=\"d-inline-block ft mr-md-1\" *ngFor=\" let item of parkingSlotsDataList; let i = index; last as isLast\">\n\t\t\t\t\t\t{{item.slotName}}<span *ngIf=\"!isLast\">,</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"d-inline-block ft mr-md-1\" *ngIf=\"isPlotNotAvailable()\">\n\t\t\t\t\t\tNot Allocated\n\t\t\t\t\t</p>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t</div>\n\n\t<div class=\"card mb-20 no-shadow\" *ngIf=\"isUserDataLoaded && isVehicleNotAvailable()\">\n\t\t\n\t\t<div class=\"card-header at-header red\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\">\n    \t\t\t\t<h6 class=\"mb-2\">No Vehicle added yet</h6>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t</div>\n\n\t<ng-container *ngIf=\"isUserDataLoaded\">\n\t\t\n\t\t<div class=\"accor-special\" id=\"vehicleAccordion\">\n\n\t\t\t<div class=\"accor-box\" *ngFor=\"let item of vehicleDataList; let i = index\">\n\n\t\t\t\t<li class=\"accor-lists\" data-toggle=\"collapse\" attr.data-target=\"#vehicleCollapse{{i}}\" aria-expanded=\"true\" attr.aria-controls=\"Collapse{{i}}\" [ngClass]=\"item.isCollapsed ? '' : 'collapsed'\" (click)=\"item.isCollapsed = !item.isCollapsed\">\n\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t<h6>{{item.vehicle.vehicleNumber}}</h6>\n\t\t\t\t\t\t<div class=\"desp\">\n\t\t\t\t\t\t\t<p>Type: <span>{{getVehicleType(item.vehicle.vehicleTypeId)}}</span></p>\n\t\t\t\t\t\t\t<p>Manufacturer: <span>{{item.vehicle.vehicleManufacturer}}</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<div id=\"vehicleCollapse{{i}}\" class=\"collapse details\" attr.aria-labelledby=\"Collapse{{i}}\" data-parent=\"#vehicleAccordion\">\n\t\t\t\t\t<app-profile-vehicle-details [vehicleData]=\"item\" [apartmentBlockUnitId]=\"userUnitId\" (outputParams)=\"getParams($event)\"></app-profile-vehicle-details>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"accor-box\">\n\t\t\t\t\n\t\t\t\t<li class=\"accor-lists add-list collapsed\" data-toggle=\"collapse\" data-target=\"#addVehicleCollapse\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t<h6>Add Vehicle</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<div id=\"addVehicleCollapse\" class=\"collapse details\" aria-labelledby=\"collapseOne\" data-parent=\"#vehicleAccordion\">\n\t\t\t\t\t<app-profile-vehicle-details [isVehicleNew]=\"true\"  [apartmentBlockUnitId]=\"userUnitId\" (outputParams)=\"getParams($event)\"></app-profile-vehicle-details>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.html":
  /*!******************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.html ***!
    \******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsPropertyManagerPropertyManagerCreatePropertyManagerCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-basic wrapper\">\n\t<div class=\"card mb-30\">\n\t<div class=\"card-header\">\n\t\t<div class=\"float-left\">\n\t\t\t<h5>\n\t\t\t\t<span >Create Rental/Lease Information</span>\n\t\t\t</h5>\n\t\t</div>\n\t\t<ul class=\"list-inline float-right\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<a class=\"btn lime-green mt_5\" href=\"javascript:void(0)\" (click)=\"goBack();\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"card-body\">\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\t\t\n\t\t<form #propertyManagerCreateForm = \"ngForm\" name=\"propertyManagerCreateForm\" (ngSubmit)=\"submitPropertyManagerCreateForm(propertyManagerCreateForm)\"  novalidate>\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Property Company*</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Property Company\" name=\"propertyCompany\" [(ngModel)]=\"propertyData.propertyManagerName\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Contact Person*</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Contact Person\" name=\"contactPerson\" [(ngModel)]=\"propertyData.contactPerson\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Email*</label>\n\t                    <input (blur)=\"IsValidEmail($event.target.value)\" type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"propertyData.email\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Phone Number*</label>\n\t                    <input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"text\" class=\"form-control\" placeholder=\"Phone no\" name=\"phoneNo1\" [(ngModel)]=\"propertyData.phone1\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Alternate Phone Number</label>\n\t                    <input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"text\" class=\"form-control\" placeholder=\"Phone no\" name=\"phoneNo2\" [(ngModel)]=\"propertyData.phone2\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Address Line 1</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Address\" name=\"address1\" [(ngModel)]=\"propertyData.address1\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Address Line 2</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Address\" name=\"address2\" [(ngModel)]=\"propertyData.address2\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>City</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"City\" name=\"city\" [(ngModel)]=\"propertyData.city\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Province / Region</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Province / Region\" name=\"region\" [(ngModel)]=\"propertyData.state\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Zip</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Zip\" name=\"zip\" [(ngModel)]=\"propertyData.pin\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\" *ngIf=\"!isStaffSubmitted\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"propertyManagerCreateForm.invalid\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n</div>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/property-manager/property-manager.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/property-manager/property-manager.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileComponentsPropertyManagerPropertyManagerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-basic wrapper profile-section\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\t<div *ngIf=\"isDataLoaded && (propertyData == null || propertyData.length == 0) && !isCreate\">\n\t\t<div class=\"card mb-20 no-shadow\">\n\t\t\n\t\t\t<div class=\"card-header at-header red\">\n\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t<div class=\"sub-details\">\n\t\t\t\t\t\t<h6 class=\"mb-2\">No Property Manager added yet</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\n\t\t</div>\t\t  \n\t\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t<a class=\"btn lime-green mt_5\" (click)=\"showCreateManager()\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add Property Manager</span>\n    \t\t\t\t</a></div></div>\n\t\t\t\t\t\t\t</div>\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isDataLoaded && propertyData != null && propertyData.length != 0 && !isEdit\">\n\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"deletePropertyManager()\"></i-feather>\n\t</div>\t\t\t\t\t\t\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isDataLoaded && propertyData != null && propertyData.length != 0 && !isEdit\">\n\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit\">\n\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<ng-container *ngIf=\"isDataLoaded && propertyData != null && propertyData.length != 0 && !isEdit\">\n\t\t\n\t\t<form #propertyManagerForm = \"ngForm\" name=\"propertyManagerForm\" novalidate>\n\n\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Property Company</label>\n\t\t\t                <p>{{propertyData.propertyManagerName}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Contact Person</label>\n\t\t\t                <p>{{propertyData.contactPerson}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Email</label>\n\t\t                    <p>{{propertyData.email}}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Phone Number</label>\n\t\t                    <p>{{propertyData.phone1}}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t<label>Alternate Phone Number</label>\n\t\t\t\t\t\t<p>{{propertyData.phone2}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                   <label>Address Line 1</label>\n\t                   <p>{{propertyData.address1}}</p>\n            \t\t</div>\n        </div>\n        <div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                   <label>Address Line 2</label>\n\t                   <p>{{propertyData.address2}}</p>\n            \t\t</div>\n        </div>\n        <div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                   <label>City</label>\n\t                   <p>{{propertyData.city}}</p>\n            \t\t</div>\n        </div>\n        <div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                   <label>Province / Region</label>\n\t                   <p>{{propertyData.state}}</p>\n            \t\t</div>\n        </div>\n        <div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                   <label>Zip</label>\n\t                   <p>{{propertyData.pin}}</p>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\n\t</ng-container>\n\n\t<ng-container *ngIf=\"isDataLoaded && propertyData != null && propertyData.length != 0 && isEdit\">\n\t\t\n\t\t<form #propertyManagerForm = \"ngForm\" name=\"propertyManagerForm\" (ngSubmit)=\"submitpropertyManagerForm(propertyManagerForm)\"  novalidate>\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Property Company*</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Property Company\" name=\"propertyCompany\" [(ngModel)]=\"propertyData.propertyManagerName\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Contact Person*</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Contact Person\" name=\"contactPerson\" [(ngModel)]=\"propertyData.contactPerson\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Email*</label>\n\t                    <input (blur)=\"IsValidEmail($event.target.value)\" type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"propertyData.email\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Phone Number*</label>\n\t                    <input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"text\" class=\"form-control\" placeholder=\"Phone no\" name=\"phoneNo1\" [(ngModel)]=\"propertyData.phone1\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Alternate Phone Number</label>\n\t                    <input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"text\" class=\"form-control\" placeholder=\"Phone no\" name=\"phoneNo2\" [(ngModel)]=\"propertyData.phone2\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Address Line 1</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Address\" name=\"address1\" [(ngModel)]=\"propertyData.address1\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Address Line 2</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Address\" name=\"address2\" [(ngModel)]=\"propertyData.address2\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>City</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"City\" name=\"city\" [(ngModel)]=\"propertyData.city\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Province / Region</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Province / Region\" name=\"region\" [(ngModel)]=\"propertyData.state\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Zip</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Zip\" name=\"zip\" [(ngModel)]=\"propertyData.pin\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\" *ngIf=\"!isStaffSubmitted\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"propertyManagerForm.invalid\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n</div>\n\n<app-property-manager-create *ngIf=\"isCreate\" (outputParams)=\"getOutPutParams();\"></app-property-manager-create>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/my-profile.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/my-profile.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserMyProfileMyProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-profile-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<div class=\"card user-card mb-20\" *ngIf=\"isUserDataLoaded\">\n\t\t\n\t\t<div class=\"card-header\" [ngClass]=\"isNotAdmin() ? 'd-none' : ''\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>User Info</h5>\n\t\t\t</div>\n\t\t\t<div class=\"float-right\" (click)=\"closeUserInfo()\">\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<div class=\"float-left\">\n\t\t\t\t\n\t\t\t\t<div class=\"media\">\n\t\t\t\t  <div class=\"profile-icon\">\n\t\t\t\t  \t<img class=\"img-fluid\" src=\"https://randomuser.me/api/portraits/men/9.jpg\" id=\"userProfile\">\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t    <h5 class=\"mt-0\">{{user.firstName}} {{user.lastName}}</h5>\n\t\t\t\t    <p>{{userRole.roleName}}</p>\n\t\t\t\t    <ul class=\"other list-inline d-none d-sm-block\">\n\t\t\t\t    \t<li class=\"list-inline-item\">\n\t\t\t\t    \t\t<i-feather class=\"icon\" name=\"mail\"></i-feather>\n\t\t\t\t    \t\t<span>{{user.emailId}}</span>\n\t\t\t\t    \t</li>\n\t\t\t\t    \t<li class=\"list-inline-item\">\n\t\t\t\t    \t\t<i-feather class=\"icon phone\" name=\"phone\"></i-feather>\n\t\t\t\t    \t\t<span>{{user.phoneNumber}}</span>\n\t\t\t\t    \t</li>\n\t\t\t\t    </ul>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"other list-inline d-block d-sm-none\">\n\t\t\t    \t<li class=\"list-inline-item\">\n\t\t\t    \t\t<i-feather class=\"icon\" name=\"mail\"></i-feather>\n\t\t\t    \t\t<span>{{user.emailId}}</span>\n\t\t\t    \t</li>\n\t\t\t    \t<li class=\"list-inline-item\">\n\t\t\t    \t\t<i-feather class=\"icon phone\" name=\"phone\"></i-feather>\n\t\t\t    \t\t<span>{{user.phoneNumber}}</span>\n\t\t\t    \t</li>\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\n\n\t\t</div>\n\n\t\t<!-- <div class=\"card-body p-0\" [ngClass]=\"isNotAdmin() ? 'border-top' : ''\"> -->\n\t\t<div class=\"card-body p-0 border-top\"> \n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-3\">\n\t\t\t\t\t<div class=\"left-menubar\">\n\t\t\t\t\t\t<h4 [ngClass]=\"isNotAdmin() ? '' : 'd-none'\">Settings</h4>\n\t\t\t\t\t\t<ul class=\"list-group lists\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"basic/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/user-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Profile</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"unit/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/unit-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Unit Details</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"staffs/{{userId}}\" routerLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/staff-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Unit Staffs</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"vehicles/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><i-feather class=\"truck\" name=\"truck\"></i-feather></span>\n\t\t\t\t\t\t\t\t<span>Unit Vehicles & Parking</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"pets/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\" \n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/dog-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Unit Pets</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"propertymanager/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/manager-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Property Manager</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"family/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/family-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Family Members</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"lease/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/key-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Rental/Lease Information</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"interest/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/heart-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>My Interest Group</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"absence/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/moveout-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Out of Condo/Prolonged Absence</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-9 d-none d-md-block\">\n\t\t\t\t\t<div class=\"inner-content\">\n\t\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n\n</div>";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/unapproved/unapproved.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/unapproved/unapproved.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsUnitUsersComponentsUnapprovedUnapprovedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".unapproved-wrapper .customize-email {\n  margin: 0 0 25px 0;\n}\n.unapproved-wrapper .customize-email p {\n  font-size: 1.6rem;\n  padding: 0 0 15px 0 !important;\n  color: #585858;\n}\n.unapproved-wrapper .card-body p.info {\n  padding: 10px 0 0 0 !important;\n  font-size: 1.4rem;\n  color: #373946;\n}\n.unapproved-wrapper .user-info-card {\n  margin: 30px 0 0 0;\n}\ntable {\n  width: 100%;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL3VuYXBwcm92ZWQvdW5hcHByb3ZlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL3VuaXQtdXNlcnMvY29tcG9uZW50cy91bmFwcHJvdmVkL3VuYXBwcm92ZWQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtDO0VBQ0Msa0JBQUE7QUNKRjtBREtFO0VFdUVBLGlCQUFBO0VGckVPLDhCQUFBO0VBQ0EsY0dzRkU7QUZ6Rlg7QURPRTtFQUNPLDhCQUFBO0VFK0RQLGlCQUFBO0VGN0RVLGNHNkVEO0FGbEZYO0FEUUM7RUFDQyxrQkFBQTtBQ05GO0FEWUE7RUFDQyxXQUFBO0FDVEQ7QURZRTtFQUNELGVBQUE7RUFDQSxXQUFBO0FDVEQiLCJmaWxlIjoic3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL3VuYXBwcm92ZWQvdW5hcHByb3ZlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4udW5hcHByb3ZlZC13cmFwcGVyIHtcblx0LmN1c3RvbWl6ZS1lbWFpbCB7XG5cdFx0bWFyZ2luOiAwIDAgMjVweCAwO1xuXHRcdHAge1xuICAgICAgICBcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbm9ybWFsKTtcbiAgICAgICAgXHRwYWRkaW5nOiAwIDAgMTVweCAwICFpbXBvcnRhbnQ7XG4gICAgICAgIFx0Y29sb3I6ICRncmV5LTcwMDtcblx0XHR9XG5cdH1cblx0LmNhcmQtYm9keSB7XG5cdFx0cC5pbmZvIHtcbiAgICAgICAgXHRwYWRkaW5nOiAxMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JleS04MDA7XG4gICAgICBcdH1cblx0fVxuXHQudXNlci1pbmZvLWNhcmQge1xuXHRcdG1hcmdpbjogMzBweCAwIDAgMDtcblx0XHRcblx0fVxuXHRcbn1cblxudGFibGUge1xuXHR3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHR3aWR0aDogMTAwJTtcbiAgfSIsIi51bmFwcHJvdmVkLXdyYXBwZXIgLmN1c3RvbWl6ZS1lbWFpbCB7XG4gIG1hcmdpbjogMCAwIDI1cHggMDtcbn1cbi51bmFwcHJvdmVkLXdyYXBwZXIgLmN1c3RvbWl6ZS1lbWFpbCBwIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDAgMCAxNXB4IDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM1ODU4NTg7XG59XG4udW5hcHByb3ZlZC13cmFwcGVyIC5jYXJkLWJvZHkgcC5pbmZvIHtcbiAgcGFkZGluZzogMTBweCAwIDAgMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICMzNzM5NDY7XG59XG4udW5hcHByb3ZlZC13cmFwcGVyIC51c2VyLWluZm8tY2FyZCB7XG4gIG1hcmdpbjogMzBweCAwIDAgMDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/unapproved/unapproved.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/unapproved/unapproved.component.ts ***!
    \******************************************************************************/

  /*! exports provided: UnapprovedComponent */

  /***/
  function srcAppAmsUnitUsersComponentsUnapprovedUnapprovedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnapprovedComponent", function () {
      return UnapprovedComponent;
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


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
    /* harmony import */


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/services/shared-toaster.service */
    "./src/app/shared/services/shared-toaster.service.ts");

    var UnapprovedComponent =
    /*#__PURE__*/
    function () {
      function UnapprovedComponent(injector, dialog, router, userService, sharedService, cookieService, srvModal, SharedToaster) {
        _classCallCheck(this, UnapprovedComponent);

        this.injector = injector;
        this.dialog = dialog;
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.srvModal = srvModal;
        this.SharedToaster = SharedToaster;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.ItemUserStartIndex = 0;
        this.itemUserLimit = 15;
        this.ItemLogStartIndex = 0;
        this.itemLogLimit = 15;
        this.unitData = "";
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isMobile = false;
        this.selectAllUnapprovedUser = false;
        this.isUserSelected = false;
        this.isLogs = false;
        this.isUserDataLoaded = false;
        this.isLogsDataLoaded = false;
        this.isProfile = false;
        this.selectedInput = "";
        this.columnField = {};
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
      }

      _createClass(UnapprovedComponent, [{
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "loadGrid",
        value: function loadGrid() {
          this.ELEMENT_DATA = [{
            position: 1,
            name: 'Hydrogen',
            weight: 1.0079,
            symbol: 'H'
          }, {
            position: 2,
            name: 'Helium',
            weight: 4.0026,
            symbol: 'He'
          }, {
            position: 3,
            name: 'Lithium',
            weight: 6.941,
            symbol: 'Li'
          }, {
            position: 4,
            name: 'Beryllium',
            weight: 9.0122,
            symbol: 'Be'
          }, {
            position: 5,
            name: 'Boron',
            weight: 10.811,
            symbol: 'B'
          }, {
            position: 6,
            name: 'Carbon',
            weight: 12.0107,
            symbol: 'C'
          }, {
            position: 7,
            name: 'Nitrogen',
            weight: 14.0067,
            symbol: 'N'
          }, {
            position: 8,
            name: 'Oxygen',
            weight: 15.9994,
            symbol: 'O'
          }, {
            position: 9,
            name: 'Fluorine',
            weight: 18.9984,
            symbol: 'F'
          }, {
            position: 10,
            name: 'Neon',
            weight: 20.1797,
            symbol: 'Ne'
          }];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.ELEMENT_DATA);
        }
      }, {
        key: "getUserIndexParams",
        value: function getUserIndexParams(event) {
          // this.ItemUserStartIndex = event.ItemUserStartIndex;
          // this.ItemUserEndIndex = event.ItemUserEndIndex;
          // this.itemUserLimit = event.ItemLimit;
          this.ItemUserStartIndex = event.ItemStartIndex;
          this.ItemUserEndIndex = event.ItemEndIndex;
          this.itemUserLimit = event.itemLimit; // this.ItemStartIndex = event.ItemStartIndex;
          // this.ItemEndIndex = event.ItemEndIndex;
          // this.itemLimit = event.itemLimit;
          // if(this.totalUserItems>this.itemUserLimit){
          //   this.ItemUserEndIndex = this.itemUserLimit;
          // }
          // else {
          //   this.ItemUserEndIndex = this.totalUserItems;
          // }
        }
      }, {
        key: "onDateChange",
        value: function onDateChange(event, type) {
          if (event != null) {
            this.selectedInput = type;
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_11__(event).format("DD/MM/YYYY");
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "getBookedDate",
        value: function getBookedDate(itr, date) {
          underscore__WEBPACK_IMPORTED_MODULE_10__["each"](this.unitListData, function (obj, index) {
            obj.facilityBookedForDate = moment__WEBPACK_IMPORTED_MODULE_11__(obj.bookedForDate).format("DD/MM/YYYY");
          });
          return moment__WEBPACK_IMPORTED_MODULE_11__(date).format("DD/MM/YYYY");
        }
      }, {
        key: "getLogIndexParams",
        value: function getLogIndexParams(event) {
          this.ItemLogStartIndex = event.ItemLogStartIndex;
          this.ItemLogEndIndex = event.ItemLogEndIndex;
        }
      }, {
        key: "selectColInput",
        value: function selectColInput(value) {
          console.log(value);
          this.selectedInput = value;
        }
      }, {
        key: "getBlockNo",
        value: function getBlockNo(item, data) {
          this.unitListData.map(function (obj) {
            if (obj.id == item.id) {
              obj.apartmentBlockNumber = data;
            }
          });
          return data;
        }
      }, {
        key: "getBlockUnitNo",
        value: function getBlockUnitNo(item, data) {
          this.unitListData.map(function (obj) {
            if (obj.id == item.id) {
              obj.apartmentBlockUnitNumber = data;
            }
          });
          return data;
        }
      }, {
        key: "getNotes",
        value: function getNotes(data) {
          if (data === undefined || data.length == 0) return '';else return data[0].notes;
        }
      }, {
        key: "getUserRole",
        value: function getUserRole(role, index) {
          if (role === undefined || role.length == 0) {
            return '';
          } else {
            this.unitListData[index].roleName = role[0].roleName;
            return role[0].roleName;
          }
        }
      }, {
        key: "getUserRoleInfo",
        value: function getUserRoleInfo(role) {
          if (role.userRole === undefined || role.userRole.length == 0) {
            return '';
          } else {
            return role.userRole[0].roleName;
          }
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          if (event.target.innerWidth <= 991) this.isMobile = true;else this.isMobile = false;
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
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
            return this.unitOrder ? 'desc' : 'asc';
          } else return '';
        }
      }, {
        key: "getAllUnapprovedUser",
        value: function getAllUnapprovedUser() {
          if (this.selectAllUnapprovedUser) {
            underscore__WEBPACK_IMPORTED_MODULE_10__["each"](this.unitListData, function (item) {
              item.checked = true;
            });
            this.isUserSelected = true;
          } else {
            underscore__WEBPACK_IMPORTED_MODULE_10__["each"](this.unitListData, function (item) {
              item.checked = false;
            });
            this.isUserSelected = false;
          }
        }
      }, {
        key: "getSelectedUnapprovedUser",
        value: function getSelectedUnapprovedUser(unit) {
          var length = 0;
          underscore__WEBPACK_IMPORTED_MODULE_10__["each"](this.unitListData, function (item) {
            if (item.checked) {
              length++;
            }
          });

          if (length > 0) {
            this.isUserSelected = true;
          } else {
            this.isUserSelected = false;
          }

          if (length == 0) {
            this.selectAllUnapprovedUser = false;
          }

          if (length == this.unitListData.length) {
            this.selectAllUnapprovedUser = true;
          }
        }
      }, {
        key: "approveUsers",
        value: function approveUsers() {
          var _this25 = this;

          this.isUserDataLoaded = false;
          underscore__WEBPACK_IMPORTED_MODULE_10__["each"](this.unitListData, function (item, index) {
            if (item.checked) {
              _this25.userService.getUserById(item.id).subscribe(function (res) {
                var user = res[0]; // user.isApproved = true;

                _this25.SharedToaster.openSnackBar("Approved", '');

                _this25.userService.updateUser(user).subscribe(function (res) {
                  _this25.unitListData.splice(index, 1);

                  _this25.totalUserItems = _this25.unitListData.length;
                  _this25.isUserDataLoaded = true;
                });
              });
            }
          });
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(id) {
          this.modalService.showConfirmModal(id);
        }
      }, {
        key: "showUserInfo",
        value: function showUserInfo(user) {
          var _this26 = this;

          var userId = user.id;
          var blockData = user.apartmentBlockUnit;
          var userRole = user.userRole;
          this.userService.getUserById(userId).subscribe(function (res) {
            var userData = res[0];

            if (blockData === undefined || blockData.length == 0) {
              userData.blockNo = "Not Available";
              userData.unitNo = "";
            } else {
              userData.blockNo = blockData[0].apartmentBlockNumber;
              userData.unitNo = blockData[0].apartmentBlockUnitNumber;
            }

            if (userRole === undefined || userRole.length == 0) {
              userData.roleName = "Not Available";
            } else {
              userData.roleName = userRole[0].roleName;
            }

            _this26.dialog.open(_this26.viewUnapprovedUserRef, {
              panelClass: 'material',
              disableClose: true,
              data: userData
            });
          });
        }
      }, {
        key: "getParams",
        value: function getParams(event) {
          this.isProfile = event;
        }
      }, {
        key: "viewUserInfo",
        value: function viewUserInfo(id) {
          var _this27 = this;

          console.log(id);
          this.isProfile = false;
          setTimeout(function () {
            _this27.isProfile = true;
          }, 10);
          setTimeout(function () {
            var elem = document.querySelector('.user-info-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
              top: scrollTo,
              behavior: 'smooth'
            });
          }, 100);
          this.viewUserId = id;
          this.router.navigate(['ams/unit&users/unapproved/basic', this.viewUserId]);
        }
      }, {
        key: "showLogs",
        value: function showLogs() {
          var _this28 = this;

          this.isLogs = !this.isLogs;
          this.sharedService.getJsonData().subscribe(function (res) {
            _this28.logsData = res.logsData;
            _this28.totalLogItems = _this28.logsData.length;

            if (_this28.totalLogItems > _this28.itemLogLimit) {
              _this28.ItemLogEndIndex = _this28.itemLogLimit;
            } else {
              _this28.ItemLogEndIndex = _this28.totalLogItems;
            }

            _this28.isLogsDataLoaded = true;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onGlSearchFilter",
        value: function onGlSearchFilter() {
          var _this29 = this;

          if (this.unitData != "") {
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.unitData;
            var filtercondition = 'contains';
            var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(function (item) {
              if (item.datafield != 'Actions') {
                _this29.datagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.datagrid.applyfilters();
          } else {
            this.datagrid.clearfilters();
          }
        }
      }, {
        key: "onUnapproveDelete",
        value: function onUnapproveDelete(detail) {
          var dataRecord = this.datagrid.getrowdata(detail.rowId);
          var unapprovedId = dataRecord.id;
          this.modalService.showConfirmModal(unapprovedId);
        }
      }, {
        key: "onviewUserInfo",
        value: function onviewUserInfo(detail) {
          var dataRecord = this.datagrid.getrowdata(detail.rowId);
          this.viewUserInfo(dataRecord.id); // let unapprovedId = dataRecord.unit.idd
          // this.modalService.showConfirmModal(unapprovedId);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          var cellsrenderer = function cellsrenderer(row, column, value) {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
          };

          var columnrenderer = function columnrenderer(value) {
            return '<div style="padding: 14px">' + value + '</div>';
          };

          this.columnData = [{
            text: 'Name',
            datafield: 'name',
            width: 100,
            pinned: true,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'Phone',
            datafield: 'phone',
            cellsrenderer: cellsrenderer,
            minwidth: 80,
            renderer: columnrenderer
          }, {
            text: 'Email',
            datafield: 'email',
            cellsrenderer: cellsrenderer,
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Block  No',
            datafield: 'apartmentBlockNumber',
            cellsrenderer: cellsrenderer,
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Unit No',
            datafield: 'apartmentBlockUnitNumber',
            cellsrenderer: cellsrenderer,
            minwidth: 80,
            renderer: columnrenderer
          }, {
            text: 'Requested On',
            datafield: 'insertedOn',
            cellsrenderer: cellsrenderer,
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Actions',
            cellsalign: 'center',
            align: 'center',
            width: 120,
            cellsrenderer: function cellsrenderer(row) {
              return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="viewUserInfo(' + row + ')"><i class="fa fa-eye icon eye" aria-hidden="true"></i></a><a href="javascript:void(0)" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
            },
            renderer: columnrenderer
          }];
          if (window.innerWidth <= 991) this.isMobile = true;else this.isMobile = false;
          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.userService.getAllUnApprovedUsersByApartmentId(params).subscribe(function (res) {
            var unitListData = res;
            console.log(res); //filter active true items

            _this30.unitListData = unitListData.filter(function (data) {
              data.insertedOn = new Date(data.insertedOn).toLocaleDateString();
              return data.active;
            });
            setTimeout(function () {
              console.log(_this30.unitListData);
            }, 2000);
            _this30.gridSourceData = {
              localdata: unitListData,
              datatype: "array"
            };
            _this30.unitListData = new jqx.dataAdapter(_this30.gridSourceData);
            _this30.totalUserItems = _this30.unitListData.length;

            if (_this30.totalUserItems > _this30.itemUserLimit) {
              _this30.ItemUserEndIndex = _this30.itemUserLimit;
            } else {
              _this30.ItemUserEndIndex = _this30.totalUserItems;
            }

            _this30.isUserDataLoaded = true;
          }, function (error) {
            console.log(error);
          }); // delete user

          this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
            if (id != null) {
              var params = {
                userId: id,
                updateUserId: parseInt(_this30.cookieService.get('userId'))
              };

              _this30.userService.deleteUserById(params).subscribe(function (res) {
                underscore__WEBPACK_IMPORTED_MODULE_10__["each"](_this30.unitListData, function (type) {
                  if (type.id == id) {
                    type.active = false;
                  }
                });
                setTimeout(function () {
                  _this30.unitListData = _this30.unitListData.filter(function (type) {
                    return type.id !== id;
                  });
                  _this30.totalUserItems = _this30.unitListData.length;

                  _this30.sharedService.setAlertMessage("User deleted");

                  _this30.sharedService.setUnitListDeleteIndex(null);
                }, 500);
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }, {
        key: "editUserInfo",
        value: function editUserInfo(data) {
          this.srvModal.showUnApprovedetailsModal(data);
        }
      }, {
        key: "getColor",
        value: function getColor(docstatus) {
          return docstatus ? "red" : "yellow";
        }
      }]);

      return UnapprovedComponent;
    }();

    UnapprovedComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }, {
        type: _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]
      }, {
        type: src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_12__["SharedToasterService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewUnapprovedUserRef", {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], UnapprovedComponent.prototype, "viewUnapprovedUserRef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])], UnapprovedComponent.prototype, "datagrid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], UnapprovedComponent.prototype, "onResize", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onUnapproveDelete', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], UnapprovedComponent.prototype, "onUnapproveDelete", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onviewUserInfo', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], UnapprovedComponent.prototype, "onviewUserInfo", null);
    UnapprovedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unapproved',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./unapproved.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/unapproved/unapproved.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./unapproved.component.scss */
      "./src/app/ams/unit-users/components/unapproved/unapproved.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"], src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_12__["SharedToasterService"]])], UnapprovedComponent);

    function showConfirmDeleteEvent(row) {
      var event = new CustomEvent('onUnapproveDelete', {
        detail: {
          rowId: row
        }
      });
      window.dispatchEvent(event);
    }

    window.showConfirmDeleteEvent = showConfirmDeleteEvent;

    function viewUserInfo(row) {
      var event = new CustomEvent('onviewUserInfo', {
        detail: {
          rowId: row
        }
      });
      window.dispatchEvent(event);
    }

    window.viewUserInfo = viewUserInfo;
    /***/
  },

  /***/
  "./src/app/shared/services/shared-toaster.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/services/shared-toaster.service.ts ***!
    \***********************************************************/

  /*! exports provided: SharedToasterService */

  /***/
  function srcAppSharedServicesSharedToasterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedToasterService", function () {
      return SharedToasterService;
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


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var SharedToasterService =
    /*#__PURE__*/
    function () {
      function SharedToasterService(snackBar) {
        _classCallCheck(this, SharedToasterService);

        this.snackBar = snackBar;
      }

      _createClass(SharedToasterService, [{
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this.snackBar.open(message, action, {
            duration: 2000
          });
        }
      }]);

      return SharedToasterService;
    }();

    SharedToasterService.ctorParameters = function () {
      return [{
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    SharedToasterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])], SharedToasterService);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsEmergencyContactEmergencyContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL2VtZXJnZW5jeS1jb250YWN0L2VtZXJnZW5jeS1jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: EmergencyContactComponent */

  /***/
  function srcAppUserMyProfileComponentsEmergencyContactEmergencyContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmergencyContactComponent", function () {
      return EmergencyContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EmergencyContactComponent =
    /*#__PURE__*/
    function () {
      function EmergencyContactComponent() {
        _classCallCheck(this, EmergencyContactComponent);
      }

      _createClass(EmergencyContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmergencyContactComponent;
    }();

    EmergencyContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-emergency-contact',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./emergency-contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./emergency-contact.component.scss */
      "./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EmergencyContactComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/my-staffs/my-staffs.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/user/my-profile/components/my-staffs/my-staffs.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsMyStaffsMyStaffsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL215LXN0YWZmcy9teS1zdGFmZnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/my-staffs/my-staffs.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/user/my-profile/components/my-staffs/my-staffs.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: MyStaffsComponent */

  /***/
  function srcAppUserMyProfileComponentsMyStaffsMyStaffsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyStaffsComponent", function () {
      return MyStaffsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MyStaffsComponent =
    /*#__PURE__*/
    function () {
      function MyStaffsComponent() {
        _classCallCheck(this, MyStaffsComponent);
      }

      _createClass(MyStaffsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyStaffsComponent;
    }();

    MyStaffsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-staffs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-staffs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/my-staffs/my-staffs.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-staffs.component.scss */
      "./src/app/user/my-profile/components/my-staffs/my-staffs.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MyStaffsComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-basic/profile-basic.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-basic/profile-basic.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsProfileBasicProfileBasicComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtYmFzaWMvcHJvZmlsZS1iYXNpYy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-basic/profile-basic.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-basic/profile-basic.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProfileBasicComponent */

  /***/
  function srcAppUserMyProfileComponentsProfileBasicProfileBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileBasicComponent", function () {
      return ProfileBasicComponent;
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var src_app_ams_unit_users_components_unapproved_unapproved_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/ams/unit-users/components/unapproved/unapproved.component */
    "./src/app/ams/unit-users/components/unapproved/unapproved.component.ts");

    var ProfileBasicComponent =
    /*#__PURE__*/
    function () {
      function ProfileBasicComponent(router, route, userService, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, ProfileBasicComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.genderType = "";
        this.isUserDataLoaded = false;
        this.isEdit = false;
        this.isValidphoneNumber = false;
        this.isValidemail = false;
      }

      _createClass(ProfileBasicComponent, [{
        key: "getGender",
        value: function getGender(id) {
          return id == '43' ? 'Male' : 'Female';
        }
      }, {
        key: "getDOB",
        value: function getDOB(date) {
          if (date === undefined || date.length == 0) {
            return "";
          } else {
            return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD-MM-YY");
          }
        }
      }, {
        key: "showEditForm",
        value: function showEditForm() {
          this.isEdit = !this.isEdit;
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.cookieService.get('userRole') == 'Admin' || this.cookieService.get('userRole') == 'Staff' ? true : false;
        }
      }, {
        key: "submitProfileBasicForm",
        value: function submitProfileBasicForm(form) {
          var _this31 = this;

          if (!this.IsvalidatePhoneNo(this.user.phoneNumber)) return true;
          if (!this.IsValidEmail(this.user.emailId)) return true;
          this.isUserDataLoaded = false;
          var userDetails = {
            "userId": this.userId,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "firstName": this.user.firstName,
            "middleName": this.user.middleName,
            "lastName": this.user.lastName,
            "emailId": this.user.emailId,
            "password": this.user.password,
            "salt": this.user.salt,
            "address1": this.user.address1,
            "address2": this.user.address1,
            "city": this.user.city,
            "state": this.user.state,
            "country": this.user.country,
            "zipCode": this.user.zipCode,
            "genderId": parseInt(this.genderType),
            "dob": this.user.dob,
            "joinedOn": this.user.joinedOn,
            "bloodGroup": this.user.bloodGroup,
            "phoneNumber": this.user.phoneNumber.toString(),
            "emergencyContactNumber": this.user.emergencyContactNumber,
            "emergencyContactPerson": this.user.emergencyContactPerson,
            "emergencyContactNumberSecondary": this.user.emergencyContactNumberSecondary,
            "emergencyContactPersonSecondary": this.user.emergencyContactPersonSecondary,
            "accessCardNumber": this.user.accessCardNumber,
            "notes": this.user.notes,
            "profilePictureId": this.user.profilePictureId,
            "isLiving": this.user.isLiving,
            "isActive": this.user.isActive,
            "isApproved": this.user.isApproved,
            "resetPassword": this.user.resetPassword,
            "insertedBy": this.user.insertedBy,
            "updatedBy": parseInt(this.cookieService.get('userId'))
          };
          var params = {
            user: userDetails
          };
          this.userService.updateUser(params).subscribe(function (res) {
            if (res.message) {
              _this31.isUserDataLoaded = true;
              _this31.isEdit = false;
              if (!_this31.isAdmin()) // if its user module, update the userdata everywhere on the fly
                _this31.sharedService.setUserDetails(userDetails);
              _this31.paraUserId = res.message;
              console.log(res.message);

              _this31.sharedService.setAlertMessage("User updated successfully");
            }
          }, function (error) {});
          this.router.navigate(['ams/unit&users/unapproved/basic', 1]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.user = {};
          this.user.bloodGroup = "";
          console.log('navigate');

          if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
          } else {
            this.userId = parseInt(this.cookieService.get('userId'));
          }

          this.isUserDataLoaded = false;
          var queryParamBase = {
            userid: this.userId
          };
          this.userService.getUserById(queryParamBase).subscribe(function (res) {
            _this32.user = res[0];
            _this32.genderType = '' + _this32.user.genderId;
            _this32.isUserDataLoaded = true;
          }, function (error) {});
          var groupParams = {
            LookupTypeId: 24
          };
          this.lookupService.getLookupValueByLookupTypeId(groupParams).subscribe(function (res) {
            _this32.bloodGroupData = res;
          });
        }
      }, {
        key: "IsValidEmail",
        value: function IsValidEmail(val) {
          var retVal = true; // var rex =new RegExp(/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/);
          //  var rex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/); 

          var rex = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
          var isValid = rex.test(val);

          if (!isValid) {
            retVal = false;
            var errorDetails = {
              msg: "Kindly enter proper email id",
              type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
          }

          this.isValidemail = retVal;
          return retVal;
        }
      }, {
        key: "IsvalidatePhoneNo",
        value: function IsvalidatePhoneNo(val) {
          var retVal = true; // var rex =new RegExp(/^[+]?\d+$/);

          var rex = new RegExp(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/);
          var isValid = rex.test(val);
          console.log(val.length);

          if (val.length > 13) {
            retVal = false;
            var errorDetails = {
              msg: "phone no length should be within 13 characters",
              type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
          }

          if (!isValid && val.length < 13) {
            retVal = false;
            var errorDetails = {
              msg: "Kindly enter proper phoneno",
              type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
          }

          this.isValidphoneNumber = retVal;
          return retVal;
        }
      }, {
        key: "isValueValid",
        value: function isValueValid(val) {
          return val === undefined || val == null || val.length <= 0 || val === "" ? true : false;
        }
      }]);

      return ProfileBasicComponent;
    }();

    ProfileBasicComponent.ctorParameters = function () {
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
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("UnapprovedComponent", {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_ams_unit_users_components_unapproved_unapproved_component__WEBPACK_IMPORTED_MODULE_9__["UnapprovedComponent"])], ProfileBasicComponent.prototype, "unAppComp", void 0);
    ProfileBasicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-basic',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-basic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-basic/profile-basic.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-basic.component.scss */
      "./src/app/user/my-profile/components/profile-basic/profile-basic.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], ProfileBasicComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.scss":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.scss ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsProfileFamilyMembersDetailsProfileFamilyMembersDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtZmFtaWx5LW1lbWJlcnMtZGV0YWlscy9wcm9maWxlLWZhbWlseS1tZW1iZXJzLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: ProfileFamilyMembersDetailsComponent */

  /***/
  function srcAppUserMyProfileComponentsProfileFamilyMembersDetailsProfileFamilyMembersDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileFamilyMembersDetailsComponent", function () {
      return ProfileFamilyMembersDetailsComponent;
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

    var ProfileFamilyMembersDetailsComponent =
    /*#__PURE__*/
    function () {
      function ProfileFamilyMembersDetailsComponent(router, route, userService, sharedService, lookupService, cookieService) {
        _classCallCheck(this, ProfileFamilyMembersDetailsComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isEdit = false;
        this.genderType = "";
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ProfileFamilyMembersDetailsComponent, [{
        key: "showEditForm",
        value: function showEditForm() {
          this.isEdit = !this.isEdit;
        }
      }, {
        key: "getGender",
        value: function getGender(id) {
          return id == '43' ? 'Male' : 'Female';
        }
      }, {
        key: "getDOB",
        value: function getDOB(date) {
          if (date === undefined || date.length == 0) {
            return "";
          } else {
            return moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD-MM-YY");
          }
        }
      }, {
        key: "deleteMember",
        value: function deleteMember() {
          var _this33 = this;

          var params = {
            userFamilyMemberId: parseInt(this.user.userFamilyMemberId),
            deleteBy: parseInt(this.cookieService.get('userId'))
          };
          this.userService.deleteUserFamilyMember(params).subscribe(function (res) {
            if (res.message) {
              _this33.isDataLoaded = true;

              _this33.sharedService.setAlertMessage("Member deleted");

              _this33.outputParams.emit(true);
            } else {
              _this33.isDataLoaded = true;
            }
          });
        }
      }, {
        key: "submitProfileFamilyForm",
        value: function submitProfileFamilyForm(form) {
          var _this34 = this;

          if (!this.isEdit) {
            var details = {
              "firstName": this.user.firstName,
              "middleName": this.user.middleName,
              "lastName": this.user.lastName,
              "relationship": this.user.relationship,
              "relatedUserId": this.userId,
              "emailId": this.user.emailId,
              "genderId": parseInt(this.genderType),
              "dob": this.user.dob,
              "bloodGroup": this.user.bloodGroup,
              "phoneNumber": this.user.phoneNumber.toString(),
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": 0,
              "updatedOn": "2020-03-28T10:44:31.345Z"
            };
            var params = {
              userFamilyMember: details
            };
            this.userService.addUserFamilyMember(params).subscribe(function (res) {
              if (res.message) {
                _this34.isDataLoaded = true;

                _this34.sharedService.setAlertMessage("Family Member added successfully");

                _this34.outputParams.emit(true);
              } else {
                _this34.isDataLoaded = true;
              }
            });
          } else {
            var _details = {
              "userFamilyMemberId": this.user.userFamilyMemberId,
              "firstName": this.user.firstName,
              "middleName": this.user.middleName,
              "lastName": this.user.lastName,
              "relationship": this.user.relationship,
              "relatedUserId": this.userId,
              "emailId": this.user.emailId,
              "genderId": parseInt(this.genderType),
              "dob": this.user.dob,
              "bloodGroup": this.user.bloodGroup,
              "phoneNumber": this.user.phoneNumber.toString(),
              "isActive": this.user.isActive,
              "insertedBy": this.user.insertedBy,
              "insertedOn": this.user.insertedOn,
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": new Date().toISOString()
            };
            var _params = {
              userFamilyMember: _details
            };
            this.userService.updateUserFamilyMember(_params).subscribe(function (res) {
              if (res.message) {
                _this34.isDataLoaded = true;

                _this34.sharedService.setAlertMessage("Family Member updated successfully");

                _this34.outputParams.emit(true);
              } else {
                _this34.isDataLoaded = true;
              }
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
          } else {
            this.userId = parseInt(this.cookieService.get('userId'));
          }

          var groupParams = {
            LookupTypeId: 24
          };
          this.lookupService.getLookupValueByLookupTypeId(groupParams).subscribe(function (res) {
            _this35.bloodGroupData = res;
          });

          if (this.isFamilyNew) {
            this.user = {};
            this.user.bloodGroup = "";
          } else {
            this.genderType = '' + this.user.genderId;
          }

          this.isDataLoaded = true;
        }
      }]);

      return ProfileFamilyMembersDetailsComponent;
    }();

    ProfileFamilyMembersDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ProfileFamilyMembersDetailsComponent.prototype, "isFamilyNew", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProfileFamilyMembersDetailsComponent.prototype, "user", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProfileFamilyMembersDetailsComponent.prototype, "outputParams", void 0);
    ProfileFamilyMembersDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-family-members-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-family-members-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-family-members-details.component.scss */
      "./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], ProfileFamilyMembersDetailsComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsProfileFamilyMembersProfileFamilyMembersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtZmFtaWx5LW1lbWJlcnMvcHJvZmlsZS1mYW1pbHktbWVtYmVycy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: ProfileFamilyMembersComponent */

  /***/
  function srcAppUserMyProfileComponentsProfileFamilyMembersProfileFamilyMembersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileFamilyMembersComponent", function () {
      return ProfileFamilyMembersComponent;
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var ProfileFamilyMembersComponent =
    /*#__PURE__*/
    function () {
      function ProfileFamilyMembersComponent(router, route, userService, sharedService, lookupService, cookieService) {
        _classCallCheck(this, ProfileFamilyMembersComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
      }

      _createClass(ProfileFamilyMembersComponent, [{
        key: "getParams",
        value: function getParams(event) {
          var _this36 = this;

          if (event) {
            this.isDataLoaded = false;
            this.userService.getUserFamilyMembersByUserId(this.userId).subscribe(function (res) {
              _this36.familyDataList = res.filter(function (item) {
                return item.isActive;
              });
              ;
              _this36.isDataLoaded = true;
            });
          }
        }
      }, {
        key: "isFamilyMembersAvailable",
        value: function isFamilyMembersAvailable() {
          return this.familyDataList.length != 0 ? true : false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
          } else {
            this.userId = parseInt(this.cookieService.get('userId'));
          }

          this.userService.getUserFamilyMembersByUserId(this.userId).subscribe(function (res) {
            _this37.familyDataList = res.filter(function (item) {
              return item.isActive;
            });
            ;
            _this37.isDataLoaded = true;
          });
        }
      }]);

      return ProfileFamilyMembersComponent;
    }();

    ProfileFamilyMembersComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    ProfileFamilyMembersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-family-members',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-family-members.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-family-members.component.scss */
      "./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], ProfileFamilyMembersComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsProfileInterestGroupProfileInterestGroupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtaW50ZXJlc3QtZ3JvdXAvcHJvZmlsZS1pbnRlcmVzdC1ncm91cC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: ProfileInterestGroupComponent */

  /***/
  function srcAppUserMyProfileComponentsProfileInterestGroupProfileInterestGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileInterestGroupComponent", function () {
      return ProfileInterestGroupComponent;
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


    var _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/controllers/Broadcast */
    "./src/app/api/controllers/Broadcast.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");

    var ProfileInterestGroupComponent =
    /*#__PURE__*/
    function () {
      // categories=['dance','cock','xyu'];
      // adminCategories=['abc','pqr','ghj'];
      function ProfileInterestGroupComponent(broadcastService, sharedService, cookieService, apartmentService) {
        _classCallCheck(this, ProfileInterestGroupComponent);

        this.broadcastService = broadcastService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.apartmentService = apartmentService;
      }

      _createClass(ProfileInterestGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.apartmentID = parseInt(this.cookieService.get('apartmentId'));
          this.userId = parseInt(this.cookieService.get('userId'));
          this.getAllGroupCategory(); // this.getUserDetails();
          // this.getAllGoupUsers();
        } //Get Category Type

      }, {
        key: "getAllGroupCategory",
        value: function getAllGroupCategory() {
          var _this38 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getAllBroadCastGroupCategory(queryParamBase).subscribe(function (res) {
            var allBroadcastGroupCategory = res; //filter active true items

            _this38.allBroadcastGroupCategory = allBroadcastGroupCategory.filter(function (data) {
              return data.isActive;
            });
            _this38.adminInterestGroupCategory = allBroadcastGroupCategory.filter(function (data) {
              return data.privilege == "Admin";
            });
            _this38.userInterestGroupCategory = allBroadcastGroupCategory.filter(function (data) {
              return data.privilege.includes("All");
            });

            _this38.getAllGoupUsers();
          });
        }
      }, {
        key: "getAllGoupUsers",
        value: function getAllGoupUsers() {
          var _this39 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getBroadCastGroupCategoryUser(queryParamBase).subscribe(function (res) {
            _this39.interestGroupUsers = res;
            _this39.assignedInterestGroupUsers = _this39.interestGroupUsers.filter(function (data) {
              return data.userId == _this39.userId && data.isActive;
            });
            _this39.assignedInterestGroupsToUser = [];

            _this39.assignedInterestGroupUsers.forEach(function (element) {
              _this39.assignedInterestGroupsToUser.push(element.broadCastGroupCategoryId);
            });

            _this39.adminInterestGroupCategory.forEach(function (element) {
              element.IsAssigned = _this39.assignedInterestGroupsToUser.includes(element.broadCastGroupCategoryId);
            });

            _this39.userInterestGroupCategory.forEach(function (element) {
              element.IsAssigned = _this39.assignedInterestGroupsToUser.includes(element.broadCastGroupCategoryId);
            });
          });
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var _this40 = this;

          var queryParamBase = {
            userId: this.userId
          };
          this.apartmentService.getApartmentBlockUnitByUserIdNew(queryParamBase).subscribe(function (res) {
            _this40.userDetails = res.filter(function (obj) {
              return obj.apartmentId == this.apartmentId && obj.userid == this.userId;
            });
          });
        }
      }, {
        key: "ChangeInterestGroup",
        value: function ChangeInterestGroup(isAssigned, broadCastGroupCategoryId) {
          var _this41 = this;

          if (isAssigned) {
            this.removeUser(broadCastGroupCategoryId);
          } else {
            var queryParamBase = {
              userId: this.userId
            };
            this.apartmentService.getApartmentBlockUnitByUserIdNew(queryParamBase).subscribe(function (res) {
              var currentAppUserUnits = res.filter(function (obj) {
                return obj.apartmentId == _this41.apartmentID;
              });

              if (currentAppUserUnits != undefined && currentAppUserUnits.length > 0) {
                var userAppUnit = currentAppUserUnits[0];

                _this41.insertGroupUser(_this41.userId, userAppUnit.roleId, userAppUnit.apartmentBlockId, userAppUnit.apartmentBlockUnitId, broadCastGroupCategoryId);
              }
            });
          }

          this.getAllGoupUsers();
        }
      }, {
        key: "removeUser",
        value: function removeUser(broadCastGroupCategoryUserId) {
          var _this42 = this;

          var params = {
            broadCastGroupCategoryUserId: broadCastGroupCategoryUserId,
            deleteBy: this.userId
          };
          this.broadcastService.deleteBroadCastGroupCategoryUser(params).subscribe(function (res) {
            _this42.sharedService.setAlertMessage("User has been removed from interest group successfully"); // this.allGroupUser= this.allGroupUser.filter(function(obj){
            //          return obj.broadCastGroupCategoryUserId!==index;
            // });
            //   this.interestGroupUsers= this.interestGroupUsers.filter(function(obj){
            //     return obj.broadCastGroupCategoryUserId!==index;
            //  });

          }); //}
        }
      }, {
        key: "insertGroupUser",
        value: function insertGroupUser(userId, roleId, blockId, unitId, broadCastGroupCategoryId) {
          var _this43 = this;

          var broadCastGroupCategoryUser = {
            'broadCastGroupCategoryUserID': 0,
            'broadCastGroupCategoryID': broadCastGroupCategoryId,
            'userID': userId,
            'roleID': roleId,
            'apartmentBlockID': blockId,
            'unitID': unitId,
            'isActive': true,
            'insertedBy': parseInt(this.cookieService.get('userId')),
            'insertedOn': new Date().toISOString(),
            'updatedBy': null,
            'updatedOn': null,
            'apartmentID': this.apartmentID,
            'serialNumber': 0
          };
          var params = {
            'broadcast': broadCastGroupCategoryUser
          };
          this.broadcastService.upsertBroadCastGroupCategoryUser(params).subscribe(function (res) {
            if (res.message) {
              _this43.sharedService.setAlertMessage("Interest groups mapping to user(s) added successfully");
            }
          });
        }
      }]);

      return ProfileInterestGroupComponent;
    }();

    ProfileInterestGroupComponent.ctorParameters = function () {
      return [{
        type: _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }, {
        type: _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
      }];
    };

    ProfileInterestGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-interest-group',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-interest-group.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-interest-group.component.scss */
      "./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]])], ProfileInterestGroupComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.scss":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.scss ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsProfileLeaseInfoCreateLeaseInfoCreateLeaseInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtbGVhc2UtaW5mby9jcmVhdGUtbGVhc2UtaW5mby9jcmVhdGUtbGVhc2UtaW5mby5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: CreateLeaseInfoComponent */

  /***/
  function srcAppUserMyProfileComponentsProfileLeaseInfoCreateLeaseInfoCreateLeaseInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateLeaseInfoComponent", function () {
      return CreateLeaseInfoComponent;
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


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var src_app_api_controllers_Rent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/api/controllers/Rent */
    "./src/app/api/controllers/Rent.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");

    var CreateLeaseInfoComponent =
    /*#__PURE__*/
    function () {
      function CreateLeaseInfoComponent(router, route, injector, dialog, userService, rentService, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, CreateLeaseInfoComponent);

        this.router = router;
        this.route = route;
        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.rentService = rentService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = true;
        this.isError = false;
        this.errorMessage = false;
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_11__["ModalService"]);
      }

      _createClass(CreateLeaseInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.rent = {};
          this.userId = this.route.params['value'].id;
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.outputParams.emit('back');
        }
      }, {
        key: "submitLeaseInfoForm",
        value: function submitLeaseInfoForm(form) {
          var _this44 = this;

          var details = {
            "apartmentBlockUnitId": this.apartmentBlockUnitId,
            "startDate": this.rent.startDate,
            "expiryDate": this.rent.expiryDate,
            "rentAmount": parseInt(this.rent.rentAmount),
            "advanceAmount": parseInt(this.rent.advanceAmount),
            "leaseAmount": parseInt(this.rent.leaseAmount),
            "rentTypeId": 0,
            "notes": "string",
            "field1": "string",
            "field2": "string",
            "isActive": true,
            "insertedBy": this.userId,
            "insertedOn": moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).utc().format().toString(),
            "updatedBy": this.userId,
            "updatedOn": moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).utc().format().toString()
          };
          var AddApartmentBlockUnitRentParams = {
            apartmentBlockUnitRent: details
          };
          this.rentService.addApartmentBlockUnitRent(AddApartmentBlockUnitRentParams).subscribe(function (res) {
            if (res.message) {
              _this44.sharedService.setAlertMessage("Lease Info added successfully");

              _this44.isDataLoaded = true;

              _this44.outputParams.emit('close');
            }
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return CreateLeaseInfoComponent;
    }();

    CreateLeaseInfoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: src_app_api_controllers_Rent__WEBPACK_IMPORTED_MODULE_7__["RentService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"]
      }, {
        type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CreateLeaseInfoComponent.prototype, "apartmentBlockUnitId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CreateLeaseInfoComponent.prototype, "outputParams", void 0);
    CreateLeaseInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-lease-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-lease-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-lease-info.component.scss */
      "./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_6__["UserService"], src_app_api_controllers_Rent__WEBPACK_IMPORTED_MODULE_7__["RentService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], CreateLeaseInfoComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsProfileLeaseInfoProfileLeaseInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtbGVhc2UtaW5mby9wcm9maWxlLWxlYXNlLWluZm8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ProfileLeaseInfoComponent */

  /***/
  function srcAppUserMyProfileComponentsProfileLeaseInfoProfileLeaseInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileLeaseInfoComponent", function () {
      return ProfileLeaseInfoComponent;
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


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var src_app_api_controllers_Rent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/api/controllers/Rent */
    "./src/app/api/controllers/Rent.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");

    var ProfileLeaseInfoComponent =
    /*#__PURE__*/
    function () {
      function ProfileLeaseInfoComponent(router, route, userService, rentService, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, ProfileLeaseInfoComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.rentService = rentService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isAddInfo = false;
        this.isDataLoaded = false;
        this.isrentListData = false;
        this.leaseData = "";
      }

      _createClass(ProfileLeaseInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getListData();
        }
      }, {
        key: "getListData",
        value: function getListData() {
          var _this45 = this;

          var cellsrenderer = function cellsrenderer(row, column, value) {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
          };

          var columnrenderer = function columnrenderer(value) {
            return '<div style="padding: 14px">' + value + '</div>';
          };

          this.columnData = [{
            text: 'Start Date',
            datafield: 'startDate',
            minwidth: 100,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'Expiry Date',
            datafield: 'expiryDate',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }];
          this.userId = this.route.params['value'].id;
          this.apartmentService.getApartmentBlockUnitByUserId(this.userId).subscribe(function (res) {
            var data = res[0] || {};
            _this45.apartmentBlockUnitId = data.apartmentBlockUnitId;

            _this45.rentService.getAllApartmentBlockUnitRents().subscribe(function (res) {
              var sortData = res;
              sortData.sort(function (a, b) {
                return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
              });
              var rentListData = sortData.filter(function (data) {
                data.startDate = moment__WEBPACK_IMPORTED_MODULE_6__(data.startDate).format('MM/DD/YYYY');
                data.expiryDate = moment__WEBPACK_IMPORTED_MODULE_6__(data.expiryDate).format('MM/DD/YYYY');
                return data.isActive;
              });
              _this45.gridSourceData = {
                localdata: rentListData,
                datatype: "array"
              };
              _this45.rentListData = new jqx.dataAdapter(_this45.gridSourceData);
              _this45.isDataLoaded = true;
            }, function (error) {
              console.log(error);
            });
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onGlSearchFilter",
        value: function onGlSearchFilter() {
          var _this46 = this;

          if (this.leaseData != "") {
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.leaseData;
            var filtercondition = 'contains';
            var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(function (item) {
              if (item.datafield != 'Actions') {
                _this46.datagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.datagrid.applyfilters();
          } else {
            this.datagrid.clearfilters();
          }
        }
      }, {
        key: "showLeaseInfo",
        value: function showLeaseInfo() {
          this.isAddInfo = true;
        }
      }, {
        key: "getOutPutParams",
        value: function getOutPutParams(params) {
          if (params === "back") {
            this.isAddInfo = false;
          } else {
            this.getListData();
            this.isAddInfo = false;
          }
        }
      }]);

      return ProfileLeaseInfoComponent;
    }();

    ProfileLeaseInfoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }, {
        type: src_app_api_controllers_Rent__WEBPACK_IMPORTED_MODULE_8__["RentService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_9__["ApartmentService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_10__["LookupService"]
      }, {
        type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])], ProfileLeaseInfoComponent.prototype, "datagrid", void 0);
    ProfileLeaseInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-lease-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-lease-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-lease-info.component.scss */
      "./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_7__["UserService"], src_app_api_controllers_Rent__WEBPACK_IMPORTED_MODULE_8__["RentService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_9__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_10__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], ProfileLeaseInfoComponent);

    function getClassName(value) {
      var name = value.split('-');
      return name[0].toLowerCase();
    }

    window.getClassName = getClassName;
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsProfilePetDetailsProfilePetDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtcGV0LWRldGFpbHMvcHJvZmlsZS1wZXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ProfilePetDetailsComponent */

  /***/
  function srcAppUserMyProfileComponentsProfilePetDetailsProfilePetDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePetDetailsComponent", function () {
      return ProfilePetDetailsComponent;
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


    var src_app_api_controllers_Pet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Pet */
    "./src/app/api/controllers/Pet.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

    var ProfilePetDetailsComponent =
    /*#__PURE__*/
    function () {
      function ProfilePetDetailsComponent(router, route, userService, petService, apartmentService, sharedService, lookupService, cookieService) {
        _classCallCheck(this, ProfilePetDetailsComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.petService = petService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isEdit = false;
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ProfilePetDetailsComponent, [{
        key: "showEditForm",
        value: function showEditForm() {
          this.isEdit = !this.isEdit;
        }
      }, {
        key: "getPetType",
        value: function getPetType(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.petTypeList, function (item) {
            if (item.lookupValueId === id) {
              return item;
            }
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName;
          }
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          if (date === undefined || date.length == 0) {
            return "";
          } else {
            return moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD-MM-YY");
          }
        }
      }, {
        key: "deletePet",
        value: function deletePet() {
          var _this47 = this;

          var params = {
            petId: parseInt(this.pet.petId),
            deleteBy: parseInt(this.cookieService.get('userId'))
          };
          this.petService.deletePet(params).subscribe(function (res) {
            if (res.message) {
              _this47.isDataLoaded = true;

              _this47.sharedService.setAlertMessage("Pet deleted");

              _this47.outputParams.emit(true);
            } else {
              _this47.isDataLoaded = true;
            }
          });
        }
      }, {
        key: "submitProfilPetForm",
        value: function submitProfilPetForm(form) {
          var _this48 = this;

          this.isDataLoaded = false;

          if (!this.isEdit) {
            var details = {
              "petTypeId": parseInt(this.pet.petTypeId),
              "dob": this.pet.dob,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": 0,
              "updatedOn": "2020-03-27T07:50:54.680Z"
            };
            var params = {
              pet: details
            };
            this.petService.addPet(params).subscribe(function (res) {
              if (res.message) {
                var unitDetails = {
                  "apartmentBlockUnitId": parseInt(_this48.apartmentBlockUnitId),
                  "petId": res.message,
                  "isActive": true,
                  "insertedBy": parseInt(_this48.cookieService.get('userId')),
                  "insertedOn": new Date().toISOString(),
                  "updatedBy": 0,
                  "updatedOn": "2020-03-27T07:52:53.767Z"
                };
                var _params2 = {
                  apartmentBlockUnitPet: unitDetails
                };

                _this48.petService.addApartmentBlockUnitPet(_params2).subscribe(function (res) {
                  if (res.message) {
                    _this48.isDataLoaded = true;

                    _this48.sharedService.setAlertMessage("Pet added successfully");

                    _this48.outputParams.emit(true);
                  } else {
                    _this48.isDataLoaded = true;
                  }
                });
              } else {
                _this48.isDataLoaded = true;
              }
            });
          } else {
            var _details2 = {
              "petId": this.pet.petId,
              "petTypeId": parseInt(this.pet.petTypeId),
              "dob": this.pet.dob,
              "isActive": this.pet.isActive,
              "insertedBy": this.pet.insertedBy,
              "insertedOn": this.pet.insertedOn,
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": new Date().toISOString()
            };
            var _params3 = {
              pet: _details2
            };
            this.petService.updatePet(_params3).subscribe(function (res) {
              if (res.message) {
                var unitDetails = {
                  "apartmentBlockUnitPetId": parseInt(_this48.petUnit.apartmentBlockUnitPetId),
                  "apartmentBlockUnitId": parseInt(_this48.petUnit.apartmentBlockUnitId),
                  "petId": parseInt(_this48.pet.petId),
                  "isActive": _this48.petUnit.isActive,
                  "insertedBy": _this48.petUnit.insertedBy,
                  "insertedOn": _this48.petUnit.insertedOn,
                  "updatedBy": parseInt(_this48.cookieService.get('userId')),
                  "updatedOn": new Date().toISOString()
                };
                var _params4 = {
                  apartmentBlockUnitPet: unitDetails
                };

                _this48.petService.updateApartmentBlockUnitPet(_params4).subscribe(function (res) {
                  if (res.message) {
                    _this48.isDataLoaded = true;

                    _this48.sharedService.setAlertMessage("Pet updated successfully");

                    _this48.outputParams.emit(true);
                  } else {
                    _this48.isDataLoaded = true;
                  }
                });
              } else {
                _this48.isDataLoaded = true;
              }
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this49 = this;

          if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
          } else {
            this.userId = parseInt(this.cookieService.get('userId'));
          }

          this.pet = {};

          if (this.petData != undefined) {
            this.petUnit = this.petData;
            this.pet = this.petData.pet;
          } else {
            this.pet.petTypeId = "";
          }

          this.isDataLoaded = true;
          var petTypeParams = {
            LookupTypeId: 85
          };
          this.lookupService.getLookupValueByLookupTypeId(petTypeParams).subscribe(function (res) {
            _this49.petTypeList = res;
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {}
      }]);

      return ProfilePetDetailsComponent;
    }();

    ProfilePetDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_api_controllers_Pet__WEBPACK_IMPORTED_MODULE_4__["PetService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProfilePetDetailsComponent.prototype, "petData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ProfilePetDetailsComponent.prototype, "isPetNew", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProfilePetDetailsComponent.prototype, "apartmentBlockUnitId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProfilePetDetailsComponent.prototype, "outputParams", void 0);
    ProfilePetDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-pet-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-pet-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-pet-details.component.scss */
      "./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Pet__WEBPACK_IMPORTED_MODULE_4__["PetService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])], ProfilePetDetailsComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-pet/profile-pet.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-pet/profile-pet.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsProfilePetProfilePetComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtcGV0L3Byb2ZpbGUtcGV0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-pet/profile-pet.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-pet/profile-pet.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ProfilePetComponent */

  /***/
  function srcAppUserMyProfileComponentsProfilePetProfilePetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePetComponent", function () {
      return ProfilePetComponent;
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


    var src_app_api_controllers_Pet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Pet */
    "./src/app/api/controllers/Pet.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

    var ProfilePetComponent =
    /*#__PURE__*/
    function () {
      function ProfilePetComponent(router, route, userService, petService, apartmentService, sharedService, lookupService, cookieService) {
        _classCallCheck(this, ProfilePetComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.petService = petService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isUserDataLoaded = false;
        this.isUnitSelected = false;
        this.userUnitId = "";
        this.isError = false;
        this.errorMessage = "";
        this.isPetsAvailable = false;
      }

      _createClass(ProfilePetComponent, [{
        key: "showUnitDetails",
        value: function showUnitDetails(id) {
          var _this50 = this;

          this.isUserDataLoaded = false;
          this.isUnitSelected = true;
          var petListParams = {
            apartmentBlockUnitId: parseInt(id)
          };
          this.petService.getAllPetsByApartmentBlockUnitId(petListParams).subscribe(function (res) {
            if (res.length != 0) {
              _this50.petDataList = res.filter(function (item) {
                return item.pet.isActive;
              });
              _this50.isPetsAvailable = true;
            } else {
              _this50.isPetsAvailable = false;
            }

            _this50.isUserDataLoaded = true;
          });
        }
      }, {
        key: "getUnitName",
        value: function getUnitName(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.unitNameList, function (item) {
            if (item.apartmentBlockUnitId === id) {
              return item;
            }
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].apartmentBlockUnitNumber;
          }
        }
      }, {
        key: "getPetType",
        value: function getPetType(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.petTypeList, function (item) {
            if (item.lookupValueId === id) {
              return item;
            }
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName;
          }
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          if (date === undefined || date.length == 0) {
            return "";
          } else {
            return moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD-MM-YY");
          }
        }
      }, {
        key: "getParams",
        value: function getParams(event) {
          var _this51 = this;

          if (event) {
            var petListParams = {
              apartmentBlockUnitId: parseInt(this.userUnitId)
            };
            this.petService.getAllPetsByApartmentBlockUnitId(petListParams).subscribe(function (res) {
              if (res.length != 0) {
                _this51.petDataList = res.filter(function (item) {
                  return item.pet.isActive;
                });
                _this51.isPetsAvailable = true;
              } else {
                _this51.isPetsAvailable = false;
              }

              _this51.isUserDataLoaded = true;
            });
          }
        }
      }, {
        key: "isPetsNotAvailable",
        value: function isPetsNotAvailable() {
          return this.petDataList.length == 0 ? true : false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this52 = this;

          if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
          } else {
            this.userId = parseInt(this.cookieService.get('userId'));
          }

          this.unitNameList = [];
          var blockParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.apartmentService.getApartmentBlockByApartmentId(blockParams).subscribe(function (res) {
            _this52.blockData = res;
          });
          var petParams = {
            LookupTypeId: 85
          };
          this.lookupService.getLookupValueByLookupTypeId(petParams).subscribe(function (res) {
            _this52.petTypeList = res;
          });
          var unitParams = {
            LookupTypeId: 1
          };
          this.lookupService.getLookupValueByLookupTypeId(unitParams).subscribe(function (res) {
            _this52.unitTypeData = res;

            _this52.apartmentService.getAllApartmentBlockUnitUsersByUserId(_this52.userId).subscribe(function (unit) {
              _this52.unitListData = unit;
              underscore__WEBPACK_IMPORTED_MODULE_9__["each"](_this52.unitListData, function (item) {
                _this52.apartmentService.getApartmentBlockUnitById(item.apartmentBlockUnitId).subscribe(function (data) {
                  _this52.unitNameList.push(data[0]);

                  _this52.isUserDataLoaded = true;
                }, function (error) {});
              });
            }, function (error) {});
          });
        }
      }]);

      return ProfilePetComponent;
    }();

    ProfilePetComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_api_controllers_Pet__WEBPACK_IMPORTED_MODULE_4__["PetService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProfilePetComponent.prototype, "userId", void 0);
    ProfilePetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-pet',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-pet.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-pet/profile-pet.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-pet.component.scss */
      "./src/app/user/my-profile/components/profile-pet/profile-pet.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Pet__WEBPACK_IMPORTED_MODULE_4__["PetService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])], ProfilePetComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsProfileUnitDetailsProfileUnitDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtdW5pdC1kZXRhaWxzL3Byb2ZpbGUtdW5pdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ProfileUnitDetailsComponent */

  /***/
  function srcAppUserMyProfileComponentsProfileUnitDetailsProfileUnitDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileUnitDetailsComponent", function () {
      return ProfileUnitDetailsComponent;
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var ProfileUnitDetailsComponent =
    /*#__PURE__*/
    function () {
      function ProfileUnitDetailsComponent(router, route, userService, apartmentService, sharedService, lookupService, cookieService) {
        _classCallCheck(this, ProfileUnitDetailsComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isUserDataLoaded = false;
        this.isEdit = false;
        this.userUnitId = "";
        this.isBlockSelected = false;
        this.isUnitSelected = false;
        this.isError = false;
        this.errorMessage = "";
      }

      _createClass(ProfileUnitDetailsComponent, [{
        key: "showEditForm",
        value: function showEditForm() {
          this.isEdit = !this.isEdit;
          this.isBlockSelected = false;
        }
      }, {
        key: "getUnits",
        value: function getUnits(id) {
          var _this53 = this;

          var params = {
            apartmentBlockId: parseInt(id)
          };
          this.apartmentService.getApartmentBlockUnitByBlockId(params).subscribe(function (res) {
            _this53.blockUnitData = res;
            _this53.isBlockSelected = true;
          });
        }
      }, {
        key: "getUnitType",
        value: function getUnitType(name) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.unitTypeData, function (item) {
            if (item.lookupValueName === name) return item;
          });

          if (data === undefined || data.length == 0) {
            this.unitTypeId = null;
          } else {
            this.unitTypeId = data[0].lookupValueId;
          }
        }
      }, {
        key: "getUnitName",
        value: function getUnitName(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.unitNameList, function (item) {
            if (item.apartmentBlockUnitId === id) {
              return item;
            }
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].apartmentBlockUnitNumber;
          }
        }
      }, {
        key: "showUnitDetails",
        value: function showUnitDetails(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.unitNameList, function (item) {
            if (item.apartmentBlockUnitId == id) {
              return item;
            }
          });
          this.isUnitSelected = true;

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.block = data[0];
            this.getUnits(this.block.apartmentBlockId);
            this.getUnitType(this.block.unitType);
            this.getUnitUserId(id);
          }

          console.log(this.block);
        }
      }, {
        key: "getUnitUserId",
        value: function getUnitUserId(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.unitListData, function (item) {
            if (item.apartmentBlockUnitId == id) {
              return item;
            }
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.apartmentBlockUnitUserId = data[0].apartmentBlockUnitUserId;
          }
        }
      }, {
        key: "submitProfileUnitForm",
        value: function submitProfileUnitForm(form) {
          var _this54 = this;

          this.isUserDataLoaded = false;
          var apartmentBlockUnitUser = {
            "apartmentBlockUnitUserId": parseInt(this.apartmentBlockUnitUserId),
            "apartmentBlockUnitId": parseInt(this.block.apartmentBlockUnitId),
            "userId": parseInt(this.cookieService.get('userId')),
            "userTypeId": parseInt(this.userType),
            "isPrimaryContact": true,
            "isActive": this.block.isActive,
            "insertedBy": 0,
            "insertedOn": "2019-12-14T07:01:44.740Z",
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": "2019-12-14T07:01:44.740Z"
          };
          var apartmentBlockUnitUserParams = {
            apartmentBlockUnitUser: apartmentBlockUnitUser
          };
          this.apartmentService.updateApartmentBlockUnitUser(apartmentBlockUnitUserParams).subscribe(function (res) {
            if (res.message) {
              var details = {
                "apartmentBlockUnitId": parseInt(_this54.block.apartmentBlockUnitId),
                "apartmentBlockUnitNumber": _this54.block.apartmentBlockUnitNumber,
                "apartmentBlockId": parseInt(_this54.block.apartmentBlockId),
                "unitTypeId": _this54.unitTypeId,
                "builtupArea": _this54.block.builtupArea,
                "carpetArea": _this54.block.carpetArea,
                "intercom": _this54.block.intercom,
                "cars": parseInt(_this54.block.cars),
                "isAvailableForRent": _this54.block.isAvailableForRent,
                "availableDate": "2019-12-13T07:07:59.550Z",
                "rentAmount": _this54.block.rentAmount,
                "advanceAmount": _this54.block.advanceAmount,
                "isPetsAllowed": _this54.block.isPetsAllowed,
                "isFurnished": _this54.block.isFurnished,
                "isVacant": _this54.block.isVacant,
                "propertyManagerId": null,
                "isActive": _this54.block.isActive,
                "insertedBy": _this54.block.insertedBy,
                "insertedOn": _this54.block.insertedOn,
                "updatedBy": parseInt(_this54.cookieService.get('userId')),
                "updatedOn": new Date().toISOString()
              };
              var apartmentBlockUnitParams = {
                apartmentBlockUnit: details
              };

              _this54.apartmentService.updateApartmentBlockUnit(apartmentBlockUnitParams).subscribe(function (res) {
                if (res.message) {
                  _this54.isUserDataLoaded = true;
                  _this54.isEdit = false;

                  _this54.sharedService.setAlertMessage("Unit updated successfully");

                  _this54.isBlockSelected = false;
                } else {
                  _this54.isError = true;
                  _this54.errorMessage = res.errorMessage;
                }
              }, function (error) {});
            } else {
              _this54.isError = true;
              _this54.errorMessage = res.errorMessage;
            }
          }, function (error) {
            _this54.isError = true;
            _this54.errorMessage = "Some error occured";
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this55 = this;

          this.block = {};

          if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
          } else {
            this.userId = parseInt(this.cookieService.get('userId'));
          }

          this.unitNameList = [];
          var blockParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.apartmentService.getApartmentBlockByApartmentId(blockParams).subscribe(function (res) {
            _this55.blockData = res;
          });
          var queryParamBase = {
            userId: this.userId
          }; // get role

          this.userService.getRolesByUserId(queryParamBase).subscribe(function (data) {
            _this55.userType = data[0].roleId.toString();
          }, function (error) {});
          var unitTypeParams = {
            LookupTypeId: 1
          };
          this.lookupService.getLookupValueByLookupTypeId(unitTypeParams).subscribe(function (res) {
            _this55.unitTypeData = res;
            var queryParamBase = {
              userId: _this55.userId
            };

            _this55.apartmentService.getAllApartmentBlockUnitUsersByUserId(queryParamBase).subscribe(function (unit) {
              _this55.unitListData = unit;
              underscore__WEBPACK_IMPORTED_MODULE_8__["each"](_this55.unitListData, function (item) {
                var queryParamBase = {
                  apartmentBlockUnitId: item.apartmentBlockUnitId
                };

                _this55.apartmentService.getApartmentBlockUnitById(queryParamBase).subscribe(function (data) {
                  _this55.unitNameList.push(data[0]);

                  _this55.isUserDataLoaded = true;
                  var id = _this55.unitListData[0].apartmentBlockUnitId;

                  _this55.showUnitDetails(id);
                }, function (error) {});
              });
            }, function (error) {});
          });
        }
      }]);

      return ProfileUnitDetailsComponent;
    }();

    ProfileUnitDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProfileUnitDetailsComponent.prototype, "userId", void 0);
    ProfileUnitDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-unit-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-unit-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-unit-details.component.scss */
      "./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], ProfileUnitDetailsComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsProfileUnitStaffsProfileUnitStaffsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtdW5pdC1zdGFmZnMvcHJvZmlsZS11bml0LXN0YWZmcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ProfileUnitStaffsComponent */

  /***/
  function srcAppUserMyProfileComponentsProfileUnitStaffsProfileUnitStaffsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileUnitStaffsComponent", function () {
      return ProfileUnitStaffsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileUnitStaffsComponent =
    /*#__PURE__*/
    function () {
      function ProfileUnitStaffsComponent() {
        _classCallCheck(this, ProfileUnitStaffsComponent);
      }

      _createClass(ProfileUnitStaffsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileUnitStaffsComponent;
    }();

    ProfileUnitStaffsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-unit-staffs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-unit-staffs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-unit-staffs.component.scss */
      "./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProfileUnitStaffsComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsProfileUserAbsenceProfileUserAbsenceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtdXNlci1hYnNlbmNlL3Byb2ZpbGUtdXNlci1hYnNlbmNlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ProfileUserAbsenceComponent */

  /***/
  function srcAppUserMyProfileComponentsProfileUserAbsenceProfileUserAbsenceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileUserAbsenceComponent", function () {
      return ProfileUserAbsenceComponent;
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


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");

    var ProfileUserAbsenceComponent =
    /*#__PURE__*/
    function () {
      function ProfileUserAbsenceComponent(router, route, injector, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, ProfileUserAbsenceComponent);

        this.router = router;
        this.route = route;
        this.injector = injector;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.showHistory = false;
      }

      _createClass(ProfileUserAbsenceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.data = {};
          this.userId = this.route.params['value'].id; // this.apartmentService.getAllApartmentBlockUnitUsersByUserId(this.userId).subscribe((unit:any) => {
          //   this.unitListData = unit;
        }
      }, {
        key: "getOutPutParams",
        value: function getOutPutParams(params) {
          if (params === "back") {
            this.showHistory = false;
          }
        }
      }, {
        key: "showHistoryList",
        value: function showHistoryList() {
          this.showHistory = true;
        }
      }, {
        key: "submitAbsenceForm",
        value: function submitAbsenceForm(form) {
          var _this56 = this;

          var details = {
            "apartmentId": 0,
            "apartmentBlockUnitId": 0,
            "outFrom": this.data.outFrom,
            "outTo": this.data.outTo,
            "localContactP1": this.data.localContactP1,
            "localContactP1phone": this.data.localContactP1phone,
            "localcontactP1alternatephone": this.data.localcontactP1alternatephone,
            "localcontactP1email": this.data.localcontactP1email,
            "localContactP2": this.data.localContactP2,
            "localContactP2phone": this.data.localContactP2phone,
            "localcontactP2alternatephone": this.data.localcontactP2alternatephone,
            "localcontactP2email": this.data.localcontactP2email,
            "outofCondoStatusId": 0,
            "isActive": true,
            "insertedBy": this.userId,
            "insertedOn": moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).utc().format().toString(),
            "updatedBy": this.userId,
            "updatedOn": moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).utc().format().toString(),
            "apartmentBlockUnitUserId": 0
          };
          var params = {
            apartmentLongAbsence: details
          };
          this.apartmentService.addApartmentLongAbsence(params).subscribe(function (data) {
            if (data.message) {
              _this56.data = {};
            }
          }, function (error) {});
        }
      }]);

      return ProfileUserAbsenceComponent;
    }();

    ProfileUserAbsenceComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
      }, {
        type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    ProfileUserAbsenceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-user-absence',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-user-absence.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-user-absence.component.scss */
      "./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], ProfileUserAbsenceComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.scss":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.scss ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsProfileVehicleDetailsProfileVehicleDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtdmVoaWNsZS1kZXRhaWxzL3Byb2ZpbGUtdmVoaWNsZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: ProfileVehicleDetailsComponent */

  /***/
  function srcAppUserMyProfileComponentsProfileVehicleDetailsProfileVehicleDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileVehicleDetailsComponent", function () {
      return ProfileVehicleDetailsComponent;
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


    var src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Vehicle */
    "./src/app/api/controllers/Vehicle.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var ProfileVehicleDetailsComponent =
    /*#__PURE__*/
    function () {
      function ProfileVehicleDetailsComponent(router, route, userService, vehicleService, apartmentService, sharedService, lookupService, cookieService) {
        _classCallCheck(this, ProfileVehicleDetailsComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.vehicleService = vehicleService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isEdit = false;
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ProfileVehicleDetailsComponent, [{
        key: "showEditForm",
        value: function showEditForm() {
          this.isEdit = !this.isEdit;
        }
      }, {
        key: "getVehicleType",
        value: function getVehicleType(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.vehicleTypeList, function (item) {
            if (item.lookupValueId === id) {
              return item;
            }
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName;
          }
        }
      }, {
        key: "submitProfilVehicleForm",
        value: function submitProfilVehicleForm(form) {
          var _this57 = this;

          this.isDataLoaded = false;

          if (!this.isEdit) {
            var details = {
              "vehicleNumber": this.vehicle.vehicleNumber,
              "vehicleTypeId": parseInt(this.vehicle.vehicleTypeId),
              "vehicleManufacturer": this.vehicle.vehicleManufacturer,
              "vehicleModel": this.vehicle.vehicleModel,
              "vehicleDriverNumber": this.vehicle.vehicleDriverNumber,
              "vehicleColor": this.vehicle.vehicleColor,
              "isActive": this.vehicle.isActive,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": 0,
              "updatedOn": "2020-03-26T20:23:25.938Z"
            };
            var vehicleParams = {
              vehicle: details
            };
            this.vehicleService.addVehicle(vehicleParams).subscribe(function (res) {
              if (res.message) {
                var unitDetails = {
                  "apartmentBlockUnitId": parseInt(_this57.apartmentBlockUnitId),
                  "vehicleId": res.message,
                  "userId": parseInt(_this57.userId),
                  "documentId": null,
                  "parkingSlotId": null,
                  "stickerNumber": "string",
                  "rfid": "string",
                  "fromDate": "2020-03-26T20:30:26.576Z",
                  "toDate": "2020-03-26T20:30:26.576Z",
                  "isPassIssued": true,
                  "isActive": true,
                  "insertedBy": parseInt(_this57.cookieService.get('userId')),
                  "insertedOn": new Date().toISOString(),
                  "updatedBy": 0,
                  "updatedOn": "2020-03-26T20:30:26.576Z"
                };
                var unitParams = {
                  apartmentBlockUnitVehicle: unitDetails
                };

                _this57.vehicleService.addApartmentBlockUnitVehicle(unitParams).subscribe(function (res) {
                  if (res.message) {
                    _this57.isDataLoaded = true;

                    _this57.sharedService.setAlertMessage("Vehicle added successfully");

                    _this57.outputParams.emit(true);
                  } else {
                    _this57.isDataLoaded = true;
                  }
                });
              } else {
                _this57.isDataLoaded = true;
              }
            });
          } else {
            var _details3 = {
              "vehicleId": parseInt(this.vehicle.vehicleId),
              "vehicleNumber": this.vehicle.vehicleNumber,
              "vehicleTypeId": parseInt(this.vehicle.vehicleTypeId),
              "vehicleManufacturer": this.vehicle.vehicleManufacturer,
              "vehicleModel": this.vehicle.vehicleModel,
              "vehicleDriverNumber": this.vehicle.vehicleDriverNumber,
              "vehicleColor": this.vehicle.vehicleColor,
              "isActive": this.vehicle.isActive,
              "insertedBy": this.vehicle.insertedBy,
              "insertedOn": this.vehicle.insertedOn,
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": new Date().toISOString()
            };
            var _vehicleParams = {
              vehicle: _details3
            };
            this.vehicleService.updateVehicle(_vehicleParams).subscribe(function (res) {
              if (res.message) {
                var unitDetails = {
                  "apartmentBlockUnitVehicleId": parseInt(_this57.vehicleUnit.apartmentBlockUnitVehicleId),
                  "apartmentBlockUnitId": parseInt(_this57.apartmentBlockUnitId),
                  "vehicleId": parseInt(_this57.vehicle.vehicleId),
                  "userId": parseInt(_this57.userId),
                  "documentId": null,
                  "parkingSlotId": null,
                  "stickerNumber": "string",
                  "rfid": "string",
                  "fromDate": "2020-03-26T20:30:26.576Z",
                  "toDate": "2020-03-26T20:30:26.576Z",
                  "isPassIssued": _this57.vehicle.isPassIssued,
                  "isActive": _this57.vehicle.isActive,
                  "insertedBy": _this57.vehicle.insertedBy,
                  "insertedOn": _this57.vehicle.insertedOn,
                  "updatedBy": parseInt(_this57.cookieService.get('userId')),
                  "updatedOn": new Date().toISOString()
                };
                var unitParams = {
                  apartmentBlockUnitVehicle: unitDetails
                };

                _this57.vehicleService.updateApartmentBlockUnitVehicle(unitParams).subscribe(function (res) {
                  if (res.message) {
                    _this57.isDataLoaded = true;

                    _this57.sharedService.setAlertMessage("Vehicle updated successfully");

                    _this57.outputParams.emit(true);
                  } else {
                    _this57.isDataLoaded = true;
                  }
                });
              } else {
                _this57.isDataLoaded = true;
              }
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this58 = this;

          if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
          } else {
            this.userId = parseInt(this.cookieService.get('userId'));
          }

          this.vehicleUnit = {};
          this.vehicle = {};

          if (this.vehicleData != undefined) {
            this.vehicleUnit = this.vehicleData;
            this.vehicle = this.vehicleData.vehicle;
          } else {
            this.vehicle.vehicleTypeId = "";
          }

          this.isDataLoaded = true;
          var vehcileTypeParams = {
            LookupTypeId: 2
          };
          this.lookupService.getLookupValueByLookupTypeId(vehcileTypeParams).subscribe(function (res) {
            _this58.vehicleTypeList = res;
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {}
      }]);

      return ProfileVehicleDetailsComponent;
    }();

    ProfileVehicleDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_4__["VehicleService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProfileVehicleDetailsComponent.prototype, "vehicleData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ProfileVehicleDetailsComponent.prototype, "isVehicleNew", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProfileVehicleDetailsComponent.prototype, "apartmentBlockUnitId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProfileVehicleDetailsComponent.prototype, "outputParams", void 0);
    ProfileVehicleDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-vehicle-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-vehicle-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-vehicle-details.component.scss */
      "./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_4__["VehicleService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])], ProfileVehicleDetailsComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsProfileVehiclesProfileVehiclesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtdmVoaWNsZXMvcHJvZmlsZS12ZWhpY2xlcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ProfileVehiclesComponent */

  /***/
  function srcAppUserMyProfileComponentsProfileVehiclesProfileVehiclesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileVehiclesComponent", function () {
      return ProfileVehiclesComponent;
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


    var src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Vehicle */
    "./src/app/api/controllers/Vehicle.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var ProfileVehiclesComponent =
    /*#__PURE__*/
    function () {
      function ProfileVehiclesComponent(router, route, userService, vehicleService, apartmentService, sharedService, lookupService, cookieService) {
        _classCallCheck(this, ProfileVehiclesComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.vehicleService = vehicleService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isUserDataLoaded = false;
        this.isUnitSelected = false;
        this.userUnitId = "";
        this.isError = false;
        this.errorMessage = "";
        this.isVehicleAvailable = false;
      }

      _createClass(ProfileVehiclesComponent, [{
        key: "showUnitDetails",
        value: function showUnitDetails(id) {
          var _this59 = this;

          this.isUserDataLoaded = false;
          this.isUnitSelected = true;
          var vehicleListParams = {
            apartmentBlockUnitId: parseInt(id)
          };
          this.vehicleService.getAllVehiclesByApartmentBlockUnitId(vehicleListParams).subscribe(function (res) {
            _this59.vehicleDataList = res;
            _this59.isUserDataLoaded = true;
          });
          var parkingListParams = {
            apartmentIdBlockUnitId: parseInt(id)
          };
          this.vehicleService.getParkingSlotByApartmentIdUnitId(parkingListParams).subscribe(function (res) {
            _this59.parkingSlotsDataList = res;
          });
        }
      }, {
        key: "getVehicleType",
        value: function getVehicleType(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.vehicleTypeList, function (item) {
            if (item.lookupValueId === id) {
              return item;
            }
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName;
          }
        }
      }, {
        key: "getUnitName",
        value: function getUnitName(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.unitNameList, function (item) {
            if (item.apartmentBlockUnitId === id) {
              return item;
            }
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].apartmentBlockUnitNumber;
          }
        }
      }, {
        key: "getParams",
        value: function getParams(event) {
          var _this60 = this;

          if (event) {
            var params = {
              apartmentBlockUnitId: parseInt(this.userUnitId)
            };
            this.vehicleService.getAllVehiclesByApartmentBlockUnitId(params).subscribe(function (res) {
              _this60.vehicleDataList = res;
              _this60.isUserDataLoaded = true;
            });
          }
        }
      }, {
        key: "isPlotNotAvailable",
        value: function isPlotNotAvailable() {
          return this.parkingSlotsDataList == 0 ? true : false;
        }
      }, {
        key: "isVehicleNotAvailable",
        value: function isVehicleNotAvailable() {
          return this.vehicleDataList == 0 ? true : false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this61 = this;

          if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
          } else {
            this.userId = parseInt(this.cookieService.get('userId'));
          }

          this.unitNameList = [];
          var blockParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.apartmentService.getApartmentBlockByApartmentId(blockParams).subscribe(function (res) {
            _this61.blockData = res;
          });
          var vehicleTypeParams = {
            LookupTypeId: 2
          };
          this.lookupService.getLookupValueByLookupTypeId(vehicleTypeParams).subscribe(function (res) {
            _this61.vehicleTypeList = res;
          });
          var unitTypeParams = {
            LookupTypeId: 1
          };
          this.lookupService.getLookupValueByLookupTypeId(unitTypeParams).subscribe(function (res) {
            _this61.unitTypeData = res;

            _this61.apartmentService.getAllApartmentBlockUnitUsersByUserId(_this61.userId).subscribe(function (unit) {
              _this61.unitListData = unit;
              underscore__WEBPACK_IMPORTED_MODULE_9__["each"](_this61.unitListData, function (item) {
                _this61.apartmentService.getApartmentBlockUnitById(item.apartmentBlockUnitId).subscribe(function (data) {
                  _this61.unitNameList.push(data[0]);

                  _this61.isUserDataLoaded = true;
                  var id = _this61.unitListData[0].apartmentBlockUnitId;

                  _this61.showUnitDetails(id);
                }, function (error) {});
              });
            }, function (error) {});
          });
        }
      }]);

      return ProfileVehiclesComponent;
    }();

    ProfileVehiclesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_4__["VehicleService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProfileVehiclesComponent.prototype, "userId", void 0);
    ProfileVehiclesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-vehicles',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-vehicles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-vehicles.component.scss */
      "./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_4__["VehicleService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])], ProfileVehiclesComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.scss":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.scss ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsPropertyManagerPropertyManagerCreatePropertyManagerCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb3BlcnR5LW1hbmFnZXIvcHJvcGVydHktbWFuYWdlci1jcmVhdGUvcHJvcGVydHktbWFuYWdlci1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.ts":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.ts ***!
    \**************************************************************************************************************************/

  /*! exports provided: PropertyManagerCreateComponent */

  /***/
  function srcAppUserMyProfileComponentsPropertyManagerPropertyManagerCreatePropertyManagerCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyManagerCreateComponent", function () {
      return PropertyManagerCreateComponent;
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


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/api/controllers/PropertyManager */
    "./src/app/api/controllers/PropertyManager.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");

    var PropertyManagerCreateComponent =
    /*#__PURE__*/
    function () {
      function PropertyManagerCreateComponent(router, route, injector, dialog, userService, propertyManagerService, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, PropertyManagerCreateComponent);

        this.router = router;
        this.route = route;
        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.propertyManagerService = propertyManagerService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = true;
        this.isError = false;
        this.errorMessage = false;
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_11__["ModalService"]);
      }

      _createClass(PropertyManagerCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.propertyData = {};
          this.userId = this.route.params['value'].id;
        }
      }, {
        key: "IsValidEmail",
        value: function IsValidEmail(val) {
          var retVal = true;
          var rex = new RegExp(/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/);
          var isValid = rex.test(val);

          if (!isValid) {
            retVal = false;
            var errorDetails = {
              msg: "Kindly enter proper email id",
              type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
          }

          return retVal;
        }
      }, {
        key: "IsvalidatePhoneNo",
        value: function IsvalidatePhoneNo(val) {
          var retVal = true;
          var rex = new RegExp(/^[+]?\d+$/);
          var isValid = rex.test(val);
          console.log(val.length);

          if (val.length > 13) {
            retVal = false;
            var errorDetails = {
              msg: "phone no length should be within 13 characters",
              type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
          }

          if (!isValid) {
            retVal = false;
            var errorDetails = {
              msg: "Kindly enter proper phoneno",
              type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
          }

          return retVal;
        }
      }, {
        key: "isValueValid",
        value: function isValueValid(val) {
          return val === undefined || val == null || val.length <= 0 || val === "" ? true : false;
        }
      }, {
        key: "submitPropertyManagerCreateForm",
        value: function submitPropertyManagerCreateForm(form) {
          var _this62 = this;

          this.isDataLoaded = false;
          var details = {
            "propertyManagerName": this.propertyData.propertyManagerName,
            "contactPerson": this.propertyData.contactPerson,
            "email": this.propertyData.email,
            "phone1": this.propertyData.phone1,
            "phone2": this.propertyData.phone2,
            "address1": this.propertyData.address1,
            "address2": this.propertyData.address2,
            "city": this.propertyData.city,
            "state": this.propertyData.state,
            "pin": this.propertyData.pin,
            "isActive": true,
            "insertedBy": this.userId,
            "insertedOn": moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).utc().format().toString(),
            "updatedBy": this.userId,
            "updatedOn": moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).utc().format().toString()
          };
          var params = {
            propertyManager: details
          };
          this.propertyManagerService.addPropertyManager(params).subscribe(function (res) {
            console.log('res', res);

            if (res.message) {
              _this62.sharedService.setAlertMessage("Property Manager added successfully");

              _this62.propertyData = {};
              _this62.isDataLoaded = true;

              _this62.outputParams.emit('close');
            }
          }, function (error) {
            _this62.isDataLoaded = true;
            console.log(error);
          });
        }
      }]);

      return PropertyManagerCreateComponent;
    }();

    PropertyManagerCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_7__["PropertyManagerService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"]
      }, {
        type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], PropertyManagerCreateComponent.prototype, "outputParams", void 0);
    PropertyManagerCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-manager-create',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-manager-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-manager-create.component.scss */
      "./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_6__["UserService"], src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_7__["PropertyManagerService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], PropertyManagerCreateComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/property-manager/property-manager.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/property-manager/property-manager.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileComponentsPropertyManagerPropertyManagerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb3BlcnR5LW1hbmFnZXIvcHJvcGVydHktbWFuYWdlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/components/property-manager/property-manager.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/user/my-profile/components/property-manager/property-manager.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: PropertyManagerComponent */

  /***/
  function srcAppUserMyProfileComponentsPropertyManagerPropertyManagerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyManagerComponent", function () {
      return PropertyManagerComponent;
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


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */
    "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");
    /* harmony import */


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/api/controllers/PropertyManager */
    "./src/app/api/controllers/PropertyManager.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/api/controllers/Vehicle */
    "./src/app/api/controllers/Vehicle.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");

    var PropertyManagerComponent =
    /*#__PURE__*/
    function () {
      function PropertyManagerComponent(router, route, injector, dialog, userService, propertyManagerService, apartmentService, vehicleService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, PropertyManagerComponent);

        this.router = router;
        this.route = route;
        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.propertyManagerService = propertyManagerService;
        this.apartmentService = apartmentService;
        this.vehicleService = vehicleService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isError = false;
        this.errorMessage = false;
        this.isEdit = false;
        this.isCreate = false;
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_13__["ModalService"]);
      }

      _createClass(PropertyManagerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this63 = this;

          this.userId = this.route.params['value'].id;
          this.apartmentService.getApartmentBlockUnitByUserId(this.userId).subscribe(function (res) {
            var data = res[0] || {};
            _this63.apartmentBlockUnitId = data.apartmentBlockUnitId;

            _this63.propertyManagerService.getPropertyManagerByApartmentBlockUnitId(_this63.apartmentBlockUnitId).subscribe(function (res) {
              if (res[0] != null) {
                _this63.propertyData = res.filter(function (item) {
                  return item.isActive;
                });
              }

              _this63.isDataLoaded = true;
              console.log('propertyData', _this63.propertyData);
            }, function (error) {
              console.log(error);
            });
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "showEditForm",
        value: function showEditForm() {
          this.isEdit = !this.isEdit;
        }
      }, {
        key: "IsValidEmail",
        value: function IsValidEmail(val) {
          var retVal = true;
          var rex = new RegExp(/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/);
          var isValid = rex.test(val);

          if (!isValid) {
            retVal = false;
            var errorDetails = {
              msg: "Kindly enter proper email id",
              type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
          }

          return retVal;
        }
      }, {
        key: "IsvalidatePhoneNo",
        value: function IsvalidatePhoneNo(val) {
          var retVal = true;
          var rex = new RegExp(/^[+]?\d+$/);
          var isValid = rex.test(val);
          console.log(val.length);

          if (val.length > 13) {
            retVal = false;
            var errorDetails = {
              msg: "phone no length should be within 13 characters",
              type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
          }

          if (!isValid) {
            retVal = false;
            var errorDetails = {
              msg: "Kindly enter proper phoneno",
              type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
          }

          return retVal;
        }
      }, {
        key: "isValueValid",
        value: function isValueValid(val) {
          return val === undefined || val == null || val.length <= 0 || val === "" ? true : false;
        }
      }, {
        key: "submitpropertyManagerForm",
        value: function submitpropertyManagerForm(form) {
          var _this64 = this;

          this.isDataLoaded = false;
          var details = {
            "propertyManagerId": this.propertyData.propertyManagerId,
            "propertyManagerName": this.propertyData.propertyManagerName,
            "contactPerson": this.propertyData.contactPerson,
            "email": this.propertyData.email,
            "phone1": this.propertyData.phone1,
            "phone2": this.propertyData.phone2,
            "address1": this.propertyData.address1,
            "address2": this.propertyData.address2,
            "city": this.propertyData.city,
            "state": this.propertyData.state,
            "pin": this.propertyData.pin,
            "isActive": this.propertyData.isActive,
            "insertedBy": this.propertyData.insertedBy,
            "insertedOn": this.propertyData.insertedOn,
            "updatedBy": this.userId,
            "updatedOn": moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).utc().format().toString()
          };
          var propertyManagerParams = {
            propertyManager: details
          };
          this.propertyManagerService.updatePropertyManager(propertyManagerParams).subscribe(function (res) {
            console.log('res', res);

            if (res.message) {
              _this64.sharedService.setAlertMessage("Property Manager updated successfully");

              _this64.isEdit = false;

              _this64.propertyManagerService.getPropertyManagerByApartmentBlockUnitId(_this64.apartmentBlockUnitId).subscribe(function (res) {
                _this64.propertyData = res[0] || {};
                _this64.isDataLoaded = true;
                console.log('propertyData', _this64.propertyData);
              }, function (error) {
                console.log(error);
              });
            }
          }, function (error) {
            _this64.isDataLoaded = true;
            console.log(error);
          });
        }
      }, {
        key: "deletePropertyManager",
        value: function deletePropertyManager() {
          var _this65 = this;

          var message = "Are you sure want to delete?";
          var dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogModel"]("Confirm Action", message);
          var dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["CommonConfirmModalComponent"], {
            panelClass: 'material',
            disableClose: true,
            data: dialogData
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            if (dialogResult) {
              _this65.isDataLoaded = false;
              var details = {
                "propertyManagerId": _this65.propertyData.propertyManagerId,
                "deleteBy": _this65.userId
              };

              _this65.propertyManagerService.deletePropertyManager(details).subscribe(function (res) {
                if (res.message) {
                  _this65.sharedService.setAlertMessage("Property Manager Deleted successfully");
                }
              }, function (error) {});
            }
          });
        }
      }, {
        key: "showCreateManager",
        value: function showCreateManager() {
          this.isCreate = true;
        }
      }, {
        key: "getOutPutParams",
        value: function getOutPutParams() {
          var _this66 = this;

          this.propertyManagerService.getPropertyManagerByApartmentBlockUnitId(this.apartmentBlockUnitId).subscribe(function (res) {
            if (res[0] != null) {
              _this66.propertyData = res.filter(function (item) {
                return item.isActive;
              });
            }

            _this66.isDataLoaded = true;
            console.log('propertyData', _this66.propertyData);
          }, function (error) {
            console.log(error);
          });
          this.isCreate = false;
          console.log('in');
        }
      }]);

      return PropertyManagerComponent;
    }();

    PropertyManagerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }, {
        type: src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_8__["PropertyManagerService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_9__["ApartmentService"]
      }, {
        type: src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_10__["VehicleService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_11__["LookupService"]
      }, {
        type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], PropertyManagerComponent.prototype, "outputParams", void 0);
    PropertyManagerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-manager',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-manager.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/property-manager/property-manager.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-manager.component.scss */
      "./src/app/user/my-profile/components/property-manager/property-manager.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_7__["UserService"], src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_8__["PropertyManagerService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_9__["ApartmentService"], src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_10__["VehicleService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_11__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], PropertyManagerComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/my-profile-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/user/my-profile/my-profile-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: MyProfileRoutingModule */

  /***/
  function srcAppUserMyProfileMyProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfileRoutingModule", function () {
      return MyProfileRoutingModule;
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


    var _my_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-profile.component */
    "./src/app/user/my-profile/my-profile.component.ts");
    /* harmony import */


    var _components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/profile-vehicles/profile-vehicles.component */
    "./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.ts");
    /* harmony import */


    var _components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/profile-family-members/profile-family-members.component */
    "./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.ts");
    /* harmony import */


    var _components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/profile-pet/profile-pet.component */
    "./src/app/user/my-profile/components/profile-pet/profile-pet.component.ts");
    /* harmony import */


    var _components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/property-manager/property-manager.component */
    "./src/app/user/my-profile/components/property-manager/property-manager.component.ts");
    /* harmony import */


    var _components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/profile-unit-details/profile-unit-details.component */
    "./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.ts");
    /* harmony import */


    var _components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/profile-unit-staffs/profile-unit-staffs.component */
    "./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.ts");
    /* harmony import */


    var _components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/profile-lease-info/profile-lease-info.component */
    "./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.ts");
    /* harmony import */


    var _components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/profile-interest-group/profile-interest-group.component */
    "./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.ts");
    /* harmony import */


    var _components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/profile-basic/profile-basic.component */
    "./src/app/user/my-profile/components/profile-basic/profile-basic.component.ts");
    /* harmony import */


    var _components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/profile-user-absence/profile-user-absence.component */
    "./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.ts");
    /* harmony import */


    var _components_property_manager_property_manager_create_property_manager_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/property-manager/property-manager-create/property-manager-create.component */
    "./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.ts");

    var routes = [{
      path: '',
      component: _my_profile_component__WEBPACK_IMPORTED_MODULE_3__["MyProfileComponent"],
      children: [{
        path: '',
        redirectTo: 'basic',
        pathMatch: 'full'
      }, {
        path: 'basic',
        component: _components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_12__["ProfileBasicComponent"]
      }, {
        path: 'basic/:id',
        component: _components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_12__["ProfileBasicComponent"]
      }, {
        path: 'unit/:id',
        component: _components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_8__["ProfileUnitDetailsComponent"]
      }, {
        path: 'staffs/:id',
        component: _components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_9__["ProfileUnitStaffsComponent"]
      }, {
        path: 'vehicles/:id',
        component: _components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_4__["ProfileVehiclesComponent"]
      }, {
        path: 'pets/:id',
        component: _components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_6__["ProfilePetComponent"]
      }, {
        path: 'propertymanager/:id',
        component: _components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_7__["PropertyManagerComponent"]
      }, {
        path: 'propertymanager/create',
        component: _components_property_manager_property_manager_create_property_manager_create_component__WEBPACK_IMPORTED_MODULE_14__["PropertyManagerCreateComponent"]
      }, {
        path: 'family/:id',
        component: _components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_5__["ProfileFamilyMembersComponent"]
      }, {
        path: 'lease/:id',
        component: _components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_10__["ProfileLeaseInfoComponent"]
      }, {
        path: 'interest/:id',
        component: _components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_11__["ProfileInterestGroupComponent"]
      }, {
        path: 'absence/:id',
        component: _components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_13__["ProfileUserAbsenceComponent"]
      }, {
        path: '**',
        redirectTo: 'basic',
        pathMatch: 'full'
      }]
    }, {
      path: 'myprofile/basic',
      component: _components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_12__["ProfileBasicComponent"]
    }, {
      path: 'myprofile/basic/:id',
      component: _components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_12__["ProfileBasicComponent"]
    }, {
      path: 'myprofile/unit/:id',
      component: _components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_8__["ProfileUnitDetailsComponent"]
    }, {
      path: 'myprofile/staffs/:id',
      component: _components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_9__["ProfileUnitStaffsComponent"]
    }, {
      path: 'myprofile/vehicles/:id',
      component: _components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_4__["ProfileVehiclesComponent"]
    }, {
      path: 'myprofile/pets/:id',
      component: _components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_6__["ProfilePetComponent"]
    }, {
      path: 'myprofile/propertymanager/:id',
      component: _components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_7__["PropertyManagerComponent"]
    }, {
      path: 'myprofile/propertymanager/create',
      component: _components_property_manager_property_manager_create_property_manager_create_component__WEBPACK_IMPORTED_MODULE_14__["PropertyManagerCreateComponent"]
    }, {
      path: 'myprofile/family/:id',
      component: _components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_5__["ProfileFamilyMembersComponent"]
    }, {
      path: 'myprofile/lease/:id',
      component: _components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_10__["ProfileLeaseInfoComponent"]
    }, {
      path: 'myprofile/interest/:id',
      component: _components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_11__["ProfileInterestGroupComponent"]
    }, {
      path: 'myprofile/absence/:id',
      component: _components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_13__["ProfileUserAbsenceComponent"]
    }];

    var MyProfileRoutingModule = function MyProfileRoutingModule() {
      _classCallCheck(this, MyProfileRoutingModule);
    };

    MyProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyProfileRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/my-profile/my-profile.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/user/my-profile/my-profile.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserMyProfileMyProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-profile-wrapper .card.user-card .card-body {\n  padding: 30px 20px;\n}\n.my-profile-wrapper .card.user-card .card-body h5 {\n  padding: 0 0 2px 0;\n  color: #373946;\n}\n.my-profile-wrapper .card.user-card .profile-icon {\n  width: 80px;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 80px !important;\n  overflow: hidden;\n  margin: 0 30px 0 0;\n}\n@media (max-width: 768px) {\n  .my-profile-wrapper .card.user-card .profile-icon {\n    width: 60px;\n    height: 60px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 60px !important;\n    margin: 0 15px 0 0;\n  }\n}\n.my-profile-wrapper .card.user-card p {\n  font-size: 1.4rem;\n  color: #5f5f5f;\n}\n.my-profile-wrapper .card.user-card .other {\n  margin: 8px 0 0 0 !important;\n}\n.my-profile-wrapper .card.user-card .other li {\n  margin: 0 30px 0 0;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.my-profile-wrapper .card.user-card .other li .icon {\n  width: 20px;\n  margin: 0 10px 0 0;\n}\n.my-profile-wrapper .card.user-card .other li .icon.phone {\n  width: 18px;\n}\n@media (max-width: 768px) {\n  .my-profile-wrapper .card.user-card .other {\n    margin: 20px 0 0 0 !important;\n  }\n  .my-profile-wrapper .card.user-card .other li {\n    display: block;\n  }\n  .my-profile-wrapper .card.user-card .other li:not(:last-child) {\n    margin: 0 0 10px 0;\n  }\n  .my-profile-wrapper .card.user-card .other li .icon {\n    margin: 0 16px 0 0;\n  }\n}\n.my-profile-wrapper .card.user-card .icon.edit {\n  width: 22px;\n  color: #5cd694;\n}\n.my-profile-wrapper .card .left-menubar {\n  border-right: 1px solid #eaeaea;\n  height: 100% !important;\n}\n.my-profile-wrapper .card .left-menubar h4 {\n  padding: 20px 0 40px 20px;\n  color: #373946;\n}\n.my-profile-wrapper .card .left-menubar .lists li {\n  border-top: 1px solid #eaeaea;\n  padding: 0;\n}\n.my-profile-wrapper .card .left-menubar .lists li a {\n  display: block;\n  font-size: 1.4rem;\n  color: #8391a1;\n  padding: 14px 20px;\n}\n.my-profile-wrapper .card .left-menubar .lists li a .icon {\n  position: relative;\n  top: -3px;\n  margin-right: 16px;\n}\n.my-profile-wrapper .card .left-menubar .lists li a .icon svg {\n  width: 20px;\n  height: 20px;\n  fill: #525e6c;\n}\n.my-profile-wrapper .card .left-menubar .lists li a .icon .truck {\n  width: 21px;\n  height: 21px;\n}\n.my-profile-wrapper .card .left-menubar .lists li a:hover {\n  text-decoration: none;\n  background-color: #f7f7f7;\n  color: #5cd694;\n}\n.my-profile-wrapper .card .left-menubar .lists li a:hover .icon svg {\n  fill: #5cd694;\n}\n.my-profile-wrapper .card .left-menubar .lists li a.active {\n  color: #5cd694;\n}\n.my-profile-wrapper .card .left-menubar .lists li a.active:before {\n  content: \"\";\n  width: 4px;\n  height: 100% !important;\n  background-color: #5cd694;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.my-profile-wrapper .card .left-menubar .lists li a.active .icon svg {\n  fill: #5cd694;\n}\n.my-profile-wrapper .card .left-menubar .lists li:first-child {\n  border-top: none;\n}\n.my-profile-wrapper .card .inner-content {\n  padding: 40px 25px 40px 10px;\n}\n.my-profile-wrapper .card.user-details {\n  width: 100% !important;\n  transition: all 0.15s ease;\n}\n.my-profile-wrapper .card.user-details .main {\n  padding: 20px 15px;\n  overflow: auto;\n}\n.my-profile-wrapper .card.user-details .main h5 {\n  font-size: 2rem;\n  padding: 0 0 6px 0;\n  color: #3f51b5;\n}\n.my-profile-wrapper .card.user-details .main p {\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC91c2VyL215LXByb2ZpbGUvbXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9taXhpbnMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRRztFQUNDLGtCQUFBO0FDUEo7QURRSTtFQUNDLGtCQUFBO0VBQ0EsY0VrRk07QUR4Rlg7QURTRztFR2tFRCxXSGpFbUI7RUdrRW5CLFlIbEVtQjtFR21FbkIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUE5RUQsOEJBQUE7RUhVRyxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURDSTtFQUpEO0lHa0VELFdIN0RvQjtJRzhEcEIsWUg5RG9CO0lHK0RwQixhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQTlFRCw4QkFBQTtJSGNJLGtCQUFBO0VDU0g7QUFDRjtBRFBHO0VJc0RELGlCQUFBO0VKcERLLGNFd0VJO0FEL0RYO0FEUEc7RUFDQyw0QkFBQTtBQ1NKO0FEUkk7RUFDQyxrQkFBQTtFSThCSCwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBYUEsaUJBQUE7RUo1Q0csY0V2QlE7QURxQ2I7QURiSztFQUNDLFdBQUE7RUFDQSxrQkFBQTtBQ2VOO0FEZE07RUFDQyxXQUFBO0FDZ0JQO0FEWkk7RUFmRDtJQWdCRSw2QkFBQTtFQ2VIO0VEZEc7SUFPQyxjQUFBO0VDVUo7RURoQkk7SUFDQyxrQkFBQTtFQ2tCTDtFRGhCSTtJQUNDLGtCQUFBO0VDa0JMO0FBQ0Y7QURiRztFQUNDLFdBQUE7RUFDQSxjRVJTO0FEdUJiO0FEWkU7RUFDQywrQkFBQTtFQUNBLHVCRWtHRztBRHBGTjtBRGJHO0VBQ0MseUJBQUE7RUFDQSxjRTRCTztBRGJYO0FEWkk7RUFDQyw2QkFBQTtFQUNBLFVBQUE7QUNjTDtBRGJLO0VBQ0MsY0FBQTtFSUtKLGlCQUFBO0VKSEksY0VoRU87RUZpRVAsa0JBQUE7QUNlTjtBRGRNO0VBQ0Msa0JFekVGO0VGMEVLLFNBQUE7RUFDQSxrQkFBQTtBQ2dCVjtBRGZPO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDaUJSO0FEZk87RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2lCUjtBRGRNO0VBQ0MscUJBQUE7RUFDQSx5QkVvQkk7RUZuQkosY0U1Q007QUQ0RGI7QURkUTtFQUNDLGFFL0NJO0FEK0RiO0FEWk07RUFDQyxjRXBETTtBRGtFYjtBRGJPO0VBQ0MsV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkV1REY7RUZ0REUseUJFekRLO0VGMERMLGtCRXhHSDtFRnlHRyxNQUFBO0VBQ0EsT0FBQTtBQ2VSO0FEWlE7RUFDQyxhRWhFSTtBRDhFYjtBRFRLO0VBQ0MsZ0JBQUE7QUNXTjtBRE5FO0VBQ0MsNEJBQUE7QUNRSDtBRERFO0VBQ0Msc0JFMkJHO0VDdEhMLDBCSDRGRTtBQ0tIO0FESkc7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNNTDtBRExLO0VJN0RILGVBQUE7RUorREcsa0JBQUE7RUFDQSxjRWxGSTtBRHlGVDtBRExLO0VJbEVILGlCQUFBO0VKb0VTLGNFdklFO0FEOEliIiwiZmlsZSI6InNyYy9hcHAvdXNlci9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLm15LXByb2ZpbGUtd3JhcHBlciB7XG5cblx0LmNhcmQge1xuXHRcdCYudXNlci1jYXJke1xuXHRcdFx0LmNhcmQtYm9keSB7XG5cdFx0XHRcdHBhZGRpbmc6IDMwcHggMjBweDtcblx0XHRcdFx0aDUge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAycHggMDtcblx0XHRcdFx0XHRjb2xvcjogJGdyZXktODAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQucHJvZmlsZS1pY29uIHtcblx0XHRcdFx0QGluY2x1ZGUgY2lyY2xlcyg4MHB4KTtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0bWFyZ2luOiAwIDMwcHggMCAwO1xuXHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0XHRAaW5jbHVkZSBjaXJjbGVzKDYwcHgpO1xuXHRcdFx0XHRcdG1hcmdpbjogMCAxNXB4IDAgMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cCB7XG5cdFx0XHQgXHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0ICAgIFx0XHRjb2xvcjogJGdyZXktNjUwO1xuXHRcdFx0fVxuXHRcdFx0Lm90aGVyIHtcblx0XHRcdFx0bWFyZ2luOiA4cHggMCAwIDAgIWltcG9ydGFudDtcblx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdG1hcmdpbjogMCAzMHB4IDAgMDtcblx0XHRcdFx0XHRAaW5jbHVkZSBkZXNwLXJlZ3VsYXI7XG5cdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdFx0Y29sb3I6ICRsaWdodC1ibHVlO1xuXHRcdFx0XHRcdC5pY29uIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIDEwcHggMCAwO1xuXHRcdFx0XHRcdFx0Ji5waG9uZSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0XHRtYXJnaW46IDIwcHggMCAwIDAgIWltcG9ydGFudDtcblx0XHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0XHQmOm5vdCg6bGFzdC1jaGlsZCl7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMCAwIDEwcHggMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5pY29uIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIDE2cHggMCAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuaWNvbi5lZGl0IHtcblx0XHRcdFx0d2lkdGg6IDIycHg7XG5cdFx0XHRcdGNvbG9yOiAkbGltZS1ncmVlbjtcblx0XHRcdH1cblx0XHR9XG5cdFx0LmxlZnQtbWVudWJhciB7XG5cdFx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkZ3JleS00MDA7XG5cdFx0XHRoZWlnaHQ6ICRmdWxsO1xuXHRcdFx0aDQge1xuXHRcdFx0XHRwYWRkaW5nOiAyMHB4IDAgNDBweCAyMHB4O1xuXHRcdFx0XHRjb2xvcjogJGdyZXktODAwO1xuXHRcdFx0fVxuXHRcdFx0Lmxpc3RzIHtcblx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAkZ3JleS00MDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdFx0XHRjb2xvcjogJGxpZ2h0LWJsdWU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNHB4IDIwcHg7XG5cdFx0XHRcdFx0XHQuaWNvbiB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiAkcmVsO1xuXHRcdFx0XHRcdFx0ICAgIHRvcDogLTNweDtcblx0XHRcdFx0XHRcdCAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRcdGZpbGw6IGRhcmtlbigkbGlnaHQtYmx1ZSwgMjAlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQudHJ1Y2sge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyMXB4O1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMjFweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGdyZXktMTIwO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogJGxpbWUtZ3JlZW47XG5cdFx0XHRcdFx0XHRcdC5pY29uIHsgXG5cdFx0XHRcdFx0XHRcdFx0c3ZnIHtcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGw6ICRsaW1lLWdyZWVuO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogJGxpbWUtZ3JlZW47XG5cdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA0cHg7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAkZnVsbDtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkbGltZS1ncmVlbjtcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogJGFicztcblx0XHRcdFx0XHRcdFx0XHR0b3A6MDtcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5pY29uIHsgXG5cdFx0XHRcdFx0XHRcdFx0c3ZnIHtcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGw6ICRsaW1lLWdyZWVuO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdGJvcmRlci10b3A6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5pbm5lci1jb250ZW50IHtcblx0XHRcdHBhZGRpbmc6IDQwcHggMjVweCA0MHB4IDEwcHg7XG5cdFx0fVxuXHR9XG5cblxuXG5cdC5jYXJkIHtcblx0XHQmLnVzZXItZGV0YWlscyB7XG5cdFx0XHR3aWR0aDogJGZ1bGw7XG5cdFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcblx0XHRcdC5tYWluIHtcblx0XHRcdFx0IHBhZGRpbmc6IDIwcHggMTVweDtcblx0XHRcdFx0IG92ZXJmbG93OiBhdXRvO1xuXHRcdFx0XHQgaDUge1xuXHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbWVkaXVtKTtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgNnB4IDA7XG5cdFx0XHRcdFx0Y29sb3I6ICRtLWJsdWU7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBwIHtcblx0XHRcdFx0IFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdCAgICAgICAgXHRcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdFx0IH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0fVxuXG59XG5cbiIsIi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQudXNlci1jYXJkIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItY2FyZCAuY2FyZC1ib2R5IGg1IHtcbiAgcGFkZGluZzogMCAwIDJweCAwO1xuICBjb2xvcjogIzM3Mzk0Njtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQudXNlci1jYXJkIC5wcm9maWxlLWljb24ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogODBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCAzMHB4IDAgMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItY2FyZCAucHJvZmlsZS1pY29uIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNjBweCAhaW1wb3J0YW50O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNjBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgMTVweCAwIDA7XG4gIH1cbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQudXNlci1jYXJkIHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM1ZjVmNWY7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItY2FyZCAub3RoZXIge1xuICBtYXJnaW46IDhweCAwIDAgMCAhaW1wb3J0YW50O1xufVxuLm15LXByb2ZpbGUtd3JhcHBlciAuY2FyZC51c2VyLWNhcmQgLm90aGVyIGxpIHtcbiAgbWFyZ2luOiAwIDMwcHggMCAwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzgzOTFhMTtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQudXNlci1jYXJkIC5vdGhlciBsaSAuaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItY2FyZCAub3RoZXIgbGkgLmljb24ucGhvbmUge1xuICB3aWR0aDogMThweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItY2FyZCAub3RoZXIge1xuICAgIG1hcmdpbjogMjBweCAwIDAgMCAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQudXNlci1jYXJkIC5vdGhlciBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm15LXByb2ZpbGUtd3JhcHBlciAuY2FyZC51c2VyLWNhcmQgLm90aGVyIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgfVxuICAubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItY2FyZCAub3RoZXIgbGkgLmljb24ge1xuICAgIG1hcmdpbjogMCAxNnB4IDAgMDtcbiAgfVxufVxuLm15LXByb2ZpbGUtd3JhcHBlciAuY2FyZC51c2VyLWNhcmQgLmljb24uZWRpdCB7XG4gIHdpZHRoOiAyMnB4O1xuICBjb2xvcjogIzVjZDY5NDtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQgLmxlZnQtbWVudWJhciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYWVhZWE7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuLm15LXByb2ZpbGUtd3JhcHBlciAuY2FyZCAubGVmdC1tZW51YmFyIGg0IHtcbiAgcGFkZGluZzogMjBweCAwIDQwcHggMjBweDtcbiAgY29sb3I6ICMzNzM5NDY7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkIC5sZWZ0LW1lbnViYXIgLmxpc3RzIGxpIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gIHBhZGRpbmc6IDA7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkIC5sZWZ0LW1lbnViYXIgLmxpc3RzIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjODM5MWExO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkIC5sZWZ0LW1lbnViYXIgLmxpc3RzIGxpIGEgLmljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLm15LXByb2ZpbGUtd3JhcHBlciAuY2FyZCAubGVmdC1tZW51YmFyIC5saXN0cyBsaSBhIC5pY29uIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZpbGw6ICM1MjVlNmM7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkIC5sZWZ0LW1lbnViYXIgLmxpc3RzIGxpIGEgLmljb24gLnRydWNrIHtcbiAgd2lkdGg6IDIxcHg7XG4gIGhlaWdodDogMjFweDtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQgLmxlZnQtbWVudWJhciAubGlzdHMgbGkgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgY29sb3I6ICM1Y2Q2OTQ7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkIC5sZWZ0LW1lbnViYXIgLmxpc3RzIGxpIGE6aG92ZXIgLmljb24gc3ZnIHtcbiAgZmlsbDogIzVjZDY5NDtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQgLmxlZnQtbWVudWJhciAubGlzdHMgbGkgYS5hY3RpdmUge1xuICBjb2xvcjogIzVjZDY5NDtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQgLmxlZnQtbWVudWJhciAubGlzdHMgbGkgYS5hY3RpdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2Q2OTQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuLm15LXByb2ZpbGUtd3JhcHBlciAuY2FyZCAubGVmdC1tZW51YmFyIC5saXN0cyBsaSBhLmFjdGl2ZSAuaWNvbiBzdmcge1xuICBmaWxsOiAjNWNkNjk0O1xufVxuLm15LXByb2ZpbGUtd3JhcHBlciAuY2FyZCAubGVmdC1tZW51YmFyIC5saXN0cyBsaTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkIC5pbm5lci1jb250ZW50IHtcbiAgcGFkZGluZzogNDBweCAyNXB4IDQwcHggMTBweDtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQudXNlci1kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItZGV0YWlscyAubWFpbiB7XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItZGV0YWlscyAubWFpbiBoNSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZzogMCAwIDZweCAwO1xuICBjb2xvcjogIzNmNTFiNTtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQudXNlci1kZXRhaWxzIC5tYWluIHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM4MzkxYTE7XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaW1lLWdyZWVuLTAzOiAjNTJjNTcwO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIGRlc2VsZWN0ICgpIHtcbiAgLW1vei11c2VyLXNlbGVjdDogLW1vei1ub25lO1xuXHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1vLXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/my-profile/my-profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user/my-profile/my-profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: MyProfileComponent */

  /***/
  function srcAppUserMyProfileMyProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () {
      return MyProfileComponent;
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


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var MyProfileComponent =
    /*#__PURE__*/
    function () {
      function MyProfileComponent(userService, sharedService, cookieService) {
        _classCallCheck(this, MyProfileComponent);

        this.userService = userService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isUserDataLoaded = false;
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(MyProfileComponent, [{
        key: "isNotAdmin",
        value: function isNotAdmin() {
          return this.type != 'admin' ? true : false;
        }
      }, {
        key: "closeUserInfo",
        value: function closeUserInfo() {
          this.isProfile = false;
          this.outputParams.emit(this.isProfile);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this67 = this;

          this.user = {};

          if (this.type != 'admin') {
            this.userId = parseInt(this.cookieService.get('userId'));
          }

          var queryParamBase = {
            userid: this.userId
          };
          this.userService.getUserById(queryParamBase).subscribe(function (res) {
            _this67.user = res[0];
            var queryParamBase2 = {
              userId: _this67.userId
            };

            _this67.userService.getRolesByUserId(queryParamBase2).subscribe(function (role) {
              _this67.userRole = role[0];
              _this67.isUserDataLoaded = true;
            }, function (error) {
              console.log(error);
            });
          }, function (error) {
            console.log(error);
          });
          this.sharedService.userdetailscast.subscribe(function (user) {
            return _this67.user = user;
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this68 = this;

          if (this.type != 'admin') {
            this.userId = parseInt(this.cookieService.get('userId'));
          }

          console.log(this.userId);
          this.userService.getUserById(this.userId).subscribe(function (res) {
            _this68.user = res[0];
            console.log(_this68.user);

            _this68.userService.getRolesByUserId(_this68.userId).subscribe(function (role) {
              _this68.userRole = role[0];
              _this68.isUserDataLoaded = true;
            }, function (error) {
              console.log(error);
            });
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return MyProfileComponent;
    }();

    MyProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MyProfileComponent.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MyProfileComponent.prototype, "isProfile", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MyProfileComponent.prototype, "userId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MyProfileComponent.prototype, "outputParams", void 0);
    MyProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/my-profile.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-profile.component.scss */
      "./src/app/user/my-profile/my-profile.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], MyProfileComponent);
    /***/
  },

  /***/
  "./src/app/user/my-profile/my-profile.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/user/my-profile/my-profile.module.ts ***!
    \******************************************************/

  /*! exports provided: MyProfileModule */

  /***/
  function srcAppUserMyProfileMyProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfileModule", function () {
      return MyProfileModule;
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


    var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-profile-routing.module */
    "./src/app/user/my-profile/my-profile-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _my_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-profile.component */
    "./src/app/user/my-profile/my-profile.component.ts");
    /* harmony import */


    var _components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/profile-vehicles/profile-vehicles.component */
    "./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.ts");
    /* harmony import */


    var _components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/profile-family-members/profile-family-members.component */
    "./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.ts");
    /* harmony import */


    var _components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/profile-pet/profile-pet.component */
    "./src/app/user/my-profile/components/profile-pet/profile-pet.component.ts");
    /* harmony import */


    var _components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/property-manager/property-manager.component */
    "./src/app/user/my-profile/components/property-manager/property-manager.component.ts");
    /* harmony import */


    var _components_emergency_contact_emergency_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/emergency-contact/emergency-contact.component */
    "./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.ts");
    /* harmony import */


    var _components_my_staffs_my_staffs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/my-staffs/my-staffs.component */
    "./src/app/user/my-profile/components/my-staffs/my-staffs.component.ts");
    /* harmony import */


    var _components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/profile-unit-details/profile-unit-details.component */
    "./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.ts");
    /* harmony import */


    var _components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/profile-unit-staffs/profile-unit-staffs.component */
    "./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.ts");
    /* harmony import */


    var _components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/profile-lease-info/profile-lease-info.component */
    "./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.ts");
    /* harmony import */


    var _components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/profile-interest-group/profile-interest-group.component */
    "./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.ts");
    /* harmony import */


    var _components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/profile-basic/profile-basic.component */
    "./src/app/user/my-profile/components/profile-basic/profile-basic.component.ts");
    /* harmony import */


    var _components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/profile-user-absence/profile-user-absence.component */
    "./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.ts");
    /* harmony import */


    var _components_profile_vehicle_details_profile_vehicle_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/profile-vehicle-details/profile-vehicle-details.component */
    "./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.ts");
    /* harmony import */


    var _components_profile_pet_details_profile_pet_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/profile-pet-details/profile-pet-details.component */
    "./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.ts");
    /* harmony import */


    var _components_profile_family_members_details_profile_family_members_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/profile-family-members-details/profile-family-members-details.component */
    "./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.ts");
    /* harmony import */


    var _components_property_manager_property_manager_create_property_manager_create_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/property-manager/property-manager-create/property-manager-create.component */
    "./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.ts");
    /* harmony import */


    var _components_profile_lease_info_create_lease_info_create_lease_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/profile-lease-info/create-lease-info/create-lease-info.component */
    "./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.ts");

    var MyProfileModule = function MyProfileModule() {
      _classCallCheck(this, MyProfileModule);
    };

    MyProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_my_profile_component__WEBPACK_IMPORTED_MODULE_5__["MyProfileComponent"], _components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_6__["ProfileVehiclesComponent"], _components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_7__["ProfileFamilyMembersComponent"], _components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_8__["ProfilePetComponent"], _components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_9__["PropertyManagerComponent"], _components_property_manager_property_manager_create_property_manager_create_component__WEBPACK_IMPORTED_MODULE_21__["PropertyManagerCreateComponent"], _components_profile_lease_info_create_lease_info_create_lease_info_component__WEBPACK_IMPORTED_MODULE_22__["CreateLeaseInfoComponent"], _components_emergency_contact_emergency_contact_component__WEBPACK_IMPORTED_MODULE_10__["EmergencyContactComponent"], _components_my_staffs_my_staffs_component__WEBPACK_IMPORTED_MODULE_11__["MyStaffsComponent"], _components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_12__["ProfileUnitDetailsComponent"], _components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_13__["ProfileUnitStaffsComponent"], _components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_14__["ProfileLeaseInfoComponent"], _components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_15__["ProfileInterestGroupComponent"], _components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_16__["ProfileBasicComponent"], _components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_17__["ProfileUserAbsenceComponent"], _components_profile_vehicle_details_profile_vehicle_details_component__WEBPACK_IMPORTED_MODULE_18__["ProfileVehicleDetailsComponent"], _components_profile_pet_details_profile_pet_details_component__WEBPACK_IMPORTED_MODULE_19__["ProfilePetDetailsComponent"], _components_profile_family_members_details_profile_family_members_details_component__WEBPACK_IMPORTED_MODULE_20__["ProfileFamilyMembersDetailsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyProfileRoutingModule"]],
      exports: [_my_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyProfileRoutingModule"], _my_profile_component__WEBPACK_IMPORTED_MODULE_5__["MyProfileComponent"]],
      bootstrap: [_my_profile_component__WEBPACK_IMPORTED_MODULE_5__["MyProfileComponent"]]
    })], MyProfileModule);
    /***/
  }
}]);
//# sourceMappingURL=default~my-profile-my-profile-module~unit-users-unit-users-module-es5.js.map