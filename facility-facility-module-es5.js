function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facility-facility-module"], {
  /***/
  "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js":
  /*!****************************************************************************************!*\
    !*** ./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js ***!
    \****************************************************************************************/

  /*! exports provided: NgSelectComponent, NgSelectConfig, NgSelectModule, SELECTION_MODEL_FACTORY, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs */

  /***/
  function node_modulesNgSelectNgSelect__ivy_ngcc__Fesm2015NgSelectNgSelectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSelectComponent", function () {
      return NgSelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSelectConfig", function () {
      return NgSelectConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSelectModule", function () {
      return NgSelectModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECTION_MODEL_FACTORY", function () {
      return SELECTION_MODEL_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return DefaultSelectionModelFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return DefaultSelectionModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return NgDropdownPanelService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return NgItemLabelDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return NgOptionTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return NgOptgroupTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return NgLabelTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return NgMultiLabelTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return NgHeaderTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return NgFooterTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return NgNotFoundTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return NgTypeToSearchTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return NgLoadingTextTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return NgTagTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return NgLoadingSpinnerTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return NgDropdownPanelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return NgOptionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs", function () {
      return ConsoleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/value-utils.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _c0 = ["content"];
    var _c1 = ["scroll"];
    var _c2 = ["padding"];

    var _c3 = function _c3(a0) {
      return {
        searchTerm: a0
      };
    };

    function NgDropdownPanelComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r375.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r375.filterValue));
      }
    }

    function NgDropdownPanelComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r379.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r379.filterValue));
      }
    }

    var _c4 = ["*"];
    var _c5 = ["searchInput"];

    function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r393);

          var item_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r391.unselect(item_r387);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 16);
      }

      if (rf & 2) {
        var item_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r389 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r387.label)("escape", ctx_r389.escapeHTML);
      }
    }

    function NgSelectComponent_ng_container_4_div_1_ng_template_3_Template(rf, ctx) {}

    var _c6 = function _c6(a0, a1, a2) {
      return {
        item: a0,
        clear: a1,
        label: a2
      };
    };

    function NgSelectComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_ng_template_1_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_4_div_1_ng_template_3_Template, 0, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r387 = ctx.$implicit;

        var _r388 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r386 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-value-disabled", item_r387.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r386.labelTemplate || _r388)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c6, item_r387.value, ctx_r386.clearItem, item_r387.label));
      }
    }

    function NgSelectComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_Template, 4, 8, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r380 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r380.selectedItems)("ngForTrackBy", ctx_r380.trackByOption);
      }
    }

    function NgSelectComponent_5_ng_template_0_Template(rf, ctx) {}

    var _c7 = function _c7(a0, a1) {
      return {
        items: a0,
        clear: a1
      };
    };

    function NgSelectComponent_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_5_ng_template_0_Template, 0, 0, "ng-template", 14);
      }

      if (rf & 2) {
        var ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r381.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c7, ctx_r381.selectedValues, ctx_r381.clearItem));
      }
    }

    function NgSelectComponent_ng_container_9_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
      }
    }

    function NgSelectComponent_ng_container_9_ng_template_3_Template(rf, ctx) {}

    function NgSelectComponent_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_9_ng_template_1_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_9_ng_template_3_Template, 0, 0, "ng-template", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r383.loadingSpinnerTemplate || _r396);
      }
    }

    function NgSelectComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r384 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r384.clearAllText);
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
      }

      if (rf & 2) {
        var item_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r404.label)("escape", ctx_r406.escapeHTML);
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template(rf, ctx) {}

    var _c8 = function _c8(a0, a1, a2, a3) {
      return {
        item: a0,
        item$: a1,
        index: a2,
        searchTerm: a3
      };
    };

    function NgSelectComponent_ng_dropdown_panel_13_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r410 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r410);

          var item_r404 = ctx.$implicit;

          var ctx_r409 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r409.toggleItem(item_r404);
        })("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_mouseover_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r410);

          var item_r404 = ctx.$implicit;

          var ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r411.onItemHover(item_r404);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template, 0, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r404 = ctx.$implicit;

        var _r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-disabled", item_r404.disabled)("ng-option-selected", item_r404.selected)("ng-optgroup", item_r404.children)("ng-option", !item_r404.children)("ng-option-child", !!item_r404.parent)("ng-option-marked", item_r404 === ctx_r399.itemsList.markedItem);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", item_r404.children ? "group" : "option")("aria-selected", item_r404.selected)("id", item_r404 == null ? null : item_r404.htmlId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r404.children ? ctx_r399.optgroupTemplate || _r405 : ctx_r399.optionTemplate || _r405)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c8, item_r404.value, item_r404, item_r404.index, ctx_r399.searchTerm));
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r413.addTagText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r413.searchTerm, "\"");
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template(rf, ctx) {}

    function NgSelectComponent_ng_dropdown_panel_13_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r416 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_mouseover_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r416);

          var ctx_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r415.itemsList.unmarkItem();
        })("click", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r416);

          var ctx_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r417.selectTag();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template, 4, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template, 0, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r412 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-marked", !ctx_r400.itemsList.markedItem);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r400.tagTemplate || _r412)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r400.searchTerm));
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r419 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r419.notFoundText);
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template(rf, ctx) {}

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r418 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r401 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r401.notFoundTemplate || _r418)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r401.searchTerm));
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r422.typeToSearchText);
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template(rf, ctx) {}

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template, 0, 0, "ng-template", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r421 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r402.typeToSearchTemplate || _r421);
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r425.loadingText);
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template(rf, ctx) {}

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r424 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r403 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r403.loadingTextTemplate || _r424)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r403.searchTerm));
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r428 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-dropdown-panel", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_update_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r428);

          var ctx_r427 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r427.viewPortItems = $event;
        })("scroll", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scroll_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r428);

          var ctx_r429 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r429.scroll.emit($event);
        })("scrollToEnd", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r428);

          var ctx_r430 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r430.scrollToEnd.emit($event);
        })("outsideClick", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_outsideClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r428);

          var ctx_r431 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r431.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgSelectComponent_ng_dropdown_panel_13_div_2_Template, 4, 22, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_Template, 4, 6, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template, 4, 4, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template, 4, 1, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template, 4, 4, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r385 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-multiple", ctx_r385.multiple);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("virtualScroll", ctx_r385.virtualScroll)("bufferAmount", ctx_r385.bufferAmount)("appendTo", ctx_r385.appendTo)("position", ctx_r385.dropdownPosition)("headerTemplate", ctx_r385.headerTemplate)("footerTemplate", ctx_r385.footerTemplate)("filterValue", ctx_r385.searchTerm)("items", ctx_r385.itemsList.filteredItems)("markedItem", ctx_r385.itemsList.markedItem)("ngClass", ctx_r385.appendTo ? ctx_r385.classes : null)("id", ctx_r385.dropdownId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r385.viewPortItems)("ngForTrackBy", ctx_r385.trackByOption);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r385.showAddTag);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r385.showNoItemsFound());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r385.showTypeToSearch());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r385.loading && ctx_r385.itemsList.filteredItems.length === 0);
      }
    }

    var unescapedHTMLExp = /[&<>"']/g;
    /** @type {?} */

    var hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
    /** @type {?} */

    var htmlEscapes = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;'
    };
    /**
     * @param {?} string
     * @return {?}
     */

    function escapeHTML(string) {
      return string && hasUnescapedHTMLExp.test(string) ? string.replace(unescapedHTMLExp,
      /**
      * @param {?} chr
      * @return {?}
      */
      function (chr) {
        return htmlEscapes[chr];
      }) : string;
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isDefined(value) {
      return value !== undefined && value !== null;
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isObject(value) {
      return typeof value === 'object' && isDefined(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isPromise(value) {
      return value instanceof Promise;
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isFunction(value) {
      return value instanceof Function;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-templates.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgItemLabelDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       */
      function NgItemLabelDirective(element) {
        _classCallCheck(this, NgItemLabelDirective);

        this.element = element;
        this.escape = true;
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(NgItemLabelDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.element.nativeElement.innerHTML = this.escape ? escapeHTML(this.ngItemLabel) : this.ngItemLabel;
        }
      }]);

      return NgItemLabelDirective;
    }();

    NgItemLabelDirective.ɵfac = function NgItemLabelDirective_Factory(t) {
      return new (t || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    NgItemLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgItemLabelDirective,
      selectors: [["", "ngItemLabel", ""]],
      inputs: {
        escape: "escape",
        ngItemLabel: "ngItemLabel"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    NgItemLabelDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    NgItemLabelDirective.propDecorators = {
      ngItemLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      escape: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgItemLabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ngItemLabel]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        escape: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ngItemLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}

    var NgOptionTemplateDirective =
    /**
     * @param {?} template
     */
    function NgOptionTemplateDirective(template) {
      _classCallCheck(this, NgOptionTemplateDirective);

      this.template = template;
    };

    NgOptionTemplateDirective.ɵfac = function NgOptionTemplateDirective_Factory(t) {
      return new (t || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgOptionTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgOptionTemplateDirective,
      selectors: [["", "ng-option-tmp", ""]]
    });
    /** @nocollapse */

    NgOptionTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-option-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgOptgroupTemplateDirective =
    /**
     * @param {?} template
     */
    function NgOptgroupTemplateDirective(template) {
      _classCallCheck(this, NgOptgroupTemplateDirective);

      this.template = template;
    };

    NgOptgroupTemplateDirective.ɵfac = function NgOptgroupTemplateDirective_Factory(t) {
      return new (t || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgOptgroupTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgOptgroupTemplateDirective,
      selectors: [["", "ng-optgroup-tmp", ""]]
    });
    /** @nocollapse */

    NgOptgroupTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-optgroup-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgLabelTemplateDirective =
    /**
     * @param {?} template
     */
    function NgLabelTemplateDirective(template) {
      _classCallCheck(this, NgLabelTemplateDirective);

      this.template = template;
    };

    NgLabelTemplateDirective.ɵfac = function NgLabelTemplateDirective_Factory(t) {
      return new (t || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgLabelTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgLabelTemplateDirective,
      selectors: [["", "ng-label-tmp", ""]]
    });
    /** @nocollapse */

    NgLabelTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-label-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgMultiLabelTemplateDirective =
    /**
     * @param {?} template
     */
    function NgMultiLabelTemplateDirective(template) {
      _classCallCheck(this, NgMultiLabelTemplateDirective);

      this.template = template;
    };

    NgMultiLabelTemplateDirective.ɵfac = function NgMultiLabelTemplateDirective_Factory(t) {
      return new (t || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgMultiLabelTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgMultiLabelTemplateDirective,
      selectors: [["", "ng-multi-label-tmp", ""]]
    });
    /** @nocollapse */

    NgMultiLabelTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-multi-label-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgHeaderTemplateDirective =
    /**
     * @param {?} template
     */
    function NgHeaderTemplateDirective(template) {
      _classCallCheck(this, NgHeaderTemplateDirective);

      this.template = template;
    };

    NgHeaderTemplateDirective.ɵfac = function NgHeaderTemplateDirective_Factory(t) {
      return new (t || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgHeaderTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgHeaderTemplateDirective,
      selectors: [["", "ng-header-tmp", ""]]
    });
    /** @nocollapse */

    NgHeaderTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-header-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgFooterTemplateDirective =
    /**
     * @param {?} template
     */
    function NgFooterTemplateDirective(template) {
      _classCallCheck(this, NgFooterTemplateDirective);

      this.template = template;
    };

    NgFooterTemplateDirective.ɵfac = function NgFooterTemplateDirective_Factory(t) {
      return new (t || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgFooterTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgFooterTemplateDirective,
      selectors: [["", "ng-footer-tmp", ""]]
    });
    /** @nocollapse */

    NgFooterTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-footer-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgNotFoundTemplateDirective =
    /**
     * @param {?} template
     */
    function NgNotFoundTemplateDirective(template) {
      _classCallCheck(this, NgNotFoundTemplateDirective);

      this.template = template;
    };

    NgNotFoundTemplateDirective.ɵfac = function NgNotFoundTemplateDirective_Factory(t) {
      return new (t || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgNotFoundTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgNotFoundTemplateDirective,
      selectors: [["", "ng-notfound-tmp", ""]]
    });
    /** @nocollapse */

    NgNotFoundTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-notfound-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgTypeToSearchTemplateDirective =
    /**
     * @param {?} template
     */
    function NgTypeToSearchTemplateDirective(template) {
      _classCallCheck(this, NgTypeToSearchTemplateDirective);

      this.template = template;
    };

    NgTypeToSearchTemplateDirective.ɵfac = function NgTypeToSearchTemplateDirective_Factory(t) {
      return new (t || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgTypeToSearchTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgTypeToSearchTemplateDirective,
      selectors: [["", "ng-typetosearch-tmp", ""]]
    });
    /** @nocollapse */

    NgTypeToSearchTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-typetosearch-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgLoadingTextTemplateDirective =
    /**
     * @param {?} template
     */
    function NgLoadingTextTemplateDirective(template) {
      _classCallCheck(this, NgLoadingTextTemplateDirective);

      this.template = template;
    };

    NgLoadingTextTemplateDirective.ɵfac = function NgLoadingTextTemplateDirective_Factory(t) {
      return new (t || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgLoadingTextTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgLoadingTextTemplateDirective,
      selectors: [["", "ng-loadingtext-tmp", ""]]
    });
    /** @nocollapse */

    NgLoadingTextTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-loadingtext-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgTagTemplateDirective =
    /**
     * @param {?} template
     */
    function NgTagTemplateDirective(template) {
      _classCallCheck(this, NgTagTemplateDirective);

      this.template = template;
    };

    NgTagTemplateDirective.ɵfac = function NgTagTemplateDirective_Factory(t) {
      return new (t || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgTagTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgTagTemplateDirective,
      selectors: [["", "ng-tag-tmp", ""]]
    });
    /** @nocollapse */

    NgTagTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-tag-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgLoadingSpinnerTemplateDirective =
    /**
     * @param {?} template
     */
    function NgLoadingSpinnerTemplateDirective(template) {
      _classCallCheck(this, NgLoadingSpinnerTemplateDirective);

      this.template = template;
    };

    NgLoadingSpinnerTemplateDirective.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(t) {
      return new (t || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgLoadingSpinnerTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgLoadingSpinnerTemplateDirective,
      selectors: [["", "ng-loadingspinner-tmp", ""]]
    });
    /** @nocollapse */

    NgLoadingSpinnerTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-loadingspinner-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/console.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ConsoleService =
    /*#__PURE__*/
    function () {
      function ConsoleService() {
        _classCallCheck(this, ConsoleService);
      }

      _createClass(ConsoleService, [{
        key: "warn",

        /**
         * @param {?} message
         * @return {?}
         */
        value: function warn(message) {
          console.warn(message);
        }
      }]);

      return ConsoleService;
    }();

    ConsoleService.ɵfac = function ConsoleService_Factory(t) {
      return new (t || ConsoleService)();
    };
    /** @nocollapse */


    ConsoleService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ConsoleService_Factory() {
        return new ConsoleService();
      },
      token: ConsoleService,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/id.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function newId() {
      // First character is an 'a', it's good practice to tag id to begin with a letter
      return 'axxxxxxxxxxx'.replace(/[x]/g,
      /**
      * @param {?} _
      * @return {?}
      */
      function (_) {
        // tslint:disable-next-line:no-bitwise

        /** @type {?} */
        var val = Math.random() * 16 | 0;
        return val.toString(16);
      });
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/search-helper.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var diacritics = {
      "\u24B6": 'A',
      "\uFF21": 'A',
      "\xC0": 'A',
      "\xC1": 'A',
      "\xC2": 'A',
      "\u1EA6": 'A',
      "\u1EA4": 'A',
      "\u1EAA": 'A',
      "\u1EA8": 'A',
      "\xC3": 'A',
      "\u0100": 'A',
      "\u0102": 'A',
      "\u1EB0": 'A',
      "\u1EAE": 'A',
      "\u1EB4": 'A',
      "\u1EB2": 'A',
      "\u0226": 'A',
      "\u01E0": 'A',
      "\xC4": 'A',
      "\u01DE": 'A',
      "\u1EA2": 'A',
      "\xC5": 'A',
      "\u01FA": 'A',
      "\u01CD": 'A',
      "\u0200": 'A',
      "\u0202": 'A',
      "\u1EA0": 'A',
      "\u1EAC": 'A',
      "\u1EB6": 'A',
      "\u1E00": 'A',
      "\u0104": 'A',
      "\u023A": 'A',
      "\u2C6F": 'A',
      "\uA732": 'AA',
      "\xC6": 'AE',
      "\u01FC": 'AE',
      "\u01E2": 'AE',
      "\uA734": 'AO',
      "\uA736": 'AU',
      "\uA738": 'AV',
      "\uA73A": 'AV',
      "\uA73C": 'AY',
      "\u24B7": 'B',
      "\uFF22": 'B',
      "\u1E02": 'B',
      "\u1E04": 'B',
      "\u1E06": 'B',
      "\u0243": 'B',
      "\u0182": 'B',
      "\u0181": 'B',
      "\u24B8": 'C',
      "\uFF23": 'C',
      "\u0106": 'C',
      "\u0108": 'C',
      "\u010A": 'C',
      "\u010C": 'C',
      "\xC7": 'C',
      "\u1E08": 'C',
      "\u0187": 'C',
      "\u023B": 'C',
      "\uA73E": 'C',
      "\u24B9": 'D',
      "\uFF24": 'D',
      "\u1E0A": 'D',
      "\u010E": 'D',
      "\u1E0C": 'D',
      "\u1E10": 'D',
      "\u1E12": 'D',
      "\u1E0E": 'D',
      "\u0110": 'D',
      "\u018B": 'D',
      "\u018A": 'D',
      "\u0189": 'D',
      "\uA779": 'D',
      "\u01F1": 'DZ',
      "\u01C4": 'DZ',
      "\u01F2": 'Dz',
      "\u01C5": 'Dz',
      "\u24BA": 'E',
      "\uFF25": 'E',
      "\xC8": 'E',
      "\xC9": 'E',
      "\xCA": 'E',
      "\u1EC0": 'E',
      "\u1EBE": 'E',
      "\u1EC4": 'E',
      "\u1EC2": 'E',
      "\u1EBC": 'E',
      "\u0112": 'E',
      "\u1E14": 'E',
      "\u1E16": 'E',
      "\u0114": 'E',
      "\u0116": 'E',
      "\xCB": 'E',
      "\u1EBA": 'E',
      "\u011A": 'E',
      "\u0204": 'E',
      "\u0206": 'E',
      "\u1EB8": 'E',
      "\u1EC6": 'E',
      "\u0228": 'E',
      "\u1E1C": 'E',
      "\u0118": 'E',
      "\u1E18": 'E',
      "\u1E1A": 'E',
      "\u0190": 'E',
      "\u018E": 'E',
      "\u24BB": 'F',
      "\uFF26": 'F',
      "\u1E1E": 'F',
      "\u0191": 'F',
      "\uA77B": 'F',
      "\u24BC": 'G',
      "\uFF27": 'G',
      "\u01F4": 'G',
      "\u011C": 'G',
      "\u1E20": 'G',
      "\u011E": 'G',
      "\u0120": 'G',
      "\u01E6": 'G',
      "\u0122": 'G',
      "\u01E4": 'G',
      "\u0193": 'G',
      "\uA7A0": 'G',
      "\uA77D": 'G',
      "\uA77E": 'G',
      "\u24BD": 'H',
      "\uFF28": 'H',
      "\u0124": 'H',
      "\u1E22": 'H',
      "\u1E26": 'H',
      "\u021E": 'H',
      "\u1E24": 'H',
      "\u1E28": 'H',
      "\u1E2A": 'H',
      "\u0126": 'H',
      "\u2C67": 'H',
      "\u2C75": 'H',
      "\uA78D": 'H',
      "\u24BE": 'I',
      "\uFF29": 'I',
      "\xCC": 'I',
      "\xCD": 'I',
      "\xCE": 'I',
      "\u0128": 'I',
      "\u012A": 'I',
      "\u012C": 'I',
      "\u0130": 'I',
      "\xCF": 'I',
      "\u1E2E": 'I',
      "\u1EC8": 'I',
      "\u01CF": 'I',
      "\u0208": 'I',
      "\u020A": 'I',
      "\u1ECA": 'I',
      "\u012E": 'I',
      "\u1E2C": 'I',
      "\u0197": 'I',
      "\u24BF": 'J',
      "\uFF2A": 'J',
      "\u0134": 'J',
      "\u0248": 'J',
      "\u24C0": 'K',
      "\uFF2B": 'K',
      "\u1E30": 'K',
      "\u01E8": 'K',
      "\u1E32": 'K',
      "\u0136": 'K',
      "\u1E34": 'K',
      "\u0198": 'K',
      "\u2C69": 'K',
      "\uA740": 'K',
      "\uA742": 'K',
      "\uA744": 'K',
      "\uA7A2": 'K',
      "\u24C1": 'L',
      "\uFF2C": 'L',
      "\u013F": 'L',
      "\u0139": 'L',
      "\u013D": 'L',
      "\u1E36": 'L',
      "\u1E38": 'L',
      "\u013B": 'L',
      "\u1E3C": 'L',
      "\u1E3A": 'L',
      "\u0141": 'L',
      "\u023D": 'L',
      "\u2C62": 'L',
      "\u2C60": 'L',
      "\uA748": 'L',
      "\uA746": 'L',
      "\uA780": 'L',
      "\u01C7": 'LJ',
      "\u01C8": 'Lj',
      "\u24C2": 'M',
      "\uFF2D": 'M',
      "\u1E3E": 'M',
      "\u1E40": 'M',
      "\u1E42": 'M',
      "\u2C6E": 'M',
      "\u019C": 'M',
      "\u24C3": 'N',
      "\uFF2E": 'N',
      "\u01F8": 'N',
      "\u0143": 'N',
      "\xD1": 'N',
      "\u1E44": 'N',
      "\u0147": 'N',
      "\u1E46": 'N',
      "\u0145": 'N',
      "\u1E4A": 'N',
      "\u1E48": 'N',
      "\u0220": 'N',
      "\u019D": 'N',
      "\uA790": 'N',
      "\uA7A4": 'N',
      "\u01CA": 'NJ',
      "\u01CB": 'Nj',
      "\u24C4": 'O',
      "\uFF2F": 'O',
      "\xD2": 'O',
      "\xD3": 'O',
      "\xD4": 'O',
      "\u1ED2": 'O',
      "\u1ED0": 'O',
      "\u1ED6": 'O',
      "\u1ED4": 'O',
      "\xD5": 'O',
      "\u1E4C": 'O',
      "\u022C": 'O',
      "\u1E4E": 'O',
      "\u014C": 'O',
      "\u1E50": 'O',
      "\u1E52": 'O',
      "\u014E": 'O',
      "\u022E": 'O',
      "\u0230": 'O',
      "\xD6": 'O',
      "\u022A": 'O',
      "\u1ECE": 'O',
      "\u0150": 'O',
      "\u01D1": 'O',
      "\u020C": 'O',
      "\u020E": 'O',
      "\u01A0": 'O',
      "\u1EDC": 'O',
      "\u1EDA": 'O',
      "\u1EE0": 'O',
      "\u1EDE": 'O',
      "\u1EE2": 'O',
      "\u1ECC": 'O',
      "\u1ED8": 'O',
      "\u01EA": 'O',
      "\u01EC": 'O',
      "\xD8": 'O',
      "\u01FE": 'O',
      "\u0186": 'O',
      "\u019F": 'O',
      "\uA74A": 'O',
      "\uA74C": 'O',
      "\u01A2": 'OI',
      "\uA74E": 'OO',
      "\u0222": 'OU',
      "\u24C5": 'P',
      "\uFF30": 'P',
      "\u1E54": 'P',
      "\u1E56": 'P',
      "\u01A4": 'P',
      "\u2C63": 'P',
      "\uA750": 'P',
      "\uA752": 'P',
      "\uA754": 'P',
      "\u24C6": 'Q',
      "\uFF31": 'Q',
      "\uA756": 'Q',
      "\uA758": 'Q',
      "\u024A": 'Q',
      "\u24C7": 'R',
      "\uFF32": 'R',
      "\u0154": 'R',
      "\u1E58": 'R',
      "\u0158": 'R',
      "\u0210": 'R',
      "\u0212": 'R',
      "\u1E5A": 'R',
      "\u1E5C": 'R',
      "\u0156": 'R',
      "\u1E5E": 'R',
      "\u024C": 'R',
      "\u2C64": 'R',
      "\uA75A": 'R',
      "\uA7A6": 'R',
      "\uA782": 'R',
      "\u24C8": 'S',
      "\uFF33": 'S',
      "\u1E9E": 'S',
      "\u015A": 'S',
      "\u1E64": 'S',
      "\u015C": 'S',
      "\u1E60": 'S',
      "\u0160": 'S',
      "\u1E66": 'S',
      "\u1E62": 'S',
      "\u1E68": 'S',
      "\u0218": 'S',
      "\u015E": 'S',
      "\u2C7E": 'S',
      "\uA7A8": 'S',
      "\uA784": 'S',
      "\u24C9": 'T',
      "\uFF34": 'T',
      "\u1E6A": 'T',
      "\u0164": 'T',
      "\u1E6C": 'T',
      "\u021A": 'T',
      "\u0162": 'T',
      "\u1E70": 'T',
      "\u1E6E": 'T',
      "\u0166": 'T',
      "\u01AC": 'T',
      "\u01AE": 'T',
      "\u023E": 'T',
      "\uA786": 'T',
      "\uA728": 'TZ',
      "\u24CA": 'U',
      "\uFF35": 'U',
      "\xD9": 'U',
      "\xDA": 'U',
      "\xDB": 'U',
      "\u0168": 'U',
      "\u1E78": 'U',
      "\u016A": 'U',
      "\u1E7A": 'U',
      "\u016C": 'U',
      "\xDC": 'U',
      "\u01DB": 'U',
      "\u01D7": 'U',
      "\u01D5": 'U',
      "\u01D9": 'U',
      "\u1EE6": 'U',
      "\u016E": 'U',
      "\u0170": 'U',
      "\u01D3": 'U',
      "\u0214": 'U',
      "\u0216": 'U',
      "\u01AF": 'U',
      "\u1EEA": 'U',
      "\u1EE8": 'U',
      "\u1EEE": 'U',
      "\u1EEC": 'U',
      "\u1EF0": 'U',
      "\u1EE4": 'U',
      "\u1E72": 'U',
      "\u0172": 'U',
      "\u1E76": 'U',
      "\u1E74": 'U',
      "\u0244": 'U',
      "\u24CB": 'V',
      "\uFF36": 'V',
      "\u1E7C": 'V',
      "\u1E7E": 'V',
      "\u01B2": 'V',
      "\uA75E": 'V',
      "\u0245": 'V',
      "\uA760": 'VY',
      "\u24CC": 'W',
      "\uFF37": 'W',
      "\u1E80": 'W',
      "\u1E82": 'W',
      "\u0174": 'W',
      "\u1E86": 'W',
      "\u1E84": 'W',
      "\u1E88": 'W',
      "\u2C72": 'W',
      "\u24CD": 'X',
      "\uFF38": 'X',
      "\u1E8A": 'X',
      "\u1E8C": 'X',
      "\u24CE": 'Y',
      "\uFF39": 'Y',
      "\u1EF2": 'Y',
      "\xDD": 'Y',
      "\u0176": 'Y',
      "\u1EF8": 'Y',
      "\u0232": 'Y',
      "\u1E8E": 'Y',
      "\u0178": 'Y',
      "\u1EF6": 'Y',
      "\u1EF4": 'Y',
      "\u01B3": 'Y',
      "\u024E": 'Y',
      "\u1EFE": 'Y',
      "\u24CF": 'Z',
      "\uFF3A": 'Z',
      "\u0179": 'Z',
      "\u1E90": 'Z',
      "\u017B": 'Z',
      "\u017D": 'Z',
      "\u1E92": 'Z',
      "\u1E94": 'Z',
      "\u01B5": 'Z',
      "\u0224": 'Z',
      "\u2C7F": 'Z',
      "\u2C6B": 'Z',
      "\uA762": 'Z',
      "\u24D0": 'a',
      "\uFF41": 'a',
      "\u1E9A": 'a',
      "\xE0": 'a',
      "\xE1": 'a',
      "\xE2": 'a',
      "\u1EA7": 'a',
      "\u1EA5": 'a',
      "\u1EAB": 'a',
      "\u1EA9": 'a',
      "\xE3": 'a',
      "\u0101": 'a',
      "\u0103": 'a',
      "\u1EB1": 'a',
      "\u1EAF": 'a',
      "\u1EB5": 'a',
      "\u1EB3": 'a',
      "\u0227": 'a',
      "\u01E1": 'a',
      "\xE4": 'a',
      "\u01DF": 'a',
      "\u1EA3": 'a',
      "\xE5": 'a',
      "\u01FB": 'a',
      "\u01CE": 'a',
      "\u0201": 'a',
      "\u0203": 'a',
      "\u1EA1": 'a',
      "\u1EAD": 'a',
      "\u1EB7": 'a',
      "\u1E01": 'a',
      "\u0105": 'a',
      "\u2C65": 'a',
      "\u0250": 'a',
      "\uA733": 'aa',
      "\xE6": 'ae',
      "\u01FD": 'ae',
      "\u01E3": 'ae',
      "\uA735": 'ao',
      "\uA737": 'au',
      "\uA739": 'av',
      "\uA73B": 'av',
      "\uA73D": 'ay',
      "\u24D1": 'b',
      "\uFF42": 'b',
      "\u1E03": 'b',
      "\u1E05": 'b',
      "\u1E07": 'b',
      "\u0180": 'b',
      "\u0183": 'b',
      "\u0253": 'b',
      "\u24D2": 'c',
      "\uFF43": 'c',
      "\u0107": 'c',
      "\u0109": 'c',
      "\u010B": 'c',
      "\u010D": 'c',
      "\xE7": 'c',
      "\u1E09": 'c',
      "\u0188": 'c',
      "\u023C": 'c',
      "\uA73F": 'c',
      "\u2184": 'c',
      "\u24D3": 'd',
      "\uFF44": 'd',
      "\u1E0B": 'd',
      "\u010F": 'd',
      "\u1E0D": 'd',
      "\u1E11": 'd',
      "\u1E13": 'd',
      "\u1E0F": 'd',
      "\u0111": 'd',
      "\u018C": 'd',
      "\u0256": 'd',
      "\u0257": 'd',
      "\uA77A": 'd',
      "\u01F3": 'dz',
      "\u01C6": 'dz',
      "\u24D4": 'e',
      "\uFF45": 'e',
      "\xE8": 'e',
      "\xE9": 'e',
      "\xEA": 'e',
      "\u1EC1": 'e',
      "\u1EBF": 'e',
      "\u1EC5": 'e',
      "\u1EC3": 'e',
      "\u1EBD": 'e',
      "\u0113": 'e',
      "\u1E15": 'e',
      "\u1E17": 'e',
      "\u0115": 'e',
      "\u0117": 'e',
      "\xEB": 'e',
      "\u1EBB": 'e',
      "\u011B": 'e',
      "\u0205": 'e',
      "\u0207": 'e',
      "\u1EB9": 'e',
      "\u1EC7": 'e',
      "\u0229": 'e',
      "\u1E1D": 'e',
      "\u0119": 'e',
      "\u1E19": 'e',
      "\u1E1B": 'e',
      "\u0247": 'e',
      "\u025B": 'e',
      "\u01DD": 'e',
      "\u24D5": 'f',
      "\uFF46": 'f',
      "\u1E1F": 'f',
      "\u0192": 'f',
      "\uA77C": 'f',
      "\u24D6": 'g',
      "\uFF47": 'g',
      "\u01F5": 'g',
      "\u011D": 'g',
      "\u1E21": 'g',
      "\u011F": 'g',
      "\u0121": 'g',
      "\u01E7": 'g',
      "\u0123": 'g',
      "\u01E5": 'g',
      "\u0260": 'g',
      "\uA7A1": 'g',
      "\u1D79": 'g',
      "\uA77F": 'g',
      "\u24D7": 'h',
      "\uFF48": 'h',
      "\u0125": 'h',
      "\u1E23": 'h',
      "\u1E27": 'h',
      "\u021F": 'h',
      "\u1E25": 'h',
      "\u1E29": 'h',
      "\u1E2B": 'h',
      "\u1E96": 'h',
      "\u0127": 'h',
      "\u2C68": 'h',
      "\u2C76": 'h',
      "\u0265": 'h',
      "\u0195": 'hv',
      "\u24D8": 'i',
      "\uFF49": 'i',
      "\xEC": 'i',
      "\xED": 'i',
      "\xEE": 'i',
      "\u0129": 'i',
      "\u012B": 'i',
      "\u012D": 'i',
      "\xEF": 'i',
      "\u1E2F": 'i',
      "\u1EC9": 'i',
      "\u01D0": 'i',
      "\u0209": 'i',
      "\u020B": 'i',
      "\u1ECB": 'i',
      "\u012F": 'i',
      "\u1E2D": 'i',
      "\u0268": 'i',
      "\u0131": 'i',
      "\u24D9": 'j',
      "\uFF4A": 'j',
      "\u0135": 'j',
      "\u01F0": 'j',
      "\u0249": 'j',
      "\u24DA": 'k',
      "\uFF4B": 'k',
      "\u1E31": 'k',
      "\u01E9": 'k',
      "\u1E33": 'k',
      "\u0137": 'k',
      "\u1E35": 'k',
      "\u0199": 'k',
      "\u2C6A": 'k',
      "\uA741": 'k',
      "\uA743": 'k',
      "\uA745": 'k',
      "\uA7A3": 'k',
      "\u24DB": 'l',
      "\uFF4C": 'l',
      "\u0140": 'l',
      "\u013A": 'l',
      "\u013E": 'l',
      "\u1E37": 'l',
      "\u1E39": 'l',
      "\u013C": 'l',
      "\u1E3D": 'l',
      "\u1E3B": 'l',
      "\u017F": 'l',
      "\u0142": 'l',
      "\u019A": 'l',
      "\u026B": 'l',
      "\u2C61": 'l',
      "\uA749": 'l',
      "\uA781": 'l',
      "\uA747": 'l',
      "\u01C9": 'lj',
      "\u24DC": 'm',
      "\uFF4D": 'm',
      "\u1E3F": 'm',
      "\u1E41": 'm',
      "\u1E43": 'm',
      "\u0271": 'm',
      "\u026F": 'm',
      "\u24DD": 'n',
      "\uFF4E": 'n',
      "\u01F9": 'n',
      "\u0144": 'n',
      "\xF1": 'n',
      "\u1E45": 'n',
      "\u0148": 'n',
      "\u1E47": 'n',
      "\u0146": 'n',
      "\u1E4B": 'n',
      "\u1E49": 'n',
      "\u019E": 'n',
      "\u0272": 'n',
      "\u0149": 'n',
      "\uA791": 'n',
      "\uA7A5": 'n',
      "\u01CC": 'nj',
      "\u24DE": 'o',
      "\uFF4F": 'o',
      "\xF2": 'o',
      "\xF3": 'o',
      "\xF4": 'o',
      "\u1ED3": 'o',
      "\u1ED1": 'o',
      "\u1ED7": 'o',
      "\u1ED5": 'o',
      "\xF5": 'o',
      "\u1E4D": 'o',
      "\u022D": 'o',
      "\u1E4F": 'o',
      "\u014D": 'o',
      "\u1E51": 'o',
      "\u1E53": 'o',
      "\u014F": 'o',
      "\u022F": 'o',
      "\u0231": 'o',
      "\xF6": 'o',
      "\u022B": 'o',
      "\u1ECF": 'o',
      "\u0151": 'o',
      "\u01D2": 'o',
      "\u020D": 'o',
      "\u020F": 'o',
      "\u01A1": 'o',
      "\u1EDD": 'o',
      "\u1EDB": 'o',
      "\u1EE1": 'o',
      "\u1EDF": 'o',
      "\u1EE3": 'o',
      "\u1ECD": 'o',
      "\u1ED9": 'o',
      "\u01EB": 'o',
      "\u01ED": 'o',
      "\xF8": 'o',
      "\u01FF": 'o',
      "\u0254": 'o',
      "\uA74B": 'o',
      "\uA74D": 'o',
      "\u0275": 'o',
      "\u01A3": 'oi',
      "\u0223": 'ou',
      "\uA74F": 'oo',
      "\u24DF": 'p',
      "\uFF50": 'p',
      "\u1E55": 'p',
      "\u1E57": 'p',
      "\u01A5": 'p',
      "\u1D7D": 'p',
      "\uA751": 'p',
      "\uA753": 'p',
      "\uA755": 'p',
      "\u24E0": 'q',
      "\uFF51": 'q',
      "\u024B": 'q',
      "\uA757": 'q',
      "\uA759": 'q',
      "\u24E1": 'r',
      "\uFF52": 'r',
      "\u0155": 'r',
      "\u1E59": 'r',
      "\u0159": 'r',
      "\u0211": 'r',
      "\u0213": 'r',
      "\u1E5B": 'r',
      "\u1E5D": 'r',
      "\u0157": 'r',
      "\u1E5F": 'r',
      "\u024D": 'r',
      "\u027D": 'r',
      "\uA75B": 'r',
      "\uA7A7": 'r',
      "\uA783": 'r',
      "\u24E2": 's',
      "\uFF53": 's',
      "\xDF": 's',
      "\u015B": 's',
      "\u1E65": 's',
      "\u015D": 's',
      "\u1E61": 's',
      "\u0161": 's',
      "\u1E67": 's',
      "\u1E63": 's',
      "\u1E69": 's',
      "\u0219": 's',
      "\u015F": 's',
      "\u023F": 's',
      "\uA7A9": 's',
      "\uA785": 's',
      "\u1E9B": 's',
      "\u24E3": 't',
      "\uFF54": 't',
      "\u1E6B": 't',
      "\u1E97": 't',
      "\u0165": 't',
      "\u1E6D": 't',
      "\u021B": 't',
      "\u0163": 't',
      "\u1E71": 't',
      "\u1E6F": 't',
      "\u0167": 't',
      "\u01AD": 't',
      "\u0288": 't',
      "\u2C66": 't',
      "\uA787": 't',
      "\uA729": 'tz',
      "\u24E4": 'u',
      "\uFF55": 'u',
      "\xF9": 'u',
      "\xFA": 'u',
      "\xFB": 'u',
      "\u0169": 'u',
      "\u1E79": 'u',
      "\u016B": 'u',
      "\u1E7B": 'u',
      "\u016D": 'u',
      "\xFC": 'u',
      "\u01DC": 'u',
      "\u01D8": 'u',
      "\u01D6": 'u',
      "\u01DA": 'u',
      "\u1EE7": 'u',
      "\u016F": 'u',
      "\u0171": 'u',
      "\u01D4": 'u',
      "\u0215": 'u',
      "\u0217": 'u',
      "\u01B0": 'u',
      "\u1EEB": 'u',
      "\u1EE9": 'u',
      "\u1EEF": 'u',
      "\u1EED": 'u',
      "\u1EF1": 'u',
      "\u1EE5": 'u',
      "\u1E73": 'u',
      "\u0173": 'u',
      "\u1E77": 'u',
      "\u1E75": 'u',
      "\u0289": 'u',
      "\u24E5": 'v',
      "\uFF56": 'v',
      "\u1E7D": 'v',
      "\u1E7F": 'v',
      "\u028B": 'v',
      "\uA75F": 'v',
      "\u028C": 'v',
      "\uA761": 'vy',
      "\u24E6": 'w',
      "\uFF57": 'w',
      "\u1E81": 'w',
      "\u1E83": 'w',
      "\u0175": 'w',
      "\u1E87": 'w',
      "\u1E85": 'w',
      "\u1E98": 'w',
      "\u1E89": 'w',
      "\u2C73": 'w',
      "\u24E7": 'x',
      "\uFF58": 'x',
      "\u1E8B": 'x',
      "\u1E8D": 'x',
      "\u24E8": 'y',
      "\uFF59": 'y',
      "\u1EF3": 'y',
      "\xFD": 'y',
      "\u0177": 'y',
      "\u1EF9": 'y',
      "\u0233": 'y',
      "\u1E8F": 'y',
      "\xFF": 'y',
      "\u1EF7": 'y',
      "\u1E99": 'y',
      "\u1EF5": 'y',
      "\u01B4": 'y',
      "\u024F": 'y',
      "\u1EFF": 'y',
      "\u24E9": 'z',
      "\uFF5A": 'z',
      "\u017A": 'z',
      "\u1E91": 'z',
      "\u017C": 'z',
      "\u017E": 'z',
      "\u1E93": 'z',
      "\u1E95": 'z',
      "\u01B6": 'z',
      "\u0225": 'z',
      "\u0240": 'z',
      "\u2C6C": 'z',
      "\uA763": 'z',
      "\u0386": "\u0391",
      "\u0388": "\u0395",
      "\u0389": "\u0397",
      "\u038A": "\u0399",
      "\u03AA": "\u0399",
      "\u038C": "\u039F",
      "\u038E": "\u03A5",
      "\u03AB": "\u03A5",
      "\u038F": "\u03A9",
      "\u03AC": "\u03B1",
      "\u03AD": "\u03B5",
      "\u03AE": "\u03B7",
      "\u03AF": "\u03B9",
      "\u03CA": "\u03B9",
      "\u0390": "\u03B9",
      "\u03CC": "\u03BF",
      "\u03CD": "\u03C5",
      "\u03CB": "\u03C5",
      "\u03B0": "\u03C5",
      "\u03C9": "\u03C9",
      "\u03C2": "\u03C3"
    };
    /**
     * @param {?} text
     * @return {?}
     */

    function stripSpecialChars(text) {
      /** @type {?} */
      var match =
      /**
      * @param {?} a
      * @return {?}
      */
      function match(a) {
        return diacritics[a] || a;
      };

      return text.replace(/[^\u0000-\u007E]/g, match);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/items-list.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ItemsList =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _ngSelect
       * @param {?} _selectionModel
       */
      function ItemsList(_ngSelect, _selectionModel) {
        _classCallCheck(this, ItemsList);

        this._ngSelect = _ngSelect;
        this._selectionModel = _selectionModel;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
      }
      /**
       * @return {?}
       */


      _createClass(ItemsList, [{
        key: "setItems",

        /**
         * @param {?} items
         * @return {?}
         */
        value: function setItems(items) {
          var _this = this;

          this._items = items.map(
          /**
          * @param {?} item
          * @param {?} index
          * @return {?}
          */
          function (item, index) {
            return _this.mapItem(item, index);
          });

          if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
          } else {
            this._groups = new Map();

            this._groups.set(undefined, this._items);
          }

          this._filteredItems = _toConsumableArray(this._items);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(item) {
          if (item.selected || this.maxItemsSelected) {
            return;
          }
          /** @type {?} */


          var multiple = this._ngSelect.multiple;

          if (!multiple) {
            this.clearSelected();
          }

          this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);

          if (this._ngSelect.hideSelected) {
            this._hideSelected(item);
          }
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "unselect",
        value: function unselect(item) {
          if (!item.selected) {
            return;
          }

          this._selectionModel.unselect(item, this._ngSelect.multiple);

          if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
            this._showSelected(item);
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "findItem",
        value: function findItem(value) {
          var _this2 = this;

          /** @type {?} */
          var findBy;

          if (this._ngSelect.compareWith) {
            findBy =
            /**
            * @param {?} item
            * @return {?}
            */
            function findBy(item) {
              return _this2._ngSelect.compareWith(item.value, value);
            };
          } else if (this._ngSelect.bindValue) {
            findBy =
            /**
            * @param {?} item
            * @return {?}
            */
            function findBy(item) {
              return !item.children && _this2.resolveNested(item.value, _this2._ngSelect.bindValue) === value;
            };
          } else {
            findBy =
            /**
            * @param {?} item
            * @return {?}
            */
            function findBy(item) {
              return item.value === value || !item.children && item.label && item.label === _this2.resolveNested(value, _this2._ngSelect.bindLabel);
            };
          }

          return this._items.find(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return findBy(item);
          });
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "addItem",
        value: function addItem(item) {
          /** @type {?} */
          var option = this.mapItem(item, this._items.length);

          this._items.push(option);

          this._filteredItems.push(option);

          return option;
        }
        /**
         * @param {?=} keepDisabled
         * @return {?}
         */

      }, {
        key: "clearSelected",
        value: function clearSelected() {
          var keepDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          this._selectionModel.clear(keepDisabled);

          this._items.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            item.selected = keepDisabled && item.selected && item.disabled;
            item.marked = false;
          });

          if (this._ngSelect.hideSelected) {
            this.resetFilteredItems();
          }
        }
        /**
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "findByLabel",
        value: function findByLabel(term) {
          term = stripSpecialChars(term).toLocaleLowerCase();
          return this.filteredItems.find(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            /** @type {?} */
            var label = stripSpecialChars(item.label).toLocaleLowerCase();
            return label.substr(0, term.length) === term;
          });
        }
        /**
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "filter",
        value: function filter(term) {
          var _this3 = this;

          if (!term) {
            this.resetFilteredItems();
            return;
          }

          this._filteredItems = [];
          term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
          /** @type {?} */

          var match = this._ngSelect.searchFn || this._defaultSearchFn;
          /** @type {?} */

          var hideSelected = this._ngSelect.hideSelected;

          for (var _i = 0, _Array$from = Array.from(this._groups.keys()); _i < _Array$from.length; _i++) {
            var key = _Array$from[_i];

            /** @type {?} */
            var matchedItems = [];

            var _iterator = _createForOfIteratorHelper(this._groups.get(key)),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;

                if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                  continue;
                }
                /** @type {?} */


                var searchItem = this._ngSelect.searchFn ? item.value : item;

                if (match(term, searchItem)) {
                  matchedItems.push(item);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (matchedItems.length > 0) {
              (function () {
                var _this3$_filteredItems;

                var _matchedItems$slice = matchedItems.slice(-1),
                    _matchedItems$slice2 = _slicedToArray(_matchedItems$slice, 1),
                    last = _matchedItems$slice2[0];

                if (last.parent) {
                  /** @type {?} */
                  var head = _this3._items.find(
                  /**
                  * @param {?} x
                  * @return {?}
                  */
                  function (x) {
                    return x === last.parent;
                  });

                  _this3._filteredItems.push(head);
                }

                (_this3$_filteredItems = _this3._filteredItems).push.apply(_this3$_filteredItems, matchedItems);
              })();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "resetFilteredItems",
        value: function resetFilteredItems() {
          if (this._filteredItems.length === this._items.length) {
            return;
          }

          if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
            this._filteredItems = this._items.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return !x.selected;
            });
          } else {
            this._filteredItems = this._items;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "unmarkItem",
        value: function unmarkItem() {
          this._markedIndex = -1;
        }
        /**
         * @return {?}
         */

      }, {
        key: "markNextItem",
        value: function markNextItem() {
          this._stepToItem(+1);
        }
        /**
         * @return {?}
         */

      }, {
        key: "markPreviousItem",
        value: function markPreviousItem() {
          this._stepToItem(-1);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "markItem",
        value: function markItem(item) {
          this._markedIndex = this._filteredItems.indexOf(item);
        }
        /**
         * @param {?=} markDefault
         * @return {?}
         */

      }, {
        key: "markSelectedOrDefault",
        value: function markSelectedOrDefault(markDefault) {
          if (this._filteredItems.length === 0) {
            return;
          }
          /** @type {?} */


          var lastMarkedIndex = this._getLastMarkedIndex();

          if (lastMarkedIndex > -1) {
            this._markedIndex = lastMarkedIndex;
          } else {
            this._markedIndex = markDefault ? this.filteredItems.findIndex(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return !x.disabled;
            }) : -1;
          }
        }
        /**
         * @param {?} option
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "resolveNested",
        value: function resolveNested(option, key) {
          if (!isObject(option)) {
            return option;
          }

          if (key.indexOf('.') === -1) {
            return option[key];
          } else {
            /** @type {?} */
            var keys = key.split('.');
            /** @type {?} */

            var value = option;

            for (var i = 0, len = keys.length; i < len; ++i) {
              if (value == null) {
                return null;
              }

              value = value[keys[i]];
            }

            return value;
          }
        }
        /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "mapItem",
        value: function mapItem(item, index) {
          /** @type {?} */
          var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
          /** @type {?} */

          var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
          return {
            index: index,
            label: isDefined(label) ? label.toString() : '',
            value: value,
            disabled: item.disabled,
            htmlId: "".concat(this._ngSelect.dropdownId, "-").concat(index)
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "mapSelectedItems",
        value: function mapSelectedItems() {
          var _this4 = this;

          /** @type {?} */
          var multiple = this._ngSelect.multiple;

          var _iterator2 = _createForOfIteratorHelper(this.selectedItems),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var selected = _step2.value;

              /** @type {?} */
              var value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
              /** @type {?} */

              var item = isDefined(value) ? this.findItem(value) : null;

              this._selectionModel.unselect(selected, multiple);

              this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return _this4.selectedItems.indexOf(x) === -1;
            });
          }
        }
        /**
         * @private
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_showSelected",
        value: function _showSelected(item) {
          this._filteredItems.push(item);

          if (item.parent) {
            /** @type {?} */
            var _parent = item.parent;
            /** @type {?} */

            var parentExists = this._filteredItems.find(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x === _parent;
            });

            if (!parentExists) {
              this._filteredItems.push(_parent);
            }
          } else if (item.children) {
            var _iterator3 = _createForOfIteratorHelper(item.children),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var child = _step3.value;
                child.selected = false;

                this._filteredItems.push(child);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          this._filteredItems = _toConsumableArray(this._filteredItems.sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return a.index - b.index;
          }));
        }
        /**
         * @private
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_hideSelected",
        value: function _hideSelected(item) {
          this._filteredItems = this._filteredItems.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x !== item;
          });

          if (item.parent) {
            /** @type {?} */
            var children = item.parent.children;

            if (children.every(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.selected;
            })) {
              this._filteredItems = this._filteredItems.filter(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x !== item.parent;
              });
            }
          } else if (item.children) {
            this._filteredItems = this.filteredItems.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.parent !== item;
            });
          }
        }
        /**
         * @private
         * @param {?} search
         * @param {?} opt
         * @return {?}
         */

      }, {
        key: "_defaultSearchFn",
        value: function _defaultSearchFn(search, opt) {
          /** @type {?} */
          var label = stripSpecialChars(opt.label).toLocaleLowerCase();
          return label.indexOf(search) > -1;
        }
        /**
         * @private
         * @param {?} steps
         * @return {?}
         */

      }, {
        key: "_getNextItemIndex",
        value: function _getNextItemIndex(steps) {
          if (steps > 0) {
            return this._markedIndex === this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
          }

          return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
        }
        /**
         * @private
         * @param {?} steps
         * @return {?}
         */

      }, {
        key: "_stepToItem",
        value: function _stepToItem(steps) {
          if (this._filteredItems.length === 0 || this._filteredItems.every(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.disabled;
          })) {
            return;
          }

          this._markedIndex = this._getNextItemIndex(steps);

          if (this.markedItem.disabled) {
            this._stepToItem(steps);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getLastMarkedIndex",
        value: function _getLastMarkedIndex() {
          if (this._ngSelect.hideSelected) {
            return -1;
          }

          if (this._markedIndex > -1 && this.markedItem === undefined) {
            return -1;
          }
          /** @type {?} */


          var selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);

          if (this.lastSelectedItem && selectedIndex < 0) {
            return -1;
          }

          return Math.max(this.markedIndex, selectedIndex);
        }
        /**
         * @private
         * @param {?} items
         * @param {?} prop
         * @return {?}
         */

      }, {
        key: "_groupBy",
        value: function _groupBy(items, prop) {
          var _this5 = this;

          /** @type {?} */
          var groups = new Map();

          if (items.length === 0) {
            return groups;
          } // Check if items are already grouped by given key.


          if (Array.isArray(items[0].value[
          /** @type {?} */
          prop])) {
            var _iterator4 = _createForOfIteratorHelper(items),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var item = _step4.value;

                /** @type {?} */
                var children = (item.value[
                /** @type {?} */
                prop] || []).map(
                /**
                * @param {?} x
                * @param {?} index
                * @return {?}
                */
                function (x, index) {
                  return _this5.mapItem(x, index);
                });
                groups.set(item, children);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return groups;
          }
          /** @type {?} */


          var isFnKey = isFunction(this._ngSelect.groupBy);
          /** @type {?} */

          var keyFn =
          /**
          * @param {?} item
          * @return {?}
          */
          function keyFn(item) {
            /** @type {?} */
            var key = isFnKey ?
            /** @type {?} */
            prop(item.value) : item.value[
            /** @type {?} */
            prop];
            return isDefined(key) ? key : undefined;
          }; // Group items by key.


          var _iterator5 = _createForOfIteratorHelper(items),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _item = _step5.value;

              /** @type {?} */
              var key = keyFn(_item);
              /** @type {?} */

              var group = groups.get(key);

              if (group) {
                group.push(_item);
              } else {
                groups.set(key, [_item]);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          return groups;
        }
        /**
         * @private
         * @param {?} groups
         * @return {?}
         */

      }, {
        key: "_flatten",
        value: function _flatten(groups) {
          var _this6 = this;

          /** @type {?} */
          var isGroupByFn = isFunction(this._ngSelect.groupBy);
          /** @type {?} */

          var items = [];

          var _loop = function _loop() {
            var key = _Array$from2[_i2];

            /** @type {?} */
            var i = items.length;

            if (key === undefined) {
              /** @type {?} */
              var withoutGroup = groups.get(undefined) || [];
              items.push.apply(items, _toConsumableArray(withoutGroup.map(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return Object.assign(Object.assign({}, x), {
                  index: i++
                });
              })));
              return "continue";
            }
            /** @type {?} */


            var isObjectKey = isObject(key);
            /** @type {?} */

            var parent = {
              label: isObjectKey ? '' : String(key),
              children: undefined,
              parent: null,
              index: i++,
              disabled: !_this6._ngSelect.selectableGroup,
              htmlId: newId()
            };
            /** @type {?} */

            var groupKey = isGroupByFn ? _this6._ngSelect.bindLabel :
            /** @type {?} */
            _this6._ngSelect.groupBy;
            /** @type {?} */

            var groupValue = _this6._ngSelect.groupValue ||
            /**
            * @return {?}
            */
            function () {
              if (isObjectKey) {
                return (
                  /** @type {?} */
                  key.value
                );
              }

              return _defineProperty({}, groupKey, key);
            };
            /** @type {?} */


            var children = groups.get(key).map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              x.parent = parent;
              x.children = undefined;
              x.index = i++;
              return x;
            });
            parent.children = children;
            parent.value = groupValue(key, children.map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.value;
            }));
            items.push(parent);
            items.push.apply(items, _toConsumableArray(children));
          };

          for (var _i2 = 0, _Array$from2 = Array.from(groups.keys()); _i2 < _Array$from2.length; _i2++) {
            var _ret = _loop();

            if (_ret === "continue") continue;
          }

          return items;
        }
      }, {
        key: "items",
        get: function get() {
          return this._items;
        }
        /**
         * @return {?}
         */

      }, {
        key: "filteredItems",
        get: function get() {
          return this._filteredItems;
        }
        /**
         * @return {?}
         */

      }, {
        key: "markedIndex",
        get: function get() {
          return this._markedIndex;
        }
        /**
         * @return {?}
         */

      }, {
        key: "selectedItems",
        get: function get() {
          return this._selectionModel.value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "markedItem",
        get: function get() {
          return this._filteredItems[this._markedIndex];
        }
        /**
         * @return {?}
         */

      }, {
        key: "noItemsToSelect",
        get: function get() {
          return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "maxItemsSelected",
        get: function get() {
          return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "lastSelectedItem",
        get: function get() {
          /** @type {?} */
          var i = this.selectedItems.length - 1;

          for (; i >= 0; i--) {
            /** @type {?} */
            var item = this.selectedItems[i];

            if (!item.disabled) {
              return item;
            }
          }

          return null;
        }
      }]);

      return ItemsList;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-select.types.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function NgOption() {}

    if (false) {}
    /** @enum {number} */


    var KeyCode = {
      Tab: 9,
      Enter: 13,
      Esc: 27,
      Space: 32,
      ArrowUp: 38,
      ArrowDown: 40,
      Backspace: 8
    };
    KeyCode[KeyCode.Tab] = 'Tab';
    KeyCode[KeyCode.Enter] = 'Enter';
    KeyCode[KeyCode.Esc] = 'Esc';
    KeyCode[KeyCode.Space] = 'Space';
    KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
    KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
    KeyCode[KeyCode.Backspace] = 'Backspace';
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-dropdown-panel.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */

    function ItemsRangeResult() {}

    if (false) {}
    /**
     * @record
     */


    function PanelDimensions() {}

    if (false) {}

    var NgDropdownPanelService =
    /*#__PURE__*/
    function () {
      function NgDropdownPanelService() {
        _classCallCheck(this, NgDropdownPanelService);

        this._dimensions = {
          itemHeight: 0,
          panelHeight: 0,
          itemsPerViewport: 0
        };
      }
      /**
       * @return {?}
       */


      _createClass(NgDropdownPanelService, [{
        key: "calculateItems",

        /**
         * @param {?} scrollPos
         * @param {?} itemsLength
         * @param {?} buffer
         * @return {?}
         */
        value: function calculateItems(scrollPos, itemsLength, buffer) {
          /** @type {?} */
          var d = this._dimensions;
          /** @type {?} */

          var scrollHeight = d.itemHeight * itemsLength;
          /** @type {?} */

          var scrollTop = Math.max(0, scrollPos);
          /** @type {?} */

          var indexByScrollTop = scrollTop / scrollHeight * itemsLength;
          /** @type {?} */

          var end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
          /** @type {?} */

          var maxStartEnd = end;
          /** @type {?} */

          var maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
          /** @type {?} */

          var start = Math.min(maxStart, Math.floor(indexByScrollTop));
          /** @type {?} */

          var topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
          topPadding = !isNaN(topPadding) ? topPadding : 0;
          start = !isNaN(start) ? start : -1;
          end = !isNaN(end) ? end : -1;
          start -= buffer;
          start = Math.max(0, start);
          end += buffer;
          end = Math.min(itemsLength, end);
          return {
            topPadding: topPadding,
            scrollHeight: scrollHeight,
            start: start,
            end: end
          };
        }
        /**
         * @param {?} itemHeight
         * @param {?} panelHeight
         * @return {?}
         */

      }, {
        key: "setDimensions",
        value: function setDimensions(itemHeight, panelHeight) {
          /** @type {?} */
          var itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
          this._dimensions = {
            itemHeight: itemHeight,
            panelHeight: panelHeight,
            itemsPerViewport: itemsPerViewport
          };
        }
        /**
         * @param {?} itemTop
         * @param {?} itemHeight
         * @param {?} lastScroll
         * @return {?}
         */

      }, {
        key: "getScrollTo",
        value: function getScrollTo(itemTop, itemHeight, lastScroll) {
          var panelHeight = this.dimensions.panelHeight;
          /** @type {?} */

          var itemBottom = itemTop + itemHeight;
          /** @type {?} */

          var top = lastScroll;
          /** @type {?} */

          var bottom = top + panelHeight;

          if (panelHeight >= itemBottom && lastScroll === itemTop) {
            return null;
          }

          if (itemBottom > bottom) {
            return top + itemBottom - bottom;
          } else if (itemTop <= top) {
            return itemTop;
          }

          return null;
        }
      }, {
        key: "dimensions",
        get: function get() {
          return this._dimensions;
        }
      }]);

      return NgDropdownPanelService;
    }();

    NgDropdownPanelService.ɵfac = function NgDropdownPanelService_Factory(t) {
      return new (t || NgDropdownPanelService)();
    };

    NgDropdownPanelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgDropdownPanelService,
      factory: NgDropdownPanelService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-dropdown-panel.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var TOP_CSS_CLASS = 'ng-select-top';
    /** @type {?} */

    var BOTTOM_CSS_CLASS = 'ng-select-bottom';
    /** @type {?} */

    var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_3__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_3__["asapScheduler"];

    var NgDropdownPanelComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _renderer
       * @param {?} _zone
       * @param {?} _panelService
       * @param {?} _elementRef
       * @param {?} _document
       */
      function NgDropdownPanelComponent(_renderer, _zone, _panelService, _elementRef, _document) {
        _classCallCheck(this, NgDropdownPanelComponent);

        this._renderer = _renderer;
        this._zone = _zone;
        this._panelService = _panelService;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.virtualScroll = false;
        this.filterValue = null;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._scrollToEndFired = false;
        this._updateScrollHeight = false;
        this._lastScrollPosition = 0;
        this._dropdown = _elementRef.nativeElement;
      }
      /**
       * @return {?}
       */


      _createClass(NgDropdownPanelComponent, [{
        key: "handleMousedown",

        /**
         * @param {?} $event
         * @return {?}
         */
        value: function handleMousedown($event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          $event.target;

          if (target.tagName === 'INPUT') {
            return;
          }

          $event.preventDefault();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._select = this._dropdown.parentElement;
          this._virtualPadding = this.paddingElementRef.nativeElement;
          this._scrollablePanel = this.scrollElementRef.nativeElement;
          this._contentPanel = this.contentElementRef.nativeElement;

          this._handleScroll();

          this._handleOutsideClick();

          this._appendDropdown();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.items) {
            /** @type {?} */
            var change = changes.items;

            this._onItemsChange(change.currentValue, change.firstChange);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroy$.next();

          this._destroy$.complete();

          this._destroy$.unsubscribe();

          if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
          }
        }
        /**
         * @param {?} option
         * @param {?=} startFromOption
         * @return {?}
         */

      }, {
        key: "scrollTo",
        value: function scrollTo(option) {
          var startFromOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (!option) {
            return;
          }
          /** @type {?} */


          var index = this.items.indexOf(option);

          if (index < 0 || index >= this.itemsLength) {
            return;
          }
          /** @type {?} */


          var scrollTo;

          if (this.virtualScroll) {
            /** @type {?} */
            var itemHeight = this._panelService.dimensions.itemHeight;
            scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
          } else {
            /** @type {?} */
            var item = this._dropdown.querySelector("#".concat(option.htmlId));
            /** @type {?} */


            var lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
            scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
          }

          if (isDefined(scrollTo)) {
            this._scrollablePanel.scrollTop = scrollTo;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "scrollToTag",
        value: function scrollToTag() {
          /** @type {?} */
          var panel = this._scrollablePanel;
          panel.scrollTop = panel.scrollHeight - panel.clientHeight;
        }
        /**
         * @return {?}
         */

      }, {
        key: "adjustPosition",
        value: function adjustPosition() {
          /** @type {?} */
          var parent = this._parent.getBoundingClientRect();
          /** @type {?} */


          var select = this._select.getBoundingClientRect();

          this._setOffset(parent, select);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_handleDropdownPosition",
        value: function _handleDropdownPosition() {
          this._currentPosition = this._calculateCurrentPosition(this._dropdown);

          if (this._currentPosition === 'top') {
            this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);

            this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);

            this._renderer.addClass(this._select, TOP_CSS_CLASS);

            this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
          } else {
            this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);

            this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);

            this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);

            this._renderer.removeClass(this._select, TOP_CSS_CLASS);
          }

          if (this.appendTo) {
            this._updatePosition();
          }

          this._dropdown.style.opacity = '1';
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_handleScroll",
        value: function _handleScroll() {
          var _this7 = this;

          this._zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this7.scrollElementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this7._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return _this7._onContentScrolled(e.target.scrollTop);
            });
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_handleOutsideClick",
        value: function _handleOutsideClick() {
          var _this8 = this;

          if (!this._document) {
            return;
          }

          this._zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this8._document, 'touchstart', {
              capture: true
            }), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this8._document, 'mousedown', {
              capture: true
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this8._destroy$)).subscribe(
            /**
            * @param {?} $event
            * @return {?}
            */
            function ($event) {
              return _this8._checkToClose($event);
            });
          });
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_checkToClose",
        value: function _checkToClose($event) {
          var _this9 = this;

          if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
            return;
          }
          /** @type {?} */


          var path = $event.path || $event.composedPath && $event.composedPath();

          if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
            return;
          }

          this._zone.run(
          /**
          * @return {?}
          */
          function () {
            return _this9.outsideClick.emit();
          });
        }
        /**
         * @private
         * @param {?} items
         * @param {?} firstChange
         * @return {?}
         */

      }, {
        key: "_onItemsChange",
        value: function _onItemsChange(items, firstChange) {
          this.items = items || [];
          this._scrollToEndFired = false;
          this.itemsLength = items.length;

          if (this.virtualScroll) {
            this._updateItemsRange(firstChange);
          } else {
            this._updateItems(firstChange);
          }
        }
        /**
         * @private
         * @param {?} firstChange
         * @return {?}
         */

      }, {
        key: "_updateItems",
        value: function _updateItems(firstChange) {
          var _this10 = this;

          this.update.emit(this.items);

          if (firstChange === false) {
            return;
          }

          this._zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var panelHeight = _this10._scrollablePanel.clientHeight;

              _this10._panelService.setDimensions(0, panelHeight);

              _this10._handleDropdownPosition();

              _this10.scrollTo(_this10.markedItem, firstChange);
            });
          });
        }
        /**
         * @private
         * @param {?} firstChange
         * @return {?}
         */

      }, {
        key: "_updateItemsRange",
        value: function _updateItemsRange(firstChange) {
          var _this11 = this;

          this._zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this11._measureDimensions().then(
            /**
            * @return {?}
            */
            function () {
              if (firstChange) {
                _this11._renderItemsRange(_this11._startOffset);

                _this11._handleDropdownPosition();
              } else {
                _this11._renderItemsRange();
              }
            });
          });
        }
        /**
         * @private
         * @param {?} scrollTop
         * @return {?}
         */

      }, {
        key: "_onContentScrolled",
        value: function _onContentScrolled(scrollTop) {
          if (this.virtualScroll) {
            this._renderItemsRange(scrollTop);
          }

          this._lastScrollPosition = scrollTop;

          this._fireScrollToEnd(scrollTop);
        }
        /**
         * @private
         * @param {?} height
         * @return {?}
         */

      }, {
        key: "_updateVirtualHeight",
        value: function _updateVirtualHeight(height) {
          if (this._updateScrollHeight) {
            this._virtualPadding.style.height = "".concat(height, "px");
            this._updateScrollHeight = false;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_onItemsLengthChanged",
        value: function _onItemsLengthChanged() {
          this._updateScrollHeight = true;
        }
        /**
         * @private
         * @param {?=} scrollTop
         * @return {?}
         */

      }, {
        key: "_renderItemsRange",
        value: function _renderItemsRange() {
          var _this12 = this;

          var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          if (scrollTop && this._lastScrollPosition === scrollTop) {
            return;
          }

          scrollTop = scrollTop || this._scrollablePanel.scrollTop;
          /** @type {?} */

          var range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);

          this._updateVirtualHeight(range.scrollHeight);

          this._contentPanel.style.transform = "translateY(".concat(range.topPadding, "px)");

          this._zone.run(
          /**
          * @return {?}
          */
          function () {
            _this12.update.emit(_this12.items.slice(range.start, range.end));

            _this12.scroll.emit({
              start: range.start,
              end: range.end
            });
          });

          if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
            this._scrollablePanel.scrollTop = scrollTop;
            this._lastScrollPosition = scrollTop;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_measureDimensions",
        value: function _measureDimensions() {
          var _this13 = this;

          if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
            return Promise.resolve(this._panelService.dimensions);
          }

          var _this$items = _slicedToArray(this.items, 1),
              first = _this$items[0];

          this.update.emit([first]);
          return Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var option = _this13._dropdown.querySelector("#".concat(first.htmlId));
            /** @type {?} */


            var optionHeight = option.clientHeight;
            _this13._virtualPadding.style.height = "".concat(optionHeight * _this13.itemsLength, "px");
            /** @type {?} */

            var panelHeight = _this13._scrollablePanel.clientHeight;

            _this13._panelService.setDimensions(optionHeight, panelHeight);

            return _this13._panelService.dimensions;
          });
        }
        /**
         * @private
         * @param {?} scrollTop
         * @return {?}
         */

      }, {
        key: "_fireScrollToEnd",
        value: function _fireScrollToEnd(scrollTop) {
          var _this14 = this;

          if (this._scrollToEndFired || scrollTop === 0) {
            return;
          }
          /** @type {?} */


          var padding = this.virtualScroll ? this._virtualPadding : this._contentPanel;

          if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
            this._zone.run(
            /**
            * @return {?}
            */
            function () {
              return _this14.scrollToEnd.emit();
            });

            this._scrollToEndFired = true;
          }
        }
        /**
         * @private
         * @param {?} dropdownEl
         * @return {?}
         */

      }, {
        key: "_calculateCurrentPosition",
        value: function _calculateCurrentPosition(dropdownEl) {
          if (this.position !== 'auto') {
            return this.position;
          }
          /** @type {?} */


          var selectRect = this._select.getBoundingClientRect();
          /** @type {?} */


          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          /** @type {?} */

          var offsetTop = selectRect.top + window.pageYOffset;
          /** @type {?} */

          var height = selectRect.height;
          /** @type {?} */

          var dropdownHeight = dropdownEl.getBoundingClientRect().height;

          if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
          } else {
            return 'bottom';
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_appendDropdown",
        value: function _appendDropdown() {
          if (!this.appendTo) {
            return;
          }

          this._parent = document.querySelector(this.appendTo);

          if (!parent) {
            throw new Error("appendTo selector ".concat(this.appendTo, " did not found any parent element"));
          }

          this._parent.appendChild(this._dropdown);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updatePosition",
        value: function _updatePosition() {
          /** @type {?} */
          var select = this._select.getBoundingClientRect();
          /** @type {?} */


          var parent = this._parent.getBoundingClientRect();
          /** @type {?} */


          var offsetLeft = select.left - parent.left;

          this._setOffset(parent, select);

          this._dropdown.style.left = offsetLeft + 'px';
          this._dropdown.style.width = select.width + 'px';
          this._dropdown.style.minWidth = select.width + 'px';
        }
        /**
         * @private
         * @param {?} parent
         * @param {?} select
         * @return {?}
         */

      }, {
        key: "_setOffset",
        value: function _setOffset(parent, select) {
          /** @type {?} */
          var delta = select.height;

          if (this._currentPosition === 'top') {
            /** @type {?} */
            var offsetBottom = parent.bottom - select.bottom;
            this._dropdown.style.bottom = offsetBottom + delta + 'px';
            this._dropdown.style.top = 'auto';
          } else if (this._currentPosition === 'bottom') {
            /** @type {?} */
            var offsetTop = select.top - parent.top;
            this._dropdown.style.top = offsetTop + delta + 'px';
            this._dropdown.style.bottom = 'auto';
          }
        }
      }, {
        key: "currentPosition",
        get: function get() {
          return this._currentPosition;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "itemsLength",
        get: function get() {
          return this._itemsLength;
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._itemsLength) {
            this._itemsLength = value;

            this._onItemsLengthChanged();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_startOffset",
        get: function get() {
          if (this.markedItem) {
            var _this$_panelService$d = this._panelService.dimensions,
                itemHeight = _this$_panelService$d.itemHeight,
                panelHeight = _this$_panelService$d.panelHeight;
            /** @type {?} */

            var offset = this.markedItem.index * itemHeight;
            return panelHeight > offset ? 0 : offset;
          }

          return 0;
        }
      }]);

      return NgDropdownPanelComponent;
    }();

    NgDropdownPanelComponent.ɵfac = function NgDropdownPanelComponent_Factory(t) {
      return new (t || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], 8));
    };

    NgDropdownPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgDropdownPanelComponent,
      selectors: [["ng-dropdown-panel"]],
      viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
        }
      },
      hostBindings: function NgDropdownPanelComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgDropdownPanelComponent_mousedown_HostBindingHandler($event) {
            return ctx.handleMousedown($event);
          });
        }
      },
      inputs: {
        items: "items",
        position: "position",
        virtualScroll: "virtualScroll",
        filterValue: "filterValue",
        markedItem: "markedItem",
        appendTo: "appendTo",
        bufferAmount: "bufferAmount",
        headerTemplate: "headerTemplate",
        footerTemplate: "footerTemplate"
      },
      outputs: {
        update: "update",
        scroll: "scroll",
        scrollToEnd: "scrollToEnd",
        outsideClick: "outsideClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c4,
      decls: 9,
      vars: 6,
      consts: [["class", "ng-dropdown-header", 4, "ngIf"], [1, "ng-dropdown-panel-items", "scroll-host"], ["scroll", ""], ["padding", ""], ["content", ""], ["class", "ng-dropdown-footer", 4, "ngIf"], [1, "ng-dropdown-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-dropdown-footer"]],
      template: function NgDropdownPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgDropdownPanelComponent_div_0_Template, 2, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgDropdownPanelComponent_div_8_Template, 2, 4, "div", 5);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NgDropdownPanelComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: NgDropdownPanelService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };

    NgDropdownPanelComponent.propDecorators = {
      items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      markedItem: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      appendTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bufferAmount: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      virtualScroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      headerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      footerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      filterValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      scroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      scrollToEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      outsideClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      contentElementRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['content', {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
          "static": true
        }]
      }],
      scrollElementRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['scroll', {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
          "static": true
        }]
      }],
      paddingElementRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['padding', {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
          "static": true
        }]
      }],
      handleMousedown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mousedown', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          selector: 'ng-dropdown-panel',
          template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: NgDropdownPanelService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      }, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        virtualScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        filterValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        scrollToEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        outsideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        handleMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        markedItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bufferAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        footerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contentElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['content', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        scrollElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scroll', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        paddingElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['padding', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-option.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgOptionComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} elementRef
       */
      function NgOptionComponent(elementRef) {
        _classCallCheck(this, NgOptionComponent);

        this.elementRef = elementRef;
        this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._disabled = false;
      }
      /**
       * @return {?}
       */


      _createClass(NgOptionComponent, [{
        key: "ngOnChanges",

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (changes.disabled) {
            this.stateChange$.next({
              value: this.value,
              disabled: this._disabled
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (this.label !== this._previousLabel) {
            this._previousLabel = this.label;
            this.stateChange$.next({
              value: this.value,
              disabled: this._disabled,
              label: this.elementRef.nativeElement.innerHTML
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stateChange$.complete();
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_isDisabled",
        value: function _isDisabled(value) {
          return value != null && "".concat(value) !== 'false';
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = this._isDisabled(value);
        }
        /**
         * @return {?}
         */

      }, {
        key: "label",
        get: function get() {
          return (this.elementRef.nativeElement.textContent || '').trim();
        }
      }]);

      return NgOptionComponent;
    }();

    NgOptionComponent.ɵfac = function NgOptionComponent_Factory(t) {
      return new (t || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    NgOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgOptionComponent,
      selectors: [["ng-option"]],
      inputs: {
        disabled: "disabled",
        value: "value"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c4,
      decls: 1,
      vars: 0,
      template: function NgOptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NgOptionComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    NgOptionComponent.propDecorators = {
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ng-option',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          template: "<ng-content></ng-content>"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/config.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgSelectConfig = function NgSelectConfig() {
      _classCallCheck(this, NgSelectConfig);

      this.notFoundText = 'No items found';
      this.typeToSearchText = 'Type to search';
      this.addTagText = 'Add item';
      this.loadingText = 'Loading...';
      this.clearAllText = 'Clear all';
      this.disableVirtualScroll = true;
      this.openOnEnter = true;
      this.appearance = 'underline';
    };

    NgSelectConfig.ɵfac = function NgSelectConfig_Factory(t) {
      return new (t || NgSelectConfig)();
    };
    /** @nocollapse */


    NgSelectConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgSelectConfig_Factory() {
        return new NgSelectConfig();
      },
      token: NgSelectConfig,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-select.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ng-select-selection-model');

    var NgSelectComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} classes
       * @param {?} autoFocus
       * @param {?} config
       * @param {?} newSelectionModel
       * @param {?} _elementRef
       * @param {?} _cd
       * @param {?} _console
       */
      function NgSelectComponent(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
        var _this15 = this;

        _classCallCheck(this, NgSelectComponent);

        this.classes = classes;
        this.autoFocus = autoFocus;
        this._cd = _cd;
        this._console = _console;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.searchFn = null;
        this.trackByFn = null;
        this.clearOnBackspace = true;
        this.labelForId = null;
        this.inputAttrs = {};
        this.readonly = false;
        this.searchWhileComposing = true;
        this.minTermLength = 0;
        this.editableSearchTerm = false;

        this.keyDownFn =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {
          return true;
        };

        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.clearable = true;
        this.isOpen = false; // output events

        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewPortItems = [];
        this.searchTerm = null;
        this.dropdownId = newId();
        this.escapeHTML = true;
        this.useDefaultClass = true;
        this._items = [];
        this._defaultLabel = 'label';
        this._pressedKeys = [];
        this._isComposing = false;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();

        this._onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        this._onTouched =
        /**
        * @return {?}
        */
        function () {};

        this.clearItem =
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          /** @type {?} */
          var option = _this15.selectedItems.find(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.value === item;
          });

          _this15.unselect(option);
        };

        this.trackByOption =
        /**
        * @param {?} _
        * @param {?} item
        * @return {?}
        */
        function (_, item) {
          if (_this15.trackByFn) {
            return _this15.trackByFn(item.value);
          }

          return item;
        };

        this._mergeGlobalConfig(config);

        this.itemsList = new ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
      }
      /**
       * @return {?}
       */


      _createClass(NgSelectComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._handleKeyPresses();

          this._setInputAttributes();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.multiple) {
            this.itemsList.clearSelected();
          }

          if (changes.items) {
            this._setItems(changes.items.currentValue || []);
          }

          if (changes.isOpen) {
            this._manualOpen = isDefined(changes.isOpen.currentValue);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (!this._itemsAreUsed) {
            this.escapeHTML = false;

            this._setItemsFromNgOptions();
          }

          if (isDefined(this.autoFocus)) {
            this.focus();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroy$.next();

          this._destroy$.complete();
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "handleKeyDown",
        value: function handleKeyDown($event) {
          /** @type {?} */
          var keyCode = KeyCode[$event.which];

          if (keyCode) {
            if (this.keyDownFn($event) === false) {
              return;
            }

            this.handleKeyCode($event);
          } else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
          }
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "handleKeyCode",
        value: function handleKeyCode($event) {
          switch ($event.which) {
            case KeyCode.ArrowDown:
              this._handleArrowDown($event);

              break;

            case KeyCode.ArrowUp:
              this._handleArrowUp($event);

              break;

            case KeyCode.Space:
              this._handleSpace($event);

              break;

            case KeyCode.Enter:
              this._handleEnter($event);

              break;

            case KeyCode.Tab:
              this._handleTab($event);

              break;

            case KeyCode.Esc:
              this.close();
              $event.preventDefault();
              break;

            case KeyCode.Backspace:
              this._handleBackspace();

              break;
          }
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "handleMousedown",
        value: function handleMousedown($event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          $event.target;

          if (target.tagName !== 'INPUT') {
            $event.preventDefault();
          }

          if (target.classList.contains('ng-clear-wrapper')) {
            this.handleClearClick();
            return;
          }

          if (target.classList.contains('ng-arrow-wrapper')) {
            this.handleArrowClick();
            return;
          }

          if (target.classList.contains('ng-value-icon')) {
            return;
          }

          if (!this.focused) {
            this.focus();
          }

          if (this.searchable) {
            this.open();
          } else {
            this.toggle();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleArrowClick",
        value: function handleArrowClick() {
          if (this.isOpen) {
            this.close();
          } else {
            this.open();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleClearClick",
        value: function handleClearClick() {
          if (this.hasValue) {
            this.itemsList.clearSelected(true);

            this._updateNgModel();
          }

          this._clearSearch();

          this.focus();
          this.clearEvent.emit();

          this._onSelectionChanged();
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearModel",
        value: function clearModel() {
          if (!this.clearable) {
            return;
          }

          this.itemsList.clearSelected();

          this._updateNgModel();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.itemsList.clearSelected();

          this._handleWriteValue(value);

          this._cd.markForCheck();
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
        /**
         * @param {?} state
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(state) {
          this._disabled = state;

          this._cd.markForCheck();
        }
        /**
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (!this.isOpen) {
            this.open();
          } else {
            this.close();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
            return;
          }

          if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
          }

          this.isOpen = true;
          this.itemsList.markSelectedOrDefault(this.markFirst);
          this.openEvent.emit();

          if (!this.searchTerm) {
            this.focus();
          }

          this.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          if (!this.isOpen || this._manualOpen) {
            return;
          }

          this.isOpen = false;

          if (!this._editableSearchTerm) {
            this._clearSearch();
          } else {
            this.itemsList.resetFilteredItems();
          }

          this.itemsList.unmarkItem();

          this._onTouched();

          this.closeEvent.emit();

          this._cd.markForCheck();
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "toggleItem",
        value: function toggleItem(item) {
          if (!item || item.disabled || this.disabled) {
            return;
          }

          if (this.multiple && item.selected) {
            this.unselect(item);
          } else {
            this.select(item);
          }

          if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
          }

          this._onSelectionChanged();
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(item) {
          if (!item.selected) {
            this.itemsList.select(item);

            if (this.clearSearchOnAdd && !this._editableSearchTerm) {
              this._clearSearch();
            }

            this._updateNgModel();

            if (this.multiple) {
              this.addEvent.emit(item.value);
            }
          }

          if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this.searchInput.nativeElement.focus();
        }
        /**
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          this.searchInput.nativeElement.blur();
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "unselect",
        value: function unselect(item) {
          if (!item) {
            return;
          }

          this.itemsList.unselect(item);
          this.focus();

          this._updateNgModel();

          this.removeEvent.emit(item);
        }
        /**
         * @return {?}
         */

      }, {
        key: "selectTag",
        value: function selectTag() {
          var _this16 = this;

          /** @type {?} */
          var tag;

          if (isFunction(this.addTag)) {
            tag =
            /** @type {?} */
            this.addTag(this.searchTerm);
          } else {
            tag = this._primitive ? this.searchTerm : _defineProperty({}, this.bindLabel, this.searchTerm);
          }
          /** @type {?} */


          var handleTag =
          /**
          * @param {?} item
          * @return {?}
          */
          function handleTag(item) {
            return _this16._isTypeahead || !_this16.isOpen ? _this16.itemsList.mapItem(item, null) : _this16.itemsList.addItem(item);
          };

          if (isPromise(tag)) {
            tag.then(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return _this16.select(handleTag(item));
            })["catch"](
            /**
            * @return {?}
            */
            function () {});
          } else if (tag) {
            this.select(handleTag(tag));
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "showClear",
        value: function showClear() {
          return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
        }
        /**
         * @return {?}
         */

      }, {
        key: "showNoItemsFound",

        /**
         * @return {?}
         */
        value: function showNoItemsFound() {
          /** @type {?} */
          var empty = this.itemsList.filteredItems.length === 0;
          return (empty && !this._isTypeahead && !this.loading || empty && this._isTypeahead && this._validTerm && !this.loading) && !this.showAddTag;
        }
        /**
         * @return {?}
         */

      }, {
        key: "showTypeToSearch",
        value: function showTypeToSearch() {
          /** @type {?} */
          var empty = this.itemsList.filteredItems.length === 0;
          return empty && this._isTypeahead && !this._validTerm && !this.loading;
        }
        /**
         * @return {?}
         */

      }, {
        key: "onCompositionStart",
        value: function onCompositionStart() {
          this._isComposing = true;
        }
        /**
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "onCompositionEnd",
        value: function onCompositionEnd(term) {
          this._isComposing = false;

          if (this.searchWhileComposing) {
            return;
          }

          this.filter(term);
        }
        /**
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "filter",
        value: function filter(term) {
          if (this._isComposing && !this.searchWhileComposing) {
            return;
          }

          this.searchTerm = term;

          if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
            this.typeahead.next(term);
          }

          if (!this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);

            if (this.isOpen) {
              this.itemsList.markSelectedOrDefault(this.markFirst);
            }
          }

          this.searchEvent.emit({
            term: term,
            items: this.itemsList.filteredItems.map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.value;
            })
          });
          this.open();
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "onInputFocus",
        value: function onInputFocus($event) {
          if (this.focused) {
            return;
          }

          if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
          }

          this.element.classList.add('ng-select-focused');
          this.focusEvent.emit($event);
          this.focused = true;
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "onInputBlur",
        value: function onInputBlur($event) {
          this.element.classList.remove('ng-select-focused');
          this.blurEvent.emit($event);

          if (!this.isOpen && !this.disabled) {
            this._onTouched();
          }

          if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
          }

          this.focused = false;
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "onItemHover",
        value: function onItemHover(item) {
          if (item.disabled) {
            return;
          }

          this.itemsList.markItem(item);
        }
        /**
         * @return {?}
         */

      }, {
        key: "detectChanges",
        value: function detectChanges() {
          if (!
          /** @type {?} */
          this._cd.destroyed) {
            this._cd.detectChanges();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setSearchTermFromItems",
        value: function _setSearchTermFromItems() {
          /** @type {?} */
          var selected = this.selectedItems && this.selectedItems[0];
          this.searchTerm = selected && selected.label || null;
        }
        /**
         * @private
         * @param {?} items
         * @return {?}
         */

      }, {
        key: "_setItems",
        value: function _setItems(items) {
          /** @type {?} */
          var firstItem = items[0];
          this.bindLabel = this.bindLabel || this._defaultLabel;
          this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
          this.itemsList.setItems(items);

          if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
          }

          if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
          }

          if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setItemsFromNgOptions",
        value: function _setItemsFromNgOptions() {
          var _this17 = this;

          /** @type {?} */
          var mapNgOptions =
          /**
          * @param {?} options
          * @return {?}
          */
          function mapNgOptions(options) {
            _this17.items = options.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return {
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
              };
            });

            _this17.itemsList.setItems(_this17.items);

            if (_this17.hasValue) {
              _this17.itemsList.mapSelectedItems();
            }

            _this17.detectChanges();
          };
          /** @type {?} */


          var handleOptionChange =
          /**
          * @return {?}
          */
          function handleOptionChange() {
            /** @type {?} */
            var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(_this17.ngOptions.changes, _this17._destroy$);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"]).apply(void 0, _toConsumableArray(_this17.ngOptions.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.stateChange$;
            }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(changedOrDestroyed)).subscribe(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              /** @type {?} */
              var item = _this17.itemsList.findItem(option.value);

              item.disabled = option.disabled;
              item.label = option.label || item.label;

              _this17._cd.detectChanges();
            });
          };

          this.ngOptions.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.ngOptions), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$)).subscribe(
          /**
          * @param {?} options
          * @return {?}
          */
          function (options) {
            _this17.bindLabel = _this17._defaultLabel;
            mapNgOptions(options);
            handleOptionChange();
          });
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_isValidWriteValue",
        value: function _isValidWriteValue(value) {
          var _this18 = this;

          if (!isDefined(value) || this.multiple && value === '' || Array.isArray(value) && value.length === 0) {
            return false;
          }
          /** @type {?} */


          var validateBinding =
          /**
          * @param {?} item
          * @return {?}
          */
          function validateBinding(item) {
            if (!isDefined(_this18.compareWith) && isObject(item) && _this18.bindValue) {
              _this18._console.warn("Binding object(".concat(JSON.stringify(item), ") with bindValue is not allowed."));

              return false;
            }

            return true;
          };

          if (this.multiple) {
            if (!Array.isArray(value)) {
              this._console.warn('Multiple select ngModel should be array.');

              return false;
            }

            return value.every(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return validateBinding(item);
            });
          } else {
            return validateBinding(value);
          }
        }
        /**
         * @private
         * @param {?} ngModel
         * @return {?}
         */

      }, {
        key: "_handleWriteValue",
        value: function _handleWriteValue(ngModel) {
          var _this19 = this;

          if (!this._isValidWriteValue(ngModel)) {
            return;
          }
          /** @type {?} */


          var select =
          /**
          * @param {?} val
          * @return {?}
          */
          function select(val) {
            /** @type {?} */
            var item = _this19.itemsList.findItem(val);

            if (item) {
              _this19.itemsList.select(item);
            } else {
              /** @type {?} */
              var isValObject = isObject(val);
              /** @type {?} */

              var isPrimitive = !isValObject && !_this19.bindValue;

              if (isValObject || isPrimitive) {
                _this19.itemsList.select(_this19.itemsList.mapItem(val, null));
              } else if (_this19.bindValue) {
                var _item2;

                item = (_item2 = {}, _defineProperty(_item2, _this19.bindLabel, null), _defineProperty(_item2, _this19.bindValue, val), _item2);

                _this19.itemsList.select(_this19.itemsList.mapItem(item, null));
              }
            }
          };

          if (this.multiple) {
            /** @type {?} */
            ngModel.forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return select(item);
            });
          } else {
            select(ngModel);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_handleKeyPresses",
        value: function _handleKeyPresses() {
          var _this20 = this;

          if (this.searchable) {
            return;
          }

          this._keyPress$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(
          /**
          * @param {?} letter
          * @return {?}
          */
          function (letter) {
            return _this20._pressedKeys.push(letter);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this20._pressedKeys.length > 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @return {?}
          */
          function () {
            return _this20._pressedKeys.join('');
          })).subscribe(
          /**
          * @param {?} term
          * @return {?}
          */
          function (term) {
            /** @type {?} */
            var item = _this20.itemsList.findByLabel(term);

            if (item) {
              if (_this20.isOpen) {
                _this20.itemsList.markItem(item);

                _this20._cd.markForCheck();
              } else {
                _this20.select(item);
              }
            }

            _this20._pressedKeys = [];
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setInputAttributes",
        value: function _setInputAttributes() {
          /** @type {?} */
          var input = this.searchInput.nativeElement;
          /** @type {?} */

          var attributes = Object.assign({
            type: 'text',
            autocorrect: 'off',
            autocapitalize: 'off',
            autocomplete: this.labelForId ? 'off' : this.dropdownId
          }, this.inputAttrs);

          for (var _i3 = 0, _Object$keys = Object.keys(attributes); _i3 < _Object$keys.length; _i3++) {
            var key = _Object$keys[_i3];
            input.setAttribute(key, attributes[key]);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updateNgModel",
        value: function _updateNgModel() {
          /** @type {?} */
          var model = [];

          var _iterator6 = _createForOfIteratorHelper(this.selectedItems),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var item = _step6.value;

              if (this.bindValue) {
                /** @type {?} */
                var value = null;

                if (item.children) {
                  /** @type {?} */
                  var groupKey = this.groupValue ? this.bindValue :
                  /** @type {?} */
                  this.groupBy;
                  value = item.value[groupKey ||
                  /** @type {?} */
                  this.groupBy];
                } else {
                  value = this.itemsList.resolveNested(item.value, this.bindValue);
                }

                model.push(value);
              } else {
                model.push(item.value);
              }
            }
            /** @type {?} */

          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          var selected = this.selectedItems.map(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.value;
          });

          if (this.multiple) {
            this._onChange(model);

            this.changeEvent.emit(selected);
          } else {
            this._onChange(isDefined(model[0]) ? model[0] : null);

            this.changeEvent.emit(selected[0]);
          }

          this._cd.markForCheck();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_clearSearch",
        value: function _clearSearch() {
          if (!this.searchTerm) {
            return;
          }

          this._changeSearch(null);

          this.itemsList.resetFilteredItems();
        }
        /**
         * @private
         * @param {?} searchTerm
         * @return {?}
         */

      }, {
        key: "_changeSearch",
        value: function _changeSearch(searchTerm) {
          this.searchTerm = searchTerm;

          if (this._isTypeahead) {
            this.typeahead.next(searchTerm);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_scrollToMarked",
        value: function _scrollToMarked() {
          if (!this.isOpen || !this.dropdownPanel) {
            return;
          }

          this.dropdownPanel.scrollTo(this.itemsList.markedItem);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_scrollToTag",
        value: function _scrollToTag() {
          if (!this.isOpen || !this.dropdownPanel) {
            return;
          }

          this.dropdownPanel.scrollToTag();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_onSelectionChanged",
        value: function _onSelectionChanged() {
          if (this.isOpen && this.multiple && this.appendTo) {
            // Make sure items are rendered.
            this._cd.detectChanges();

            this.dropdownPanel.adjustPosition();
          }
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleTab",
        value: function _handleTab($event) {
          if (this.isOpen === false && !this.addTag) {
            return;
          }

          if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
              this.toggleItem(this.itemsList.markedItem);
              $event.preventDefault();
            } else if (this.showAddTag) {
              this.selectTag();
              $event.preventDefault();
            } else {
              this.close();
            }
          } else {
            this.close();
          }
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleEnter",
        value: function _handleEnter($event) {
          if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
              this.toggleItem(this.itemsList.markedItem);
            } else if (this.showAddTag) {
              this.selectTag();
            }
          } else if (this.openOnEnter) {
            this.open();
          } else {
            return;
          }

          $event.preventDefault();
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleSpace",
        value: function _handleSpace($event) {
          if (this.isOpen || this._manualOpen) {
            return;
          }

          this.open();
          $event.preventDefault();
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleArrowDown",
        value: function _handleArrowDown($event) {
          if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();

            this._scrollToTag();
          } else {
            this.itemsList.markNextItem();

            this._scrollToMarked();
          }

          this.open();
          $event.preventDefault();
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleArrowUp",
        value: function _handleArrowUp($event) {
          if (!this.isOpen) {
            return;
          }

          if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();

            this._scrollToTag();
          } else {
            this.itemsList.markPreviousItem();

            this._scrollToMarked();
          }

          $event.preventDefault();
        }
        /**
         * @private
         * @param {?} nextStep
         * @return {?}
         */

      }, {
        key: "_nextItemIsTag",
        value: function _nextItemIsTag(nextStep) {
          /** @type {?} */
          var nextIndex = this.itemsList.markedIndex + nextStep;
          return this.addTag && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_handleBackspace",
        value: function _handleBackspace() {
          if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
            return;
          }

          if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
          } else {
            this.clearModel();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_mergeGlobalConfig",

        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        value: function _mergeGlobalConfig(config) {
          this.placeholder = this.placeholder || config.placeholder;
          this.notFoundText = this.notFoundText || config.notFoundText;
          this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
          this.addTagText = this.addTagText || config.addTagText;
          this.loadingText = this.loadingText || config.loadingText;
          this.clearAllText = this.clearAllText || config.clearAllText;
          this.virtualScroll = isDefined(this.virtualScroll) ? this.virtualScroll : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
          this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
          this.appendTo = this.appendTo || config.appendTo;
          this.bindValue = this.bindValue || config.bindValue;
          this.appearance = this.appearance || config.appearance;
        }
      }, {
        key: "items",
        get: function get() {
          return this._items;
        },

        /**
         * @param {?} value
         * @return {?}
         */
        set: function set(value) {
          this._itemsAreUsed = true;
          this._items = value;
        }
      }, {
        key: "compareWith",

        /**
         * @return {?}
         */
        get: function get() {
          return this._compareWith;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          if (!isFunction(fn)) {
            throw Error('`compareWith` must be a function.');
          }

          this._compareWith = fn;
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearSearchOnAdd",
        get: function get() {
          return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect;
        },

        /**
         * @param {?} value
         * @return {?}
         */
        set: function set(value) {
          this._clearSearchOnAdd = value;
        }
      }, {
        key: "disabled",

        /**
         * @return {?}
         */
        get: function get() {
          return this.readonly || this._disabled;
        }
      }, {
        key: "filtered",

        /**
         * @return {?}
         */
        get: function get() {
          return !!this.searchTerm && this.searchable || this._isComposing;
        }
      }, {
        key: "_editableSearchTerm",

        /**
         * @private
         * @return {?}
         */
        get: function get() {
          return this.editableSearchTerm && !this.multiple;
        }
        /**
         * @return {?}
         */

      }, {
        key: "selectedItems",
        get: function get() {
          return this.itemsList.selectedItems;
        }
        /**
         * @return {?}
         */

      }, {
        key: "selectedValues",
        get: function get() {
          return this.selectedItems.map(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.value;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "hasValue",
        get: function get() {
          return this.selectedItems.length > 0;
        }
        /**
         * @return {?}
         */

      }, {
        key: "currentPanelPosition",
        get: function get() {
          if (this.dropdownPanel) {
            return this.dropdownPanel.currentPosition;
          }

          return undefined;
        }
      }, {
        key: "showAddTag",
        get: function get() {
          if (!this._validTerm) {
            return false;
          }
          /** @type {?} */


          var term = this.searchTerm.toLowerCase().trim();
          return this.addTag && !this.itemsList.filteredItems.some(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.label.toLowerCase() === term;
          }) && (!this.hideSelected && this.isOpen || !this.selectedItems.some(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.label.toLowerCase() === term;
          })) && !this.loading;
        }
      }, {
        key: "_isTypeahead",
        get: function get() {
          return this.typeahead && this.typeahead.observers.length > 0;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_validTerm",
        get: function get() {
          /** @type {?} */
          var term = this.searchTerm && this.searchTerm.trim();
          return term && term.length >= this.minTermLength;
        }
      }]);

      return NgSelectComponent;
    }();

    NgSelectComponent.ɵfac = function NgSelectComponent_Factory(t) {
      return new (t || NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SELECTION_MODEL_FACTORY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConsoleService));
    };

    NgSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgSelectComponent,
      selectors: [["ng-select"]],
      contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
        }
      },
      viewQuery: function NgSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgDropdownPanelComponent, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c5, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        }
      },
      hostAttrs: ["role", "listbox"],
      hostVars: 20,
      hostBindings: function NgSelectComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) {
            return ctx.handleKeyDown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select", ctx.useDefaultClass)("ng-select-single", !ctx.multiple)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select-disabled", ctx.disabled)("ng-select-filtered", ctx.filtered)("ng-select-typeahead", ctx.typeahead);
        }
      },
      inputs: {
        markFirst: "markFirst",
        dropdownPosition: "dropdownPosition",
        loading: "loading",
        closeOnSelect: "closeOnSelect",
        hideSelected: "hideSelected",
        selectOnTab: "selectOnTab",
        bufferAmount: "bufferAmount",
        selectableGroup: "selectableGroup",
        selectableGroupAsModel: "selectableGroupAsModel",
        searchFn: "searchFn",
        trackByFn: "trackByFn",
        clearOnBackspace: "clearOnBackspace",
        labelForId: "labelForId",
        inputAttrs: "inputAttrs",
        readonly: "readonly",
        searchWhileComposing: "searchWhileComposing",
        minTermLength: "minTermLength",
        editableSearchTerm: "editableSearchTerm",
        keyDownFn: "keyDownFn",
        multiple: "multiple",
        addTag: "addTag",
        searchable: "searchable",
        clearable: "clearable",
        isOpen: "isOpen",
        items: "items",
        compareWith: "compareWith",
        clearSearchOnAdd: "clearSearchOnAdd",
        bindLabel: "bindLabel",
        placeholder: "placeholder",
        notFoundText: "notFoundText",
        typeToSearchText: "typeToSearchText",
        addTagText: "addTagText",
        loadingText: "loadingText",
        clearAllText: "clearAllText",
        virtualScroll: "virtualScroll",
        openOnEnter: "openOnEnter",
        appendTo: "appendTo",
        bindValue: "bindValue",
        appearance: "appearance",
        maxSelectedItems: "maxSelectedItems",
        groupBy: "groupBy",
        groupValue: "groupValue",
        tabIndex: "tabIndex",
        typeahead: "typeahead"
      },
      outputs: {
        blurEvent: "blur",
        focusEvent: "focus",
        changeEvent: "change",
        openEvent: "open",
        closeEvent: "close",
        searchEvent: "search",
        clearEvent: "clear",
        addEvent: "add",
        removeEvent: "remove",
        scroll: "scroll",
        scrollToEnd: "scrollToEnd"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return NgSelectComponent;
        }),
        multi: true
      }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 14,
      vars: 18,
      consts: [[1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [1, "ng-placeholder"], [4, "ngIf"], [1, "ng-input"], ["role", "combobox", 3, "readOnly", "disabled", "value", "input", "compositionstart", "compositionend", "focus", "blur", "change"], ["searchInput", ""], ["class", "ng-clear-wrapper", 3, "title", 4, "ngIf"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["class", "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick", 4, "ngIf"], ["class", "ng-value", 3, "ng-value-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ng-value"], ["defaultLabelTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], ["defaultLoadingSpinnerTemplate", ""], [3, "ngTemplateOutlet"], [1, "ng-spinner-loader"], [1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], [1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick"], ["class", "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked", "click", "mouseover", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ng-option", "role", "option", 3, "ng-option-marked", "mouseover", "click", 4, "ngIf"], [1, "ng-option", 3, "click", "mouseover"], ["defaultOptionTemplate", ""], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], ["defaultTagTemplate", ""], [1, "ng-tag-label"], ["defaultNotFoundTemplate", ""], [1, "ng-option", "ng-option-disabled"], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""]],
      template: function NgSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r432 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) {
            return ctx.handleMousedown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_container_4_Template, 2, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_5_Template, 1, 5, undefined, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NgSelectComponent_Template_input_input_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r432);

            var _r382 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            return ctx.filter(_r382.value);
          })("compositionstart", function NgSelectComponent_Template_input_compositionstart_7_listener() {
            return ctx.onCompositionStart();
          })("compositionend", function NgSelectComponent_Template_input_compositionend_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r432);

            var _r382 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            return ctx.onCompositionEnd(_r382.value);
          })("focus", function NgSelectComponent_Template_input_focus_7_listener($event) {
            return ctx.onInputFocus($event);
          })("blur", function NgSelectComponent_Template_input_blur_7_listener($event) {
            return ctx.onInputBlur($event);
          })("change", function NgSelectComponent_Template_input_change_7_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgSelectComponent_ng_container_9_Template, 4, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgSelectComponent_span_10_Template, 3, 1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgSelectComponent_ng_dropdown_panel_13_Template, 7, 19, "ng-dropdown-panel", 10);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.multiLabelTemplate && ctx.selectedItems.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiLabelTemplate && ctx.selectedValues.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("disabled", ctx.disabled)("value", ctx.searchTerm ? ctx.searchTerm : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.labelForId)("tabindex", ctx.tabIndex)("aria-expanded", ctx.isOpen)("aria-owns", ctx.isOpen ? ctx.dropdownId : null)("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClear());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], NgItemLabelDirective, NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NgSelectComponent.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['class']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['autofocus']
        }]
      }, {
        type: NgSelectConfig
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [SELECTION_MODEL_FACTORY]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: ConsoleService
      }];
    };

    NgSelectComponent.propDecorators = {
      bindLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bindValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      markFirst: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      notFoundText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      typeToSearchText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      addTagText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      loadingText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      clearAllText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      appearance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dropdownPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      appendTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      loading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      closeOnSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hideSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectOnTab: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      openOnEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxSelectedItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      groupBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      groupValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bufferAmount: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      virtualScroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectableGroup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectableGroupAsModel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      searchFn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      trackByFn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      clearOnBackspace: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      labelForId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      inputAttrs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      readonly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      searchWhileComposing: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minTermLength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      editableSearchTerm: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      keyDownFn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      typeahead: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-typeahead']
      }],
      multiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-multiple']
      }],
      addTag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-taggable']
      }],
      searchable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-searchable']
      }],
      clearable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-clearable']
      }],
      isOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-opened']
      }],
      items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      clearSearchOnAdd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      blurEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['blur']
      }],
      focusEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['focus']
      }],
      changeEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['change']
      }],
      openEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['open']
      }],
      closeEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['close']
      }],
      searchEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['search']
      }],
      clearEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['clear']
      }],
      addEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['add']
      }],
      removeEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['remove']
      }],
      scroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['scroll']
      }],
      scrollToEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['scrollToEnd']
      }],
      optionTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgOptionTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }]
      }],
      optgroupTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgOptgroupTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }]
      }],
      labelTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgLabelTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }]
      }],
      multiLabelTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgMultiLabelTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }]
      }],
      headerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgHeaderTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }]
      }],
      footerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgFooterTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }]
      }],
      notFoundTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgNotFoundTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }]
      }],
      typeToSearchTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgTypeToSearchTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }]
      }],
      loadingTextTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgLoadingTextTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }]
      }],
      tagTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgTagTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }]
      }],
      loadingSpinnerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgLoadingSpinnerTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }]
      }],
      dropdownPanel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return NgDropdownPanelComponent;
        })]
      }],
      searchInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['searchInput', {
          "static": true
        }]
      }],
      ngOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NgOptionComponent, {
          descendants: true
        }]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-disabled']
      }],
      filtered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-filtered']
      }],
      handleKeyDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['keydown', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ng-select',
          template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\xD7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\">\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   role=\"combobox\"\n                   [attr.aria-expanded]=\"isOpen\"\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\xD7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return NgSelectComponent;
            }),
            multi: true
          }, NgDropdownPanelService],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            'role': 'listbox',
            '[class.ng-select]': 'useDefaultClass',
            '[class.ng-select-single]': '!multiple'
          },
          styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
        }]
      }], function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['class']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['autofocus']
          }]
        }, {
          type: NgSelectConfig
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [SELECTION_MODEL_FACTORY]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: ConsoleService
        }];
      }, {
        markFirst: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropdownPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        closeOnSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hideSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectOnTab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bufferAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectableGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectableGroupAsModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searchFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        trackByFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clearOnBackspace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        labelForId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputAttrs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searchWhileComposing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minTermLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        editableSearchTerm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        keyDownFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-multiple']
        }],
        addTag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-taggable']
        }],
        searchable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-searchable']
        }],
        clearable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-clearable']
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-opened']
        }],
        blurEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['blur']
        }],
        focusEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['focus']
        }],
        changeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['change']
        }],
        openEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['open']
        }],
        closeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['close']
        }],
        searchEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['search']
        }],
        clearEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['clear']
        }],
        addEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['add']
        }],
        removeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['remove']
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['scroll']
        }],
        scrollToEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['scrollToEnd']
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clearSearchOnAdd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-disabled']
        }],
        filtered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-filtered']
        }],
        handleKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown', ['$event']]
        }],
        bindLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        notFoundText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        typeToSearchText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        addTagText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loadingText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clearAllText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        virtualScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        openOnEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bindValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxSelectedItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        groupBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        groupValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        typeahead: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-typeahead']
        }],
        optionTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgOptionTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        optgroupTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgOptgroupTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        labelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgLabelTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        multiLabelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgMultiLabelTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgHeaderTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        footerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgFooterTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        notFoundTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgNotFoundTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        typeToSearchTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgTypeToSearchTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        loadingTextTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgLoadingTextTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        tagTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgTagTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        loadingSpinnerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgLoadingSpinnerTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        dropdownPanel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return NgDropdownPanelComponent;
          })]
        }],
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchInput', {
            "static": true
          }]
        }],
        ngOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [NgOptionComponent, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/selection-model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function DefaultSelectionModelFactory() {
      return new DefaultSelectionModel();
    }
    /**
     * @record
     */


    function SelectionModel() {}

    if (false) {}

    var DefaultSelectionModel =
    /*#__PURE__*/
    function () {
      function DefaultSelectionModel() {
        _classCallCheck(this, DefaultSelectionModel);

        this._selected = [];
      }
      /**
       * @return {?}
       */


      _createClass(DefaultSelectionModel, [{
        key: "select",

        /**
         * @param {?} item
         * @param {?} multiple
         * @param {?} groupAsModel
         * @return {?}
         */
        value: function select(item, multiple, groupAsModel) {
          item.selected = true;

          if (!item.children || !multiple && groupAsModel) {
            this._selected.push(item);
          }

          if (multiple) {
            if (item.parent) {
              /** @type {?} */
              var childrenCount = item.parent.children.length;
              /** @type {?} */

              var selectedCount = item.parent.children.filter(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x.selected;
              }).length;
              item.parent.selected = childrenCount === selectedCount;
            } else if (item.children) {
              this._setChildrenSelectedState(item.children, true);

              this._removeChildren(item);

              if (groupAsModel && this._activeChildren(item)) {
                this._selected = [].concat(_toConsumableArray(this._selected.filter(
                /**
                * @param {?} x
                * @return {?}
                */
                function (x) {
                  return x.parent !== item;
                })), [item]);
              } else {
                this._selected = [].concat(_toConsumableArray(this._selected), _toConsumableArray(item.children.filter(
                /**
                * @param {?} x
                * @return {?}
                */
                function (x) {
                  return !x.disabled;
                })));
              }
            }
          }
        }
        /**
         * @param {?} item
         * @param {?} multiple
         * @return {?}
         */

      }, {
        key: "unselect",
        value: function unselect(item, multiple) {
          this._selected = this._selected.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x !== item;
          });
          item.selected = false;

          if (multiple) {
            if (item.parent && item.parent.selected) {
              var _this$_selected;

              /** @type {?} */
              var children = item.parent.children;

              this._removeParent(item.parent);

              this._removeChildren(item.parent);

              (_this$_selected = this._selected).push.apply(_this$_selected, _toConsumableArray(children.filter(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x !== item && !x.disabled;
              })));

              item.parent.selected = false;
            } else if (item.children) {
              this._setChildrenSelectedState(item.children, false);

              this._removeChildren(item);
            }
          }
        }
        /**
         * @param {?} keepDisabled
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear(keepDisabled) {
          this._selected = keepDisabled ? this._selected.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.disabled;
          }) : [];
        }
        /**
         * @private
         * @param {?} children
         * @param {?} selected
         * @return {?}
         */

      }, {
        key: "_setChildrenSelectedState",
        value: function _setChildrenSelectedState(children, selected) {
          var _iterator7 = _createForOfIteratorHelper(children),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var child = _step7.value;

              if (child.disabled) {
                continue;
              }

              child.selected = selected;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          ;
        }
        /**
         * @private
         * @param {?} parent
         * @return {?}
         */

      }, {
        key: "_removeChildren",
        value: function _removeChildren(parent) {
          this._selected = [].concat(_toConsumableArray(this._selected.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.parent !== parent;
          })), _toConsumableArray(parent.children.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.parent === parent && x.disabled && x.selected;
          })));
        }
        /**
         * @private
         * @param {?} parent
         * @return {?}
         */

      }, {
        key: "_removeParent",
        value: function _removeParent(parent) {
          this._selected = this._selected.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x !== parent;
          });
        }
        /**
         * @private
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_activeChildren",
        value: function _activeChildren(item) {
          return item.children.every(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return !x.disabled || x.selected;
          });
        }
      }, {
        key: "value",
        get: function get() {
          return this._selected;
        }
      }]);

      return DefaultSelectionModel;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-select.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ɵ0 = DefaultSelectionModelFactory;

    var NgSelectModule = function NgSelectModule() {
      _classCallCheck(this, NgSelectModule);
    };

    NgSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgSelectModule
    });
    NgSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgSelectModule_Factory(t) {
        return new (t || NgSelectModule)();
      },
      providers: [{
        provide: SELECTION_MODEL_FACTORY,
        useValue: ɵ0
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgSelectModule, {
        declarations: function declarations() {
          return [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
        },
        exports: function exports() {
          return [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
          exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective],
          providers: [{
            provide: SELECTION_MODEL_FACTORY,
            useValue: ɵ0
          }]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-select-ng-select.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-select-ng-select.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsFacilityComponentsAddFacilitySlotAddFacilitySlotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"facility-add-slot-wrapper\">\n\t\n\n\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t<app-loader *ngIf=\"!isSlotSubmitted\"></app-loader>\n\n\t<ng-container *ngIf=\"isSlotSubmitted\">\n\t\t\n\t\t<form #addFacilitySlotForm = \"ngForm\" name=\"addStaffForm\" (ngSubmit)=\"submitAddFacilitySlotForm(addFacilitySlotForm)\"  novalidate>\n\t\t\n\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"input-box\">\n                    <label>Begin Time*</label>\n                    <input class=\"form-control\" name=\"slotBeginTime\" [owlDateTime]=\"slotBeginTime\" [owlDateTimeTrigger]=\"slotBeginTime\" placeholder=\"Time\" [(ngModel)]=\"slot.slotBeginTime\" (dateTimeInput)=\"emitSlotTime()\" required>\n\t\t\t\t\t<owl-date-time [pickerType]=\"'timer'\" #slotBeginTime></owl-date-time>\n\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"slotBeginTime\">\n\t\t\t\t\t\t\t<i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n\t\t\t\t\t</div>\n        \t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"input-box\">\n                    <label>End Time*</label>\n                    <input class=\"form-control\" name=\"slotEndTime\" [min]=\"minEndTime\" [owlDateTime]=\"slotEndTime\" [owlDateTimeTrigger]=\"slotEndTime\" placeholder=\"Time\" [(ngModel)]=\"slot.slotEndTime\" (dateTimeInput)=\"emitSlotTime()\" required>\n\t\t\t\t\t<owl-date-time [pickerType]=\"'timer'\" #slotEndTime></owl-date-time>\n\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"slotEndTime\">\n\t\t\t\t\t\t\t<i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n\t\t\t\t\t\t</div>\n        \t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"input-box\">\n                    <label>Cost (in rs)*</label>\n                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"cost\" [(ngModel)]=\"slot.cost\" required>\n        \t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\n\t\t\t\t<div class=\"input-box\">\n                    <label>Comments</label>\n                    <textarea placeholder=\"some text here\" name=\"comments\" [(ngModel)]=\"slot.comment\"></textarea>\n                </div>\n\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-12 text-right\" *ngIf = \"type !=='view'\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t<button class=\"btn blue mr-3\" [disabled]=\"addFacilitySlotForm.invalid\">Submit</button>\n\t\t\t\t<div class=\"btn trans-red\" (click)=\"showConfirmModal(slot)\">Delete</div>\n\t\t\t</div>\n\t\t\t\t\t\n\t\t</div>\n\n\t</form>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsFacilityComponentsFacilityBookingActionsFacilityBookingActionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"facilitybooking-actions-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isBookingDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card\" *ngIf=\"isBookingDataLoaded\">\n\t\t\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Bookings <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"bookingData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/facility/create-booking\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Booking</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n  \t\t\t\n\t  \t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">ID\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('apartmentFacilityBookingId')\" [ngClass]=\"getFieldOrderBy('apartmentFacilityBookingId')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Booking ID\" [(ngModel)]=\"columnField['apartmentFacilityBookingId']\" (ngModelChange)=\"selectColInput('apartmentFacilityBookingId')\" >\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Facility Name \n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('facilityName')\" [ngClass]=\"getFieldOrderBy('facilityName')\"></span>\n\t\t\t\t\t\t\t<app-simple-select-box\n\t\t\t\t\t\t\t\tfieldName = \"facilityName\" \n\t\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\t\tfieldItemName=\"facilityName\"\n\t\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"apartmentFacilityId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"facilityCategoryData\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'facilityName', 'facilityName')\">\t\t\t\t\t\n\t\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Slot\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('apartmentFacilitySlot')\" [ngClass]=\"getFieldOrderBy('apartmentFacilitySlot')\"></span>\n\t\t\t\t\t\t\t <app-simple-select-box\n\t\t\t\t\t\t\t\tfieldName = \"apartmentFacilitySlot\" \n\t\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\t\tfieldItemName=\"slotBeginTime\"\n\t\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"apartmentFacilitySlotId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"facilitySlotData\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'apartmentFacilitySlot', 'slotBeginTime')\">\t\t\t\t\n\t\t\t\t\t\t\t</app-simple-select-box> \n\t\t\t\t\t\t</th>\n<<<<<<< HEAD\n\t\t\t\t\t\t<th scope=\"col\">Status\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('facilityBookingStatusId_Label')\" [ngClass]=\"getFieldOrderBy('facilityBookingStatusId_Label')\"></span>\n\t\t\t\t\t\t\t<app-simple-select-box\n\t\t\t\t\t\t\t\tfieldName = \"facilityBookingStatusId_Label\" \n\t\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"facilityBookingStatusId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"statusTypeData\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'facilityBookingStatusId_Label', 'lookupValueName')\">\t\t\t\t\n\t\t\t\t\t\t\t</app-simple-select-box>\n=======\n\t\t\t\t\t\t<th scope=\"col\">Unit&Block\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('apartmentFacilityBookingId')\" [ngClass]=\"getFieldOrderBy('apartmentFacilityBookingId')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Booking ID\" [(ngModel)]=\"columnField['apartmentFacilityBookingId']\" (ngModelChange)=\"selectColInput('apartmentFacilityBookingId')\" >\n>>>>>>> master\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<th scope=\"col\">Event Date \n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('facilityBookedForDate')\" [ngClass]=\"getFieldOrderBy('facilityBookedForDate')\"></span>\n\t\t\t\t\t\t\t<app-simple-date-box \n\t\t\t\t\t      \t[dateModel]=\"facilityBookedForDate\"\n\t\t\t\t\t      \t(inputChange) = \"onDateChange($event, 'facilityBookedForDate')\"\n\t\t\t\t\t      \t></app-simple-date-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Created On \n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('insertedOn')\" [ngClass]=\"getFieldOrderBy('insertedOn')\"></span>\n\t\t\t\t\t\t\t<app-simple-date-box \n\t\t\t\t\t      \t[dateModel]=\"insertedOn\"\n\t\t\t\t\t      \t(inputChange) = \"onDateChange($event, 'insertedOn')\"\n\t\t\t\t\t      \t></app-simple-date-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">User Name\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"User Name\" [(ngModel)]=\"columnField['userName']\" (ngModelChange)=\"selectColInput('userName')\" >\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Cost \n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('amount')\" [ngClass]=\"getFieldOrderBy('amount')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Cost\" [(ngModel)]=\"columnField['amount']\" (ngModelChange)=\"selectColInput('amount')\" >\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Booked For\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('isBookingforGuest')\" [ngClass]=\"getFieldOrderBy('isBookingforGuest')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Booking ID\" [(ngModel)]=\"columnField['isBookingforGuest']\" (ngModelChange)=\"selectColInput('isBookingforGuest')\" >\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Status\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('facilityBookingStatus')\" [ngClass]=\"getFieldOrderBy('facilityBookingStatus')\"></span>\n\t\t\t\t\t\t\t<app-simple-select-box\n\t\t\t\t\t\t\t\tfieldName = \"facilityBookingStatus\" \n\t\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"facilityBookingStatusId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"statusTypeData\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'facilityBookingStatus', 'lookupValueName')\">\t\t\t\t\n\t\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t      Actions\n\t\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t\t  \t </th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<tbody>\n<<<<<<< HEAD\n\t\t\t\t    <tr *ngFor=\"let booking of bookingListData | simpleSearch: bookingData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\" [ngClass]=\"booking.isActive ? 'active' : 'notactive'\">\n=======\n<<<<<<< HEAD\n\t\t\t\t    <tr *ngFor=\"let booking of bookingListData | orderBy : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: bookingData | columnSearch: columnField:selectedInput ; let i = index\" [ngClass]=\"booking.isActive ? 'active' : 'notactive'\">\n\t\t\t\t\t <td class=\"name\">{{booking.apartmentFacilityBookingId}}</td>\n\t\t\t\t\t <td class=\"name\">{{getFacilityBookingName(booking, booking.apartmentFacilityId)}}</td>\n=======\n\t\t\t\t    <tr *ngFor=\"let booking of bookingListData | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: bookingData | columnSearch: columnField:selectedInput | orderBy : unitFieldType: unitOrder ; let i = index\" [ngClass]=\"booking.isActive ? 'active' : 'notactive'\">\n>>>>>>> master\n\t\t\t\t      <td class=\"name\">{{getFacilityBookingName(booking, booking.apartmentFacilityId)}}</td>\n>>>>>>> master\n\t\t\t\t      <td class=\"grey\">{{getFacilityBookingSlot(booking, booking.slotId)}}</td>\n<<<<<<< HEAD\n\t\t\t\t      <td class=\"grey\"><span class=\"badge small min text-capitalize\" [ngClass]=\"booking.facilityBookingStatusId_Label\">{{booking.facilityBookingStatusId_Label}}</span></td>\n\t\t\t\t      <td class=\"grey\">{{getBookedDate(i, booking.bookedForDate)}}</td>\n=======\n\t\t\t\t\t  <td class=\"name\">{{getUserName(booking, booking.neededUserId)}}</td> \n\t\t\t\t\t  <td class=\"grey\">{{getBookedDate(i, booking.bookedForDate)}}</td>\n\t\t\t\t\t  <td class=\"grey\">{{getBookedDate(i, booking.insertedOn)}}</td>\n>>>>>>> master\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getUserName(booking, booking.neededUserId)}}</td>\n\t\t\t\t\t  <td class=\"grey\">\n\t\t\t\t\t\t<span *ngIf=\"booking.amount>0\">{{booking.amount}}</span>\n\t\t\t\t\t\t<span *ngIf=\"booking.amount==0\">Free</span>\n\t\t\t\t\t</td>\n\t\t\t\t\t  <td class=\"name\">\n\t\t\t\t\t\t<span *ngIf=\"booking.isBookingforGuest\" style=\"color:limegreen;font-weight:bold\">G</span>\n\t\t\t\t\t\t<span *ngIf=\"!booking.isBookingforGuest\" style=\"color:brown;font-weight:bold\">U</span>  \n\t\t\t\t\t\t</td>\n\t\t\t\t\t  <td class=\"grey\"><span class=\"badge small min text-capitalize\" [ngClass]=\"getBookingStatus(booking, booking.facilityBookingStatusId)\">{{getBookingStatus(booking, booking.facilityBookingStatusId)}}</span></td>\n\t\t\t\t      <td class=\"name actions text-center\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"invoiceDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"invoiceDropDown\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tclass=\"mr-2\" \n\t\t\t\t      \tplacement=\"top\"\n\t\t\t\t      \trouterLink=\"/ams/facility/edit-booking/{{booking.apartmentFacilityBookingId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\tEdit\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(booking.apartmentFacilityBookingId)\">Delete</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" *ngIf = \"booking.facilityBookingStatus ==='pending'  && isAdminLogin\" (click)=\"showApproveConfirmModal(booking)\">Approve</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" *ngIf = \"booking.facilityBookingStatus ==='pending'  && isAdminLogin\" (click)=\"showRejectConfirmModal(booking)\">Reject</a>\n\t\t\t\t\t</div>\t\n\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\n  \t\t\t</table>\n\n  \t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-entry/facility-entry.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-entry/facility-entry.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsFacilityComponentsFacilityEntryFacilityEntryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-sm-8\">\n                <h5 *ngIf=\"isFacilityCategoryNew\">Add Facility</h5>\n                <h5 *ngIf=\"isFacilityCategoryUpdate && !isFacilityViewAlone\">Edit Facility</h5>\n                <h5 *ngIf=\"isFacilityCategoryUpdate && isFacilityViewAlone\">View Facility</h5>\n            </div>\n        <div class=\"col-sm-4\"> \n\t\t\t<button class=\"btn lime-green\" (click)=\"Goback()\" style=\"float: right;\" >\n\t\t\t\t<i class=\"fa fa-arrow-left\" aria-hidden=\"true\"> Go Back</i>\n\t\t\t</button>\n         </div>\n        </div>\n    </div>\n    \n    <div class=\"card-body\">\n        <div  class=\"card mt-20\" *ngIf=\"isFacilityCategoryNew || isFacilityCategoryUpdate\">\n            <div class=\"card-header\">\n               \n                <!-- <div class=\"float-right\" (click)=\"removeCategoryBox()\">\n                    <i-feather class=\"icon del\" name=\"x\"></i-feather>\n                </div> -->\n            </div>\n        \n            <div class=\"card-body p-0\" id=\"accordion\">\n                \n                    \n                    <ul class=\"list-group tabs clear\">\n        \n                        <li class=\"list-group-item\" [ngClass]=\"isSlotNew ? 'collapsed' : ''\" data-toggle=\"collapse\" data-target=\"#facilityCollapse\" aria-expanded=\"true\" aria-controls=\"facilityCollapseOne\">Facility Info</li>\n                        <div id=\"facilityCollapse\" class=\"collapse\" [ngClass]=\"isSlotNew ? '' : 'show'\" aria-labelledby=\"facilityCollapseOne\" data-parent=\"#accordion\">\n                            \n                            <div class=\"details\">\n                                \n                                <app-alert-message [message]=\"alertMessage\" [isError]=\"isCategoryError\" ></app-alert-message>\n        \n                                <form #facilitySettingsForm = \"ngForm\" name=\"visitorSettingsForm\" (ngSubmit)=\"submitFacilitySettingsForm(facilitySettingsForm)\"  novalidate>\n                        \n                                <div class=\"row\">\n                                    \n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\">\n                                            <label>Facility Name*</label>\n                                            <input  type=\"text\" class=\"form-control\" placeholder=\"Facility Name\" name=\"staffCategory\" [(ngModel)]=\"facility.facilityName\" required>\n                                        </div>\n                                    </div>\n                                   \n                                    <div class=\"col-sm-2\">\n                                        <div class=\"input-box radio-box\">\n                                            <label>Approval Required* </label>\n                                            <div class=\"form-group\">\n                                                <input  name=\"approvalType\" id=\"Yes\" [(ngModel)]=\"facility.isApproved\"  [value]=\"true\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"Yes\">Yes</label>\n                                             </div>\n                                            <div class=\"form-group\">\n                                                <input  name=\"approvalType\" id=\"No\" [(ngModel)]=\"facility.isApproved\" [value]=\"false\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"No\">No</label>\n                                             </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-2\">\n                                        <div class=\"input-box radio-box\">\n                                            <label>Disable Time Slot* </label>\n                                            <div class=\"form-group\">\n                                                <input  name=\"enableTimeSlotBook\" id=\"enableSlotTime\" [(ngModel)]=\"facility.isSlotBooking\"  [value]=\"true\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"enableSlotTime\">Yes</label>\n                                             </div>\n                                            <div class=\"form-group\">\n                                                <input  name=\"enableTimeSlotBook\" id=\"disableSlotTime\" [(ngModel)]=\"facility.isSlotBooking\" [value]=\"false\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"disableSlotTime\">No</label>\n                                             </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-2\">\n                                        <div class=\"input-box radio-box\">\n                                            <label>Rate Type*</label>\n                                            <div class=\"form-group\">\n                                                <input  name=\"faclityRateBaseId\" id=\"hourType\"  [(ngModel)]=\"facility.rateBaseId\"  value=\"138\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"hourType\">Hour</label>\n                                             </div>\n                                            <div class=\"form-group\">\n                                                <input  name=\"faclityRateBaseId\" id=\"dayType\" [(ngModel)]=\"facility.rateBaseId\" value=\"139\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"dayType\">Day</label>\n                                             </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-2\">\n                                        <div class=\"input-box radio-box\">\n                                            <label>Service Type*</label>\n                                            <div class=\"form-group\">\n                                                <input name=\"faclityTypeId\" id=\"paidType\" [(ngModel)]=\"facility.facilityTypeId\"  value=\"184\" type=\"radio\"required>\n                                                <label class=\"radio-inline\" for=\"paidType\">Paid</label>\n                                             </div>\n                                            <div class=\"form-group\">\n                                                <input name=\"faclityTypeId\" id=\"freeType\" [(ngModel)]=\"facility.facilityTypeId\" value=\"185\" type=\"radio\"required>\n                                                <label class=\"radio-inline\" for=\"freeType\">Free</label>\n                                             </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"select-box\">\n                                            <label>Facility Location*</label>\n                                            <select \n                                                name=\"name\" \n                                                id=\"id\" \n                                                class=\"form-control\"\n                                                [(ngModel)]=\"facility.apartmentBlockId\" required>\n                                                <option value=\"0\"  selected >Select Location</option>\n                                                <option *ngFor=\"let item of lstTowers\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                   \n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\">\n                                            <label>Booking Amount ({{PesoValue}})</label>\n                                            <input  type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Booking Amount\" name=\"amount\" [(ngModel)]=\"facility.amount\" required>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\">\n                                            <label>Security Deposit ({{PesoValue}})*</label>\n                                            <input  type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Security Amount\" name=\"deposit\" [(ngModel)]=\"facility.cautionDeposit\" required>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\">\n                                            <label>Advance Booking In Days*</label>\n                                            <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Advance Amount\" name=\"autoCancelDays\" [(ngModel)]=\"facility.advanceBookingindays\" required>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\" >\n                                            <label>Payment Due In Days*</label>\n                                            <input  type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Payment Due Days\" name=\"autoCancelDays\" [(ngModel)]=\"facility.autoCancelDays\" required>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\">\n                                            <label>Min Hours Booking*</label>\n                                            <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Min Hrs Booking\" name=\"minHoursBooking\" [(ngModel)]=\"facility.minHoursBooking\" required>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\">\n                                            <label>Facility Opens At*</label>\n                                            <input  class=\"form-control\" name=\"minTimeLimit\" [owlDateTime]=\"minTimeLimit\" [owlDateTimeTrigger]=\"minTimeLimit\" placeholder=\"Time\" [(ngModel)]=\"facility.minTimeLimit\" required>\n                                            <owl-date-time  [pickerType]=\"'timer'\" #minTimeLimit></owl-date-time>\n                                            <div class=\"date-btn\" [owlDateTimeTrigger]=\"minTimeLimit\">\n                                                  <i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n                                              </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\">\n                                            <label>Facility Closes At*</label>\n                                            <input  class=\"form-control\" name=\"maxTimeLimit\" [owlDateTime]=\"maxTimeLimit\" [owlDateTimeTrigger]=\"maxTimeLimit\" placeholder=\"Time\" [(ngModel)]=\"facility.maxTimeLimit\" required>\n                                            <owl-date-time  [pickerType]=\"'timer'\" #maxTimeLimit></owl-date-time>\n                                            <div class=\"date-btn\" [owlDateTimeTrigger]=\"maxTimeLimit\">\n                                                  <i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n                                              </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\" >\n                                            <label>Total No Of Occupancy</label>\n                                            <input  type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"No Of Occupancy\" name=\"autoCancelDays\" [(ngModel)]=\"facility.totalallowedperson\" >\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-2\">\n                                        <div class=\"input-box radio-box\">\n                                            <label>Is Booking Allow</label>\n                                            <div class=\"form-group\">\n                                                <input  name=\"faclityBookingAllowId\" id=\"EnaBookAllow\" [(ngModel)]=\"facility.isBookingAllowed\"  value=\"true\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"EnaBookAllow\">Yes</label>\n                                             </div>\n                                            <div class=\"form-group\">\n                                                <input  name=\"faclityBookingAllowId\" id=\"DisBookAllow\" [(ngModel)]=\"facility.isBookingAllowed\" value=\"false\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"DisBookAllow\">No</label>\n                                             </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-10\">\n                                        <div class=\"input-box\">\n                                            <label>Accessed By*</label>\n                                            <ng-select [items]=\"lstTowers\" \n                                            [ngModelOptions]=\"{standalone: true}\"\n                                            bindLabel=\"apartmentBlockNumber\"\n                                            bindValue=\"apartmentBlockNumber\"\n                                            [multiple]=\"true\"\n                                            placeholder=\"Select Tower/Block List\"\n                                            (change)=\"onChange($event)\"\n                                            [(ngModel)]=\"selectedTowersIds\">\n                                 </ng-select>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                    \n                                        <div class=\"input-box\">\n                                            <label>Description</label>\n                                            <quill-editor \n                                                class=\"quill-editor\"\n                                                name=\"description\"\n                                                [(ngModel)]=\"facility.description\"\n                                                [placeholder]=\"editorPlacehorder\"\n                                                (onContentChanged)=\"onContentChanged($event)\">\n                                            </quill-editor>\n                                        </div>\n        \n                                    </div>\n                                    \n                                    <div class=\"col-sm-12 text-right\" *ngIf=\"!isFacilityViewAlone\">\n                                    \n                                        <button class=\"btn blue mr-2\"  [disabled]=\"facilitySettingsForm.invalid\">Submit</button>\n        \n                                    </div>\n        \n                                </div>\n        \n            \n                            </form>\n        \n                            </div>\n        \n                        </div>\n                        \n                        <ng-container *ngIf=\"!isFacilityCategoryNew\">\n        \n                            <ng-container  *ngFor=\"let slot of getSlots(facility.apartmentFacilitySlot); let i = index\">\n                                \n                            <li class=\"list-group-item collapsed\" data-toggle=\"collapse\" attr.data-target=\"#slotCollapse{{i}}\" aria-expanded=\"true\" attr.aria-controls=\"Collapse{{i}}\">\n                               \n                                    <span class=\"float-left\">Slot{{i+1}}</span><br>\n                                    <span class=\"float-left \" >{{getSlotTime(slot.slotBeginTime)}} - {{getSlotTime(slot.slotEndTime)}}</span>    \n                            \n                            </li>\n                                <div id=\"slotCollapse{{i}}\" class=\"collapse\" attr.aria-labelledby=\"Collapse{{i}}\" data-parent=\"#accordion\">\n                                    \n                                    <div class=\"details\" >\n                                        \n                                        <app-add-facility-slot [slot]=\"slot\" [facilityId]=\"facility.apartmentFacilityId\" [type]=\"isFacilityViewAlone?'view':'edit'\" (facilityParams)=\"getFacilityParams($event)\"></app-add-facility-slot>\n        \n                                    </div>\n        \n                                </div>\n        \n                            </ng-container>\n        \n                        </ng-container>\n        \n                        <ng-container *ngIf=\"facilitySlotLength == 0\">\n                            \n                            <li class=\"list-group-item collapsed\" [ngClass]=\"facilitySlotLength == 0 ? 'no-drop' : ''\" data-toggle=\"collapse\" data-target=\"#facilityNewCollapse\" aria-expanded=\"true\" aria-controls=\"facilityCollapseNewOne\">No Slots Available</li>\n                            <div id=\"facilityNewCollapse\" class=\"collapse\" attr.aria-labelledby=\"facilityCollapseNewOne\" data-parent=\"#accordion\">\n                                \n        \n        \n                            </div>\n        \n                        </ng-container>\n        \n                        <ng-container *ngIf=\"isSlotNew\">\n                            \n                            <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#facilitySlotNew\" aria-expanded=\"true\" aria-controls=\"facilityNewSlot\">New Slot</li>\n                            <div id=\"facilitySlotNew\" class=\"collapse show\" aria-labelledby=\"facilityNewSlot\" data-parent=\"#accordion\">\n                                \n                                <div class=\"details\" >\n                                    \n                                    <app-add-facility-slot [slot]=\"facility\" [facilityId]=\"facility.apartmentFacilityId\" type=\"new\" (facilityParams)=\"getFacilityParams($event)\"></app-add-facility-slot>\n        \n                                </div>\n        \n                            </div>\n        \n                        </ng-container>\n        \n                    </ul>\n        \n        \n            </div>\n        \n        </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-main/facility-main.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-main/facility-main.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsFacilityComponentsFacilityMainFacilityMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-facility-setup *ngIf = \"Mode ==='List'\"></app-facility-setup>\n<app-facility-entry *ngIf = \"Mode ==='Entry'\"></app-facility-entry>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-reports/facility-reports.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-reports/facility-reports.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsFacilityComponentsFacilityReportsFacilityReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  facility-reports works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-setup/facility-setup.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-setup/facility-setup.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsFacilityComponentsFacilitySetupFacilitySetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\" >\n\t<div class=\"card-header\">\n\t\t<div class=\"row\">\n\t\t <div class=\"col-sm-8\">\n\t\t\t<h5>Facilities</h5>\n\t\t </div>\n\t\t <div class=\"col-sm-4\">\n\t\t\t<button class=\"btn lime-green\" (click)=\"addNewFacilityCategory()\" style=\"float: right;\" >\n\t\t\t\t<i class=\"fa fa-plus\" aria-hidden=\"true\"> Add New Facility</i>\n\t\t\t</button>\n\t\t </div>\n\t\t</div>\n\t</div>\n    <div class=\"card-body\">\n\t\t<ng-container>\n\t\t\t<div class=\"facility-settings-wrapper\">\n\n\t\t\t\t<app-loader *ngIf=\"!isFacilityCategoryLoaded\"></app-loader>\n\t\t\t\n\t\t\t\t<div class=\"category-list list-boxes big\" *ngIf=\"isFacilityCategoryLoaded\">\n\t\t\t\t\t\n\t\t\t\t\t<ng-container *ngFor=\"let item of facilityCategoryData; let i = index\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon view\" name=\"eye\" (click)=\"viewFacility(item)\"></i-feather></a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateFacilityCategory(item)\"></i-feather></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<h6>{{item.facilityName}}</h6>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"item.amount>0\">{{item.amount}}rs/- per {{getRateBase(item.rateBaseId)}}</p>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"item.amount==0\">Free</p>\n\t\t\t\t\t\t\t\t\t<div class=\"bottom\">\n\t\t\t\t\t\t\t\t\t\t<p>{{getSlots(item.apartmentFacilitySlot).length}} Slot(s)</p>\n\t\t\t\t\t\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn sf trans-white hover-green\" style=\"border: 2px solid;border-color: limegreen;\" (click)=\"addNewSlot(item)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon sm plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add Slot</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\n\t\t\t\n\t\t\t</div>\n\t\t</ng-container>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/facility.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/facility.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsFacilityFacilityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsFacilityComponentsAddFacilitySlotAddFacilitySlotComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9jb21wb25lbnRzL2FkZC1mYWNpbGl0eS1zbG90L2FkZC1mYWNpbGl0eS1zbG90LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: AddFacilitySlotComponent */

  /***/
  function srcAppAmsFacilityComponentsAddFacilitySlotAddFacilitySlotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddFacilitySlotComponent", function () {
      return AddFacilitySlotComponent;
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


    var _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/facility.service */
    "./src/app/api/services/facility.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
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

    var AddFacilitySlotComponent =
    /*#__PURE__*/
    function () {
      function AddFacilitySlotComponent(injector, dialog, facilityService, sharedService, cookieService) {
        _classCallCheck(this, AddFacilitySlotComponent);

        this.injector = injector;
        this.dialog = dialog;
        this.facilityService = facilityService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.alertMessage = "";
        this.isError = false;
        this.isSlotSubmitted = true;
        this.facilityParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
      }

      _createClass(AddFacilitySlotComponent, [{
        key: "submitAddFacilitySlotForm",
        value: function submitAddFacilitySlotForm(form) {
          var _this21 = this;

          this.isSlotSubmitted = false;

          if (this.type == 'new') {
            var details = {
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "apartmentFacilityId": this.slot.apartmentFacilityId,
              "slotBeginTime": moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotBeginTime).format('HH:mm:ss'),
              "slotEndTime": moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotEndTime).format('HH:mm:ss'),
              "cost": this.slot.cost,
              "comment": this.slot.comment,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": "2019-12-16T12:34:36.708Z",
              "updatedBy": 0,
              "updatedOn": "2019-12-16T12:34:36.709Z"
            };
            this.facilityService.addApartmentFacilitySlot(details).subscribe(function (res) {
              if (res.message) {
                _this21.facilityParams.emit(true);

                _this21.isSlotSubmitted = true;

                _this21.sharedService.setAlertMessage("Slot added successfully");
              }
            }, function (error) {
              _this21.isError = true;
              _this21.alertMessage = "Some error occured";
            });
          } else {
            var _details = {
              "apartmentFacilitySlotId": this.slot.apartmentFacilitySlotId,
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "apartmentFacilityId": this.slot.apartmentFacilityId,
              "slotBeginTime": moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotBeginTime).format('HH:mm:ss'),
              "slotEndTime": moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotEndTime).format('HH:mm:ss'),
              "cost": this.slot.cost,
              "comment": this.slot.comment,
              "isActive": true,
              "insertedBy": 0,
              "insertedOn": "2019-12-16T12:34:36.708Z",
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": "2019-12-16T12:34:36.709Z"
            };
            this.facilityService.updateApartmentFacilitySlot(_details).subscribe(function (res) {
              if (res.message) {
                _this21.facilityParams.emit(true);

                _this21.isSlotSubmitted = true;

                _this21.sharedService.setAlertMessage("Slot updated successfully");
              }
            }, function (error) {
              _this21.isError = true;
              _this21.alertMessage = "Some error occured";
            });
          }
        }
      }, {
        key: "emitSlotTime",
        value: function emitSlotTime() {
          this.minEndTime = moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotBeginTime, 'HH:mm:ss').toDate();
          var begin = moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotBeginTime);
          var end = moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotEndTime); //this.slotTimeDiff = Math.abs(begin.diff(end, 'hours'));
          //this.slot.cost = this.slotCost*this.slotTimeDiff;
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(index) {
          this.modalService.showConfirmModal(index);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          if (this.type != 'new') {
            this.slot.slotBeginTime = moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotBeginTime, 'HH:mm:ss').toDate();
            this.slot.slotEndTime = moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotEndTime, 'HH:mm:ss').toDate(); //this.slot.cost = this.slotCost;
          } else {
            this.slot.comment = "";
          } // delete slot


          this.sharedService.unitlistdeleteindexcast.subscribe(function (slot) {
            if (slot != null) {
              var params = {
                apartmentFacilityBookingId: slot.apartmentFacilitySlotId,
                deleteBy: parseInt(_this22.cookieService.get('userId'))
              };

              _this22.facilityService.deleteApartmentFacilitySlot(params).subscribe(function (res) {
                _this22.facilityParams.emit(true);

                _this22.sharedService.setUnitListDeleteIndex(null);
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }]);

      return AddFacilitySlotComponent;
    }();

    AddFacilitySlotComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddFacilitySlotComponent.prototype, "slot", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddFacilitySlotComponent.prototype, "facilityId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddFacilitySlotComponent.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddFacilitySlotComponent.prototype, "facilityParams", void 0);
    AddFacilitySlotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-facility-slot',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-facility-slot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-facility-slot.component.scss */
      "./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], AddFacilitySlotComponent);
    /***/
  },

  /***/
  "./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsFacilityComponentsFacilityBookingActionsFacilityBookingActionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9jb21wb25lbnRzL2ZhY2lsaXR5LWJvb2tpbmctYWN0aW9ucy9mYWNpbGl0eS1ib29raW5nLWFjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: FacilityBookingActionsComponent */

  /***/
  function srcAppAmsFacilityComponentsFacilityBookingActionsFacilityBookingActionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityBookingActionsComponent", function () {
      return FacilityBookingActionsComponent;
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


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_facility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/facility.service */
    "./src/app/api/services/facility.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
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

    var FacilityBookingActionsComponent =
    /*#__PURE__*/
    function () {
      function FacilityBookingActionsComponent(router, route, injector, userService, facilityService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, FacilityBookingActionsComponent);

        this.router = router;
        this.route = route;
        this.injector = injector;
        this.userService = userService;
        this.facilityService = facilityService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isAdminLogin = false;
        this.isBookingDataLoaded = false;
        this.unitFieldType = "facilityName";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.bookingData = "";
        this.staffData = "";
        this.selectedInput = "";
        this.columnField = {};
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
      }

      _createClass(FacilityBookingActionsComponent, [{
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
          if (!underscore__WEBPACK_IMPORTED_MODULE_9__["isEmpty"](event)) {
            this.selectedInput = type;
            this.columnField[type] = event[name];
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "onDateChange",
        value: function onDateChange(event, type) {
          if (event != null) {
            this.selectedInput = type;
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_10__(event).format("DD/MM/YYYY");
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
        key: "getFacilityBookingName",
        value: function getFacilityBookingName(booking, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.facilityCategoryData, function (item) {
            if (item.apartmentFacilityId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.bookingListData.map(function (obj) {
              if (obj.apartmentFacilityBookingId == booking.apartmentFacilityBookingId) {
                obj.facilityName = data[0].facilityName;
              }
            });
            return data[0].facilityName;
          }
        }
      }, {
        key: "getFacilityBookingSlot",
        value: function getFacilityBookingSlot(booking, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.facilitySlotData, function (item) {
            if (item.apartmentFacilitySlotId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            var beginTime = moment__WEBPACK_IMPORTED_MODULE_10__(data[0].slotBeginTime, 'HH:mm:ss').toDate();
            var slotBeginTime = moment__WEBPACK_IMPORTED_MODULE_10__(beginTime).format('HH:mm A');
            var EndTime = moment__WEBPACK_IMPORTED_MODULE_10__(data[0].slotEndTime, 'HH:mm:ss').toDate();
            var slotEndTime = moment__WEBPACK_IMPORTED_MODULE_10__(EndTime).format('HH:mm A');
            this.bookingListData.map(function (obj) {
              if (obj.apartmentFacilityBookingId == booking.apartmentFacilityBookingId) {
                obj.apartmentFacilitySlot = slotBeginTime;
              }
            });
            return slotBeginTime + " - " + slotEndTime;
          }
        }
      }, {
        key: "getBookedDate",
        value: function getBookedDate(itr, date) {
          underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.bookingListData, function (obj, index) {
            obj.facilityBookedForDate = moment__WEBPACK_IMPORTED_MODULE_10__(obj.bookedForDate).format("DD/MM/YYYY");
          });
          return moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD/MM/YYYY");
        }
      }, {
        key: "getUserName",
        value: function getUserName(booking, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.userListData, function (item) {
            if (item.userId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.bookingListData.map(function (obj) {
              if (obj.apartmentFacilityBookingId == booking.apartmentFacilityBookingId) {
                obj.userName = data[0].firstName;
              }
            });
            return data[0].firstName;
          }
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          this.isAdminLogin = this.cookieService.get('userRole') == 'Admin' || this.cookieService.get('userRole') == 'Staff' ? true : false;
          console.log(this.isAdminLogin);
        }
      }, {
        key: "getBookingStatus",
        value: function getBookingStatus(booking, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.statusTypeData, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.bookingListData.map(function (obj) {
              if (obj.apartmentFacilityBookingId == booking.apartmentFacilityBookingId) {
                obj.facilityBookingStatus = data[0].lookupValueName.toLowerCase();
              }
            });
            return data[0].lookupValueName.toLowerCase();
          }
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(id) {
          this.modalService.showConfirmModal(id);
        }
      }, {
        key: "showRejectConfirmModal",
        value: function showRejectConfirmModal(data) {
          this.modalService.showRejectModal(data);
        }
      }, {
        key: "showApproveConfirmModal",
        value: function showApproveConfirmModal(data) {
          this.modalService.showApproveModal(data);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.isAdmin();
          this.facilityService.getApartmentFacilitiesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this23.facilityCategoryData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {}); //status 

          this.lookupService.getLookupValueByLookupTypeId(40).subscribe(function (res) {
            _this23.statusTypeData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {});
          this.facilityService.getApartmentFacilitySlotsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this23.facilitySlotData = res.filter(function (item) {
              return item.isActive;
            });
            underscore__WEBPACK_IMPORTED_MODULE_9__["each"](_this23.facilitySlotData, function (item) {
              var beginTime = moment__WEBPACK_IMPORTED_MODULE_10__(item.slotBeginTime, 'HH:mm:ss').toDate();
              var slotBeginTime = moment__WEBPACK_IMPORTED_MODULE_10__(beginTime).format('HH:mm A');
              item.slotBeginTime = slotBeginTime;
            });
          }, function (error) {});
          this.userService.getAllUsersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this23.userListData = res.filter(function (data) {
              return data.isActive;
            });
          }, function (error) {});
          this.facilityService.getApartmentFacilityBookingsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            //filter active true items
            _this23.bookingListData = res.filter(function (data) {
              data.isBookingforGuest = false;
              return data.isActive;
            });
            console.log(_this23.bookingListData);
            _this23.totalItems = _this23.bookingListData.length;

            if (_this23.totalItems > _this23.itemLimit) {
              _this23.ItemEndIndex = _this23.itemLimit;
            } else {
              _this23.ItemEndIndex = _this23.totalItems;
            }

            _this23.isBookingDataLoaded = true;
          }, function (error) {}); // delete booking

          this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
            if (id != null) {
              var params = {
                apartmentFacilityBookingId: id,
                deleteBy: parseInt(_this23.cookieService.get('userId'))
              };

              _this23.facilityService.deleteApartmentFacilityBooking(params).subscribe(function (res) {
                underscore__WEBPACK_IMPORTED_MODULE_9__["each"](_this23.bookingListData, function (type) {
                  if (type.apartmentFacilityBookingId == id) {
                    type.isActive = false;
                  }
                });
                setTimeout(function () {
                  _this23.bookingListData = _this23.bookingListData.filter(function (type) {
                    return type.ticketId !== id;
                  });
                  _this23.totalItems = _this23.bookingListData.length;

                  _this23.sharedService.setAlertMessage("Booking deleted");

                  _this23.sharedService.setUnitListDeleteIndex(null);
                }, 500);
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }]);

      return FacilityBookingActionsComponent;
    }();

    FacilityBookingActionsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_facility_service__WEBPACK_IMPORTED_MODULE_4__["FacilityService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }];
    };

    FacilityBookingActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facility-booking-actions',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./facility-booking-actions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./facility-booking-actions.component.scss */
      "./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_facility_service__WEBPACK_IMPORTED_MODULE_4__["FacilityService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])], FacilityBookingActionsComponent);
    /***/
  },

  /***/
  "./src/app/ams/facility/components/facility-entry/facility-entry.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/facility/components/facility-entry/facility-entry.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsFacilityComponentsFacilityEntryFacilityEntryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9jb21wb25lbnRzL2ZhY2lsaXR5LWVudHJ5L2ZhY2lsaXR5LWVudHJ5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/facility/components/facility-entry/facility-entry.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/facility/components/facility-entry/facility-entry.component.ts ***!
    \************************************************************************************/

  /*! exports provided: FacilityEntryComponent */

  /***/
  function srcAppAmsFacilityComponentsFacilityEntryFacilityEntryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityEntryComponent", function () {
      return FacilityEntryComponent;
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


    var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/services */
    "./src/app/api/services.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var FacilityEntryComponent =
    /*#__PURE__*/
    function () {
      function FacilityEntryComponent(
      /*private srvFS : FacilityService, */
      cd, cookieService, apartmentService, lookupSrv, sharedService, fb) {
        _classCallCheck(this, FacilityEntryComponent);

        this.cd = cd;
        this.cookieService = cookieService;
        this.apartmentService = apartmentService;
        this.lookupSrv = lookupSrv;
        this.sharedService = sharedService;
        this.fb = fb;
        this.isFacilityCategoryNew = false;
        this.isSlotNew = false;
        this.isFacilityCategoryUpdate = false;
        this.isFacilityCategoryLoaded = false;
        this.isFacilityViewAlone = false;
        this.isCategoryError = false;
        this.alertMessage = "";
        this.selectedTowersIds = [];
        this.finalSelectedTowersId = [];
        this.lstTowers = [];
        this.tempArry = [];
      }

      _createClass(FacilityEntryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.LoadFacilityLocation();
          this.setPesoValue();
          this.cd.markForCheck();
          /*this.srvFS.Mode.subscribe(res=>{
            if (!isNullOrUndefined(res.data)) {
            this.isFacilityCategoryNew = res.data.isFacilityCategoryNew;
            this.isSlotNew = res.data.isSlotNew;
            this.facility = res.data.facility;
            this.isFacilityCategoryUpdate = res.data.isFacilityCategoryUpdate;
            this.isFacilityViewAlone = res.data.isFacilityViewAlone;
           
            if(this.isFacilityCategoryUpdate){
              this.updatefacilityData( this.facility);
            }
            }
          });*/
        }
      }, {
        key: "setPesoValue",
        value: function setPesoValue() {
          this.lookupSrv.getLookupValueByLookupTypeId(88).subscribe(function (res) {
            console.log(res);
          });
          this.PesoValue = "₹";
        }
      }, {
        key: "LoadFacilityLocation",
        value: function LoadFacilityLocation() {
          var _this24 = this;

          this.lstTowers = [];
          this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            console.log('Tower Details');
            console.log(res);
            _this24.lstTowers = res;

            _this24.cd.markForCheck();
          });
        }
      }, {
        key: "onChange",
        value: function onChange($event) {
          var res = new Array();
          $event.forEach(function (element) {
            res.push({
              "apartmentId": element.apartmentId,
              "apartmentBlockId": element.apartmentBlockId
            });
          });
          this.finalSelectedTowersId = res;
        }
      }, {
        key: "updatefacilityData",
        value: function updatefacilityData(item) {
          var _this25 = this;

          this.facility = item;
          this.facility.rateBaseId = item.rateBaseId.toString();
          this.facility.facilityTypeId = item.facilityTypeId.toString();
          this.facility.minTimeLimit = moment__WEBPACK_IMPORTED_MODULE_3__(item.minTimeLimit, 'HH:mm:ss').toDate();
          this.facility.maxTimeLimit = moment__WEBPACK_IMPORTED_MODULE_3__(item.maxTimeLimit, 'HH:mm:ss').toDate();
          this.facilitySlotLength = item.apartmentFacilitySlot.length;
          this.tempArry = [];
          this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            console.log('Tower Details');
            console.log(res);
            _this25.tempArry = res;

            _this25.cd.markForCheck();
          });
          var sampleAry = [{
            apartmentId: 2,
            apartmentBlockId: 5
          }, {
            apartmentId: 2,
            apartmentBlockId: 10
          }];
          sampleAry.forEach(function (element) {
            _this25.tempArry.forEach(function (ele) {
              if (ele.apartmentBlockId === element.apartmentBlockId) _this25.selectedTowersIds.push(ele.apartmentBlockNumber);
            });
          });
          console.log('Update');
          console.log(this.selectedTowersIds);
          console.log(this.tempArry);
          console.log(sampleAry);
          this.cd.markForCheck();
        }
      }, {
        key: "getSlots",
        value: function getSlots(items) {
          var slots = items.filter(function (item) {
            return item.isActive;
          });
          return slots;
        }
      }, {
        key: "getSlotTime",
        value: function getSlotTime(time) {
          return moment__WEBPACK_IMPORTED_MODULE_3__(time).format('HH:mm A');
        }
      }, {
        key: "onContentChanged",
        value: function onContentChanged(event) {
          this.facility.description = event.html;
        }
      }, {
        key: "submitFacilitySettingsForm",
        value: function submitFacilitySettingsForm(form) {
          this.isFacilityCategoryLoaded = false;

          if (this.isFacilityCategoryNew) {
            var details = {
              "facilityName": this.facility.facilityName,
              "isApproved": this.facility.isApproved,
              "isSlotBooking": this.facility.isSlotBooking,
              "approvalRequired": this.facility.approvalRequired,
              "rateBaseId": parseInt(this.facility.rateBaseId),
              "facilityTypeId": parseInt(this.faclityTypeId),
              "apartmentBlockId": this.facility.apartmentBlockId,
              "amount": this.facility.amount,
              "cautionDeposit": this.facility.cautionDeposit,
              "advanceBookingindays": this.facility.advanceBookingindays,
              "autoCancelDays": this.facility.autoCancelDays,
              "minHoursBooking": this.facility.minHoursBooking,
              "minTimeLimit": moment__WEBPACK_IMPORTED_MODULE_3__(this.facility.minTimeLimit).format('HH:mm:ss'),
              "maxTimeLimit": moment__WEBPACK_IMPORTED_MODULE_3__(this.facility.maxTimeLimit).format('HH:mm:ss'),
              "totalallowedperson": this.facility.totalallowedperson,
              "isBookingAllowed": this.facility.isBookingAllowed,
              "description": this.facility.description,
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "fileAttachmentId": null,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": moment__WEBPACK_IMPORTED_MODULE_3__().format(),
              "updatedBy": 0,
              "updatedOn": moment__WEBPACK_IMPORTED_MODULE_3__().format(),
              "apartmentFacilitySlot": null,
              "ApartmentFacilityAllowedBlock": this.finalSelectedTowersId
            };
            /* this.srvFS.addApartmentFacility(details).subscribe((res:any) => {
                     if(res.message){
                       this.isFacilityCategoryLoaded = true;
                this.sharedService.setAlertMessage("Facility added successfully");
              }
              else {
                       this.isFacilityCategoryLoaded = true;
                this.isCategoryError = true;
                this.alertMessage = res.errorMessage;
                     }
                   },
            error => {
                this.isFacilityCategoryLoaded = true;
                this.isCategoryError = true;
                this.alertMessage = "Some error occured";
            }
            ); */
          } else {
            var _details2 = {
              "facilityName": this.facility.facilityName,
              "isApproved": this.facility.isApproved,
              "isSlotBooking": this.facility.isSlotBooking,
              "approvalRequired": this.facility.approvalRequired,
              "rateBaseId": parseInt(this.facility.rateBaseId),
              "facilityTypeId": parseInt(this.faclityTypeId),
              "apartmentBlockId": this.facility.apartmentBlockId,
              "amount": this.facility.amount,
              "cautionDeposit": this.facility.cautionDeposit,
              "advanceBookingindays": this.facility.advanceBookingindays,
              "autoCancelDays": this.facility.autoCancelDays,
              "minHoursBooking": this.facility.minHoursBooking,
              "minTimeLimit": moment__WEBPACK_IMPORTED_MODULE_3__(this.facility.minTimeLimit).format('HH:mm:ss'),
              "maxTimeLimit": moment__WEBPACK_IMPORTED_MODULE_3__(this.facility.maxTimeLimit).format('HH:mm:ss'),
              "totalallowedperson": this.facility.totalallowedperson,
              "isBookingAllowed": this.facility.isBookingAllowed,
              "description": this.facility.description,
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "fileAttachmentId": null,
              "isActive": true,
              "insertedBy": this.facility.insertedBy,
              "insertedOn": this.facility.insertedOn,
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": moment__WEBPACK_IMPORTED_MODULE_3__().format(),
              "apartmentFacilitySlot": null,
              "ApartmentFacilityAllowedBlock": this.finalSelectedTowersId
            };
            /* this.srvFS.updateApartmentFacility(details).subscribe((res:any) => {
                   if(res.message){
                     this.isFacilityCategoryLoaded = true;
                     this.isFacilityCategoryLoaded = false;
                this.srvFS.getApartmentFacilitiesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res:any) => {
                            this.facilityCategoryData = res.filter(item => {
                    return item.isActive;
                  })
                       this.isFacilityCategoryLoaded = true;
                  this.sharedService.setAlertMessage("Facility updated successfully");
                       console.log(res);
                     },
                error => {
                     }
                );
                     
              }
              else {
                     this.isFacilityCategoryLoaded = true;
                this.isCategoryError = true;
                this.alertMessage = res.errorMessage;
                   }
                 },
            error => {
                this.isFacilityCategoryLoaded = true;
                this.isCategoryError = true;
                this.alertMessage = "Some error occured";
            }
            ); */
          }
        }
      }, {
        key: "getFacilityParams",
        value: function getFacilityParams(event) {
          this.isFacilityCategoryLoaded = false;
          /* this.srvFS.getApartmentFacilitiesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res:any) => {
           
            this.facilityCategoryData = res.filter(item => {
              return item.isActive;
            })
                 this.isFacilityCategoryLoaded = true;
           
           
          },
          error => {
               }); */
        }
      }, {
        key: "Goback",
        value: function Goback() {//this.srvFS.Mode.next({ mode: 'List',data:null });
        }
      }]);

      return FacilityEntryComponent;
    }();

    FacilityEntryComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }, {
        type: src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }, {
        type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };

    FacilityEntryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facility-entry',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./facility-entry.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-entry/facility-entry.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./facility-entry.component.scss */
      "./src/app/ams/facility/components/facility-entry/facility-entry.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], FacilityEntryComponent);
    /***/
  },

  /***/
  "./src/app/ams/facility/components/facility-main/facility-main.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/facility/components/facility-main/facility-main.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsFacilityComponentsFacilityMainFacilityMainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9jb21wb25lbnRzL2ZhY2lsaXR5LW1haW4vZmFjaWxpdHktbWFpbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/facility/components/facility-main/facility-main.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/ams/facility/components/facility-main/facility-main.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: FacilityMainComponent */

  /***/
  function srcAppAmsFacilityComponentsFacilityMainFacilityMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityMainComponent", function () {
      return FacilityMainComponent;
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


    var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/services */
    "./src/app/api/services.ts");

    var FacilityMainComponent =
    /*#__PURE__*/
    function () {
      function FacilityMainComponent(srvFS, cd) {
        _classCallCheck(this, FacilityMainComponent);

        this.srvFS = srvFS;
        this.cd = cd;
        this.__subscription = {};
      }

      _createClass(FacilityMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          /* this.srvFS.Mode.pipe(untilDestroyed(this)).subscribe(data => {
              if (!isNullOrUndefined(data)) {
                  this.Mode = data.mode;
                  this.cd.markForCheck();
              }
          }); */
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {//this.srvFS.Mode.next({ mode: 'List',data:null });
        }
      }]);

      return FacilityMainComponent;
    }();

    FacilityMainComponent.ctorParameters = function () {
      return [{
        type: src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["FacilityService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    FacilityMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facility-main',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./facility-main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-main/facility-main.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./facility-main.component.scss */
      "./src/app/ams/facility/components/facility-main/facility-main.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["FacilityService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], FacilityMainComponent);
    /***/
  },

  /***/
  "./src/app/ams/facility/components/facility-reports/facility-reports.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/ams/facility/components/facility-reports/facility-reports.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsFacilityComponentsFacilityReportsFacilityReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9jb21wb25lbnRzL2ZhY2lsaXR5LXJlcG9ydHMvZmFjaWxpdHktcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/facility/components/facility-reports/facility-reports.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/facility/components/facility-reports/facility-reports.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: FacilityReportsComponent */

  /***/
  function srcAppAmsFacilityComponentsFacilityReportsFacilityReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityReportsComponent", function () {
      return FacilityReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FacilityReportsComponent =
    /*#__PURE__*/
    function () {
      function FacilityReportsComponent() {
        _classCallCheck(this, FacilityReportsComponent);
      }

      _createClass(FacilityReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FacilityReportsComponent;
    }();

    FacilityReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facility-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./facility-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-reports/facility-reports.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./facility-reports.component.scss */
      "./src/app/ams/facility/components/facility-reports/facility-reports.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FacilityReportsComponent);
    /***/
  },

  /***/
  "./src/app/ams/facility/components/facility-setup/facility-setup.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/facility/components/facility-setup/facility-setup.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsFacilityComponentsFacilitySetupFacilitySetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9jb21wb25lbnRzL2ZhY2lsaXR5LXNldHVwL2ZhY2lsaXR5LXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/facility/components/facility-setup/facility-setup.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/facility/components/facility-setup/facility-setup.component.ts ***!
    \************************************************************************************/

  /*! exports provided: FacilitySetupComponent */

  /***/
  function srcAppAmsFacilityComponentsFacilitySetupFacilitySetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySetupComponent", function () {
      return FacilitySetupComponent;
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


    var _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/facility.service */
    "./src/app/api/services/facility.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var FacilitySetupComponent =
    /*#__PURE__*/
    function () {
      function FacilitySetupComponent(injector, dialog, facilityService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, FacilitySetupComponent);

        this.injector = injector;
        this.dialog = dialog;
        this.facilityService = facilityService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isFacilityCategoryLoaded = false;
        this.isEditFacilityCategory = false;
        this.isFacilityCategoryNew = false;
        this.isFacilityCategoryUpdate = false;
        this.isSlotNew = false;
        this.isCategoryError = false;
        this.alertMessage = "";
        this.facilityAmount = "";
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
      }

      _createClass(FacilitySetupComponent, [{
        key: "addNewFacilityCategory",
        value: function addNewFacilityCategory() {
          // this.isFacilityCategoryNew = true;
          // this.isSlotNew = false;
          // this.facility = {};
          var item = {
            isFacilityCategoryNew: true,
            isSlotNew: false,
            isFacilityCategoryUpdate: false,
            isFacilityViewAlone: false,
            facility: {}
          }; //this.facilityService.Mode.next({ mode: 'Entry',data:item });
        }
      }, {
        key: "addNewSlot",
        value: function addNewSlot(item) {
          // this.isFacilityCategoryUpdate = true;
          // this.isFacilityCategoryNew = false;
          // this.isSlotNew = true;
          // this.updatefacilityData(item);
          var itemData = {
            isFacilityCategoryNew: true,
            isSlotNew: true,
            facility: item,
            isFacilityCategoryUpdate: false,
            isFacilityViewAlone: false
          }; //this.facilityService.Mode.next({ mode: 'Entry',data:itemData });
        }
      }, {
        key: "viewFacility",
        value: function viewFacility(item) {
          var itemData = {
            isFacilityCategoryNew: false,
            isSlotNew: false,
            facility: item,
            isFacilityViewAlone: true,
            isFacilityCategoryUpdate: true
          }; //this.facilityService.Mode.next({ mode: 'Entry',data:itemData });
        }
      }, {
        key: "updateFacilityCategory",
        value: function updateFacilityCategory(item) {
          // this.isFacilityCategoryUpdate = true;
          // this.isFacilityCategoryNew = false;
          // this.isSlotNew = false;
          var itemData = {
            isFacilityCategoryNew: false,
            isSlotNew: false,
            facility: item,
            isFacilityViewAlone: false,
            isFacilityCategoryUpdate: true
          }; //this.facilityService.Mode.next({ mode: 'Entry',data:itemData });
        }
      }, {
        key: "removeCategoryBox",
        value: function removeCategoryBox() {
          this.isFacilityCategoryNew = false;
          this.isFacilityCategoryUpdate = false;
          this.isCategoryError = false;
        }
      }, {
        key: "getRateBase",
        value: function getRateBase(id) {
          if (id == 138) {
            return 'Hour';
          } else {
            return 'Day';
          }
        }
      }, {
        key: "getSlots",
        value: function getSlots(items) {
          var slots = items.filter(function (item) {
            return item.isActive;
          });
          return slots;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.removeCategoryBox();
          this.facility = {};
          this.facility.description = "";
          this.facility.rateBaseId = "";
          this.facility.facilityTypeId = "";
          this.facilityService.getApartmentFacilitiesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this26.facilityCategoryData = res.filter(function (item) {
              return item.isActive;
            });
            _this26.isFacilityCategoryLoaded = true;
          }, function (error) {});
        }
      }]);

      return FacilitySetupComponent;
    }();

    FacilitySetupComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    FacilitySetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facility-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./facility-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-setup/facility-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./facility-setup.component.scss */
      "./src/app/ams/facility/components/facility-setup/facility-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], FacilitySetupComponent);
    /***/
  },

  /***/
  "./src/app/ams/facility/facility-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ams/facility/facility-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: FacilityRoutingModule */

  /***/
  function srcAppAmsFacilityFacilityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityRoutingModule", function () {
      return FacilityRoutingModule;
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


    var _components_facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/facility-reports/facility-reports.component */
    "./src/app/ams/facility/components/facility-reports/facility-reports.component.ts");
    /* harmony import */


    var _shared_components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/components/facility-create-booking/facility-create-booking.component */
    "./src/app/shared/components/facility-create-booking/facility-create-booking.component.ts");
    /* harmony import */


    var _components_facility_booking_actions_facility_booking_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/facility-booking-actions/facility-booking-actions.component */
    "./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.ts");
    /* harmony import */


    var _shared_components_full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/components/full-calendar/full-calendar.component */
    "./src/app/shared/components/full-calendar/full-calendar.component.ts");
    /* harmony import */


    var _components_facility_main_facility_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/facility-main/facility-main.component */
    "./src/app/ams/facility/components/facility-main/facility-main.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'settings',
      pathMatch: 'full'
    }, {
      path: 'settings',
      component: _components_facility_main_facility_main_component__WEBPACK_IMPORTED_MODULE_7__["FacilityMainComponent"]
    }, {
      path: 'create-booking',
      component: _shared_components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_4__["FacilityCreateBookingComponent"]
    }, {
      path: 'edit-booking/:id',
      component: _shared_components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_4__["FacilityCreateBookingComponent"]
    }, {
      path: 'calendar',
      component: _shared_components_full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_6__["FullCalendarComponent"]
    }, {
      path: 'all-bookings',
      component: _components_facility_booking_actions_facility_booking_actions_component__WEBPACK_IMPORTED_MODULE_5__["FacilityBookingActionsComponent"]
    }, {
      path: 'reports',
      component: _components_facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_3__["FacilityReportsComponent"]
    }, {
      path: '**',
      redirectTo: 'settings',
      pathMatch: 'full'
    }];

    var FacilityRoutingModule = function FacilityRoutingModule() {
      _classCallCheck(this, FacilityRoutingModule);
    };

    FacilityRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FacilityRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/facility/facility.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/ams/facility/facility.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsFacilityFacilityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9mYWNpbGl0eS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/facility/facility.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/ams/facility/facility.component.ts ***!
    \****************************************************/

  /*! exports provided: FacilityComponent */

  /***/
  function srcAppAmsFacilityFacilityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityComponent", function () {
      return FacilityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FacilityComponent =
    /*#__PURE__*/
    function () {
      function FacilityComponent() {
        _classCallCheck(this, FacilityComponent);
      }

      _createClass(FacilityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FacilityComponent;
    }();

    FacilityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facility',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./facility.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/facility.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./facility.component.scss */
      "./src/app/ams/facility/facility.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FacilityComponent);
    /***/
  },

  /***/
  "./src/app/ams/facility/facility.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/ams/facility/facility.module.ts ***!
    \*************************************************/

  /*! exports provided: FacilityModule */

  /***/
  function srcAppAmsFacilityFacilityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityModule", function () {
      return FacilityModule;
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


    var _facility_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./facility-routing.module */
    "./src/app/ams/facility/facility-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _facility_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./facility.component */
    "./src/app/ams/facility/facility.component.ts");
    /* harmony import */


    var _components_add_facility_slot_add_facility_slot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/add-facility-slot/add-facility-slot.component */
    "./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.ts");
    /* harmony import */


    var _components_facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/facility-reports/facility-reports.component */
    "./src/app/ams/facility/components/facility-reports/facility-reports.component.ts");
    /* harmony import */


    var _components_facility_setup_facility_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/facility-setup/facility-setup.component */
    "./src/app/ams/facility/components/facility-setup/facility-setup.component.ts");
    /* harmony import */


    var _components_facility_booking_actions_facility_booking_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/facility-booking-actions/facility-booking-actions.component */
    "./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.ts");
    /* harmony import */


    var _components_facility_main_facility_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/facility-main/facility-main.component */
    "./src/app/ams/facility/components/facility-main/facility-main.component.ts");
    /* harmony import */


    var _components_facility_entry_facility_entry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/facility-entry/facility-entry.component */
    "./src/app/ams/facility/components/facility-entry/facility-entry.component.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_facility_reject_action_facility_reject_action_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/facility-reject-action/facility-reject-action.component */
    "./src/app/ams/facility/components/facility-reject-action/facility-reject-action.component.ts");
    /* harmony import */


    var _components_facility_reject_confirmation_modal_facility_reject_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/facility-reject-confirmation-modal/facility-reject-confirmation-modal.component */
    "./src/app/ams/facility/components/facility-reject-confirmation-modal/facility-reject-confirmation-modal.component.ts");
    /* harmony import */


    var _components_facility_approve_confirmation_modal_facility_approve_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/facility-approve-confirmation-modal/facility-approve-confirmation-modal.component */
    "./src/app/ams/facility/components/facility-approve-confirmation-modal/facility-approve-confirmation-modal.component.ts"); //import {TableModule} from 'primeng/table';


    var FacilityModule = function FacilityModule() {
      _classCallCheck(this, FacilityModule);
    };

    FacilityModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_7__["FacilityReportsComponent"], _components_facility_setup_facility_setup_component__WEBPACK_IMPORTED_MODULE_8__["FacilitySetupComponent"], _facility_component__WEBPACK_IMPORTED_MODULE_5__["FacilityComponent"], _components_facility_booking_actions_facility_booking_actions_component__WEBPACK_IMPORTED_MODULE_9__["FacilityBookingActionsComponent"], _components_add_facility_slot_add_facility_slot_component__WEBPACK_IMPORTED_MODULE_6__["AddFacilitySlotComponent"], _components_facility_main_facility_main_component__WEBPACK_IMPORTED_MODULE_10__["FacilityMainComponent"], _components_facility_entry_facility_entry_component__WEBPACK_IMPORTED_MODULE_11__["FacilityEntryComponent"], _components_facility_reject_action_facility_reject_action_component__WEBPACK_IMPORTED_MODULE_14__["FacilityRejectActionComponent"], _components_facility_reject_confirmation_modal_facility_reject_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_15__["FacilityRejectConfirmationModalComponent"], _components_facility_approve_confirmation_modal_facility_approve_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_16__["FacilityApproveConfirmationModalComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _facility_routing_module__WEBPACK_IMPORTED_MODULE_3__["FacilityRoutingModule"]],
      bootstrap: [_facility_component__WEBPACK_IMPORTED_MODULE_5__["FacilityComponent"]]
    })], FacilityModule);
    /***/
  }
}]);
//# sourceMappingURL=facility-facility-module-es5.js.map