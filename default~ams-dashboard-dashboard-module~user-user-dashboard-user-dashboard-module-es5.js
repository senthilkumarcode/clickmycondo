function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ams-dashboard-dashboard-module~user-user-dashboard-user-dashboard-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js ***!
    \**********************************************************************/

  /*! exports provided: CDK_DRAG_CONFIG, CDK_DRAG_CONFIG_FACTORY, CDK_DROP_LIST, CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup, DragDrop, DragDropModule, DragDropRegistry, DragRef, DropListRef, copyArrayItem, moveItemInArray, transferArrayItem, ɵangular_material_src_cdk_drag_drop_drag_drop_b */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015DragDropJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function () {
      return CDK_DRAG_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function () {
      return CDK_DRAG_CONFIG_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function () {
      return CDK_DROP_LIST;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDrag", function () {
      return CdkDrag;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function () {
      return CdkDragHandle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function () {
      return CdkDragPlaceholder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function () {
      return CdkDragPreview;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDropList", function () {
      return CdkDropList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function () {
      return CdkDropListGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDrop", function () {
      return DragDrop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropModule", function () {
      return DragDropModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function () {
      return DragDropRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragRef", function () {
      return DragRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropListRef", function () {
      return DropListRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "copyArrayItem", function () {
      return copyArrayItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "moveItemInArray", function () {
      return moveItemInArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transferArrayItem", function () {
      return transferArrayItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_drag_drop_drag_drop_b", function () {
      return CDK_DRAG_PARENT;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-styling.ts
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
     * Extended CSSStyleDeclaration that includes a couple of drag-related
     * properties that aren't in the built-in TS typings.
     * @record
     */


    function DragCSSStyleDeclaration() {}

    if (false) {}
    /**
     * Shallow-extends a stylesheet object with another stylesheet object.
     * \@docs-private
     * @param {?} dest
     * @param {?} source
     * @return {?}
     */


    function extendStyles(dest, source) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          dest[key] =
          /** @type {?} */
          source[key];
        }
      }

      return dest;
    }
    /**
     * Toggles whether the native drag interactions should be enabled for an element.
     * \@docs-private
     * @param {?} element Element on which to toggle the drag interactions.
     * @param {?} enable Whether the drag interactions should be enabled.
     * @return {?}
     */


    function toggleNativeDragInteractions(element, enable) {
      /** @type {?} */
      var userSelect = enable ? '' : 'none';
      extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
      });
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/transition-duration.ts
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
     * Parses a CSS time value to milliseconds.
     * @param {?} value
     * @return {?}
     */


    function parseCssTimeUnitsToMs(value) {
      // Some browsers will return it in seconds, whereas others will return milliseconds.

      /** @type {?} */
      var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
      return parseFloat(value) * multiplier;
    }
    /**
     * Gets the transform transition duration, including the delay, of an element in milliseconds.
     * @param {?} element
     * @return {?}
     */


    function getTransformTransitionDurationInMs(element) {
      /** @type {?} */
      var computedStyle = getComputedStyle(element);
      /** @type {?} */

      var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
      /** @type {?} */

      var property = transitionedProperties.find(
      /**
      * @param {?} prop
      * @return {?}
      */
      function (prop) {
        return prop === 'transform' || prop === 'all';
      }); // If there's no transition for `all` or `transform`, we shouldn't do anything.

      if (!property) {
        return 0;
      } // Get the index of the property that we're interested in and match
      // it up to the same index in `transition-delay` and `transition-duration`.

      /** @type {?} */


      var propertyIndex = transitionedProperties.indexOf(property);
      /** @type {?} */

      var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
      /** @type {?} */

      var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
      return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
    }
    /**
     * Parses out multiple values from a computed style into an array.
     * @param {?} computedStyle
     * @param {?} name
     * @return {?}
     */


    function parseCssPropertyValue(computedStyle, name) {
      /** @type {?} */
      var value = computedStyle.getPropertyValue(name);
      return value.split(',').map(
      /**
      * @param {?} part
      * @return {?}
      */
      function (part) {
        return part.trim();
      });
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-ref.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Object that can be used to configure the behavior of DragRef.
     * @record
     */


    function DragRefConfig() {}

    if (false) {}
    /**
     * Options that can be used to bind a passive event listener.
     * @type {?}
     */


    var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * Options that can be used to bind an active event listener.
     * @type {?}
     */

    var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
      passive: false
    });
    /**
     * Time in milliseconds for which to ignore mouse events, after
     * receiving a touch event. Used to avoid doing double work for
     * touch devices where the browser fires fake mouse events, in
     * addition to touch events.
     * @type {?}
     */

    var MOUSE_EVENT_IGNORE_TIME = 800;
    /**
     * Internal compile-time-only representation of a `DragRef`.
     * Used to avoid circular import issues between the `DragRef` and the `DropListRef`.
     * \@docs-private
     * @record
     */

    function DragRefInternal() {}
    /**
     * Template that can be used to create a drag helper element (e.g. a preview or a placeholder).
     * @record
     * @template T
     */


    function DragHelperTemplate() {}

    if (false) {}
    /**
     * Template that can be used to create a drag preview element.
     * @record
     * @template T
     */


    function DragPreviewTemplate() {}

    if (false) {}
    /**
     * Point on the page or within an element.
     * @record
     */


    function Point() {}

    if (false) {}
    /**
     * Reference to a draggable item. Used to manipulate or dispose of the item.
     * @template T
     */


    var DragRef =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?} _config
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       * @param {?} _dragDropRegistry
       */
      function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this = this;

        _classCallCheck(this, DragRef);

        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */

        this._passiveTransform = {
          x: 0,
          y: 0
        };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */

        this._activeTransform = {
          x: 0,
          y: 0
        };
        /**
         * Emits when the item is being moved.
         */

        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Subscription to pointer movement events.
         */

        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */

        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being scrolled.
         */

        this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being resized.
         */

        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */

        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */

        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */

        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */

        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */

        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */

        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */

        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */

        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */

        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */

        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */

        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */

        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */

        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */

        this.moved = this._moveEvents.asObservable();
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */

        this._pointerDown =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          _this.beforeStarted.next(); // Delegate the event based on whether it started from a handle or the element itself.


          if (_this._handles.length) {
            /** @type {?} */
            var targetHandle = _this._handles.find(
            /**
            * @param {?} handle
            * @return {?}
            */
            function (handle) {
              /** @type {?} */
              var target = event.target;
              return !!target && (target === handle || handle.contains(
              /** @type {?} */
              target));
            });

            if (targetHandle && !_this._disabledHandles.has(targetHandle) && !_this.disabled) {
              _this._initializeDragSequence(targetHandle, event);
            }
          } else if (!_this.disabled) {
            _this._initializeDragSequence(_this._rootElement, event);
          }
        };
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */


        this._pointerMove =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // Prevent the default action as early as possible in order to block
          // native actions like dragging the selected text or images with the mouse.
          event.preventDefault();

          if (!_this._hasStartedDragging) {
            /** @type {?} */
            var pointerPosition = _this._getPointerPositionOnPage(event);
            /** @type {?} */


            var distanceX = Math.abs(pointerPosition.x - _this._pickupPositionOnPage.x);
            /** @type {?} */

            var distanceY = Math.abs(pointerPosition.y - _this._pickupPositionOnPage.y);
            /** @type {?} */

            var isOverThreshold = distanceX + distanceY >= _this._config.dragStartThreshold; // Only start dragging after the user has moved more than the minimum distance in either
            // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
            // in the `pointerMove` subscription, because we're not guaranteed to have one move event
            // per pixel of movement (e.g. if the user moves their pointer quickly).

            if (isOverThreshold) {
              /** @type {?} */
              var isDelayElapsed = Date.now() >= _this._dragStartTime + _this._getDragStartDelay(event);

              if (!isDelayElapsed) {
                _this._endDragSequence(event);

                return;
              } // Prevent other drag sequences from starting while something in the container is still
              // being dragged. This can happen while we're waiting for the drop animation to finish
              // and can cause errors, because some elements might still be moving around.


              if (!_this._dropContainer || !_this._dropContainer.isDragging()) {
                _this._hasStartedDragging = true;

                _this._ngZone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this._startDragSequence(event);
                });
              }
            }

            return;
          } // We only need the preview dimensions if we have a boundary element.


          if (_this._boundaryElement) {
            // Cache the preview element rect if we haven't cached it already or if
            // we cached it too early before the element dimensions were computed.
            if (!_this._previewRect || !_this._previewRect.width && !_this._previewRect.height) {
              _this._previewRect = (_this._preview || _this._rootElement).getBoundingClientRect();
            }
          }
          /** @type {?} */


          var constrainedPointerPosition = _this._getConstrainedPointerPosition(event);

          _this._hasMoved = true;

          _this._updatePointerDirectionDelta(constrainedPointerPosition);

          if (_this._dropContainer) {
            _this._updateActiveDropContainer(constrainedPointerPosition);
          } else {
            /** @type {?} */
            var activeTransform = _this._activeTransform;
            activeTransform.x = constrainedPointerPosition.x - _this._pickupPositionOnPage.x + _this._passiveTransform.x;
            activeTransform.y = constrainedPointerPosition.y - _this._pickupPositionOnPage.y + _this._passiveTransform.y;

            _this._applyRootElementTransform(activeTransform.x, activeTransform.y); // Apply transform as attribute if dragging and svg element to work for IE


            if (typeof SVGElement !== 'undefined' && _this._rootElement instanceof SVGElement) {
              /** @type {?} */
              var appliedTransform = "translate(".concat(activeTransform.x, " ").concat(activeTransform.y, ")");

              _this._rootElement.setAttribute('transform', appliedTransform);
            }
          } // Since this event gets fired for every pixel while dragging, we only
          // want to fire it if the consumer opted into it. Also we have to
          // re-enter the zone because we run all of the events on the outside.


          if (_this._moveEvents.observers.length) {
            _this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this._moveEvents.next({
                source: _this,
                pointerPosition: constrainedPointerPosition,
                event: event,
                distance: _this._getDragDistance(constrainedPointerPosition),
                delta: _this._pointerDirectionDelta
              });
            });
          }
        };
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */


        this._pointerUp =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          _this._endDragSequence(event);
        };

        this.withRootElement(element);

        _dragDropRegistry.registerDragItem(this);
      }
      /**
       * Whether starting to drag this element is disabled.
       * @return {?}
       */


      _createClass(DragRef, [{
        key: "getPlaceholderElement",

        /**
         * Returns the element that is being used as a placeholder
         * while the current element is being dragged.
         * @return {?}
         */
        value: function getPlaceholderElement() {
          return this._placeholder;
        }
        /**
         * Returns the root draggable element.
         * @return {?}
         */

      }, {
        key: "getRootElement",
        value: function getRootElement() {
          return this._rootElement;
        }
        /**
         * Gets the currently-visible element that represents the drag item.
         * While dragging this is the placeholder, otherwise it's the root element.
         * @return {?}
         */

      }, {
        key: "getVisibleElement",
        value: function getVisibleElement() {
          return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
        }
        /**
         * Registers the handles that can be used to drag the element.
         * @template THIS
         * @this {THIS}
         * @param {?} handles
         * @return {THIS}
         */

      }, {
        key: "withHandles",
        value: function withHandles(handles) {
          /** @type {?} */
          this._handles = handles.map(
          /**
          * @param {?} handle
          * @return {?}
          */
          function (handle) {
            return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(handle);
          });

          /** @type {?} */
          this._handles.forEach(
          /**
          * @param {?} handle
          * @return {?}
          */
          function (handle) {
            return toggleNativeDragInteractions(handle, false);
          });

          /** @type {?} */
          this._toggleNativeDragInteractions();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Registers the template that should be used for the drag preview.
         * @template THIS
         * @this {THIS}
         * @param {?} template Template that from which to stamp out the preview.
         * @return {THIS}
         */

      }, {
        key: "withPreviewTemplate",
        value: function withPreviewTemplate(template) {
          /** @type {?} */
          this._previewTemplate = template;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Registers the template that should be used for the drag placeholder.
         * @template THIS
         * @this {THIS}
         * @param {?} template Template that from which to stamp out the placeholder.
         * @return {THIS}
         */

      }, {
        key: "withPlaceholderTemplate",
        value: function withPlaceholderTemplate(template) {
          /** @type {?} */
          this._placeholderTemplate = template;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets an alternate drag root element. The root element is the element that will be moved as
         * the user is dragging. Passing an alternate root element is useful when trying to enable
         * dragging on an element that you might not have access to.
         * @template THIS
         * @this {THIS}
         * @param {?} rootElement
         * @return {THIS}
         */

      }, {
        key: "withRootElement",
        value: function withRootElement(rootElement) {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(rootElement);

          if (element !==
          /** @type {?} */
          this._rootElement) {
            if (
            /** @type {?} */
            this._rootElement) {
              /** @type {?} */
              this._removeRootElementListeners(
              /** @type {?} */
              this._rootElement);
            }

            element.addEventListener('mousedown',
            /** @type {?} */
            this._pointerDown, activeEventListenerOptions);
            element.addEventListener('touchstart',
            /** @type {?} */
            this._pointerDown, passiveEventListenerOptions);

            /** @type {?} */
            this._initialTransform = undefined;

            /** @type {?} */
            this._rootElement = element;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Element to which the draggable's position will be constrained.
         * @template THIS
         * @this {THIS}
         * @param {?} boundaryElement
         * @return {THIS}
         */

      }, {
        key: "withBoundaryElement",
        value: function withBoundaryElement(boundaryElement) {
          var _this2 = this;

          /** @type {?} */
          this._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundaryElement) : null;

          /** @type {?} */
          this._resizeSubscription.unsubscribe();

          if (boundaryElement) {
            /** @type {?} */
            this._resizeSubscription =
            /** @type {?} */
            this._viewportRuler.change(10).subscribe(
            /**
            * @return {?}
            */
            function () {
              return (
                /** @type {?} */
                _this2._containInsideBoundaryOnResize()
              );
            });
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Removes the dragging functionality from the DOM element.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          this._removeRootElementListeners(this._rootElement); // Do this check before removing from the registry since it'll
          // stop being considered as dragged once it is removed.


          if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeNode(this._rootElement);
          }

          removeNode(this._anchor);

          this._destroyPreview();

          this._destroyPlaceholder();

          this._dragDropRegistry.removeDragItem(this);

          this._removeSubscriptions();

          this.beforeStarted.complete();
          this.started.complete();
          this.released.complete();
          this.ended.complete();
          this.entered.complete();
          this.exited.complete();
          this.dropped.complete();

          this._moveEvents.complete();

          this._handles = [];

          this._disabledHandles.clear();

          this._dropContainer = undefined;

          this._resizeSubscription.unsubscribe();

          this._boundaryElement = this._rootElement = this._placeholderTemplate = this._previewTemplate = this._anchor =
          /** @type {?} */
          null;
        }
        /**
         * Checks whether the element is currently being dragged.
         * @return {?}
         */

      }, {
        key: "isDragging",
        value: function isDragging() {
          return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
        }
        /**
         * Resets a standalone drag item to its initial position.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this._rootElement.style.transform = this._initialTransform || '';
          this._activeTransform = {
            x: 0,
            y: 0
          };
          this._passiveTransform = {
            x: 0,
            y: 0
          };
        }
        /**
         * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
         * @param {?} handle Handle element that should be disabled.
         * @return {?}
         */

      }, {
        key: "disableHandle",
        value: function disableHandle(handle) {
          if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
          }
        }
        /**
         * Enables a handle, if it has been disabled.
         * @param {?} handle Handle element to be enabled.
         * @return {?}
         */

      }, {
        key: "enableHandle",
        value: function enableHandle(handle) {
          this._disabledHandles["delete"](handle);
        }
        /**
         * Sets the layout direction of the draggable item.
         * @template THIS
         * @this {THIS}
         * @param {?} direction
         * @return {THIS}
         */

      }, {
        key: "withDirection",
        value: function withDirection(direction) {
          /** @type {?} */
          this._direction = direction;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the container that the item is part of.
         * @param {?} container
         * @return {?}
         */

      }, {
        key: "_withDropContainer",
        value: function _withDropContainer(container) {
          this._dropContainer = container;
        }
        /**
         * Gets the current position in pixels the draggable outside of a drop container.
         * @return {?}
         */

      }, {
        key: "getFreeDragPosition",
        value: function getFreeDragPosition() {
          /** @type {?} */
          var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
          return {
            x: position.x,
            y: position.y
          };
        }
        /**
         * Sets the current position in pixels the draggable outside of a drop container.
         * @template THIS
         * @this {THIS}
         * @param {?} value New position to be set.
         * @return {THIS}
         */

      }, {
        key: "setFreeDragPosition",
        value: function setFreeDragPosition(value) {
          /** @type {?} */
          this._activeTransform = {
            x: 0,
            y: 0
          };

          /** @type {?} */
          this._passiveTransform.x = value.x;

          /** @type {?} */
          this._passiveTransform.y = value.y;

          if (!
          /** @type {?} */
          this._dropContainer) {
            /** @type {?} */
            this._applyRootElementTransform(value.x, value.y);
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Updates the item's sort order based on the last-known pointer position.
         * @return {?}
         */

      }, {
        key: "_sortFromLastPointerPosition",
        value: function _sortFromLastPointerPosition() {
          /** @type {?} */
          var position = this._pointerPositionAtLastDirectionChange;

          if (position && this._dropContainer) {
            this._updateActiveDropContainer(position);
          }
        }
        /**
         * Unsubscribes from the global subscriptions.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeSubscriptions",
        value: function _removeSubscriptions() {
          this._pointerMoveSubscription.unsubscribe();

          this._pointerUpSubscription.unsubscribe();

          this._scrollSubscription.unsubscribe();
        }
        /**
         * Destroys the preview element and its ViewRef.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPreview",
        value: function _destroyPreview() {
          if (this._preview) {
            removeNode(this._preview);
          }

          if (this._previewRef) {
            this._previewRef.destroy();
          }

          this._preview = this._previewRef =
          /** @type {?} */
          null;
        }
        /**
         * Destroys the placeholder element and its ViewRef.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPlaceholder",
        value: function _destroyPlaceholder() {
          if (this._placeholder) {
            removeNode(this._placeholder);
          }

          if (this._placeholderRef) {
            this._placeholderRef.destroy();
          }

          this._placeholder = this._placeholderRef =
          /** @type {?} */
          null;
        }
        /**
         * Clears subscriptions and stops the dragging sequence.
         * @private
         * @param {?} event Browser event object that ended the sequence.
         * @return {?}
         */

      }, {
        key: "_endDragSequence",
        value: function _endDragSequence(event) {
          var _this3 = this;

          // Note that here we use `isDragging` from the service, rather than from `this`.
          // The difference is that the one from the service reflects whether a dragging sequence
          // has been initiated, whereas the one on `this` includes whether the user has passed
          // the minimum dragging threshold.
          if (!this._dragDropRegistry.isDragging(this)) {
            return;
          }

          this._removeSubscriptions();

          this._dragDropRegistry.stopDragging(this);

          this._toggleNativeDragInteractions();

          if (this._handles) {
            this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
          }

          if (!this._hasStartedDragging) {
            return;
          }

          this.released.next({
            source: this
          });

          if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();

            this._animatePreviewToPlaceholder().then(
            /**
            * @return {?}
            */
            function () {
              _this3._cleanupDragArtifacts(event);

              _this3._cleanupCachedDimensions();

              _this3._dragDropRegistry.stopDragging(_this3);
            });
          } else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;

            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this3.ended.next({
                source: _this3,
                distance: _this3._getDragDistance(_this3._getPointerPositionOnPage(event))
              });
            });

            this._cleanupCachedDimensions();

            this._dragDropRegistry.stopDragging(this);
          }
        }
        /**
         * Starts the dragging sequence.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_startDragSequence",
        value: function _startDragSequence(event) {
          // Emit the event on the item before the one on the container.
          this.started.next({
            source: this
          });

          if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
          }

          this._toggleNativeDragInteractions();

          if (this._dropContainer) {
            /** @type {?} */
            var element = this._rootElement;
            /** @type {?} */

            var parent =
            /** @type {?} */
            element.parentNode;
            /** @type {?} */

            var preview = this._preview = this._createPreviewElement();
            /** @type {?} */


            var placeholder = this._placeholder = this._createPlaceholderElement();
            /** @type {?} */


            var anchor = this._anchor = this._anchor || this._document.createComment(''); // Insert an anchor node so that we can restore the element's position in the DOM.


            parent.insertBefore(anchor, element); // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.

            element.style.display = 'none';

            this._document.body.appendChild(parent.replaceChild(placeholder, element));

            getPreviewInsertionPoint(this._document).appendChild(preview);

            this._dropContainer.start();

            this._initialContainer = this._dropContainer;
            this._initialIndex = this._dropContainer.getItemIndex(this);
          } else {
            this._initialContainer = this._initialIndex =
            /** @type {?} */
            undefined;
          }
        }
        /**
         * Sets up the different variables and subscriptions
         * that will be necessary for the dragging sequence.
         * @private
         * @param {?} referenceElement Element that started the drag sequence.
         * @param {?} event Browser event object that started the sequence.
         * @return {?}
         */

      }, {
        key: "_initializeDragSequence",
        value: function _initializeDragSequence(referenceElement, event) {
          var _this4 = this;

          // Always stop propagation for the event that initializes
          // the dragging sequence, in order to prevent it from potentially
          // starting another sequence for a draggable parent somewhere up the DOM tree.
          event.stopPropagation();
          /** @type {?} */

          var isDragging = this.isDragging();
          /** @type {?} */

          var isTouchSequence = isTouchEvent(event);
          /** @type {?} */

          var isAuxiliaryMouseButton = !isTouchSequence &&
          /** @type {?} */
          event.button !== 0;
          /** @type {?} */

          var rootElement = this._rootElement;
          /** @type {?} */

          var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now(); // If the event started from an element with the native HTML drag&drop, it'll interfere
          // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
          // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
          // it's flaky and it fails if the user drags it away quickly. Also note that we only want
          // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
          // events from firing on touch devices.

          if (event.target &&
          /** @type {?} */
          event.target.draggable && event.type === 'mousedown') {
            event.preventDefault();
          } // Abort if the user is already dragging or is using a mouse button other than the primary one.


          if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
          } // If we've got handles, we need to disable the tap highlight on the entire root element,
          // otherwise iOS will still add it, even though all the drag interactions on the handle
          // are disabled.


          if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
          }

          this._hasStartedDragging = this._hasMoved = false; // Avoid multiple subscriptions and memory leaks when multi touch
          // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)

          this._removeSubscriptions();

          this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
          this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
          this._scrollSubscription = this._dragDropRegistry.scroll.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this4._scrollPosition = _this4._viewportRuler.getViewportScrollPosition();
          });

          if (this._boundaryElement) {
            this._boundaryRect = this._boundaryElement.getBoundingClientRect();
          } // If we have a custom preview we can't know ahead of time how large it'll be so we position
          // it next to the cursor. The exception is when the consumer has opted into making the preview
          // the same size as the root element, in which case we do know the size.

          /** @type {?} */


          var previewTemplate = this._previewTemplate;
          this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
            x: 0,
            y: 0
          } : this._getPointerPositionInElement(referenceElement, event);
          /** @type {?} */

          var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);

          this._pointerDirectionDelta = {
            x: 0,
            y: 0
          };
          this._pointerPositionAtLastDirectionChange = {
            x: pointerPosition.x,
            y: pointerPosition.y
          };
          this._dragStartTime = Date.now();

          this._dragDropRegistry.startDragging(this, event);
        }
        /**
         * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_cleanupDragArtifacts",
        value: function _cleanupDragArtifacts(event) {
          var _this5 = this;

          // Restore the element's visibility and insert it at its old position in the DOM.
          // It's important that we maintain the position, because moving the element around in the DOM
          // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
          // while moving the existing elements in all other cases.
          this._rootElement.style.display = '';

          /** @type {?} */
          this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);

          this._destroyPreview();

          this._destroyPlaceholder();

          this._boundaryRect = this._previewRect = undefined; // Re-enter the NgZone since we bound `document` events on the outside.

          this._ngZone.run(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container =
            /** @type {?} */
            _this5._dropContainer;
            /** @type {?} */

            var currentIndex = container.getItemIndex(_this5);
            /** @type {?} */

            var pointerPosition = _this5._getPointerPositionOnPage(event);
            /** @type {?} */


            var distance = _this5._getDragDistance(_this5._getPointerPositionOnPage(event));
            /** @type {?} */


            var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);

            _this5.ended.next({
              source: _this5,
              distance: distance
            });

            _this5.dropped.next({
              item: _this5,
              currentIndex: currentIndex,
              previousIndex: _this5._initialIndex,
              container: container,
              previousContainer: _this5._initialContainer,
              isPointerOverContainer: isPointerOverContainer,
              distance: distance
            });

            container.drop(_this5, currentIndex, _this5._initialContainer, isPointerOverContainer, distance, _this5._initialIndex);
            _this5._dropContainer = _this5._initialContainer;
          });
        }
        /**
         * Updates the item's position in its drop container, or moves it
         * into a new one, depending on its current drag position.
         * @private
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "_updateActiveDropContainer",
        value: function _updateActiveDropContainer(_ref) {
          var _this6 = this;

          var x = _ref.x,
              y = _ref.y;

          // Drop container that draggable has been moved into.

          /** @type {?} */
          var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y); // If we couldn't find a new container to move the item into, and the item has left its
          // initial container, check whether the it's over the initial container. This handles the
          // case where two containers are connected one way and the user tries to undo dragging an
          // item into a new container.


          if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
          }

          if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              // Notify the old container that the item has left.
              _this6.exited.next({
                item: _this6,
                container:
                /** @type {?} */
                _this6._dropContainer
              });

              /** @type {?} */
              _this6._dropContainer.exit(_this6); // Notify the new container that the item has entered.


              _this6._dropContainer =
              /** @type {?} */
              newContainer;

              _this6._dropContainer.enter(_this6, x, y, newContainer === _this6._initialContainer && // If we're re-entering the initial container and sorting is disabled,
              // put item the into its starting index to begin with.
              newContainer.sortingDisabled ? _this6._initialIndex : undefined);

              _this6.entered.next({
                item: _this6,
                container:
                /** @type {?} */
                newContainer,
                currentIndex:
                /** @type {?} */
                newContainer.getItemIndex(_this6)
              });
            });
          }

          /** @type {?} */
          this._dropContainer._startScrollingIfNecessary(x, y);

          /** @type {?} */
          this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);

          this._preview.style.transform = getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
        }
        /**
         * Creates the element that will be rendered next to the user's pointer
         * and will be used as a preview of the element that is being dragged.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPreviewElement",
        value: function _createPreviewElement() {
          /** @type {?} */
          var previewConfig = this._previewTemplate;
          /** @type {?} */

          var previewClass = this.previewClass;
          /** @type {?} */

          var previewTemplate = previewConfig ? previewConfig.template : null;
          /** @type {?} */

          var preview;

          if (previewTemplate) {
            /** @type {?} */
            var viewRef =
            /** @type {?} */
            previewConfig.viewContainer.createEmbeddedView(previewTemplate,
            /** @type {?} */
            previewConfig.context);
            viewRef.detectChanges();
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;

            if (
            /** @type {?} */
            previewConfig.matchSize) {
              matchElementSize(preview, this._rootElement);
            } else {
              preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
            }
          } else {
            /** @type {?} */
            var element = this._rootElement;
            preview = deepCloneNode(element);
            matchElementSize(preview, element);
          }

          extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            // We have to reset the margin, because it can throw off positioning relative to the viewport.
            margin: '0',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1000'
          });
          toggleNativeDragInteractions(preview, false);
          preview.classList.add('cdk-drag-preview');
          preview.setAttribute('dir', this._direction);

          if (previewClass) {
            if (Array.isArray(previewClass)) {
              previewClass.forEach(
              /**
              * @param {?} className
              * @return {?}
              */
              function (className) {
                return preview.classList.add(className);
              });
            } else {
              preview.classList.add(previewClass);
            }
          }

          return preview;
        }
        /**
         * Animates the preview element from its current position to the location of the drop placeholder.
         * @private
         * @return {?} Promise that resolves when the animation completes.
         */

      }, {
        key: "_animatePreviewToPlaceholder",
        value: function _animatePreviewToPlaceholder() {
          var _this7 = this;

          // If the user hasn't moved yet, the transitionend event won't fire.
          if (!this._hasMoved) {
            return Promise.resolve();
          }
          /** @type {?} */


          var placeholderRect = this._placeholder.getBoundingClientRect(); // Apply the class that adds a transition to the preview.


          this._preview.classList.add('cdk-drag-animating'); // Move the preview to the placeholder position.


          this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top); // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
          // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
          // apply its style, we take advantage of the available info to figure out whether we need to
          // bind the event in the first place.

          /** @type {?} */

          var duration = getTransformTransitionDurationInMs(this._preview);

          if (duration === 0) {
            return Promise.resolve();
          }

          return this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return new Promise(
            /**
            * @param {?} resolve
            * @return {?}
            */
            function (resolve) {
              /** @type {?} */
              var handler =
              /** @type {?} */

              /**
              * @param {?} event
              * @return {?}
              */
              function handler(event) {
                if (!event || event.target === _this7._preview && event.propertyName === 'transform') {
                  _this7._preview.removeEventListener('transitionend', handler);

                  resolve();
                  clearTimeout(timeout);
                }
              }; // If a transition is short enough, the browser might not fire the `transitionend` event.
              // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
              // fire if the transition hasn't completed when it was supposed to.

              /** @type {?} */


              var timeout = setTimeout(
              /** @type {?} */
              handler, duration * 1.5);

              _this7._preview.addEventListener('transitionend', handler);
            });
          });
        }
        /**
         * Creates an element that will be shown instead of the current element while dragging.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPlaceholderElement",
        value: function _createPlaceholderElement() {
          /** @type {?} */
          var placeholderConfig = this._placeholderTemplate;
          /** @type {?} */

          var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
          /** @type {?} */

          var placeholder;

          if (placeholderTemplate) {
            this._placeholderRef =
            /** @type {?} */
            placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate,
            /** @type {?} */
            placeholderConfig.context);

            this._placeholderRef.detectChanges();

            placeholder = getRootNode(this._placeholderRef, this._document);
          } else {
            placeholder = deepCloneNode(this._rootElement);
          }

          placeholder.classList.add('cdk-drag-placeholder');
          return placeholder;
        }
        /**
         * Figures out the coordinates at which an element was picked up.
         * @private
         * @param {?} referenceElement Element that initiated the dragging.
         * @param {?} event Event that initiated the dragging.
         * @return {?}
         */

      }, {
        key: "_getPointerPositionInElement",
        value: function _getPointerPositionInElement(referenceElement, event) {
          /** @type {?} */
          var elementRect = this._rootElement.getBoundingClientRect();
          /** @type {?} */


          var handleElement = referenceElement === this._rootElement ? null : referenceElement;
          /** @type {?} */

          var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
          /** @type {?} */

          var point = isTouchEvent(event) ? event.targetTouches[0] : event;
          /** @type {?} */

          var x = point.pageX - referenceRect.left - this._scrollPosition.left;
          /** @type {?} */

          var y = point.pageY - referenceRect.top - this._scrollPosition.top;
          return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
          };
        }
        /**
         * Determines the point of the page that was touched by the user.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_getPointerPositionOnPage",
        value: function _getPointerPositionOnPage(event) {
          // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.

          /** @type {?} */
          var point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
          return {
            x: point.pageX - this._scrollPosition.left,
            y: point.pageY - this._scrollPosition.top
          };
        }
        /**
         * Gets the pointer position on the page, accounting for any position constraints.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_getConstrainedPointerPosition",
        value: function _getConstrainedPointerPosition(event) {
          /** @type {?} */
          var point = this._getPointerPositionOnPage(event);
          /** @type {?} */


          var constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
          /** @type {?} */

          var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;

          if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
          } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
          }

          if (this._boundaryRect) {
            var _this$_pickupPosition = this._pickupPositionInElement,
                pickupX = _this$_pickupPosition.x,
                pickupY = _this$_pickupPosition.y;
            /** @type {?} */

            var boundaryRect = this._boundaryRect;
            /** @type {?} */

            var previewRect =
            /** @type {?} */
            this._previewRect;
            /** @type {?} */

            var minY = boundaryRect.top + pickupY;
            /** @type {?} */

            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */

            var minX = boundaryRect.left + pickupX;
            /** @type {?} */

            var maxX = boundaryRect.right - (previewRect.width - pickupX);
            constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
            constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
          }

          return constrainedPoint;
        }
        /**
         * Updates the current drag delta, based on the user's current pointer position on the page.
         * @private
         * @param {?} pointerPositionOnPage
         * @return {?}
         */

      }, {
        key: "_updatePointerDirectionDelta",
        value: function _updatePointerDirectionDelta(pointerPositionOnPage) {
          var x = pointerPositionOnPage.x,
              y = pointerPositionOnPage.y;
          /** @type {?} */

          var delta = this._pointerDirectionDelta;
          /** @type {?} */

          var positionSinceLastChange = this._pointerPositionAtLastDirectionChange; // Amount of pixels the user has dragged since the last time the direction changed.

          /** @type {?} */

          var changeX = Math.abs(x - positionSinceLastChange.x);
          /** @type {?} */

          var changeY = Math.abs(y - positionSinceLastChange.y); // Because we handle pointer events on a per-pixel basis, we don't want the delta
          // to change for every pixel, otherwise anything that depends on it can look erratic.
          // To make the delta more consistent, we track how much the user has moved since the last
          // delta change and we only update it after it has reached a certain threshold.

          if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
          }

          if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
          }

          return delta;
        }
        /**
         * Toggles the native drag interactions, based on how many handles are registered.
         * @private
         * @return {?}
         */

      }, {
        key: "_toggleNativeDragInteractions",
        value: function _toggleNativeDragInteractions() {
          if (!this._rootElement || !this._handles) {
            return;
          }
          /** @type {?} */


          var shouldEnable = this._handles.length > 0 || !this.isDragging();

          if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
          }
        }
        /**
         * Removes the manually-added event listeners from the root element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_removeRootElementListeners",
        value: function _removeRootElementListeners(element) {
          element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
          element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
        }
        /**
         * Applies a `transform` to the root element, taking into account any existing transforms on it.
         * @private
         * @param {?} x New transform value along the X axis.
         * @param {?} y New transform value along the Y axis.
         * @return {?}
         */

      }, {
        key: "_applyRootElementTransform",
        value: function _applyRootElementTransform(x, y) {
          /** @type {?} */
          var transform = getTransform(x, y); // Cache the previous transform amount only after the first drag sequence, because
          // we don't want our own transforms to stack on top of each other.

          if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
          } // Preserve the previous `transform` value, if there was one. Note that we apply our own
          // transform before the user's, because things like rotation can affect which direction
          // the element will be translated towards.


          this._rootElement.style.transform = this._initialTransform ? transform + ' ' + this._initialTransform : transform;
        }
        /**
         * Gets the distance that the user has dragged during the current drag sequence.
         * @private
         * @param {?} currentPosition Current position of the user's pointer.
         * @return {?}
         */

      }, {
        key: "_getDragDistance",
        value: function _getDragDistance(currentPosition) {
          /** @type {?} */
          var pickupPosition = this._pickupPositionOnPage;

          if (pickupPosition) {
            return {
              x: currentPosition.x - pickupPosition.x,
              y: currentPosition.y - pickupPosition.y
            };
          }

          return {
            x: 0,
            y: 0
          };
        }
        /**
         * Cleans up any cached element dimensions that we don't need after dragging has stopped.
         * @private
         * @return {?}
         */

      }, {
        key: "_cleanupCachedDimensions",
        value: function _cleanupCachedDimensions() {
          this._boundaryRect = this._previewRect = undefined;
        }
        /**
         * Checks whether the element is still inside its boundary after the viewport has been resized.
         * If not, the position is adjusted so that the element fits again.
         * @private
         * @return {?}
         */

      }, {
        key: "_containInsideBoundaryOnResize",
        value: function _containInsideBoundaryOnResize() {
          var _this$_passiveTransfo = this._passiveTransform,
              x = _this$_passiveTransfo.x,
              y = _this$_passiveTransfo.y;

          if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
            return;
          }
          /** @type {?} */


          var boundaryRect = this._boundaryElement.getBoundingClientRect();
          /** @type {?} */


          var elementRect = this._rootElement.getBoundingClientRect(); // It's possible that the element got hidden away after dragging (e.g. by switching to a
          // different tab). Don't do anything in this case so we don't clear the user's position.


          if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
            return;
          }
          /** @type {?} */


          var leftOverflow = boundaryRect.left - elementRect.left;
          /** @type {?} */

          var rightOverflow = elementRect.right - boundaryRect.right;
          /** @type {?} */

          var topOverflow = boundaryRect.top - elementRect.top;
          /** @type {?} */

          var bottomOverflow = elementRect.bottom - boundaryRect.bottom; // If the element has become wider than the boundary, we can't
          // do much to make it fit so we just anchor it to the left.

          if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
              x += leftOverflow;
            }

            if (rightOverflow > 0) {
              x -= rightOverflow;
            }
          } else {
            x = 0;
          } // If the element has become taller than the boundary, we can't
          // do much to make it fit so we just anchor it to the top.


          if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
              y += topOverflow;
            }

            if (bottomOverflow > 0) {
              y -= bottomOverflow;
            }
          } else {
            y = 0;
          }

          if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({
              y: y,
              x: x
            });
          }
        }
        /**
         * Gets the drag start delay, based on the event type.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_getDragStartDelay",
        value: function _getDragStartDelay(event) {
          /** @type {?} */
          var value = this.dragStartDelay;

          if (typeof value === 'number') {
            return value;
          } else if (isTouchEvent(event)) {
            return value.touch;
          }

          return value ? value.mouse : 0;
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          if (newValue !== this._disabled) {
            this._disabled = newValue;

            this._toggleNativeDragInteractions();
          }
        }
      }]);

      return DragRef;
    }();

    if (false) {}
    /**
     * Gets a 3d `transform` that can be applied to an element.
     * @param {?} x Desired position of the element along the X axis.
     * @param {?} y Desired position of the element along the Y axis.
     * @return {?}
     */


    function getTransform(x, y) {
      // Round the transforms since some browsers will
      // blur the elements for sub-pixel transforms.
      return "translate3d(".concat(Math.round(x), "px, ").concat(Math.round(y), "px, 0)");
    }
    /**
     * Creates a deep clone of an element.
     * @param {?} node
     * @return {?}
     */


    function deepCloneNode(node) {
      /** @type {?} */
      var clone =
      /** @type {?} */
      node.cloneNode(true);
      /** @type {?} */

      var descendantsWithId = clone.querySelectorAll('[id]');
      /** @type {?} */

      var descendantCanvases = node.querySelectorAll('canvas'); // Remove the `id` to avoid having multiple elements with the same id on the page.

      clone.removeAttribute('id');

      for (var i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
      } // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
      // We match up the cloned canvas to their sources using their index in the DOM.


      if (descendantCanvases.length) {
        /** @type {?} */
        var cloneCanvases = clone.querySelectorAll('canvas');

        for (var _i = 0; _i < descendantCanvases.length; _i++) {
          /** @type {?} */
          var correspondingCloneContext = cloneCanvases[_i].getContext('2d');

          if (correspondingCloneContext) {
            correspondingCloneContext.drawImage(descendantCanvases[_i], 0, 0);
          }
        }
      }

      return clone;
    }
    /**
     * Clamps a value between a minimum and a maximum.
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */


    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    }
    /**
     * Helper to remove a node from the DOM and to do all the necessary null checks.
     * @param {?} node Node to be removed.
     * @return {?}
     */


    function removeNode(node) {
      if (node && node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
    /**
     * Determines whether an event is a touch event.
     * @param {?} event
     * @return {?}
     */


    function isTouchEvent(event) {
      // This function is called for every pixel that the user has dragged so we need it to be
      // as fast as possible. Since we only bind mouse events and touch events, we can assume
      // that if the event's name starts with `t`, it's a touch event.
      return event.type[0] === 't';
    }
    /**
     * Gets the element into which the drag preview should be inserted.
     * @param {?} documentRef
     * @return {?}
     */


    function getPreviewInsertionPoint(documentRef) {
      // We can't use the body if the user is in fullscreen mode,
      // because the preview will render under the fullscreen element.
      // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
      return documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    /**
     * Gets the root HTML element of an embedded view.
     * If the root is not an HTML element it gets wrapped in one.
     * @param {?} viewRef
     * @param {?} _document
     * @return {?}
     */


    function getRootNode(viewRef, _document) {
      /** @type {?} */
      var rootNode = viewRef.rootNodes[0];

      if (rootNode.nodeType !== _document.ELEMENT_NODE) {
        /** @type {?} */
        var wrapper = _document.createElement('div');

        wrapper.appendChild(rootNode);
        return wrapper;
      }

      return (
        /** @type {?} */
        rootNode
      );
    }
    /**
     * Matches the target element's size to the source's size.
     * @param {?} target Element that needs to be resized.
     * @param {?} source Element whose size needs to be matched.
     * @return {?}
     */


    function matchElementSize(target, source) {
      /** @type {?} */
      var sourceRect = source.getBoundingClientRect();
      target.style.width = "".concat(sourceRect.width, "px");
      target.style.height = "".concat(sourceRect.height, "px");
      target.style.transform = getTransform(sourceRect.left, sourceRect.top);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-utils.ts
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
     * Moves an item one index in an array to another.
     * @template T
     * @param {?} array Array in which to move the item.
     * @param {?} fromIndex Starting index of the item.
     * @param {?} toIndex Index to which the item should be moved.
     * @return {?}
     */


    function moveItemInArray(array, fromIndex, toIndex) {
      /** @type {?} */
      var from = clamp$1(fromIndex, array.length - 1);
      /** @type {?} */

      var to = clamp$1(toIndex, array.length - 1);

      if (from === to) {
        return;
      }
      /** @type {?} */


      var target = array[from];
      /** @type {?} */

      var delta = to < from ? -1 : 1;

      for (var i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
      }

      array[to] = target;
    }
    /**
     * Moves an item from one array to another.
     * @template T
     * @param {?} currentArray Array from which to transfer the item.
     * @param {?} targetArray Array into which to put the item.
     * @param {?} currentIndex Index of the item in its current array.
     * @param {?} targetIndex Index at which to insert the item.
     * @return {?}
     */


    function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
      /** @type {?} */
      var from = clamp$1(currentIndex, currentArray.length - 1);
      /** @type {?} */

      var to = clamp$1(targetIndex, targetArray.length);

      if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
      }
    }
    /**
     * Copies an item from one array to another, leaving it in its
     * original position in current array.
     * @template T
     * @param {?} currentArray Array from which to copy the item.
     * @param {?} targetArray Array into which is copy the item.
     * @param {?} currentIndex Index of the item in its current array.
     * @param {?} targetIndex Index at which to insert the item.
     *
     * @return {?}
     */


    function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
      /** @type {?} */
      var to = clamp$1(targetIndex, targetArray.length);

      if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
      }
    }
    /**
     * Clamps a number between zero and a maximum.
     * @param {?} value
     * @param {?} max
     * @return {?}
     */


    function clamp$1(value, max) {
      return Math.max(0, Math.min(max, value));
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drop-list-ref.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Proximity, as a ratio to width/height, at which a
     * dragged item will affect the drop container.
     * @type {?}
     */


    var DROP_PROXIMITY_THRESHOLD = 0.05;
    /**
     * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
     * viewport. The value comes from trying it out manually until it feels right.
     * @type {?}
     */

    var SCROLL_PROXIMITY_THRESHOLD = 0.05;
    /**
     * Number of pixels to scroll for each frame when auto-scrolling an element.
     * The value comes from trying it out manually until it feels right.
     * @type {?}
     */

    var AUTO_SCROLL_STEP = 2;
    /**
     * Entry in the position cache for draggable items.
     * \@docs-private
     * @record
     */

    function CachedItemPosition() {}

    if (false) {}
    /**
     * Object holding the scroll position of something.
     * @record
     */


    function ScrollPosition() {}

    if (false) {}
    /** @enum {number} */


    var AutoScrollVerticalDirection = {
      NONE: 0,
      UP: 1,
      DOWN: 2
    };
    /** @enum {number} */

    var AutoScrollHorizontalDirection = {
      NONE: 0,
      LEFT: 1,
      RIGHT: 2
    };
    /**
     * Internal compile-time-only representation of a `DropListRef`.
     * Used to avoid circular import issues between the `DropListRef` and the `DragRef`.
     * \@docs-private
     * @record
     */

    function DropListRefInternal() {}
    /**
     * Reference to a drop list. Used to manipulate or dispose of the container.
     * @template T
     */


    var DropListRef =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?} _dragDropRegistry
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       */
      function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        var _this8 = this;

        _classCallCheck(this, DropListRef);

        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */

        this.disabled = false;
        /**
         * Whether sorting items within the list is disabled.
         */

        this.sortingDisabled = false;
        /**
         * Whether auto-scrolling the view when the user
         * moves their pointer close to the edges is disabled.
         */

        this.autoScrollDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */

        this.enterPredicate =
        /**
        * @return {?}
        */
        function () {
          return true;
        };
        /**
         * Emits right before dragging has started.
         */


        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */

        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */

        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */

        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */

        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */

        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */

        this._itemPositions = [];
        /**
         * Cached positions of the scrollable parent elements.
         */

        this._parentPositions = new Map();
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */

        this._previousSwap = {
          drag:
          /** @type {?} */
          null,
          delta: 0
        };
        /**
         * Drop lists that are connected to the current one.
         */

        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */

        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */

        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */

        this._direction = 'ltr';
        /**
         * Subscription to the window being scrolled.
         */

        this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Vertical direction in which the list is currently scrolling.
         */

        this._verticalScrollDirection = 0
        /* NONE */
        ;
        /**
         * Horizontal direction in which the list is currently scrolling.
         */

        this._horizontalScrollDirection = 0
        /* NONE */
        ;
        /**
         * Used to signal to the current auto-scroll sequence when to stop.
         */

        this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly.
         */

        this._cachedShadowRoot = null;
        /**
         * Starts the interval that'll auto-scroll the element.
         */

        this._startScrollInterval =
        /**
        * @return {?}
        */
        function () {
          _this8._stopScrolling();

          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_5__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this8._stopScrollTimers)).subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var node = _this8._scrollNode;

            if (_this8._verticalScrollDirection === 1
            /* UP */
            ) {
                incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
              } else if (_this8._verticalScrollDirection === 2
            /* DOWN */
            ) {
                incrementVerticalScroll(node, AUTO_SCROLL_STEP);
              }

            if (_this8._horizontalScrollDirection === 1
            /* LEFT */
            ) {
                incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
              } else if (_this8._horizontalScrollDirection === 2
            /* RIGHT */
            ) {
                incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
              }
          });
        };

        this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(element);
        this._document = _document;
        this.withScrollableParents([this.element]);

        _dragDropRegistry.registerDropContainer(this);
      }
      /**
       * Removes the drop list functionality from the DOM element.
       * @return {?}
       */


      _createClass(DropListRef, [{
        key: "dispose",
        value: function dispose() {
          this._stopScrolling();

          this._stopScrollTimers.complete();

          this._viewportScrollSubscription.unsubscribe();

          this.beforeStarted.complete();
          this.entered.complete();
          this.exited.complete();
          this.dropped.complete();
          this.sorted.complete();

          this._activeSiblings.clear();

          this._scrollNode =
          /** @type {?} */
          null;

          this._parentPositions.clear();

          this._dragDropRegistry.removeDropContainer(this);
        }
        /**
         * Whether an item from this list is currently being dragged.
         * @return {?}
         */

      }, {
        key: "isDragging",
        value: function isDragging() {
          return this._isDragging;
        }
        /**
         * Starts dragging an item.
         * @return {?}
         */

      }, {
        key: "start",
        value: function start() {
          var _this9 = this;

          /** @type {?} */
          var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
          this.beforeStarted.next();
          this._isDragging = true; // We need to disable scroll snapping while the user is dragging, because it breaks automatic
          // scrolling. The browser seems to round the value based on the snapping points which means
          // that we can't increment/decrement the scroll position.

          this._initialScrollSnap = styles.msScrollSnapType ||
          /** @type {?} */
          styles.scrollSnapType || '';

          /** @type {?} */
          styles.scrollSnapType = styles.msScrollSnapType = 'none';

          this._cacheItems();

          this._siblings.forEach(
          /**
          * @param {?} sibling
          * @return {?}
          */
          function (sibling) {
            return sibling._startReceiving(_this9);
          });

          this._viewportScrollSubscription.unsubscribe();

          this._listenToScrollEvents();
        }
        /**
         * Emits an event to indicate that the user moved an item into the container.
         * @param {?} item Item that was moved into the container.
         * @param {?} pointerX Position of the item along the X axis.
         * @param {?} pointerY Position of the item along the Y axis.
         * @param {?=} index Index at which the item entered. If omitted, the container will try to figure it
         *   out automatically.
         * @return {?}
         */

      }, {
        key: "enter",
        value: function enter(item, pointerX, pointerY, index) {
          this.start(); // If sorting is disabled, we want the item to return to its starting
          // position if the user is returning it to its initial container.

          /** @type {?} */

          var newIndex;

          if (index == null) {
            newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;

            if (newIndex === -1) {
              // We use the coordinates of where the item entered the drop
              // zone to figure out at which index it should be inserted.
              newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
            }
          } else {
            newIndex = index;
          }
          /** @type {?} */


          var activeDraggables = this._activeDraggables;
          /** @type {?} */

          var currentIndex = activeDraggables.indexOf(item);
          /** @type {?} */

          var placeholder = item.getPlaceholderElement();
          /** @type {?} */

          var newPositionReference = activeDraggables[newIndex]; // If the item at the new position is the same as the item that is being dragged,
          // it means that we're trying to restore the item to its initial position. In this
          // case we should use the next item from the list as the reference.

          if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
          } // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
          // into another container and back again), we have to ensure that it isn't duplicated.


          if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
          } // Don't use items that are being dragged as a reference, because
          // their element has been moved down to the bottom of the body.


          if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            var element = newPositionReference.getRootElement();

            /** @type {?} */
            element.parentElement.insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
          } else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).appendChild(placeholder);
            activeDraggables.push(item);
          } // The transform needs to be cleared so it doesn't throw off the measurements.


          placeholder.style.transform = ''; // Note that the positions were already cached when we called `start` above,
          // but we need to refresh them since the amount of items has changed.

          this._cacheItemPositions();

          this.entered.next({
            item: item,
            container: this,
            currentIndex: this.getItemIndex(item)
          });
        }
        /**
         * Removes an item from the container after it was dragged into another container by the user.
         * @param {?} item Item that was dragged out.
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit(item) {
          this._reset();

          this.exited.next({
            item: item,
            container: this
          });
        }
        /**
         * Drops an item into this container.
         * \@breaking-change 11.0.0 `previousIndex` parameter to become required.
         * @param {?} item Item being dropped into the container.
         * @param {?} currentIndex Index at which the item should be inserted.
         * @param {?} previousContainer Container from which the item got dragged in.
         * @param {?} isPointerOverContainer Whether the user's pointer was over the
         *    container when the item was dropped.
         * @param {?} distance Distance the user has dragged since the start of the dragging sequence.
         * @param {?=} previousIndex Index of the item when dragging started.
         *
         * @return {?}
         */

      }, {
        key: "drop",
        value: function drop(item, currentIndex, previousContainer, isPointerOverContainer, distance, previousIndex) {
          this._reset(); // @breaking-change 11.0.0 Remove this fallback logic once `previousIndex` is a required param.


          if (previousIndex == null) {
            previousIndex = previousContainer.getItemIndex(item);
          }

          this.dropped.next({
            item: item,
            currentIndex: currentIndex,
            previousIndex: previousIndex,
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer,
            distance: distance
          });
        }
        /**
         * Sets the draggable items that are a part of this list.
         * @template THIS
         * @this {THIS}
         * @param {?} items Items that are a part of this list.
         * @return {THIS}
         */

      }, {
        key: "withItems",
        value: function withItems(items) {
          var _this10 = this;

          /** @type {?} */
          this._draggables = items;
          items.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item._withDropContainer(
            /** @type {?} */
            _this10);
          });

          if (
          /** @type {?} */
          this.isDragging()) {
            /** @type {?} */
            this._cacheItems();
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the layout direction of the drop list.
         * @template THIS
         * @this {THIS}
         * @param {?} direction
         * @return {THIS}
         */

      }, {
        key: "withDirection",
        value: function withDirection(direction) {
          /** @type {?} */
          this._direction = direction;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the containers that are connected to this one. When two or more containers are
         * connected, the user will be allowed to transfer items between them.
         * @template THIS
         * @this {THIS}
         * @param {?} connectedTo Other containers that the current containers should be connected to.
         * @return {THIS}
         */

      }, {
        key: "connectedTo",
        value: function connectedTo(_connectedTo) {
          /** @type {?} */
          this._siblings = _connectedTo.slice();
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the orientation of the container.
         * @template THIS
         * @this {THIS}
         * @param {?} orientation New orientation for the container.
         * @return {THIS}
         */

      }, {
        key: "withOrientation",
        value: function withOrientation(orientation) {
          /** @type {?} */
          this._orientation = orientation;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets which parent elements are can be scrolled while the user is dragging.
         * @template THIS
         * @this {THIS}
         * @param {?} elements Elements that can be scrolled.
         * @return {THIS}
         */

      }, {
        key: "withScrollableParents",
        value: function withScrollableParents(elements) {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(
          /** @type {?} */
          this.element); // We always allow the current element to be scrollable
          // so we need to ensure that it's in the array.

          /** @type {?} */
          this._scrollableElements = elements.indexOf(element) === -1 ? [element].concat(_toConsumableArray(elements)) : elements.slice();
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Figures out the index of an item in the container.
         * @param {?} item Item whose index should be determined.
         * @return {?}
         */

      }, {
        key: "getItemIndex",
        value: function getItemIndex(item) {
          if (!this._isDragging) {
            return this._draggables.indexOf(item);
          } // Items are sorted always by top/left in the cache, however they flow differently in RTL.
          // The rest of the logic still stands no matter what orientation we're in, however
          // we need to invert the array when determining the index.

          /** @type {?} */


          var items = this._orientation === 'horizontal' && this._direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
          return findIndex(items,
          /**
          * @param {?} currentItem
          * @return {?}
          */
          function (currentItem) {
            return currentItem.drag === item;
          });
        }
        /**
         * Whether the list is able to receive the item that
         * is currently being dragged inside a connected drop list.
         * @return {?}
         */

      }, {
        key: "isReceiving",
        value: function isReceiving() {
          return this._activeSiblings.size > 0;
        }
        /**
         * Sorts an item inside the container based on its position.
         * @param {?} item Item to be sorted.
         * @param {?} pointerX Position of the item along the X axis.
         * @param {?} pointerY Position of the item along the Y axis.
         * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
         * @return {?}
         */

      }, {
        key: "_sortItem",
        value: function _sortItem(item, pointerX, pointerY, pointerDelta) {
          // Don't sort the item if sorting is disabled or it's out of range.
          if (this.sortingDisabled || !isPointerNearClientRect(this._clientRect, pointerX, pointerY)) {
            return;
          }
          /** @type {?} */


          var siblings = this._itemPositions;
          /** @type {?} */

          var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);

          if (newIndex === -1 && siblings.length > 0) {
            return;
          }
          /** @type {?} */


          var isHorizontal = this._orientation === 'horizontal';
          /** @type {?} */

          var currentIndex = findIndex(siblings,
          /**
          * @param {?} currentItem
          * @return {?}
          */
          function (currentItem) {
            return currentItem.drag === item;
          });
          /** @type {?} */

          var siblingAtNewPosition = siblings[newIndex];
          /** @type {?} */

          var currentPosition = siblings[currentIndex].clientRect;
          /** @type {?} */

          var newPosition = siblingAtNewPosition.clientRect;
          /** @type {?} */

          var delta = currentIndex > newIndex ? 1 : -1;
          this._previousSwap.drag = siblingAtNewPosition.drag;
          this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y; // How many pixels the item's placeholder should be offset.

          /** @type {?} */

          var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta); // How many pixels all the other items should be offset.

          /** @type {?} */


          var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta); // Save the previous order of the items before moving the item to its new index.
          // We use this to check whether an item has been moved as a result of the sorting.

          /** @type {?} */


          var oldOrder = siblings.slice(); // Shuffle the array in place.

          moveItemInArray(siblings, currentIndex, newIndex);
          this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
          });
          siblings.forEach(
          /**
          * @param {?} sibling
          * @param {?} index
          * @return {?}
          */
          function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
              return;
            }
            /** @type {?} */


            var isDraggedItem = sibling.drag === item;
            /** @type {?} */

            var offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */

            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement(); // Update the offset to reflect the new position.

            sibling.offset += offset; // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.

            if (isHorizontal) {
              // Round the transforms since some browsers will
              // blur the elements, for sub-pixel transforms.
              elementToOffset.style.transform = "translate3d(".concat(Math.round(sibling.offset), "px, 0, 0)");
              adjustClientRect(sibling.clientRect, 0, offset);
            } else {
              elementToOffset.style.transform = "translate3d(0, ".concat(Math.round(sibling.offset), "px, 0)");
              adjustClientRect(sibling.clientRect, offset, 0);
            }
          });
        }
        /**
         * Checks whether the user's pointer is close to the edges of either the
         * viewport or the drop list and starts the auto-scroll sequence.
         * @param {?} pointerX User's pointer position along the x axis.
         * @param {?} pointerY User's pointer position along the y axis.
         * @return {?}
         */

      }, {
        key: "_startScrollingIfNecessary",
        value: function _startScrollingIfNecessary(pointerX, pointerY) {
          var _this11 = this;

          if (this.autoScrollDisabled) {
            return;
          }
          /** @type {?} */


          var scrollNode;
          /** @type {?} */

          var verticalScrollDirection = 0
          /* NONE */
          ;
          /** @type {?} */

          var horizontalScrollDirection = 0
          /* NONE */
          ; // Check whether we should start scrolling any of the parent containers.

          this._parentPositions.forEach(
          /**
          * @param {?} position
          * @param {?} element
          * @return {?}
          */
          function (position, element) {
            // We have special handling for the `document` below. Also this would be
            // nicer with a  for...of loop, but it requires changing a compiler flag.
            if (element === _this11._document || !position.clientRect || scrollNode) {
              return;
            }

            if (isPointerNearClientRect(position.clientRect, pointerX, pointerY)) {
              var _getElementScrollDire = getElementScrollDirections(
              /** @type {?} */
              element, position.clientRect, pointerX, pointerY);

              var _getElementScrollDire2 = _slicedToArray(_getElementScrollDire, 2);

              verticalScrollDirection = _getElementScrollDire2[0];
              horizontalScrollDirection = _getElementScrollDire2[1];

              if (verticalScrollDirection || horizontalScrollDirection) {
                scrollNode =
                /** @type {?} */
                element;
              }
            }
          }); // Otherwise check if we can start scrolling the viewport.


          if (!verticalScrollDirection && !horizontalScrollDirection) {
            var _this$_viewportRuler$ = this._viewportRuler.getViewportSize(),
                width = _this$_viewportRuler$.width,
                height = _this$_viewportRuler$.height;
            /** @type {?} */


            var clientRect = {
              width: width,
              height: height,
              top: 0,
              right: width,
              bottom: height,
              left: 0
            };
            verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
            horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
            scrollNode = window;
          }

          if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
            this._verticalScrollDirection = verticalScrollDirection;
            this._horizontalScrollDirection = horizontalScrollDirection;
            this._scrollNode = scrollNode;

            if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
              this._ngZone.runOutsideAngular(this._startScrollInterval);
            } else {
              this._stopScrolling();
            }
          }
        }
        /**
         * Stops any currently-running auto-scroll sequences.
         * @return {?}
         */

      }, {
        key: "_stopScrolling",
        value: function _stopScrolling() {
          this._stopScrollTimers.next();
        }
        /**
         * Caches the positions of the configured scrollable parents.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheParentPositions",
        value: function _cacheParentPositions() {
          var _this12 = this;

          this._parentPositions.clear();

          this._parentPositions.set(this._document, {
            scrollPosition:
            /** @type {?} */
            this._viewportRuler.getViewportScrollPosition()
          });

          this._scrollableElements.forEach(
          /**
          * @param {?} element
          * @return {?}
          */
          function (element) {
            /** @type {?} */
            var clientRect = getMutableClientRect(element); // We keep the ClientRect cached in two properties, because it's referenced in a lot of
            // performance-sensitive places and we want to avoid the extra lookups. The `element` is
            // guaranteed to always be in the `_scrollableElements` so this should always match.

            if (element === _this12.element) {
              _this12._clientRect = clientRect;
            }

            _this12._parentPositions.set(element, {
              scrollPosition: {
                top: element.scrollTop,
                left: element.scrollLeft
              },
              clientRect: clientRect
            });
          });
        }
        /**
         * Refreshes the position cache of the items and sibling containers.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheItemPositions",
        value: function _cacheItemPositions() {
          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          this._itemPositions = this._activeDraggables.map(
          /**
          * @param {?} drag
          * @return {?}
          */
          function (drag) {
            /** @type {?} */
            var elementToMeasure = drag.getVisibleElement();
            return {
              drag: drag,
              offset: 0,
              clientRect: getMutableClientRect(elementToMeasure)
            };
          }).sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
          });
        }
        /**
         * Resets the container to its initial state.
         * @private
         * @return {?}
         */

      }, {
        key: "_reset",
        value: function _reset() {
          var _this13 = this;

          this._isDragging = false;
          /** @type {?} */

          var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;

          /** @type {?} */
          styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap; // TODO(crisbeto): may have to wait for the animations to finish.

          this._activeDraggables.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.getRootElement().style.transform = '';
          });

          this._siblings.forEach(
          /**
          * @param {?} sibling
          * @return {?}
          */
          function (sibling) {
            return sibling._stopReceiving(_this13);
          });

          this._activeDraggables = [];
          this._itemPositions = [];
          this._previousSwap.drag = null;
          this._previousSwap.delta = 0;

          this._stopScrolling();

          this._viewportScrollSubscription.unsubscribe();

          this._parentPositions.clear();
        }
        /**
         * Gets the offset in pixels by which the items that aren't being dragged should be moved.
         * @private
         * @param {?} currentIndex Index of the item currently being dragged.
         * @param {?} siblings All of the items in the list.
         * @param {?} delta Direction in which the user is moving.
         * @return {?}
         */

      }, {
        key: "_getSiblingOffsetPx",
        value: function _getSiblingOffsetPx(currentIndex, siblings, delta) {
          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          /** @type {?} */

          var currentPosition = siblings[currentIndex].clientRect;
          /** @type {?} */

          var immediateSibling = siblings[currentIndex + delta * -1];
          /** @type {?} */

          var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;

          if (immediateSibling) {
            /** @type {?} */
            var start = isHorizontal ? 'left' : 'top';
            /** @type {?} */

            var end = isHorizontal ? 'right' : 'bottom'; // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.

            if (delta === -1) {
              siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            } else {
              siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
          }

          return siblingOffset;
        }
        /**
         * Gets the offset in pixels by which the item that is being dragged should be moved.
         * @private
         * @param {?} currentPosition Current position of the item.
         * @param {?} newPosition Position of the item where the current item should be moved.
         * @param {?} delta Direction in which the user is moving.
         * @return {?}
         */

      }, {
        key: "_getItemOffsetPx",
        value: function _getItemOffsetPx(currentPosition, newPosition, delta) {
          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          /** @type {?} */

          var itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top; // Account for differences in the item width/height.

          if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
          }

          return itemOffset;
        }
        /**
         * Gets the index of an item in the drop container, based on the position of the user's pointer.
         * @private
         * @param {?} item Item that is being sorted.
         * @param {?} pointerX Position of the user's pointer along the X axis.
         * @param {?} pointerY Position of the user's pointer along the Y axis.
         * @param {?=} delta Direction in which the user is moving their pointer.
         * @return {?}
         */

      }, {
        key: "_getItemIndexFromPointerPosition",
        value: function _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
          var _this14 = this;

          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          return findIndex(this._itemPositions,
          /**
          * @param {?} __0
          * @param {?} _
          * @param {?} array
          * @return {?}
          */
          function (_ref2, _, array) {
            var drag = _ref2.drag,
                clientRect = _ref2.clientRect;

            if (drag === item) {
              // If there's only one item left in the container, it must be
              // the dragged item itself so we use it as a reference.
              return array.length < 2;
            }

            if (delta) {
              /** @type {?} */
              var direction = isHorizontal ? delta.x : delta.y; // If the user is still hovering over the same item as last time, and they didn't change
              // the direction in which they're dragging, we don't consider it a direction swap.

              if (drag === _this14._previousSwap.drag && direction === _this14._previousSwap.delta) {
                return false;
              }
            }

            return isHorizontal ? // Round these down since most browsers report client rects with
            // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
            pointerX >= Math.floor(clientRect.left) && pointerX <= Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY <= Math.floor(clientRect.bottom);
          });
        }
        /**
         * Caches the current items in the list and their positions.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheItems",
        value: function _cacheItems() {
          this._activeDraggables = this._draggables.slice();

          this._cacheItemPositions();

          this._cacheParentPositions();
        }
        /**
         * Updates the internal state of the container after a scroll event has happened.
         * @private
         * @param {?} scrolledParent Element that was scrolled.
         * @param {?} newTop New top scroll position.
         * @param {?} newLeft New left scroll position.
         * @return {?}
         */

      }, {
        key: "_updateAfterScroll",
        value: function _updateAfterScroll(scrolledParent, newTop, newLeft) {
          var _this15 = this;

          // Used when figuring out whether an element is inside the scroll parent. If the scrolled
          // parent is the `document`, we use the `documentElement`, because IE doesn't support `contains`
          // on the `document`.

          /** @type {?} */
          var scrolledParentNode = scrolledParent === this._document ? scrolledParent.documentElement : scrolledParent;
          /** @type {?} */

          var scrollPosition =
          /** @type {?} */
          this._parentPositions.get(scrolledParent).scrollPosition;
          /** @type {?} */


          var topDifference = scrollPosition.top - newTop;
          /** @type {?} */

          var leftDifference = scrollPosition.left - newLeft; // Go through and update the cached positions of the scroll
          // parents that are inside the element that was scrolled.

          this._parentPositions.forEach(
          /**
          * @param {?} position
          * @param {?} node
          * @return {?}
          */
          function (position, node) {
            if (position.clientRect && scrolledParent !== node && scrolledParentNode.contains(node)) {
              adjustClientRect(position.clientRect, topDifference, leftDifference);
            }
          }); // Since we know the amount that the user has scrolled we can shift all of the client rectangles
          // ourselves. This is cheaper than re-measuring everything and we can avoid inconsistent
          // behavior where we might be measuring the element before its position has changed.


          this._itemPositions.forEach(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref3) {
            var clientRect = _ref3.clientRect;
            adjustClientRect(clientRect, topDifference, leftDifference);
          }); // We need two loops for this, because we want all of the cached
          // positions to be up-to-date before we re-sort the item.


          this._itemPositions.forEach(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref4) {
            var drag = _ref4.drag;

            if (_this15._dragDropRegistry.isDragging(drag)) {
              // We need to re-sort the item manually, because the pointer move
              // events won't be dispatched while the user is scrolling.
              drag._sortFromLastPointerPosition();
            }
          });

          scrollPosition.top = newTop;
          scrollPosition.left = newLeft;
        }
        /**
         * Checks whether the user's pointer is positioned over the container.
         * @param {?} x Pointer position along the X axis.
         * @param {?} y Pointer position along the Y axis.
         * @return {?}
         */

      }, {
        key: "_isOverContainer",
        value: function _isOverContainer(x, y) {
          return isInsideClientRect(this._clientRect, x, y);
        }
        /**
         * Figures out whether an item should be moved into a sibling
         * drop container, based on its current position.
         * @param {?} item Drag item that is being moved.
         * @param {?} x Position of the item along the X axis.
         * @param {?} y Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "_getSiblingContainerFromPosition",
        value: function _getSiblingContainerFromPosition(item, x, y) {
          return this._siblings.find(
          /**
          * @param {?} sibling
          * @return {?}
          */
          function (sibling) {
            return sibling._canReceive(item, x, y);
          });
        }
        /**
         * Checks whether the drop list can receive the passed-in item.
         * @param {?} item Item that is being dragged into the list.
         * @param {?} x Position of the item along the X axis.
         * @param {?} y Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "_canReceive",
        value: function _canReceive(item, x, y) {
          if (!isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
            return false;
          }
          /** @type {?} */


          var elementFromPoint =
          /** @type {?} */
          this._getShadowRoot().elementFromPoint(x, y); // If there's no element at the pointer position, then
          // the client rect is probably scrolled out of the view.


          if (!elementFromPoint) {
            return false;
          }
          /** @type {?} */


          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element); // The `ClientRect`, that we're using to find the container over which the user is
          // hovering, doesn't give us any information on whether the element has been scrolled
          // out of the view or whether it's overlapping with other containers. This means that
          // we could end up transferring the item into a container that's invisible or is positioned
          // below another one. We use the result from `elementFromPoint` to get the top-most element
          // at the pointer position and to find whether it's one of the intersecting drop containers.

          return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
        }
        /**
         * Called by one of the connected drop lists when a dragging sequence has started.
         * @param {?} sibling Sibling in which dragging has started.
         * @return {?}
         */

      }, {
        key: "_startReceiving",
        value: function _startReceiving(sibling) {
          /** @type {?} */
          var activeSiblings = this._activeSiblings;

          if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);

            this._cacheParentPositions();

            this._listenToScrollEvents();
          }
        }
        /**
         * Called by a connected drop list when dragging has stopped.
         * @param {?} sibling Sibling whose dragging has stopped.
         * @return {?}
         */

      }, {
        key: "_stopReceiving",
        value: function _stopReceiving(sibling) {
          this._activeSiblings["delete"](sibling);

          this._viewportScrollSubscription.unsubscribe();
        }
        /**
         * Starts listening to scroll events on the viewport.
         * Used for updating the internal state of the list.
         * @private
         * @return {?}
         */

      }, {
        key: "_listenToScrollEvents",
        value: function _listenToScrollEvents() {
          var _this16 = this;

          this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (_this16.isDragging()) {
              /** @type {?} */
              var target =
              /** @type {?} */
              event.target;
              /** @type {?} */

              var position = _this16._parentPositions.get(target);

              if (position) {
                /** @type {?} */
                var newTop;
                /** @type {?} */

                var newLeft;

                if (target === _this16._document) {
                  /** @type {?} */
                  var scrollPosition =
                  /** @type {?} */
                  _this16._viewportRuler.getViewportScrollPosition();

                  newTop = scrollPosition.top;
                  newLeft = scrollPosition.left;
                } else {
                  newTop =
                  /** @type {?} */
                  target.scrollTop;
                  newLeft =
                  /** @type {?} */
                  target.scrollLeft;
                }

                _this16._updateAfterScroll(target, newTop, newLeft);
              }
            } else if (_this16.isReceiving()) {
              _this16._cacheParentPositions();
            }
          });
        }
        /**
         * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
         * than saving it in property directly on init, because we want to resolve it as late as possible
         * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
         * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
         * @private
         * @return {?}
         */

      }, {
        key: "_getShadowRoot",
        value: function _getShadowRoot() {
          if (!this._cachedShadowRoot) {
            /** @type {?} */
            var shadowRoot =
            /** @type {?} */
            Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["_getShadowRoot"])(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element));
            this._cachedShadowRoot = shadowRoot || this._document;
          }

          return this._cachedShadowRoot;
        }
      }]);

      return DropListRef;
    }();

    if (false) {}
    /**
     * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
     * @param {?} clientRect `ClientRect` that should be updated.
     * @param {?} top Amount to add to the `top` position.
     * @param {?} left Amount to add to the `left` position.
     * @return {?}
     */


    function adjustClientRect(clientRect, top, left) {
      clientRect.top += top;
      clientRect.bottom = clientRect.top + clientRect.height;
      clientRect.left += left;
      clientRect.right = clientRect.left + clientRect.width;
    }
    /**
     * Checks whether the pointer coordinates are close to a ClientRect.
     * @param {?} rect ClientRect to check against.
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */


    function isPointerNearClientRect(rect, pointerX, pointerY) {
      var top = rect.top,
          right = rect.right,
          bottom = rect.bottom,
          left = rect.left,
          width = rect.width,
          height = rect.height;
      /** @type {?} */

      var xThreshold = width * DROP_PROXIMITY_THRESHOLD;
      /** @type {?} */

      var yThreshold = height * DROP_PROXIMITY_THRESHOLD;
      return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
    }
    /**
     * Finds the index of an item that matches a predicate function. Used as an equivalent
     * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
     * @template T
     * @param {?} array Array in which to look for matches.
     * @param {?} predicate Function used to determine whether an item is a match.
     * @return {?}
     */


    function findIndex(array, predicate) {
      for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
          return i;
        }
      }

      return -1;
    }
    /**
     * Checks whether some coordinates are within a `ClientRect`.
     * @param {?} clientRect ClientRect that is being checked.
     * @param {?} x Coordinates along the X axis.
     * @param {?} y Coordinates along the Y axis.
     * @return {?}
     */


    function isInsideClientRect(clientRect, x, y) {
      var top = clientRect.top,
          bottom = clientRect.bottom,
          left = clientRect.left,
          right = clientRect.right;
      return y >= top && y <= bottom && x >= left && x <= right;
    }
    /**
     * Gets a mutable version of an element's bounding `ClientRect`.
     * @param {?} element
     * @return {?}
     */


    function getMutableClientRect(element) {
      /** @type {?} */
      var clientRect = element.getBoundingClientRect(); // We need to clone the `clientRect` here, because all the values on it are readonly
      // and we need to be able to update them. Also we can't use a spread here, because
      // the values on a `ClientRect` aren't own properties. See:
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes

      return {
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height
      };
    }
    /**
     * Increments the vertical scroll position of a node.
     * @param {?} node Node whose scroll position should change.
     * @param {?} amount Amount of pixels that the `node` should be scrolled.
     * @return {?}
     */


    function incrementVerticalScroll(node, amount) {
      if (node === window) {
        /** @type {?} */
        node.scrollBy(0, amount);
      } else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.

        /** @type {?} */
        node.scrollTop += amount;
      }
    }
    /**
     * Increments the horizontal scroll position of a node.
     * @param {?} node Node whose scroll position should change.
     * @param {?} amount Amount of pixels that the `node` should be scrolled.
     * @return {?}
     */


    function incrementHorizontalScroll(node, amount) {
      if (node === window) {
        /** @type {?} */
        node.scrollBy(amount, 0);
      } else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.

        /** @type {?} */
        node.scrollLeft += amount;
      }
    }
    /**
     * Gets whether the vertical auto-scroll direction of a node.
     * @param {?} clientRect Dimensions of the node.
     * @param {?} pointerY Position of the user's pointer along the y axis.
     * @return {?}
     */


    function getVerticalScrollDirection(clientRect, pointerY) {
      var top = clientRect.top,
          bottom = clientRect.bottom,
          height = clientRect.height;
      /** @type {?} */

      var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;

      if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
        return 1
        /* UP */
        ;
      } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
        return 2
        /* DOWN */
        ;
      }

      return 0
      /* NONE */
      ;
    }
    /**
     * Gets whether the horizontal auto-scroll direction of a node.
     * @param {?} clientRect Dimensions of the node.
     * @param {?} pointerX Position of the user's pointer along the x axis.
     * @return {?}
     */


    function getHorizontalScrollDirection(clientRect, pointerX) {
      var left = clientRect.left,
          right = clientRect.right,
          width = clientRect.width;
      /** @type {?} */

      var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;

      if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
        return 1
        /* LEFT */
        ;
      } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
        return 2
        /* RIGHT */
        ;
      }

      return 0
      /* NONE */
      ;
    }
    /**
     * Gets the directions in which an element node should be scrolled,
     * assuming that the user's pointer is already within it scrollable region.
     * @param {?} element Element for which we should calculate the scroll direction.
     * @param {?} clientRect Bounding client rectangle of the element.
     * @param {?} pointerX Position of the user's pointer along the x axis.
     * @param {?} pointerY Position of the user's pointer along the y axis.
     * @return {?}
     */


    function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
      /** @type {?} */
      var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
      /** @type {?} */

      var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
      /** @type {?} */

      var verticalScrollDirection = 0
      /* NONE */
      ;
      /** @type {?} */

      var horizontalScrollDirection = 0
      /* NONE */
      ; // Note that we here we do some extra checks for whether the element is actually scrollable in
      // a certain direction and we only assign the scroll direction if it is. We do this so that we
      // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
      // This allows us to handle cases where the scroll regions of two scrollable elements overlap.

      if (computedVertical) {
        /** @type {?} */
        var scrollTop = element.scrollTop;

        if (computedVertical === 1
        /* UP */
        ) {
            if (scrollTop > 0) {
              verticalScrollDirection = 1
              /* UP */
              ;
            }
          } else if (element.scrollHeight - scrollTop > element.clientHeight) {
          verticalScrollDirection = 2
          /* DOWN */
          ;
        }
      }

      if (computedHorizontal) {
        /** @type {?} */
        var scrollLeft = element.scrollLeft;

        if (computedHorizontal === 1
        /* LEFT */
        ) {
            if (scrollLeft > 0) {
              horizontalScrollDirection = 1
              /* LEFT */
              ;
            }
          } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
          horizontalScrollDirection = 2
          /* RIGHT */
          ;
        }
      }

      return [verticalScrollDirection, horizontalScrollDirection];
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-drop-registry.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Event options that can be used to bind an active, capturing event.
     * @type {?}
     */


    var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
      passive: false,
      capture: true
    });
    /**
     * Service that keeps track of all the drag item and drop container
     * instances, and manages global event listeners on the `document`.
     * \@docs-private
     * @template I, C
     */
    // Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
    // to avoid circular imports. If we were to reference them here, importing the registry into the
    // classes that are registering themselves will introduce a circular import.

    var DragDropRegistry =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _ngZone
       * @param {?} _document
       */
      function DragDropRegistry(_ngZone, _document) {
        var _this17 = this;

        _classCallCheck(this, DragDropRegistry);

        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */

        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */

        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */

        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */

        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */

        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */

        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the viewport has been scrolled while the user is dragging an item.
         */

        this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */

        this._preventDefaultWhileDragging =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (_this17._activeDragInstances.size) {
            event.preventDefault();
          }
        };

        this._document = _document;
      }
      /**
       * Adds a drop container to the registry.
       * @param {?} drop
       * @return {?}
       */


      _createClass(DragDropRegistry, [{
        key: "registerDropContainer",
        value: function registerDropContainer(drop) {
          if (!this._dropInstances.has(drop)) {
            this._dropInstances.add(drop);
          }
        }
        /**
         * Adds a drag item instance to the registry.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "registerDragItem",
        value: function registerDragItem(drag) {
          var _this18 = this;

          this._dragInstances.add(drag); // The `touchmove` event gets bound once, ahead of time, because WebKit
          // won't preventDefault on a dynamically-added `touchmove` listener.
          // See https://bugs.webkit.org/show_bug.cgi?id=184250.


          if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              // The event handler has to be explicitly active,
              // because newer browsers make it passive by default.
              _this18._document.addEventListener('touchmove', _this18._preventDefaultWhileDragging, activeCapturingEventOptions);
            });
          }
        }
        /**
         * Removes a drop container from the registry.
         * @param {?} drop
         * @return {?}
         */

      }, {
        key: "removeDropContainer",
        value: function removeDropContainer(drop) {
          this._dropInstances["delete"](drop);
        }
        /**
         * Removes a drag item instance from the registry.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "removeDragItem",
        value: function removeDragItem(drag) {
          this._dragInstances["delete"](drag);

          this.stopDragging(drag);

          if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
          }
        }
        /**
         * Starts the dragging sequence for a drag instance.
         * @param {?} drag Drag instance which is being dragged.
         * @param {?} event Event that initiated the dragging.
         * @return {?}
         */

      }, {
        key: "startDragging",
        value: function startDragging(drag, event) {
          var _this19 = this;

          // Do not process the same drag twice to avoid memory leaks and redundant listeners
          if (this._activeDragInstances.has(drag)) {
            return;
          }

          this._activeDragInstances.add(drag);

          if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            var _isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */


            var moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */

            var upEvent = _isTouchEvent ? 'touchend' : 'mouseup'; // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.

            this._globalListeners.set(moveEvent, {
              handler:
              /**
              * @param {?} e
              * @return {?}
              */
              function handler(e) {
                return _this19.pointerMove.next(
                /** @type {?} */
                e);
              },
              options: activeCapturingEventOptions
            }).set(upEvent, {
              handler:
              /**
              * @param {?} e
              * @return {?}
              */
              function handler(e) {
                return _this19.pointerUp.next(
                /** @type {?} */
                e);
              },
              options: true
            }).set('scroll', {
              handler:
              /**
              * @param {?} e
              * @return {?}
              */
              function handler(e) {
                return _this19.scroll.next(e);
              },
              // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
              // the document. See https://github.com/angular/components/issues/17144.
              options: true
            }) // Preventing the default action on `mousemove` isn't enough to disable text selection
            // on Safari so we need to prevent the selection event as well. Alternatively this can
            // be done by setting `user-select: none` on the `body`, however it has causes a style
            // recalculation which can be expensive on pages with a lot of elements.
            .set('selectstart', {
              handler: this._preventDefaultWhileDragging,
              options: activeCapturingEventOptions
            });

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this19._globalListeners.forEach(
              /**
              * @param {?} config
              * @param {?} name
              * @return {?}
              */
              function (config, name) {
                _this19._document.addEventListener(name, config.handler, config.options);
              });
            });
          }
        }
        /**
         * Stops dragging a drag item instance.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "stopDragging",
        value: function stopDragging(drag) {
          this._activeDragInstances["delete"](drag);

          if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
          }
        }
        /**
         * Gets whether a drag item instance is currently being dragged.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "isDragging",
        value: function isDragging(drag) {
          return this._activeDragInstances.has(drag);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this20 = this;

          this._dragInstances.forEach(
          /**
          * @param {?} instance
          * @return {?}
          */
          function (instance) {
            return _this20.removeDragItem(instance);
          });

          this._dropInstances.forEach(
          /**
          * @param {?} instance
          * @return {?}
          */
          function (instance) {
            return _this20.removeDropContainer(instance);
          });

          this._clearGlobalListeners();

          this.pointerMove.complete();
          this.pointerUp.complete();
        }
        /**
         * Clears out the global event listeners from the `document`.
         * @private
         * @return {?}
         */

      }, {
        key: "_clearGlobalListeners",
        value: function _clearGlobalListeners() {
          var _this21 = this;

          this._globalListeners.forEach(
          /**
          * @param {?} config
          * @param {?} name
          * @return {?}
          */
          function (config, name) {
            _this21._document.removeEventListener(name, config.handler, config.options);
          });

          this._globalListeners.clear();
        }
      }]);

      return DragDropRegistry;
    }();

    DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
      return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };
    /** @nocollapse */


    DragDropRegistry.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    DragDropRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function DragDropRegistry_Factory() {
        return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      },
      token: DragDropRegistry,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-drop.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default configuration to be used when creating a `DragRef`.
     * @type {?}
     */


    var DEFAULT_CONFIG = {
      dragStartThreshold: 5,
      pointerDirectionChangeThreshold: 5
    };
    /**
     * Service that allows for drag-and-drop functionality to be attached to DOM elements.
     */

    var DragDrop =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       * @param {?} _dragDropRegistry
       */
      function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        _classCallCheck(this, DragDrop);

        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
      }
      /**
       * Turns an element into a draggable item.
       * @template T
       * @param {?} element Element to which to attach the dragging functionality.
       * @param {?=} config Object used to configure the dragging behavior.
       * @return {?}
       */


      _createClass(DragDrop, [{
        key: "createDrag",
        value: function createDrag(element) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG;
          return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
        }
        /**
         * Turns an element into a drop list.
         * @template T
         * @param {?} element Element to which to attach the drop list functionality.
         * @return {?}
         */

      }, {
        key: "createDropList",
        value: function createDropList(element) {
          return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
        }
      }]);

      return DragDrop;
    }();

    DragDrop.ɵfac = function DragDrop_Factory(t) {
      return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DragDropRegistry));
    };
    /** @nocollapse */


    DragDrop.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]
      }, {
        type: DragDropRegistry
      }];
    };
    /** @nocollapse */


    DragDrop.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function DragDrop_Factory() {
        return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DragDropRegistry));
      },
      token: DragDrop,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDrop, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]
        }, {
          type: DragDropRegistry
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-events.ts
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
     * Event emitted when the user starts dragging a draggable.
     * @record
     * @template T
     */


    function CdkDragStart() {}

    if (false) {}
    /**
     * Event emitted when the user releases an item, before any animations have started.
     * @record
     * @template T
     */


    function CdkDragRelease() {}

    if (false) {}
    /**
     * Event emitted when the user stops dragging a draggable.
     * @record
     * @template T
     */


    function CdkDragEnd() {}

    if (false) {}
    /**
     * Event emitted when the user moves an item into a new drop container.
     * @record
     * @template T, I
     */


    function CdkDragEnter() {}

    if (false) {}
    /**
     * Event emitted when the user removes an item from a
     * drop container by moving it into another one.
     * @record
     * @template T, I
     */


    function CdkDragExit() {}

    if (false) {}
    /**
     * Event emitted when the user drops a draggable item inside a drop container.
     * @record
     * @template T, O
     */


    function CdkDragDrop() {}

    if (false) {}
    /**
     * Event emitted as the user is dragging a draggable item.
     * @record
     * @template T
     */


    function CdkDragMove() {}

    if (false) {}
    /**
     * Event emitted when the user swaps the position of two drag items.
     * @record
     * @template T, I
     */


    function CdkDragSortEvent() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-parent.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
     * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
     * to avoid circular imports.
     * \@docs-private
     * @type {?}
     */


    var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_PARENT');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/directives/drag-handle.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Handle that can be used to drag and CdkDrag instance.
     */

    var CdkDragHandle =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?=} parentDrag
       */
      function CdkDragHandle(element, parentDrag) {
        _classCallCheck(this, CdkDragHandle);

        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */

        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
      }
      /**
       * Whether starting to drag through this handle is disabled.
       * @return {?}
       */


      _createClass(CdkDragHandle, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._stateChanges.complete();
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
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          this._stateChanges.next(this);
        }
      }]);

      return CdkDragHandle;
    }();

    CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
      return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 8));
    };

    CdkDragHandle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDragHandle,
      selectors: [["", "cdkDragHandle", ""]],
      hostAttrs: [1, "cdk-drag-handle"],
      inputs: {
        disabled: ["cdkDragHandleDisabled", "disabled"]
      }
    });
    /** @nocollapse */

    CdkDragHandle.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [CDK_DRAG_PARENT]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    CdkDragHandle.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragHandleDisabled']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragHandle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkDragHandle]',
          host: {
            'class': 'cdk-drag-handle'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_PARENT]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragHandleDisabled']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/directives/drag-placeholder.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Element that will be used as a template for the placeholder of a CdkDrag when
     * it is being dragged. The placeholder is displayed in place of the element being dragged.
     * @template T
     */


    var CdkDragPlaceholder =
    /**
     * @param {?} templateRef
     */
    function CdkDragPlaceholder(templateRef) {
      _classCallCheck(this, CdkDragPlaceholder);

      this.templateRef = templateRef;
    };

    CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
      return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    CdkDragPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDragPlaceholder,
      selectors: [["ng-template", "cdkDragPlaceholder", ""]],
      inputs: {
        data: "data"
      }
    });
    /** @nocollapse */

    CdkDragPlaceholder.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    CdkDragPlaceholder.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'ng-template[cdkDragPlaceholder]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/directives/drag-preview.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Element that will be used as a template for the preview
     * of a CdkDrag when it is being dragged.
     * @template T
     */


    var CdkDragPreview =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} templateRef
       */
      function CdkDragPreview(templateRef) {
        _classCallCheck(this, CdkDragPreview);

        this.templateRef = templateRef;
        this._matchSize = false;
      }
      /**
       * Whether the preview should preserve the same size as the item that is being dragged.
       * @return {?}
       */


      _createClass(CdkDragPreview, [{
        key: "matchSize",
        get: function get() {
          return this._matchSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._matchSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkDragPreview;
    }();

    CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
      return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    CdkDragPreview.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDragPreview,
      selectors: [["ng-template", "cdkDragPreview", ""]],
      inputs: {
        matchSize: "matchSize",
        data: "data"
      }
    });
    /** @nocollapse */

    CdkDragPreview.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    CdkDragPreview.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      matchSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPreview, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'ng-template[cdkDragPreview]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, {
        matchSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/directives/config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to configure the
     * behavior of the drag&drop-related components.
     * @type {?}
     */


    var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_CONFIG');
    /**
     * Object that can be used to configure the drag
     * items and drop lists within a module or a component.
     * @record
     */

    function DragDropConfig() {}

    if (false) {}
    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @return {?}
     */


    function CDK_DRAG_CONFIG_FACTORY() {
      return {
        dragStartThreshold: 5,
        pointerDirectionChangeThreshold: 5
      };
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/directives/drag.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that is used to provide a CdkDropList instance to CdkDrag.
     * Used for avoiding circular imports.
     * @type {?}
     */


    var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DROP_LIST');
    /**
     * Element that can be moved inside a CdkDropList container.
     * @template T
     */

    var CdkDrag =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?} dropContainer
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewContainerRef
       * @param {?} config
       * @param {?} _dir
       * @param {?} dragDrop
       * @param {?} _changeDetectorRef
       */
      function CdkDrag(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        var _this22 = this;

        _classCallCheck(this, CdkDrag);

        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */

        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */

        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */

        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */

        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */

        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */

        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */

        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          /** @type {?} */
          var subscription = _this22._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} movedEvent
          * @return {?}
          */
          function (movedEvent) {
            return {
              source: _this22,
              pointerPosition: movedEvent.pointerPosition,
              event: movedEvent.event,
              delta: movedEvent.delta,
              distance: movedEvent.distance
            };
          })).subscribe(observer);

          return (
            /**
            * @return {?}
            */
            function () {
              subscription.unsubscribe();
            }
          );
        });
        this._dragRef = dragDrop.createDrag(element, {
          dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
          pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5
        });
        this._dragRef.data = this;

        if (config) {
          this._assignDefaults(config);
        } // Note that usually the container is assigned when the drop list is picks up the item, but in
        // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
        // where there are no items on the first change detection pass, but the items get picked up as
        // soon as the user triggers another pass by dragging. This is a problem, because the item would
        // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
        // is too late since the two modes save different kinds of information. We work around it by
        // assigning the drop container both from here and the list.


        if (dropContainer) {
          this._dragRef._withDropContainer(dropContainer._dropListRef);

          dropContainer.addItem(this);
        }

        this._syncInputs(this._dragRef);

        this._handleEvents(this._dragRef);
      }
      /**
       * Whether starting to drag this element is disabled.
       * @return {?}
       */


      _createClass(CdkDrag, [{
        key: "getPlaceholderElement",

        /**
         * Returns the element that is being used as a placeholder
         * while the current element is being dragged.
         * @return {?}
         */
        value: function getPlaceholderElement() {
          return this._dragRef.getPlaceholderElement();
        }
        /**
         * Returns the root draggable element.
         * @return {?}
         */

      }, {
        key: "getRootElement",
        value: function getRootElement() {
          return this._dragRef.getRootElement();
        }
        /**
         * Resets a standalone drag item to its initial position.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this._dragRef.reset();
        }
        /**
         * Gets the pixel coordinates of the draggable outside of a drop container.
         * @return {?}
         */

      }, {
        key: "getFreeDragPosition",
        value: function getFreeDragPosition() {
          return this._dragRef.getFreeDragPosition();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this23 = this;

          // We need to wait for the zone to stabilize, in order for the reference
          // element to be in the proper place in the DOM. This is mostly relevant
          // for draggable elements inside portals since they get stamped out in
          // their original DOM position and then they get transferred to the portal.
          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this23._updateRootElement(); // Listen for any newly-added handles.


            _this23._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(_this23._handles), // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
            /**
            * @param {?} handles
            * @return {?}
            */
            function (handles) {
              /** @type {?} */
              var childHandleElements = handles.filter(
              /**
              * @param {?} handle
              * @return {?}
              */
              function (handle) {
                return handle._parentDrag === _this23;
              }).map(
              /**
              * @param {?} handle
              * @return {?}
              */
              function (handle) {
                return handle.element;
              });

              _this23._dragRef.withHandles(childHandleElements);
            }), // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(
            /**
            * @param {?} handles
            * @return {?}
            */
            function (handles) {
              return (
                /** @type {?} */
                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, _toConsumableArray(handles.map(
                /**
                * @param {?} item
                * @return {?}
                */
                function (item) {
                  return item._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(item));
                })))
              );
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this23._destroyed)).subscribe(
            /**
            * @param {?} handleInstance
            * @return {?}
            */
            function (handleInstance) {
              // Enabled/disable the handle that changed in the DragRef.

              /** @type {?} */
              var dragRef = _this23._dragRef;
              /** @type {?} */

              var handle = handleInstance.element.nativeElement;
              handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            });

            if (_this23.freeDragPosition) {
              _this23._dragRef.setFreeDragPosition(_this23.freeDragPosition);
            }
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var rootSelectorChange = changes['rootElementSelector'];
          /** @type {?} */

          var positionChange = changes['freeDragPosition']; // We don't have to react to the first change since it's being
          // handled in `ngAfterViewInit` where it needs to be deferred.

          if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
          } // Skip the first change since it's being handled in `ngAfterViewInit`.


          if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.dropContainer) {
            this.dropContainer.removeItem(this);
          }

          this._destroyed.next();

          this._destroyed.complete();

          this._dragRef.dispose();
        }
        /**
         * Syncs the root element with the `DragRef`.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRootElement",
        value: function _updateRootElement() {
          /** @type {?} */
          var element = this.element.nativeElement;
          /** @type {?} */

          var rootElement = this.rootElementSelector ? getClosestMatchingAncestor(element, this.rootElementSelector) : element;

          if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " + "Currently attached to \"".concat(rootElement.nodeName, "\"."));
          }

          this._dragRef.withRootElement(rootElement || element);
        }
        /**
         * Gets the boundary element, based on the `boundaryElement` value.
         * @private
         * @return {?}
         */

      }, {
        key: "_getBoundaryElement",
        value: function _getBoundaryElement() {
          /** @type {?} */
          var boundary = this.boundaryElement;

          if (!boundary) {
            return null;
          }

          if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
          }
          /** @type {?} */


          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundary);

          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
          }

          return element;
        }
        /**
         * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_syncInputs",
        value: function _syncInputs(ref) {
          var _this24 = this;

          ref.beforeStarted.subscribe(
          /**
          * @return {?}
          */
          function () {
            if (!ref.isDragging()) {
              /** @type {?} */
              var dir = _this24._dir;
              /** @type {?} */

              var dragStartDelay = _this24.dragStartDelay;
              /** @type {?} */

              var placeholder = _this24._placeholderTemplate ? {
                template: _this24._placeholderTemplate.templateRef,
                context: _this24._placeholderTemplate.data,
                viewContainer: _this24._viewContainerRef
              } : null;
              /** @type {?} */

              var preview = _this24._previewTemplate ? {
                template: _this24._previewTemplate.templateRef,
                context: _this24._previewTemplate.data,
                matchSize: _this24._previewTemplate.matchSize,
                viewContainer: _this24._viewContainerRef
              } : null;
              ref.disabled = _this24.disabled;
              ref.lockAxis = _this24.lockAxis;
              ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(dragStartDelay);
              ref.constrainPosition = _this24.constrainPosition;
              ref.previewClass = _this24.previewClass;
              ref.withBoundaryElement(_this24._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview);

              if (dir) {
                ref.withDirection(dir.value);
              }
            }
          });
        }
        /**
         * Handles the events from the underlying `DragRef`.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_handleEvents",
        value: function _handleEvents(ref) {
          var _this25 = this;

          ref.started.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this25.started.emit({
              source: _this25
            }); // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.


            _this25._changeDetectorRef.markForCheck();
          });
          ref.released.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this25.released.emit({
              source: _this25
            });
          });
          ref.ended.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this25.ended.emit({
              source: _this25,
              distance: event.distance
            }); // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.


            _this25._changeDetectorRef.markForCheck();
          });
          ref.entered.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this25.entered.emit({
              container: event.container.data,
              item: _this25,
              currentIndex: event.currentIndex
            });
          });
          ref.exited.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this25.exited.emit({
              container: event.container.data,
              item: _this25
            });
          });
          ref.dropped.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this25.dropped.emit({
              previousIndex: event.previousIndex,
              currentIndex: event.currentIndex,
              previousContainer: event.previousContainer.data,
              container: event.container.data,
              isPointerOverContainer: event.isPointerOverContainer,
              item: _this25,
              distance: event.distance
            });
          });
        }
        /**
         * Assigns the default input values based on a provided config object.
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_assignDefaults",
        value: function _assignDefaults(config) {
          var lockAxis = config.lockAxis,
              dragStartDelay = config.dragStartDelay,
              constrainPosition = config.constrainPosition,
              previewClass = config.previewClass,
              boundaryElement = config.boundaryElement,
              draggingDisabled = config.draggingDisabled,
              rootElementSelector = config.rootElementSelector;
          this.disabled = draggingDisabled == null ? false : draggingDisabled;
          this.dragStartDelay = dragStartDelay || 0;

          if (lockAxis) {
            this.lockAxis = lockAxis;
          }

          if (constrainPosition) {
            this.constrainPosition = constrainPosition;
          }

          if (previewClass) {
            this.previewClass = previewClass;
          }

          if (boundaryElement) {
            this.boundaryElement = boundaryElement;
          }

          if (rootElementSelector) {
            this.rootElementSelector = rootElementSelector;
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || this.dropContainer && this.dropContainer.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          this._dragRef.disabled = this._disabled;
        }
      }]);

      return CdkDrag;
    }();

    CdkDrag.ɵfac = function CdkDrag_Factory(t) {
      return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    CdkDrag.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDrag,
      selectors: [["", "cdkDrag", ""]],
      contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragPreview, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragPlaceholder, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragHandle, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._handles = _t);
        }
      },
      hostAttrs: [1, "cdk-drag"],
      hostVars: 4,
      hostBindings: function CdkDrag_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
        }
      },
      inputs: {
        disabled: ["cdkDragDisabled", "disabled"],
        dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
        lockAxis: ["cdkDragLockAxis", "lockAxis"],
        constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"],
        previewClass: ["cdkDragPreviewClass", "previewClass"],
        boundaryElement: ["cdkDragBoundary", "boundaryElement"],
        rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
        data: ["cdkDragData", "data"],
        freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"]
      },
      outputs: {
        started: "cdkDragStarted",
        released: "cdkDragReleased",
        ended: "cdkDragEnded",
        entered: "cdkDragEntered",
        exited: "cdkDragExited",
        dropped: "cdkDragDropped",
        moved: "cdkDragMoved"
      },
      exportAs: ["cdkDrag"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    CdkDrag.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [CDK_DROP_LIST]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [CDK_DRAG_CONFIG]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: DragDrop
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    CdkDrag.propDecorators = {
      _handles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [CdkDragHandle, {
          descendants: true
        }]
      }],
      _previewTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [CdkDragPreview]
      }],
      _placeholderTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [CdkDragPlaceholder]
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragData']
      }],
      lockAxis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragLockAxis']
      }],
      rootElementSelector: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragRootElement']
      }],
      boundaryElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragBoundary']
      }],
      dragStartDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragStartDelay']
      }],
      freeDragPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragFreeDragPosition']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragDisabled']
      }],
      constrainPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragConstrainPosition']
      }],
      previewClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragPreviewClass']
      }],
      started: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragStarted']
      }],
      released: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragReleased']
      }],
      ended: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragEnded']
      }],
      entered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragEntered']
      }],
      exited: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragExited']
      }],
      dropped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragDropped']
      }],
      moved: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragMoved']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDrag, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkDrag]',
          exportAs: 'cdkDrag',
          host: {
            'class': 'cdk-drag',
            '[class.cdk-drag-disabled]': 'disabled',
            '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
          },
          providers: [{
            provide: CDK_DRAG_PARENT,
            useExisting: CdkDrag
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DROP_LIST]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_CONFIG]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        started: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragStarted']
        }],
        released: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragReleased']
        }],
        ended: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragEnded']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragExited']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragDropped']
        }],
        moved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragMoved']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragDisabled']
        }],
        dragStartDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragStartDelay']
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragLockAxis']
        }],
        constrainPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragConstrainPosition']
        }],
        previewClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragPreviewClass']
        }],
        boundaryElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragBoundary']
        }],
        rootElementSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragRootElement']
        }],
        _handles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [CdkDragHandle, {
            descendants: true
          }]
        }],
        _previewTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [CdkDragPreview]
        }],
        _placeholderTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [CdkDragPlaceholder]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragData']
        }],
        freeDragPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragFreeDragPosition']
        }]
      });
    })();

    if (false) {}
    /**
     * Gets the closest ancestor of an element that matches a selector.
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */


    function getClosestMatchingAncestor(element, selector) {
      /** @type {?} */
      var currentElement =
      /** @type {?} */
      element.parentElement;

      while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
        /** @type {?} */
        currentElement.msMatchesSelector(selector)) {
          return currentElement;
        }

        currentElement = currentElement.parentElement;
      }

      return null;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/directives/drop-list-group.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
     * elements that are placed inside a `cdkDropListGroup` will be connected to each other
     * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
     * from `cdkDropList`.
     * @template T
     */


    var CdkDropListGroup =
    /*#__PURE__*/
    function () {
      function CdkDropListGroup() {
        _classCallCheck(this, CdkDropListGroup);

        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
      }
      /**
       * Whether starting a dragging sequence from inside this group is disabled.
       * @return {?}
       */


      _createClass(CdkDropListGroup, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._items.clear();
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
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkDropListGroup;
    }();

    CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
      return new (t || CdkDropListGroup)();
    };

    CdkDropListGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDropListGroup,
      selectors: [["", "cdkDropListGroup", ""]],
      inputs: {
        disabled: ["cdkDropListGroupDisabled", "disabled"]
      },
      exportAs: ["cdkDropListGroup"]
    });
    CdkDropListGroup.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListGroupDisabled']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropListGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkDropListGroup]',
          exportAs: 'cdkDropListGroup'
        }]
      }], function () {
        return [];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListGroupDisabled']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/directives/drop-list.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Counter used to generate unique ids for drop zones.
     * @type {?}
     */


    var _uniqueIdCounter = 0;
    /**
     * Internal compile-time-only representation of a `CdkDropList`.
     * Used to avoid circular import issues between the `CdkDropList` and the `CdkDrag`.
     * \@docs-private
     * @record
     */

    function CdkDropListInternal() {}

    var ɵ0 = undefined;
    /**
     * Container that wraps a set of draggable items.
     * @template T
     */

    var CdkDropList =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?} dragDrop
       * @param {?} _changeDetectorRef
       * @param {?=} _dir
       * @param {?=} _group
       * @param {?=} _scrollDispatcher
       * @param {?=} config
       */
      function CdkDropList(element, dragDrop, _changeDetectorRef, _dir, _group, _scrollDispatcher, config) {
        var _this26 = this;

        _classCallCheck(this, CdkDropList);

        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        this._scrollDispatcher = _scrollDispatcher;
        /**
         * Emits when the list has been destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */

        this.connectedTo = [];
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */

        this.id = "cdk-drop-list-".concat(_uniqueIdCounter++);
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */

        this.enterPredicate =
        /**
        * @return {?}
        */
        function () {
          return true;
        };
        /**
         * Emits when the user drops an item inside the container.
         */


        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */

        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */

        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */

        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Keeps track of the items that are registered with this container. Historically we used to
         * do this with a `ContentChildren` query, however queries don't handle transplanted views very
         * well which means that we can't handle cases like dragging the headers of a `mat-table`
         * correctly. What we do instead is to have the items register themselves with the container
         * and then we sort them based on their position in the DOM.
         */

        this._unsortedItems = new Set();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;

        if (config) {
          this._assignDefaults(config);
        }

        this._dropListRef.enterPredicate =
        /**
        * @param {?} drag
        * @param {?} drop
        * @return {?}
        */
        function (drag, drop) {
          return _this26.enterPredicate(drag.data, drop.data);
        };

        this._setupInputSyncSubscription(this._dropListRef);

        this._handleEvents(this._dropListRef);

        CdkDropList._dropLists.push(this);

        if (_group) {
          _group._items.add(this);
        }
      }
      /**
       * Whether starting a dragging sequence from this container is disabled.
       * @return {?}
       */


      _createClass(CdkDropList, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          // @breaking-change 11.0.0 Remove null check for _scrollDispatcher once it's required.
          if (this._scrollDispatcher) {
            /** @type {?} */
            var scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map(
            /**
            * @param {?} scrollable
            * @return {?}
            */
            function (scrollable) {
              return scrollable.getElementRef().nativeElement;
            });

            this._dropListRef.withScrollableParents(scrollableParents);
          }
        }
        /**
         * Registers an items with the drop list.
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "addItem",
        value: function addItem(item) {
          this._unsortedItems.add(item);

          if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
          }
        }
        /**
         * Removes an item from the drop list.
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "removeItem",
        value: function removeItem(item) {
          this._unsortedItems["delete"](item);

          if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
          }
        }
        /**
         * Gets the registered items in the list, sorted by their position in the DOM.
         * @return {?}
         */

      }, {
        key: "getSortedItems",
        value: function getSortedItems() {
          return Array.from(this._unsortedItems).sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            /** @type {?} */
            var documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement()); // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
            // tslint:disable-next-line:no-bitwise


            return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var index = CdkDropList._dropLists.indexOf(this);

          if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
          }

          if (this._group) {
            this._group._items["delete"](this);
          }

          this._unsortedItems.clear();

          this._dropListRef.dispose();

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Starts dragging an item.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         * @return {?}
         */

      }, {
        key: "start",
        value: function start() {
          this._dropListRef.start();
        }
        /**
         * Drops an item into this container.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         * @param {?} item Item being dropped into the container.
         * @param {?} currentIndex Index at which the item should be inserted.
         * @param {?} previousContainer Container from which the item got dragged in.
         * @param {?} isPointerOverContainer Whether the user's pointer was over the
         *    container when the item was dropped.
         *
         * @return {?}
         */

      }, {
        key: "drop",
        value: function drop(item, currentIndex, previousContainer, isPointerOverContainer) {
          this._dropListRef.drop(item._dragRef, currentIndex, previousContainer._dropListRef, isPointerOverContainer, {
            x: 0,
            y: 0
          });
        }
        /**
         * Emits an event to indicate that the user moved an item into the container.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         * @param {?} item Item that was moved into the container.
         * @param {?} pointerX Position of the item along the X axis.
         * @param {?} pointerY Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "enter",
        value: function enter(item, pointerX, pointerY) {
          this._dropListRef.enter(item._dragRef, pointerX, pointerY);
        }
        /**
         * Removes an item from the container after it was dragged into another container by the user.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         * @param {?} item Item that was dragged out.
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit(item) {
          this._dropListRef.exit(item._dragRef);
        }
        /**
         * Figures out the index of an item in the container.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         * @param {?} item Item whose index should be determined.
         * @return {?}
         */

      }, {
        key: "getItemIndex",
        value: function getItemIndex(item) {
          return this._dropListRef.getItemIndex(item._dragRef);
        }
        /**
         * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_setupInputSyncSubscription",
        value: function _setupInputSyncSubscription(ref) {
          var _this27 = this;

          if (this._dir) {
            this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return ref.withDirection(value);
            });
          }

          ref.beforeStarted.subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(_this27.connectedTo).map(
            /**
            * @param {?} drop
            * @return {?}
            */
            function (drop) {
              return typeof drop === 'string' ?
              /** @type {?} */
              CdkDropList._dropLists.find(
              /**
              * @param {?} list
              * @return {?}
              */
              function (list) {
                return list.id === drop;
              }) : drop;
            });

            if (_this27._group) {
              _this27._group._items.forEach(
              /**
              * @param {?} drop
              * @return {?}
              */
              function (drop) {
                if (siblings.indexOf(drop) === -1) {
                  siblings.push(drop);
                }
              });
            }

            ref.disabled = _this27.disabled;
            ref.lockAxis = _this27.lockAxis;
            ref.sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this27.sortingDisabled);
            ref.autoScrollDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this27.autoScrollDisabled);
            ref.connectedTo(siblings.filter(
            /**
            * @param {?} drop
            * @return {?}
            */
            function (drop) {
              return drop && drop !== _this27;
            }).map(
            /**
            * @param {?} list
            * @return {?}
            */
            function (list) {
              return list._dropListRef;
            })).withOrientation(_this27.orientation);
          });
        }
        /**
         * Handles events from the underlying DropListRef.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_handleEvents",
        value: function _handleEvents(ref) {
          var _this28 = this;

          ref.beforeStarted.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this28._syncItemsWithRef();

            _this28._changeDetectorRef.markForCheck();
          });
          ref.entered.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.entered.emit({
              container: _this28,
              item: event.item.data,
              currentIndex: event.currentIndex
            });
          });
          ref.exited.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.exited.emit({
              container: _this28,
              item: event.item.data
            });

            _this28._changeDetectorRef.markForCheck();
          });
          ref.sorted.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.sorted.emit({
              previousIndex: event.previousIndex,
              currentIndex: event.currentIndex,
              container: _this28,
              item: event.item.data
            });
          });
          ref.dropped.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.dropped.emit({
              previousIndex: event.previousIndex,
              currentIndex: event.currentIndex,
              previousContainer: event.previousContainer.data,
              container: event.container.data,
              item: event.item.data,
              isPointerOverContainer: event.isPointerOverContainer,
              distance: event.distance
            }); // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.


            _this28._changeDetectorRef.markForCheck();
          });
        }
        /**
         * Assigns the default input values based on a provided config object.
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_assignDefaults",
        value: function _assignDefaults(config) {
          var lockAxis = config.lockAxis,
              draggingDisabled = config.draggingDisabled,
              sortingDisabled = config.sortingDisabled,
              listAutoScrollDisabled = config.listAutoScrollDisabled,
              listOrientation = config.listOrientation;
          this.disabled = draggingDisabled == null ? false : draggingDisabled;
          this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
          this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
          this.orientation = listOrientation || 'vertical';

          if (lockAxis) {
            this.lockAxis = lockAxis;
          }
        }
        /**
         * Syncs up the registered drag items with underlying drop list ref.
         * @private
         * @return {?}
         */

      }, {
        key: "_syncItemsWithRef",
        value: function _syncItemsWithRef() {
          this._dropListRef.withItems(this.getSortedItems().map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item._dragRef;
          }));
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || !!this._group && this._group.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          // Usually we sync the directive and ref state right before dragging starts, in order to have
          // a single point of failure and to avoid having to use setters for everything. `disabled` is
          // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
          // the user in a disabled state, so we also need to sync it as it's being set.
          this._dropListRef.disabled = this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkDropList;
    }();

    CdkDropList.ɵfac = function CdkDropList_Factory(t) {
      return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkDropListGroup, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8));
    };

    CdkDropList.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDropList,
      selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
      hostAttrs: [1, "cdk-drop-list"],
      hostVars: 7,
      hostBindings: function CdkDropList_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
        }
      },
      inputs: {
        connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
        id: "id",
        enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
        disabled: ["cdkDropListDisabled", "disabled"],
        sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
        autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
        orientation: ["cdkDropListOrientation", "orientation"],
        lockAxis: ["cdkDropListLockAxis", "lockAxis"],
        data: ["cdkDropListData", "data"]
      },
      outputs: {
        dropped: "cdkDropListDropped",
        entered: "cdkDropListEntered",
        exited: "cdkDropListExited",
        sorted: "cdkDropListSorted"
      },
      exportAs: ["cdkDropList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Prevent child drop lists from picking up the same group as their parent.
      {
        provide: CdkDropListGroup,
        useValue: ɵ0
      }, {
        provide: CDK_DROP_LIST,
        useExisting: CdkDropList
      }])]
    });
    /**
     * Keeps track of the drop lists that are currently on the page.
     */

    CdkDropList._dropLists = [];
    /** @nocollapse */

    CdkDropList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: DragDrop
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: CdkDropListGroup,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [CDK_DRAG_CONFIG]
        }]
      }];
    };

    CdkDropList.propDecorators = {
      connectedTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListConnectedTo']
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListData']
      }],
      orientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListOrientation']
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      lockAxis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListLockAxis']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListDisabled']
      }],
      sortingDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListSortingDisabled']
      }],
      enterPredicate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListEnterPredicate']
      }],
      autoScrollDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListAutoScrollDisabled']
      }],
      dropped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDropListDropped']
      }],
      entered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDropListEntered']
      }],
      exited: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDropListExited']
      }],
      sorted: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDropListSorted']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkDropList], cdk-drop-list',
          exportAs: 'cdkDropList',
          providers: [// Prevent child drop lists from picking up the same group as their parent.
          {
            provide: CdkDropListGroup,
            useValue: ɵ0
          }, {
            provide: CDK_DROP_LIST,
            useExisting: CdkDropList
          }],
          host: {
            'class': 'cdk-drop-list',
            '[id]': 'id',
            '[class.cdk-drop-list-disabled]': 'disabled',
            '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
            '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: CdkDropListGroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_CONFIG]
          }]
        }];
      }, {
        connectedTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListConnectedTo']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        enterPredicate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListEnterPredicate']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListDropped']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListExited']
        }],
        sorted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListSorted']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListDisabled']
        }],
        sortingDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListSortingDisabled']
        }],
        autoScrollDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListAutoScrollDisabled']
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListOrientation']
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListLockAxis']
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListData']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-drop-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DragDropModule = function DragDropModule() {
      _classCallCheck(this, DragDropModule);
    };

    DragDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DragDropModule
    });
    DragDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DragDropModule_Factory(t) {
        return new (t || DragDropModule)();
      },
      providers: [DragDrop]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DragDropModule, {
        declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
        exports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
          exports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
          providers: [DragDrop]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=drag-drop.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js ***!
    \***************************************************************************/

  /*! exports provided: MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText, ɵTileCoordinator, ɵangular_material_src_material_grid_list_grid_list_a */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015GridListJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function () {
      return MatGridAvatarCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridList", function () {
      return MatGridList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridListModule", function () {
      return MatGridListModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTile", function () {
      return MatGridTile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function () {
      return MatGridTileFooterCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function () {
      return MatGridTileHeaderCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileText", function () {
      return MatGridTileText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵTileCoordinator", function () {
      return TileCoordinator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_grid_list_grid_list_a", function () {
      return MAT_GRID_LIST;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-list-base.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to provide a grid list to a tile and to avoid circular imports.
     * \@docs-private
     * @type {?}
     */


    var _c0 = ["*"];
    var _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
    var _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
    var MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');
    /**
     * Base interface for a `MatGridList`.
     * \@docs-private
     * @record
     */

    function MatGridListBase() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-tile.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatGridTile =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?=} _gridList
       */
      function MatGridTile(_element, _gridList) {
        _classCallCheck(this, MatGridTile);

        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
      }
      /**
       * Amount of rows that the grid tile takes up.
       * @return {?}
       */


      _createClass(MatGridTile, [{
        key: "_setStyle",

        /**
         * Sets the style of the grid-tile element.  Needs to be set manually to avoid
         * "Changed after checked" errors that would occur with HostBinding.
         * @param {?} property
         * @param {?} value
         * @return {?}
         */
        value: function _setStyle(property, value) {
          /** @type {?} */
          this._element.nativeElement.style[property] = value;
        }
      }, {
        key: "rowspan",
        get: function get() {
          return this._rowspan;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
        }
        /**
         * Amount of columns that the grid tile takes up.
         * @return {?}
         */

      }, {
        key: "colspan",
        get: function get() {
          return this._colspan;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
        }
      }]);

      return MatGridTile;
    }();

    MatGridTile.ɵfac = function MatGridTile_Factory(t) {
      return new (t || MatGridTile)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_GRID_LIST, 8));
    };

    MatGridTile.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatGridTile,
      selectors: [["mat-grid-tile"]],
      hostAttrs: [1, "mat-grid-tile"],
      hostVars: 2,
      hostBindings: function MatGridTile_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
        }
      },
      inputs: {
        rowspan: "rowspan",
        colspan: "colspan"
      },
      exportAs: ["matGridTile"],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "mat-figure"]],
      template: function MatGridTile_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatGridTile.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_GRID_LIST]
        }]
      }];
    };

    MatGridTile.propDecorators = {
      rowspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      colspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTile, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-grid-tile',
          exportAs: 'matGridTile',
          host: {
            'class': 'mat-grid-tile',
            // Ensures that the "rowspan" and "colspan" input value is reflected in
            // the DOM. This is needed for the grid-tile harness.
            '[attr.rowspan]': 'rowspan',
            '[attr.colspan]': 'colspan'
          },
          template: "<!-- TODO(kara): Revisit why this is a figure.-->\n<figure class=\"mat-figure\">\n  <ng-content></ng-content>\n</figure>",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_GRID_LIST]
          }]
        }];
      }, {
        rowspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}

    var MatGridTileText =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       */
      function MatGridTileText(_element) {
        _classCallCheck(this, MatGridTileText);

        this._element = _element;
      }
      /**
       * @return {?}
       */


      _createClass(MatGridTileText, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
        }
      }]);

      return MatGridTileText;
    }();

    MatGridTileText.ɵfac = function MatGridTileText_Factory(t) {
      return new (t || MatGridTileText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    MatGridTileText.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatGridTileText,
      selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]],
      contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
        }
      },
      ngContentSelectors: _c2,
      decls: 4,
      vars: 0,
      consts: [[1, "mat-grid-list-text"]],
      template: function MatGridTileText_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatGridTileText.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    MatGridTileText.propDecorators = {
      _lines: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileText, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-grid-tile-header, mat-grid-tile-footer',
          template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        _lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatGridAvatarCssMatStyler = function MatGridAvatarCssMatStyler() {
      _classCallCheck(this, MatGridAvatarCssMatStyler);
    };

    MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) {
      return new (t || MatGridAvatarCssMatStyler)();
    };

    MatGridAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatGridAvatarCssMatStyler,
      selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]],
      hostAttrs: [1, "mat-grid-avatar"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridAvatarCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-grid-avatar], [matGridAvatar]',
          host: {
            'class': 'mat-grid-avatar'
          }
        }]
      }], null, null);
    })();
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatGridTileHeaderCssMatStyler = function MatGridTileHeaderCssMatStyler() {
      _classCallCheck(this, MatGridTileHeaderCssMatStyler);
    };

    MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) {
      return new (t || MatGridTileHeaderCssMatStyler)();
    };

    MatGridTileHeaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatGridTileHeaderCssMatStyler,
      selectors: [["mat-grid-tile-header"]],
      hostAttrs: [1, "mat-grid-tile-header"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileHeaderCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-grid-tile-header',
          host: {
            'class': 'mat-grid-tile-header'
          }
        }]
      }], null, null);
    })();
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatGridTileFooterCssMatStyler = function MatGridTileFooterCssMatStyler() {
      _classCallCheck(this, MatGridTileFooterCssMatStyler);
    };

    MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) {
      return new (t || MatGridTileFooterCssMatStyler)();
    };

    MatGridTileFooterCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatGridTileFooterCssMatStyler,
      selectors: [["mat-grid-tile-footer"]],
      hostAttrs: [1, "mat-grid-tile-footer"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileFooterCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-grid-tile-footer',
          host: {
            'class': 'mat-grid-tile-footer'
          }
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/tile-coordinator.ts
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
     * Interface describing a tile.
     * \@docs-private
     * @record
     */


    function Tile() {}

    if (false) {}
    /**
     * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
     * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
     * because the tiles can have a rowspan.
     *
     * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
     * large enough to accommodate it so that the tiles still render in the same order in which they
     * are given.
     *
     * The basis of the algorithm is the use of an array to track the already placed tiles. Each
     * element of the array corresponds to a column, and the value indicates how many cells in that
     * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
     * decrements each value in the tracking array (indicating that the column is one cell closer to
     * being free).
     *
     * \@docs-private
     */


    var TileCoordinator =
    /*#__PURE__*/
    function () {
      function TileCoordinator() {
        _classCallCheck(this, TileCoordinator);

        /**
         * Index at which the search for the next gap will start.
         */
        this.columnIndex = 0;
        /**
         * The current row index.
         */

        this.rowIndex = 0;
      }
      /**
       * Gets the total number of rows occupied by tiles
       * @return {?}
       */


      _createClass(TileCoordinator, [{
        key: "update",

        /**
         * Updates the tile positions.
         * @param {?} numColumns Amount of columns in the grid.
         * @param {?} tiles Tiles to be positioned.
         * @return {?}
         */
        value: function update(numColumns, tiles) {
          var _this29 = this;

          this.columnIndex = 0;
          this.rowIndex = 0;
          this.tracker = new Array(numColumns);
          this.tracker.fill(0, 0, this.tracker.length);
          this.positions = tiles.map(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            return _this29._trackTile(tile);
          });
        }
        /**
         * Calculates the row and col position of a tile.
         * @private
         * @param {?} tile
         * @return {?}
         */

      }, {
        key: "_trackTile",
        value: function _trackTile(tile) {
          // Find a gap large enough for this tile.

          /** @type {?} */
          var gapStartIndex = this._findMatchingGap(tile.colspan); // Place tile in the resulting gap.


          this._markTilePosition(gapStartIndex, tile); // The next time we look for a gap, the search will start at columnIndex, which should be
          // immediately after the tile that has just been placed.


          this.columnIndex = gapStartIndex + tile.colspan;
          return new TilePosition(this.rowIndex, gapStartIndex);
        }
        /**
         * Finds the next available space large enough to fit the tile.
         * @private
         * @param {?} tileCols
         * @return {?}
         */

      }, {
        key: "_findMatchingGap",
        value: function _findMatchingGap(tileCols) {
          if (tileCols > this.tracker.length) {
            throw Error("mat-grid-list: tile with colspan ".concat(tileCols, " is wider than ") + "grid with cols=\"".concat(this.tracker.length, "\"."));
          } // Start index is inclusive, end index is exclusive.

          /** @type {?} */


          var gapStartIndex = -1;
          /** @type {?} */

          var gapEndIndex = -1; // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.

          do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapStartIndex = this.tracker.indexOf(0, this.columnIndex); // If there are no more empty spaces in this row at all, move on to the next row.

            if (gapStartIndex == -1) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapEndIndex = this._findGapEndIndex(gapStartIndex); // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.

            this.columnIndex = gapStartIndex + 1; // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
            // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
          } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0); // If we still didn't manage to find a gap, ensure that the index is
          // at least zero so the tile doesn't get pulled out of the grid.


          return Math.max(gapStartIndex, 0);
        }
        /**
         * Move "down" to the next row.
         * @private
         * @return {?}
         */

      }, {
        key: "_nextRow",
        value: function _nextRow() {
          this.columnIndex = 0;
          this.rowIndex++; // Decrement all spaces by one to reflect moving down one row.

          for (var i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
          }
        }
        /**
         * Finds the end index (exclusive) of a gap given the index from which to start looking.
         * The gap ends when a non-zero value is found.
         * @private
         * @param {?} gapStartIndex
         * @return {?}
         */

      }, {
        key: "_findGapEndIndex",
        value: function _findGapEndIndex(gapStartIndex) {
          for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
              return i;
            }
          } // The gap ends with the end of the row.


          return this.tracker.length;
        }
        /**
         * Update the tile tracker to account for the given tile in the given space.
         * @private
         * @param {?} start
         * @param {?} tile
         * @return {?}
         */

      }, {
        key: "_markTilePosition",
        value: function _markTilePosition(start, tile) {
          for (var i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
          }
        }
      }, {
        key: "rowCount",
        get: function get() {
          return this.rowIndex + 1;
        }
        /**
         * Gets the total span of rows occupied by tiles.
         * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
         * @return {?}
         */

      }, {
        key: "rowspan",
        get: function get() {
          /** @type {?} */
          var lastRowMax = Math.max.apply(Math, _toConsumableArray(this.tracker)); // if any of the tiles has a rowspan that pushes it beyond the total row count,
          // add the difference to the rowcount

          return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
        }
      }]);

      return TileCoordinator;
    }();

    if (false) {}
    /**
     * Simple data structure for tile position (row, col).
     * \@docs-private
     */


    var TilePosition =
    /**
     * @param {?} row
     * @param {?} col
     */
    function TilePosition(row, col) {
      _classCallCheck(this, TilePosition);

      this.row = row;
      this.col = col;
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/tile-styler.ts
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
     * RegExp that can be used to check whether a value will
     * be allowed inside a CSS `calc()` expression.
     * @type {?}
     */


    var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
    /**
     * Sets the style properties for an individual tile, given the position calculated by the
     * Tile Coordinator.
     * \@docs-private
     * @abstract
     */

    var TileStyler =
    /*#__PURE__*/
    function () {
      function TileStyler() {
        _classCallCheck(this, TileStyler);

        this._rows = 0;
        this._rowspan = 0;
      }
      /**
       * Adds grid-list layout info once it is available. Cannot be processed in the constructor
       * because these properties haven't been calculated by that point.
       *
       * @param {?} gutterSize Size of the grid's gutter.
       * @param {?} tracker Instance of the TileCoordinator.
       * @param {?} cols Amount of columns in the grid.
       * @param {?} direction Layout direction of the grid.
       * @return {?}
       */


      _createClass(TileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          this._gutterSize = normalizeUnits(gutterSize);
          this._rows = tracker.rowCount;
          this._rowspan = tracker.rowspan;
          this._cols = cols;
          this._direction = direction;
        }
        /**
         * Computes the amount of space a single 1x1 tile would take up (width or height).
         * Used as a basis for other calculations.
         * @param {?} sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
         * @param {?} gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
         * @return {?} The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
         */

      }, {
        key: "getBaseTileSize",
        value: function getBaseTileSize(sizePercent, gutterFraction) {
          // Take the base size percent (as would be if evenly dividing the size between cells),
          // and then subtracting the size of one gutter. However, since there are no gutters on the
          // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
          // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
          // edge evenly among the cells).
          return "(".concat(sizePercent, "% - (").concat(this._gutterSize, " * ").concat(gutterFraction, "))");
        }
        /**
         * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
         * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param {?} offset Number of tiles that have already been rendered in the row/column.
         * @return {?} Position of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTilePosition",
        value: function getTilePosition(baseSize, offset) {
          // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
          // row/column (offset).
          return offset === 0 ? '0' : calc("(".concat(baseSize, " + ").concat(this._gutterSize, ") * ").concat(offset));
        }
        /**
         * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
         * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param {?} span The tile's rowspan or colspan.
         * @return {?} Size of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTileSize",
        value: function getTileSize(baseSize, span) {
          return "(".concat(baseSize, " * ").concat(span, ") + (").concat(span - 1, " * ").concat(this._gutterSize, ")");
        }
        /**
         * Sets the style properties to be applied to a tile for the given row and column index.
         * @param {?} tile Tile to which to apply the styling.
         * @param {?} rowIndex Index of the tile's row.
         * @param {?} colIndex Index of the tile's column.
         * @return {?}
         */

      }, {
        key: "setStyle",
        value: function setStyle(tile, rowIndex, colIndex) {
          // Percent of the available horizontal space that one column takes up.

          /** @type {?} */
          var percentWidthPerTile = 100 / this._cols; // Fraction of the vertical gutter size that each column takes up.
          // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.

          /** @type {?} */

          var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
          this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
          this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        }
        /**
         * Sets the horizontal placement of the tile in the list.
         * @param {?} tile
         * @param {?} colIndex
         * @param {?} percentWidth
         * @param {?} gutterWidth
         * @return {?}
         */

      }, {
        key: "setColStyles",
        value: function setColStyles(tile, colIndex, percentWidth, gutterWidth) {
          // Base horizontal size of a column.

          /** @type {?} */
          var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth); // The width and horizontal position of each tile is always calculated the same way, but the
          // height and vertical position depends on the rowMode.

          /** @type {?} */

          var side = this._direction === 'rtl' ? 'right' : 'left';

          tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));

          tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
        }
        /**
         * Calculates the total size taken up by gutters across one axis of a list.
         * @return {?}
         */

      }, {
        key: "getGutterSpan",
        value: function getGutterSpan() {
          return "".concat(this._gutterSize, " * (").concat(this._rowspan, " - 1)");
        }
        /**
         * Calculates the total size taken up by tiles across one axis of a list.
         * @param {?} tileHeight Height of the tile.
         * @return {?}
         */

      }, {
        key: "getTileSpan",
        value: function getTileSpan(tileHeight) {
          return "".concat(this._rowspan, " * ").concat(this.getTileSize(tileHeight, 1));
        }
        /**
         * Calculates the computed height and returns the correct style property to set.
         * This method can be implemented by each type of TileStyler.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return null;
        }
      }]);

      return TileStyler;
    }();

    if (false) {}
    /**
     * This type of styler is instantiated when the user passes in a fixed row height.
     * Example `<mat-grid-list cols="3" rowHeight="100px">`
     * \@docs-private
     */


    var FixedTileStyler =
    /*#__PURE__*/
    function (_TileStyler) {
      _inherits(FixedTileStyler, _TileStyler);

      var _super = _createSuper(FixedTileStyler);

      /**
       * @param {?} fixedRowHeight
       */
      function FixedTileStyler(fixedRowHeight) {
        var _this30;

        _classCallCheck(this, FixedTileStyler);

        _this30 = _super.call(this);
        _this30.fixedRowHeight = fixedRowHeight;
        return _this30;
      }
      /**
       * @param {?} gutterSize
       * @param {?} tracker
       * @param {?} cols
       * @param {?} direction
       * @return {?}
       */


      _createClass(FixedTileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          _get(_getPrototypeOf(FixedTileStyler.prototype), "init", this).call(this, gutterSize, tracker, cols, direction);

          this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);

          if (!cssCalcAllowedValue.test(this.fixedRowHeight)) {
            throw Error("Invalid value \"".concat(this.fixedRowHeight, "\" set as rowHeight."));
          }
        }
        /**
         * @param {?} tile
         * @param {?} rowIndex
         * @return {?}
         */

      }, {
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex) {
          tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['height', calc("".concat(this.getTileSpan(this.fixedRowHeight), " + ").concat(this.getGutterSpan()))];
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['height', null]);

          if (list._tiles) {
            list._tiles.forEach(
            /**
            * @param {?} tile
            * @return {?}
            */
            function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);

      return FixedTileStyler;
    }(TileStyler);

    if (false) {}
    /**
     * This type of styler is instantiated when the user passes in a width:height ratio
     * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
     * \@docs-private
     */


    var RatioTileStyler =
    /*#__PURE__*/
    function (_TileStyler2) {
      _inherits(RatioTileStyler, _TileStyler2);

      var _super2 = _createSuper(RatioTileStyler);

      /**
       * @param {?} value
       */
      function RatioTileStyler(value) {
        var _this31;

        _classCallCheck(this, RatioTileStyler);

        _this31 = _super2.call(this);

        _this31._parseRatio(value);

        return _this31;
      }
      /**
       * @param {?} tile
       * @param {?} rowIndex
       * @param {?} percentWidth
       * @param {?} gutterWidth
       * @return {?}
       */


      _createClass(RatioTileStyler, [{
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
          /** @type {?} */
          var percentHeightPerTile = percentWidth / this.rowHeightRatio;
          this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth); // Use padding-top and margin-top to maintain the given aspect ratio, as
          // a percentage-based value for these properties is applied versus the *width* of the
          // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties

          tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));

          tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['paddingBottom', calc("".concat(this.getTileSpan(this.baseTileHeight), " + ").concat(this.getGutterSpan()))];
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['paddingBottom', null]);

          list._tiles.forEach(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            tile._setStyle('marginTop', null);

            tile._setStyle('paddingTop', null);
          });
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_parseRatio",
        value: function _parseRatio(value) {
          /** @type {?} */
          var ratioParts = value.split(':');

          if (ratioParts.length !== 2) {
            throw Error("mat-grid-list: invalid ratio given for row-height: \"".concat(value, "\""));
          }

          this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
        }
      }]);

      return RatioTileStyler;
    }(TileStyler);

    if (false) {}
    /**
     * This type of styler is instantiated when the user selects a "fit" row height mode.
     * In other words, the row height will reflect the total height of the container divided
     * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
     *
     * \@docs-private
     */


    var FitTileStyler =
    /*#__PURE__*/
    function (_TileStyler3) {
      _inherits(FitTileStyler, _TileStyler3);

      var _super3 = _createSuper(FitTileStyler);

      function FitTileStyler() {
        _classCallCheck(this, FitTileStyler);

        return _super3.apply(this, arguments);
      }

      _createClass(FitTileStyler, [{
        key: "setRowStyles",

        /**
         * @param {?} tile
         * @param {?} rowIndex
         * @return {?}
         */
        value: function setRowStyles(tile, rowIndex) {
          // Percent of the available vertical space that one row takes up.

          /** @type {?} */
          var percentHeightPerTile = 100 / this._rowspan; // Fraction of the horizontal gutter size that each column takes up.

          /** @type {?} */

          var gutterHeightPerTile = (this._rows - 1) / this._rows; // Base vertical size of a column.

          /** @type {?} */

          var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);

          tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          if (list._tiles) {
            list._tiles.forEach(
            /**
            * @param {?} tile
            * @return {?}
            */
            function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);

      return FitTileStyler;
    }(TileStyler);
    /**
     * Wraps a CSS string in a calc function
     * @param {?} exp
     * @return {?}
     */


    function calc(exp) {
      return "calc(".concat(exp, ")");
    }
    /**
     * Appends pixels to a CSS string if no units are given.
     * @param {?} value
     * @return {?}
     */


    function normalizeUnits(value) {
      return value.match(/([A-Za-z%]+)$/) ? value : "".concat(value, "px");
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-list.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(kara): Conditional (responsive) column count / row size.
    // TODO(kara): Re-layout on window resize / media change (debounced).
    // TODO(kara): gridTileHeader and gridTileFooter.

    /** @type {?} */


    var MAT_FIT_MODE = 'fit';

    var MatGridList =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?} _dir
       */
      function MatGridList(_element, _dir) {
        _classCallCheck(this, MatGridList);

        this._element = _element;
        this._dir = _dir;
        /**
         * The amount of space between tiles. This will be something like '5px' or '2em'.
         */

        this._gutter = '1px';
      }
      /**
       * Amount of columns in the grid list.
       * @return {?}
       */


      _createClass(MatGridList, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._checkCols();

          this._checkRowHeight();
        }
        /**
         * The layout calculation is fairly cheap if nothing changes, so there's little cost
         * to run it frequently.
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this._layoutTiles();
        }
        /**
         * Throw a friendly error if cols property is missing
         * @private
         * @return {?}
         */

      }, {
        key: "_checkCols",
        value: function _checkCols() {
          if (!this.cols) {
            throw Error("mat-grid-list: must pass in number of columns. " + "Example: <mat-grid-list cols=\"3\">");
          }
        }
        /**
         * Default to equal width:height if rowHeight property is missing
         * @private
         * @return {?}
         */

      }, {
        key: "_checkRowHeight",
        value: function _checkRowHeight() {
          if (!this._rowHeight) {
            this._setTileStyler('1:1');
          }
        }
        /**
         * Creates correct Tile Styler subtype based on rowHeight passed in by user
         * @private
         * @param {?} rowHeight
         * @return {?}
         */

      }, {
        key: "_setTileStyler",
        value: function _setTileStyler(rowHeight) {
          if (this._tileStyler) {
            this._tileStyler.reset(this);
          }

          if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
          } else if (rowHeight && rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
          } else {
            this._tileStyler = new FixedTileStyler(rowHeight);
          }
        }
        /**
         * Computes and applies the size and position for all children grid tiles.
         * @private
         * @return {?}
         */

      }, {
        key: "_layoutTiles",
        value: function _layoutTiles() {
          var _this32 = this;

          if (!this._tileCoordinator) {
            this._tileCoordinator = new TileCoordinator();
          }
          /** @type {?} */


          var tracker = this._tileCoordinator;
          /** @type {?} */

          var tiles = this._tiles.filter(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            return !tile._gridList || tile._gridList === _this32;
          });
          /** @type {?} */


          var direction = this._dir ? this._dir.value : 'ltr';

          this._tileCoordinator.update(this.cols, tiles);

          this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);

          tiles.forEach(
          /**
          * @param {?} tile
          * @param {?} index
          * @return {?}
          */
          function (tile, index) {
            /** @type {?} */
            var pos = tracker.positions[index];

            _this32._tileStyler.setStyle(tile, pos.row, pos.col);
          });

          this._setListStyle(this._tileStyler.getComputedHeight());
        }
        /**
         * Sets style on the main grid-list element, given the style name and value.
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "_setListStyle",
        value: function _setListStyle(style) {
          if (style) {
            /** @type {?} */
            this._element.nativeElement.style[style[0]] = style[1];
          }
        }
      }, {
        key: "cols",
        get: function get() {
          return this._cols;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
        }
        /**
         * Size of the grid list's gutter in pixels.
         * @return {?}
         */

      }, {
        key: "gutterSize",
        get: function get() {
          return this._gutter;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._gutter = "".concat(value == null ? '' : value);
        }
        /**
         * Set internal representation of row height from the user-provided value.
         * @return {?}
         */

      }, {
        key: "rowHeight",
        get: function get() {
          return this._rowHeight;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = "".concat(value == null ? '' : value);

          if (newValue !== this._rowHeight) {
            this._rowHeight = newValue;

            this._setTileStyler(this._rowHeight);
          }
        }
      }]);

      return MatGridList;
    }();

    MatGridList.ɵfac = function MatGridList_Factory(t) {
      return new (t || MatGridList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
    };

    MatGridList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatGridList,
      selectors: [["mat-grid-list"]],
      contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatGridTile, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
        }
      },
      hostAttrs: [1, "mat-grid-list"],
      hostVars: 1,
      hostBindings: function MatGridList_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cols", ctx.cols);
        }
      },
      inputs: {
        cols: "cols",
        gutterSize: "gutterSize",
        rowHeight: "rowHeight"
      },
      exportAs: ["matGridList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_GRID_LIST,
        useExisting: MatGridList
      }])],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      template: function MatGridList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatGridList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatGridList.propDecorators = {
      _tiles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatGridTile, {
          descendants: true
        }]
      }],
      cols: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      gutterSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      rowHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-grid-list',
          exportAs: 'matGridList',
          template: "<div>\n  <ng-content></ng-content>\n</div>",
          host: {
            'class': 'mat-grid-list',
            // Ensures that the "cols" input value is reflected in the DOM. This is
            // needed for the grid-list harness.
            '[attr.cols]': 'cols'
          },
          providers: [{
            provide: MAT_GRID_LIST,
            useExisting: MatGridList
          }],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        cols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gutterSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _tiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatGridTile, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-list-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatGridListModule = function MatGridListModule() {
      _classCallCheck(this, MatGridListModule);
    };

    MatGridListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatGridListModule
    });
    MatGridListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatGridListModule_Factory(t) {
        return new (t || MatGridListModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatGridListModule, {
        declarations: function declarations() {
          return [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          exports: [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
          declarations: [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=grid-list.js.map

    /***/

  },

  /***/
  "./node_modules/angular2gridster/__ivy_ngcc__/fesm2015/angular2gridster.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/angular2gridster/__ivy_ngcc__/fesm2015/angular2gridster.js ***!
    \*********************************************************************************/

  /*! exports provided: GridListItem, GridsterComponent, GridsterItemComponent, GridsterItemPrototypeDirective, GridsterModule, GridsterOptions, GridsterPrototypeService, GridsterService */

  /***/
  function node_modulesAngular2gridster__ivy_ngcc__Fesm2015Angular2gridsterJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridListItem", function () {
      return GridListItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridsterComponent", function () {
      return GridsterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridsterItemComponent", function () {
      return GridsterItemComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridsterItemPrototypeDirective", function () {
      return GridsterItemPrototypeDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridsterModule", function () {
      return GridsterModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridsterOptions", function () {
      return GridsterOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridsterPrototypeService", function () {
      return GridsterPrototypeService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridsterService", function () {
      return GridsterService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var _c0 = ["positionHighlight"];
    var _c1 = ["*"];

    var ɵ0 = function ɵ0($element, position) {
      $element.style.left = position.x + 'px';
      $element.style.top = position.y + 'px';
    },
        ɵ1 = function ɵ1($element) {
      $element.style.left = '';
      $element.style.top = '';
    },
        ɵ2 = function ɵ2($element, position) {
      var left = position.x;
      var top = position.y; // Replace unitless items with px

      var translate = "translate(".concat(left, "px,").concat(top, "px)");
      $element.style['transform'] = translate;
      $element.style['WebkitTransform'] = translate;
      $element.style['MozTransform'] = translate;
      $element.style['msTransform'] = translate;
      $element.style['OTransform'] = translate;
    },
        ɵ3 = function ɵ3($element) {
      $element.style['transform'] = '';
      $element.style['WebkitTransform'] = '';
      $element.style['MozTransform'] = '';
      $element.style['msTransform'] = '';
      $element.style['OTransform'] = '';
    },
        ɵ4 = function ɵ4() {
      if (document['selection']) {
        document['selection'].empty();
      } else if (window.getSelection) {
        window.getSelection().removeAllRanges();
      }
    },
        ɵ5 = function ɵ5(element, containerEl) {
      var containerRect = containerEl.getBoundingClientRect();
      var elRect = element.getBoundingClientRect();
      return elRect.left > containerRect.left && elRect.right < containerRect.right && elRect.top > containerRect.top && elRect.bottom < containerRect.bottom;
    },
        ɵ6 = function ɵ6(element, containerEl) {
      var containerRect = containerEl.getBoundingClientRect();
      var elRect = element.getBoundingClientRect();
      var elWidth = elRect.right - elRect.left;
      var elHeight = elRect.bottom - elRect.top;
      return elRect.left + elWidth / 2 > containerRect.left && elRect.right - elWidth / 2 < containerRect.right && elRect.top + elHeight / 2 > containerRect.top && elRect.bottom - elHeight / 2 < containerRect.bottom;
    },
        ɵ7 = function ɵ7(element, containerEl) {
      var containerRect = containerEl.getBoundingClientRect();
      var elRect = element.getBoundingClientRect();
      return elRect.right > containerRect.left && elRect.bottom > containerRect.top && elRect.left < containerRect.right && elRect.top < containerRect.bottom;
    },
        ɵ8 = function ɵ8(event, element) {
      var elRect = element.getBoundingClientRect();
      return event.pageX > elRect.left && event.pageX < elRect.right && event.pageY > elRect.top && event.pageY < elRect.bottom;
    },
        ɵ9 = function ɵ9($element) {
      var styleObj = window.getComputedStyle($element); // NOTE: Manually calculating height because IE's `clientHeight` isn't always
      // reliable.

      return parseFloat(styleObj.getPropertyValue('height')) + parseFloat(styleObj.getPropertyValue('padding-top')) + parseFloat(styleObj.getPropertyValue('padding-bottom'));
    },
        ɵ10 = function ɵ10(element, parentElement) {
      var parentElementRect = parentElement.getBoundingClientRect();
      var elementRect = element.getBoundingClientRect();
      return {
        top: elementRect.top - parentElementRect.top,
        left: elementRect.left - parentElementRect.left
      };
    };

    var utils = {
      setCssElementPosition: ɵ0,
      resetCSSElementPosition: ɵ1,
      setTransform: ɵ2,
      resetTransform: ɵ3,
      clearSelection: ɵ4,
      isElementFitContainer: ɵ5,
      isElementIntersectContainer: ɵ6,
      isElementTouchContainer: ɵ7,
      isCursorAboveElement: ɵ8,
      getElementOuterHeight: ɵ9,
      getRelativeCoordinates: ɵ10,
      getScrollableContainer: function getScrollableContainer(node) {
        var regex = /(auto|scroll)/;

        var parents = function parents(_node, ps) {
          if (_node.parentNode === null) {
            return ps;
          }

          return parents(_node.parentNode, ps.concat([_node]));
        };

        var style = function style(_node, prop) {
          return getComputedStyle(_node, null).getPropertyValue(prop);
        };

        var overflow = function overflow(_node) {
          return style(_node, 'overflow') + style(_node, 'overflow-y') + style(_node, 'overflow-x');
        };

        var scroll = function scroll(_node) {
          return regex.test(overflow(_node));
        };
        /* eslint-disable consistent-return */


        var scrollParent = function scrollParent(_node) {
          if (!(_node instanceof HTMLElement || _node instanceof SVGElement)) {
            return;
          }

          var ps = parents(_node.parentNode, []);

          for (var i = 0; i < ps.length; i += 1) {
            if (scroll(ps[i])) {
              return ps[i];
            }
          }

          return document.scrollingElement || document.documentElement;
        };

        return scrollParent(node);
      }
    };

    var GridCol = function GridCol(lanes) {
      for (var i = 0; i < lanes; i++) {
        this.push(null);
      }
    };

    var ɵ0$1 = GridCol; // Extend the Array prototype

    GridCol.prototype = [];
    /**
     * A GridList manages the two-dimensional positions from a list of items,
     * within a virtual matrix.
     *
     * The GridList's main function is to convert the item positions from one
     * grid size to another, maintaining as much of their order as possible.
     *
     * The GridList's second function is to handle collisions when moving an item
     * over another.
     *
     * The positioning algorithm places items in columns. Starting from left to
     * right, going through each column top to bottom.
     *
     * The size of an item is expressed using the number of cols and rows it
     * takes up within the grid (w and h)
     *
     * The position of an item is express using the col and row position within
     * the grid (x and y)
     *
     * An item is an object of structure:
     * {
     *   w: 3, h: 1,
     *   x: 0, y: 1
     * }
     */

    var GridList =
    /*#__PURE__*/
    function () {
      function GridList(items, options) {
        _classCallCheck(this, GridList);

        this.options = options;
        this.items = items;
        this.adjustSizeOfItems();
        this.generateGrid();
      }
      /**
       * Illustrates grid as text-based table, using a number identifier for each
       * item. E.g.
       *
       *  #|  0  1  2  3  4  5  6  7  8  9 10 11 12 13
       *  --------------------------------------------
       *  0| 00 02 03 04 04 06 08 08 08 12 12 13 14 16
       *  1| 01 -- 03 05 05 07 09 10 11 11 -- 13 15 --
       *
       * Warn: Does not work if items don't have a width or height specified
       * besides their position in the grid.
       */


      _createClass(GridList, [{
        key: "toString",
        value: function toString() {
          var widthOfGrid = this.grid.length;
          var output = '\n #|',
              border = '\n --',
              item,
              i,
              j; // Render the table header

          for (i = 0; i < widthOfGrid; i++) {
            output += ' ' + this.padNumber(i, ' ');
            border += '---';
          }

          output += border; // Render table contents row by row, as we go on the y axis

          for (i = 0; i < this.options.lanes; i++) {
            output += '\n' + this.padNumber(i, ' ') + '|';

            for (j = 0; j < widthOfGrid; j++) {
              output += ' ';
              item = this.grid[j][i];
              output += item ? this.padNumber(this.items.indexOf(item), '0') : '--';
            }
          }

          output += '\n';
          return output;
        }
      }, {
        key: "setOption",
        value: function setOption(name, value) {
          this.options[name] = value;
        }
        /**
         * Build the grid structure from scratch, with the current item positions
         */

      }, {
        key: "generateGrid",
        value: function generateGrid() {
          var i;
          this.resetGrid();

          for (i = 0; i < this.items.length; i++) {
            this.markItemPositionToGrid(this.items[i]);
          }
        }
      }, {
        key: "resizeGrid",
        value: function resizeGrid(lanes) {
          var currentColumn = 0;
          this.options.lanes = lanes;
          this.adjustSizeOfItems();
          this.sortItemsByPosition();
          this.resetGrid(); // The items will be sorted based on their index within the this.items array,
          // that is their "1d position"

          for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i],
                position = this.getItemPosition(item);
            this.updateItemPosition(item, this.findPositionForItem(item, {
              x: currentColumn,
              y: 0
            })); // New items should never be placed to the left of previous items

            currentColumn = Math.max(currentColumn, position.x);
          }

          this.pullItemsToLeft();
        }
        /**
         * This method has two options for the position we want for the item:
         * - Starting from a certain row/column number and only looking for
         *   positions to its right
         * - Accepting positions for a certain row number only (use-case: items
         *   being shifted to the left/right as a result of collisions)
         *
         * @param Object item
         * @param Object start Position from which to start
         *     the search.
         * @param number [fixedRow] If provided, we're going to try to find a
         *     position for the new item on it. If doesn't fit there, we're going
         *     to put it on the first row.
         *
         * @returns Array x and y.
         */

      }, {
        key: "findPositionForItem",
        value: function findPositionForItem(item, start, fixedRow) {
          var x, y, position; // Start searching for a position from the horizontal position of the
          // rightmost item from the grid

          for (x = start.x; x < this.grid.length; x++) {
            if (fixedRow !== undefined) {
              position = [x, fixedRow];

              if (this.itemFitsAtPosition(item, position)) {
                return position;
              }
            } else {
              for (y = start.y; y < this.options.lanes; y++) {
                position = [x, y];

                if (this.itemFitsAtPosition(item, position)) {
                  return position;
                }
              }
            }
          } // If we've reached this point, we need to start a new column


          var newCol = this.grid.length;
          var newRow = 0;

          if (fixedRow !== undefined && this.itemFitsAtPosition(item, [newCol, fixedRow])) {
            newRow = fixedRow;
          }

          return [newCol, newRow];
        }
      }, {
        key: "moveAndResize",
        value: function moveAndResize(item, newPosition, size) {
          var position = this.getItemPosition({
            x: newPosition[0],
            y: newPosition[1],
            w: item.w,
            h: item.h
          });
          var width = size.w || item.w,
              height = size.h || item.h;
          this.updateItemPosition(item, [position.x, position.y]);
          this.updateItemSize(item, width, height);
          this.resolveCollisions(item);
        }
      }, {
        key: "moveItemToPosition",
        value: function moveItemToPosition(item, newPosition) {
          var position = this.getItemPosition({
            x: newPosition[0],
            y: newPosition[1],
            w: item.w,
            h: item.h
          });
          this.updateItemPosition(item, [position.x, position.y]);
          this.resolveCollisions(item);
        }
        /**
         * Resize an item and resolve collisions.
         *
         * @param Object item A reference to an item that's part of the grid.
         * @param Object size
         * @param number [size.w=item.w] The new width.
         * @param number [size.h=item.h] The new height.
         */

      }, {
        key: "resizeItem",
        value: function resizeItem(item, size) {
          var width = size.w || item.w,
              height = size.h || item.h;
          this.updateItemSize(item, width, height);
          this.pullItemsToLeft(item);
        }
        /**
         * Compare the current items against a previous snapshot and return only
         * the ones that changed their attributes in the meantime. This includes both
         * position (x, y) and size (w, h)
         *
         * Each item that is returned is not the GridListItem but the helper that holds GridListItem
         * and list of changed properties.
         */

      }, {
        key: "getChangedItems",
        value: function getChangedItems(initialItems, breakpoint) {
          return this.items.map(function (item) {
            var changes = [];
            var oldValues = {};
            var initItem = initialItems.find(function (initItm) {
              return initItm.$element === item.$element;
            });

            if (!initItem) {
              return {
                item: item,
                changes: ['x', 'y', 'w', 'h'],
                isNew: true
              };
            }

            var oldX = initItem.getValueX(breakpoint);

            if (item.getValueX(breakpoint) !== oldX) {
              changes.push('x');

              if (oldX || oldX === 0) {
                oldValues.x = oldX;
              }
            }

            var oldY = initItem.getValueY(breakpoint);

            if (item.getValueY(breakpoint) !== oldY) {
              changes.push('y');

              if (oldY || oldY === 0) {
                oldValues.y = oldY;
              }
            }

            if (item.getValueW(breakpoint) !== initItem.getValueW(breakpoint)) {
              changes.push('w');
              oldValues.w = initItem.w;
            }

            if (item.getValueH(breakpoint) !== initItem.getValueH(breakpoint)) {
              changes.push('h');
              oldValues.h = initItem.h;
            }

            return {
              item: item,
              oldValues: oldValues,
              changes: changes,
              isNew: false
            };
          }).filter(function (itemChange) {
            return itemChange.changes.length;
          });
        }
      }, {
        key: "resolveCollisions",
        value: function resolveCollisions(item) {
          if (!this.tryToResolveCollisionsLocally(item)) {
            this.pullItemsToLeft(item);
          }

          if (this.options.floating) {
            this.pullItemsToLeft();
          } else if (this.getItemsCollidingWithItem(item).length) {
            this.pullItemsToLeft();
          }
        }
      }, {
        key: "pushCollidingItems",
        value: function pushCollidingItems(fixedItem) {
          var _this33 = this;

          // Start a fresh grid with the fixed item already placed inside
          this.sortItemsByPosition();
          this.resetGrid();
          this.generateGrid();
          this.items.filter(function (item) {
            return !_this33.isItemFloating(item) && item !== fixedItem;
          }).forEach(function (item) {
            if (!_this33.tryToResolveCollisionsLocally(item)) {
              _this33.pullItemsToLeft(item);
            }
          });
        }
        /**
         * Build the grid from scratch, by using the current item positions and
         * pulling them as much to the left as possible, removing as space between
         * them as possible.
         *
         * If a "fixed item" is provided, its position will be kept intact and the
         * rest of the items will be layed around it.
         */

      }, {
        key: "pullItemsToLeft",
        value: function pullItemsToLeft(fixedItem) {
          var _this34 = this;

          if (this.options.direction === 'none') {
            return;
          } // Start a fresh grid with the fixed item already placed inside


          this.sortItemsByPosition();
          this.resetGrid(); // Start the grid with the fixed item as the first positioned item

          if (fixedItem) {
            var fixedPosition = this.getItemPosition(fixedItem);
            this.updateItemPosition(fixedItem, [fixedPosition.x, fixedPosition.y]);
          }

          this.items.filter(function (item) {
            return !item.dragAndDrop && item !== fixedItem;
          }).forEach(function (item) {
            var fixedPosition = _this34.getItemPosition(item);

            _this34.updateItemPosition(item, [fixedPosition.x, fixedPosition.y]);
          });

          for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i],
                position = this.getItemPosition(item); // The fixed item keeps its exact position

            if (fixedItem && item === fixedItem || !item.dragAndDrop || !this.options.floating && this.isItemFloating(item) && !this.getItemsCollidingWithItem(item).length) {
              continue;
            }

            var x = this.findLeftMostPositionForItem(item),
                newPosition = this.findPositionForItem(item, {
              x: x,
              y: 0
            }, position.y);
            this.updateItemPosition(item, newPosition);
          }
        }
      }, {
        key: "isOverFixedArea",
        value: function isOverFixedArea(x, y, w, h) {
          var item = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
          var itemData = {
            x: x,
            y: y,
            w: w,
            h: h
          };

          if (this.options.direction !== 'horizontal') {
            itemData = {
              x: y,
              y: x,
              w: h,
              h: w
            };
          }

          for (var i = itemData.x; i < itemData.x + itemData.w; i++) {
            for (var j = itemData.y; j < itemData.y + itemData.h; j++) {
              if (this.grid[i] && this.grid[i][j] && this.grid[i][j] !== item && !this.grid[i][j].dragAndDrop) {
                return true;
              }
            }
          }

          return false;
        }
      }, {
        key: "checkItemAboveEmptyArea",
        value: function checkItemAboveEmptyArea(item, newPosition) {
          var itemData = {
            x: newPosition.x,
            y: newPosition.y,
            w: item.w,
            h: item.h
          };

          if (!item.itemPrototype && item.x === newPosition.x && item.y === newPosition.y) {
            return true;
          }

          if (this.options.direction === 'horizontal') {
            itemData = {
              x: newPosition.y,
              y: newPosition.x,
              w: itemData.h,
              h: itemData.w
            };
          }

          return !this.checkItemsInArea(itemData.y, itemData.y + itemData.h - 1, itemData.x, itemData.x + itemData.w - 1, item);
        }
      }, {
        key: "fixItemsPositions",
        value: function fixItemsPositions(options) {
          var _this35 = this;

          // items with x, y that fits gird with size of options.lanes
          var validItems = this.items.filter(function (item) {
            return item.itemComponent;
          }).filter(function (item) {
            return _this35.isItemValidForGrid(item, options);
          }); // items that x, y must be generated

          var invalidItems = this.items.filter(function (item) {
            return item.itemComponent;
          }).filter(function (item) {
            return !_this35.isItemValidForGrid(item, options);
          });
          var gridList = new GridList([], options); // put items with defined positions to the grid

          gridList.items = validItems.map(function (item) {
            return item.copyForBreakpoint(options.breakpoint);
          });
          gridList.generateGrid();
          invalidItems.forEach(function (item) {
            // TODO: check if this change does not broke anything
            // const itemCopy = item.copy();
            var itemCopy = item.copyForBreakpoint(options.breakpoint);
            var position = gridList.findPositionForItem(itemCopy, {
              x: 0,
              y: 0
            });
            gridList.items.push(itemCopy);
            gridList.setItemPosition(itemCopy, position);
            gridList.markItemPositionToGrid(itemCopy);
          });
          gridList.pullItemsToLeft();
          gridList.pushCollidingItems();
          this.items.forEach(function (itm) {
            var cachedItem = gridList.items.filter(function (cachedItm) {
              return cachedItm.$element === itm.$element;
            })[0];
            itm.setValueX(cachedItem.x, options.breakpoint);
            itm.setValueY(cachedItem.y, options.breakpoint);
            itm.setValueW(cachedItem.w, options.breakpoint);
            itm.setValueH(cachedItem.h, options.breakpoint);
            itm.autoSize = cachedItem.autoSize;
          });
        }
      }, {
        key: "deleteItemPositionFromGrid",
        value: function deleteItemPositionFromGrid(item) {
          var position = this.getItemPosition(item);
          var x, y;

          for (x = position.x; x < position.x + position.w; x++) {
            // It can happen to try to remove an item from a position not generated
            // in the grid, probably when loading a persisted grid of items. No need
            // to create a column to be able to remove something from it, though
            if (!this.grid[x]) {
              continue;
            }

            for (y = position.y; y < position.y + position.h; y++) {
              // Don't clear the cell if it's been occupied by a different widget in
              // the meantime (e.g. when an item has been moved over this one, and
              // thus by continuing to clear this item's previous position you would
              // cancel the first item's move, leaving it without any position even)
              if (this.grid[x][y] === item) {
                this.grid[x][y] = null;
              }
            }
          }
        }
      }, {
        key: "isItemFloating",
        value: function isItemFloating(item) {
          if (item.itemComponent && item.itemComponent.isDragging) {
            return false;
          }

          var position = this.getItemPosition(item);

          if (position.x === 0) {
            return false;
          }

          var rowBelowItem = this.grid[position.x - 1];
          return (rowBelowItem || []).slice(position.y, position.y + position.h).reduce(function (isFloating, cellItem) {
            return isFloating && !cellItem;
          }, true);
        }
      }, {
        key: "isItemValidForGrid",
        value: function isItemValidForGrid(item, options) {
          var itemData = options.direction === 'horizontal' ? {
            x: item.getValueY(options.breakpoint),
            y: item.getValueX(options.breakpoint),
            w: item.getValueH(options.breakpoint),
            h: Math.min(item.getValueW(this.options.breakpoint), options.lanes)
          } : {
            x: item.getValueX(options.breakpoint),
            y: item.getValueY(options.breakpoint),
            w: Math.min(item.getValueW(this.options.breakpoint), options.lanes),
            h: item.getValueH(options.breakpoint)
          };
          return typeof itemData.x === 'number' && typeof itemData.y === 'number' && itemData.x + itemData.w <= options.lanes;
        }
      }, {
        key: "findDefaultPositionHorizontal",
        value: function findDefaultPositionHorizontal(width, height) {
          var _iterator = _createForOfIteratorHelper(this.grid),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var col = _step.value;
              var colIdx = this.grid.indexOf(col);
              var rowIdx = 0;

              while (rowIdx < col.length - height + 1) {
                if (!this.checkItemsInArea(colIdx, colIdx + width - 1, rowIdx, rowIdx + height - 1)) {
                  return [colIdx, rowIdx];
                }

                rowIdx++;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return [this.grid.length, 0];
        }
      }, {
        key: "findDefaultPositionVertical",
        value: function findDefaultPositionVertical(width, height) {
          var _iterator2 = _createForOfIteratorHelper(this.grid),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var row = _step2.value;
              var rowIdx = this.grid.indexOf(row);
              var colIdx = 0;

              while (colIdx < row.length - width + 1) {
                if (!this.checkItemsInArea(rowIdx, rowIdx + height - 1, colIdx, colIdx + width - 1)) {
                  return [colIdx, rowIdx];
                }

                colIdx++;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return [0, this.grid.length];
        }
      }, {
        key: "checkItemsInArea",
        value: function checkItemsInArea(rowStart, rowEnd, colStart, colEnd, item) {
          for (var i = rowStart; i <= rowEnd; i++) {
            for (var j = colStart; j <= colEnd; j++) {
              if (this.grid[i] && this.grid[i][j] && (item ? this.grid[i][j] !== item : true)) {
                return true;
              }
            }
          }

          return false;
        }
      }, {
        key: "sortItemsByPosition",
        value: function sortItemsByPosition() {
          var _this36 = this;

          this.items.sort(function (item1, item2) {
            var position1 = _this36.getItemPosition(item1),
                position2 = _this36.getItemPosition(item2); // Try to preserve columns.


            if (position1.x !== position2.x) {
              return position1.x - position2.x;
            }

            if (position1.y !== position2.y) {
              return position1.y - position2.y;
            } // The items are placed on the same position.


            return 0;
          });
        }
        /**
         * Some items can have 100% height or 100% width. Those dimmensions are
         * expressed as 0. We need to ensure a valid width and height for each of
         * those items as the number of items per lane.
         */

      }, {
        key: "adjustSizeOfItems",
        value: function adjustSizeOfItems() {
          for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i]; // This can happen only the first time items are checked.
            // We need the property to have a value for all the items so that the
            // `cloneItems` method will merge the properties properly. If we only set
            // it to the items that need it then the following can happen:
            //
            // cloneItems([{id: 1, autoSize: true}, {id: 2}],
            //            [{id: 2}, {id: 1, autoSize: true}]);
            //
            // will result in
            //
            // [{id: 1, autoSize: true}, {id: 2, autoSize: true}]

            if (item.autoSize === undefined) {
              item.autoSize = item.w === 0 || item.h === 0;
            }

            if (item.autoSize) {
              if (this.options.direction === 'horizontal') {
                item.h = this.options.lanes;
              } else {
                item.w = this.options.lanes;
              }
            }
          }
        }
      }, {
        key: "resetGrid",
        value: function resetGrid() {
          this.grid = [];
        }
        /**
         * Check that an item wouldn't overlap with another one if placed at a
         * certain position within the grid
         */

      }, {
        key: "itemFitsAtPosition",
        value: function itemFitsAtPosition(item, newPosition) {
          var position = this.getItemPosition(item);
          var x, y; // No coordonate can be negative

          if (newPosition[0] < 0 || newPosition[1] < 0) {
            return false;
          } // Make sure the item isn't larger than the entire grid


          if (newPosition[1] + Math.min(position.h, this.options.lanes) > this.options.lanes) {
            return false;
          }

          if (this.isOverFixedArea(item.x, item.y, item.w, item.h)) {
            return false;
          } // Make sure the position doesn't overlap with an already positioned
          // item.


          for (x = newPosition[0]; x < newPosition[0] + position.w; x++) {
            var col = this.grid[x]; // Surely a column that hasn't even been created yet is available

            if (!col) {
              continue;
            }

            for (y = newPosition[1]; y < newPosition[1] + position.h; y++) {
              // Any space occupied by an item can continue to be occupied by the
              // same item.
              if (col[y] && col[y] !== item) {
                return false;
              }
            }
          }

          return true;
        }
      }, {
        key: "updateItemPosition",
        value: function updateItemPosition(item, position) {
          if (item.x !== null && item.y !== null) {
            this.deleteItemPositionFromGrid(item);
          }

          this.setItemPosition(item, position);
          this.markItemPositionToGrid(item);
        }
        /**
         * @param Object item A reference to a grid item.
         * @param number width The new width.
         * @param number height The new height.
         */

      }, {
        key: "updateItemSize",
        value: function updateItemSize(item, width, height) {
          if (item.x !== null && item.y !== null) {
            this.deleteItemPositionFromGrid(item);
          }

          item.w = width;
          item.h = height;
          this.markItemPositionToGrid(item);
        }
        /**
         * Mark the grid cells that are occupied by an item. This prevents items
         * from overlapping in the grid
         */

      }, {
        key: "markItemPositionToGrid",
        value: function markItemPositionToGrid(item) {
          var position = this.getItemPosition(item);
          var x, y; // Ensure that the grid has enough columns to accomodate the current item.

          this.ensureColumns(position.x + position.w);

          for (x = position.x; x < position.x + position.w; x++) {
            for (y = position.y; y < position.y + position.h; y++) {
              this.grid[x][y] = item;
            }
          }
        }
        /**
         * Ensure that the grid has at least N columns available.
         */

      }, {
        key: "ensureColumns",
        value: function ensureColumns(N) {
          for (var i = 0; i < N; i++) {
            if (!this.grid[i]) {
              this.grid.push(new GridCol(this.options.lanes));
            }
          }
        }
      }, {
        key: "getItemsCollidingWithItem",
        value: function getItemsCollidingWithItem(item) {
          var collidingItems = [];

          for (var i = 0; i < this.items.length; i++) {
            if (item !== this.items[i] && this.itemsAreColliding(item, this.items[i])) {
              collidingItems.push(i);
            }
          }

          return collidingItems;
        }
      }, {
        key: "itemsAreColliding",
        value: function itemsAreColliding(item1, item2) {
          var position1 = this.getItemPosition(item1),
              position2 = this.getItemPosition(item2);
          return !(position2.x >= position1.x + position1.w || position2.x + position2.w <= position1.x || position2.y >= position1.y + position1.h || position2.y + position2.h <= position1.y);
        }
        /**
         * Attempt to resolve the collisions after moving an item over one or more
         * other items within the grid, by shifting the position of the colliding
         * items around the moving one. This might result in subsequent collisions,
         * in which case we will revert all position permutations. To be able to
         * revert to the initial item positions, we create a virtual grid in the
         * process
         */

      }, {
        key: "tryToResolveCollisionsLocally",
        value: function tryToResolveCollisionsLocally(item) {
          var collidingItems = this.getItemsCollidingWithItem(item);

          if (!collidingItems.length) {
            return true;
          }

          var _gridList = new GridList(this.items.map(function (itm) {
            return itm.copy();
          }), this.options);

          var leftOfItem;
          var rightOfItem;
          var aboveOfItem;
          var belowOfItem;

          for (var i = 0; i < collidingItems.length; i++) {
            var collidingItem = _gridList.items[collidingItems[i]],
                collidingPosition = this.getItemPosition(collidingItem); // We use a simple algorithm for moving items around when collisions occur:
            // In this prioritized order, we try to move a colliding item around the
            // moving one:
            // 1. to its left side
            // 2. above it
            // 3. under it
            // 4. to its right side

            var position = this.getItemPosition(item);
            leftOfItem = [position.x - collidingPosition.w, collidingPosition.y];
            rightOfItem = [position.x + position.w, collidingPosition.y];
            aboveOfItem = [collidingPosition.x, position.y - collidingPosition.h];
            belowOfItem = [collidingPosition.x, position.y + position.h];

            if (_gridList.itemFitsAtPosition(collidingItem, leftOfItem)) {
              _gridList.updateItemPosition(collidingItem, leftOfItem);
            } else if (_gridList.itemFitsAtPosition(collidingItem, aboveOfItem)) {
              _gridList.updateItemPosition(collidingItem, aboveOfItem);
            } else if (_gridList.itemFitsAtPosition(collidingItem, belowOfItem)) {
              _gridList.updateItemPosition(collidingItem, belowOfItem);
            } else if (_gridList.itemFitsAtPosition(collidingItem, rightOfItem)) {
              _gridList.updateItemPosition(collidingItem, rightOfItem);
            } else {
              // Collisions failed, we must use the pullItemsToLeft method to arrange
              // the other items around this item with fixed position. This is our
              // plan B for when local collision resolving fails.
              return false;
            }
          } // If we reached this point it means we managed to resolve the collisions
          // from one single iteration, just by moving the colliding items around. So
          // we accept this scenario and merge the branched-out grid instance into the
          // original one


          this.items.forEach(function (itm, idx) {
            var cachedItem = _gridList.items.filter(function (cachedItm) {
              return cachedItm.$element === itm.$element;
            })[0];

            itm.x = cachedItem.x;
            itm.y = cachedItem.y;
            itm.w = cachedItem.w;
            itm.h = cachedItem.h;
            itm.autoSize = cachedItem.autoSize;
          });
          this.generateGrid();
          return true;
        }
        /**
         * When pulling items to the left, we need to find the leftmost position for
         * an item, with two considerations in mind:
         * - preserving its current row
         * - preserving the previous horizontal order between items
         */

      }, {
        key: "findLeftMostPositionForItem",
        value: function findLeftMostPositionForItem(item) {
          var tail = 0;
          var position = this.getItemPosition(item);

          for (var i = 0; i < this.grid.length; i++) {
            for (var j = position.y; j < position.y + position.h; j++) {
              var otherItem = this.grid[i][j];

              if (!otherItem) {
                continue;
              }

              var otherPosition = this.getItemPosition(otherItem);

              if (this.items.indexOf(otherItem) < this.items.indexOf(item)) {
                tail = otherPosition.x + otherPosition.w;
              }
            }
          }

          return tail;
        }
      }, {
        key: "findItemByPosition",
        value: function findItemByPosition(x, y) {
          for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].x === x && this.items[i].y === y) {
              return this.items[i];
            }
          }
        }
      }, {
        key: "getItemByAttribute",
        value: function getItemByAttribute(key, value) {
          for (var i = 0; i < this.items.length; i++) {
            if (this.items[i][key] === value) {
              return this.items[i];
            }
          }

          return null;
        }
      }, {
        key: "padNumber",
        value: function padNumber(nr, prefix) {
          // Currently works for 2-digit numbers (<100)
          return nr >= 10 ? nr : prefix + nr;
        }
        /**
         * If the direction is vertical we need to rotate the grid 90 deg to the
         * left. Thus, we simulate the fact that items are being pulled to the top.
         *
         * Since the items have widths and heights, if we apply the classic
         * counter-clockwise 90 deg rotation
         *
         *     [0 -1]
         *     [1  0]
         *
         * then the top left point of an item will become the bottom left point of
         * the rotated item. To adjust for this, we need to subtract from the y
         * position the height of the original item - the width of the rotated item.
         *
         * However, if we do this then we'll reverse some actions: resizing the
         * width of an item will stretch the item to the left instead of to the
         * right; resizing an item that doesn't fit into the grid will push the
         * items around it instead of going on a new row, etc.
         *
         * We found it better to do a vertical flip of the grid after rotating it.
         * This restores the direction of the actions and greatly simplifies the
         * transformations.
         */

      }, {
        key: "getItemPosition",
        value: function getItemPosition(item) {
          if (this.options.direction === 'horizontal') {
            return item;
          } else {
            return {
              x: item.y,
              y: item.x,
              w: item.h,
              h: item.w
            };
          }
        }
        /**
         * See getItemPosition.
         */

      }, {
        key: "setItemPosition",
        value: function setItemPosition(item, position) {
          if (this.options.direction === 'horizontal') {
            item.x = position[0];
            item.y = position[1];
          } else {
            // We're supposed to subtract the rotated item's height which is actually
            // the non-rotated item's width.
            item.x = position[1];
            item.y = position[0];
          }
        }
      }]);

      return GridList;
    }();

    var GridsterService =
    /*#__PURE__*/
    function () {
      function GridsterService() {
        var _this37 = this;

        _classCallCheck(this, GridsterService);

        this.items = [];
        this._items = [];
        this._itemsMap = {};
        this.disabledItems = [];
        this.debounceRenderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.itemRemoveSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isInit = false;
        this.itemRemoveSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(0)).subscribe(function () {
          _this37.gridList.pullItemsToLeft();

          _this37.render();

          _this37.updateCachedItems();
        });
        this.debounceRenderSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(0)).subscribe(function () {
          return _this37.render();
        });
      }

      _createClass(GridsterService, [{
        key: "isInitialized",
        value: function isInitialized() {
          return this.isInit;
        }
        /**
         * Must be called before init
         * @param item
         */

      }, {
        key: "registerItem",
        value: function registerItem(item) {
          this.items.push(item);
          return item;
        }
      }, {
        key: "init",
        value: function init(gridsterComponent) {
          this.gridsterComponent = gridsterComponent;
          this.draggableOptions = gridsterComponent.draggableOptions;
          this.gridsterOptions = gridsterComponent.gridsterOptions;
        }
      }, {
        key: "start",
        value: function start() {
          var _this38 = this;

          this.updateMaxItemSize(); // Used to highlight a position an element will land on upon drop

          if (this.$positionHighlight) {
            this.removePositionHighlight();
          }

          this.initGridList();
          this.isInit = true;
          setTimeout(function () {
            _this38.copyItems();

            _this38.fixItemsPositions();

            _this38.gridsterComponent.reflowGridster(true);

            _this38.gridsterComponent.setReady();
          });
        }
      }, {
        key: "initGridList",
        value: function initGridList() {
          // Create instance of GridList (decoupled lib for handling the grid
          // positioning and sorting post-drag and dropping)
          this.gridList = new GridList(this.items, this.options);
        }
      }, {
        key: "render",
        value: function render() {
          this.updateMaxItemSize();
          this.gridList.generateGrid();
          this.applySizeToItems();
          this.applyPositionToItems();
          this.refreshLines();
        }
      }, {
        key: "reflow",
        value: function reflow() {
          this.calculateCellSize();
          this.render();
        }
      }, {
        key: "fixItemsPositions",
        value: function fixItemsPositions() {
          var _this39 = this;

          if (this.options.responsiveSizes) {
            this.gridList.fixItemsPositions(this.options);
          } else {
            this.gridList.fixItemsPositions(this.gridsterOptions.basicOptions);
            this.gridsterOptions.responsiveOptions.forEach(function (options) {
              _this39.gridList.fixItemsPositions(options);
            });
          }

          this.updateCachedItems();
        }
      }, {
        key: "removeItem",
        value: function removeItem(item) {
          var idx = this.items.indexOf(item);

          if (idx >= 0) {
            this.items.splice(this.items.indexOf(item), 1);
          }

          this.gridList.deleteItemPositionFromGrid(item);
          this.removeItemFromCache(item);
        }
      }, {
        key: "onResizeStart",
        value: function onResizeStart(item) {
          this.currentElement = item.$element;
          this.copyItems();
          this._maxGridCols = this.gridList.grid.length;
          this.highlightPositionForItem(item);
          this.gridsterComponent.isResizing = true;
          this.refreshLines();
        }
      }, {
        key: "onResizeDrag",
        value: function onResizeDrag(item) {
          var newSize = this.snapItemSizeToGrid(item);
          var sizeChanged = this.dragSizeChanged(newSize);
          var newPosition = this.snapItemPositionToGrid(item);
          var positionChanged = this.dragPositionChanged(newPosition);

          if (sizeChanged || positionChanged) {
            // Regenerate the grid with the positions from when the drag started
            this.restoreCachedItems();
            this.gridList.generateGrid();
            this.previousDragPosition = newPosition;
            this.previousDragSize = newSize;
            this.gridList.moveAndResize(item, newPosition, {
              w: newSize[0],
              h: newSize[1]
            }); // Visually update item positions and highlight shape

            this.applyPositionToItems(true);
            this.highlightPositionForItem(item);
          }
        }
      }, {
        key: "onResizeStop",
        value: function onResizeStop(item) {
          this.currentElement = undefined;
          this.updateCachedItems();
          this.previousDragSize = null;
          this.removePositionHighlight();
          this.gridsterComponent.isResizing = false;
          this.gridList.pullItemsToLeft(item);
          this.debounceRenderSubject.next();
          this.fixItemsPositions();
        }
      }, {
        key: "onStart",
        value: function onStart(item) {
          this.currentElement = item.$element; // itemCtrl.isDragging = true;
          // Create a deep copy of the items; we use them to revert the item
          // positions after each drag change, making an entire drag operation less
          // distructable

          this.copyItems(); // Since dragging actually alters the grid, we need to establish the number
          // of cols (+1 extra) before the drag starts

          this._maxGridCols = this.gridList.grid.length;
          this.gridsterComponent.isDragging = true;
          this.gridsterComponent.updateGridsterElementData();
          this.refreshLines();
        }
      }, {
        key: "onDrag",
        value: function onDrag(item) {
          var newPosition = this.snapItemPositionToGrid(item);

          if (this.dragPositionChanged(newPosition)) {
            // Regenerate the grid with the positions from when the drag started
            this.restoreCachedItems();
            this.gridList.generateGrid();
            this.previousDragPosition = newPosition;

            if (this.options.direction === 'none' && !this.gridList.checkItemAboveEmptyArea(item, {
              x: newPosition[0],
              y: newPosition[1]
            })) {
              return;
            } // Since the items list is a deep copy, we need to fetch the item
            // corresponding to this drag action again


            this.gridList.moveItemToPosition(item, newPosition); // Visually update item positions and highlight shape

            this.applyPositionToItems(true);
            this.highlightPositionForItem(item);
          }
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.restoreCachedItems();
          this.previousDragPosition = null;
          this.updateMaxItemSize();
          this.applyPositionToItems();
          this.removePositionHighlight();
          this.currentElement = undefined;
          this.gridsterComponent.isDragging = false;
        }
      }, {
        key: "onDragOut",
        value: function onDragOut(item) {
          this.cancel();
          var idx = this.items.indexOf(item);

          if (idx >= 0) {
            this.items.splice(idx, 1);
          }

          this.gridList.pullItemsToLeft();
          this.render();
        }
      }, {
        key: "onStop",
        value: function onStop(item) {
          this.currentElement = undefined;
          this.updateCachedItems();
          this.previousDragPosition = null;
          this.removePositionHighlight();
          this.gridList.pullItemsToLeft(item);
          this.gridsterComponent.isDragging = false;
          this.refreshLines();
        }
      }, {
        key: "calculateCellSize",
        value: function calculateCellSize() {
          if (this.options.direction === 'horizontal') {
            this.cellHeight = this.calculateCellHeight();
            this.cellWidth = this.options.cellWidth || this.cellHeight * this.options.widthHeightRatio;
          } else {
            this.cellWidth = this.calculateCellWidth();
            this.cellHeight = this.options.cellHeight || this.cellWidth / this.options.widthHeightRatio;
          }

          if (this.options.heightToFontSizeRatio) {
            this._fontSize = this.cellHeight * this.options.heightToFontSizeRatio;
          }
        }
      }, {
        key: "applyPositionToItems",
        value: function applyPositionToItems(increaseGridsterSize) {
          if (!this.options.shrink) {
            increaseGridsterSize = true;
          } // TODO: Implement group separators


          for (var i = 0; i < this.items.length; i++) {
            // Don't interfere with the positions of the dragged items
            if (this.isCurrentElement(this.items[i].$element)) {
              continue;
            }

            this.items[i].applyPosition(this);
          }

          var child = this.gridsterComponent.$element.firstChild; // Update the width of the entire grid container with enough room on the
          // right to allow dragging items to the end of the grid.

          if (this.options.direction === 'horizontal') {
            var increaseWidthWith = increaseGridsterSize ? this.maxItemWidth : 0;
            child.style.height = '';
            child.style.width = (this.gridList.grid.length + increaseWidthWith) * this.cellWidth + 'px';
          } else if (this.gridList.grid.length) {
            var increaseHeightWith = increaseGridsterSize ? this.maxItemHeight : 0;
            child.style.height = (this.gridList.grid.length + increaseHeightWith) * this.cellHeight + 'px';
            child.style.width = '';
          }
        }
      }, {
        key: "refreshLines",
        value: function refreshLines() {
          var gridsterContainer = this.gridsterComponent.$element.firstChild;

          if (this.options.lines && this.options.lines.visible && (this.gridsterComponent.isDragging || this.gridsterComponent.isResizing || this.options.lines.always)) {
            var linesColor = this.options.lines.color || '#d8d8d8';
            var linesBgColor = this.options.lines.backgroundColor || 'transparent';
            var linesWidth = this.options.lines.width || 1;
            var bgPosition = linesWidth / 2;
            gridsterContainer.style.backgroundSize = "".concat(this.cellWidth, "px ").concat(this.cellHeight, "px");
            gridsterContainer.style.backgroundPosition = "-".concat(bgPosition, "px -").concat(bgPosition, "px");
            gridsterContainer.style.backgroundImage = "\n                linear-gradient(to right, ".concat(linesColor, " ").concat(linesWidth, "px, ").concat(linesBgColor, " ").concat(linesWidth, "px),\n                linear-gradient(to bottom, ").concat(linesColor, " ").concat(linesWidth, "px, ").concat(linesBgColor, " ").concat(linesWidth, "px)\n            ");
          } else {
            gridsterContainer.style.backgroundSize = '';
            gridsterContainer.style.backgroundPosition = '';
            gridsterContainer.style.backgroundImage = '';
          }
        }
      }, {
        key: "removeItemFromCache",
        value: function removeItemFromCache(item) {
          var _this40 = this;

          this._items = this._items.filter(function (cachedItem) {
            return cachedItem.$element !== item.$element;
          });
          Object.keys(this._itemsMap).forEach(function (breakpoint) {
            _this40._itemsMap[breakpoint] = _this40._itemsMap[breakpoint].filter(function (cachedItem) {
              return cachedItem.$element !== item.$element;
            });
          });
        }
      }, {
        key: "copyItems",
        value: function copyItems() {
          var _this41 = this;

          this._items = this.items.filter(function (item) {
            return _this41.isValidGridItem(item);
          }).map(function (item) {
            return item.copyForBreakpoint(null);
          });
          this.gridsterOptions.responsiveOptions.forEach(function (options) {
            _this41._itemsMap[options.breakpoint] = _this41.items.filter(function (item) {
              return _this41.isValidGridItem(item);
            }).map(function (item) {
              return item.copyForBreakpoint(options.breakpoint);
            });
          });
        }
        /**
         * Update maxItemWidth and maxItemHeight vales according to current state of items
         */

      }, {
        key: "updateMaxItemSize",
        value: function updateMaxItemSize() {
          this.maxItemWidth = Math.max.apply(null, this.items.map(function (item) {
            return item.w;
          }));
          this.maxItemHeight = Math.max.apply(null, this.items.map(function (item) {
            return item.h;
          }));
        }
        /**
         * Update items properties of previously cached items
         */

      }, {
        key: "restoreCachedItems",
        value: function restoreCachedItems() {
          var _this42 = this;

          var items = this.options.breakpoint ? this._itemsMap[this.options.breakpoint] : this._items;
          this.items.filter(function (item) {
            return _this42.isValidGridItem(item);
          }).forEach(function (item) {
            var cachedItem = items.filter(function (cachedItm) {
              return cachedItm.$element === item.$element;
            })[0];
            item.x = cachedItem.x;
            item.y = cachedItem.y;
            item.w = cachedItem.w;
            item.h = cachedItem.h;
            item.autoSize = cachedItem.autoSize;
          });
        }
        /**
         * If item should react on grid
         * @param GridListItem item
         * @returns boolean
         */

      }, {
        key: "isValidGridItem",
        value: function isValidGridItem(item) {
          if (this.options.direction === 'none') {
            return !!item.itemComponent;
          }

          return true;
        }
      }, {
        key: "calculateCellWidth",
        value: function calculateCellWidth() {
          var gridsterWidth = parseFloat(window.getComputedStyle(this.gridsterComponent.$element).width);
          return gridsterWidth / this.options.lanes;
        }
      }, {
        key: "calculateCellHeight",
        value: function calculateCellHeight() {
          var gridsterHeight = parseFloat(window.getComputedStyle(this.gridsterComponent.$element).height);
          return gridsterHeight / this.options.lanes;
        }
      }, {
        key: "applySizeToItems",
        value: function applySizeToItems() {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].applySize();

            if (this.options.heightToFontSizeRatio) {
              this.items[i].$element.style['font-size'] = this._fontSize;
            }
          }
        }
      }, {
        key: "isCurrentElement",
        value: function isCurrentElement(element) {
          if (!this.currentElement) {
            return false;
          }

          return element === this.currentElement;
        }
      }, {
        key: "snapItemSizeToGrid",
        value: function snapItemSizeToGrid(item) {
          var itemSize = {
            width: parseInt(item.$element.style.width, 10) - 1,
            height: parseInt(item.$element.style.height, 10) - 1
          };
          var colSize = Math.round(itemSize.width / this.cellWidth);
          var rowSize = Math.round(itemSize.height / this.cellHeight); // Keep item minimum 1

          colSize = Math.max(colSize, 1);
          rowSize = Math.max(rowSize, 1); // check if element is pinned

          if (this.gridList.isOverFixedArea(item.x, item.y, colSize, rowSize, item)) {
            return [item.w, item.h];
          }

          return [colSize, rowSize];
        }
      }, {
        key: "generateItemPosition",
        value: function generateItemPosition(item) {
          var position;

          if (item.itemPrototype) {
            var coords = item.itemPrototype.getPositionToGridster(this);
            position = {
              x: Math.round(coords.x / this.cellWidth),
              y: Math.round(coords.y / this.cellHeight)
            };
          } else {
            position = {
              x: Math.round(item.positionX / this.cellWidth),
              y: Math.round(item.positionY / this.cellHeight)
            };
          }

          return position;
        }
      }, {
        key: "snapItemPositionToGrid",
        value: function snapItemPositionToGrid(item) {
          var position = this.generateItemPosition(item);
          var col = position.x;
          var row = position.y; // Keep item position within the grid and don't let the item create more
          // than one extra column

          col = Math.max(col, 0);
          row = Math.max(row, 0);

          if (this.options.direction === 'horizontal') {
            col = Math.min(col, this._maxGridCols);
          } else {
            col = Math.min(col, Math.max(0, this.options.lanes - item.w));
          } // check if element is pinned


          if (this.gridList.isOverFixedArea(col, row, item.w, item.h)) {
            return [item.x, item.y];
          }

          return [col, row];
        }
      }, {
        key: "dragSizeChanged",
        value: function dragSizeChanged(newSize) {
          if (!this.previousDragSize) {
            return true;
          }

          return newSize[0] !== this.previousDragSize[0] || newSize[1] !== this.previousDragSize[1];
        }
      }, {
        key: "dragPositionChanged",
        value: function dragPositionChanged(newPosition) {
          if (!this.previousDragPosition) {
            return true;
          }

          return newPosition[0] !== this.previousDragPosition[0] || newPosition[1] !== this.previousDragPosition[1];
        }
      }, {
        key: "highlightPositionForItem",
        value: function highlightPositionForItem(item) {
          var size = item.calculateSize(this);
          var position = item.calculatePosition(this);
          this.$positionHighlight.style.width = size.width + 'px';
          this.$positionHighlight.style.height = size.height + 'px';
          this.$positionHighlight.style.left = position.left + 'px';
          this.$positionHighlight.style.top = position.top + 'px';
          this.$positionHighlight.style.display = '';

          if (this.options.heightToFontSizeRatio) {
            this.$positionHighlight.style['font-size'] = this._fontSize;
          }
        }
      }, {
        key: "updateCachedItems",
        value: function updateCachedItems() {
          var _this43 = this;

          // Notify the user with the items that changed since the previous snapshot
          this.triggerOnChange(null);
          this.gridsterOptions.responsiveOptions.forEach(function (options) {
            _this43.triggerOnChange(options.breakpoint);
          });
          this.copyItems();
        }
      }, {
        key: "triggerOnChange",
        value: function triggerOnChange(breakpoint) {
          var items = breakpoint ? this._itemsMap[breakpoint] : this._items;
          var changeItems = this.gridList.getChangedItems(items || [], breakpoint);
          changeItems.filter(function (itemChange) {
            return itemChange.item.itemComponent;
          }).forEach(function (itemChange) {
            if (itemChange.changes.indexOf('x') >= 0) {
              itemChange.item.triggerChangeX(breakpoint);
            }

            if (itemChange.changes.indexOf('y') >= 0) {
              itemChange.item.triggerChangeY(breakpoint);
            }

            if (itemChange.changes.indexOf('w') >= 0) {
              itemChange.item.triggerChangeW(breakpoint);
            }

            if (itemChange.changes.indexOf('h') >= 0) {
              itemChange.item.triggerChangeH(breakpoint);
            } // should be called only once (not for each breakpoint)


            itemChange.item.itemComponent.change.emit({
              item: itemChange.item,
              oldValues: itemChange.oldValues || {},
              isNew: itemChange.isNew,
              changes: itemChange.changes,
              breakpoint: breakpoint
            });
          });
        }
      }, {
        key: "removePositionHighlight",
        value: function removePositionHighlight() {
          this.$positionHighlight.style.display = 'none';
        }
      }]);

      return GridsterService;
    }();

    GridsterService.ɵfac = function GridsterService_Factory(t) {
      return new (t || GridsterService)();
    };

    GridsterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GridsterService,
      factory: GridsterService.ɵfac
    });
    GridsterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], GridsterService);

    var GridsterPrototypeService =
    /*#__PURE__*/
    function () {
      function GridsterPrototypeService() {
        _classCallCheck(this, GridsterPrototypeService);

        this.isDragging = false;
        this.dragSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dragStartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dragStopSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(GridsterPrototypeService, [{
        key: "observeDropOver",
        value: function observeDropOver(gridster) {
          var _this44 = this;

          return this.dragStopSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (data) {
            var gridsterEl = gridster.gridsterComponent.$element;
            var isOverNestedGridster = [].slice.call(gridsterEl.querySelectorAll('gridster')).reduce(function (isOverGridster, nestedGridsterEl) {
              return isOverGridster || _this44.isOverGridster(data.item, nestedGridsterEl, data.event, gridster.options);
            }, false);

            if (isOverNestedGridster) {
              return false;
            }

            return _this44.isOverGridster(data.item, gridsterEl, data.event, gridster.options);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            // TODO: what we should provide as a param?
            // prototype.drop.emit({item: prototype.item});
            data.item.onDrop(gridster);
          }));
        }
      }, {
        key: "observeDropOut",
        value: function observeDropOut(gridster) {
          var _this45 = this;

          return this.dragStopSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (data) {
            var gridsterEl = gridster.gridsterComponent.$element;
            return !_this45.isOverGridster(data.item, gridsterEl, data.event, gridster.options);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            // TODO: what we should provide as a param?
            data.item.onCancel();
          }));
        }
      }, {
        key: "observeDragOver",
        value: function observeDragOver(gridster) {
          var _this46 = this;

          var over = this.dragSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var gridsterEl = gridster.gridsterComponent.$element;
            return {
              item: data.item,
              event: data.event,
              isOver: _this46.isOverGridster(data.item, gridsterEl, data.event, gridster.options),
              isDrop: false
            };
          }));
          var drop = this.dragStopSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var gridsterEl = gridster.gridsterComponent.$element;
            return {
              item: data.item,
              event: data.event,
              isOver: _this46.isOverGridster(data.item, gridsterEl, data.event, gridster.options),
              isDrop: true
            };
          }));
          var dragExt = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])( // dragStartSubject is connected in case when item prototype is placed above gridster
          // and drag enter is not fired
          this.dragStartSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return {
              item: null,
              isOver: false,
              isDrop: false
            };
          })), over, drop).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])(function (prev, next) {
            return {
              item: next.item,
              event: next.event,
              isOver: next.isOver,
              isEnter: prev.isOver === false && next.isOver === true,
              isOut: prev.isOver === true && next.isOver === false && !prev.isDrop,
              isDrop: next.isDrop
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (data) {
            return !data.isDrop;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
          var dragEnter = this.createDragEnterObservable(dragExt, gridster);
          var dragOut = this.createDragOutObservable(dragExt, gridster);
          var dragOver = dragEnter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this46.dragSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(dragOut));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.item;
          }));
          return {
            dragEnter: dragEnter,
            dragOut: dragOut,
            dragOver: dragOver
          };
        }
      }, {
        key: "dragItemStart",
        value: function dragItemStart(item, event) {
          this.isDragging = true;
          this.dragStartSubject.next({
            item: item,
            event: event
          });
        }
      }, {
        key: "dragItemStop",
        value: function dragItemStop(item, event) {
          this.isDragging = false;
          this.dragStopSubject.next({
            item: item,
            event: event
          });
        }
      }, {
        key: "updatePrototypePosition",
        value: function updatePrototypePosition(item, event) {
          this.dragSubject.next({
            item: item,
            event: event
          });
        }
        /**
         * Creates observable that is fired on dragging over gridster container.
         */

      }, {
        key: "createDragOverObservable",
        value: function createDragOverObservable(dragIsOver, gridster) {
          return dragIsOver.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (data) {
            return data.isOver && !data.isEnter && !data.isOut;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.item;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (item) {
            return item.onOver(gridster);
          }));
        }
        /**
         * Creates observable that is fired on drag enter gridster container.
         */

      }, {
        key: "createDragEnterObservable",
        value: function createDragEnterObservable(dragIsOver, gridster) {
          return dragIsOver.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (data) {
            return data.isEnter;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.item;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (item) {
            return item.onEnter(gridster);
          }));
        }
        /**
         * Creates observable that is fired on drag out gridster container.
         */

      }, {
        key: "createDragOutObservable",
        value: function createDragOutObservable(dragIsOver, gridster) {
          return dragIsOver.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (data) {
            return data.isOut;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.item;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (item) {
            return item.onOut(gridster);
          }));
        }
        /**
         * Checks whether "element" position fits inside "containerEl" position.
         * It checks if "element" is totally covered by "containerEl" area.
         */

      }, {
        key: "isOverGridster",
        value: function isOverGridster(item, gridsterEl, event, options) {
          var el = item.$element;
          var parentItem = gridsterEl.parentElement && gridsterEl.parentElement.closest('gridster-item');

          if (parentItem) {
            return this.isOverGridster(item, parentItem, event, options);
          }

          switch (options.tolerance) {
            case 'fit':
              return utils.isElementFitContainer(el, gridsterEl);

            case 'intersect':
              return utils.isElementIntersectContainer(el, gridsterEl);

            case 'touch':
              return utils.isElementTouchContainer(el, gridsterEl);

            default:
              return utils.isCursorAboveElement(event, gridsterEl);
          }
        }
      }]);

      return GridsterPrototypeService;
    }();

    GridsterPrototypeService.ɵfac = function GridsterPrototypeService_Factory(t) {
      return new (t || GridsterPrototypeService)();
    };

    GridsterPrototypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GridsterPrototypeService,
      factory: GridsterPrototypeService.ɵfac
    });
    GridsterPrototypeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], GridsterPrototypeService);

    var GridsterOptions =
    /*#__PURE__*/
    function () {
      function GridsterOptions(config, gridsterElement) {
        var _this47 = this;

        _classCallCheck(this, GridsterOptions);

        this.defaults = {
          lanes: 5,
          direction: 'horizontal',
          widthHeightRatio: 1,
          shrink: false,
          responsiveView: true,
          responsiveSizes: false,
          responsiveToParent: false,
          dragAndDrop: true,
          resizable: false,
          useCSSTransforms: false,
          floating: true,
          tolerance: 'pointer'
        };
        this.responsiveOptions = [];
        this.breakpointsMap = {
          sm: 576,
          md: 768,
          lg: 992,
          xl: 1200 // Extra large

        };
        var responsiveContainer = config.responsiveToParent ? gridsterElement : window;
        this.basicOptions = config;
        this.responsiveOptions = this.extendResponsiveOptions(config.responsiveOptions || []);
        this.change = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.getOptionsByWidth(this.getElementWidth(responsiveContainer))), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(config.responsiveDebounce || 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
          return _this47.getOptionsByWidth(_this47.getElementWidth(responsiveContainer));
        }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(null, function (options) {
          return options.minWidth;
        }));
      }

      _createClass(GridsterOptions, [{
        key: "getOptionsByWidth",
        value: function getOptionsByWidth(width) {
          var i = 0;
          var options = Object.assign({}, this.defaults, this.basicOptions);

          while (this.responsiveOptions[i]) {
            if (this.responsiveOptions[i].minWidth <= width) {
              options = this.responsiveOptions[i];
            }

            i++;
          }

          return options;
        }
      }, {
        key: "extendResponsiveOptions",
        value: function extendResponsiveOptions(responsiveOptions) {
          var _this48 = this;

          return responsiveOptions // responsive options are valid only with "breakpoint" property
          .filter(function (options) {
            return options.breakpoint;
          }) // set default minWidth if not given
          .map(function (options) {
            return Object.assign({
              minWidth: _this48.breakpointsMap[options.breakpoint] || 0
            }, options);
          }).sort(function (curr, next) {
            return curr.minWidth - next.minWidth;
          }).map(function (options) {
            return Object.assign({}, _this48.defaults, _this48.basicOptions, options);
          });
        }
      }, {
        key: "getElementWidth",
        value: function getElementWidth($element) {
          if ($element === window) {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          }

          return $element.clientWidth;
        }
      }]);

      return GridsterOptions;
    }();

    var GridsterComponent =
    /*#__PURE__*/
    function () {
      function GridsterComponent(zone, elementRef, gridster, gridsterPrototype) {
        _classCallCheck(this, GridsterComponent);

        this.zone = zone;
        this.gridsterPrototype = gridsterPrototype;
        this.optionsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reflow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.prototypeDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.prototypeEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.prototypeOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.draggableOptions = {};
        this.isDragging = false;
        this.isResizing = false;
        this.isReady = false;
        this.isPrototypeEntered = false;
        this.isDisabled = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.gridster = gridster;
        this.$element = elementRef.nativeElement;
      }

      _createClass(GridsterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this49 = this;

          this.gridsterOptions = new GridsterOptions(this.options, this.$element);

          if (this.options.useCSSTransforms) {
            this.$element.classList.add('css-transform');
          }

          this.subscription.add(this.gridsterOptions.change.subscribe(function (options) {
            _this49.gridster.options = options;

            if (_this49.gridster.gridList) {
              _this49.gridster.gridList.options = options;
            }

            setTimeout(function () {
              return _this49.optionsChange.emit(options);
            });
          }));
          this.gridster.init(this);
          this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(this.gridster.options.responsiveDebounce || 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () {
            return _this49.gridster.options.responsiveView;
          })).subscribe(function () {
            return _this49.reload();
          }));
          this.zone.runOutsideAngular(function () {
            _this49.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'scroll', {
              passive: true
            }).subscribe(function () {
              return _this49.updateGridsterElementData();
            }));

            var scrollableContainer = utils.getScrollableContainer(_this49.$element);

            if (scrollableContainer) {
              _this49.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(scrollableContainer, 'scroll', {
                passive: true
              }).subscribe(function () {
                return _this49.updateGridsterElementData();
              }));
            }
          });
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.gridster.start();
          this.updateGridsterElementData();
          this.connectGridsterPrototype();
          this.gridster.$positionHighlight = this.$positionHighlight.nativeElement;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        /**
         * Change gridster config option and rebuild
         * @param string name
         * @param any value
         * @return GridsterComponent
         */

      }, {
        key: "setOption",
        value: function setOption(name, value) {
          if (name === 'dragAndDrop') {
            if (value) {
              this.enableDraggable();
            } else {
              this.disableDraggable();
            }
          }

          if (name === 'resizable') {
            if (value) {
              this.enableResizable();
            } else {
              this.disableResizable();
            }
          }

          if (name === 'lanes') {
            this.gridster.options.lanes = value;
            this.gridster.gridList.fixItemsPositions(this.gridster.options);
            this.reflowGridster();
          }

          if (name === 'direction') {
            this.gridster.options.direction = value;
            this.gridster.gridList.pullItemsToLeft();
          }

          if (name === 'widthHeightRatio') {
            this.gridster.options.widthHeightRatio = parseFloat(value || 1);
          }

          if (name === 'responsiveView') {
            this.gridster.options.responsiveView = !!value;
          }

          this.gridster.gridList.setOption(name, value);
          return this;
        }
      }, {
        key: "reload",
        value: function reload() {
          var _this50 = this;

          setTimeout(function () {
            _this50.gridster.fixItemsPositions();

            _this50.reflowGridster();
          });
          return this;
        }
      }, {
        key: "reflowGridster",
        value: function reflowGridster() {
          var isInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.gridster.reflow();
          this.reflow.emit({
            isInit: isInit,
            gridsterComponent: this
          });
        }
      }, {
        key: "updateGridsterElementData",
        value: function updateGridsterElementData() {
          this.gridster.gridsterScrollData = this.getScrollPositionFromParents(this.$element);
          this.gridster.gridsterRect = this.$element.getBoundingClientRect();
        }
      }, {
        key: "setReady",
        value: function setReady() {
          var _this51 = this;

          setTimeout(function () {
            return _this51.isReady = true;
          });
          this.ready.emit();
        }
      }, {
        key: "adjustItemsHeightToContent",
        value: function adjustItemsHeightToContent() {
          var _this52 = this;

          var scrollableItemElementSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.gridster-item-inner';
          this.gridster.items // convert each item to object with information about content height and scroll height
          .map(function (item) {
            var scrollEl = item.$element.querySelector(scrollableItemElementSelector);
            var contentEl = scrollEl.lastElementChild;
            var scrollElDistance = utils.getRelativeCoordinates(scrollEl, item.$element);
            var scrollElRect = scrollEl.getBoundingClientRect();
            var contentRect = contentEl.getBoundingClientRect();
            return {
              item: item,
              contentHeight: contentRect.bottom - scrollElRect.top,
              scrollElDistance: scrollElDistance
            };
          }) // calculate required height in lanes amount and update item "h"
          .forEach(function (data) {
            data.item.h = Math.ceil(data.contentHeight / (_this52.gridster.cellHeight - data.scrollElDistance.top));
          });
          this.gridster.fixItemsPositions();
          this.gridster.reflow();
        }
      }, {
        key: "disable",
        value: function disable(item) {
          var itemIdx = this.gridster.items.indexOf(item.itemComponent);
          this.isDisabled = true;

          if (itemIdx >= 0) {
            delete this.gridster.items[this.gridster.items.indexOf(item.itemComponent)];
          }

          this.gridster.onDragOut(item);
        }
      }, {
        key: "enable",
        value: function enable() {
          this.isDisabled = false;
        }
      }, {
        key: "getScrollPositionFromParents",
        value: function getScrollPositionFromParents(element) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            scrollTop: 0,
            scrollLeft: 0
          };

          if (element.parentElement && element.parentElement !== document.body) {
            data.scrollTop += element.parentElement.scrollTop;
            data.scrollLeft += element.parentElement.scrollLeft;
            return this.getScrollPositionFromParents(element.parentElement, data);
          }

          return {
            scrollTop: data.scrollTop,
            scrollLeft: data.scrollLeft
          };
        }
        /**
         * Connect gridster prototype item to gridster dragging hooks (onStart, onDrag, onStop).
         */

      }, {
        key: "connectGridsterPrototype",
        value: function connectGridsterPrototype() {
          var _this53 = this;

          this.gridsterPrototype.observeDropOut(this.gridster).subscribe();
          var dropOverObservable = this.gridsterPrototype.observeDropOver(this.gridster).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publish"])());
          var dragObservable = this.gridsterPrototype.observeDragOver(this.gridster);
          dragObservable.dragOver.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () {
            return !_this53.isDisabled;
          })).subscribe(function (prototype) {
            if (!_this53.isPrototypeEntered) {
              return;
            }

            _this53.gridster.onDrag(prototype.item);
          });
          dragObservable.dragEnter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () {
            return !_this53.isDisabled;
          })).subscribe(function (prototype) {
            _this53.isPrototypeEntered = true;

            if (_this53.gridster.items.indexOf(prototype.item) < 0) {
              _this53.gridster.items.push(prototype.item);
            }

            _this53.gridster.onStart(prototype.item);

            prototype.setDragContextGridster(_this53.gridster);

            if (_this53.parent) {
              _this53.parent.disable(prototype.item);
            }

            _this53.prototypeEnter.emit({
              item: prototype.item
            });
          });
          dragObservable.dragOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () {
            return !_this53.isDisabled;
          })).subscribe(function (prototype) {
            if (!_this53.isPrototypeEntered) {
              return;
            }

            _this53.gridster.onDragOut(prototype.item);

            _this53.isPrototypeEntered = false;

            _this53.prototypeOut.emit({
              item: prototype.item
            });

            if (_this53.parent) {
              _this53.parent.enable();

              _this53.parent.isPrototypeEntered = true;

              if (_this53.parent.gridster.items.indexOf(prototype.item) < 0) {
                _this53.parent.gridster.items.push(prototype.item);
              }

              _this53.parent.gridster.onStart(prototype.item);

              prototype.setDragContextGridster(_this53.parent.gridster); // timeout is needed to be sure that "enter" event is fired after "out"

              setTimeout(function () {
                _this53.parent.prototypeEnter.emit({
                  item: prototype.item
                });

                prototype.onEnter(_this53.parent.gridster);
              });
            }
          });
          dropOverObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () {
            return !_this53.isDisabled;
          })).subscribe(function (data) {
            if (!_this53.isPrototypeEntered) {
              return;
            }

            _this53.gridster.onStop(data.item.item);

            _this53.gridster.removeItem(data.item.item);

            _this53.isPrototypeEntered = false;

            if (_this53.parent) {
              _this53.parent.enable();
            }

            _this53.prototypeDrop.emit({
              item: data.item.item
            });
          });
          dropOverObservable.connect();
        }
      }, {
        key: "enableDraggable",
        value: function enableDraggable() {
          this.gridster.options.dragAndDrop = true;
          this.gridster.items.filter(function (item) {
            return item.itemComponent && item.itemComponent.dragAndDrop;
          }).forEach(function (item) {
            return item.itemComponent.enableDragDrop();
          });
        }
      }, {
        key: "disableDraggable",
        value: function disableDraggable() {
          this.gridster.options.dragAndDrop = false;
          this.gridster.items.filter(function (item) {
            return item.itemComponent;
          }).forEach(function (item) {
            return item.itemComponent.disableDraggable();
          });
        }
      }, {
        key: "enableResizable",
        value: function enableResizable() {
          this.gridster.options.resizable = true;
          this.gridster.items.filter(function (item) {
            return item.itemComponent && item.itemComponent.resizable;
          }).forEach(function (item) {
            return item.itemComponent.enableResizable();
          });
        }
      }, {
        key: "disableResizable",
        value: function disableResizable() {
          this.gridster.options.resizable = false;
          this.gridster.items.forEach(function (item) {
            return item.itemComponent.disableResizable();
          });
        }
      }]);

      return GridsterComponent;
    }();

    GridsterComponent.ɵfac = function GridsterComponent_Factory(t) {
      return new (t || GridsterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridsterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridsterPrototypeService));
    };

    GridsterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GridsterComponent,
      selectors: [["ngx-gridster"]],
      viewQuery: function GridsterComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.$positionHighlight = _t.first);
        }
      },
      hostVars: 6,
      hostBindings: function GridsterComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("gridster--dragging", ctx.isDragging)("gridster--resizing", ctx.isResizing)("gridster--ready", ctx.isReady);
        }
      },
      inputs: {
        draggableOptions: "draggableOptions",
        options: "options",
        parent: "parent"
      },
      outputs: {
        optionsChange: "optionsChange",
        ready: "ready",
        reflow: "reflow",
        prototypeDrop: "prototypeDrop",
        prototypeEnter: "prototypeEnter",
        prototypeOut: "prototypeOut"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([GridsterService])],
      ngContentSelectors: _c1,
      decls: 5,
      vars: 0,
      consts: [[1, "gridster-container"], [1, "position-highlight", 2, "display", "none"], ["positionHighlight", ""], [1, "inner"]],
      template: function GridsterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n            ngx-gridster {\n                position: relative;\n                display: block;\n                left: 0;\n                width: 100%;\n            }\n\n            ngx-gridster.gridster--dragging {\n                -moz-user-select: none;\n                -khtml-user-select: none;\n                -webkit-user-select: none;\n                -ms-user-select: none;\n                user-select: none;\n            }\n\n            ngx-gridster .gridster-container {\n                position: relative;\n                width: 100%;\n                list-style: none;\n                -webkit-transition: width 0.2s, height 0.2s;\n                transition: width 0.2s, height 0.2s;\n            }\n\n            ngx-gridster .position-highlight {\n                display: block;\n                position: absolute;\n                z-index: 1;\n            }\n        "],
      encapsulation: 2,
      changeDetection: 0
    });

    GridsterComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: GridsterService
      }, {
        type: GridsterPrototypeService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterComponent.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterComponent.prototype, "optionsChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterComponent.prototype, "ready", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterComponent.prototype, "reflow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterComponent.prototype, "prototypeDrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterComponent.prototype, "prototypeEnter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterComponent.prototype, "prototypeOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterComponent.prototype, "draggableOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", GridsterComponent)], GridsterComponent.prototype, "parent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('positionHighlight', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterComponent.prototype, "$positionHighlight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.gridster--dragging'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterComponent.prototype, "isDragging", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.gridster--resizing'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterComponent.prototype, "isResizing", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.gridster--ready'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterComponent.prototype, "isReady", void 0);
    GridsterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GridsterService, GridsterPrototypeService])], GridsterComponent);

    var GridListItem =
    /*#__PURE__*/
    function () {
      function GridListItem() {
        _classCallCheck(this, GridListItem);
      }

      _createClass(GridListItem, [{
        key: "setFromGridsterItem",
        value: function setFromGridsterItem(item) {
          if (this.isItemSet()) {
            throw new Error('GridListItem is already set.');
          }

          this.itemComponent = item;
          return this;
        }
      }, {
        key: "setFromGridsterItemPrototype",
        value: function setFromGridsterItemPrototype(item) {
          if (this.isItemSet()) {
            throw new Error('GridListItem is already set.');
          }

          this.itemPrototype = item;
          return this;
        }
      }, {
        key: "setFromObjectLiteral",
        value: function setFromObjectLiteral(item) {
          if (this.isItemSet()) {
            throw new Error('GridListItem is already set.');
          }

          this.itemObject = item;
          return this;
        }
      }, {
        key: "copy",
        value: function copy() {
          var itemCopy = new GridListItem();
          return itemCopy.setFromObjectLiteral({
            $element: this.$element,
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h,
            autoSize: this.autoSize,
            dragAndDrop: this.dragAndDrop,
            resizable: this.resizable
          });
        }
      }, {
        key: "copyForBreakpoint",
        value: function copyForBreakpoint(breakpoint) {
          var itemCopy = new GridListItem();
          return itemCopy.setFromObjectLiteral({
            $element: this.$element,
            x: this.getValueX(breakpoint),
            y: this.getValueY(breakpoint),
            w: this.getValueW(breakpoint),
            h: this.getValueH(breakpoint),
            autoSize: this.autoSize,
            dragAndDrop: this.dragAndDrop,
            resizable: this.resizable
          });
        }
      }, {
        key: "getValueX",
        value: function getValueX(breakpoint) {
          var item = this.getItem();
          return item[this.getXProperty(breakpoint)];
        }
      }, {
        key: "getValueY",
        value: function getValueY(breakpoint) {
          var item = this.getItem();
          return item[this.getYProperty(breakpoint)];
        }
      }, {
        key: "getValueW",
        value: function getValueW(breakpoint) {
          var item = this.getItem();
          return item[this.getWProperty(breakpoint)] || 1;
        }
      }, {
        key: "getValueH",
        value: function getValueH(breakpoint) {
          var item = this.getItem();
          return item[this.getHProperty(breakpoint)] || 1;
        }
      }, {
        key: "setValueX",
        value: function setValueX(value, breakpoint) {
          var item = this.getItem();
          item[this.getXProperty(breakpoint)] = value;
        }
      }, {
        key: "setValueY",
        value: function setValueY(value, breakpoint) {
          var item = this.getItem();
          item[this.getYProperty(breakpoint)] = value;
        }
      }, {
        key: "setValueW",
        value: function setValueW(value, breakpoint) {
          var item = this.getItem();
          item[this.getWProperty(breakpoint)] = value;
        }
      }, {
        key: "setValueH",
        value: function setValueH(value, breakpoint) {
          var item = this.getItem();
          item[this.getHProperty(breakpoint)] = value;
        }
      }, {
        key: "triggerChangeX",
        value: function triggerChangeX(breakpoint) {
          var item = this.itemComponent;

          if (item) {
            item[this.getXProperty(breakpoint) + 'Change'].emit(this.getValueX(breakpoint));
          }
        }
      }, {
        key: "triggerChangeY",
        value: function triggerChangeY(breakpoint) {
          var item = this.itemComponent;

          if (item) {
            item[this.getYProperty(breakpoint) + 'Change'].emit(this.getValueY(breakpoint));
          }
        }
      }, {
        key: "triggerChangeW",
        value: function triggerChangeW(breakpoint) {
          var item = this.itemComponent;

          if (item) {
            item[this.getWProperty(breakpoint) + 'Change'].emit(this.getValueW(breakpoint));
          }
        }
      }, {
        key: "triggerChangeH",
        value: function triggerChangeH(breakpoint) {
          var item = this.itemComponent;

          if (item) {
            item[this.getHProperty(breakpoint) + 'Change'].emit(this.getValueH(breakpoint));
          }
        }
      }, {
        key: "hasPositions",
        value: function hasPositions(breakpoint) {
          var x = this.getValueX(breakpoint);
          var y = this.getValueY(breakpoint);
          return (x || x === 0) && (y || y === 0);
        }
      }, {
        key: "applyPosition",
        value: function applyPosition(gridster) {
          var position = this.calculatePosition(gridster);
          this.itemComponent.positionX = position.left;
          this.itemComponent.positionY = position.top;
          this.itemComponent.updateElemenetPosition();
        }
      }, {
        key: "calculatePosition",
        value: function calculatePosition(gridster) {
          if (!gridster && !this.itemComponent) {
            return {
              left: 0,
              top: 0
            };
          }

          gridster = gridster || this.itemComponent.gridster;
          return {
            left: this.x * gridster.cellWidth,
            top: this.y * gridster.cellHeight
          };
        }
      }, {
        key: "applySize",
        value: function applySize(gridster) {
          var size = this.calculateSize(gridster);
          this.$element.style.width = size.width + 'px';
          this.$element.style.height = size.height + 'px';
        }
      }, {
        key: "calculateSize",
        value: function calculateSize(gridster) {
          if (!gridster && !this.itemComponent) {
            return {
              width: 0,
              height: 0
            };
          }

          gridster = gridster || this.itemComponent.gridster;
          var width = this.getValueW(gridster.options.breakpoint);
          var height = this.getValueH(gridster.options.breakpoint);

          if (gridster.options.direction === 'vertical') {
            width = Math.min(width, gridster.options.lanes);
          }

          if (gridster.options.direction === 'horizontal') {
            height = Math.min(height, gridster.options.lanes);
          }

          return {
            width: width * gridster.cellWidth,
            height: height * gridster.cellHeight
          };
        }
      }, {
        key: "getXProperty",
        value: function getXProperty(breakpoint) {
          if (breakpoint && this.itemComponent) {
            return GridListItem.X_PROPERTY_MAP[breakpoint];
          } else {
            return 'x';
          }
        }
      }, {
        key: "getYProperty",
        value: function getYProperty(breakpoint) {
          if (breakpoint && this.itemComponent) {
            return GridListItem.Y_PROPERTY_MAP[breakpoint];
          } else {
            return 'y';
          }
        }
      }, {
        key: "getWProperty",
        value: function getWProperty(breakpoint) {
          if (this.itemPrototype) {
            return this.itemPrototype[GridListItem.W_PROPERTY_MAP[breakpoint]] ? GridListItem.W_PROPERTY_MAP[breakpoint] : 'w';
          }

          var item = this.getItem();
          var responsiveSizes = item.gridster && item.gridster.options.responsiveSizes;

          if (breakpoint && responsiveSizes) {
            return GridListItem.W_PROPERTY_MAP[breakpoint];
          } else {
            return 'w';
          }
        }
      }, {
        key: "getHProperty",
        value: function getHProperty(breakpoint) {
          if (this.itemPrototype) {
            return this.itemPrototype[GridListItem.H_PROPERTY_MAP[breakpoint]] ? GridListItem.H_PROPERTY_MAP[breakpoint] : 'h';
          }

          var item = this.getItem();
          var responsiveSizes = item.gridster && item.gridster.options.responsiveSizes;

          if (breakpoint && responsiveSizes) {
            return GridListItem.H_PROPERTY_MAP[breakpoint];
          } else {
            return 'h';
          }
        }
      }, {
        key: "getItem",
        value: function getItem() {
          var item = this.itemComponent || this.itemPrototype || this.itemObject;

          if (!item) {
            throw new Error('GridListItem is not set.');
          }

          return item;
        }
      }, {
        key: "isItemSet",
        value: function isItemSet() {
          return this.itemComponent || this.itemPrototype || this.itemObject;
        }
      }, {
        key: "$element",
        get: function get() {
          return this.getItem().$element;
        }
      }, {
        key: "x",
        get: function get() {
          var item = this.getItem();
          var breakpoint = item.gridster ? item.gridster.options.breakpoint : null;
          return this.getValueX(breakpoint);
        },
        set: function set(value) {
          var item = this.getItem();
          var breakpoint = item.gridster ? item.gridster.options.breakpoint : null;
          this.setValueX(value, breakpoint);
        }
      }, {
        key: "y",
        get: function get() {
          var item = this.getItem();
          var breakpoint = item.gridster ? item.gridster.options.breakpoint : null;
          return this.getValueY(breakpoint);
        },
        set: function set(value) {
          var item = this.getItem();
          var breakpoint = item.gridster ? item.gridster.options.breakpoint : null;
          this.setValueY(value, breakpoint);
        }
      }, {
        key: "w",
        get: function get() {
          var item = this.getItem();
          var breakpoint = item.gridster ? item.gridster.options.breakpoint : null;
          return this.getValueW(breakpoint);
        },
        set: function set(value) {
          var item = this.getItem();
          var breakpoint = item.gridster ? item.gridster.options.breakpoint : null;
          this.setValueW(value, breakpoint);
        }
      }, {
        key: "h",
        get: function get() {
          var item = this.getItem();
          var breakpoint = item.gridster ? item.gridster.options.breakpoint : null;
          return this.getValueH(breakpoint);
        },
        set: function set(value) {
          var item = this.getItem();
          var breakpoint = item.gridster ? item.gridster.options.breakpoint : null;
          this.setValueH(value, breakpoint);
        }
      }, {
        key: "autoSize",
        get: function get() {
          return this.getItem().autoSize;
        },
        set: function set(value) {
          this.getItem().autoSize = value;
        }
      }, {
        key: "dragAndDrop",
        get: function get() {
          return !!this.getItem().dragAndDrop;
        }
      }, {
        key: "resizable",
        get: function get() {
          return !!this.getItem().resizable;
        }
      }, {
        key: "positionX",
        get: function get() {
          var item = this.itemComponent || this.itemPrototype;

          if (!item) {
            return null;
          }

          return item.positionX;
        }
      }, {
        key: "positionY",
        get: function get() {
          var item = this.itemComponent || this.itemPrototype;

          if (!item) {
            return null;
          }

          return item.positionY;
        }
      }]);

      return GridListItem;
    }();

    GridListItem.BREAKPOINTS = ['sm', 'md', 'lg', 'xl'];
    GridListItem.X_PROPERTY_MAP = {
      sm: 'xSm',
      md: 'xMd',
      lg: 'xLg',
      xl: 'xXl'
    };
    GridListItem.Y_PROPERTY_MAP = {
      sm: 'ySm',
      md: 'yMd',
      lg: 'yLg',
      xl: 'yXl'
    };
    GridListItem.W_PROPERTY_MAP = {
      sm: 'wSm',
      md: 'wMd',
      lg: 'wLg',
      xl: 'wXl'
    };
    GridListItem.H_PROPERTY_MAP = {
      sm: 'hSm',
      md: 'hMd',
      lg: 'hLg',
      xl: 'hXl'
    };

    var DraggableEvent =
    /*#__PURE__*/
    function () {
      function DraggableEvent(event) {
        _classCallCheck(this, DraggableEvent);

        if (event.touches) {
          this.touchEvent = event;
          this.setDataFromTouchEvent(this.touchEvent);
        } else {
          this.mouseEvent = event;
          this.setDataFromMouseEvent(this.mouseEvent);
        }
      }

      _createClass(DraggableEvent, [{
        key: "isTouchEvent",
        value: function isTouchEvent() {
          return !!this.touchEvent;
        }
      }, {
        key: "pauseEvent",
        value: function pauseEvent() {
          var event = this.touchEvent || this.mouseEvent;

          if (event.stopPropagation) {
            event.stopPropagation();
          }

          if (event.preventDefault) {
            event.preventDefault();
          }

          event.cancelBubble = true;
          event.returnValue = false;
          return false;
        }
      }, {
        key: "getRelativeCoordinates",
        value: function getRelativeCoordinates(container) {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
          var rect = container.getBoundingClientRect();
          return {
            x: this.pageX - rect.left - scrollLeft,
            y: this.pageY - rect.top - scrollTop
          };
        }
      }, {
        key: "setDataFromMouseEvent",
        value: function setDataFromMouseEvent(event) {
          this.target = event.target;
          this.clientX = event.clientX;
          this.clientY = event.clientY;
          this.pageX = event.pageX;
          this.pageY = event.pageY;
          this.type = event.type;
        }
      }, {
        key: "setDataFromTouchEvent",
        value: function setDataFromTouchEvent(event) {
          var touch = event.touches[0] || event.changedTouches[0];
          this.target = event.target;
          this.clientX = touch.clientX;
          this.clientY = touch.clientY;
          this.pageX = touch.pageX;
          this.pageY = touch.pageY;
          this.type = event.type;
        }
      }]);

      return DraggableEvent;
    }();

    var Draggable =
    /*#__PURE__*/
    function () {
      function Draggable(element) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Draggable);

        this.mousemove = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove'), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'touchmove', {
          passive: false
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        this.mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup'), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'touchend'), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'touchcancel')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        this.config = {
          handlerClass: null,
          scroll: true,
          scrollEdge: 36,
          scrollDirection: null
        }; // reference to auto scrolling listeners

        this.autoScrollingInterval = [];
        this.element = element;
        this.mousedown = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'mousedown'), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'touchstart')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        this.config = Object.assign(Object.assign({}, this.config), config);
        this.dragStart = this.createDragStartObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        this.dragMove = this.createDragMoveObservable(this.dragStart);
        this.dragStop = this.createDragStopObservable(this.dragStart);
        this.fixProblemWithDnDForIE(element);

        this.requestAnimationFrame = window.requestAnimationFrame || function (callback) {
          return setTimeout(callback, 1000 / 60);
        };

        this.cancelAnimationFrame = window.cancelAnimationFrame || function (cafID) {
          return clearTimeout(cafID);
        };
      }

      _createClass(Draggable, [{
        key: "createDragStartObservable",
        value: function createDragStartObservable() {
          var _this54 = this;

          return this.mousedown.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (md) {
            return new DraggableEvent(md);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return _this54.isDragingByHandler(event);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (e) {
            if (!e.isTouchEvent()) {
              e.pauseEvent();
            }

            if (document.activeElement) {
              document.activeElement.blur();
            } // prevents rendering performance issues while dragging item with selection inside


            utils.clearSelection();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (startEvent) {
            return _this54.mousemove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (mm) {
              return new DraggableEvent(mm);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (moveEvent) {
              return _this54.inRange(startEvent, moveEvent, 5);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
              return startEvent;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this54.mouseup), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }));
        }
      }, {
        key: "createDragMoveObservable",
        value: function createDragMoveObservable(dragStart) {
          var _this55 = this;

          return dragStart.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {
            _this55.addTouchActionNone(event.target);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (startEvent) {
            return _this55.mousemove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (mm) {
              return new DraggableEvent(mm);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {
              event.pauseEvent();
              startEvent.pauseEvent();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this55.mouseup));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (val) {
            return !!val;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {
            if (_this55.config.scroll) {
              _this55.startScroll(_this55.element, event);
            }
          }));
        }
      }, {
        key: "createDragStopObservable",
        value: function createDragStopObservable(dragStart) {
          var _this56 = this;

          return dragStart.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this56.mouseup.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (e) {
            return new DraggableEvent(e);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (e) {
            if (e.target) {
              _this56.removeTouchActionNone(e.target);
            }

            _this56.autoScrollingInterval.forEach(function (raf) {
              return _this56.cancelAnimationFrame(raf);
            });
          }));
        }
      }, {
        key: "startScroll",
        value: function startScroll(item, event) {
          var _this57 = this;

          var scrollContainer = this.getScrollContainer(item);
          this.autoScrollingInterval.forEach(function (raf) {
            return _this57.cancelAnimationFrame(raf);
          });

          if (scrollContainer) {
            this.startScrollForContainer(event, scrollContainer);
          } else {
            this.startScrollForWindow(event);
          }
        }
      }, {
        key: "startScrollForContainer",
        value: function startScrollForContainer(event, scrollContainer) {
          if (!this.config.scrollDirection || this.config.scrollDirection === 'vertical') {
            this.startScrollVerticallyForContainer(event, scrollContainer);
          }

          if (!this.config.scrollDirection || this.config.scrollDirection === 'horizontal') {
            this.startScrollHorizontallyForContainer(event, scrollContainer);
          }
        }
      }, {
        key: "startScrollVerticallyForContainer",
        value: function startScrollVerticallyForContainer(event, scrollContainer) {
          if (event.pageY - this.getOffset(scrollContainer).top < this.config.scrollEdge) {
            this.startAutoScrolling(scrollContainer, -Draggable.SCROLL_SPEED, 'scrollTop');
          } else if (this.getOffset(scrollContainer).top + scrollContainer.getBoundingClientRect().height - event.pageY < this.config.scrollEdge) {
            this.startAutoScrolling(scrollContainer, Draggable.SCROLL_SPEED, 'scrollTop');
          }
        }
      }, {
        key: "startScrollHorizontallyForContainer",
        value: function startScrollHorizontallyForContainer(event, scrollContainer) {
          if (event.pageX - scrollContainer.getBoundingClientRect().left < this.config.scrollEdge) {
            this.startAutoScrolling(scrollContainer, -Draggable.SCROLL_SPEED, 'scrollLeft');
          } else if (this.getOffset(scrollContainer).left + scrollContainer.getBoundingClientRect().width - event.pageX < this.config.scrollEdge) {
            this.startAutoScrolling(scrollContainer, Draggable.SCROLL_SPEED, 'scrollLeft');
          }
        }
      }, {
        key: "startScrollForWindow",
        value: function startScrollForWindow(event) {
          if (!this.config.scrollDirection || this.config.scrollDirection === 'vertical') {
            this.startScrollVerticallyForWindow(event);
          }

          if (!this.config.scrollDirection || this.config.scrollDirection === 'horizontal') {
            this.startScrollHorizontallyForWindow(event);
          }
        }
      }, {
        key: "startScrollVerticallyForWindow",
        value: function startScrollVerticallyForWindow(event) {
          var scrollingElement = document.scrollingElement || document.documentElement || document.body; // NOTE: Using `window.pageYOffset` here because IE doesn't have `window.scrollY`.

          if (event.pageY - window.pageYOffset < this.config.scrollEdge) {
            this.startAutoScrolling(scrollingElement, -Draggable.SCROLL_SPEED, 'scrollTop');
          } else if (window.innerHeight - (event.pageY - window.pageYOffset) < this.config.scrollEdge) {
            this.startAutoScrolling(scrollingElement, Draggable.SCROLL_SPEED, 'scrollTop');
          }
        }
      }, {
        key: "startScrollHorizontallyForWindow",
        value: function startScrollHorizontallyForWindow(event) {
          var scrollingElement = document.scrollingElement || document.documentElement || document.body; // NOTE: Using `window.pageXOffset` here because IE doesn't have `window.scrollX`.

          if (event.pageX - window.pageXOffset < this.config.scrollEdge) {
            this.startAutoScrolling(scrollingElement, -Draggable.SCROLL_SPEED, 'scrollLeft');
          } else if (window.innerWidth - (event.pageX - window.pageXOffset) < this.config.scrollEdge) {
            this.startAutoScrolling(scrollingElement, Draggable.SCROLL_SPEED, 'scrollLeft');
          }
        }
      }, {
        key: "getScrollContainer",
        value: function getScrollContainer(node) {
          var nodeOuterHeight = utils.getElementOuterHeight(node);

          if (node.scrollHeight > Math.ceil(nodeOuterHeight)) {
            return node;
          }

          if (!new RegExp('(body|html)', 'i').test(node.parentNode.tagName)) {
            return this.getScrollContainer(node.parentNode);
          }

          return null;
        }
      }, {
        key: "startAutoScrolling",
        value: function startAutoScrolling(node, amount, direction) {
          this.autoScrollingInterval.push(this.requestAnimationFrame(function () {
            this.startAutoScrolling(node, amount, direction);
          }.bind(this)));
          return node[direction] += amount * 0.25;
        }
      }, {
        key: "getOffset",
        value: function getOffset(el) {
          var rect = el.getBoundingClientRect();
          return {
            left: rect.left + this.getScroll('scrollLeft', 'pageXOffset'),
            top: rect.top + this.getScroll('scrollTop', 'pageYOffset')
          };
        }
      }, {
        key: "getScroll",
        value: function getScroll(scrollProp, offsetProp) {
          if (typeof window[offsetProp] !== 'undefined') {
            return window[offsetProp];
          }

          if (document.documentElement.clientHeight) {
            return document.documentElement[scrollProp];
          }

          return document.body[scrollProp];
        }
      }, {
        key: "isDragingByHandler",
        value: function isDragingByHandler(event) {
          if (!this.isValidDragHandler(event.target)) {
            return false;
          }

          return !this.config.handlerClass || this.config.handlerClass && this.hasElementWithClass(this.config.handlerClass, event.target);
        }
      }, {
        key: "isValidDragHandler",
        value: function isValidDragHandler(targetEl) {
          return ['input', 'textarea'].indexOf(targetEl.tagName.toLowerCase()) === -1;
        }
      }, {
        key: "inRange",
        value: function inRange(startEvent, moveEvent, range) {
          return Math.abs(moveEvent.clientX - startEvent.clientX) > range || Math.abs(moveEvent.clientY - startEvent.clientY) > range;
        }
      }, {
        key: "hasElementWithClass",
        value: function hasElementWithClass(className, target) {
          while (target !== this.element) {
            if (target.classList.contains(className)) {
              return true;
            }

            target = target.parentElement;
          }

          return false;
        }
      }, {
        key: "pauseEvent",
        value: function pauseEvent(e) {
          if (e.stopPropagation) {
            e.stopPropagation();
          }

          if (e.preventDefault) {
            e.preventDefault();
          }

          e.cancelBubble = true;
          e.returnValue = false;
        }
      }, {
        key: "fixProblemWithDnDForIE",
        value: function fixProblemWithDnDForIE(element) {
          if (this.isTouchDevice() && this.isIEorEdge() && element.style) {
            element.style['touch-action'] = 'none';
          }
        }
      }, {
        key: "removeTouchActionNone",
        value: function removeTouchActionNone(element) {
          if (!element.style) {
            return;
          }

          element.style['touch-action'] = '';
        }
      }, {
        key: "addTouchActionNone",
        value: function addTouchActionNone(element) {
          if (!element.style) {
            return;
          }

          element.style['touch-action'] = 'none';
        }
      }, {
        key: "isTouchDevice",
        value: function isTouchDevice() {
          return 'ontouchstart' in window || navigator.maxTouchPoints // works on most browsers
          ; // works on IE10/11 and Surface
        }
      }, {
        key: "isIEorEdge",
        value: function isIEorEdge() {
          var ua = window.navigator.userAgent;
          var msie = ua.indexOf('MSIE ');

          if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
          }

          var trident = ua.indexOf('Trident/');

          if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
          }

          var edge = ua.indexOf('Edge/');

          if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
          } // other browser


          return false;
        }
      }]);

      return Draggable;
    }();

    Draggable.SCROLL_SPEED = 20;

    var GridsterItemComponent =
    /*#__PURE__*/
    function () {
      function GridsterItemComponent(zone, gridsterPrototypeService, elementRef, gridster) {
        _classCallCheck(this, GridsterItemComponent);

        this.zone = zone;
        this.gridsterPrototypeService = gridsterPrototypeService;
        this.xChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.yChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.xSmChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.ySmChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.xMdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.yMdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.xLgChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.yLgChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.xXlChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.yXlChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.wChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.hChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.wSmChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.hSmChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.wMdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.hMdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.wLgChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.hLgChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.wXlChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.hXlChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.start = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.end = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.dragAndDrop = true;
        this.resizable = true;
        this.options = {};
        this.isDragging = false;
        this.isResizing = false;
        this.defaultOptions = {
          minWidth: 1,
          minHeight: 1,
          maxWidth: Infinity,
          maxHeight: Infinity,
          defaultWidth: 1,
          defaultHeight: 1
        };
        this.subscriptions = [];
        this.dragSubscriptions = [];
        this.resizeSubscriptions = [];
        this.gridster = gridster;
        this.elementRef = elementRef;
        this.$element = elementRef.nativeElement;
        this.item = new GridListItem().setFromGridsterItem(this); // if gridster is initialized do not show animation on new grid-item construct

        if (this.gridster.isInitialized()) {
          this.preventAnimation();
        }
      }

      _createClass(GridsterItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.options = Object.assign(this.defaultOptions, this.options);
          this.w = this.w || this.options.defaultWidth;
          this.h = this.h || this.options.defaultHeight;
          this.wSm = this.wSm || this.w;
          this.hSm = this.hSm || this.h;
          this.wMd = this.wMd || this.w;
          this.hMd = this.hMd || this.h;
          this.wLg = this.wLg || this.w;
          this.hLg = this.hLg || this.h;
          this.wXl = this.wXl || this.w;
          this.hXl = this.hXl || this.h;

          if (this.gridster.isInitialized()) {
            this.setPositionsOnItem();
          }

          this.gridster.registerItem(this.item);
          this.gridster.calculateCellSize();
          this.item.applySize();
          this.item.applyPosition();

          if (this.gridster.options.dragAndDrop && this.dragAndDrop) {
            this.enableDragDrop();
          }

          if (this.gridster.isInitialized()) {
            this.gridster.render();
            this.gridster.updateCachedItems();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.gridster.options.resizable && this.item.resizable) {
            this.enableResizable();
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this58 = this;

          if (!this.gridster.gridList) {
            return;
          }

          var rerender = false;
          ['w'].concat(_toConsumableArray(Object.keys(GridListItem.W_PROPERTY_MAP).map(function (breakpoint) {
            return GridListItem.W_PROPERTY_MAP[breakpoint];
          }))).filter(function (propName) {
            return changes[propName] && !changes[propName].isFirstChange();
          }).forEach(function (propName) {
            if (changes[propName].currentValue > _this58.options.maxWidth) {
              _this58[propName] = _this58.options.maxWidth;
              setTimeout(function () {
                return _this58[propName + 'Change'].emit(_this58[propName]);
              });
            }

            rerender = true;
          });
          ['h'].concat(_toConsumableArray(Object.keys(GridListItem.H_PROPERTY_MAP).map(function (breakpoint) {
            return GridListItem.H_PROPERTY_MAP[breakpoint];
          }))).filter(function (propName) {
            return changes[propName] && !changes[propName].isFirstChange();
          }).forEach(function (propName) {
            if (changes[propName].currentValue > _this58.options.maxHeight) {
              _this58[propName] = _this58.options.maxHeight;
              setTimeout(function () {
                return _this58[propName + 'Change'].emit(_this58[propName]);
              });
            }

            rerender = true;
          });
          ['x', 'y'].concat(_toConsumableArray(Object.keys(GridListItem.X_PROPERTY_MAP).map(function (breakpoint) {
            return GridListItem.X_PROPERTY_MAP[breakpoint];
          })), _toConsumableArray(Object.keys(GridListItem.Y_PROPERTY_MAP).map(function (breakpoint) {
            return GridListItem.Y_PROPERTY_MAP[breakpoint];
          }))).filter(function (propName) {
            return changes[propName] && !changes[propName].isFirstChange();
          }).forEach(function (propName) {
            return rerender = true;
          });

          if (changes['dragAndDrop'] && !changes['dragAndDrop'].isFirstChange()) {
            if (changes['dragAndDrop'].currentValue && this.gridster.options.dragAndDrop) {
              this.enableDragDrop();
            } else {
              this.disableDraggable();
            }
          }

          if (changes['resizable'] && !changes['resizable'].isFirstChange()) {
            if (changes['resizable'].currentValue && this.gridster.options.resizable) {
              this.enableResizable();
            } else {
              this.disableResizable();
            }
          }

          if (rerender && this.gridster.gridsterComponent.isReady) {
            this.gridster.debounceRenderSubject.next();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.gridster.removeItem(this.item);
          this.gridster.itemRemoveSubject.next(this.item);
          this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
          });
          this.disableDraggable();
          this.disableResizable();
        }
      }, {
        key: "updateElemenetPosition",
        value: function updateElemenetPosition() {
          if (this.gridster.options.useCSSTransforms) {
            utils.setTransform(this.$element, {
              x: this._positionX,
              y: this._positionY
            });
          } else {
            utils.setCssElementPosition(this.$element, {
              x: this._positionX,
              y: this._positionY
            });
          }
        }
      }, {
        key: "setPositionsOnItem",
        value: function setPositionsOnItem() {
          var _this59 = this;

          if (!this.item.hasPositions(this.gridster.options.breakpoint)) {
            this.setPositionsForGrid(this.gridster.options);
          }

          this.gridster.gridsterOptions.responsiveOptions.filter(function (options) {
            return !_this59.item.hasPositions(options.breakpoint);
          }).forEach(function (options) {
            return _this59.setPositionsForGrid(options);
          });
        }
      }, {
        key: "enableResizable",
        value: function enableResizable() {
          var _this60 = this;

          if (this.resizeSubscriptions.length) {
            return;
          }

          this.zone.runOutsideAngular(function () {
            _this60.getResizeHandlers().forEach(function (handler) {
              var direction = _this60.getResizeDirection(handler);

              if (_this60.hasResizableHandle(direction)) {
                handler.style.display = 'block';
              }

              var draggable = new Draggable(handler, _this60.getResizableOptions());
              var startEvent;
              var startData;
              var cursorToElementPosition;
              var dragStartSub = draggable.dragStart.subscribe(function (event) {
                _this60.zone.run(function () {
                  _this60.isResizing = true;
                  startEvent = event;
                  startData = _this60.createResizeStartObject(direction);
                  cursorToElementPosition = event.getRelativeCoordinates(_this60.$element);

                  _this60.gridster.onResizeStart(_this60.item);

                  _this60.onStart('resize');
                });
              });
              var dragSub = draggable.dragMove.subscribe(function (event) {
                var scrollData = _this60.gridster.gridsterScrollData;

                _this60.resizeElement({
                  direction: direction,
                  startData: startData,
                  position: {
                    x: event.clientX - cursorToElementPosition.x - _this60.gridster.gridsterRect.left,
                    y: event.clientY - cursorToElementPosition.y - _this60.gridster.gridsterRect.top
                  },
                  startEvent: startEvent,
                  moveEvent: event,
                  scrollDiffX: scrollData.scrollLeft - startData.scrollLeft,
                  scrollDiffY: scrollData.scrollTop - startData.scrollTop
                });

                _this60.gridster.onResizeDrag(_this60.item);
              });
              var dragStopSub = draggable.dragStop.subscribe(function () {
                _this60.zone.run(function () {
                  _this60.isResizing = false;

                  _this60.gridster.onResizeStop(_this60.item);

                  _this60.onEnd('resize');
                });
              });
              _this60.resizeSubscriptions = _this60.resizeSubscriptions.concat([dragStartSub, dragSub, dragStopSub]);
            });
          });
        }
      }, {
        key: "disableResizable",
        value: function disableResizable() {
          this.resizeSubscriptions.forEach(function (sub) {
            sub.unsubscribe();
          });
          this.resizeSubscriptions = [];
          [].forEach.call(this.$element.querySelectorAll('.gridster-item-resizable-handler'), function (handler) {
            handler.style.display = '';
          });
        }
      }, {
        key: "enableDragDrop",
        value: function enableDragDrop() {
          var _this61 = this;

          if (this.dragSubscriptions.length) {
            return;
          }

          this.zone.runOutsideAngular(function () {
            var cursorToElementPosition;
            var draggable = new Draggable(_this61.$element, _this61.getDraggableOptions());
            var dragStartSub = draggable.dragStart.subscribe(function (event) {
              _this61.zone.run(function () {
                _this61.gridster.onStart(_this61.item);

                _this61.isDragging = true;

                _this61.onStart('drag');

                cursorToElementPosition = event.getRelativeCoordinates(_this61.$element);
              });
            });
            var dragSub = draggable.dragMove.subscribe(function (event) {
              _this61.positionY = event.clientY - cursorToElementPosition.y - _this61.gridster.gridsterRect.top;
              _this61.positionX = event.clientX - cursorToElementPosition.x - _this61.gridster.gridsterRect.left;

              _this61.updateElemenetPosition();

              _this61.gridster.onDrag(_this61.item);
            });
            var dragStopSub = draggable.dragStop.subscribe(function () {
              _this61.zone.run(function () {
                _this61.gridster.onStop(_this61.item);

                _this61.gridster.debounceRenderSubject.next();

                _this61.isDragging = false;

                _this61.onEnd('drag');
              });
            });
            _this61.dragSubscriptions = _this61.dragSubscriptions.concat([dragStartSub, dragSub, dragStopSub]);
          });
        }
      }, {
        key: "disableDraggable",
        value: function disableDraggable() {
          this.dragSubscriptions.forEach(function (sub) {
            sub.unsubscribe();
          });
          this.dragSubscriptions = [];
        }
      }, {
        key: "getResizeHandlers",
        value: function getResizeHandlers() {
          return [].filter.call(this.$element.children[0].children, function (el) {
            return el.classList.contains('gridster-item-resizable-handler');
          });
        }
      }, {
        key: "getDraggableOptions",
        value: function getDraggableOptions() {
          return Object.assign({
            scrollDirection: this.gridster.options.direction
          }, this.gridster.draggableOptions);
        }
      }, {
        key: "getResizableOptions",
        value: function getResizableOptions() {
          var resizableOptions = {};

          if (this.gridster.draggableOptions.scroll || this.gridster.draggableOptions.scroll === false) {
            resizableOptions.scroll = this.gridster.draggableOptions.scroll;
          }

          if (this.gridster.draggableOptions.scrollEdge) {
            resizableOptions.scrollEdge = this.gridster.draggableOptions.scrollEdge;
          }

          resizableOptions.scrollDirection = this.gridster.options.direction;
          return resizableOptions;
        }
      }, {
        key: "hasResizableHandle",
        value: function hasResizableHandle(direction) {
          var isItemResizable = this.gridster.options.resizable && this.item.resizable;
          var resizeHandles = this.gridster.options.resizeHandles;
          return isItemResizable && (!resizeHandles || resizeHandles && !!resizeHandles[direction]);
        }
      }, {
        key: "setPositionsForGrid",
        value: function setPositionsForGrid(options) {
          var _this62 = this;

          var x, y;
          var position = this.findPosition(options);
          x = options.direction === 'horizontal' ? position[0] : position[1];
          y = options.direction === 'horizontal' ? position[1] : position[0];
          this.item.setValueX(x, options.breakpoint);
          this.item.setValueY(y, options.breakpoint);
          setTimeout(function () {
            _this62.item.triggerChangeX(options.breakpoint);

            _this62.item.triggerChangeY(options.breakpoint);
          });
        }
      }, {
        key: "findPosition",
        value: function findPosition(options) {
          var gridList = new GridList(this.gridster.items.map(function (item) {
            return item.copyForBreakpoint(options.breakpoint);
          }), options);
          return gridList.findPositionForItem(this.item, {
            x: 0,
            y: 0
          });
        }
      }, {
        key: "createResizeStartObject",
        value: function createResizeStartObject(direction) {
          var scrollData = this.gridster.gridsterScrollData;
          return {
            top: this.positionY,
            left: this.positionX,
            height: parseInt(this.$element.style.height, 10),
            width: parseInt(this.$element.style.width, 10),
            minX: Math.max(this.item.x + this.item.w - this.options.maxWidth, 0),
            maxX: this.item.x + this.item.w - this.options.minWidth,
            minY: Math.max(this.item.y + this.item.h - this.options.maxHeight, 0),
            maxY: this.item.y + this.item.h - this.options.minHeight,
            minW: this.options.minWidth,
            maxW: Math.min(this.options.maxWidth, this.gridster.options.direction === 'vertical' && direction.indexOf('w') < 0 ? this.gridster.options.lanes - this.item.x : this.options.maxWidth, direction.indexOf('w') >= 0 ? this.item.x + this.item.w : this.options.maxWidth),
            minH: this.options.minHeight,
            maxH: Math.min(this.options.maxHeight, this.gridster.options.direction === 'horizontal' && direction.indexOf('n') < 0 ? this.gridster.options.lanes - this.item.y : this.options.maxHeight, direction.indexOf('n') >= 0 ? this.item.y + this.item.h : this.options.maxHeight),
            scrollLeft: scrollData.scrollLeft,
            scrollTop: scrollData.scrollTop
          };
        }
      }, {
        key: "onEnd",
        value: function onEnd(actionType) {
          this.end.emit({
            action: actionType,
            item: this.item
          });
        }
      }, {
        key: "onStart",
        value: function onStart(actionType) {
          this.start.emit({
            action: actionType,
            item: this.item
          });
        }
        /**
         * Assign class for short while to prevent animation of grid item component
         */

      }, {
        key: "preventAnimation",
        value: function preventAnimation() {
          var _this63 = this;

          this.$element.classList.add('no-transition');
          setTimeout(function () {
            _this63.$element.classList.remove('no-transition');
          }, 500);
          return this;
        }
      }, {
        key: "getResizeDirection",
        value: function getResizeDirection(handler) {
          for (var i = handler.classList.length - 1; i >= 0; i--) {
            if (handler.classList[i].match('handle-')) {
              return handler.classList[i].split('-')[1];
            }
          }
        }
      }, {
        key: "resizeElement",
        value: function resizeElement(config) {
          // north
          if (config.direction.indexOf('n') >= 0) {
            this.resizeToNorth(config);
          } // west


          if (config.direction.indexOf('w') >= 0) {
            this.resizeToWest(config);
          } // east


          if (config.direction.indexOf('e') >= 0) {
            this.resizeToEast(config);
          } // south


          if (config.direction.indexOf('s') >= 0) {
            this.resizeToSouth(config);
          }
        }
      }, {
        key: "resizeToNorth",
        value: function resizeToNorth(config) {
          var height = config.startData.height + config.startEvent.clientY - config.moveEvent.clientY - config.scrollDiffY;

          if (height < config.startData.minH * this.gridster.cellHeight) {
            this.setMinHeight('n', config);
          } else if (height > config.startData.maxH * this.gridster.cellHeight) {
            this.setMaxHeight('n', config);
          } else {
            this.positionY = config.position.y;
            this.$element.style.height = height + 'px';
          }
        }
      }, {
        key: "resizeToWest",
        value: function resizeToWest(config) {
          var width = config.startData.width + config.startEvent.clientX - config.moveEvent.clientX - config.scrollDiffX;

          if (width < config.startData.minW * this.gridster.cellWidth) {
            this.setMinWidth('w', config);
          } else if (width > config.startData.maxW * this.gridster.cellWidth) {
            this.setMaxWidth('w', config);
          } else {
            this.positionX = config.position.x;
            this.updateElemenetPosition();
            this.$element.style.width = width + 'px';
          }
        }
      }, {
        key: "resizeToEast",
        value: function resizeToEast(config) {
          var width = config.startData.width + config.moveEvent.clientX - config.startEvent.clientX + config.scrollDiffX;

          if (width > config.startData.maxW * this.gridster.cellWidth) {
            this.setMaxWidth('e', config);
          } else if (width < config.startData.minW * this.gridster.cellWidth) {
            this.setMinWidth('e', config);
          } else {
            this.$element.style.width = width + 'px';
          }
        }
      }, {
        key: "resizeToSouth",
        value: function resizeToSouth(config) {
          var height = config.startData.height + config.moveEvent.clientY - config.startEvent.clientY + config.scrollDiffY;

          if (height > config.startData.maxH * this.gridster.cellHeight) {
            this.setMaxHeight('s', config);
          } else if (height < config.startData.minH * this.gridster.cellHeight) {
            this.setMinHeight('s', config);
          } else {
            this.$element.style.height = height + 'px';
          }
        }
      }, {
        key: "setMinHeight",
        value: function setMinHeight(direction, config) {
          if (direction === 'n') {
            this.$element.style.height = config.startData.minH * this.gridster.cellHeight + 'px';
            this.positionY = config.startData.maxY * this.gridster.cellHeight;
          } else {
            this.$element.style.height = config.startData.minH * this.gridster.cellHeight + 'px';
          }
        }
      }, {
        key: "setMinWidth",
        value: function setMinWidth(direction, config) {
          if (direction === 'w') {
            this.$element.style.width = config.startData.minW * this.gridster.cellWidth + 'px';
            this.positionX = config.startData.maxX * this.gridster.cellWidth;
            this.updateElemenetPosition();
          } else {
            this.$element.style.width = config.startData.minW * this.gridster.cellWidth + 'px';
          }
        }
      }, {
        key: "setMaxHeight",
        value: function setMaxHeight(direction, config) {
          if (direction === 'n') {
            this.$element.style.height = config.startData.maxH * this.gridster.cellHeight + 'px';
            this.positionY = config.startData.minY * this.gridster.cellHeight;
          } else {
            this.$element.style.height = config.startData.maxH * this.gridster.cellHeight + 'px';
          }
        }
      }, {
        key: "setMaxWidth",
        value: function setMaxWidth(direction, config) {
          if (direction === 'w') {
            this.$element.style.width = config.startData.maxW * this.gridster.cellWidth + 'px';
            this.positionX = config.startData.minX * this.gridster.cellWidth;
            this.updateElemenetPosition();
          } else {
            this.$element.style.width = config.startData.maxW * this.gridster.cellWidth + 'px';
          }
        }
      }, {
        key: "positionX",
        set: function set(value) {
          this._positionX = value;
        },
        get: function get() {
          return this._positionX;
        }
      }, {
        key: "positionY",
        set: function set(value) {
          this._positionY = value;
        },
        get: function get() {
          return this._positionY;
        }
      }]);

      return GridsterItemComponent;
    }();

    GridsterItemComponent.ɵfac = function GridsterItemComponent_Factory(t) {
      return new (t || GridsterItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridsterPrototypeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridsterService));
    };

    GridsterItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GridsterItemComponent,
      selectors: [["ngx-gridster-item"]],
      hostVars: 4,
      hostBindings: function GridsterItemComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-dragging", ctx.isDragging)("is-resizing", ctx.isResizing);
        }
      },
      inputs: {
        dragAndDrop: "dragAndDrop",
        resizable: "resizable",
        options: "options",
        w: "w",
        h: "h",
        wSm: "wSm",
        hSm: "hSm",
        wMd: "wMd",
        hMd: "hMd",
        wLg: "wLg",
        hLg: "hLg",
        wXl: "wXl",
        hXl: "hXl",
        x: "x",
        y: "y",
        xSm: "xSm",
        ySm: "ySm",
        xMd: "xMd",
        yMd: "yMd",
        xLg: "xLg",
        yLg: "yLg",
        xXl: "xXl",
        yXl: "yXl"
      },
      outputs: {
        xChange: "xChange",
        yChange: "yChange",
        xSmChange: "xSmChange",
        ySmChange: "ySmChange",
        xMdChange: "xMdChange",
        yMdChange: "yMdChange",
        xLgChange: "xLgChange",
        yLgChange: "yLgChange",
        xXlChange: "xXlChange",
        yXlChange: "yXlChange",
        wChange: "wChange",
        hChange: "hChange",
        wSmChange: "wSmChange",
        hSmChange: "hSmChange",
        wMdChange: "wMdChange",
        hMdChange: "hMdChange",
        wLgChange: "wLgChange",
        hLgChange: "hLgChange",
        wXlChange: "wXlChange",
        hXlChange: "hXlChange",
        change: "change",
        start: "start",
        end: "end"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c1,
      decls: 10,
      vars: 0,
      consts: [[1, "gridster-item-inner"], [1, "gridster-item-resizable-handler", "handle-s"], [1, "gridster-item-resizable-handler", "handle-e"], [1, "gridster-item-resizable-handler", "handle-n"], [1, "gridster-item-resizable-handler", "handle-w"], [1, "gridster-item-resizable-handler", "handle-se"], [1, "gridster-item-resizable-handler", "handle-ne"], [1, "gridster-item-resizable-handler", "handle-sw"], [1, "gridster-item-resizable-handler", "handle-nw"]],
      template: function GridsterItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n    ngx-gridster-item {\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 1;\n        -webkit-transition: none;\n        transition: none;\n    }\n\n    .gridster--ready ngx-gridster-item {\n        transition: all 200ms ease;\n        transition-property: left, top;\n    }\n\n    .gridster--ready.css-transform ngx-gridster-item  {\n        transition-property: transform;\n    }\n\n    .gridster--ready ngx-gridster-item.is-dragging,\n    .gridster--ready ngx-gridster-item.is-resizing {\n        -webkit-transition: none;\n        transition: none;\n        z-index: 9999;\n    }\n\n    ngx-gridster-item.no-transition {\n        -webkit-transition: none;\n        transition: none;\n    }\n    ngx-gridster-item .gridster-item-resizable-handler {\n        position: absolute;\n        z-index: 2;\n        display: none;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-n {\n      cursor: n-resize;\n      height: 10px;\n      right: 0;\n      top: 0;\n      left: 0;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-e {\n      cursor: e-resize;\n      width: 10px;\n      bottom: 0;\n      right: 0;\n      top: 0;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-s {\n      cursor: s-resize;\n      height: 10px;\n      right: 0;\n      bottom: 0;\n      left: 0;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-w {\n      cursor: w-resize;\n      width: 10px;\n      left: 0;\n      top: 0;\n      bottom: 0;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-ne {\n      cursor: ne-resize;\n      width: 10px;\n      height: 10px;\n      right: 0;\n      top: 0;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-nw {\n      cursor: nw-resize;\n      width: 10px;\n      height: 10px;\n      left: 0;\n      top: 0;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-se {\n      cursor: se-resize;\n      width: 0;\n      height: 0;\n      right: 0;\n      bottom: 0;\n      border-style: solid;\n      border-width: 0 0 10px 10px;\n      border-color: transparent;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-sw {\n      cursor: sw-resize;\n      width: 10px;\n      height: 10px;\n      left: 0;\n      bottom: 0;\n    }\n\n    ngx-gridster-item:hover .gridster-item-resizable-handler.handle-se {\n      border-color: transparent transparent #ccc\n    }\n    "],
      encapsulation: 2,
      changeDetection: 0
    });

    GridsterItemComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: GridsterPrototypeService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
        }]
      }, {
        type: GridsterService,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [GridsterService]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "x", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "xChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "y", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "yChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "xSm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "xSmChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "ySm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "ySmChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "xMd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "xMdChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "yMd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "yMdChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "xLg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "xLgChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "yLg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "yLgChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "xXl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "xXlChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "yXl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "yXlChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "w", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "wChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "h", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "hChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "wSm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "wSmChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "hSm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "hSmChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "wMd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "wMdChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "hMd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "hMdChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "wLg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "wLgChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "hLg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "hLgChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "wXl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "wXlChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemComponent.prototype, "hXl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "hXlChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "change", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "start", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "end", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "dragAndDrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "resizable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-dragging'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "isDragging", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-resizing'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemComponent.prototype, "isResizing", void 0);
    GridsterItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(GridsterService)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], GridsterPrototypeService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GridsterService])], GridsterItemComponent);

    var GridsterItemPrototypeDirective =
    /*#__PURE__*/
    function () {
      function GridsterItemPrototypeDirective(zone, elementRef, gridsterPrototype) {
        _classCallCheck(this, GridsterItemPrototypeDirective);

        this.zone = zone;
        this.elementRef = elementRef;
        this.gridsterPrototype = gridsterPrototype;
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.start = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.enter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.out = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = {};
        this.x = 0;
        this.y = 0;
        this.autoSize = false;
        this.isDragging = false;
        this.subscribtions = [];
        this.item = new GridListItem().setFromGridsterItemPrototype(this);
      } // must be set to true because of item dragAndDrop configuration


      _createClass(GridsterItemPrototypeDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this64 = this;

          this.wSm = this.wSm || this.w;
          this.hSm = this.hSm || this.h;
          this.wMd = this.wMd || this.w;
          this.hMd = this.hMd || this.h;
          this.wLg = this.wLg || this.w;
          this.hLg = this.hLg || this.h;
          this.wXl = this.wXl || this.w;
          this.hXl = this.hXl || this.h;
          this.zone.runOutsideAngular(function () {
            _this64.enableDragDrop();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscribtions.forEach(function (sub) {
            sub.unsubscribe();
          });
        }
      }, {
        key: "onDrop",
        value: function onDrop(gridster) {
          if (!this.config.helper) {
            this.$element.parentNode.removeChild(this.$element);
          }

          this.drop.emit({
            item: this.item,
            gridster: gridster
          });
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.cancel.emit({
            item: this.item
          });
        }
      }, {
        key: "onEnter",
        value: function onEnter(gridster) {
          this.enter.emit({
            item: this.item,
            gridster: gridster
          });
        }
      }, {
        key: "onOver",
        value: function onOver(gridster) {}
      }, {
        key: "onOut",
        value: function onOut(gridster) {
          this.out.emit({
            item: this.item,
            gridster: gridster
          });
        }
      }, {
        key: "getPositionToGridster",
        value: function getPositionToGridster(gridster) {
          var relativeContainerCoords = this.getContainerCoordsToGridster(gridster);
          return {
            y: this.positionY - relativeContainerCoords.top,
            x: this.positionX - relativeContainerCoords.left
          };
        }
      }, {
        key: "setDragContextGridster",
        value: function setDragContextGridster(gridster) {
          this.dragContextGridster = gridster;
        }
      }, {
        key: "getContainerCoordsToGridster",
        value: function getContainerCoordsToGridster(gridster) {
          return {
            left: gridster.gridsterRect.left - this.parentRect.left,
            top: gridster.gridsterRect.top - this.parentRect.top
          };
        }
      }, {
        key: "enableDragDrop",
        value: function enableDragDrop() {
          var _this65 = this;

          var cursorToElementPosition;
          var draggable = new Draggable(this.elementRef.nativeElement);
          var dragStartSub = draggable.dragStart.subscribe(function (event) {
            _this65.zone.run(function () {
              _this65.$element = _this65.provideDragElement();
              _this65.containerRectange = _this65.$element.parentElement.getBoundingClientRect();

              _this65.updateParentElementData();

              _this65.onStart(event);

              cursorToElementPosition = event.getRelativeCoordinates(_this65.$element);
            });
          });
          var dragSub = draggable.dragMove.subscribe(function (event) {
            _this65.setElementPosition(_this65.$element, {
              x: event.clientX - cursorToElementPosition.x - _this65.parentRect.left,
              y: event.clientY - cursorToElementPosition.y - _this65.parentRect.top
            });

            _this65.onDrag(event);
          });
          var dragStopSub = draggable.dragStop.subscribe(function (event) {
            _this65.zone.run(function () {
              _this65.onStop(event);

              _this65.$element = null;
            });
          });
          var scrollSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'scroll').subscribe(function () {
            if (_this65.$element) {
              _this65.updateParentElementData();
            }
          });
          this.subscribtions = this.subscribtions.concat([dragStartSub, dragSub, dragStopSub, scrollSub]);
        }
      }, {
        key: "setElementPosition",
        value: function setElementPosition(element, position) {
          this.positionX = position.x;
          this.positionY = position.y;
          utils.setCssElementPosition(element, position);
        }
      }, {
        key: "updateParentElementData",
        value: function updateParentElementData() {
          this.parentRect = this.$element.parentElement.getBoundingClientRect();
          this.parentOffset = {
            left: this.$element.parentElement.offsetLeft,
            top: this.$element.parentElement.offsetTop
          };
        }
      }, {
        key: "onStart",
        value: function onStart(event) {
          this.isDragging = true;
          this.$element.style.pointerEvents = 'none';
          this.$element.style.position = 'absolute';
          this.gridsterPrototype.dragItemStart(this, event);
          this.start.emit({
            item: this.item
          });
        }
      }, {
        key: "onDrag",
        value: function onDrag(event) {
          this.gridsterPrototype.updatePrototypePosition(this, event);
        }
      }, {
        key: "onStop",
        value: function onStop(event) {
          this.gridsterPrototype.dragItemStop(this, event);
          this.isDragging = false;
          this.$element.style.pointerEvents = 'auto';
          this.$element.style.position = '';
          utils.resetCSSElementPosition(this.$element);

          if (this.config.helper) {
            this.$element.parentNode.removeChild(this.$element);
          }
        }
      }, {
        key: "provideDragElement",
        value: function provideDragElement() {
          var dragElement = this.elementRef.nativeElement;

          if (this.config.helper) {
            dragElement = dragElement.cloneNode(true);
            document.body.appendChild(this.fixStylesForBodyHelper(dragElement));
          } else {
            this.fixStylesForRelativeElement(dragElement);
          }

          return dragElement;
        }
      }, {
        key: "fixStylesForRelativeElement",
        value: function fixStylesForRelativeElement(el) {
          if (window.getComputedStyle(el).position === 'absolute') {
            return el;
          }

          var rect = this.elementRef.nativeElement.getBoundingClientRect();
          this.containerRectange = el.parentElement.getBoundingClientRect();
          el.style.position = 'absolute';
          this.setElementPosition(el, {
            x: rect.left - this.containerRectange.left,
            y: rect.top - this.containerRectange.top
          });
          return el;
        }
        /**
         * When element is cloned and append to body it should have position absolute and coords set by original
         * relative prototype element position.
         */

      }, {
        key: "fixStylesForBodyHelper",
        value: function fixStylesForBodyHelper(el) {
          var bodyRect = document.body.getBoundingClientRect();
          var rect = this.elementRef.nativeElement.getBoundingClientRect();
          el.style.position = 'absolute';
          this.setElementPosition(el, {
            x: rect.left - bodyRect.left,
            y: rect.top - bodyRect.top
          });
          return el;
        }
      }, {
        key: "dragAndDrop",
        get: function get() {
          return true;
        }
      }, {
        key: "gridster",
        get: function get() {
          return this.dragContextGridster;
        }
      }]);

      return GridsterItemPrototypeDirective;
    }();

    GridsterItemPrototypeDirective.ɵfac = function GridsterItemPrototypeDirective_Factory(t) {
      return new (t || GridsterItemPrototypeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridsterPrototypeService));
    };

    GridsterItemPrototypeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: GridsterItemPrototypeDirective,
      selectors: [["", "ngxGridsterItemPrototype", ""]],
      inputs: {
        config: "config",
        wSm: "wSm",
        hSm: "hSm",
        wMd: "wMd",
        hMd: "hMd",
        wLg: "wLg",
        hLg: "hLg",
        wXl: "wXl",
        hXl: "hXl",
        data: "data",
        w: "w",
        h: "h"
      },
      outputs: {
        drop: "drop",
        start: "start",
        cancel: "cancel",
        enter: "enter",
        out: "out"
      }
    });

    GridsterItemPrototypeDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: GridsterPrototypeService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemPrototypeDirective.prototype, "drop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemPrototypeDirective.prototype, "start", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemPrototypeDirective.prototype, "cancel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemPrototypeDirective.prototype, "enter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemPrototypeDirective.prototype, "out", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemPrototypeDirective.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GridsterItemPrototypeDirective.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemPrototypeDirective.prototype, "w", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemPrototypeDirective.prototype, "wSm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemPrototypeDirective.prototype, "wMd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemPrototypeDirective.prototype, "wLg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemPrototypeDirective.prototype, "wXl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemPrototypeDirective.prototype, "h", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemPrototypeDirective.prototype, "hSm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemPrototypeDirective.prototype, "hMd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemPrototypeDirective.prototype, "hLg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GridsterItemPrototypeDirective.prototype, "hXl", void 0);
    GridsterItemPrototypeDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GridsterPrototypeService])], GridsterItemPrototypeDirective);
    var GridsterModule_1;

    var GridsterModule = GridsterModule_1 =
    /*#__PURE__*/
    function () {
      function GridsterModule() {
        _classCallCheck(this, GridsterModule);
      }

      _createClass(GridsterModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: GridsterModule_1,
            providers: [GridsterPrototypeService]
          };
        }
      }]);

      return GridsterModule;
    }();

    GridsterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: GridsterModule
    });
    GridsterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function GridsterModule_Factory(t) {
        return new (t || GridsterModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridsterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridsterPrototypeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridsterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-gridster',
          template: "<div class=\"gridster-container\">\n      <ng-content></ng-content>\n      <div class=\"position-highlight\" style=\"display:none;\" #positionHighlight>\n        <div class=\"inner\"></div>\n      </div>\n    </div>",
          providers: [GridsterService],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          styles: ["\n            ngx-gridster {\n                position: relative;\n                display: block;\n                left: 0;\n                width: 100%;\n            }\n\n            ngx-gridster.gridster--dragging {\n                -moz-user-select: none;\n                -khtml-user-select: none;\n                -webkit-user-select: none;\n                -ms-user-select: none;\n                user-select: none;\n            }\n\n            ngx-gridster .gridster-container {\n                position: relative;\n                width: 100%;\n                list-style: none;\n                -webkit-transition: width 0.2s, height 0.2s;\n                transition: width 0.2s, height 0.2s;\n            }\n\n            ngx-gridster .position-highlight {\n                display: block;\n                position: absolute;\n                z-index: 1;\n            }\n        "]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: GridsterService
        }, {
          type: GridsterPrototypeService
        }];
      }, {
        optionsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        ready: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        reflow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        prototypeDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        prototypeEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        prototypeOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        draggableOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isDragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.gridster--dragging']
        }],
        isResizing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.gridster--resizing']
        }],
        isReady: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.gridster--ready']
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        parent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        $positionHighlight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['positionHighlight', {
            "static": true
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridsterItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-gridster-item',
          template: "<div class=\"gridster-item-inner\">\n      <ng-content></ng-content>\n      <div class=\"gridster-item-resizable-handler handle-s\"></div>\n      <div class=\"gridster-item-resizable-handler handle-e\"></div>\n      <div class=\"gridster-item-resizable-handler handle-n\"></div>\n      <div class=\"gridster-item-resizable-handler handle-w\"></div>\n      <div class=\"gridster-item-resizable-handler handle-se\"></div>\n      <div class=\"gridster-item-resizable-handler handle-ne\"></div>\n      <div class=\"gridster-item-resizable-handler handle-sw\"></div>\n      <div class=\"gridster-item-resizable-handler handle-nw\"></div>\n    </div>",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          styles: ["\n    ngx-gridster-item {\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 1;\n        -webkit-transition: none;\n        transition: none;\n    }\n\n    .gridster--ready ngx-gridster-item {\n        transition: all 200ms ease;\n        transition-property: left, top;\n    }\n\n    .gridster--ready.css-transform ngx-gridster-item  {\n        transition-property: transform;\n    }\n\n    .gridster--ready ngx-gridster-item.is-dragging,\n    .gridster--ready ngx-gridster-item.is-resizing {\n        -webkit-transition: none;\n        transition: none;\n        z-index: 9999;\n    }\n\n    ngx-gridster-item.no-transition {\n        -webkit-transition: none;\n        transition: none;\n    }\n    ngx-gridster-item .gridster-item-resizable-handler {\n        position: absolute;\n        z-index: 2;\n        display: none;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-n {\n      cursor: n-resize;\n      height: 10px;\n      right: 0;\n      top: 0;\n      left: 0;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-e {\n      cursor: e-resize;\n      width: 10px;\n      bottom: 0;\n      right: 0;\n      top: 0;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-s {\n      cursor: s-resize;\n      height: 10px;\n      right: 0;\n      bottom: 0;\n      left: 0;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-w {\n      cursor: w-resize;\n      width: 10px;\n      left: 0;\n      top: 0;\n      bottom: 0;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-ne {\n      cursor: ne-resize;\n      width: 10px;\n      height: 10px;\n      right: 0;\n      top: 0;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-nw {\n      cursor: nw-resize;\n      width: 10px;\n      height: 10px;\n      left: 0;\n      top: 0;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-se {\n      cursor: se-resize;\n      width: 0;\n      height: 0;\n      right: 0;\n      bottom: 0;\n      border-style: solid;\n      border-width: 0 0 10px 10px;\n      border-color: transparent;\n    }\n\n    ngx-gridster-item .gridster-item-resizable-handler.handle-sw {\n      cursor: sw-resize;\n      width: 10px;\n      height: 10px;\n      left: 0;\n      bottom: 0;\n    }\n\n    ngx-gridster-item:hover .gridster-item-resizable-handler.handle-se {\n      border-color: transparent transparent #ccc\n    }\n    "]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: GridsterPrototypeService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
          }]
        }, {
          type: GridsterService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [GridsterService]
          }]
        }];
      }, {
        xChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        yChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        xSmChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        ySmChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        xMdChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        yMdChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        xLgChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        yLgChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        xXlChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        yXlChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        wChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        hChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        wSmChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        hSmChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        wMdChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        hMdChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        wLgChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        hLgChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        wXlChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        hXlChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        end: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragAndDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resizable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isDragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.is-dragging']
        }],
        isResizing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.is-resizing']
        }],
        w: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        h: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wSm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hSm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wMd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hMd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wLg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hLg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wXl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hXl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        x: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        y: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        xSm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ySm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        xMd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        yMd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        xLg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        yLg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        xXl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        yXl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridsterItemPrototypeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[ngxGridsterItemPrototype]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: GridsterPrototypeService
        }];
      }, {
        drop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        cancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        enter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        out: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wSm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hSm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wMd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hMd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wLg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hLg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wXl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hXl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        w: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        h: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GridsterModule, {
        declarations: function declarations() {
          return [GridsterComponent, GridsterItemComponent, GridsterItemPrototypeDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [GridsterComponent, GridsterItemComponent, GridsterItemPrototypeDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridsterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          declarations: [GridsterComponent, GridsterItemComponent, GridsterItemPrototypeDirective],
          exports: [GridsterComponent, GridsterItemComponent, GridsterItemPrototypeDirective]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of gridster
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=angular2gridster.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsDashboardAdminDashboardAdminDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"admin-dashboard-wrapper\">\n\n\t<app-admin-dash-first-row></app-admin-dash-first-row>\n\n\t<div class=\"row mt-4\">\n\t\t<div class=\"col-sm-3 dashboard-col-pad\" *ngFor= \"let second of secondRowData\">\n\t\t\t<app-admin-dash-second-row [label]=\"second\"></app-admin-dash-second-row>\n\t\t</div>\n\t</div>  \n\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col-sm-6 dashboard-col-pad wid-height\">\n\t\t\t<div class=\"card dashboard-card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t\t\t\t<h6 class=\"font-weight-bold\">Amount Receivable vs Amount Received</h6>\n\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"text-mute mt-2\">Current Month</p>\n\t\t\t\t\t<app-dash-pie-chart></app-dash-pie-chart>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t<p>Campaign sent 2 days ago</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-6 dashboard-col-pad wid-height\">\n\t\t\t<div class=\"card dashboard-card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t\t\t\t<h6 class=\"font-weight-bold\">Income vs Expenses</h6>\n\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<app-dash-income-chart></app-dash-income-chart>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t<p>Data Information Certified</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col-sm-3 dashboard-col-pad\" *ngFor= \"let fourth of fourthRowData\">\n\t\t\t<app-admin-dash-second-row [label]=\"fourth\"></app-admin-dash-second-row>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col-sm-6 dashboard-col-pad wid-height\">\n\t\t\t<div class=\"card dashboard-card meeting-schedule\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<app-dash-meeting></app-dash-meeting>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-6 dashboard-col-pad wid-height\">\n\t\t\t<div class=\"card dashboard-card announcement\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<app-dash-broad-cast></app-dash-broad-cast>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col-sm-3 dashboard-col-pad\" *ngFor= \"let sixth of sixthRowData\">\n\t\t\t<app-admin-dash-second-row [label]=\"sixth\"></app-admin-dash-second-row>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col-sm-6 dashboard-col-pad wid-height\">\n\t\t\t<app-dash-com-list [label]=\"'Emergency Alerts'\"></app-dash-com-list>\n\t\t</div>\n\t\t<div class=\"col-sm-6 dashboard-col-pad wid-height\">\n\t\t\t<app-dash-com-list [label]=\"'Recent Violations'\"></app-dash-com-list>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col-sm-6 dashboard-col-pad wid-height\">\n\t\t\t<app-dash-com-list [label]=\"'Work Permit'\"></app-dash-com-list>\n\t\t</div>\n\t\t<div class=\"col-sm-6 dashboard-col-pad wid-height\">\n\t\t\t<app-dash-com-list [label]=\"'Facility Bookings'\"></app-dash-com-list>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/custom-dashboard/custom-dashboard.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/custom-dashboard/custom-dashboard.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsDashboardCustomDashboardCustomDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div class=\"custom-dashboard mt-4\">\n\t<div class=\"row mb-3\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<button class=\"btn lime-green float-right\" (click)=\"addWidget()\">\n\t\t\t\t<i class=\"fa fa-plus\" aria-hidden=\"true\"> Add Widget</i>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<ngx-gridster [options]=\"gridsterOptions\" [draggableOptions]=\"gridsterDraggableOptions\" (reflow)=\"onReflow($event)\"\n\t\t\t(optionsChange)=\"optionsChange($event)\" #gridster1 class=\"dashboard\">\n\t\t\t\t<ngx-gridster-item *ngFor=\"let widget of widgets; let indx = index\" #itemComp\n\t\t\t\t\t[options]=\"itemOptions\"\n\t\t\t\t\t[dragAndDrop]=\"widget.dragAndDrop\" [resizable]=\"widget.resizable\"\n\t\t\t\t\t[(x)]=\"widget.x\" [(y)]=\"widget.y\"\n\t\t\t\t\t[(xSm)]=\"widget.xSm\" [(ySm)]=\"widget.ySm\"\n\t\t\t\t\t[(xMd)]=\"widget.xMd\" [(yMd)]=\"widget.yMd\"\n\t\t\t\t\t[(xLg)]=\"widget.xLg\" [(yLg)]=\"widget.yLg\"\n\t\t\t\t\t[(xXl)]=\"widget.xXl\" [(yXl)]=\"widget.yXl\"\n\t\t\t\t\t[(w)]=\"widget.w\" [(h)]=\"widget.h\"\n\t\t\t\t\t[(wSm)]=\"widget.wSm\" [(hSm)]=\"widget.hSm\"\n\t\t\t\t\t[(wMd)]=\"widget.wMd\" [(hMd)]=\"widget.hMd\"\n\t\t\t\t\t[(wLg)]=\"widget.wLg\" [(hLg)]=\"widget.hLg\"\n\t\t\t\t\t[(wXl)]=\"widget.wXl\" [(hXl)]=\"widget.hXl\"\n\t\t\t\t\t(change)=\"itemChange($event)\">\n\t\t\t\t\t<div class=\"custom-widget drag\" *ngIf=\"widget.type == 'one'\">\n\t\t\t\t\t\t<div class=\"content-body bg-white\">\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-ellipsis-h dark-blue link d-block text-right mt-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-database dark-blue text-left d-block ml-2 fon-inc\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<h6 class=\"dark-blue text-right\">45</h6>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t<div class=\"content-footer wid-footer d-flex flex-column justify-content-center\">\n\t\t\t\t\t\t\t<p>{{widget.name}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"custom-widget drag\" *ngIf=\"widget.type == 'two'\">\n\t\t\t\t\t\t<div class=\"content-body bg-cyan\">\n\t\t\t\t\t\t\t<i class=\"text-white icon-md fa fa-eye link d-block ml-2 mt-1\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<i class=\"text-white icon-lg fa fa-database text-left d-block ml-2 mt-1 fon-inc\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<p class=\"text-white text-right mr-1 font-weight-bold\">{{widget.name}}</p>\n\t\t\t\t\t\t\t<h6 class=\"text-white text-right mt-1 mr-1\">45</h6>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t<div class=\"content-footer d-flex flex-column justify-content-center bg-dark-blue\">\n\t\t\t\t\t\t\t<p class=\"text-white\">Lastday</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"custom-widget drag chart\" *ngIf=\"widget.type == 'three'\">\n\t\t\t\t\t\t<div class=\"content-body\">\n\t\t\t\t\t\t\t<ng-container *ngIf=\"widget.name == 'pie'\">\n\t\t\t\t\t\t\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"font-weight-bold\">Amount Receivable vs Amount Received</h6>\n\t\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<app-dash-pie-chart></app-dash-pie-chart>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngIf=\"widget.name == 'income'\">\n\t\t\t\t\t\t\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"font-weight-bold\">Income vs Expenses</h6>\n\t\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<app-dash-income-chart></app-dash-income-chart>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t<div class=\"content-footer wid-footer d-flex flex-column justify-content-center\">\n\t\t\t\t\t\t\t<ng-container *ngIf=\"widget.name == 'pie'\">\n\t\t\t\t\t\t\t\t<p>Campaign sent 2 days ago</p>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngIf=\"widget.name == 'income'\">\n\t\t\t\t\t\t\t\t<p>Data Information Certified</p>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"custom-widget drag\" *ngIf=\"widget.type == 'four'\">\n\t\t\t\t\t\t<div class=\"content-body\">\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye cyan-color link d-block\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card cyan-color mt-2 d-block wid-icon-four\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<h6 class=\"font-weight-bold dark-blue text-right\">45</h6>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t<div class=\"content-footer wid-footer d-flex flex-column justify-content-center\">\n\t\t\t\t\t\t\t<p>{{widget.name}}</p>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"custom-widget drag\" *ngIf=\"widget.type == 'five'\">\n\t\t\t\t\t\t<div class=\"meeting-schedule custom-dash-wid-sroll height-five ml-2\" *ngIf=\"widget.name == 'Meeting'\">\n\t\t\t\t\t\t\t<app-dash-meeting></app-dash-meeting>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"announcement custom-dash-wid-sroll height-five ml-2\" *ngIf=\"widget.name == 'Announcement'\">\n\t\t\t\t\t\t\t<app-dash-broad-cast></app-dash-broad-cast>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</ngx-gridster-item>\n\t\t\t</ngx-gridster>\n\t\t</div>\n\t</div>\n\t<div class=\"static-com\">\n\t\t<div class=\"row mt-5 ml-0\">\n\t\t\t<div class=\"col-sm-6 dashboard-col-pad wid-height ml-0\">\n\t\t\t\t<app-dash-com-list [label]=\"'Emergency Alerts'\"></app-dash-com-list>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6 dashboard-col-pad wid-height\">\n\t\t\t\t<app-dash-com-list [label]=\"'Recent Violations'\"></app-dash-com-list>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row mt-5 ml-0 mb-3\">\n\t\t\t<div class=\"col-sm-6 dashboard-col-pad wid-height\">\n\t\t\t\t<app-dash-com-list [label]=\"'Work Permit'\"></app-dash-com-list>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6 dashboard-col-pad wid-height\">\n\t\t\t\t<app-dash-com-list [label]=\"'Facility Bookings'\"></app-dash-com-list>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsDashboardSecurityDashboardSecurityDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  security-dashboard works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsDashboardStaffDashboardStaffDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  staff-dashboard works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/admin-dash-first-row/admin-dash-first-row.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/admin-dash-first-row/admin-dash-first-row.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedAdminDashFirstRowAdminDashFirstRowComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mt-4\">\n    <div class=\"col-sm-2 dashboard-col-pad\" *ngFor= \"let data of widgets\">\n       <div class=\"admin-wid-one flip\" #menu *ngIf=\"!data.middle\">\n            <div class=\"front\">\n                <div class=\"card dashboard-card\">\n                    <div class=\"card-body d-flex justify-content-between\">\n                            <i class=\"icon-lg fa fa-database dark-blue text-left\" aria-hidden=\"true\"></i>\n                        <div class=\"text-right\">\n                            <i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n                            <i class=\"icon-md fa fa-caret-right dark-blue link\" (click)=\"flip(menu)\" aria-hidden=\"true\"></i>\n                            <h6 class=\"mt-2\">{{data.frontValue}}</h6> \n                        </div>\n                    </div>\n                    <div class=\"card-footer d-flex justify-content-between\">\n                        <p>{{data.front}}</p>\n                        <div class=\"dashboard-dropdown\" *ngIf=\"data.frontFooter\">\n                            <i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\" [matMenuTriggerFor]=\"appFront\"></i>\n                            <mat-menu #appFront=\"matMenu\">\n                                <p mat-menu-item (click)=\"filter('today',data.front,data.type)\">Today</p>\n                                <p mat-menu-item (click)=\"filter('yesterday',data.front,data.type)\">Yesterday</p>\n                                <p mat-menu-item (click)=\"calenderPopUp(data.front,data.type)\">Custom</p>\n                            </mat-menu>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"back\">\n                <div class=\"card dashboard-card\">\n                    <div class=\"card-body d-flex justify-content-between\">\n                            <i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n                        <div class=\"text-right\">\n                            <i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n                            <i class=\"icon-md fa fa-caret-left dark-blue link\" (click)=\"flip(menu)\" aria-hidden=\"true\"></i>\n                            <h6 class=\"mt-2\">{{data.backValue}}</h6> \n                        </div>\n                    </div>\n                    <div class=\"card-footer d-flex justify-content-between\">\n                        <p>{{data.back}}</p>\n                        <div class=\"dashboard-dropdown\" *ngIf=\"data.backFooter\">\n                            <i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\" [matMenuTriggerFor]=\"appBack\"></i>\n                            <mat-menu #appBack=\"matMenu\">\n                                <p mat-menu-item (click)=\"filter('today',data.back,data.type)\">Today</p>\n                                <p mat-menu-item (click)=\"filter('yesterday',data.back,data.type)\">Yesterday</p>\n                                <p mat-menu-item (click)=\"calenderPopUp(data.back,data.type)\">Custom</p>\n                            </mat-menu>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"admin-wid-one\" *ngIf=\"data.middle\">\n            <div class=\"card dashboard-card\" *ngIf= \"colType == 'owner'\">\n                <div class=\"card-body d-flex justify-content-between\">\n                        <i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n                    <div class=\"text-right\">\n                        <i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\"  aria-hidden=\"true\"></i>\n                        <i class=\"icon-md fa fa-caret-right dark-blue link\" (click)=\"colType='tenants'\" aria-hidden=\"true\"></i>\n                        <h6 class=\"mt-2\">{{data.frontValue}}</h6> \n                    </div>\n                </div>\n                <div class=\"card-footer d-flex justify-content-between\">\n                    <p>{{data.front}}</p>\n                    <div class=\"dashboard-dropdown\" *ngIf=\"data.frontFooter\">\n                        <i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\" [matMenuTriggerFor]=\"widront\"></i>\n                        <mat-menu #widFront=\"matMenu\">\n                            <p mat-menu-item (click)=\"filter('today',data.front,data.type)\">Today</p>\n                            <p mat-menu-item (click)=\"filter('yesterday',data.front,data.type)\">Yesterday</p>\n                            <p mat-menu-item (click)=\"calenderPopUp(data.front,data.type)\">Custom</p>\n                        </mat-menu>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card dashboard-card\" *ngIf= \"colType == 'tenants'\">\n                <div class=\"card-body d-flex justify-content-between\">\n                        <i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n                    <div class=\"text-right\">\n                        <i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n                        <i class=\"icon-md fa fa-caret-right dark-blue link\" (click)=\"colType='admin'\" aria-hidden=\"true\"></i>\n                        <h6 class=\"mt-2\">{{data.middleValue}}</h6> \n                    </div>\n                </div>\n                <div class=\"card-footer d-flex justify-content-between\">\n                    <p>{{data.middle}}</p>\n                    <div class=\"dashboard-dropdown\" *ngIf=\"data.frontFooter\">\n                        <i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\" [matMenuTriggerFor]=\"widMiddle\"></i>\n                        <mat-menu #widMiddle=\"matMenu\">\n                            <p mat-menu-item (click)=\"filter('today',data.middle,data.type)\">Today</p>\n                            <p mat-menu-item (click)=\"filter('yesterday',data.middle,data.type)\">Yesterday</p>\n                            <p mat-menu-item (click)=\"calenderPopUp(data.middle,data.type)\">Custom</p>\n                        </mat-menu>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card dashboard-card\" *ngIf= \"colType == 'admin'\">\n                <div class=\"card-body d-flex justify-content-between\">\n                        <i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n                    <div class=\"text-right\">\n                        <i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n                        <i class=\"icon-md fa fa-caret-right dark-blue link\" (click)=\"colType='owner'\" aria-hidden=\"true\"></i>\n                        <h6 class=\"mt-2\">{{data.backValue}}</h6> \n                    </div>\n                </div>\n                <div class=\"card-footer d-flex justify-content-between\">\n                    <p>{{data.back}}</p>\n                    <div class=\"dashboard-dropdown\" *ngIf=\"data.frontFooter\">\n                        <i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\" [matMenuTriggerFor]=\"widBack\"></i>\n                        <mat-menu #widBack=\"matMenu\">\n                            <p mat-menu-item (click)=\"filter('today',data.back,data.type)\">Today</p>\n                            <p mat-menu-item (click)=\"filter('yesterday',data.back,data.type)\">Yesterday</p>\n                            <p mat-menu-item (click)=\"calenderPopUp(data.back,data.type)\">Custom</p>\n                        </mat-menu>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/admin-dash-second-row/admin-dash-second-row.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/admin-dash-second-row/admin-dash-second-row.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedAdminDashSecondRowAdminDashSecondRowComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"second-row-layout flip\" #menu *ngIf=\"!label.side\">\n    <div class=\"front\">\n        <div class=\"card dashboard-card\">\n            <div class=\"card-body align-left-right height-wid\" [ngClass]=\"label.row == 'blue' ? 'bg-card-body' : ''\">\n                <div class=\"text-left\">\n                    <i [ngClass]=\"label.row == 'blue' ? 'text-white' : 'cyan-color'\" class=\"icon-md fa fa-eye link mb-3\" aria-hidden=\"true\"></i>\n                    <br>\n                    <i [ngClass]=\"label.row == 'blue' ? 'text-white' : 'cyan-color'\" class=\"icon-lg fa fa-credit-card\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"text-right\">\n                    <i [ngClass]=\"label.row == 'blue' ? 'text-white' : 'cyan-color'\" class=\"icon-md fa fa-caret-right link\" (click)=\"flip(menu)\" aria-hidden=\"true\"></i>\n                    <p *ngIf=\"label.row == 'blue'\" [ngClass]=\"label.row == 'blue' ? 'text-white' : 'cyan-color'\">{{label.front}}</p> \n                    <h6 [ngClass]=\"label.row == 'blue' ? 'text-white mt-2' : 'dark-blue font-weight-bold mt-4'\">{{label.frontValue}}</h6> \n                </div>\n            </div>\n            <div class=\"card-footer align-left-right\" [ngClass]=\"label.row == 'blue' ? 'bg-card-footer' : ''\">\n                <div *ngIf=\"label.row == 'blue'\">\n                    <p class=\"text-white\"> \n                        <i class=\"fa fa-calendar mr-3 text-white\" aria-hidden=\"true\"></i>Last day\n                    </p>\n                </div>\n                <div *ngIf=\"label.row != 'blue'\">\n                    <p> {{label.front}}</p>\n                </div>\n                <div class=\"dashboard-dropdown\" *ngIf=\"label.frontFooter\">\n                    <i [matMenuTriggerFor]=\"appwidgetFront\" [ngClass]=\"label.row == 'blue' ? 'text-white' : 'dark-blue'\" class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\"></i>\n                    <mat-menu #appwidgetFront=\"matMenu\">\n                        <p mat-menu-item (click)=\"filter('today',label.front,label.type)\">Today</p>\n                        <p mat-menu-item (click)=\"filter('yesterday',label.front,label.type)\">Yesterday</p>\n                        <p mat-menu-item (click)=\"calenderPopUp(label.front,label.type)\">Custom</p>\n                    </mat-menu>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"back\">\n        <div class=\"card dashboard-card\">\n            <div class=\"card-body align-left-right height-wid\" [ngClass]=\"label.row == 'blue' ? 'bg-card-body' : ''\">\n                <div class=\"text-left\">\n                    <i [ngClass]=\"label.row == 'blue' ? 'text-white' : 'cyan-color'\" class=\"icon-md fa fa-eye link mb-3\" aria-hidden=\"true\"></i>\n                    <br>\n                    <i [ngClass]=\"label.row == 'blue' ? 'text-white' : 'cyan-color'\" class=\"icon-lg fa fa-credit-card\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"text-right\">\n                    <i [ngClass]=\"label.row == 'blue' ? 'text-white' : 'cyan-color'\" class=\"icon-md fa fa-caret-right link\" (click)=\"flip(menu)\" aria-hidden=\"true\"></i>\n                    <p *ngIf=\"label.row == 'blue'\" [ngClass]=\"label.row == 'blue' ? 'text-white' : 'cyan-color'\">{{label.back}}</p> \n                    <h6 [ngClass]=\"label.row == 'blue' ? 'text-white mt-2' : 'dark-blue font-weight-bold mt-4'\">{{label.backValue}}</h6> \n                </div>\n            </div>\n            <div class=\"card-footer align-left-right\" [ngClass]=\"label.row == 'blue' ? 'bg-card-footer' : ''\">\n                <div *ngIf=\"label.row == 'blue'\">\n                    <p class=\"text-white\"> \n                        <i class=\"fa fa-calendar mr-3 text-white\" aria-hidden=\"true\"></i>Last day\n                    </p>\n                </div>\n                <div *ngIf=\"label.row != 'blue'\">\n                    <p> {{label.back}}</p>\n                </div>\n                <div class=\"dashboard-dropdown\" *ngIf=\"label.backFooter\">\n                     <i [matMenuTriggerFor]=\"appwidgetBack\" [ngClass]=\"label.row == 'blue' ? 'text-white' : 'dark-blue'\" class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\"></i>\n                    <mat-menu #appwidgetBack=\"matMenu\">\n                        <p mat-menu-item (click)=\"filter('today',label.back,label.type)\">Today</p>\n                        <p mat-menu-item (click)=\"filter('yesterday',label.back,label.type)\">Yesterday</p>\n                        <p mat-menu-item (click)=\"calenderPopUp(label.back,label.type)\">Custom</p>\n                    </mat-menu>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n    \n<div class=\"second-single-page\" *ngIf=\"label.side\">\n    <div class=\"card dashboard-card\">\n        <div class=\"card-body align-left-right height-wid\">\n            <div class=\"text-left\">\n                <i class=\"icon-md fa fa-eye cyan-color link\" aria-hidden=\"true\"></i>\n                <br>\n                <i class=\"icon-lg fa fa-credit-card cyan-color mt-2\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"text-right\">\n                <h5 class=\"font-weight-bold dark-blue mt-5 pt-2\">{{label.frontValue}}</h5> \n            </div>\n        </div>\n        <div class=\"card-footer align-left-right\">\n            <p>{{label.front}}</p>\n            <!-- <i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i> -->\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedBankCompBankCompComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bank-comp--wrapper\">\n\t\n\t<div class=\"card table-card chart-card\">\n\t\t<div class=\"card-body chart-body\">\n\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/bank-blue-icon.svg\" width=\"18\" />Bank & Cash</h5>\n\t\t\t<div class=\"filter-menu\">\n\t\t\t\t<app-dash-filter-menu type=\"normal\"></app-dash-filter-menu>\n\t\t\t</div>\n\t\t\t<p class=\"intro\">For Accounting period 01/04/2019 - 31/03/2019</p>\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockno')\">Account <span [ngClass]=\"getFieldOrderBy('blockno')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitno')\">Balance <span [ngClass]=\"getFieldOrderBy('unitno')\"></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let bank of bankCashData\">\n\t\t\t\t      <td class=\"name\"><a href=\"javascript:void(0)\">{{bank.account}}</a></td>\n\t\t\t\t      <td class=\"grey\">{{bank.balance}}</td>\n\t\t\t    </tbody>\n\t\t\t</table>\n\n\t\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-broad-cast/dash-broad-cast.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-broad-cast/dash-broad-cast.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedDashBroadCastDashBroadCastComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-between mb-3 mr-3\">\n    <div>\n        <h6 class=\"font-weight-bold d-inline dark-blue\">Recent Announcements</h6>\n    </div>\n    <div>\n        <i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\" (click)=\"calenderPopUp('broadcast')\"></i>\n    </div>\n</div>\n<div class=\"main-content\" [perfectScrollbar]=\"config\">\n    <div class=\"border-line mt-3\" *ngFor=\"let data of broadCastList;let i =index\">\n        <div class=\"row mb-3\">\n            <div class=\"col-sm-9\">\n                <div class=\"d-flex\">\n                    <div class=\"announce-round text-white more font-weight-bold\" [ngClass]=\"i%2==0 ? 'bg-blue' : 'bg-dark-blue'\">{{data.subject | slice:0:1  | uppercase}}</div>\n                    <div class=\"ml-3 sub-width\" (mouseover)=\"content(dom,'hover')\" (mouseout)=\"content(dom,'leave')\" #dom>\n                        <p class=\"more\">{{data.subject | slice:0:39 }} ...</p>\n                        <p class=\"more sub-hide\">{{data.subject}}</p>\n                        <p class=\"text-muted\">{{data.description}}</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <p class=\"text-muted\">{{data.insertedOn | date: 'EEE, MMM d, y'}}</p>\n                <p class=\"text-muted\">{{data.insertedOn | date: 'h:mm a'}}</p>\n            </div>\n        </div>\n    </div>\n    <p class=\"more font-weight-bold text-center mt-2 mb-2\" *ngIf=\"broadCastList?.length == 0\">No Data Found</p>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-com-list/dash-com-list.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-com-list/dash-com-list.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedDashComListDashComListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card dashboard-card notification\">\n    <div class=\"card-body\">\n        <div class=\"align-left-right mb-3 mr-3\">\n            <div>\n                <i class=\"icon-md fa fa-bell-o mr-3 dark-blue\" aria-hidden=\"true\"></i>\n                <h6 class=\"font-weight-bold d-inline dark-blue\">{{label}} <span *ngIf=\"label == 'Work Permit'\">(On Going)</span></h6>\n            </div>\n            <div>\n                <i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i>\n            </div>\n        </div>\n        <div class=\"main-content\" [perfectScrollbar]=\"config\">\n            <ng-container *ngIf=\"label == 'Emergency Alerts'\">\n                <div class=\"border-line mt-3\" *ngFor=\"let data of emergencyAlert\">\n                    <div class=\"row mb-2\">\n                        <div class=\"col-sm-9\">\n                            <p class=\"more\">{{data.notes}}</p> \n                            <p class=\"font-weight-bold dark-blue\">{{data.apartmentBlockUnitId}}</p>\n                        </div>\n                        <div class=\"col-sm-3\">\n                            <p class=\"text-muted\">{{data.insertedOn | date: 'EEE, MMM d, y'}}</p>\n                            <p class=\"text-muted\">{{data.insertedOn | date: 'h:mm a'}}</p>\n                        </div>\n                    </div>\n                </div>\n                <p class=\"more font-weight-bold text-center mt-2 mb-2\" *ngIf=\"emergencyAlert?.length == 0\">No Data Found</p>\n            </ng-container>\n            <ng-container *ngIf=\"label == 'Recent Violations'\">\n                <div class=\"border-line mt-3\" *ngFor=\"let data of violation\">\n                    <div class=\"row mb-2\">\n                        <div class=\"col-sm-9\">\n                            <p class=\"more\">{{data.violationCategory}}</p> \n                            <p class=\"font-weight-bold\">\n                                <span class=\" dark-blue\">{{data.securityPerson}}</span> \n                                <span class=\"text-muted\"> {{data.tower_unitname}}</span>\n                            </p>\n                        </div>\n                        <div class=\"col-sm-3\">\n                            <p class=\"text-muted\">{{data.insertedOn | date: 'EEE, MMM d, y'}}</p>\n                            <p class=\"text-muted\">{{data.insertedOn | date: 'h:mm a'}}</p>\n                        </div>\n                    </div>\n                </div>\n                <p class=\"more font-weight-bold text-center mt-2 mb-2\" *ngIf=\"violation?.length == 0\">No Data Found</p>\n            </ng-container>\n            <ng-container *ngIf=\"label == 'Work Permit'\">\n                <div class=\"border-line mt-3\" *ngFor=\"let data of workPermit;let i=index\">\n                    <div class=\"row mb-2\">\n                        <div class=\"col-sm-8\">\n                            <div class=\"d-flex\">\n                                <div class=\"workpermit-round text-white more font-weight-bold mr-2\" [ngClass]=\"i%2==0 ? 'bg-blue' : 'bg-dark-blue'\">{{data.status | slice:0:2  | uppercase}}</div>\n                                <div class=\"wp-width\">\n                                    <p class=\"more\">{{data.wptitle}}</p> \n                                    <p class=\"font-weight-bold\">\n                                        <span class=\" dark-blue\">{{data.residentName}}</span>\n                                        <span class=\"text-muted\"> {{data.apartmentBlockNumber}}/{{data.apartmentBlockUnitNumber}}</span>\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <p class=\"text-muted\">{{data.startDate | date: 'EEE, MMM d, y'}} {{data.startTime }} </p>\n                            <p class=\"text-muted\">{{data.endDate | date: 'EEE, MMM d, y'}} {{data.endTime}}</p>\n                        </div>\n                    </div>\n                </div>\n                <p class=\"more font-weight-bold text-center mt-2 mb-2\" *ngIf=\"workPermit?.length == 0\">No Data Found</p>\n            </ng-container>\n            <ng-container *ngIf=\"label == 'Facility Bookings'\">\n                <div class=\"border-line mt-3\" *ngFor=\"let data of facility\">\n                    <div class=\"row mb-2\">\n                        <div class=\"col-sm-9\">\n                            <p class=\"more\">{{data.facilityName}}</p> \n                            <p class=\"font-weight-bold\">\n                                <span class=\"dark-blue\">{{data.residentName}}</span>\n                                <span class=\"text-muted\"> {{data.location}} {{data.apartmentBlockUnitId}}</span>\n                            </p>\n                        </div>\n                        <div class=\"col-sm-3\">\n                            <p class=\"text-muted\">{{data.bookedFromTime }} - {{data.bookedToTime}}</p>\n                            <p class=\"text-muted\">{{data.bookedForDate | date: 'EEE, MMM d, y'}}</p>\n                        </div>\n                    </div>\n                </div>\n                <p class=\"more font-weight-bold text-center mt-2 mb-2\" *ngIf=\"facility?.length == 0\">No Data Found</p>\n            </ng-container>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedDashIncomeChartDashIncomeChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n <jqxChart #myChart\n    [width]=\"getWidth()\" [height]=\"265\"\n    [title]=\"''\" [description]=\"''\" [showBorderLine]=\"false\"\n    [showLegend]=\"true\" [enableAnimations]=\"true\" [padding]=\"padding\"\n    [titlePadding]=\"titlePadding\" [source]=\"days\" [xAxis]=\"xAxis\"\n    [valueAxis]=\"valueAxis\" [seriesGroups]=\"seriesGroups\" [colorScheme]=\"'scheme02'\">\n</jqxChart>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-meeting/dash-meeting.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-meeting/dash-meeting.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedDashMeetingDashMeetingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"d-flex justify-content-between mb-3 mr-3\">\n    <div>\n        <i class=\"icon-md fa fa-calendar mr-3 dark-blue\" aria-hidden=\"true\"></i>\n        <h6 class=\"font-weight-bold d-inline dark-blue\">Meeting Schedules</h6>\n    </div>\n    <div>\n        <p class=\"font-weight-bold d-inline mr-3 more dark-blue\">More</p>\n        <i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\" (click)=\"calenderPopUp('meeting')\"></i>\n    </div>\n</div>\n<div class=\"main-content\" [perfectScrollbar]=\"config\">\n    <div class=\"border-line mt-3\" *ngFor=\"let data of meetingList\">\n        <div class=\"row mb-2\">\n            <div class=\"col-sm-8\">\n                <p class=\"more\">{{data.subject}}</p>\n            </div>\n            <div class=\"col-sm-4\">\n                <p class=\"more\">{{data.fromTime }} - {{data.toTime}}</p>\n                <p class=\"text-muted\">{{data.meetingDate | date: 'EEE, MMM d, y'}}</p>\n            </div>\n        </div>\n    </div>\n    <p class=\"more font-weight-bold text-center mt-2 mb-2\" *ngIf=\"meetingList?.length == 0\">No Data Found</p>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedDashPieChartDashPieChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<jqxChart\n    [width]=\"getWidth()\" [height]=\"250\"\n    [title]=\"''\" [description]=\"''\"\n    [showLegend]=\"false\" [enableAnimations]=\"true\" [padding]=\"padding\"\n    [titlePadding]=\"titlePadding\" [source]=\"dataAdapter\"\n    [showBorderLine]=\"false\" [seriesGroups]=\"seriesGroups\" [colorScheme]=\"'scheme02'\">\n</jqxChart>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/date-model/date-model.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/date-model/date-model.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedDateModelDateModelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"date-modal-wrapper\">\n    <form #dashboardFilter=\"ngForm\" name=\"dashboardFilter\" *ngIf=\"data != 'unapprove' && data != 'unassigned' && data != 'openaged' && data != 'panicAlerts'\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"input-box\">\n                    <label>From Date</label>\n                    <input class=\"form-control\" name=\"Startdate\" [owlDateTime]=\"Startdate\"\n                    [owlDateTimeTrigger]=\"Startdate\" [(ngModel)]=\"dashboard.fromDate\" placeholder=\"From Date\" autocomplete=\"off\" required>\n                    <owl-date-time #Startdate [pickerType]=\"'calendar'\"></owl-date-time>\n                    <div class=\"date-btn\">\n                        <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"input-box\">\n                    <label>To Date</label>\n                    <input class=\"form-control\" name=\"Enddate\" [owlDateTime]=\"Enddate\"\n                    [owlDateTimeTrigger]=\"Enddate\" [(ngModel)]=\"dashboard.toDate\" placeholder=\"To Date\" autocomplete=\"off\" required>\n                    <owl-date-time #Enddate [pickerType]=\"'calendar'\"></owl-date-time>\n                    <div class=\"date-btn\">\n                        <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row btn-wrapper\">\n            <div class=\"col-sm-12 text-right\">\n                <button  class=\"btn blue mr-3\"[disabled]=\"dashboardFilter.invalid\" (click)=\"onConfirm()\">Filter</button>\n                <button  class=\"btn trans-white\" (click)=\"onDismiss()\">Cancel</button>\n            </div>\n        </div>\n    </form>\n    <form #dateFilter=\"ngForm\" name=\"dateFilter\" *ngIf=\"data == 'unapprove' ||  data == 'unassigned' || data == 'openaged' || data == 'panicAlerts'\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"input-box\">\n                    <label *ngIf=\"data == 'unapprove' || data == 'openaged'\">Date</label>\n                    <label *ngIf=\"data == 'unassigned' || data == 'panicAlerts'\">From</label>\n                    <input class=\"form-control\" name=\"Fromdate\" [owlDateTime]=\"Fromdate\"\n                    [owlDateTimeTrigger]=\"Fromdate\" [(ngModel)]=\"dashboard.date\" placeholder=\"From Date\" autocomplete=\"off\" required>\n                    <owl-date-time #Fromdate [pickerType]=\"'calendar'\"></owl-date-time>\n                    <div class=\"date-btn\">\n                        <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6\" *ngIf=\"data == 'openaged'\">\n                <div class=\"input-box\">\n                    <label>No of Days</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"No of days\" name=\"noOfDays\" [(ngModel)]=\"dashboard.noOfDays\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row btn-wrapper\">\n            <div class=\"col-sm-12 text-right\">\n                <button  class=\"btn blue mr-3\" [disabled]=\"dateFilter.invalid\" (click)=\"onConfirm()\">Filter</button>\n                <button  class=\"btn trans-white\" (click)=\"onDismiss()\">Cancel</button>\n            </div>\n        </div>\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedExpenseTrackerCompExpenseTrackerCompComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"expense-tracker-wrapper\">\n\t<div class=\"card chart-card\">\n\t\t<div class=\"card-body chart-body\">\n\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/expense-blue-icon.svg\" width=\"22\" />Expense Tracker</h5>\n\t\t\t<div class=\"filter-menu\">\n\t\t\t\t<app-dash-filter-menu type=\"normal\"></app-dash-filter-menu>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"chart-box mb-4\">\n\t\t\t\t\t\t<canvas #expensePieChart></canvas>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h6 class=\"label text-center mb-3\">Variance Amount - 2261.1k</h6>\n\t\t\t\t\t<p class=\"intro text-center\">01-10-2018 to 01-10-2019</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<ul class=\"list-group lists\">\n\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t<div class=\"float-left\">Aug</div>\n\t\t\t\t\t<div class=\"float-right\">0</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t<div class=\"float-left\">Sep</div>\n\t\t\t\t\t<div class=\"float-right\">1646.2K</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t<div class=\"float-left\">Oct</div>\n\t\t\t\t\t<div class=\"float-right\">0</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedHelpdeskChartHelpdeskChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"helpdesk-doughnut-wrapper\">\n\t<div class=\"card chart-card\">\n\t\t\n\t\t<div class=\"card-body chart-body simple\">\n\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/support-blue-icon.svg\" width=\"20\" />Helpdesk Tracker</h5>\n\t\t\t<div class=\"filter-menu\">\n\t\t\t\t<app-dash-filter-menu type=\"normal\"></app-dash-filter-menu>\n\t\t\t</div>\n\t\t\t<div class=\"row rel\">\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"details-wrapper\">\n\t\t\t\t\t\t<div class=\"title\">Open Tickets</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<h6>Personal</h6>\n\t\t\t\t\t\t\t<h3>{{totalOpenPersonalTickets}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<h6>Community</h6>\n\t\t\t\t\t\t\t<h3>{{totalOpenCommunityTickets}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 col-border\">\n\t\t\t\t\t<div class=\"details-wrapper col-border-padding\">\n\t\t\t\t\t\t<div class=\"title\">Urgent Tickets</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<h6>Personal</h6>\n\t\t\t\t\t\t\t<h3>{{totalUrgentPersonalTickets}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<h6>Community</h6>\n\t\t\t\t\t\t\t<h3>{{totalUrgentCommunityTickets}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"btn-wrapper text-center\">\n\t\t\t\t<a class=\"btn sf blue\"\n\t\t\t\thref=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/helpdesk/add-ticket\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">Lodge Tickets</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedIncomeTrackerCompIncomeTrackerCompComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-tracker-wrapper\">\n\t<div class=\"card chart-card\">\n\t\t<div class=\"card-body chart-body\">\n\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/income-blue-icon.svg\" width=\"22\" />Income Tracker</h5>\n\t\t\t<div class=\"filter-menu\">\n\t\t\t\t<app-dash-filter-menu type=\"normal\"></app-dash-filter-menu>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"chart-box mb-4\">\n\t\t\t\t\t\t<canvas #incomePieChart></canvas>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h6 class=\"label text-center mb-3\">Balance Amount - 2261.1k</h6>\n\t\t\t\t\t<p class=\"intro text-center\">01-10-2018 to 01-10-2019</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<ul class=\"list-group lists\">\n\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t<div class=\"float-left\">Aug</div>\n\t\t\t\t\t<div class=\"float-right\">0</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t<div class=\"float-left\">Sep</div>\n\t\t\t\t\t<div class=\"float-right\">1646.2K</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t<div class=\"float-left\">Oct</div>\n\t\t\t\t\t<div class=\"float-right\">0</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedLedgerCompLedgerCompComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ledger-comp--wrapper\">\n\t\n\t<div class=\"card table-card chart-card\">\n\t\t<div class=\"card-body chart-body\">\n\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/book-blue-icon.svg\" width=\"22\" />General Ledger</h5>\n\t\t\t<div class=\"filter-menu\">\n\t\t\t\t<app-dash-filter-menu type=\"normal\"></app-dash-filter-menu>\n\t\t\t</div>\n\t\t\t<p class=\"intro\">For Accounting period 01/04/2019 - 31/03/2019</p>\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockno')\">Class <span [ngClass]=\"getFieldOrderBy('blockno')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitno')\">Credit <span [ngClass]=\"getFieldOrderBy('unitno')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('sqrt')\">Debit <span [ngClass]=\"getFieldOrderBy('sqrt')\"></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let ledge of ledgerData\">\n\t\t\t\t      <td class=\"name\"><a href=\"javascript:void(0)\">{{ledge.class}}</a></td>\n\t\t\t\t      <td class=\"grey\">{{ledge.credit}}</td>\n\t\t\t\t      <td class=\"grey\">{{ledge.debit}}</td>\n\t\t\t    </tbody>\n\t\t\t</table>\n\n\t\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedPaymentCompPaymentCompComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"payment-comp-wrapper\">\n\t<div class=\"card chart-card\">\n\t\t<div class=\"card-body chart-body text-box\">\n\t\t\t<h3 class=\"text-center\">34</h3>\n\t\t\t<h5 class=\"text-center d-block p-0\">Payment Defaulters</h5>\n\t\t</div>\n\t</div>\n\t<div class=\"card chart-card mt-2\">\n\t\t<div class=\"card-body chart-body text-box\">\n\t\t\t<h3 class=\"text-center\">1258</h3>\n\t\t\t<h5 class=\"text-center d-block p-0\">Pending Vendor Payments</h5>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedUnitChartUnitChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"unit-doughnut-wrapper\">\n\t<div class=\"card chart-card\">\n\t\t<div class=\"card-body\">\n\t\t\t<h5>Units</h5>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-4 legends\">\n\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t<span class=\"dots small low mr-2\"></span>\n\t\t\t\t\t\t<span>Total Units</span>\n\t\t\t\t\t\t<span class=\"ml-3\">{{totalUnits}}</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t<span class=\"dots small medium mr-2\"></span>\n\t\t\t\t\t\t<span>Admins</span>\n\t\t\t\t\t\t<span class=\"ml-3\">10</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t<span class=\"dots small cyan mr-2\"></span>\n\t\t\t\t\t\t<span>Logged-in users</span>\n\t\t\t\t\t\t<span class=\"ml-3\">5</span>\n\t\t\t\t\t</li>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-8\">\n\t\t\t\t\t<div class=\"chart-box\">\n\t\t\t\t\t\t<canvas #unitPieChart></canvas>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedUsersChartUsersChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"user-doughnut-wrapper\">\n\t<div class=\"card chart-card\">\n\t\t<div class=\"card-body chart-body simple\">\n\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/user-blue-icon.svg\" width=\"20\" />Users & Units</h5>\n\t\t\t<div class=\"filter-menu\">\n\t\t\t\t<app-dash-filter-menu type=\"normal\"></app-dash-filter-menu>\n\t\t\t</div>\n\t\t\t<div class=\"row rel\">\n\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t<div class=\"details-wrapper\">\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<h6>Total Users</h6>\n\t\t\t\t\t\t\t<h3>{{totalUsers}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"details clear mt-5\">\n\t\t\t\t\t\t\t<h6>Total Units</h6>\n\t\t\t\t\t\t\t<h3>{{totalUnits}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-7 col-border\">\n\t\t\t\t\t<div class=\"details-wrapper col-border-padding\">\n\t\t\t\t\t\t<div class=\"legends\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<div class=\"label\"><span class=\"dots small low mr-2\"></span><span class=\"mr-3\">{{totalUnapprovedUsers}}</span>Unapproved users</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<div class=\"label\"><span class=\"dots small low mr-2\"></span><span class=\"mr-3\">140</span>Admin</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedVisitorsCompVisitorsCompComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"visitors-camp-wrapper\">\n\t\n\t<div class=\"row\">\n\t\t\n\t\t<div class=\"col-sm-3\">\n\t\t\t<div class=\"card chart-card no-border ov\">\n\t\t\t\t<div class=\"card-body chart-body color-box s-blue ov\">\n\t\t\t\t\t<h3>20</h3>\n\t\t\t\t\t<h6>Panic alerts by Users</h6>\n\t\t\t\t\t<div class=\"range-box\">\n\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t<app-dash-filter-menu type=\"trans\"></app-dash-filter-menu>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/alarm-icon.svg\" width=\"22\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-3\">\n\t\t\t<div class=\"card chart-card no-border ov\">\n\t\t\t\t<div class=\"card-body chart-body color-box l-red ov\">\n\t\t\t\t\t<h3>04</h3>\n\t\t\t\t\t<h6>Parking/Rules Violations</h6>\n\t\t\t\t\t<div class=\"range-box\">\n\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t<app-dash-filter-menu type=\"trans\"></app-dash-filter-menu>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/wrong-access-icon.svg\" width=\"20\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<div class=\"card chart-card no-border ov\">\n\t\t\t\t<div class=\"card-body chart-body color-box green ov\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\t<h3>215</h3>\n\t\t\t\t\t\t\t\t<h6>Visitors Checked-in</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"details pb-0\">\n\t\t\t\t\t\t\t\t<h3>89</h3>\n\t\t\t\t\t\t\t\t<h6>Visitors Checked-out</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"range-box\">\n\t\t\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t\t\t<app-dash-filter-menu type=\"trans\"></app-dash-filter-menu>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/view-icon.svg\" width=\"22\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/dashboard.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/dashboard.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n\t\t<div class=\"text-right\">\n\t\t\t<h6 class=\"mr-2 d-inline\">{{dashBoardName}}</h6>\n\t\t\t<mat-slide-toggle [(ngModel)]=\"customDashBoard\" (change)=\"dashboardChange($event)\"></mat-slide-toggle>\n\t\t</div>\n\t\t<div *ngIf=\"!customDashBoard\">\n\t\t\t<app-admin-dashboard></app-admin-dashboard>\n\t\t</div>\n\t\t<div *ngIf=\"customDashBoard\">\n\t\t\t<app-custom-dashboard></app-custom-dashboard>\n\t\t</div>\n</div>";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsDashboardAdminDashboardAdminDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".admin-dashboard-wrapper .wid-height {\n  height: 343px;\n}\n.admin-dashboard-wrapper .dark-blue {\n  color: #236aaf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQztFQUNDLGFBQUE7QUNKRjtBRE1DO0VBQ0MsY0FBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2Rhc2hib2FyZC9jb21wb25lbnRzL2Rhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5hZG1pbi1kYXNoYm9hcmQtd3JhcHBlciB7XG5cdC53aWQtaGVpZ2h0IHtcblx0XHRoZWlnaHQ6IDM0M3B4O1xuXHR9XG5cdC5kYXJrLWJsdWUge1xuXHRcdGNvbG9yIDogJGRhcmstYmx1ZS0wMjtcblx0fVxufVxuXG4iLCIuYWRtaW4tZGFzaGJvYXJkLXdyYXBwZXIgLndpZC1oZWlnaHQge1xuICBoZWlnaHQ6IDM0M3B4O1xufVxuLmFkbWluLWRhc2hib2FyZC13cmFwcGVyIC5kYXJrLWJsdWUge1xuICBjb2xvcjogIzIzNmFhZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: AdminDashboardComponent */

  /***/
  function srcAppAmsDashboardComponentsDashboardAdminDashboardAdminDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
      return AdminDashboardComponent;
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


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/DashBoard */
    "./src/app/api/controllers/DashBoard.ts");

    var AdminDashboardComponent =
    /*#__PURE__*/
    function () {
      function AdminDashboardComponent(userService, sharedService, cookieService, dashboardService, dialog) {
        _classCallCheck(this, AdminDashboardComponent);

        this.userService = userService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.dashboardService = dashboardService;
        this.dialog = dialog;
        this.secondRowData = [{
          front: 'Open Community',
          back: 'Open Personal',
          frontFooter: true,
          backFooter: true,
          frontValue: '',
          backValue: '',
          type: 'ticket',
          row: 'blue'
        }, {
          front: 'High Priority Community',
          back: 'High Priority Personal',
          frontFooter: true,
          backFooter: true,
          frontValue: '',
          backValue: '',
          type: 'highPriority',
          row: 'blue'
        }, {
          front: 'Unassigned Community',
          back: 'Unassigned Personal',
          frontFooter: true,
          backFooter: true,
          frontValue: '',
          backValue: '',
          type: 'unassigned',
          row: 'blue'
        }, {
          front: 'Open Community Aged',
          back: 'Open Personal Aged',
          frontValue: '',
          backValue: '',
          type: 'openaged',
          row: 'blue',
          frontFooter: true,
          backFooter: true
        }];
        this.fourthRowData = [{
          front: 'InProgress Panic Alerts',
          back: 'Open Panic Alerts',
          frontValue: '',
          backValue: '',
          frontFooter: true,
          backFooter: true,
          type: 'panicAlerts',
          row: 'white'
        }, {
          front: 'Total Customer',
          frontValue: '',
          row: 'white',
          side: 'one'
        }, {
          front: 'Total Customer',
          frontValue: '',
          row: 'white',
          side: 'one'
        }, {
          front: 'Total Credit Note',
          frontValue: '',
          row: 'white',
          side: 'one'
        }];
        this.sixthRowData = [{
          front: 'Visitors In',
          back: 'Visitors Out',
          frontValue: '',
          backValue: '',
          frontFooter: true,
          backFooter: false,
          type: 'visitors',
          row: 'white'
        }, {
          front: 'Visitors Not Checked',
          frontValue: '',
          row: 'white',
          side: 'one'
        }, {
          front: 'Total Parking Slots',
          back: 'Unassigned Parking',
          frontValue: '',
          backValue: '',
          frontFooter: false,
          backFooter: false,
          type: '',
          row: 'white'
        }, {
          front: 'Facility Booking Approved',
          back: 'Facility Booking UnApproved',
          frontValue: '',
          backValue: '',
          frontFooter: false,
          backFooter: false,
          type: '',
          row: 'white'
        }];
        this.userRole = "";
      }

      _createClass(AdminDashboardComponent, [{
        key: "isAdmin",
        value: function isAdmin() {
          return this.userRole == "Admin" ? true : false;
        }
      }, {
        key: "isSecurity",
        value: function isSecurity() {
          return this.userRole == "Security" ? true : false;
        }
      }, {
        key: "isStaff",
        value: function isStaff() {
          return this.userRole == "Staff" ? true : false;
        }
      }, {
        key: "secondRow",
        value: function secondRow() {
          var _this66 = this;

          var entity = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            fromDate: new Date().toISOString(),
            toDate: new Date().toISOString()
          };
          var params = {
            fromDate: new Date().toISOString(),
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          var data = {
            date: new Date().toISOString(),
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashOpencommticketsbyApartmentId(entity).subscribe(function (res) {
            _this66.secondRowData[0].frontValue = res.openCommunitytickets;
          });
          this.dashboardService.getDashOpenpersonalticketsbyApartmentId(entity).subscribe(function (res) {
            _this66.secondRowData[0].backValue = res.openPersonalticket;
          });
          this.dashboardService.getDashHighpriorityopenCommunityTicketsbyApartmentId(entity).subscribe(function (res) {
            _this66.secondRowData[1].frontValue = res.highPriorityOpenCommunityTicket;
          });
          this.dashboardService.getDashHighpriorityopenpersonalTicketsbyApartmentId(entity).subscribe(function (res) {
            _this66.secondRowData[1].backValue = res.highPriorityOpenPersonalTicket;
          });
          this.dashboardService.getDashUnassignedCommunityTicketsbyApartmentId(params).subscribe(function (res) {
            _this66.secondRowData[2].frontValue = res.unassignedCommunityTickets;
          });
          this.dashboardService.getDashUnassignedpersonalTicketsbyApartmentId(params).subscribe(function (res) {
            _this66.secondRowData[2].backValue = res.unassignedPersonalTickets;
          });
          this.dashboardService.getDashOpenCommunityAgedTicketsbyApartmentIDbyDays(data).subscribe(function (res) {
            _this66.secondRowData[3].frontValue = res.openCommunityAgedTickets;
          });
          this.dashboardService.getDashOpenPersonalAgedTicketsbyApartmentIDbyDays(data).subscribe(function (res) {
            _this66.secondRowData[3].backValue = res.openPersonalAgedTickets;
          });
        }
      }, {
        key: "fourthRow",
        value: function fourthRow() {
          var _this67 = this;

          var params = {
            fromDate: new Date().toISOString(),
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashinProgressPanicAlertsbyApartmentId(params).subscribe(function (res) {
            _this67.fourthRowData[0].frontValue = res.inProgressPanicAlerts;
          });
          this.dashboardService.getDashOpenPanicAlertsbyApartmentId(params).subscribe(function (res) {
            _this67.fourthRowData[0].backValue = res.openPanicAlerts;
          });
          var entity = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashpaymentdefaultersasoftodayybyApartmentId(entity).subscribe(function (res) {
            _this67.fourthRowData[1].frontValue = res.returnDefautlers;
          });
          this.dashboardService.getDashcreditnoteappliedbyApartmentId(entity).subscribe(function (res) {
            _this67.fourthRowData[3].frontValue = res.creditNotesCount;
          });
        }
      }, {
        key: "sixthRow",
        value: function sixthRow() {
          var _this68 = this;

          var params = {
            startDate: new Date().toISOString(),
            EndDate: new Date().toISOString(),
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          var entity = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashVisitorsCheckedinbyApartmentId(params).subscribe(function (res) {
            _this68.sixthRowData[0].frontValue = res.visitorsCheckIn;
          });
          this.dashboardService.getDashVisitorsCheckedouttodaybyApartmentId(entity).subscribe(function (res) {
            _this68.sixthRowData[0].backValue = res.visitorsCheckedouttoday;
          });
          this.dashboardService.getDashVisitorsNotcheckedtodaybyApartmentId(entity).subscribe(function (res) {
            _this68.sixthRowData[1].frontValue = res.visitorsNotcheckedtoday;
          });
          this.dashboardService.getDashuptotalparkingslotsbyApartmentId(entity).subscribe(function (res) {
            _this68.sixthRowData[2].frontValue = res.totalParkingSlots;
          });
          this.dashboardService.getDashuptotalparkingslotsunassignedbyApartmentId(entity).subscribe(function (res) {
            _this68.sixthRowData[2].backValue = res.unassignedParkingSlots;
          });
          this.dashboardService.getDashufacilitybookingapprovedtodaybyApartmentId(entity).subscribe(function (res) {
            _this68.sixthRowData[3].frontValue = res.approvedfaclitiesTodayCount;
          });
          this.dashboardService.getDashufacilitybookingunapprovedbyApartmentId(entity).subscribe(function (res) {
            _this68.sixthRowData[3].backValue = res.unapprovedfaclities;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userRole = this.cookieService.get('userRoleType');
          this.secondRow();
          this.fourthRow();
          this.sixthRow();
        }
      }]);

      return AdminDashboardComponent;
    }();

    AdminDashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_6__["DashBoardService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    AdminDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin-dashboard.component.scss */
      "./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_6__["DashBoardService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])], AdminDashboardComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/dashboard/custom-dashboard/custom-dashboard.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/dashboard/custom-dashboard/custom-dashboard.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsDashboardCustomDashboardCustomDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".static-com {\n  width: 99%;\n}\n.static-com .wid-height {\n  height: 343px;\n}\n.static-com .dark-blue {\n  color: #236aaf;\n}\n.custom-dashboard {\n  width: 100%;\n  flex: 1 0px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.custom-dashboard .icon-lg:before {\n  font-size: 3rem;\n}\n.custom-dashboard .icon-md::before {\n  font-size: 1.6rem;\n}\n.custom-dashboard .icon-sm::before {\n  font-size: 1.2rem;\n}\n.custom-dashboard .dark-blue {\n  color: #236aaf;\n}\n.custom-dashboard .cyan-color {\n  color: #00d1fa;\n}\n.custom-dashboard .bg-white {\n  background-color: #ffffff;\n}\n.custom-dashboard .bg-cyan {\n  background-color: #00d1fa;\n}\n.custom-dashboard .bg-dark-blue {\n  background-color: #236aaf;\n}\n.custom-dashboard .wid-footer {\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n.custom-dashboard .chart .content-body {\n  height: 90% !important;\n}\n.custom-dashboard .chart .content-footer {\n  height: 10% !important;\n}\n.custom-dashboard .custom-widget {\n  height: 100%;\n}\n.custom-dashboard .custom-widget .content-body {\n  height: 80%;\n  padding: 5px;\n}\n.custom-dashboard .custom-widget .content-footer {\n  height: 20%;\n  padding: 5px;\n}\n.custom-dashboard .custom-widget .content-footer p {\n  font-size: 1.2rem;\n}\n.custom-dashboard .custom-widget .height-five {\n  height: 100%;\n}\n.custom-dashboard .widget-two .fon-inc {\n  margin-top: 20px !important;\n  margin-bottom: 10px;\n}\n.custom-dashboard .widget-two .wid-icon-four {\n  margin-top: 20px !important;\n  margin-bottom: 20px;\n}\n.custom-dashboard .widget-two .wid-icon-four:before, .custom-dashboard .widget-two .fon-inc:before {\n  font-size: 36px;\n}\n.custom-dashboard .widget-two p {\n  font-size: 2rem;\n}\n.custom-dashboard .widget-two h6 {\n  margin-top: 10px;\n  font-size: 2.6rem;\n}\n.custom-dashboard .widget-two .content-footer p {\n  font-size: 2rem;\n}\n.custom-dashboard ngx-gridster-item:hover .gridster-item-resizable-handler.handle-se {\n  border-color: transparent transparent #236aaf;\n}\n.custom-dashboard .grid-container {\n  margin: 10px;\n}\n.custom-dashboard .dashboard {\n  flex: 1;\n}\n.custom-dashboard .gridster-item-prototype {\n  display: block;\n  background-color: #afafaf;\n  position: relative;\n  float: left;\n  z-index: 99;\n  text-align: center;\n  font-weight: bold;\n  margin: 5px;\n  width: 80px;\n  height: 60px;\n}\n.custom-dashboard .gridster-item-prototype.is-over .gridster-item-inner {\n  visibility: visible;\n}\n.custom-dashboard .gridster-item-prototype .gridster-item-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: auto;\n  width: 80px;\n  height: 60px;\n  visibility: hidden;\n  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;\n}\n.custom-dashboard .position-highlight .inner {\n  position: absolute;\n  top: 5px;\n  bottom: 5px;\n  left: 5px;\n  right: 5px;\n  background-color: #768294;\n  border: 1px solid transparent;\n  transition: background 3s;\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.custom-dashboard .gridster-item-inner {\n  position: absolute;\n  background: #fff;\n  border: 1px solid transparent;\n  top: 5px;\n  bottom: 5px;\n  left: 5px;\n  right: 5px;\n  transition: background 3s;\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.custom-dashboard .is-dragging .gridster-item-inner {\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.24), 0 2px 4px rgba(0, 0, 0, 0.48);\n  top: -3px;\n  bottom: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkL2N1c3RvbS1kYXNoYm9hcmQvY3VzdG9tLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2Rhc2hib2FyZC9jb21wb25lbnRzL2Rhc2hib2FyZC9jdXN0b20tZGFzaGJvYXJkL2N1c3RvbS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlDO0VBQ0MsVUFBQTtBQ0hGO0FESUU7RUFDQyxhQUFBO0FDRkg7QURJRTtFQUNDLGNFRFk7QUREZjtBRE9FO0VBRUQsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0xEO0FET0M7RUdnRUMsZUFBQTtBRnBFRjtBRE9DO0VHNkRDLGlCQUFBO0FGakVGO0FET0M7RUcwREMsaUJBQUE7QUY5REY7QURPQztFQUNDLGNFeEJhO0FEbUJmO0FET0M7RUFDQyxjRVBTO0FERVg7QURPQztFQUNDLHlCRStFTTtBRHBGUjtBRE9DO0VBQ0MseUJFYlM7QURRWDtBRE9DO0VBQ0MseUJFcENhO0FEK0JmO0FEUUM7RUFDQyxxQ0FBQTtFQUNBLDBDQUFBO0FDTkY7QURVRTtFQUNDLHNCQUFBO0FDUkg7QURVRTtFQUNDLHNCQUFBO0FDUkg7QURZQztFQUNDLFlBQUE7QUNWRjtBRFdFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNUSDtBRFdFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNUSDtBRFVHO0VHZ0JELGlCQUFBO0FGdkJGO0FEV0U7RUFDQyxZQUFBO0FDVEg7QURjRTtFQUNDLDJCQUFBO0VBQ0EsbUJBQUE7QUNaSDtBRGNFO0VBQ0MsMkJBQUE7RUFDQSxtQkFBQTtBQ1pIO0FEY0U7RUFDQyxlQUFBO0FDWkg7QURjRTtFR0xBLGVBQUE7QUZORjtBRGNFO0VBQ0MsZ0JBQUE7RUdURCxpQkFBQTtBRkZGO0FEZUc7RUdiRCxlQUFBO0FGQ0Y7QURrQkM7RUFDQyw2Q0FBQTtBQ2hCRjtBRG1CQztFQUNDLFlBQUE7QUNqQkY7QURvQkM7RUFDQyxPQUFBO0FDbEJGO0FEcUJHO0VBQ0QsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNuQkY7QUR1Qkc7RUFDRCxtQkFBQTtBQ3JCRjtBRHdCRztFQUNELGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUtBLDJEQUFBO0FDdkJGO0FEMEJHO0VBQ0Qsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEseUJBQUE7RUFDQSw2QkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3RUFBQTtBQ3pCRjtBRDRCRztFQUNELGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0VBQUE7QUMxQkY7QUQ2Qkc7RUFDRCx3RUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDM0JGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2Rhc2hib2FyZC9jb21wb25lbnRzL2Rhc2hib2FyZC9jdXN0b20tZGFzaGJvYXJkL2N1c3RvbS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuXHQuc3RhdGljLWNvbSB7XG5cdFx0d2lkdGg6IDk5JTtcblx0XHQud2lkLWhlaWdodCB7XG5cdFx0XHRoZWlnaHQ6IDM0M3B4O1xuXHRcdH1cblx0XHQuZGFyay1ibHVlIHtcblx0XHRcdGNvbG9yIDogJGRhcmstYmx1ZS0wMjtcblx0XHR9XG5cdH1cblxuXG4gIC5jdXN0b20tZGFzaGJvYXJkIHtcblxuXHR3aWR0aDogMTAwJTtcblx0ZmxleDogMSAwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cblx0Lmljb24tbGc6YmVmb3JlIHtcblx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW1lZGl1bS0wNCk7XG5cdH1cblx0Lmljb24tbWQ6OmJlZm9yZSB7XG5cdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xuXHR9XG5cdC5pY29uLXNtOjpiZWZvcmUge1xuXHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtdGlueSk7XG5cdH1cblx0LmRhcmstYmx1ZSB7XG5cdFx0Y29sb3IgOiAkZGFyay1ibHVlLTAyO1xuXHR9XG5cdC5jeWFuLWNvbG9yIHtcblx0XHRjb2xvcjogJGQtY3lhbi0wMztcblx0fVxuXHQuYmctd2hpdGUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblx0fVxuXHQuYmctY3lhbiB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGQtY3lhbi0wMztcblx0fVxuXHQuYmctZGFyay1ibHVlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ibHVlLTAyO1xuXHR9XG5cblx0LndpZC1mb290ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDMpO1xuXHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuXHR9XG5cblx0LmNoYXJ0IHtcblx0XHQuY29udGVudC1ib2R5IHtcblx0XHRcdGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHRcdC5jb250ZW50LWZvb3RlciB7XG5cdFx0XHRoZWlnaHQ6IDEwJSAhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxuXG5cdC5jdXN0b20td2lkZ2V0IHtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0LmNvbnRlbnQtYm9keSB7XG5cdFx0XHRoZWlnaHQ6IDgwJTtcblx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHR9XG5cdFx0LmNvbnRlbnQtZm9vdGVyIHtcblx0XHRcdGhlaWdodDogMjAlO1xuXHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0cCB7XG5cdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtdGlueSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5oZWlnaHQtZml2ZSB7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0fVxuXHR9XG5cblx0LndpZGdldC10d28ge1xuXHRcdC5mb24taW5jIHtcblx0XHRcdG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDsgXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdH1cblx0XHQud2lkLWljb24tZm91ciB7XG5cdFx0XHRtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdH1cblx0XHQud2lkLWljb24tZm91cjpiZWZvcmUsLmZvbi1pbmM6YmVmb3JlIHtcblx0XHRcdGZvbnQtc2l6ZTogMzZweDtcblx0XHR9XG5cdFx0cCB7XG5cdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW1lZGl1bSk7XG5cdFx0fVxuXHRcdGg2IHtcblx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW1lZGl1bS0wMyk7XG5cdFx0fVxuXHRcdC5jb250ZW50LWZvb3RlciB7XG5cdFx0XHRwIHtcblx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1tZWRpdW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5neC1ncmlkc3Rlci1pdGVtOmhvdmVyIC5ncmlkc3Rlci1pdGVtLXJlc2l6YWJsZS1oYW5kbGVyLmhhbmRsZS1zZSB7XG5cdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAkZGFyay1ibHVlLTAyO1xuXHR9XG5cdFxuXHQuZ3JpZC1jb250YWluZXIge1xuXHRcdG1hcmdpbjogMTBweDtcblx0ICB9XG5cblx0LmRhc2hib2FyZCB7XG5cdFx0ZmxleDogMTtcblx0ICB9XG5cdCAgXG5cdCAgLmdyaWRzdGVyLWl0ZW0tcHJvdG90eXBlIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhZmFmO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRmbG9hdDogbGVmdDtcblx0XHR6LWluZGV4OiA5OTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0bWFyZ2luOiA1cHg7XG5cdFx0d2lkdGg6IDgwcHg7XG5cdFx0aGVpZ2h0OiA2MHB4O1xuXHQgIFxuXHQgIH1cblx0ICBcblx0ICAuZ3JpZHN0ZXItaXRlbS1wcm90b3R5cGUuaXMtb3ZlciAuZ3JpZHN0ZXItaXRlbS1pbm5lciB7XG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0ICB9XG5cdCAgXG5cdCAgLmdyaWRzdGVyLWl0ZW0tcHJvdG90eXBlIC5ncmlkc3Rlci1pdGVtLWlubmVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOjA7XG5cdFx0bGVmdDogMDtcblx0XHRvdmVyZmxvdzogYXV0bztcblx0XHR3aWR0aDogODBweDtcblx0XHRoZWlnaHQ6IDYwcHg7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHQgIFxuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC4ycyBlYXNlLWluLW91dCwgaGVpZ2h0IDAuMnMgZWFzZS1pbi1vdXQ7XG5cdFx0LW1vei10cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGVhc2UtaW4tb3V0LCBoZWlnaHQgMC4ycyBlYXNlLWluLW91dDtcblx0XHQtby10cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGVhc2UtaW4tb3V0LCBoZWlnaHQgMC4ycyBlYXNlLWluLW91dDtcblx0XHR0cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGVhc2UtaW4tb3V0LCBoZWlnaHQgMC4ycyBlYXNlLWluLW91dDtcblx0ICB9XG5cdCAgXG5cdCAgLnBvc2l0aW9uLWhpZ2hsaWdodCAuaW5uZXIge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDVweDtcblx0XHRib3R0b206IDVweDtcblx0XHRsZWZ0OiA1cHg7XG5cdFx0cmlnaHQ6IDVweDtcblx0ICBcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzY4Mjk0O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAzcztcblx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDNzO1xuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG5cdCAgfVxuXHQgIFxuXHQgIC5ncmlkc3Rlci1pdGVtLWlubmVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHR0b3A6IDVweDtcblx0XHRib3R0b206IDVweDtcblx0XHRsZWZ0OiA1cHg7XG5cdFx0cmlnaHQ6IDVweDtcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgM3M7XG5cdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZCAzcztcblx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0Ym94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuXHQgIH1cblxuXHQgIC5pcy1kcmFnZ2luZyAuZ3JpZHN0ZXItaXRlbS1pbm5lciB7XG5cdFx0Ym94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yNCksIDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNDgpO1xuXHRcdHRvcDogLTNweDtcblx0XHRib3R0b206IDEzcHg7XG5cdCAgfVxuICB9XG5cbiIsIi5zdGF0aWMtY29tIHtcbiAgd2lkdGg6IDk5JTtcbn1cbi5zdGF0aWMtY29tIC53aWQtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAzNDNweDtcbn1cbi5zdGF0aWMtY29tIC5kYXJrLWJsdWUge1xuICBjb2xvcjogIzIzNmFhZjtcbn1cblxuLmN1c3RvbS1kYXNoYm9hcmQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleDogMSAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY3VzdG9tLWRhc2hib2FyZCAuaWNvbi1sZzpiZWZvcmUge1xuICBmb250LXNpemU6IDNyZW07XG59XG4uY3VzdG9tLWRhc2hib2FyZCAuaWNvbi1tZDo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG4uY3VzdG9tLWRhc2hib2FyZCAuaWNvbi1zbTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uY3VzdG9tLWRhc2hib2FyZCAuZGFyay1ibHVlIHtcbiAgY29sb3I6ICMyMzZhYWY7XG59XG4uY3VzdG9tLWRhc2hib2FyZCAuY3lhbi1jb2xvciB7XG4gIGNvbG9yOiAjMDBkMWZhO1xufVxuLmN1c3RvbS1kYXNoYm9hcmQgLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5jdXN0b20tZGFzaGJvYXJkIC5iZy1jeWFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDFmYTtcbn1cbi5jdXN0b20tZGFzaGJvYXJkIC5iZy1kYXJrLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM2YWFmO1xufVxuLmN1c3RvbS1kYXNoYm9hcmQgLndpZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG59XG4uY3VzdG9tLWRhc2hib2FyZCAuY2hhcnQgLmNvbnRlbnQtYm9keSB7XG4gIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWRhc2hib2FyZCAuY2hhcnQgLmNvbnRlbnQtZm9vdGVyIHtcbiAgaGVpZ2h0OiAxMCUgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tZGFzaGJvYXJkIC5jdXN0b20td2lkZ2V0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmN1c3RvbS1kYXNoYm9hcmQgLmN1c3RvbS13aWRnZXQgLmNvbnRlbnQtYm9keSB7XG4gIGhlaWdodDogODAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uY3VzdG9tLWRhc2hib2FyZCAuY3VzdG9tLXdpZGdldCAuY29udGVudC1mb290ZXIge1xuICBoZWlnaHQ6IDIwJTtcbiAgcGFkZGluZzogNXB4O1xufVxuLmN1c3RvbS1kYXNoYm9hcmQgLmN1c3RvbS13aWRnZXQgLmNvbnRlbnQtZm9vdGVyIHAge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5jdXN0b20tZGFzaGJvYXJkIC5jdXN0b20td2lkZ2V0IC5oZWlnaHQtZml2ZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jdXN0b20tZGFzaGJvYXJkIC53aWRnZXQtdHdvIC5mb24taW5jIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmN1c3RvbS1kYXNoYm9hcmQgLndpZGdldC10d28gLndpZC1pY29uLWZvdXIge1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY3VzdG9tLWRhc2hib2FyZCAud2lkZ2V0LXR3byAud2lkLWljb24tZm91cjpiZWZvcmUsIC5jdXN0b20tZGFzaGJvYXJkIC53aWRnZXQtdHdvIC5mb24taW5jOmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cbi5jdXN0b20tZGFzaGJvYXJkIC53aWRnZXQtdHdvIHAge1xuICBmb250LXNpemU6IDJyZW07XG59XG4uY3VzdG9tLWRhc2hib2FyZCAud2lkZ2V0LXR3byBoNiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMi42cmVtO1xufVxuLmN1c3RvbS1kYXNoYm9hcmQgLndpZGdldC10d28gLmNvbnRlbnQtZm9vdGVyIHAge1xuICBmb250LXNpemU6IDJyZW07XG59XG4uY3VzdG9tLWRhc2hib2FyZCBuZ3gtZ3JpZHN0ZXItaXRlbTpob3ZlciAuZ3JpZHN0ZXItaXRlbS1yZXNpemFibGUtaGFuZGxlci5oYW5kbGUtc2Uge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMyMzZhYWY7XG59XG4uY3VzdG9tLWRhc2hib2FyZCAuZ3JpZC1jb250YWluZXIge1xuICBtYXJnaW46IDEwcHg7XG59XG4uY3VzdG9tLWRhc2hib2FyZCAuZGFzaGJvYXJkIHtcbiAgZmxleDogMTtcbn1cbi5jdXN0b20tZGFzaGJvYXJkIC5ncmlkc3Rlci1pdGVtLXByb3RvdHlwZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhZmFmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB6LWluZGV4OiA5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uY3VzdG9tLWRhc2hib2FyZCAuZ3JpZHN0ZXItaXRlbS1wcm90b3R5cGUuaXMtb3ZlciAuZ3JpZHN0ZXItaXRlbS1pbm5lciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uY3VzdG9tLWRhc2hib2FyZCAuZ3JpZHN0ZXItaXRlbS1wcm90b3R5cGUgLmdyaWRzdGVyLWl0ZW0taW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGVhc2UtaW4tb3V0LCBoZWlnaHQgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGVhc2UtaW4tb3V0LCBoZWlnaHQgMC4ycyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogd2lkdGggMC4ycyBlYXNlLWluLW91dCwgaGVpZ2h0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnMgZWFzZS1pbi1vdXQsIGhlaWdodCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmN1c3RvbS1kYXNoYm9hcmQgLnBvc2l0aW9uLWhpZ2hsaWdodCAuaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBib3R0b206IDVweDtcbiAgbGVmdDogNXB4O1xuICByaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzY4Mjk0O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDNzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDNzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cbi5jdXN0b20tZGFzaGJvYXJkIC5ncmlkc3Rlci1pdGVtLWlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdG9wOiA1cHg7XG4gIGJvdHRvbTogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAzcztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAzcztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG4uY3VzdG9tLWRhc2hib2FyZCAuaXMtZHJhZ2dpbmcgLmdyaWRzdGVyLWl0ZW0taW5uZXIge1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjI0KSwgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gIHRvcDogLTNweDtcbiAgYm90dG9tOiAxM3B4O1xufSIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJGQtY3lhbi0wMzojMDBkMWZhO1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtbWVkaXVtLTA0OjMwO1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtYmFzZS0wMjoxMTtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXNlbWkge1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/dashboard/custom-dashboard/custom-dashboard.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/dashboard/custom-dashboard/custom-dashboard.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: CustomDashboardComponent */

  /***/
  function srcAppAmsDashboardComponentsDashboardCustomDashboardCustomDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomDashboardComponent", function () {
      return CustomDashboardComponent;
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


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var angular2gridster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2gridster */
    "./node_modules/angular2gridster/__ivy_ngcc__/fesm2015/angular2gridster.js");

    var CustomDashboardComponent =
    /*#__PURE__*/
    function () {
      function CustomDashboardComponent(sharedService) {
        _classCallCheck(this, CustomDashboardComponent);

        this.sharedService = sharedService;
        this.itemOptions = {
          maxWidth: 3,
          maxHeight: 3
        };
        this.gridsterOptions = {
          // core configuration is default one - for smallest view. It has hidden minWidth: 0.
          lanes: 6,
          direction: 'vertical',
          floating: true,
          dragAndDrop: true,
          resizable: true,
          resizeHandles: {
            se: true
          },
          widthHeightRatio: 1,
          lines: {
            visible: true,
            color: '#afafaf',
            width: 2
          },
          shrink: true,
          useCSSTransforms: true,
          responsiveView: true,
          responsiveDebounce: 500,
          responsiveSizes: true,
          responsiveToParent: true,
          cellHeight: 130,
          // List of different gridster configurations for different breakpoints.
          // Each breakpoint is defined by name stored in "breakpoint" property. There is fixed set of breakpoints
          // available to use with default minWidth assign to each.
          // - sm: 576 - Small devices
          // - md: 768 - Medium devices
          // - lg: 992 - Large devices
          // - xl: 1200 - Extra large
          // MinWidth for each breakpoint can be overwritten like it's visible below.
          // ResponsiveOptions can overwrite default configuration with any option available.
          responsiveOptions: [{
            breakpoint: 'sm',
            minWidth: 480,
            lanes: 2
          }, {
            breakpoint: 'md',
            minWidth: 768,
            lanes: 6
          }, {
            breakpoint: 'lg',
            minWidth: 1250,
            lanes: 6
          }, {
            breakpoint: 'xl',
            minWidth: 1800,
            lanes: 6
          }]
        };
        this.gridsterDraggableOptions = {
          handlerClass: 'drag'
        };
        this.widgetsCopy = [];
        this.widgets = [{
          x: 0,
          y: 0,
          w: 1,
          h: 1,
          wSm: 2,
          hSm: 2,
          wMd: 1,
          hMd: 1,
          wLg: 1,
          hLg: 1,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Total Owners',
          type: 'one'
        }, {
          x: 1,
          y: 0,
          w: 1,
          h: 1,
          wSm: 2,
          hSm: 2,
          wMd: 1,
          hMd: 1,
          wLg: 1,
          hLg: 1,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Total Tenants',
          type: 'one'
        }, {
          x: 2,
          y: 0,
          w: 1,
          h: 1,
          wSm: 2,
          hSm: 2,
          wMd: 1,
          hMd: 1,
          wLg: 1,
          hLg: 1,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Total Units',
          type: 'one'
        }, {
          x: 3,
          y: 0,
          w: 1,
          h: 1,
          wSm: 2,
          hSm: 2,
          wMd: 1,
          hMd: 1,
          wLg: 1,
          hLg: 1,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'UnApprove',
          type: 'one'
        }, {
          x: 4,
          y: 0,
          w: 1,
          h: 1,
          wSm: 2,
          hSm: 2,
          wMd: 1,
          hMd: 1,
          wLg: 1,
          hLg: 1,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'UpComing',
          type: 'one'
        }, {
          x: 5,
          y: 0,
          w: 1,
          h: 1,
          wSm: 2,
          hSm: 2,
          wMd: 1,
          hMd: 1,
          wLg: 1,
          hLg: 1,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Pending Admin',
          type: 'one'
        }, {
          x: 0,
          y: 1,
          w: 2,
          h: 2,
          wSm: 2,
          hSm: 2,
          wMd: 2,
          hMd: 2,
          wLg: 2,
          hLg: 2,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Open Violation 1',
          type: 'two'
        }, {
          x: 2,
          y: 1,
          w: 2,
          h: 2,
          wSm: 2,
          hSm: 2,
          wMd: 2,
          hMd: 2,
          wLg: 2,
          hLg: 2,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Open Violation 2',
          type: 'two'
        }, {
          x: 4,
          y: 1,
          w: 2,
          h: 2,
          wSm: 2,
          hSm: 2,
          wMd: 2,
          hMd: 2,
          wLg: 2,
          hLg: 2,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Open Violation 4',
          type: 'two'
        }, {
          x: 0,
          y: 2,
          w: 2,
          h: 2,
          wSm: 2,
          hSm: 2,
          wMd: 2,
          hMd: 2,
          wLg: 2,
          hLg: 2,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Open Violation 5',
          type: 'two'
        }, {
          x: 2,
          y: 2,
          w: 2,
          h: 2,
          wSm: 2,
          hSm: 2,
          wMd: 2,
          hMd: 2,
          wLg: 2,
          hLg: 2,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Open Violation 3',
          type: 'two'
        }, {
          x: 0,
          y: 3,
          w: 3,
          h: 3,
          wSm: 3,
          hSm: 3,
          wMd: 3,
          hMd: 3,
          wLg: 3,
          hLg: 3,
          wXl: 3,
          hXl: 3,
          dragAndDrop: true,
          resizable: false,
          name: 'pie',
          type: 'three'
        }, {
          x: 3,
          y: 3,
          w: 3,
          h: 3,
          wSm: 3,
          hSm: 3,
          wMd: 3,
          hMd: 3,
          wLg: 3,
          hLg: 3,
          wXl: 3,
          hXl: 3,
          dragAndDrop: true,
          resizable: false,
          name: 'income',
          type: 'three'
        }, {
          x: 0,
          y: 4,
          w: 2,
          h: 2,
          wSm: 2,
          hSm: 2,
          wMd: 2,
          hMd: 2,
          wLg: 2,
          hLg: 2,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Testing 1',
          type: 'four'
        }, {
          x: 2,
          y: 4,
          w: 2,
          h: 2,
          wSm: 2,
          hSm: 2,
          wMd: 2,
          hMd: 2,
          wLg: 2,
          hLg: 2,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Testing 2',
          type: 'four'
        }, {
          x: 4,
          y: 4,
          w: 2,
          h: 2,
          wSm: 2,
          hSm: 2,
          wMd: 2,
          hMd: 2,
          wLg: 2,
          hLg: 2,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Testing 3',
          type: 'four'
        }, {
          x: 0,
          y: 5,
          w: 2,
          h: 2,
          wSm: 2,
          hSm: 2,
          wMd: 2,
          hMd: 2,
          wLg: 2,
          hLg: 2,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Testing 4',
          type: 'four'
        }, {
          x: 0,
          y: 6,
          w: 3,
          h: 3,
          wSm: 3,
          hSm: 3,
          wMd: 3,
          hMd: 3,
          wLg: 3,
          hLg: 3,
          wXl: 3,
          hXl: 3,
          dragAndDrop: true,
          resizable: false,
          name: 'Meeting',
          type: 'five'
        }, {
          x: 3,
          y: 6,
          w: 3,
          h: 3,
          wSm: 3,
          hSm: 3,
          wMd: 3,
          hMd: 3,
          wLg: 3,
          hLg: 3,
          wXl: 3,
          hXl: 3,
          dragAndDrop: true,
          resizable: false,
          name: 'Announcement',
          type: 'five'
        }, {
          x: 0,
          y: 7,
          w: 2,
          h: 2,
          wSm: 2,
          hSm: 2,
          wMd: 2,
          hMd: 2,
          wLg: 2,
          hLg: 2,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Testing 2',
          type: 'four'
        }, {
          x: 2,
          y: 7,
          w: 2,
          h: 2,
          wSm: 2,
          hSm: 2,
          wMd: 2,
          hMd: 2,
          wLg: 2,
          hLg: 2,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Testing 3',
          type: 'four'
        }, {
          x: 4,
          y: 7,
          w: 2,
          h: 2,
          wSm: 2,
          hSm: 2,
          wMd: 2,
          hMd: 2,
          wLg: 2,
          hLg: 2,
          wXl: 2,
          hXl: 2,
          dragAndDrop: true,
          resizable: true,
          name: 'Testing 4',
          type: 'four'
        }];
      }

      _createClass(CustomDashboardComponent, [{
        key: "onReflow",
        value: function onReflow(event) {
          console.log('onReflow', event);
        }
      }, {
        key: "optionsChange",
        value: function optionsChange(options) {
          this.gridsterOptions = options;
          console.log('options change:', options);
        } // swap() {
        //     this.widgets[0].x = 3;
        //     this.widgets[3].x = 0;
        // }
        // over(event) {
        //     const size = event.item.calculateSize(event.gridster);
        //     event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.width = size.width + 'px';
        //     event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.height = size.height + 'px';
        //     event.item.itemPrototype.$element.classList.add('is-over');
        // }
        // out(event) {
        //     event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.width = '';
        //     event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.height = '';
        //     event.item.itemPrototype.$element.classList.remove('is-over');
        // }
        // addWidgetWithoutData() {
        //     this.widgets.push({
        //         title: 'Basic form inputs X',
        //         dragAndDrop: true,
        //         resizable: true,
        //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        //         'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
        //         'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        //         'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        //         'laborum.'
        //     });
        // }
        // addWidget(gridster: GridsterComponent) {
        //     this.widgets.push({
        //         x: 4, y: 0, w: 1, h: 1,
        //         dragAndDrop: true,
        //         resizable: true,
        //         title: 'Basic form inputs 5',
        //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        //         'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
        //         'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        //         'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        //         'laborum.'
        //     });
        //     console.log('widget push', this.widgets[this.widgets.length - 1]);
        // }

      }, {
        key: "remove",
        value: function remove($event, index, gridster) {
          $event.preventDefault();
          this.widgets.splice(index, 1);
          console.log('widget remove', index);
        }
      }, {
        key: "addWidget",
        value: function addWidget() {
          this.sharedService.setSidebarSlider('add-widget');
        }
      }, {
        key: "itemChange",
        value: function itemChange($event) {
          var responsive = $event.breakpoint;
          var height;

          if (responsive == 'md') {
            height = $event.item.itemComponent.hMd;
          } else if (responsive == 'lg') {
            height = $event.item.itemComponent.hLg;
          } else if (responsive == 'xl') {
            height = $event.item.itemComponent.hXl;
          } else if (responsive == 'sm') {
            height = $event.item.itemComponent.hSm;
          } else {
            height = $event.item.itemComponent.h;
          }

          if (height == 1) {
            $event.item.itemComponent.$element.firstElementChild.firstElementChild.classList.remove('widget-two');
          } else if (height == 2) {
            $event.item.itemComponent.$element.firstElementChild.firstElementChild.classList.add('widget-two');
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.widgetsCopy = this.widgets.map(function (widget) {
            return Object.assign({}, widget);
          });
        }
      }]);

      return CustomDashboardComponent;
    }();

    CustomDashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular2gridster__WEBPACK_IMPORTED_MODULE_3__["GridsterComponent"], {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular2gridster__WEBPACK_IMPORTED_MODULE_3__["GridsterComponent"])], CustomDashboardComponent.prototype, "gridster", void 0);
    CustomDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-custom-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./custom-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/custom-dashboard/custom-dashboard.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./custom-dashboard.component.scss */
      "./src/app/ams/dashboard/components/dashboard/custom-dashboard/custom-dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])], CustomDashboardComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsDashboardSecurityDashboardSecurityDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQvc2VjdXJpdHktZGFzaGJvYXJkL3NlY3VyaXR5LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: SecurityDashboardComponent */

  /***/
  function srcAppAmsDashboardComponentsDashboardSecurityDashboardSecurityDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecurityDashboardComponent", function () {
      return SecurityDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SecurityDashboardComponent =
    /*#__PURE__*/
    function () {
      function SecurityDashboardComponent() {
        _classCallCheck(this, SecurityDashboardComponent);
      }

      _createClass(SecurityDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SecurityDashboardComponent;
    }();

    SecurityDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-security-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./security-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./security-dashboard.component.scss */
      "./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SecurityDashboardComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsDashboardStaffDashboardStaffDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhZmYtZGFzaGJvYXJkL3N0YWZmLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: StaffDashboardComponent */

  /***/
  function srcAppAmsDashboardComponentsDashboardStaffDashboardStaffDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffDashboardComponent", function () {
      return StaffDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StaffDashboardComponent =
    /*#__PURE__*/
    function () {
      function StaffDashboardComponent() {
        _classCallCheck(this, StaffDashboardComponent);
      }

      _createClass(StaffDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StaffDashboardComponent;
    }();

    StaffDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-staff-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./staff-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./staff-dashboard.component.scss */
      "./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StaffDashboardComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/admin-dash-first-row/admin-dash-first-row.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/admin-dash-first-row/admin-dash-first-row.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedAdminDashFirstRowAdminDashFirstRowComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dark-blue {\n  color: #236aaf;\n}\n\n.admin-wid-one .card-body {\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL2FkbWluLWRhc2gtZmlyc3Qtcm93L2FkbWluLWRhc2gtZmlyc3Qtcm93LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvYW1zL2Rhc2hib2FyZC9jb21wb25lbnRzL3NoYXJlZC9hZG1pbi1kYXNoLWZpcnN0LXJvdy9hZG1pbi1kYXNoLWZpcnN0LXJvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNDLGNDR2M7QUNQZjs7QUZRQztFQUNDLFlBQUE7QUVMRiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvYWRtaW4tZGFzaC1maXJzdC1yb3cvYWRtaW4tZGFzaC1maXJzdC1yb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuXHRcbi5kYXJrLWJsdWUge1xuXHRjb2xvciA6ICRkYXJrLWJsdWUtMDI7XG59XG5cbi5hZG1pbi13aWQtb25lIHtcblx0LmNhcmQtYm9keSB7XG5cdFx0aGVpZ2h0OiA2MHB4O1xuXHR9XG59XG5cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJGQtY3lhbi0wMzojMDBkMWZhO1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtbWVkaXVtLTA0OjMwO1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtYmFzZS0wMjoxMTtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIiwiLmRhcmstYmx1ZSB7XG4gIGNvbG9yOiAjMjM2YWFmO1xufVxuXG4uYWRtaW4td2lkLW9uZSAuY2FyZC1ib2R5IHtcbiAgaGVpZ2h0OiA2MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/admin-dash-first-row/admin-dash-first-row.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/admin-dash-first-row/admin-dash-first-row.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: AdminDashFirstRowComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedAdminDashFirstRowAdminDashFirstRowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDashFirstRowComponent", function () {
      return AdminDashFirstRowComponent;
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


    var _date_model_date_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../date-model/date-model.component */
    "./src/app/ams/dashboard/components/shared/date-model/date-model.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/DashBoard */
    "./src/app/api/controllers/DashBoard.ts");
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

    var AdminDashFirstRowComponent =
    /*#__PURE__*/
    function () {
      function AdminDashFirstRowComponent(dialog, dashboardService, cookieService) {
        _classCallCheck(this, AdminDashFirstRowComponent);

        this.dialog = dialog;
        this.dashboardService = dashboardService;
        this.cookieService = cookieService;
        this.widgets = [{
          front: 'Total Units',
          back: 'Total Towers',
          frontValue: '_',
          backValue: '',
          frontFooter: false,
          backFooter: false,
          type: ''
        }, {
          front: 'Total Owners',
          middle: 'Total Tenants',
          back: 'Total Admins',
          frontValue: '',
          middleValue: '',
          backValue: '',
          frontFooter: false,
          middleFooter: false,
          backFooter: false,
          type: ''
        }, {
          front: 'Pending Admins',
          back: 'Pending Users',
          frontValue: '',
          backValue: '',
          frontFooter: true,
          backFooter: true,
          type: 'pending'
        }, {
          front: 'Total',
          back: 'Total',
          frontValue: '',
          backValue: '',
          frontFooter: true,
          backFooter: true,
          type: ''
        }, {
          front: 'Un Approve Move In',
          back: 'Un Approve Move Out',
          frontValue: '',
          backValue: '',
          frontFooter: true,
          backFooter: true,
          type: 'unapprove'
        }, {
          front: 'Up Coming Move In',
          back: 'Up Coming Move Out',
          frontValue: '',
          backValue: '',
          frontFooter: true,
          backFooter: true,
          type: 'upcoming'
        }];
        this.colType = 'owner';
      }

      _createClass(AdminDashFirstRowComponent, [{
        key: "flip",
        value: function flip(data) {
          var front = data.firstElementChild;
          var back = data.lastElementChild;

          if (front.classList.contains('flip-bk') && back.classList.contains('flip-ft')) {
            front.classList.remove('flip-bk');
            back.classList.remove('flip-ft');
          } else {
            front.classList.add('flip-bk');
            back.classList.add('flip-ft');
          }
        }
      }, {
        key: "pendingAdmins",
        value: function pendingAdmins(result) {
          var _this69 = this;

          var entity = {
            fromDate: result.fromDate,
            toDate: result.toDate,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashUnapprovedUsersPendingAdminbyApartmentId(entity).subscribe(function (res) {
            _this69.widgets[2].frontValue = res.unapprovedUsersPendingAdmin;
          });
        }
      }, {
        key: "pendingUsers",
        value: function pendingUsers(result) {
          var _this70 = this;

          var entity = {
            fromDate: result.fromDate,
            toDate: result.toDate,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashUnapprovedUsersPendingusersbyApartmentId(entity).subscribe(function (res) {
            _this70.widgets[2].backValue = res.unapprovedPendingusers;
          });
        }
      }, {
        key: "unApproveMoveIn",
        value: function unApproveMoveIn(result) {
          var _this71 = this;

          var entity = {
            date: result.date,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashunapprovedmoveinbyApartmentId(entity).subscribe(function (res) {
            _this71.widgets[4].frontValue = res.unapprovedMoveIn;
          });
        }
      }, {
        key: "unApproveMoveOut",
        value: function unApproveMoveOut(result) {
          var _this72 = this;

          var entity = {
            date: result.date,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashunapprovedmoveoutbyApartmentId(entity).subscribe(function (res) {
            _this72.widgets[4].backValue = res.unapprovedMoveOut;
          });
        }
      }, {
        key: "upcomingMoveIn",
        value: function upcomingMoveIn(result) {
          var _this73 = this;

          var entity = {
            fromDate: result.fromDate,
            toDate: result.toDate,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashupcomingmoveinApartmentId(entity).subscribe(function (res) {
            _this73.widgets[5].frontValue = res.upcomingWeeklyApprovedMoveInCounts;
          });
        }
      }, {
        key: "upcomingMoveOut",
        value: function upcomingMoveOut(result) {
          var _this74 = this;

          var entity = {
            fromDate: result.fromDate,
            toDate: result.toDate,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashupcomingmoveoutApprovedbyApartmentId(entity).subscribe(function (res) {
            _this74.widgets[5].backValue = res.upcomingMoveOut;
          });
        }
      }, {
        key: "yesterday",
        value: function yesterday(type) {
          var entity = {};

          if (type == 'unapprove') {
            entity.date = moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).subtract(1, 'days').utc().format();
          } else {
            entity.fromDate = moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).subtract(1, 'days').utc().format();
            entity.toDate = new Date().toISOString();
          }

          return entity;
        }
      }, {
        key: "today",
        value: function today(type) {
          var entity = {};

          if (type == 'unapprove') {
            entity.date = new Date().toISOString();
          } else {
            entity.fromDate = new Date().toISOString();
            entity.toDate = new Date().toISOString();
          }

          return entity;
        }
      }, {
        key: "filter",
        value: function filter(filterMode, name, type) {
          var result = filterMode == 'yesterday' ? this.yesterday(type) : this.today(type);

          if (name == 'Pending Admins') {
            this.pendingAdmins(result);
          } else if (name == 'Pending Users') {
            this.pendingUsers(result);
          } else if (name == 'Un Approve Move In') {
            this.unApproveMoveIn(result);
          } else if (name == 'Un Approve Move Out') {
            this.unApproveMoveOut(result);
          } else if (name == 'Up Coming Move In') {
            this.upcomingMoveIn(result);
          } else if (name == 'Up Coming Move Out') {
            this.upcomingMoveOut(result);
          }
        }
      }, {
        key: "calenderPopUp",
        value: function calenderPopUp(name, type) {
          var _this75 = this;

          var dialogRef = this.dialog.open(_date_model_date_model_component__WEBPACK_IMPORTED_MODULE_2__["DateModelComponent"], {
            width: '400px',
            height: '175px',
            data: type
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              if (name == 'Pending Admins') {
                _this75.pendingAdmins(result);
              } else if (name == 'Pending Users') {
                _this75.pendingUsers(result);
              } else if (name == 'Un Approve Move In') {
                _this75.unApproveMoveIn(result);
              } else if (name == 'Un Approve Move Out') {
                _this75.unApproveMoveOut(result);
              } else if (name == 'Up Coming Move In') {
                _this75.upcomingMoveIn(result);
              } else if (name == 'Up Coming Move Out') {
                _this75.upcomingMoveOut(result);
              }
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this76 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashTotalunitsbyApartmentId(params).subscribe(function (res) {
            _this76.widgets[0].frontValue = res.totalUnits;
          });
          this.dashboardService.getDashTotalTowersbyApartmentId(params).subscribe(function (res) {
            _this76.widgets[0].backValue = res.totalTowers;
          });
          this.dashboardService.getDashTotalownersbyApartmentId(params).subscribe(function (res) {
            _this76.widgets[1].frontValue = 50;
          });
          this.dashboardService.getDashTotalTenantsbyApartmentId(params).subscribe(function (res) {
            _this76.widgets[1].middleValue = res.totalTenants;
          });
          this.dashboardService.getDashTotalAdminsbyApartmentId(params).subscribe(function (res) {
            _this76.widgets[1].backValue = res.totalAdmins;
          });
          this.pendingAdmins(this.today('pending'));
          this.pendingUsers(this.today('pending'));
          this.unApproveMoveIn(this.today('unapprove'));
          this.unApproveMoveOut(this.today('unapprove'));
          this.upcomingMoveIn(this.today('upcoming'));
          this.upcomingMoveOut(this.today('upcoming'));
        }
      }]);

      return AdminDashFirstRowComponent;
    }();

    AdminDashFirstRowComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_4__["DashBoardService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    AdminDashFirstRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-dash-first-row',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin-dash-first-row.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/admin-dash-first-row/admin-dash-first-row.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin-dash-first-row.component.scss */
      "./src/app/ams/dashboard/components/shared/admin-dash-first-row/admin-dash-first-row.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_4__["DashBoardService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], AdminDashFirstRowComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/admin-dash-second-row/admin-dash-second-row.component.scss":
  /*!************************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/admin-dash-second-row/admin-dash-second-row.component.scss ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedAdminDashSecondRowAdminDashSecondRowComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".second-row-layout .bg-card-body {\n  background-color: #00d1fa;\n}\n.second-row-layout .bg-card-body p {\n  font-size: 1.4rem;\n}\n.second-row-layout .bg-card-footer {\n  background-color: #236aaf;\n}\n.cyan-color {\n  color: #00d1fa;\n}\n.dark-blue {\n  color: #236aaf;\n}\n.height-wid {\n  height: 81px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL2FkbWluLWRhc2gtc2Vjb25kLXJvdy9hZG1pbi1kYXNoLXNlY29uZC1yb3cuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL2FkbWluLWRhc2gtc2Vjb25kLXJvdy9hZG1pbi1kYXNoLXNlY29uZC1yb3cuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUM7RUFDQyx5QkNvQlM7QUMzQlg7QUZRRTtFRzZFQSxpQkFBQTtBRGxGRjtBRlNDO0VBQ0MseUJDTmE7QUNEZjtBRldBO0VBQ0MsY0NTVTtBQ2pCWDtBRldBO0VBQ0MsY0NmYztBQ09mO0FGV0E7RUFDQyxZQUFBO0FFUkQiLCJmaWxlIjoic3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL2FkbWluLWRhc2gtc2Vjb25kLXJvdy9hZG1pbi1kYXNoLXNlY29uZC1yb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuXG5cdFxuXHRcbi5zZWNvbmQtcm93LWxheW91dCB7XG5cdC5iZy1jYXJkLWJvZHkge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRkLWN5YW4tMDM7XG5cdFx0cCB7XG5cdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHR9XG5cdH1cblx0LmJnLWNhcmQtZm9vdGVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ibHVlLTAyO1xuXHR9XG59XG5cbi5jeWFuLWNvbG9yIHtcblx0Y29sb3IgOiAkZC1jeWFuLTAzO1xufVxuXG4uZGFyay1ibHVlIHtcblx0Y29sb3IgOiAkZGFyay1ibHVlLTAyO1xufVxuXG4uaGVpZ2h0LXdpZCB7XG5cdGhlaWdodDogODFweDtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LWJhc2UtMDI6MTE7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiIsIi5zZWNvbmQtcm93LWxheW91dCAuYmctY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDFmYTtcbn1cbi5zZWNvbmQtcm93LWxheW91dCAuYmctY2FyZC1ib2R5IHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi5zZWNvbmQtcm93LWxheW91dCAuYmctY2FyZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM2YWFmO1xufVxuXG4uY3lhbi1jb2xvciB7XG4gIGNvbG9yOiAjMDBkMWZhO1xufVxuXG4uZGFyay1ibHVlIHtcbiAgY29sb3I6ICMyMzZhYWY7XG59XG5cbi5oZWlnaHQtd2lkIHtcbiAgaGVpZ2h0OiA4MXB4O1xufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1zZW1pIHtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/admin-dash-second-row/admin-dash-second-row.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/admin-dash-second-row/admin-dash-second-row.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: AdminDashSecondRowComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedAdminDashSecondRowAdminDashSecondRowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDashSecondRowComponent", function () {
      return AdminDashSecondRowComponent;
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


    var _date_model_date_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../date-model/date-model.component */
    "./src/app/ams/dashboard/components/shared/date-model/date-model.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/DashBoard */
    "./src/app/api/controllers/DashBoard.ts");
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

    var AdminDashSecondRowComponent =
    /*#__PURE__*/
    function () {
      function AdminDashSecondRowComponent(dialog, dashboardService, cookieService) {
        _classCallCheck(this, AdminDashSecondRowComponent);

        this.dialog = dialog;
        this.dashboardService = dashboardService;
        this.cookieService = cookieService;
      }

      _createClass(AdminDashSecondRowComponent, [{
        key: "flip",
        value: function flip(data) {
          var front = data.firstElementChild;
          var back = data.lastElementChild;

          if (front.classList.contains('flip-bk') && back.classList.contains('flip-ft')) {
            front.classList.remove('flip-bk');
            back.classList.remove('flip-ft');
          } else {
            front.classList.add('flip-bk');
            back.classList.add('flip-ft');
          }
        }
      }, {
        key: "calenderPopUp",
        value: function calenderPopUp(name, type) {
          var _this77 = this;

          var dialogRef = this.dialog.open(_date_model_date_model_component__WEBPACK_IMPORTED_MODULE_2__["DateModelComponent"], {
            width: '400px',
            height: '175px',
            data: type
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              if (name == 'Open Community') {
                _this77.openCommunity(result);
              } else if (name == 'Open Personal') {
                _this77.openPersonal(result);
              } else if (name == 'High Priority Community') {
                _this77.highPriorityCommunity(result);
              } else if (name == 'High Priority Personal') {
                _this77.highPriorityPersonal(result);
              } else if (name == 'Unassigned Community') {
                _this77.unAssignedCommunity(result);
              } else if (name == 'Unassigned Personal') {
                _this77.unassignedPersonal(result);
              } else if (name == 'Open Community Aged') {
                _this77.openCommunityAged(result);
              } else if (name == 'Open Personal Aged') {
                _this77.openPersonalAged(result);
              } else if (name == 'InProgress Panic Alerts') {
                _this77.inProgressPanicAlerts(result);
              } else if (name == 'Open Panic Alerts') {
                _this77.openPanicAlerts(result);
              } else if (name == 'Visitors In') {
                _this77.visitorsIn(result);
              }
            }
          });
        }
      }, {
        key: "openCommunity",
        value: function openCommunity(result) {
          var _this78 = this;

          var entity = {
            fromDate: result.fromDate,
            toDate: result.toDate,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashOpencommticketsbyApartmentId(entity).subscribe(function (res) {
            _this78.label.frontValue = res.openCommunitytickets;
          });
        }
      }, {
        key: "openPersonal",
        value: function openPersonal(result) {
          var _this79 = this;

          var entity = {
            fromDate: result.fromDate,
            toDate: result.toDate,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashOpenpersonalticketsbyApartmentId(entity).subscribe(function (res) {
            _this79.label.backValue = res.openPersonalticket;
          });
        }
      }, {
        key: "highPriorityCommunity",
        value: function highPriorityCommunity(result) {
          var _this80 = this;

          var entity = {
            fromDate: result.fromDate,
            toDate: result.toDate,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashHighpriorityopenCommunityTicketsbyApartmentId(entity).subscribe(function (res) {
            _this80.label.frontValue = res.highPriorityOpenCommunityTicket;
          });
        }
      }, {
        key: "highPriorityPersonal",
        value: function highPriorityPersonal(result) {
          var _this81 = this;

          var entity = {
            fromDate: result.fromDate,
            toDate: result.toDate,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashHighpriorityopenpersonalTicketsbyApartmentId(entity).subscribe(function (res) {
            _this81.label.backValue = res.highPriorityOpenPersonalTicket;
          });
        }
      }, {
        key: "unAssignedCommunity",
        value: function unAssignedCommunity(result) {
          var _this82 = this;

          var params = {
            fromDate: result.date,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashUnassignedCommunityTicketsbyApartmentId(params).subscribe(function (res) {
            _this82.label.frontValue = res.unassignedCommunityTickets;
          });
        }
      }, {
        key: "unassignedPersonal",
        value: function unassignedPersonal(result) {
          var _this83 = this;

          var params = {
            fromDate: result.date,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashUnassignedCommunityTicketsbyApartmentId(params).subscribe(function (res) {
            _this83.label.frontValue = res.unassignedCommunityTickets;
          });
        }
      }, {
        key: "openCommunityAged",
        value: function openCommunityAged(result) {
          var _this84 = this;

          var params = {
            date: result.date,
            noOfDays: result.noOfDays,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashOpenCommunityAgedTicketsbyApartmentIDbyDays(params).subscribe(function (res) {
            _this84.label.frontValue = res.openCommunityAgedTickets;
          });
        }
      }, {
        key: "openPersonalAged",
        value: function openPersonalAged(result) {
          var _this85 = this;

          var params = {
            date: result.date,
            noOfDays: result.noOfDays,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashOpenPersonalAgedTicketsbyApartmentIDbyDays(params).subscribe(function (res) {
            _this85.label.backValue = res.openPersonalAgedTickets;
          });
        }
      }, {
        key: "inProgressPanicAlerts",
        value: function inProgressPanicAlerts(result) {
          var _this86 = this;

          var params = {
            fromDate: result.date,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashinProgressPanicAlertsbyApartmentId(params).subscribe(function (res) {
            _this86.label.frontValue = res.inProgressPanicAlerts;
          });
        }
      }, {
        key: "openPanicAlerts",
        value: function openPanicAlerts(result) {
          var _this87 = this;

          var params = {
            fromDate: result.date,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashOpenPanicAlertsbyApartmentId(params).subscribe(function (res) {
            _this87.label.backValue = res.openPanicAlerts;
          });
        }
      }, {
        key: "visitorsIn",
        value: function visitorsIn(result) {
          var _this88 = this;

          var params = {
            startDate: result.fromDate,
            EndDate: result.toDate,
            apartmentId: result.apartmentId
          };
          this.dashboardService.getDashVisitorsCheckedinbyApartmentId(params).subscribe(function (res) {
            _this88.label.frontValue = res.visitorsCheckIn;
          });
        }
      }, {
        key: "yesterday",
        value: function yesterday(type) {
          var entity = {};

          if (type == 'unassigned' || type == 'openaged' || type == 'panicAlerts') {
            entity.date = moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).subtract(1, 'days').utc().format();
          } else {
            entity.fromDate = moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).subtract(1, 'days').utc().format();
            entity.toDate = new Date().toISOString();
          }

          return entity;
        }
      }, {
        key: "today",
        value: function today(type) {
          var entity = {};

          if (type == 'unassigned' || type == 'openaged' || type == 'panicAlerts') {
            entity.date = new Date().toISOString();
          } else {
            entity.fromDate = new Date().toISOString();
            entity.toDate = new Date().toISOString();
          }

          return entity;
        }
      }, {
        key: "filter",
        value: function filter(filterMode, name, type) {
          var result = filterMode == 'yesterday' ? this.yesterday(type) : this.today(type);

          if (name == 'Open Community') {
            this.openCommunity(result);
          } else if (name == 'Open Personal') {
            this.openPersonal(result);
          } else if (name == 'High Priority Community') {
            this.highPriorityCommunity(result);
          } else if (name == 'High Priority Personal') {
            this.highPriorityPersonal(result);
          } else if (name == 'Unassigned Community') {
            this.unAssignedCommunity(result);
          } else if (name == 'Unassigned Personal') {
            this.unassignedPersonal(result);
          } else if (name == 'Open Community Aged') {
            this.openCommunityAged(result);
          } else if (name == 'Open Personal Aged') {
            this.openPersonalAged(result);
          } else if (name == 'InProgress Panic Alerts') {
            this.inProgressPanicAlerts(result);
          } else if (name == 'Open Panic Alerts') {
            this.openPanicAlerts(result);
          } else if (name == 'Visitors In') {
            this.visitorsIn(result);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminDashSecondRowComponent;
    }();

    AdminDashSecondRowComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_4__["DashBoardService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AdminDashSecondRowComponent.prototype, "label", void 0);
    AdminDashSecondRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-dash-second-row',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin-dash-second-row.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/admin-dash-second-row/admin-dash-second-row.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin-dash-second-row.component.scss */
      "./src/app/ams/dashboard/components/shared/admin-dash-second-row/admin-dash-second-row.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_4__["DashBoardService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], AdminDashSecondRowComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedBankCompBankCompComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvYmFuay1jb21wL2JhbmstY29tcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: BankCompComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedBankCompBankCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BankCompComponent", function () {
      return BankCompComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BankCompComponent =
    /*#__PURE__*/
    function () {
      function BankCompComponent() {
        _classCallCheck(this, BankCompComponent);

        this.unitFieldType = "unitno";
        this.unitOrder = true;
      }

      _createClass(BankCompComponent, [{
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
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bankCashData = [{
            'account': 'Petty Cash',
            'balance': '15,114,575.72'
          }, {
            'account': 'Vijaya Bank',
            'balance': '15,114,575.72'
          }, {
            'account': 'Petty Cash',
            'balance': '15,114,575.72'
          }, {
            'account': 'Canara Bank',
            'balance': '15,114,575.72'
          }];
        }
      }]);

      return BankCompComponent;
    }();

    BankCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bank-comp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./bank-comp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./bank-comp.component.scss */
      "./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BankCompComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/dash-broad-cast/dash-broad-cast.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/dash-broad-cast/dash-broad-cast.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedDashBroadCastDashBroadCastComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sub-width {\n  width: 88%;\n}\n\n.sub-hide {\n  display: none;\n}\n\n.announce-round {\n  width: 35px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n}\n\n.bg-blue {\n  background-color: #529eff;\n}\n\n.bg-dark-blue {\n  background-color: #236aaf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL2Rhc2gtYnJvYWQtY2FzdC9kYXNoLWJyb2FkLWNhc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvZGFzaC1icm9hZC1jYXN0L2Rhc2gtYnJvYWQtY2FzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxVQUFBO0FDSko7O0FET0E7RUFDSSxhQUFBO0FDSko7O0FET0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURPQTtFQUNJLHlCRXVDSztBRDNDVDs7QURPQTtFQUNJLHlCRWxCVztBRGNmIiwiZmlsZSI6InNyYy9hcHAvYW1zL2Rhc2hib2FyZC9jb21wb25lbnRzL3NoYXJlZC9kYXNoLWJyb2FkLWNhc3QvZGFzaC1icm9hZC1jYXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cblxuLnN1Yi13aWR0aCB7XG4gICAgd2lkdGg6IDg4JTtcbn1cblxuLnN1Yi1oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYW5ub3VuY2Utcm91bmQge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYmctYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHMtYmx1ZTtcbn1cblxuLmJnLWRhcmstYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmx1ZS0wMjtcbn0iLCIuc3ViLXdpZHRoIHtcbiAgd2lkdGg6IDg4JTtcbn1cblxuLnN1Yi1oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFubm91bmNlLXJvdW5kIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJnLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI5ZWZmO1xufVxuXG4uYmctZGFyay1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzNmFhZjtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LWJhc2UtMDI6MTE7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/dash-broad-cast/dash-broad-cast.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/dash-broad-cast/dash-broad-cast.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: DashBroadCastComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedDashBroadCastDashBroadCastComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashBroadCastComponent", function () {
      return DashBroadCastComponent;
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


    var src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/DashBoard */
    "./src/app/api/controllers/DashBoard.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _date_model_date_model_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../date-model/date-model.component */
    "./src/app/ams/dashboard/components/shared/date-model/date-model.component.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

    var DashBroadCastComponent =
    /*#__PURE__*/
    function () {
      function DashBroadCastComponent(dialog, dashboardService, cookieService) {
        _classCallCheck(this, DashBroadCastComponent);

        this.dialog = dialog;
        this.dashboardService = dashboardService;
        this.cookieService = cookieService;
        this.config = {};
        this.broadCastList = [];
      }

      _createClass(DashBroadCastComponent, [{
        key: "calenderPopUp",
        value: function calenderPopUp(dateType) {
          var _this89 = this;

          var dialogRef = this.dialog.open(_date_model_date_model_component__WEBPACK_IMPORTED_MODULE_5__["DateModelComponent"], {
            width: '400px',
            height: '175px',
            data: dateType
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this89.announcementList(result, 'filter');
            }
          });
        }
      }, {
        key: "announcementList",
        value: function announcementList(entity, type) {
          var _this90 = this;

          this.dashboardService.getDashlistBroadcastsentbyApartmentId(entity).subscribe(function (res) {
            if (type == 'filter' && res.length > 0) {
              _this90.broadCastList = res.reverse();
            } else {
              _this90.broadCastList = res.reverse();
              _this90.broadCastList = _this90.broadCastList.slice(0, 10);
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var entity = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            fromDate: moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).subtract(1, 'month').utc().format(),
            toDate: new Date().toISOString()
          };
          this.announcementList(entity, 'initial');
        }
      }, {
        key: "content",
        value: function content(dom, type) {
          if (type == 'hover') {
            dom.querySelectorAll('p')[0].style.display = 'none';
            dom.querySelectorAll('p')[1].style.display = 'block';
          } else {
            dom.querySelectorAll('p')[0].style.display = 'block';
            dom.querySelectorAll('p')[1].style.display = 'none';
          }
        }
      }]);

      return DashBroadCastComponent;
    }();

    DashBroadCastComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_3__["DashBoardService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    DashBroadCastComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dash-broad-cast',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dash-broad-cast.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-broad-cast/dash-broad-cast.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dash-broad-cast.component.scss */
      "./src/app/ams/dashboard/components/shared/dash-broad-cast/dash-broad-cast.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_3__["DashBoardService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], DashBroadCastComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/dash-com-list/dash-com-list.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/dash-com-list/dash-com-list.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedDashComListDashComListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".workpermit-round {\n  width: 35px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n}\n\n.wp-width {\n  width: 88%;\n}\n\n.bg-blue {\n  background-color: #529eff;\n}\n\n.bg-dark-blue {\n  background-color: #236aaf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL2Rhc2gtY29tLWxpc3QvZGFzaC1jb20tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2Rhc2hib2FyZC9jb21wb25lbnRzL3NoYXJlZC9kYXNoLWNvbS1saXN0L2Rhc2gtY29tLWxpc3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUE7RUFDSSxVQUFBO0FDSEo7O0FETUE7RUFDSSx5QkU0Q0s7QUQvQ1Q7O0FETUE7RUFDSSx5QkViVztBRFVmIiwiZmlsZSI6InNyYy9hcHAvYW1zL2Rhc2hib2FyZC9jb21wb25lbnRzL3NoYXJlZC9kYXNoLWNvbS1saXN0L2Rhc2gtY29tLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLndvcmtwZXJtaXQtcm91bmQge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ud3Atd2lkdGgge1xuICAgIHdpZHRoOjg4JVxufVxuXG4uYmctYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHMtYmx1ZTtcbn1cblxuLmJnLWRhcmstYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmx1ZS0wMjtcbn1cbiIsIi53b3JrcGVybWl0LXJvdW5kIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLndwLXdpZHRoIHtcbiAgd2lkdGg6IDg4JTtcbn1cblxuLmJnLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI5ZWZmO1xufVxuXG4uYmctZGFyay1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzNmFhZjtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LWJhc2UtMDI6MTE7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/dash-com-list/dash-com-list.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/dash-com-list/dash-com-list.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: DashComListComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedDashComListDashComListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashComListComponent", function () {
      return DashComListComponent;
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


    var src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/Alert */
    "./src/app/api/controllers/Alert.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Violation */
    "./src/app/api/controllers/Violation.ts");
    /* harmony import */


    var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Facility */
    "./src/app/api/controllers/Facility.ts");
    /* harmony import */


    var src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/WorkPermit */
    "./src/app/api/controllers/WorkPermit.ts");

    var DashComListComponent =
    /*#__PURE__*/
    function () {
      function DashComListComponent(alertService, violationService, cookieService, workpermitService, facilityService) {
        _classCallCheck(this, DashComListComponent);

        this.alertService = alertService;
        this.violationService = violationService;
        this.cookieService = cookieService;
        this.workpermitService = workpermitService;
        this.facilityService = facilityService;
        this.config = {};
        this.emergencyAlert = [];
        this.violation = [];
        this.workPermit = [];
        this.facility = [];
      }

      _createClass(DashComListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this91 = this;

          this.role = this.cookieService.get('userRoleType');
          var entity = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            active: 1
          };

          if (this.label == 'Emergency Alerts' && this.role != 'Owner' && this.role != 'Tenant') {
            this.alertService.getAllApartmentBlockUnitAlertByApartmentIdStatus(entity).subscribe(function (res) {
              _this91.emergencyAlert = res;
            });
          } else if (this.label == 'Emergency Alerts' && (this.role == 'Owner' || this.role == 'Tenant')) {
            var params = {
              apartmentBlockUnitId: parseInt(this.cookieService.get('apartmentBlockUnitID'))
            };
            this.alertService.getAllApartmentBlockUnitAlertByApartmentBlockUnitId(params).subscribe(function (res) {
              _this91.emergencyAlert = res;
            });
          } else if (this.label == 'Recent Violations') {
            this.violationService.getAllViolationsByStatus(entity).subscribe(function (res) {
              _this91.violation = res;
            });
          } else if (this.label == 'Work Permit' && this.role != 'Owner' && this.role != 'Tenant') {
            this.workpermitService.getWorkPermitsByApartmentIdStatus(entity).subscribe(function (res) {
              _this91.workPermit = res;
            });
          } else if (this.label == 'Work Permit' && (this.role == 'Owner' || this.role == 'Tenant')) {
            var _params = {
              apartmentId: parseInt(this.cookieService.get('apartmentId')),
              apartmentUnitId: parseInt(this.cookieService.get('apartmentBlockUnitID'))
            };
            this.workpermitService.getWorkPermitsByApartmentIdUnitId(_params).subscribe(function (res) {
              _this91.workPermit = res;
            });
          } else if (this.label == 'Facility Bookings') {
            this.facilityService.getApartmentFacilityBookingsByApartmentIdStatus(entity).subscribe(function (res) {
              _this91.facility = res;
            });
          }
        }
      }]);

      return DashComListComponent;
    }();

    DashComListComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }, {
        type: src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_4__["ViolationService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_6__["WorkPermitService"]
      }, {
        type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_5__["FacilityService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DashComListComponent.prototype, "label", void 0);
    DashComListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dash-com-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dash-com-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-com-list/dash-com-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dash-com-list.component.scss */
      "./src/app/ams/dashboard/components/shared/dash-com-list/dash-com-list.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_2__["AlertService"], src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_4__["ViolationService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_6__["WorkPermitService"], src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_5__["FacilityService"]])], DashComListComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedDashIncomeChartDashIncomeChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvZGFzaC1pbmNvbWUtY2hhcnQvZGFzaC1pbmNvbWUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: DashIncomeChartComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedDashIncomeChartDashIncomeChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashIncomeChartComponent", function () {
      return DashIncomeChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashIncomeChartComponent =
    /*#__PURE__*/
    function () {
      function DashIncomeChartComponent() {
        _classCallCheck(this, DashIncomeChartComponent);

        this.days = [{
          Day: 'Monday'
        }, {
          Day: 'Tuesday'
        }, {
          Day: 'Wednesday'
        }, {
          Day: 'Thursday'
        }, {
          Day: 'Friday'
        }, {
          Day: 'Saturday'
        }, {
          Day: 'Sunday'
        }];
        this.Keith = [{
          Minutes: 30
        }, {
          Minutes: 25
        }, {
          Minutes: 30
        }, {
          Minutes: 35
        }, {
          Minutes: 20
        }, {
          Minutes: 30
        }, {
          Minutes: 60
        }];
        this.Erica = [{
          Minutes: 15
        }, {
          Minutes: 25
        }, {
          Minutes: 20
        }, {
          Minutes: 25
        }, {
          Minutes: 20
        }, {
          Minutes: 20
        }, {
          Minutes: 45
        }];
        this.George = [{
          Minutes: 25
        }, {
          Minutes: 30
        }, {
          Minutes: 25
        }, {
          Minutes: 45
        }, {
          Minutes: 25
        }, {
          Minutes: 30
        }, {
          Minutes: 90
        }];
        this.padding = {
          left: 5,
          top: 5,
          right: 40,
          bottom: 5
        };
        this.titlePadding = {
          left: 90,
          top: 0,
          right: 0,
          bottom: 10
        };
        this.xAxis = {
          dataField: 'Day',
          gridLines: {
            visible: true
          }
        };
        this.valueAxis = {
          visible: true,
          title: {
            text: 'Time in minutes'
          }
        };
        this.seriesGroups = [{
          type: 'stackedline',
          source: this.Keith,
          series: [{
            dataField: 'Minutes',
            displayText: 'Keith'
          }]
        }, {
          type: 'stackedline',
          source: this.Erica,
          series: [{
            dataField: 'Minutes',
            displayText: 'Erica'
          }]
        }, {
          type: 'stackedline',
          source: this.George,
          series: [{
            dataField: 'Minutes',
            displayText: 'George'
          }]
        }];
      }

      _createClass(DashIncomeChartComponent, [{
        key: "getWidth",
        value: function getWidth() {
          if (document.body.offsetWidth < 850) {
            return '100%';
          }

          return 480;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashIncomeChartComponent;
    }();

    DashIncomeChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dash-income-chart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dash-income-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dash-income-chart.component.scss */
      "./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashIncomeChartComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/dash-meeting/dash-meeting.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/dash-meeting/dash-meeting.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedDashMeetingDashMeetingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvZGFzaC1tZWV0aW5nL2Rhc2gtbWVldGluZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/dash-meeting/dash-meeting.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/dash-meeting/dash-meeting.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: DashMeetingComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedDashMeetingDashMeetingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashMeetingComponent", function () {
      return DashMeetingComponent;
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


    var src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/DashBoard */
    "./src/app/api/controllers/DashBoard.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _date_model_date_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../date-model/date-model.component */
    "./src/app/ams/dashboard/components/shared/date-model/date-model.component.ts");
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

    var DashMeetingComponent =
    /*#__PURE__*/
    function () {
      function DashMeetingComponent(dialog, dashboardService, cookieService) {
        _classCallCheck(this, DashMeetingComponent);

        this.dialog = dialog;
        this.dashboardService = dashboardService;
        this.cookieService = cookieService;
        this.config = {};
        this.meetingList = [];
      }

      _createClass(DashMeetingComponent, [{
        key: "calenderPopUp",
        value: function calenderPopUp(dateType) {
          var _this92 = this;

          var dialogRef = this.dialog.open(_date_model_date_model_component__WEBPACK_IMPORTED_MODULE_4__["DateModelComponent"], {
            width: '400px',
            height: '175px',
            data: dateType
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this92.scheduledMeeting(result);
            }
          });
        }
      }, {
        key: "scheduledMeeting",
        value: function scheduledMeeting(entity) {
          var _this93 = this;

          this.dashboardService.getDashlistupcomingmeetingbyApartmentId(entity).subscribe(function (res) {
            _this93.meetingList = res;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var entity = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            fromDate: new Date().toISOString(),
            toDate: moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).add(1, 'month').utc().format()
          };
          this.scheduledMeeting(entity);
        }
      }]);

      return DashMeetingComponent;
    }();

    DashMeetingComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_2__["DashBoardService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    DashMeetingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dash-meeting',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dash-meeting.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-meeting/dash-meeting.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dash-meeting.component.scss */
      "./src/app/ams/dashboard/components/shared/dash-meeting/dash-meeting.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_2__["DashBoardService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], DashMeetingComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedDashPieChartDashPieChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvZGFzaC1waWUtY2hhcnQvZGFzaC1waWUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: DashPieChartComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedDashPieChartDashPieChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashPieChartComponent", function () {
      return DashPieChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashPieChartComponent =
    /*#__PURE__*/
    function () {
      function DashPieChartComponent() {
        var _this94 = this;

        _classCallCheck(this, DashPieChartComponent);

        this.data = [{
          "cliente": "Kowshick",
          "total": "10"
        }, {
          "cliente": "Murugan",
          "total": "20"
        }, {
          "cliente": "Raavan",
          "total": "30"
        }, {
          "cliente": "Recris",
          "total": "5"
        }];
        this.source = {
          datatype: 'json',
          datafields: [{
            name: 'cliente',
            type: 'string'
          }, {
            name: 'total',
            type: 'number'
          }],
          localdata: this.data,
          async: false
        };
        this.dataAdapter = new jqx.dataAdapter(this.source, {
          async: false,
          autoBind: true,
          loadError: function loadError(xhr, status, error) {
            alert('Error loading "' + _this94.source.url + '" : ' + error);
          }
        });
        this.legendPosition = {
          left: 520,
          top: 140,
          width: 100,
          height: 100
        };
        this.padding = {
          left: 5,
          top: 5,
          right: 5,
          bottom: 5
        };
        this.titlePadding = {
          left: 0,
          top: 0,
          right: 0,
          bottom: 10
        };
        this.seriesGroups = [{
          type: 'donut',
          showLabels: true,
          series: [{
            dataField: 'total',
            displayText: 'cliente',
            labelRadius: 120,
            initialAngle: 15,
            radius: 90,
            innerRadius: 40,
            centerOffset: 0,
            formatSettings: {
              sufix: '%',
              decimalPlaces: 1
            }
          }]
        }];
      }

      _createClass(DashPieChartComponent, [{
        key: "getWidth",
        value: function getWidth() {
          if (document.body.offsetWidth < 850) {
            return '100%';
          }

          return 400;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashPieChartComponent;
    }();

    DashPieChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dash-pie-chart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dash-pie-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dash-pie-chart.component.scss */
      "./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashPieChartComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/date-model/date-model.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/date-model/date-model.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedDateModelDateModelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvZGF0ZS1tb2RlbC9kYXRlLW1vZGVsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/date-model/date-model.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/date-model/date-model.component.ts ***!
    \************************************************************************************/

  /*! exports provided: DateModelComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedDateModelDateModelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateModelComponent", function () {
      return DateModelComponent;
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


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var DateModelComponent =
    /*#__PURE__*/
    function () {
      function DateModelComponent(cookieService, dialogRef, data) {
        _classCallCheck(this, DateModelComponent);

        this.cookieService = cookieService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dashboard = {
          apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
      }

      _createClass(DateModelComponent, [{
        key: "onConfirm",
        value: function onConfirm() {
          if (this.data == 'unapprove' || this.data == 'openaged' || this.data == 'panicAlerts' || this.data == 'unassigned') {
            this.dashboard.date = this.dashboard.date.toISOString();
          } else {
            this.dashboard.fromDate = this.dashboard.fromDate.toISOString();
            this.dashboard.toDate = this.dashboard.toDate.toISOString();
          }

          this.dialogRef.close(this.dashboard);
        }
      }, {
        key: "onDismiss",
        value: function onDismiss() {
          this.dialogRef.close(false);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DateModelComponent;
    }();

    DateModelComponent.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DateModelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-date-model',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./date-model.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/date-model/date-model.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./date-model.component.scss */
      "./src/app/ams/dashboard/components/shared/date-model/date-model.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], DateModelComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedExpenseTrackerCompExpenseTrackerCompComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvZXhwZW5zZS10cmFja2VyLWNvbXAvZXhwZW5zZS10cmFja2VyLWNvbXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: ExpenseTrackerCompComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedExpenseTrackerCompExpenseTrackerCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseTrackerCompComponent", function () {
      return ExpenseTrackerCompComponent;
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


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);

    var ExpenseTrackerCompComponent =
    /*#__PURE__*/
    function () {
      function ExpenseTrackerCompComponent() {
        _classCallCheck(this, ExpenseTrackerCompComponent);
      }

      _createClass(ExpenseTrackerCompComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this95 = this;

          setTimeout(function () {
            var data = {
              labels: ["Expenses", "Budget"],
              datasets: [{
                barThickness: 15,
                data: [90, 80],
                backgroundColor: ["#52cc8e", "#ffeb3b"],
                hoverBackgroundColor: ["#52cc8e", "#ffeb3b"]
              }]
            };
            _this95.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](_this95.chartRef.nativeElement, {
              type: 'bar',
              data: data,
              options: {
                responsive: true,
                legend: {
                  display: false
                },
                tooltips: {
                  enabled: true
                },
                scales: {
                  xAxes: [{
                    gridLines: {
                      display: false
                    },
                    ticks: {
                      fontColor: "#8391a1",
                      fontStyle: "normal",
                      fontSize: 12,
                      maxRotation: 0,
                      autoSkip: false
                    }
                  }],
                  yAxes: [{
                    gridLines: {
                      color: "rgba(200, 200, 200, 0.4)",
                      borderDash: [2, 2]
                    },
                    ticks: {
                      beginAtZero: true,
                      fontColor: "#8391a1",
                      fontStyle: "normal",
                      fontSize: 12,
                      callback: function callback(label, index, labels) {
                        return label;
                      }
                    },
                    scaleLabel: {
                      display: false
                    }
                  }]
                },
                animation: {
                  onComplete: function onComplete(e) {
                    /* var width = this.chart.width,
                    height = this.chart.height,
                    ctx = this.chart.ctx;
                                 ctx.restore();
                                 ctx.font = "2em Maven Pro";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#4c4c4c";
                                 var numText = "-1052.5K",
                    textX = Math.round((width - ctx.measureText(numText).width) / 2),
                    textY = (height / 2) - 10;
                                 ctx.fillText(numText, textX, textY);
                    ctx.save();
                                 ctx.font = "1.6em Maven Pro";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#4c4c4c";
                                 var fText = "Variance Amount";
                    textX = Math.round((width - ctx.measureText(fText).width) / 2),
                    textY = (height / 2) + 15;
                                 ctx.fillText(fText, textX, textY);
                    ctx.save(); */
                  }
                }
              }
            });
          }, 500);
        }
      }]);

      return ExpenseTrackerCompComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('expensePieChart', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ExpenseTrackerCompComponent.prototype, "chartRef", void 0);
    ExpenseTrackerCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-expense-tracker-comp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./expense-tracker-comp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./expense-tracker-comp.component.scss */
      "./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ExpenseTrackerCompComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedHelpdeskChartHelpdeskChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media (max-width: 576px) {\n  .helpdesk-doughnut-wrapper .details-wrapper .title {\n    padding: 10px 0 0 0;\n  }\n}\n.helpdesk-doughnut-wrapper .details-wrapper .details:not(:last-child) {\n  padding: 0 20px 0 0;\n}\n@media (max-width: 576px) {\n  .helpdesk-doughnut-wrapper .details-wrapper .details:not(:last-child) {\n    padding: 0 35px 5px 0;\n  }\n}\n.helpdesk-doughnut-wrapper .btn-wrapper {\n  margin: 21px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL2hlbHBkZXNrLWNoYXJ0L2hlbHBkZXNrLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL2hlbHBkZXNrLWNoYXJ0L2hlbHBkZXNrLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFHO0VBREQ7SUFFVSxtQkFBQTtFQ05WO0FBQ0Y7QURTRztFQUNDLG1CQUFBO0FDUEo7QURRSTtFQUZEO0lBR1UscUJBQUE7RUNMWDtBQUNGO0FEU0M7RUFDQyxrQkFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2Rhc2hib2FyZC9jb21wb25lbnRzL3NoYXJlZC9oZWxwZGVzay1jaGFydC9oZWxwZGVzay1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG5cbi5oZWxwZGVzay1kb3VnaG51dC13cmFwcGVyIHtcblx0LmRldGFpbHMtd3JhcHBlciB7XG5cdFx0LnRpdGxlIHtcblx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgIFx0XHRwYWRkaW5nOiAxMHB4IDAgMCAwO1xuICAgICAgICBcdH1cblx0XHR9XG5cdFx0LmRldGFpbHMge1xuXHRcdFx0Jjpub3QoOmxhc3QtY2hpbGQpe1xuXHRcdFx0XHRwYWRkaW5nOiAwIDIwcHggMCAwO1xuXHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICBcdFx0XHRwYWRkaW5nOiAwIDM1cHggNXB4IDA7XG4gICAgICAgIFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5idG4td3JhcHBlciB7XG5cdFx0bWFyZ2luOiAyMXB4IDAgMCAwO1xuXHR9XG59IiwiQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5oZWxwZGVzay1kb3VnaG51dC13cmFwcGVyIC5kZXRhaWxzLXdyYXBwZXIgLnRpdGxlIHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xuICB9XG59XG4uaGVscGRlc2stZG91Z2hudXQtd3JhcHBlciAuZGV0YWlscy13cmFwcGVyIC5kZXRhaWxzOm5vdCg6bGFzdC1jaGlsZCkge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5oZWxwZGVzay1kb3VnaG51dC13cmFwcGVyIC5kZXRhaWxzLXdyYXBwZXIgLmRldGFpbHM6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgcGFkZGluZzogMCAzNXB4IDVweCAwO1xuICB9XG59XG4uaGVscGRlc2stZG91Z2hudXQtd3JhcHBlciAuYnRuLXdyYXBwZXIge1xuICBtYXJnaW46IDIxcHggMCAwIDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: HelpdeskChartComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedHelpdeskChartHelpdeskChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpdeskChartComponent", function () {
      return HelpdeskChartComponent;
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


    var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Ticket */
    "./src/app/api/controllers/Ticket.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var HelpdeskChartComponent =
    /*#__PURE__*/
    function () {
      function HelpdeskChartComponent(injector, userService, ticketService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, HelpdeskChartComponent);

        this.injector = injector;
        this.userService = userService;
        this.ticketService = ticketService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
      }

      _createClass(HelpdeskChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this96 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.ticketService.getAllTicketsByApartmentId(params).subscribe(function (res) {
            if (res.length == undefined || res.length == 0) {
              _this96.totalOpenPersonalTickets = 0;
              _this96.totalUrgentPersonalTickets = 0;
              _this96.totalUrgentPersonalTickets = 0;
              _this96.totalUrgentCommunityTickets = 0;
            } else {
              var openPersonalTickets = res.filter(function (item) {
                return item.ticketStatusId == 32 && item.ticketTypeId == 27; // new and personal tickets
              });
              _this96.totalOpenPersonalTickets = openPersonalTickets.length;
              var openCommunityTickets = res.filter(function (item) {
                return item.ticketStatusId == 32 && item.ticketTypeId == 26; // new and common tickets
              });
              _this96.totalOpenCommunityTickets = openCommunityTickets.length;
              var urgentPersonalTickets = res.filter(function (item) {
                return item.ticketPriorityId == 47 && item.ticketTypeId == 27; // priorty high and personal tickets
              });
              _this96.totalUrgentPersonalTickets = urgentPersonalTickets.length;
              var urgentCommunityTickets = res.filter(function (item) {
                return item.ticketPriorityId == 47 && item.ticketTypeId == 26; // priorty high and common tickets
              });
              _this96.totalUrgentCommunityTickets = urgentCommunityTickets.length;
            }
          });
        }
      }]);

      return HelpdeskChartComponent;
    }();

    HelpdeskChartComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_3__["TicketService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    HelpdeskChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-helpdesk-chart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./helpdesk-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./helpdesk-chart.component.scss */
      "./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_3__["TicketService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], HelpdeskChartComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedIncomeTrackerCompIncomeTrackerCompComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvaW5jb21lLXRyYWNrZXItY29tcC9pbmNvbWUtdHJhY2tlci1jb21wLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: IncomeTrackerCompComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedIncomeTrackerCompIncomeTrackerCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeTrackerCompComponent", function () {
      return IncomeTrackerCompComponent;
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


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);

    var IncomeTrackerCompComponent =
    /*#__PURE__*/
    function () {
      function IncomeTrackerCompComponent() {
        _classCallCheck(this, IncomeTrackerCompComponent);
      }

      _createClass(IncomeTrackerCompComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this97 = this;

          setTimeout(function () {
            var data = {
              labels: ["Colleced", "Balance"],
              datasets: [{
                data: [70, 30],
                backgroundColor: ["#ff3638", "#3f51b5"],
                hoverBackgroundColor: ["#ff3638", "#3f51b5"]
              }]
            };
            _this97.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](_this97.chartRef.nativeElement, {
              type: 'doughnut',
              data: data,
              options: {
                responsive: true,
                legend: {
                  display: false
                },
                cutoutPercentage: 30,
                rotation: 120,
                animation: {
                  onComplete: function onComplete(e) {
                    /* var width = this.chart.width,
                    height = this.chart.height,
                    ctx = this.chart.ctx;
                                 ctx.restore();
                                 ctx.font = "2em Maven Pro";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#4c4c4c";
                                 var numText = "2261.1K",
                    textX = Math.round((width - ctx.measureText(numText).width) / 2),
                    textY = (height / 2) - 10;
                                 ctx.fillText(numText, textX, textY);
                    ctx.save();
                                 ctx.font = "1.6em Maven Pro";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#4c4c4c";
                                 var fText = "Balance";
                    textX = Math.round((width - ctx.measureText(fText).width) / 2),
                    textY = (height / 2) + 15;
                                 ctx.fillText(fText, textX, textY);
                    ctx.save(); */
                  }
                }
              }
            });
          }, 500);
        }
      }]);

      return IncomeTrackerCompComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('incomePieChart', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], IncomeTrackerCompComponent.prototype, "chartRef", void 0);
    IncomeTrackerCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-tracker-comp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-tracker-comp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-tracker-comp.component.scss */
      "./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], IncomeTrackerCompComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedLedgerCompLedgerCompComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvbGVkZ2VyLWNvbXAvbGVkZ2VyLWNvbXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: LedgerCompComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedLedgerCompLedgerCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LedgerCompComponent", function () {
      return LedgerCompComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LedgerCompComponent =
    /*#__PURE__*/
    function () {
      function LedgerCompComponent() {
        _classCallCheck(this, LedgerCompComponent);

        this.unitFieldType = "unitno";
        this.unitOrder = true;
      }

      _createClass(LedgerCompComponent, [{
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
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ledgerData = [{
            'class': 'Assets',
            'credit': '22,546,459.74',
            'debit': '15,114,575.72'
          }, {
            'class': 'Liablities',
            'credit': '22,546,459.74',
            'debit': '15,114,575.72'
          }, {
            'class': 'Revenues',
            'credit': '22,546,459.74',
            'debit': '15,114,575.72'
          }, {
            'class': 'Expenses',
            'credit': '22,546,459.74',
            'debit': '15,114,575.72'
          }];
        }
      }]);

      return LedgerCompComponent;
    }();

    LedgerCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ledger-comp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ledger-comp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ledger-comp.component.scss */
      "./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LedgerCompComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedPaymentCompPaymentCompComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvcGF5bWVudC1jb21wL3BheW1lbnQtY29tcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: PaymentCompComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedPaymentCompPaymentCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentCompComponent", function () {
      return PaymentCompComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PaymentCompComponent =
    /*#__PURE__*/
    function () {
      function PaymentCompComponent() {
        _classCallCheck(this, PaymentCompComponent);
      }

      _createClass(PaymentCompComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaymentCompComponent;
    }();

    PaymentCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payment-comp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./payment-comp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./payment-comp.component.scss */
      "./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PaymentCompComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedUnitChartUnitChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvdW5pdC1jaGFydC91bml0LWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.ts ***!
    \************************************************************************************/

  /*! exports provided: UnitChartComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedUnitChartUnitChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitChartComponent", function () {
      return UnitChartComponent;
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


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var UnitChartComponent =
    /*#__PURE__*/
    function () {
      function UnitChartComponent(apartmentService, cookieService) {
        _classCallCheck(this, UnitChartComponent);

        this.apartmentService = apartmentService;
        this.cookieService = cookieService;
      }

      _createClass(UnitChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this98 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.apartmentService.getApartmentBlockUnitByApartmentId(params).subscribe(function (res) {
            _this98.totalUnits = res.length;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this99 = this;

          setTimeout(function () {
            var data = {
              labels: ["Total Units"],
              datasets: [{
                data: [5],
                backgroundColor: ["#52cc8e", "#3f51b5"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
              }]
            };
            _this99.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](_this99.chartRef.nativeElement, {
              type: 'doughnut',
              data: data,
              options: {
                responsive: true,
                legend: {
                  display: false
                },
                cutoutPercentage: 80,
                rotation: 120,
                animation: {
                  onComplete: function onComplete(e) {
                    var width = _this99.chart.width,
                        height = _this99.chart.height,
                        ctx = _this99.chart.ctx;
                    ctx.restore();
                    ctx.font = "2em Maven Pro";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#4c4c4c";
                    var numText = _this99.totalUnits,
                        textX = Math.round((width - ctx.measureText(numText).width) / 2),
                        textY = height / 2 - 10;
                    ctx.fillText(numText, textX, textY);
                    ctx.save();
                    ctx.font = "1.6em Maven Pro";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#4c4c4c";
                    var fText = "Total Units";
                    textX = Math.round((width - ctx.measureText(fText).width) / 2), textY = height / 2 + 15;
                    ctx.fillText(fText, textX, textY);
                    ctx.save();
                  }
                }
              }
            });
          }, 500);
        }
      }]);

      return UnitChartComponent;
    }();

    UnitChartComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('unitPieChart', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], UnitChartComponent.prototype, "chartRef", void 0);
    UnitChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unit-chart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./unit-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./unit-chart.component.scss */
      "./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], UnitChartComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedUsersChartUsersChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-doughnut-wrapper .chart-box {\n  padding: inherit;\n  margin: -30px 0 0 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL3VzZXJzLWNoYXJ0L3VzZXJzLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL3VzZXJzLWNoYXJ0L3VzZXJzLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1DO0VBQ0MsZ0JBQUE7RUFDQSxzQkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2Rhc2hib2FyZC9jb21wb25lbnRzL3NoYXJlZC91c2Vycy1jaGFydC91c2Vycy1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4udXNlci1kb3VnaG51dC13cmFwcGVyIHtcblx0XG5cdC5jaGFydC1ib3gge1xuXHRcdHBhZGRpbmc6IGluaGVyaXQ7XG5cdFx0bWFyZ2luOiAtMzBweCAwIDAgMzBweDtcblx0fVxufSIsIi51c2VyLWRvdWdobnV0LXdyYXBwZXIgLmNoYXJ0LWJveCB7XG4gIHBhZGRpbmc6IGluaGVyaXQ7XG4gIG1hcmdpbjogLTMwcHggMCAwIDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: UsersChartComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedUsersChartUsersChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersChartComponent", function () {
      return UsersChartComponent;
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


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var UsersChartComponent =
    /*#__PURE__*/
    function () {
      function UsersChartComponent(userService, apartmentService, cookieService) {
        _classCallCheck(this, UsersChartComponent);

        this.userService = userService;
        this.apartmentService = apartmentService;
        this.cookieService = cookieService;
      }

      _createClass(UsersChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this100 = this;

          this.userService.getAllUsers().subscribe(function (res) {
            _this100.totalUsers = res.length;

            _this100.userService.getAllUnApprovedUsers().subscribe(function (res) {
              _this100.totalUnapprovedUsers = res.length;
            }, function (error) {
              console.log(error);
            });
          }, function (error) {
            console.log(error);
          });
          this.totalApprovedUsers = this.totalUsers - this.totalUnapprovedUsers;
          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.apartmentService.getApartmentBlockUnitByApartmentId(params).subscribe(function (res) {
            _this100.totalUnits = res.length;
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return UsersChartComponent;
    }();

    UsersChartComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    UsersChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users-chart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./users-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./users-chart.component.scss */
      "./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], UsersChartComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedVisitorsCompVisitorsCompComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".visitors-camp-wrapper .card {\n  margin: 0 0 15px 0;\n}\n.visitors-camp-wrapper .card .card-body {\n  padding: 12px 19px 0 19px;\n}\n.visitors-camp-wrapper .card .range-box {\n  position: relative;\n  padding: 10px 0;\n}\n.visitors-camp-wrapper .card .range-box:before {\n  content: \"\";\n  position: absolute;\n  width: calc(100% + 45px);\n  left: -25px;\n  height: 1px;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.visitors-camp-wrapper .card .range-box .text {\n  position: relative;\n  float: right;\n}\n@media (max-width: 576px) {\n  .visitors-camp-wrapper .details {\n    padding: 0 0 15px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL3Zpc2l0b3JzLWNvbXAvdmlzaXRvcnMtY29tcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2Rhc2hib2FyZC9jb21wb25lbnRzL3NoYXJlZC92aXNpdG9ycy1jb21wL3Zpc2l0b3JzLWNvbXAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1DO0VBQ0Msa0JBQUE7QUNMRjtBRE1FO0VBQ0MseUJBQUE7QUNKSDtBRE1FO0VBQ0Msa0JFUEU7RUZRRixlQUFBO0FDSkg7QURLRztFQUNDLFdBQUE7RUFDQSxrQkVaQztFRmFELHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtBQ0hKO0FES0c7RUFDQyxrQkVsQkM7RUZtQkQsWUFBQTtBQ0hKO0FEU0U7RUFERDtJQUVPLG1CQUFBO0VDTk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvdmlzaXRvcnMtY29tcC92aXNpdG9ycy1jb21wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cblxuLnZpc2l0b3JzLWNhbXAtd3JhcHBlciB7XG5cdC5jYXJkIHtcblx0XHRtYXJnaW46IDAgMCAxNXB4IDA7XG5cdFx0LmNhcmQtYm9keSB7XG5cdFx0XHRwYWRkaW5nOiAxMnB4IDE5cHggMCAxOXB4O1xuXHRcdH1cblx0XHQucmFuZ2UtYm94IHtcblx0XHRcdHBvc2l0aW9uOiAkcmVsO1xuXHRcdFx0cGFkZGluZzogMTBweCAwO1xuXHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRwb3NpdGlvbjogJGFicztcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSArIDQ1cHgpO1xuXHRcdFx0XHRsZWZ0OiAtMjVweDtcblx0XHRcdFx0aGVpZ2h0OiAxcHg7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjMpO1xuXHRcdFx0fVxuXHRcdFx0LnRleHQge1xuXHRcdFx0XHRwb3NpdGlvbjogJHJlbDtcblx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXHR9XG5cdC5kZXRhaWxzIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgIFx0XHRwYWRkaW5nOiAwIDAgMTVweCAwO1xuICAgIFx0fVxuXHR9XG59IiwiLnZpc2l0b3JzLWNhbXAtd3JhcHBlciAuY2FyZCB7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbn1cbi52aXNpdG9ycy1jYW1wLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDEycHggMTlweCAwIDE5cHg7XG59XG4udmlzaXRvcnMtY2FtcC13cmFwcGVyIC5jYXJkIC5yYW5nZS1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi52aXNpdG9ycy1jYW1wLXdyYXBwZXIgLmNhcmQgLnJhbmdlLWJveDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA0NXB4KTtcbiAgbGVmdDogLTI1cHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG4udmlzaXRvcnMtY2FtcC13cmFwcGVyIC5jYXJkIC5yYW5nZS1ib3ggLnRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAudmlzaXRvcnMtY2FtcC13cmFwcGVyIC5kZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAwIDAgMTVweCAwO1xuICB9XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kZC1jeWFuLTAzOiMwMGQxZmE7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaW1lLWdyZWVuLTAzOiAjNTJjNTcwO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1tZWRpdW0tMDQ6MzA7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC1iYXNlLTAyOjExO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: VisitorsCompComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedVisitorsCompVisitorsCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitorsCompComponent", function () {
      return VisitorsCompComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VisitorsCompComponent =
    /*#__PURE__*/
    function () {
      function VisitorsCompComponent() {
        _classCallCheck(this, VisitorsCompComponent);
      }

      _createClass(VisitorsCompComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VisitorsCompComponent;
    }();

    VisitorsCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-visitors-comp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./visitors-comp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./visitors-comp.component.scss */
      "./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], VisitorsCompComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/dashboard-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ams/dashboard/dashboard-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: routes, DashboardRoutingModule */

  /***/
  function srcAppAmsDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
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


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/ams/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/dashboard.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/ams/dashboard/dashboard.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: #5cd67c;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #5cd67c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0kseUJDK0NZO0FDbERoQjs7QUZLQTtFQUNJLHlCQzRDWTtBQzlDaEIiLCJmaWxlIjoic3JjL2FwcC9hbXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpbWUtZ3JlZW4tMDI7XG59XG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGltZS1ncmVlbi0wMjtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LWJhc2UtMDI6MTE7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiIsIjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjZDY3Yztcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2Q2N2M7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/dashboard.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/ams/dashboard/dashboard.component.ts ***!
    \******************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppAmsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(userService, cookieService, sharedService) {
        _classCallCheck(this, DashboardComponent);

        this.userService = userService;
        this.cookieService = cookieService;
        this.sharedService = sharedService;
        this.isApartmentSelected = false;
        this.userRole = "";
        this.customDashBoard = false;
        this.dashBoardName = 'General';
      }

      _createClass(DashboardComponent, [{
        key: "isAdmin",
        value: function isAdmin() {
          return this.userRole == "Admin" ? true : false;
        }
      }, {
        key: "isSecurity",
        value: function isSecurity() {
          return this.userRole == "Security" ? true : false;
        }
      }, {
        key: "isStaff",
        value: function isStaff() {
          return this.userRole == "Staff" ? true : false;
        }
      }, {
        key: "dashboardChange",
        value: function dashboardChange(event) {
          if (event.checked) {
            this.customDashBoard = true;
            this.dashBoardName = 'Custom';
          } else {
            this.customDashBoard = false;
            this.dashBoardName = 'General';
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this101 = this;

          var params = {
            userid: parseInt(this.cookieService.get('userId'))
          };
          this.userService.getUserById(params).subscribe(function (res) {
            _this101.userName = res[0].firstName;
          }, function (error) {
            console.log(error);
          });
          this.sharedService.apartmentselectedcast.subscribe(function (isSelected) {
            _this101.isApartmentSelected = isSelected;
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }];
    };

    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/ams/dashboard/dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/dashboard.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/ams/dashboard/dashboard.module.ts ***!
    \***************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppAmsDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/ams/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/ams/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/dashboard/admin-dashboard/admin-dashboard.component */
    "./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _components_dashboard_security_dashboard_security_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/dashboard/security-dashboard/security-dashboard.component */
    "./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.ts");
    /* harmony import */


    var _components_dashboard_staff_dashboard_staff_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/dashboard/staff-dashboard/staff-dashboard.component */
    "./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.ts");
    /* harmony import */


    var _components_shared_users_chart_users_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/shared/users-chart/users-chart.component */
    "./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.ts");
    /* harmony import */


    var _components_shared_unit_chart_unit_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/shared/unit-chart/unit-chart.component */
    "./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.ts");
    /* harmony import */


    var _components_shared_helpdesk_chart_helpdesk_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/shared/helpdesk-chart/helpdesk-chart.component */
    "./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.ts");
    /* harmony import */


    var _components_shared_visitors_comp_visitors_comp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/shared/visitors-comp/visitors-comp.component */
    "./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.ts");
    /* harmony import */


    var _components_shared_ledger_comp_ledger_comp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/shared/ledger-comp/ledger-comp.component */
    "./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.ts");
    /* harmony import */


    var _components_shared_bank_comp_bank_comp_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/shared/bank-comp/bank-comp.component */
    "./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.ts");
    /* harmony import */


    var _components_shared_income_tracker_comp_income_tracker_comp_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/shared/income-tracker-comp/income-tracker-comp.component */
    "./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.ts");
    /* harmony import */


    var _components_shared_expense_tracker_comp_expense_tracker_comp_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/shared/expense-tracker-comp/expense-tracker-comp.component */
    "./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.ts");
    /* harmony import */


    var _components_shared_payment_comp_payment_comp_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/shared/payment-comp/payment-comp.component */
    "./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.ts");
    /* harmony import */


    var src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! src/app/api/controllers/DashBoard */
    "./src/app/api/controllers/DashBoard.ts");
    /* harmony import */


    var _components_shared_date_model_date_model_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/shared/date-model/date-model.component */
    "./src/app/ams/dashboard/components/shared/date-model/date-model.component.ts");
    /* harmony import */


    var _components_shared_dash_pie_chart_dash_pie_chart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/shared/dash-pie-chart/dash-pie-chart.component */
    "./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.ts");
    /* harmony import */


    var _components_shared_dash_income_chart_dash_income_chart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/shared/dash-income-chart/dash-income-chart.component */
    "./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.ts");
    /* harmony import */


    var _components_dashboard_custom_dashboard_custom_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/dashboard/custom-dashboard/custom-dashboard.component */
    "./src/app/ams/dashboard/components/dashboard/custom-dashboard/custom-dashboard.component.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _components_shared_admin_dash_first_row_admin_dash_first_row_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/shared/admin-dash-first-row/admin-dash-first-row.component */
    "./src/app/ams/dashboard/components/shared/admin-dash-first-row/admin-dash-first-row.component.ts");
    /* harmony import */


    var _components_shared_admin_dash_second_row_admin_dash_second_row_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/shared/admin-dash-second-row/admin-dash-second-row.component */
    "./src/app/ams/dashboard/components/shared/admin-dash-second-row/admin-dash-second-row.component.ts");
    /* harmony import */


    var _components_shared_dash_meeting_dash_meeting_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/shared/dash-meeting/dash-meeting.component */
    "./src/app/ams/dashboard/components/shared/dash-meeting/dash-meeting.component.ts");
    /* harmony import */


    var _components_shared_dash_broad_cast_dash_broad_cast_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/shared/dash-broad-cast/dash-broad-cast.component */
    "./src/app/ams/dashboard/components/shared/dash-broad-cast/dash-broad-cast.component.ts");
    /* harmony import */


    var angular2gridster__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! angular2gridster */
    "./node_modules/angular2gridster/__ivy_ngcc__/fesm2015/angular2gridster.js");
    /* harmony import */


    var _components_shared_dash_com_list_dash_com_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/shared/dash-com-list/dash-com-list.component */
    "./src/app/ams/dashboard/components/shared/dash-com-list/dash-com-list.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _components_dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["AdminDashboardComponent"], _components_dashboard_security_dashboard_security_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["SecurityDashboardComponent"], _components_dashboard_staff_dashboard_staff_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["StaffDashboardComponent"], _components_shared_users_chart_users_chart_component__WEBPACK_IMPORTED_MODULE_12__["UsersChartComponent"], _components_shared_unit_chart_unit_chart_component__WEBPACK_IMPORTED_MODULE_13__["UnitChartComponent"], _components_shared_helpdesk_chart_helpdesk_chart_component__WEBPACK_IMPORTED_MODULE_14__["HelpdeskChartComponent"], _components_shared_visitors_comp_visitors_comp_component__WEBPACK_IMPORTED_MODULE_15__["VisitorsCompComponent"], _components_shared_ledger_comp_ledger_comp_component__WEBPACK_IMPORTED_MODULE_16__["LedgerCompComponent"], _components_shared_bank_comp_bank_comp_component__WEBPACK_IMPORTED_MODULE_17__["BankCompComponent"], _components_shared_income_tracker_comp_income_tracker_comp_component__WEBPACK_IMPORTED_MODULE_18__["IncomeTrackerCompComponent"], _components_shared_expense_tracker_comp_expense_tracker_comp_component__WEBPACK_IMPORTED_MODULE_19__["ExpenseTrackerCompComponent"], _components_shared_payment_comp_payment_comp_component__WEBPACK_IMPORTED_MODULE_20__["PaymentCompComponent"], _components_shared_date_model_date_model_component__WEBPACK_IMPORTED_MODULE_22__["DateModelComponent"], _components_shared_dash_pie_chart_dash_pie_chart_component__WEBPACK_IMPORTED_MODULE_23__["DashPieChartComponent"], _components_shared_dash_income_chart_dash_income_chart_component__WEBPACK_IMPORTED_MODULE_24__["DashIncomeChartComponent"], _components_dashboard_custom_dashboard_custom_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["CustomDashboardComponent"], _components_shared_admin_dash_first_row_admin_dash_first_row_component__WEBPACK_IMPORTED_MODULE_27__["AdminDashFirstRowComponent"], _components_shared_admin_dash_second_row_admin_dash_second_row_component__WEBPACK_IMPORTED_MODULE_28__["AdminDashSecondRowComponent"], _components_shared_dash_meeting_dash_meeting_component__WEBPACK_IMPORTED_MODULE_29__["DashMeetingComponent"], _components_shared_dash_broad_cast_dash_broad_cast_component__WEBPACK_IMPORTED_MODULE_30__["DashBroadCastComponent"], _components_shared_dash_com_list_dash_com_list_component__WEBPACK_IMPORTED_MODULE_32__["DashComListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["routes"]), angular2gridster__WEBPACK_IMPORTED_MODULE_31__["GridsterModule"].forRoot(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_26__["DragDropModule"]],
      providers: [src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_21__["DashBoardService"]],
      bootstrap: [_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]],
      exports: [src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_21__["DashBoardService"], _components_shared_dash_meeting_dash_meeting_component__WEBPACK_IMPORTED_MODULE_29__["DashMeetingComponent"], _components_shared_dash_broad_cast_dash_broad_cast_component__WEBPACK_IMPORTED_MODULE_30__["DashBroadCastComponent"], _components_shared_dash_com_list_dash_com_list_component__WEBPACK_IMPORTED_MODULE_32__["DashComListComponent"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/api/controllers/DashBoard.ts":
  /*!**********************************************!*\
    !*** ./src/app/api/controllers/DashBoard.ts ***!
    \**********************************************/

  /*! exports provided: DashBoardService */

  /***/
  function srcAppApiControllersDashBoardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashBoardService", function () {
      return DashBoardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* tslint:disable:max-line-length */

    /**
     * v1
     * AMS API
     * undefined
     */


    var DashBoardService =
    /*#__PURE__*/
    function () {
      function DashBoardService(http) {
        _classCallCheck(this, DashBoardService);

        this.http = http;
      }
      /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalunitsbyApartmentID */


      _createClass(DashBoardService, [{
        key: "getDashTotalunitsbyApartmentId",
        value: function getDashTotalunitsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                key = _ref6[0],
                value = _ref6[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalunitsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalTowersbyApartmentID */

      }, {
        key: "getDashTotalTowersbyApartmentId",
        value: function getDashTotalTowersbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                key = _ref8[0],
                value = _ref8[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalTowersbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalownersbyApartmentID */

      }, {
        key: "getDashTotalownersbyApartmentId",
        value: function getDashTotalownersbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref9) {
            var _ref10 = _slicedToArray(_ref9, 2),
                key = _ref10[0],
                value = _ref10[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalownersbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalTenantsbyApartmentID */

      }, {
        key: "getDashTotalTenantsbyApartmentId",
        value: function getDashTotalTenantsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref11) {
            var _ref12 = _slicedToArray(_ref11, 2),
                key = _ref12[0],
                value = _ref12[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalTenantsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalAdminsbyApartmentID */

      }, {
        key: "getDashTotalAdminsbyApartmentId",
        value: function getDashTotalAdminsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref13) {
            var _ref14 = _slicedToArray(_ref13, 2),
                key = _ref14[0],
                value = _ref14[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalAdminsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalStaffbyApartmentID */

      }, {
        key: "getDashTotalStaffbyApartmentId",
        value: function getDashTotalStaffbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref15) {
            var _ref16 = _slicedToArray(_ref15, 2),
                key = _ref16[0],
                value = _ref16[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalStaffbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnapprovedUsersPendingAdminbyApartmentID */

      }, {
        key: "getDashUnapprovedUsersPendingAdminbyApartmentId",
        value: function getDashUnapprovedUsersPendingAdminbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref17) {
            var _ref18 = _slicedToArray(_ref17, 2),
                key = _ref18[0],
                value = _ref18[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashUnapprovedUsersPendingAdminbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnapprovedUsersPendingusersbyApartmentID */

      }, {
        key: "getDashUnapprovedUsersPendingusersbyApartmentId",
        value: function getDashUnapprovedUsersPendingusersbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref19) {
            var _ref20 = _slicedToArray(_ref19, 2),
                key = _ref20[0],
                value = _ref20[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashUnapprovedUsersPendingusersbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpencommticketsbyApartmentID */

      }, {
        key: "getDashOpencommticketsbyApartmentId",
        value: function getDashOpencommticketsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref21) {
            var _ref22 = _slicedToArray(_ref21, 2),
                key = _ref22[0],
                value = _ref22[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashOpencommticketsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenpersonalticketsbyApartmentID */

      }, {
        key: "getDashOpenpersonalticketsbyApartmentId",
        value: function getDashOpenpersonalticketsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref23) {
            var _ref24 = _slicedToArray(_ref23, 2),
                key = _ref24[0],
                value = _ref24[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashOpenpersonalticketsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashHighpriorityopenpersonalTicketsbyApartmentID */

      }, {
        key: "getDashHighpriorityopenpersonalTicketsbyApartmentId",
        value: function getDashHighpriorityopenpersonalTicketsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref25) {
            var _ref26 = _slicedToArray(_ref25, 2),
                key = _ref26[0],
                value = _ref26[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashHighpriorityopenpersonalTicketsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashHighpriorityopenCommunityTicketsbyApartmentID */

      }, {
        key: "getDashHighpriorityopenCommunityTicketsbyApartmentId",
        value: function getDashHighpriorityopenCommunityTicketsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref27) {
            var _ref28 = _slicedToArray(_ref27, 2),
                key = _ref28[0],
                value = _ref28[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashHighpriorityopenCommunityTicketsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenPersonalAgedTicketsbyApartmentIDbyDays */

      }, {
        key: "getDashOpenPersonalAgedTicketsbyApartmentIDbyDays",
        value: function getDashOpenPersonalAgedTicketsbyApartmentIDbyDays(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            date: params.date,
            noOfDays: params.noOfDays
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref29) {
            var _ref30 = _slicedToArray(_ref29, 2),
                key = _ref30[0],
                value = _ref30[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashOpenPersonalAgedTicketsbyApartmentIDbyDays", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenCommunityAgedTicketsbyApartmentIDbyDays */

      }, {
        key: "getDashOpenCommunityAgedTicketsbyApartmentIDbyDays",
        value: function getDashOpenCommunityAgedTicketsbyApartmentIDbyDays(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            date: params.date,
            noOfDays: params.noOfDays
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref31) {
            var _ref32 = _slicedToArray(_ref31, 2),
                key = _ref32[0],
                value = _ref32[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashOpenCommunityAgedTicketsbyApartmentIDbyDays", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnassignedpersonalTicketsbyApartmentID */

      }, {
        key: "getDashUnassignedpersonalTicketsbyApartmentId",
        value: function getDashUnassignedpersonalTicketsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref33) {
            var _ref34 = _slicedToArray(_ref33, 2),
                key = _ref34[0],
                value = _ref34[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashUnassignedpersonalTicketsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnassignedCommunityTicketsbyApartmentID */

      }, {
        key: "getDashUnassignedCommunityTicketsbyApartmentId",
        value: function getDashUnassignedCommunityTicketsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref35) {
            var _ref36 = _slicedToArray(_ref35, 2),
                key = _ref36[0],
                value = _ref36[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashUnassignedCommunityTicketsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashinProgressPanicAlertsbyApartmentID */

      }, {
        key: "getDashinProgressPanicAlertsbyApartmentId",
        value: function getDashinProgressPanicAlertsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref37) {
            var _ref38 = _slicedToArray(_ref37, 2),
                key = _ref38[0],
                value = _ref38[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashinProgressPanicAlertsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenPanicAlertsbyApartmentID */

      }, {
        key: "getDashOpenPanicAlertsbyApartmentId",
        value: function getDashOpenPanicAlertsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref39) {
            var _ref40 = _slicedToArray(_ref39, 2),
                key = _ref40[0],
                value = _ref40[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashOpenPanicAlertsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashVisitorsCheckedinbyApartmentID */

      }, {
        key: "getDashVisitorsCheckedinbyApartmentId",
        value: function getDashVisitorsCheckedinbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            startDate: params.startDate,
            EndDate: params.EndDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref41) {
            var _ref42 = _slicedToArray(_ref41, 2),
                key = _ref42[0],
                value = _ref42[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashVisitorsCheckedinbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashVisitorsCheckedouttodaybyApartmentID */

      }, {
        key: "getDashVisitorsCheckedouttodaybyApartmentId",
        value: function getDashVisitorsCheckedouttodaybyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref43) {
            var _ref44 = _slicedToArray(_ref43, 2),
                key = _ref44[0],
                value = _ref44[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashVisitorsCheckedouttodaybyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashVisitorsNotcheckedtodaybyApartmentID */

      }, {
        key: "getDashVisitorsNotcheckedtodaybyApartmentId",
        value: function getDashVisitorsNotcheckedtodaybyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref45) {
            var _ref46 = _slicedToArray(_ref45, 2),
                key = _ref46[0],
                value = _ref46[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashVisitorsNotcheckedtodaybyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashunapprovedmoveinbyApartmentID */

      }, {
        key: "getDashunapprovedmoveinbyApartmentId",
        value: function getDashunapprovedmoveinbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            date: params.date
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref47) {
            var _ref48 = _slicedToArray(_ref47, 2),
                key = _ref48[0],
                value = _ref48[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashunapprovedmoveinbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashunapprovedmoveoutbyApartmentID */

      }, {
        key: "getDashunapprovedmoveoutbyApartmentId",
        value: function getDashunapprovedmoveoutbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            date: params.date
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref49) {
            var _ref50 = _slicedToArray(_ref49, 2),
                key = _ref50[0],
                value = _ref50[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashunapprovedmoveoutbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashupcomingmoveinApartmentID */

      }, {
        key: "getDashupcomingmoveinApartmentId",
        value: function getDashupcomingmoveinApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref51) {
            var _ref52 = _slicedToArray(_ref51, 2),
                key = _ref52[0],
                value = _ref52[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashupcomingmoveinApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashupcomingmoveoutApprovedbyApartmentID */

      }, {
        key: "getDashupcomingmoveoutApprovedbyApartmentId",
        value: function getDashupcomingmoveoutApprovedbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref53) {
            var _ref54 = _slicedToArray(_ref53, 2),
                key = _ref54[0],
                value = _ref54[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashupcomingmoveoutApprovedbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashuptotalparkingslotsbyApartmentID */

      }, {
        key: "getDashuptotalparkingslotsbyApartmentId",
        value: function getDashuptotalparkingslotsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref55) {
            var _ref56 = _slicedToArray(_ref55, 2),
                key = _ref56[0],
                value = _ref56[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashuptotalparkingslotsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashuptotalparkingslotsunassignedbyApartmentID */

      }, {
        key: "getDashuptotalparkingslotsunassignedbyApartmentId",
        value: function getDashuptotalparkingslotsunassignedbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref57) {
            var _ref58 = _slicedToArray(_ref57, 2),
                key = _ref58[0],
                value = _ref58[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashuptotalparkingslotsunassignedbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashufacilitybookingunapprovedbyApartmentID */

      }, {
        key: "getDashufacilitybookingunapprovedbyApartmentId",
        value: function getDashufacilitybookingunapprovedbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref59) {
            var _ref60 = _slicedToArray(_ref59, 2),
                key = _ref60[0],
                value = _ref60[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashufacilitybookingunapprovedbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashufacilitybookingapprovedtodaybyApartmentID */

      }, {
        key: "getDashufacilitybookingapprovedtodaybyApartmentId",
        value: function getDashufacilitybookingapprovedtodaybyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref61) {
            var _ref62 = _slicedToArray(_ref61, 2),
                key = _ref62[0],
                value = _ref62[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashufacilitybookingapprovedtodaybyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashlistupcomingmeetingbyApartmentID */

      }, {
        key: "getDashlistupcomingmeetingbyApartmentId",
        value: function getDashlistupcomingmeetingbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref63) {
            var _ref64 = _slicedToArray(_ref63, 2),
                key = _ref64[0],
                value = _ref64[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashlistupcomingmeetingbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashlistBroadcastsentbyApartmentID */

      }, {
        key: "getDashlistBroadcastsentbyApartmentId",
        value: function getDashlistBroadcastsentbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref65) {
            var _ref66 = _slicedToArray(_ref65, 2),
                key = _ref66[0],
                value = _ref66[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashlistBroadcastsentbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalamtbilledcustomersthismonthbyApartmentID */

      }, {
        key: "getDashTotalamtbilledcustomersthismonthbyApartmentId",
        value: function getDashTotalamtbilledcustomersthismonthbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref67) {
            var _ref68 = _slicedToArray(_ref67, 2),
                key = _ref68[0],
                value = _ref68[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalamtbilledcustomersthismonthbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalamtreceivedcustomersthismonthbyApartmentID */

      }, {
        key: "getDashTotalamtreceivedcustomersthismonthbyApartmentId",
        value: function getDashTotalamtreceivedcustomersthismonthbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref69) {
            var _ref70 = _slicedToArray(_ref69, 2),
                key = _ref70[0],
                value = _ref70[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalamtreceivedcustomersthismonthbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashpaymentdefaultersasoftodayybyApartmentID */

      }, {
        key: "getDashpaymentdefaultersasoftodayybyApartmentId",
        value: function getDashpaymentdefaultersasoftodayybyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref71) {
            var _ref72 = _slicedToArray(_ref71, 2),
                key = _ref72[0],
                value = _ref72[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashpaymentdefaultersasoftodayybyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashcreditnoteappliedbyApartmentID */

      }, {
        key: "getDashcreditnoteappliedbyApartmentId",
        value: function getDashcreditnoteappliedbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref73) {
            var _ref74 = _slicedToArray(_ref73, 2),
                key = _ref74[0],
                value = _ref74[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashcreditnoteappliedbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashWPapprovalpendingbyApartmentID */

      }, {
        key: "getDashWPapprovalpendingbyApartmentId",
        value: function getDashWPapprovalpendingbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref75) {
            var _ref76 = _slicedToArray(_ref75, 2),
                key = _ref76[0],
                value = _ref76[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashWPapprovalpendingbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashWPupcomingbyApartmentID */

      }, {
        key: "getDashWPupcomingbyApartmentId",
        value: function getDashWPupcomingbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref77) {
            var _ref78 = _slicedToArray(_ref77, 2),
                key = _ref78[0],
                value = _ref78[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashWPupcomingbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/getUDashVehiclecountbyblockunituser */

      }, {
        key: "getUDashVehiclecountbyblockunituser",
        value: function getUDashVehiclecountbyblockunituser(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockunituserId: params.blockunituserId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref79) {
            var _ref80 = _slicedToArray(_ref79, 2),
                key = _ref80[0],
                value = _ref80[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/getUDashVehiclecountbyblockunituser", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashTotalpetstbyblockunituser */

      }, {
        key: "getUDashTotalpetstbyblockunituser",
        value: function getUDashTotalpetstbyblockunituser(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockunituserId: params.blockunituserId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref81) {
            var _ref82 = _slicedToArray(_ref81, 2),
                key = _ref82[0],
                value = _ref82[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashTotalpetstbyblockunituser", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashPrivateStaffbyblockunituser */

      }, {
        key: "getUDashPrivateStaffbyblockunituser",
        value: function getUDashPrivateStaffbyblockunituser(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockunituserId: params.blockunituserId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref83) {
            var _ref84 = _slicedToArray(_ref83, 2),
                key = _ref84[0],
                value = _ref84[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashPrivateStaffbyblockunituser", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashOpenticektsbyblockunituser */

      }, {
        key: "getUDashOpenticektsbyblockunituser",
        value: function getUDashOpenticektsbyblockunituser(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockunituserId: params.blockunituserId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref85) {
            var _ref86 = _slicedToArray(_ref85, 2),
                key = _ref86[0],
                value = _ref86[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashOpenticektsbyblockunituser", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashOpenticektsbyblockunituserTicketpriority */

      }, {
        key: "getUDashOpenticektsbyblockunituserTicketpriority",
        value: function getUDashOpenticektsbyblockunituserTicketpriority(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockunituserId: params.blockunituserId,
            priority: params.priority
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref87) {
            var _ref88 = _slicedToArray(_ref87, 2),
                key = _ref88[0],
                value = _ref88[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashOpenticektsbyblockunituserTicketpriority", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashVisitorcheckedinbyblockunituser */

      }, {
        key: "getUDashVisitorcheckedinbyblockunituser",
        value: function getUDashVisitorcheckedinbyblockunituser(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitId: params.blockUnitId,
            startDate: params.startDate,
            EndDate: params.EndDate,
            blockUnitUserId: params.blockUnitUserId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref89) {
            var _ref90 = _slicedToArray(_ref89, 2),
                key = _ref90[0],
                value = _ref90[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashVisitorcheckedinbyblockunituser", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashVisitorNOTcheckeddoubyblockunitID */

      }, {
        key: "getUDashVisitorNoTcheckeddoubyblockunitId",
        value: function getUDashVisitorNoTcheckeddoubyblockunitId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitId: params.blockUnitId,
            blockUnitUserId: params.blockUnitUserId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref91) {
            var _ref92 = _slicedToArray(_ref91, 2),
                key = _ref92[0],
                value = _ref92[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashVisitorNOTcheckeddoubyblockunitID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashTotalparkingbyblockunitID */

      }, {
        key: "getUDashTotalparkingbyblockunitId",
        value: function getUDashTotalparkingbyblockunitId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitId: params.blockUnitId,
            blockUnitUserId: params.blockUnitUserId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref93) {
            var _ref94 = _slicedToArray(_ref93, 2),
                key = _ref94[0],
                value = _ref94[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashTotalparkingbyblockunitID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDapprovedfacilittbookingbyblockunitID */

      }, {
        key: "getUDapprovedfacilittbookingbyblockunitId",
        value: function getUDapprovedfacilittbookingbyblockunitId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitUserID: params.blockUnitUserID
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref95) {
            var _ref96 = _slicedToArray(_ref95, 2),
                key = _ref96[0],
                value = _ref96[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDapprovedfacilittbookingbyblockunitID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashWaterunitsbyblockunitID */

      }, {
        key: "getUDashWaterunitsbyblockunitId",
        value: function getUDashWaterunitsbyblockunitId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitUserID: params.blockUnitUserID,
            BlockUnitId: params.BlockUnitId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref97) {
            var _ref98 = _slicedToArray(_ref97, 2),
                key = _ref98[0],
                value = _ref98[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashWaterunitsbyblockunitID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashCurrentViolationsbyblockunituserID */

      }, {
        key: "getUDashCurrentViolationsbyblockunituserId",
        value: function getUDashCurrentViolationsbyblockunituserId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitUserID: params.blockUnitUserID,
            BlockUnitId: params.BlockUnitId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref99) {
            var _ref100 = _slicedToArray(_ref99, 2),
                key = _ref100[0],
                value = _ref100[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashCurrentViolationsbyblockunituserID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashActiveWorkpermitbyblockunituserID */

      }, {
        key: "getUDashActiveWorkpermitbyblockunituserId",
        value: function getUDashActiveWorkpermitbyblockunituserId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitUserID: params.blockUnitUserID,
            BlockUnitId: params.BlockUnitId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref101) {
            var _ref102 = _slicedToArray(_ref101, 2),
                key = _ref102[0],
                value = _ref102[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashActiveWorkpermitbyblockunituserID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetVehicleNumberbyStaffID */

      }, {
        key: "getVehicleNumberbyStaffId",
        value: function getVehicleNumberbyStaffId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            staffId: params.staffId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref103) {
            var _ref104 = _slicedToArray(_ref103, 2),
                key = _ref104[0],
                value = _ref104[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetVehicleNumberbyStaffID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetTicketsassignedtouserbyUserID */

      }, {
        key: "getTicketsassignedtouserbyUserId",
        value: function getTicketsassignedtouserbyUserId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            UserID: params.UserID,
            TicketType: params.TicketType,
            Priority: params.Priority
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref105) {
            var _ref106 = _slicedToArray(_ref105, 2),
                key = _ref106[0],
                value = _ref106[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetTicketsassignedtouserbyUserID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/Getassetsowned */

      }, {
        key: "getassetsowned",
        value: function getassetsowned(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            staffId: params.staffId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref107) {
            var _ref108 = _slicedToArray(_ref107, 2),
                key = _ref108[0],
                value = _ref108[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/Getassetsowned", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetAssetsassignedformaintenance */

      }, {
        key: "getAssetsassignedformaintenance",
        value: function getAssetsassignedformaintenance(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref109) {
            var _ref110 = _slicedToArray(_ref109, 2),
                key = _ref110[0],
                value = _ref110[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetAssetsassignedformaintenance", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetLowinventorystock */

      }, {
        key: "getLowinventorystock",
        value: function getLowinventorystock(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            staffId: params.staffId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref111) {
            var _ref112 = _slicedToArray(_ref111, 2),
                key = _ref112[0],
                value = _ref112[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetLowinventorystock", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/Getfacilityeventstoday */

      }, {
        key: "getfacilityeventstoday",
        value: function getfacilityeventstoday(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref113) {
            var _ref114 = _slicedToArray(_ref113, 2),
                key = _ref114[0],
                value = _ref114[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/Getfacilityeventstoday", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetStaffSalary */

      }, {
        key: "getStaffSalary",
        value: function getStaffSalary(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            staffId: params.staffId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref115) {
            var _ref116 = _slicedToArray(_ref115, 2),
                key = _ref116[0],
                value = _ref116[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetStaffSalary", {
            params: queryParams
          });
        }
      }]);

      return DashBoardService;
    }();

    DashBoardService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    DashBoardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], DashBoardService);
    /***/
  }
}]);
//# sourceMappingURL=default~ams-dashboard-dashboard-module~user-user-dashboard-user-dashboard-module-es5.js.map