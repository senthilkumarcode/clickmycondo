function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-public-module"], {
  /***/
  "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js ***!
    \*******************************************************************************************/

  /*! exports provided: ScrollToDirective, ScrollToModule, ScrollToService */

  /***/
  function node_modulesNickyLenaersNgxScrollToFesm2015NickyLenaersNgxScrollToJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function () {
      return ScrollToDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollToModule", function () {
      return ScrollToModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollToService", function () {
      return ScrollToService;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default values for Component Input
     * @type {?}
     */


    var DEFAULTS = {
      target: null,
      action: 'click',
      duration: 650,
      easing: 'easeInOutQuad',
      offset: 0,
      offsetMap: new Map()
    };

    var ɵ0 =
    /**
    * @param {?} time
    * @return {?}
    */
    function ɵ0(time) {
      return time * time;
    },
        ɵ1 =
    /**
    * @param {?} time
    * @return {?}
    */
    function ɵ1(time) {
      return time * (2 - time);
    },
        ɵ2 =
    /**
    * @param {?} time
    * @return {?}
    */
    function ɵ2(time) {
      return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
    },
        ɵ3 =
    /**
    * @param {?} time
    * @return {?}
    */
    function ɵ3(time) {
      return time * time * time;
    },
        ɵ4 =
    /**
    * @param {?} time
    * @return {?}
    */
    function ɵ4(time) {
      return --time * time * time + 1;
    },
        ɵ5 =
    /**
    * @param {?} time
    * @return {?}
    */
    function ɵ5(time) {
      return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
    },
        ɵ6 =
    /**
    * @param {?} time
    * @return {?}
    */
    function ɵ6(time) {
      return time * time * time * time;
    },
        ɵ7 =
    /**
    * @param {?} time
    * @return {?}
    */
    function ɵ7(time) {
      return 1 - --time * time * time * time;
    },
        ɵ8 =
    /**
    * @param {?} time
    * @return {?}
    */
    function ɵ8(time) {
      return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * --time * time * time * time;
    },
        ɵ9 =
    /**
    * @param {?} time
    * @return {?}
    */
    function ɵ9(time) {
      return time * time * time * time * time;
    },
        ɵ10 =
    /**
    * @param {?} time
    * @return {?}
    */
    function ɵ10(time) {
      return 1 + --time * time * time * time * time;
    },
        ɵ11 =
    /**
    * @param {?} time
    * @return {?}
    */
    function ɵ11(time) {
      return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * --time * time * time * time * time;
    },
        ɵ12 =
    /**
    * @param {?} time
    * @return {?}
    */
    function ɵ12(time) {
      return Math.pow(2, -10 * time) * Math.sin((time - 1 / 4) * (2 * Math.PI) / 1) + 1;
    };
    /**
     * Easing Colleciton
     * @type {?}
     */


    var EASING = {
      easeInQuad: ɵ0,
      easeOutQuad: ɵ1,
      easeInOutQuad: ɵ2,
      easeInCubic: ɵ3,
      easeOutCubic: ɵ4,
      easeInOutCubic: ɵ5,
      easeInQuart: ɵ6,
      easeOutQuart: ɵ7,
      easeInOutQuart: ɵ8,
      easeInQuint: ɵ9,
      easeOutQuint: ɵ10,
      easeInOutQuint: ɵ11,
      easeOutElastic: ɵ12
    };
    /**
     * Set of allowed events as triggers
     * for the Animation to start.
     * @type {?}
     */

    var EVENTS = ['click', 'mouseenter', 'mouseover', 'mousedown', 'mouseup', 'dblclick', 'contextmenu', 'wheel', 'mouseleave', 'mouseout'];
    /**
     * Strip hash (#) from value.
     *
     * @param {?} value 				The given string value
     * @return {?} 					The stripped string value
     */

    function stripHash(value) {
      return value.substring(0, 1) === '#' ? value.substring(1) : value;
    }
    /**
     * Test if a given value is a string.
     *
     * @param {?} value 					The given value
     * @return {?} 						Whether the given value is a string
     */


    function isString(value) {
      return typeof value === 'string' || value instanceof String;
    }
    /**
     * Test if a given Element is the Window.
     *
     * @param {?} container 				The given Element
     * @return {?} 						Whether the given Element is Window
     */


    function isWindow(container) {
      return container === window;
    }
    /**
     * Test if a given value is of type ElementRef.
     *
     * @param {?} value 					The given value
     * @return {?} Whether the given value is a number
     */


    function isElementRef(value) {
      return value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"];
    }
    /**
     * Whether or not the given value is a Native Element.
     *
     * @param {?} value           The given value
     * @return {?} Whether or not the value is a Native Element
     */


    function isNativeElement(value) {
      return value instanceof HTMLElement;
    }
    /**
     * Test if a given value is type number.
     *
     * @param {?} value 					The given value
     * @return {?} 						Whether the given value is a number
     */


    function isNumber(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Scroll To Animation
     */


    var ScrollToAnimation =
    /*#__PURE__*/
    function () {
      /**
       * Class Constructor.
       *
       * @param {?} _container            The Container
       * @param {?} _listenerTarget       The Element that listens for DOM Events
       * @param {?} _isWindow             Whether or not the listener is the Window
       * @param {?} _to                   Position to scroll to
       * @param {?} _options              Additional options for scrolling
       * @param {?} _isBrowser            Whether or not execution runs in the browser
       *                              (as opposed to the server)
       */
      function ScrollToAnimation(_container, _listenerTarget, _isWindow, _to, _options, _isBrowser) {
        var _this = this;

        _classCallCheck(this, ScrollToAnimation);

        this._container = _container;
        this._listenerTarget = _listenerTarget;
        this._isWindow = _isWindow;
        this._to = _to;
        this._options = _options;
        this._isBrowser = _isBrowser;
        /**
         * Recursively loop over the Scroll Animation
         */

        this._loop =
        /**
        * @return {?}
        */
        function () {
          _this._timeLapsed += _this._tick;
          _this._percentage = _this._timeLapsed / _this._options.duration;
          _this._percentage = _this._percentage > 1 ? 1 : _this._percentage; // Position Update

          _this._position = _this._startPosition + (_this._startPosition - _this._to <= 0 ? 1 : -1) * _this._distance * EASING[_this._options.easing](_this._percentage);

          if (_this._lastPosition !== null && _this._position === _this._lastPosition) {
            _this.stop();
          } else {
            _this._source$.next(_this._position);

            _this._isWindow ? _this._listenerTarget.scrollTo(0, Math.floor(_this._position)) : _this._container.scrollTop = Math.floor(_this._position);
            _this._lastPosition = _this._position;
          }
        };

        this._tick = 16;
        this._interval = null;
        this._lastPosition = null;
        this._timeLapsed = 0;
        this._windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (!this._container) {
          this._startPosition = this._windowScrollTop;
        } else {
          this._startPosition = this._isWindow ? this._windowScrollTop : this._container.scrollTop;
        } // Correction for Starting Position of nested HTML Elements


        if (this._container && !this._isWindow) {
          this._to = this._to - this._container.getBoundingClientRect().top + this._startPosition;
        } // Set Distance

        /** @type {?} */


        var directionalDistance = this._startPosition - this._to;
        this._distance = this._container ? Math.abs(this._startPosition - this._to) : this._to;
        this._mappedOffset = this._options.offset; // Set offset from Offset Map

        if (this._isBrowser) {
          this._options.offsetMap.forEach(
          /**
          * @param {?} value
          * @param {?} key
          * @return {?}
          */
          function (value, key) {
            return _this._mappedOffset = window.innerWidth > key ? value : _this._mappedOffset;
          });
        }

        this._distance += this._mappedOffset * (directionalDistance <= 0 ? 1 : -1);
        this._source$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
      }
      /**
       * Start the new Scroll Animation.
       *
       * @return {?} Observable containing a number
       */


      _createClass(ScrollToAnimation, [{
        key: "start",
        value: function start() {
          clearInterval(this._interval);
          this._interval = setInterval(this._loop, this._tick);
          return this._source$.asObservable();
        }
        /**
         * Stop the current Scroll Animation Loop.
         *
         * @return {?} Void
         */

      }, {
        key: "stop",
        value: function stop() {
          clearInterval(this._interval);
          this._interval = null;

          this._source$.complete();
        }
      }]);

      return ScrollToAnimation;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The Scroll To Service handles starting, interrupting
     * and ending the actual Scroll Animation. It provides
     * some utilities to find the proper HTML Element on a
     * given page to setup Event Listeners and calculate
     * distances for the Animation.
     */


    var ScrollToService =
    /*#__PURE__*/
    function () {
      /**
       * Construct and setup required paratemeters.
       *
       * @param {?} _document         A Reference to the Document
       * @param {?} _platformId       Angular Platform ID
       */
      function ScrollToService(_document, _platformId) {
        _classCallCheck(this, ScrollToService);

        this._document = _document;
        this._platformId = _platformId;
        this._interruptiveEvents = ['mousewheel', 'DOMMouseScroll', 'touchstart'];
      }
      /**
       * Target an Element to scroll to. Notice that the `TimeOut` decorator
       * ensures the executing to take place in the next Angular lifecycle.
       * This allows for scrolling to elements that are e.g. initially hidden
       * by means of `*ngIf`, but ought to be scrolled to eventually.
       *
       * \@todo type 'any' in Observable should become custom type like 'ScrollToEvent' (base class), see issue comment:
       * 	- https://github.com/nicky-lenaers/ngx-scroll-to/issues/10#issuecomment-317198481
       *
       * @param {?} options         Configuration Object
       * @return {?} Observable
       */


      _createClass(ScrollToService, [{
        key: "scrollTo",
        value: function scrollTo(options) {
          if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this._platformId)) return new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]().asObservable();
          return this._start(options);
        }
        /**
         * Start a new Animation.
         *
         * \@todo Emit proper events from subscription
         *
         * @private
         * @param {?} options         Configuration Object
         * @return {?} Observable
         */

      }, {
        key: "_start",
        value: function _start(options) {
          var _this2 = this;

          // Merge config with default values

          /** @type {?} */
          var mergedConfigOptions =
          /** @type {?} */
          Object.assign({},
          /** @type {?} */
          DEFAULTS, options);
          if (this._animation) this._animation.stop();
          /** @type {?} */

          var targetNode = this._getNode(mergedConfigOptions.target);

          if (mergedConfigOptions.target && !targetNode) return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Unable to find Target Element');
          /** @type {?} */

          var container = this._getContainer(mergedConfigOptions, targetNode);

          if (mergedConfigOptions.container && !container) return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Unable to find Container Element');
          /** @type {?} */

          var listenerTarget = this._getListenerTarget(container) || window;
          /** @type {?} */

          var to = container ? container.getBoundingClientRect().top : 0;

          if (targetNode) {
            to = isWindow(listenerTarget) ? targetNode.offsetTop : targetNode.getBoundingClientRect().top;
          } // Create Animation


          this._animation = new ScrollToAnimation(container, listenerTarget, isWindow(listenerTarget), to, mergedConfigOptions, Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this._platformId));
          /** @type {?} */

          var onInterrupt =
          /**
          * @return {?}
          */
          function onInterrupt() {
            return _this2._animation.stop();
          };

          this._addInterruptiveEventListeners(listenerTarget, onInterrupt); // Start Animation

          /** @type {?} */


          var animation$ = this._animation.start();

          this._subscribeToAnimation(animation$, listenerTarget, onInterrupt);

          return animation$;
        }
        /**
         * Subscribe to the events emitted from the Scrolling
         * Animation. Events might be used for e.g. unsubscribing
         * once finished.
         *
         * @private
         * @param {?} animation$              The Animation Observable
         * @param {?} listenerTarget          The Listener Target for events
         * @param {?} onInterrupt             The handler for Interruptive Events
         * @return {?} Void
         */

      }, {
        key: "_subscribeToAnimation",
        value: function _subscribeToAnimation(animation$, listenerTarget, onInterrupt) {
          var _this3 = this;

          /** @type {?} */
          var subscription = animation$.subscribe(
          /**
          * @return {?}
          */
          function () {},
          /**
          * @return {?}
          */
          function () {},
          /**
          * @return {?}
          */
          function () {
            _this3._removeInterruptiveEventListeners(_this3._interruptiveEvents, listenerTarget, onInterrupt);

            subscription.unsubscribe();
          });
        }
        /**
         * Get the container HTML Element in which
         * the scrolling should happen.
         *
         * @private
         * @param {?} options         The Merged Configuration Object
         * @param {?} targetNode    the targeted HTMLElement
         * @return {?}
         */

      }, {
        key: "_getContainer",
        value: function _getContainer(options, targetNode) {
          /** @type {?} */
          var container = null;

          if (options.container) {
            container = this._getNode(options.container, true);
          } else if (targetNode) {
            container = this._getFirstScrollableParent(targetNode);
          }

          return container;
        }
        /**
         * Add listeners for the Animation Interruptive Events
         * to the Listener Target.
         *
         * @private
         * @param {?} listenerTarget    Target to attach the listener on
         * @param {?} handler           Handler for when the listener fires
         * @return {?} Void
         */

      }, {
        key: "_addInterruptiveEventListeners",
        value: function _addInterruptiveEventListeners(listenerTarget, handler) {
          var _this4 = this;

          if (!listenerTarget) listenerTarget = window;

          this._interruptiveEvents.forEach(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return listenerTarget.addEventListener(event, handler, _this4._supportPassive() ? {
              passive: true
            } : false);
          });
        }
        /**
         * Feature-detect support for passive event listeners.
         *
         * @private
         * @return {?} Whether or not passive event listeners are supported
         */

      }, {
        key: "_supportPassive",
        value: function _supportPassive() {
          /** @type {?} */
          var supportsPassive = false;

          try {
            /** @type {?} */
            var opts = Object.defineProperty({}, 'passive', {
              get:
              /**
              * @return {?}
              */
              function get() {
                supportsPassive = true;
              }
            });
            window.addEventListener('testPassive', null, opts);
            window.removeEventListener('testPassive', null, opts);
          } catch (e) {}

          return supportsPassive;
        }
        /**
         * Remove listeners for the Animation Interrupt Event from
         * the Listener Target. Specifying the correct handler prevents
         * memory leaks and makes the allocated memory available for
         * Garbage Collection.
         *
         * @private
         * @param {?} events            List of Interruptive Events to remove
         * @param {?} listenerTarget    Target to attach the listener on
         * @param {?} handler           Handler for when the listener fires
         * @return {?} Void
         */

      }, {
        key: "_removeInterruptiveEventListeners",
        value: function _removeInterruptiveEventListeners(events, listenerTarget, handler) {
          if (!listenerTarget) listenerTarget = window;
          events.forEach(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return listenerTarget.removeEventListener(event, handler);
          });
        }
        /**
         * Find the first scrollable parent Node of a given
         * Element. The DOM Tree gets searched upwards
         * to find this first scrollable parent. Parents might
         * be ignored by CSS styles applied to the HTML Element.
         *
         * @private
         * @param {?} nativeElement     The Element to search the DOM Tree upwards from
         * @return {?} The first scrollable parent HTML Element
         */

      }, {
        key: "_getFirstScrollableParent",
        value: function _getFirstScrollableParent(nativeElement) {
          /** @type {?} */
          var style = window.getComputedStyle(nativeElement);
          /** @type {?} */

          var overflowRegex = /(auto|scroll|overlay)/;
          if (style.position === 'fixed') return null;

          for (var parent = nativeElement; parent = parent.parentElement; null) {
            style = window.getComputedStyle(parent);
            if (style.position === 'absolute' || style.overflow === 'hidden' || style.overflowY === 'hidden') continue;
            if (overflowRegex.test(style.overflow + style.overflowY) || parent.tagName === 'BODY') return parent;
          }

          return null;
        }
        /**
         * Get the Target Node to scroll to.
         *
         * @private
         * @param {?} id              The given ID of the node, either a string or
         *                        an element reference
         * @param {?=} allowBodyTag    Indicate whether or not the Document Body is
         *                        considered a valid Target Node
         * @return {?} The Target Node to scroll to
         */

      }, {
        key: "_getNode",
        value: function _getNode(id) {
          var allowBodyTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          /** @type {?} */
          var targetNode;

          if (isString(id)) {
            if (allowBodyTag && (id === 'body' || id === 'BODY')) {
              targetNode = this._document.body;
            } else {
              targetNode = this._document.getElementById(stripHash(id));
            }
          } else if (isNumber(id)) {
            targetNode = this._document.getElementById(String(id));
          } else if (isElementRef(id)) {
            targetNode = id.nativeElement;
          } else if (isNativeElement(id)) {
            targetNode = id;
          }

          return targetNode;
        }
        /**
         * Retrieve the Listener target. This Listener Target is used
         * to attach Event Listeners on. In case of the target being
         * the Document Body, we need the actual `window` to listen
         * for events.
         *
         * @private
         * @param {?} container           The HTML Container element
         * @return {?} The Listener Target to attach events on
         */

      }, {
        key: "_getListenerTarget",
        value: function _getListenerTarget(container) {
          if (!container) return null;
          return this._isDocumentBody(container) ? window : container;
        }
        /**
         * Test if a given HTML Element is the Document Body.
         *
         * @private
         * @param {?} element             The given HTML Element
         * @return {?} Whether or not the Element is the
         *                            Document Body Element
         */

      }, {
        key: "_isDocumentBody",
        value: function _isDocumentBody(element) {
          return element.tagName.toUpperCase() === 'BODY';
        }
      }]);

      return ScrollToService;
    }();

    ScrollToService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }];
    /** @nocollapse */

    ScrollToService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /* tslint:disable */


    var ScrollToDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _scrollToService
       * @param {?} _renderer2
       */
      function ScrollToDirective(_elementRef, _scrollToService, _renderer2) {
        _classCallCheck(this, ScrollToDirective);

        this._elementRef = _elementRef;
        this._scrollToService = _scrollToService;
        this._renderer2 = _renderer2;
        this.ngxScrollTo = DEFAULTS.target;
        this.ngxScrollToEvent = DEFAULTS.action;
        this.ngxScrollToDuration = DEFAULTS.duration;
        this.ngxScrollToEasing = DEFAULTS.easing;
        this.ngxScrollToOffset = DEFAULTS.offset;
        this.ngxScrollToOffsetMap = DEFAULTS.offsetMap;
      }
      /**
       * Angular Lifecycle Hook - After View Init
       *
       * \@todo Implement Subscription for Events
       *
       * @return {?} void
       */


      _createClass(ScrollToDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this5 = this;

          // Test Event Support
          if (EVENTS.indexOf(this.ngxScrollToEvent) === -1) throw new Error("Unsupported Event '".concat(this.ngxScrollToEvent, "'")); // Listen for the trigger...

          this._renderer2.listen(this._elementRef.nativeElement, this.ngxScrollToEvent,
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this5._options = {
              target: _this5.ngxScrollTo,
              duration: _this5.ngxScrollToDuration,
              easing: _this5.ngxScrollToEasing,
              offset: _this5.ngxScrollToOffset,
              offsetMap: _this5.ngxScrollToOffsetMap
            };

            _this5._scrollToService.scrollTo(_this5._options);
          });
        }
      }]);

      return ScrollToDirective;
    }();

    ScrollToDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: '[ngx-scroll-to]'
      }]
    }];
    /** @nocollapse */

    ScrollToDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: ScrollToService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }];
    };

    ScrollToDirective.propDecorators = {
      ngxScrollTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['ngx-scroll-to']
      }],
      ngxScrollToEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['ngx-scroll-to-event']
      }],
      ngxScrollToDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['ngx-scroll-to-duration']
      }],
      ngxScrollToEasing: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['ngx-scroll-to-easing']
      }],
      ngxScrollToOffset: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['ngx-scroll-to-offset']
      }],
      ngxScrollToOffsetMap: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['ngx-scroll-to-offset-map']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Scroll To Module
     */

    var ScrollToModule =
    /*#__PURE__*/
    function () {
      function ScrollToModule() {
        _classCallCheck(this, ScrollToModule);
      }

      _createClass(ScrollToModule, null, [{
        key: "forRoot",

        /**
         * Guaranteed singletons for provided Services across App.
         *
         * @return {?} An Angular Module with Providers
         */
        value: function forRoot() {
          return {
            ngModule: ScrollToModule,
            providers: [ScrollToService]
          };
        }
      }]);

      return ScrollToModule;
    }();

    ScrollToModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        declarations: [ScrollToDirective],
        exports: [ScrollToDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=nicky-lenaers-ngx-scroll-to.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/components/forgot-password/forgot-password.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/components/forgot-password/forgot-password.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicComponentsForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"forgotpass-header\">\n\t<nav class=\"navbar\">\n  \t\t<a class=\"navbar-brand mt-3\" href=\"#\"><img src=\"assets/images/logo.png\" width=\"170\"/></a>\n\t</nav>\n</div>\n<section class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-6 col-md-8 col-sm-12 offset-lg-3 offset-md-2\">\n\t\t\t<div class=\"forgotpass-form-wrapper\">\n\t\t\t\t<h4 class=\"text-center\">Reset Password</h4>\n\t\t\t\t<div class=\"content card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<form #forgotpassform = \"ngForm\" name=\"forgotpassform\" novalidate>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"forgotpassFormEmail\">Email</label>\n\t\t\t\t\t\t\t\t\t\t    <input type=\"email\" #forgotpassFormEmail=\"ngModel\" (ngModelChange)=\"clearErrors()\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" class=\"form-control\" name=\"forgotpassFormEmail\" [(ngModel)]=\"userEmailId\" placeholder=\"Enter email\" required>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"submit-box\">\n\t\t\t\t\t\t\t\t\t\t<button [disabled]=\"forgotpassform.invalid\" class=\"btn md-btn blue text-uppercase\">Send Password Reset Link</button>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"b-login\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/login\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\" class=\"lime-green\">Back to Login</a>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/components/home/home.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/components/home/home.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"hero-wrapper\">\n    <div class=\"overlay\"></div>\n    <div class=\"move-next wow fadeInUp animated\" data-wow-delay=\"0.2s\">\n      <a href=\"javascript:void(0)\"><i class=\"fa fa-angle-down\"></i></a>\n    </div>\n    <nav class=\"navbar navbar-expand-lg bg-inverse\">\n      <a href=\"index.html\" class=\"navbar-brand\"><h1 class=\"logo\">Clickmycondo</h1></a>\n          <div class=\"navbar-toggle pull-right\" (click)=\"toggleNav()\" [ngClass]=\"isNavExpanded ? 'expanded': ''\">\n             <div class=\"navbar-toggler-icon\">\n              <span class=\"top\"></span>\n              <span class=\"middle\"></span>\n              <span class=\"bottom\"></span>\n             </div>\n          </div>\n          <div class=\"collapse navbar-collapse\" [ngClass]=\"isNavExpanded ? 'expanded': ''\">\n            <ul class=\"navbar-nav mr-auto w-100 justify-content-end\" #nav>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:void(0);return false;\" id=\"features-link\" (click)=\"gotoContentSection('features')\" [ngClass]=\"isActiveLink('features')\">Features</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:void(0);return false;\" id=\"pricing-link\" (click)=\"gotoContentSection('pricing')\" [ngClass]=\"isActiveLink('pricing')\">Pricing</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:void(0);return false;\" id=\"aboutus-link\" (click)=\"gotoContentSection('aboutus')\" [ngClass]=\"isActiveLink('aboutus')\">About Us</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:void(0);return false;\" id=\"contact-link\" (click)=\"gotoContentSection('contact')\" [ngClass]=\"isActiveLink('contact')\">Contact</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link btn header-btn signup-btn\" href=\"javascript:void(0)\"\n                routerLink=\"signup\" \n                routerLinkActive=\"active\"\n                [routerLinkActiveOptions] = \"{exact:true}\">Signup</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link btn header-btn login-btn\" href=\"javascript:void(0)\" \n                routerLink=\"login\" \n                routerLinkActive=\"active\"\n                [routerLinkActiveOptions] = \"{exact:true}\">Login</a>\n              </li>\n            </ul>\n          </div>\n    </nav>\n    <div class=\"container-fluid\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-9 col-md-12 col-sm-12 text-center\">\n          <div class=\"contents\">\n            <h2 class=\"wow fadeInUp animated\" data-wow-delay=\"0.3s\">A Simple yet powerful end to end software solution for Condo Management</h2>\n            <!-- <h3 class=\"wow fadeInUp animated\" data-wow-delay=\"0.3s\">Condo Residents, Society Accounting and Condo Management Software for Condo Association</h3> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  <section class=\"content-block features-block\" id=\"features\">\n    <div class=\"container-fluid\">\n      <div class=\"row justify-content-center wow fadeIn animated\" data-wow-delay=\"0.2s\">\n        <div class=\"col-lg-9 col-md-12 col-sm-12\">\n          <div class=\"title text-center wow fadeInDown animated\" data-wow-delay=\"0.2s\"><h2>Features</h2></div>\n          <div class=\"desp\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 col-md-6 col-lg-6\">\n                <div class=\"feature-list wow fadeInDown animated\"data-wow-delay=\"0.1s\">\n                  <ul>\n                    <li>Easy to use Condo Management Solutions</li>\n                    <li>No more Excel - All your data in Mobile / Web</li>\n                    <li>Stay connected with your Society / Association 24X7</li>\n                    <li>Connect with neighbors & Collaborate </li>\n                    <li>Track your bills &  online Payments </li>\n                    <li>Raise complaints and track for resolution</li>\n                    <li>App for owner/Tenants , Staff & Security</li>\n                    <li>Store and Share documents & Meeting Minutes</li>\n                    <li>Send / Get reminders</li>\n                  </ul>\n                </div>\n              </div>\n              <div class=\"col-sm-12 col-md-6 col-lg-6\">\n                <div class=\"screen-wrapper wow fadeInDown slideInRight animated\" data-wow-duration=\"1s\" data-wow-delay=\"0.1s\">\n                  <img src=\"assets/images/features-screen.png\" class=\"img-fluid\" />\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"content-block pricing-block\" id=\"pricing\">\n    <div class=\"container-fluid h-100\">\n      <div class=\"row h-100 justify-content-center align-items-center wow fadeIn animated\" data-wow-delay=\"0.2s\">\n        <div class=\"col-lg-9 col-md-12 col-sm-12\">\n          <div class=\"title text-center wow fadeInDown animated\" data-wow-delay=\"0.2s\"><h2>Pricing</h2></div>\n          <div class=\"desp\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 col-md-6 col-lg-6\">\n                <div class=\"card price-plan free wow slideInLeft animated\" data-wow-delay=\"0.2s\">\n                  <h4>Basic</h4>\n                  <ul class=\"price-points\">\n                    <li>1-15 Units (Max)</li>\n                    <li>Raise complaints</li>\n                    <li>Connect with your community</li>\n                    <li>Separate login for staff, gatekeeper, admins , owners/ tenants</li>\n                    <li>Online payment option</li>\n                  </ul>\n                  <div class=\"btn btn-pricing btn-free\">FREE</div>\n                </div>\n              </div>\n              <div class=\"col-sm-12 col-md-6 col-lg-6\">\n                <div class=\"card price-plan premium wow slideInRight animated\" data-wow-delay=\"0.2s\">\n                  <h4>Premium</h4>\n                  <ul class=\"price-points\">\n                    <li>More than 15 Units</li>\n                    <li>Raise complaints</li>\n                    <li>Connect with your community</li>\n                    <li>Separate login for staff, gatekeeper, admins , owners/ tenants</li>\n                    <li>Online payment option</li>\n                  </ul>\n                  <div class=\"btn btn-pricing btn-premium\">CONTACT FOR PRICING</div>\n                </div>\n              </div>\n            </div>\n            </div>\n          </div>\n        </div>\n    </div>\n  </section>\n  <section class=\"content-block aboutus-block\" id=\"aboutus\">\n    <div class=\"container-fluid\">\n      <div class=\"row h-100 justify-content-center\">\n        <div class=\"col-lg-9 col-md-12 col-sm-12\">\n          <div class=\"title text-center wow fadeInDown animated\" data-wow-delay=\"0.2s\"><h2>About Us</h2></div>\n          <div class=\"desp\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 text-center\">\n              <h4 class=\"wow fadeInDown animated\" data-wow-delay=\"0.2s\">Clickmycondo is an integrated platform</h4>\n              <div class=\"row lists\">\n                <div class=\"col-sm-12 col-md-6 col-lg-3 column wow fadeInDown animated\" data-wow-delay=\"0.4s\">\n                  <img src=\"assets/images/secure-data-icon.png\" class=\"img-fluid\" />\n                  <p>Manages all your data (expenses, Invoices, KYC details etc. ) securely</p>\n                </div>\n                <div class=\"col-sm-12 col-md-6 col-lg-3 column wow fadeInDown animated\" data-wow-delay=\"0.6s\">\n                  <img src=\"assets/images/reports-icon.png\" class=\"img-fluid\" />\n                  <p>Ensures all necessary reports are available anytime</p>\n                </div>\n                <div class=\"col-sm-12 col-md-6 col-lg-3 column wow fadeInDown animated\" data-wow-delay=\"0.8s\">\n                  <img src=\"assets/images/verified-list-icon.png\" class=\"img-fluid\" />\n                  <p>Brings in accountability by managing all tickets raised by residents and track the same for closure</p>\n                </div>\n                <div class=\"col-sm-12 col-md-6 col-lg-3 column wow fadeInDown animated\" data-wow-delay=\"1s\">\n                  <img src=\"assets/images/credit-card-icon.png\" class=\"img-fluid\" />\n                  <p>Integrates the latest payment systems like UPI and makes payment easy</p>\n                </div>\n              </div>\n              </div>\n            </div>\n            </div>\n          </div>\n        </div>\n    </div>\n  </section>\n  <section class=\"content-block bottom-block\" id=\"contact\">\n    <div class=\"container-fluid\">\n      <div class=\"row justify-content-center wow fadeInDown animated\" data-wow-delay=\"0.2s\">\n        <div class=\"col-lg-9 col-md-12 col-sm-12\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-6 col-lg-6\">\n              <div class=\"top-box\">\n                <div class=\"title\"><h2>Contact</h2></div>\n                <div class=\"desp\">\n                  <div class=\"contact-form wow fadeInDown animated\">\n            \t\t\t\t<form [formGroup]=\"contactForm\" (ngSubmit) = \"submitContactForm()\">\n                      <div class=\"form-errors\"></div>\n                      <div class=\"form-group\">\n              \t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"fullName\" id=\"fullName\" placeholder=\"Name\" [ngClass]=\" \n                        contactForm.get('fullName').errors && \n                        contactForm.get('fullName').dirty ? 'error': ''\" >\n              \t\t\t\t</div>\n              \t\t\t\t<div class=\"form-group\">\n              \t\t\t\t\t<input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"Email\"\n                        pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,3}$\" \n                        [ngClass]=\" \n                        contactForm.get('email').errors && \n                        contactForm.get('email').dirty ? 'error': ''\" >\n              \t\t\t\t</div>\n              \t\t\t\t<div class=\"form-group\">\n              \t\t\t\t\t<textarea class=\"form-control\" rows=\"5\" formControlName=\"message\"  id=\"message\" placeholder=\"Message\" [ngClass]=\" \n                        contactForm.get('message').errors && \n                        contactForm.get('message').dirty ? 'error': ''\" ></textarea>\n              \t\t\t\t</div>\n              \t\t\t\t<div class=\"form-group\">\n              \t\t\t\t\t<button class=\"btn btn-submit\">Submit</button>\n              \t\t\t\t</div>\n                    </form>\n            \t\t\t</div>\n                </div>\n              </div>\n              <div class=\"bottom-box d-none d-sm-none d-md-block\">\n                <div class=\"row wow fadeInDown animated\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"desp social-list\">\n                      <ul class=\"list-inline footer-links social-links\">\n                        <li class=\"list-inline-item\"><a href=\"javascript:void(0)\" target=\"_blank\"><i class=\"fa fa fa-linkedin\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"javascript:void(0)\" target=\"_blank\"><i class=\"fa fa fa-twitter\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"javascript:void(0)\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li>\n                      </ul>\n                    </div>\n                    <div class=\"copyright\">\n                      <p>Copyrights © 2019 - <a href=\"javascript:void(0)\">www.clickmycondo.com.</a> All Rights Reserved.</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12 col-md-5 col-lg-5 offset-md-1\">\n              <div class=\"right-box\">\n                <div class=\"address-wrapper\">\n                  <h4>Cloudpragma Technologies Pvt. Ltd.</h4>\n                  <address>\n                    Address: #1005, Lakshmanaswami Salai,<br>\n                    K.K.Nagar, Chennnai - 600 078<br>\n                    Mobile: 7358668764\n                  </address>\n                </div>\n                <!-- <div class=\"map-wrapper\">\n                  <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.940071584754!2d80.19343831520935!3d13.039486590811414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d12b39afc9%3A0xfba50ca99cfd632b!2sMintfactor+Technologies+Pvt.+Ltd(Cashup.co.in)!5e0!3m2!1sen!2sin!4v1552585968549\" height=\"300\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n                </div> -->\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"bottom-box sm d-xs-block d-sm-block d-md-none d-lg-none\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"desp social-list\">\n                      <ul class=\"list-inline footer-links social-links\">\n                        <li class=\"list-inline-item\"><a href=\"javascript:void(0)\" target=\"_blank\"><i class=\"fa fa fa-linkedin\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"javascript:void(0)\" target=\"_blank\"><i class=\"fa fa fa-twitter\"></i></a></li>\n                        <li class=\"list-inline-item\"><a href=\"javascript:void(0)\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li>\n                      </ul>\n                    </div>\n                    <div class=\"copyright\">\n                      <p>Copyrights © 2019 - <a href=\"javascript:void(0)\">www.clickmycondo.com.</a> All Rights Reserved.</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/components/login/login.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/components/login/login.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-header\">\n\t<nav class=\"navbar\">\n  \t\t<a class=\"navbar-brand\" href=\"#\">Clickmycondo</a>\n\t</nav>\n</div>\n<section class=\"login-container\">\n\t<div class=\"container-fluid \">\n\t\t\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-6 col-md-8 col-sm-12 offset-lg-3 offset-md-2\">\n\t\t\t\t<div class=\"login-form-wrapper\">\n\t\t\t\t\t<h4 class=\"text-center\">Login with Email</h4>\n\t\t\t\t\t<div class=\"content card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<h5>Don’t have an account ? <a href=\"javascript:void(0)\" class=\"tc-green ml-3\" routerLink=\"/home/signup\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\" >Signup</a></h5>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<form #loginform = \"ngForm\" name=\"loginform\" novalidate >\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"loginFormEmail\">Email</label>\n\t\t\t\t\t\t\t\t\t\t    <input type=\"email\" #loginFormEmail=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" class=\"form-control\" name=\"loginFormEmail\" [(ngModel)]=\"userEmailId\" placeholder=\"Enter email\" required [ngClass]=\"isInvalidLogin ? 'error' :''\" (ngModelChange)=\"onInputChange()\">\n\t\t\t\t\t\t\t\t\t\t    <div *ngIf=\"isInvalidLogin\">\n\t\t  \t\t\t\t\t\t\t\t\t\t<div class=\"input-field-message error\">Account not found</div>\n\t\t  \t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t    <label for=\"loginFormPassword\">Password</label>\n\t\t\t\t\t\t\t\t\t\t    <input type=\"password\" #loginFormPassword=\"ngModel\" (ngModelChange)=\"clearErrors()\" class=\"form-control\" minlength=\"6\" name=\"loginFormPassword\" [(ngModel)]=\"userPassword\" placeholder=\"Password\" required [ngClass]=\"isInvalidPassword ? 'error' :''\" (ngModelChange)=\"onInputChange()\">\n\t\t\t\t\t\t\t\t\t\t    <div *ngIf=\"isInvalidPassword\">\n\t\t  \t\t\t\t\t\t\t\t\t\t<div class=\"input-field-message error\">Invalid password</div>\n\t\t  \t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check remember-check float-left\">\n\t\t\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" #loginFormChecker class=\"form-check-input\" id=\"loginFormChecker\" name=\"loginFormChecker\" >\n\t\t\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"loginFormChecker\">Remember me</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t <a routerLink=\"/home/forgotpassword\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\" class=\"forgot-password\" href=\"javascript:void(0);\">Forgot password ?</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"submit-box\">\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"login()\" class=\"btn md-btn blue text-uppercase\" [disabled]=\"loginform.invalid\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"isSubmitted\">Login</span>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!isSubmitted\"><div class=\"login-loader\"></div></span>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</section>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/components/privacy/privacy.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/components/privacy/privacy.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicComponentsPrivacyPrivacyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>privacy works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/components/signup/signup.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/components/signup/signup.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicComponentsSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"signup-header\">\n\t<nav class=\"navbar\">\n  \t\t<a class=\"navbar-brand\" href=\"#\">Clickmycondo</a>\n\t</nav>\n</div>\n<section class=\"signup-container\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-6 col-md-8 col-sm-12 offset-lg-3 offset-md-2\">\n\t\t\t\t<div class=\"signup-form-wrapper\">\n\t\t\t\t\t<h4 class=\"text-center\">Signup with Email</h4>\n\t\t\t\t\t<div class=\"content card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<h5>Already have an account ? <a href=\"javascript:void(0)\" class=\"tc-green ml-3\" routerLink=\"/home/login\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\" >Login</a></h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<form #singupform = \"ngForm\" name=\"singupform\" novalidate>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"signupFormEmail\">Email</label>\n\t\t\t\t\t\t\t\t\t\t\t    <input type=\"email\" #signupFormEmail=\"ngModel\" (ngModelChange)=\"clearErrors()\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" class=\"form-control\" name=\"signupFormEmail\" [(ngModel)]=\"userEmailId\" placeholder=\"Enter email\" required>\n\t\t\t\t\t\t\t\t\t\t\t    <div *ngIf=\"isEmailAlreadyExists\">\n\t\t\t  \t\t\t\t\t\t\t\t\t\t<div class=\"input-field-message error\">Email address already exists</div>\n\t\t\t  \t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t    <label for=\"signupFormPassword\">Password</label>\n\t\t\t\t\t\t\t\t\t\t\t    <input type=\"password\" #signupFormPassword=\"ngModel\" class=\"form-control\" minlength=\"6\" name=\"signupFormPassword\" [(ngModel)]=\"userPassword\" placeholder=\"Password\" required>\n\n\n\t\t\t\t\t\t\t\t\t\t\t    <div *ngIf=\"signupFormPassword.errors && (signupFormPassword.dirty || signupFormPassword.touched)\">\n\t\t\t  \t\t\t\t\t\t\t\t\t\t<div class=\"input-field-message\" [hidden]=\"!signupFormPassword.errors.minlength\" >Enter minimum 6 charaters</div>\n\t\t\t  \t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check remember-check float-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" #loginFormChecker class=\"form-check-input\" id=\"loginFormChecker\" name=\"loginFormChecker\" [(ngModel)]=\"userTerms\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"loginFormChecker\">I agree to the <a routerLink=\"/home/privacy\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\" class=\"lime-green\">Terms & Conditions</a></label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"submit-box\">\n\t\t\t\t\t\t\t\t\t\t\t<button [disabled]=\"singupform.invalid\" class=\"btn md-btn blue text-uppercase\">Signup</button>\n\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n";
    /***/
  },

  /***/
  "./src/app/api/services/login-check.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/api/services/login-check.service.ts ***!
    \*****************************************************/

  /*! exports provided: LoginCheckService */

  /***/
  function srcAppApiServicesLoginCheckServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginCheckService", function () {
      return LoginCheckService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-service */
    "./src/app/api/base-service.ts");
    /* harmony import */


    var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api-configuration */
    "./src/app/api/api-configuration.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* tslint:disable */


    var LoginCheckService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(LoginCheckService, _base_service__WEBPAC);

      function LoginCheckService(config, http) {
        _classCallCheck(this, LoginCheckService);

        return _possibleConstructorReturn(this, _getPrototypeOf(LoginCheckService).call(this, config, http));
      }
      /**
       * @param params The `LoginCheckService.AuthenticateUserByIdPasswordRoleParams` containing the following parameters:
       *
       * - `roleId`:
       *
       * - `password`:
       *
       * - `emailId`:
       */


      _createClass(LoginCheckService, [{
        key: "AuthenticateUserByIdPasswordRoleResponse",
        value: function AuthenticateUserByIdPasswordRoleResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.roleId != null) __params = __params.set('roleId', params.roleId.toString());
          if (params.password != null) __params = __params.set('password', params.password.toString());
          if (params.emailId != null) __params = __params.set('emailId', params.emailId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/LoginCheck/AuthenticateUserByIdPasswordRole", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `LoginCheckService.AuthenticateUserByIdPasswordRoleParams` containing the following parameters:
         *
         * - `roleId`:
         *
         * - `password`:
         *
         * - `emailId`:
         */

      }, {
        key: "AuthenticateUserByIdPasswordRole",
        value: function AuthenticateUserByIdPasswordRole(params) {
          return this.AuthenticateUserByIdPasswordRoleResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `LoginCheckService.AuthenticateUserByIdPasswordParams` containing the following parameters:
         *
         * - `password`:
         *
         * - `emailId`:
         */

      }, {
        key: "AuthenticateUserByIdPasswordResponse",
        value: function AuthenticateUserByIdPasswordResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.password != null) __params = __params.set('password', params.password.toString());
          if (params.emailId != null) __params = __params.set('emailId', params.emailId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/LoginCheck/AuthenticateUserByIdPassword", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `LoginCheckService.AuthenticateUserByIdPasswordParams` containing the following parameters:
         *
         * - `password`:
         *
         * - `emailId`:
         */

      }, {
        key: "AuthenticateUserByIdPassword",
        value: function AuthenticateUserByIdPassword(params) {
          return this.AuthenticateUserByIdPasswordResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param AdminUsers_vm undefined
         */

      }, {
        key: "changePasswordResponse",
        value: function changePasswordResponse(AdminUsersVm) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = AdminUsersVm;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/LoginCheck/changePassword", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param AdminUsers_vm undefined
         */

      }, {
        key: "changePassword",
        value: function changePassword(AdminUsersVm) {
          return this.changePasswordResponse(AdminUsersVm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }]);

      return LoginCheckService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

    LoginCheckService.AuthenticateUserByIdPasswordRolePath = '/api/LoginCheck/AuthenticateUserByIdPasswordRole';
    LoginCheckService.AuthenticateUserByIdPasswordPath = '/api/LoginCheck/AuthenticateUserByIdPassword';
    LoginCheckService.changePasswordPath = '/api/LoginCheck/changePassword';

    LoginCheckService.ctorParameters = function () {
      return [{
        type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginCheckService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LoginCheckService);
    /***/
  },

  /***/
  "./src/app/public/components/forgot-password/forgot-password.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/public/components/forgot-password/forgot-password.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicComponentsForgotPasswordForgotPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".forgotpass-header {\n  position: fixed;\n}\n\n.forgotpass-form-wrapper {\n  margin: 150px 0 0 0;\n}\n\n.forgotpass-form-wrapper h4 {\n  padding: 0;\n  margin: 0 0 20px 0;\n  font-size: 2.2rem;\n  padding: 0;\n  color: #373946;\n}\n\n.forgotpass-form-wrapper input {\n  border-bottom: 1px solid #eaeaea;\n}\n\n.forgotpass-form-wrapper .submit-box {\n  clear: both;\n  text-align: center;\n  padding: 10px 0 0 0;\n}\n\n.forgotpass-form-wrapper .b-login {\n  margin: 20px 0 0 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9wdWJsaWMvY29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcHVibGljL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNDLGVDRkc7QUNESjs7QUZLQTtFQUNDLG1CQUFBO0FFRkQ7O0FGR0M7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7RUd1Q0EsaUJBQUE7RUhyQ0EsVUFBQTtFQUNBLGNDK0RTO0FDaEVYOztBRkdDO0VBQ0MsZ0NBQUE7QUVERjs7QUZHQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FFREY7O0FGR0M7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0FFREYiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvY29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5mb3Jnb3RwYXNzLWhlYWRlciB7XG5cdHBvc2l0aW9uOiAkZmQ7XG59XG4uZm9yZ290cGFzcy1mb3JtLXdyYXBwZXIge1xuXHRtYXJnaW46IDE1MHB4IDAgMCAwO1xuXHRoNCB7XG5cdFx0cGFkZGluZzogMDtcblx0XHRtYXJnaW46IDAgMCAyMHB4IDA7XG5cdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1oNCk7XG5cdFx0cGFkZGluZzogMDtcblx0XHRjb2xvcjogJGdyZXktODAwO1xuXHR9XG5cdGlucHV0IHtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyZXktNDAwO1xuXHR9XG5cdC5zdWJtaXQtYm94IHtcblx0XHRjbGVhcjogYm90aDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0cGFkZGluZzogMTBweCAwIDAgMDtcblx0fVxuXHQuYi1sb2dpbiB7XG5cdFx0bWFyZ2luOiAyMHB4IDAgMCAwO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxufSIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzViY2M3MztcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7IiwiLmZvcmdvdHBhc3MtaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uZm9yZ290cGFzcy1mb3JtLXdyYXBwZXIge1xuICBtYXJnaW46IDE1MHB4IDAgMCAwO1xufVxuLmZvcmdvdHBhc3MtZm9ybS13cmFwcGVyIGg0IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICMzNzM5NDY7XG59XG4uZm9yZ290cGFzcy1mb3JtLXdyYXBwZXIgaW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbn1cbi5mb3Jnb3RwYXNzLWZvcm0td3JhcHBlciAuc3VibWl0LWJveCB7XG4gIGNsZWFyOiBib3RoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMCAwIDA7XG59XG4uZm9yZ290cGFzcy1mb3JtLXdyYXBwZXIgLmItbG9naW4ge1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/public/components/forgot-password/forgot-password.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/public/components/forgot-password/forgot-password.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppPublicComponentsForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ForgotPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotPasswordComponent() {
        _classCallCheck(this, ForgotPasswordComponent);

        this.userEmailId = "";
      }

      _createClass(ForgotPasswordComponent, [{
        key: "clearErrors",
        value: function clearErrors() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/components/forgot-password/forgot-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.component.scss */
      "./src/app/public/components/forgot-password/forgot-password.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/public/components/home/home.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/public/components/home/home.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicComponentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\nheader {\n  min-height: 100px;\n  width: 100% !important;\n}\nheader.hero-wrapper {\n  position: relative;\n  color: #ffffff;\n  overflow: hidden;\n  background-image: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/home-page-cover.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n  height: 100vh;\n}\nheader.hero-wrapper .overlay {\n  position: absolute;\n  width: 100% !important;\n  height: 100% !important;\n  top: 0px;\n  left: 0px;\n  background-color: rgba(0, 0, 0, 0.55);\n}\nheader.hero-wrapper .move-next {\n  position: absolute;\n  bottom: 5%;\n  width: 100% !important;\n  text-align: center;\n}\nheader.hero-wrapper .move-next a {\n  color: #ffffff;\n}\nheader.hero-wrapper .move-next i {\n  font-size: 3.8rem;\n}\nheader.hero-wrapper .cover-icon {\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  -webkit-transform: translateX(-50%) !important;\n  transform: translateX(-50%) !important;\n}\nheader.hero-wrapper .contents {\n  padding: 25% 0 0 0;\n  width: 80%;\n  margin: 0 auto;\n}\nheader.hero-wrapper .contents h2 {\n  font-size: 3.4rem;\n  line-height: 44px;\n  margin-bottom: 60px;\n}\nheader.hero-wrapper .contents h3 {\n  font-size: 2.4rem;\n  line-height: 36px;\n}\nheader.hero-wrapper .contents h2, header.hero-wrapper .contents h3 {\n  color: #ffffff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  -moz-text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  -webkit-text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  letter-spacing: 0.6px;\n}\n@media (max-width: 480px) {\n  header.hero-wrapper .contents {\n    padding: 45% 0 0 0;\n    width: 100%;\n  }\n  header.hero-wrapper .contents h2 {\n    font-size: 2.6rem;\n    line-height: 36px;\n  }\n  header.hero-wrapper .contents h3 {\n    font-size: 2.2rem;\n    line-height: 32px;\n  }\n}\nheader .navbar {\n  padding: 15px 15px 12px 15px !important;\n  background: #ffffff;\n  position: fixed;\n  top: 0;\n  width: 100% !important;\n  z-index: 1001;\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\nheader .navbar.fixed {\n  padding: 15px 15px 12px 15px !important;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);\n  border-bottom: none;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\nheader .navbar .navbar-nav li.nav-item:not(:first-child) {\n  margin-left: 30px;\n}\nheader .navbar .navbar-nav li .header-btn {\n  background: #5bcc73;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: #ffffff;\n  padding: 4px 25px;\n  border-radius: 50px !important;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  font-size: 1.4rem;\n  margin: 2px 0 0 0;\n}\nheader .navbar .navbar-nav li .header-btn:before {\n  content: none !important;\n}\nheader .navbar .navbar-nav li .header-btn:hover {\n  background: #3aba55;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\nheader .navbar .navbar-nav li:last-child {\n  margin-left: 20px;\n}\nheader .navbar .navbar-nav .nav-link {\n  color: #191c1e;\n  font-size: 1.4rem;\n  padding: 7px 0;\n  position: relative;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n}\nheader .navbar .navbar-nav .nav-link:before {\n  content: \"\";\n  font-family: FontAwesome;\n  position: absolute;\n  bottom: -12px;\n  left: 45%;\n  color: #191c1e;\n  font-size: 1.8rem;\n  opacity: 0;\n  -moz-opacity: 0;\n  -webkit-opacity: 0;\n  -webkit-transition: 0.15s;\n  transition: 0.15s;\n}\nheader .navbar .navbar-nav .nav-link:hover:before {\n  bottom: -18px;\n  color: #00bcd4;\n  opacity: 1;\n  -moz-opacity: 1;\n  -webkit-opacity: 1;\n}\nheader .navbar .navbar-nav .nav-link:not(.header-btn):hover {\n  color: #00bcd4;\n}\nheader .navbar .navbar-nav .nav-link:not(.header-btn):hover:before {\n  color: #00bcd4;\n}\nheader .navbar .navbar-nav .active-link:before {\n  bottom: -18px;\n  color: #00bcd4;\n  opacity: 1;\n  -moz-opacity: 1;\n  -webkit-opacity: 1;\n}\nheader .navbar .navbar-nav .active > .nav-link {\n  color: #00bcd4;\n}\nheader .navbar .navbar-nav .nav-link.active-link {\n  color: #00bcd4 !important;\n}\nheader .navbar .navbar-nav .nav-link.active-link:before {\n  color: #00bcd4;\n}\nheader .navbar .navbar-nav .nav-link.open {\n  color: #00bcd4;\n}\nheader .navbar .navbar-nav .open > .nav-link {\n  color: #00bcd4;\n}\nheader .navbar .navbar-brand {\n  padding: 0;\n  margin: 0;\n}\nheader .navbar .navbar-brand .logo {\n  background: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/logo-dark.png') no-repeat left center;\n  width: 265px;\n  height: 50px;\n  text-indent: -3000px;\n}\nheader .navbar .navbar-toggle {\n  display: none;\n  width: 20px;\n  position: fixed;\n  right: 15px;\n  z-index: 1001;\n  top: 38px;\n  border: none;\n  cursor: pointer;\n  border-radius: 0 !important;\n}\n@media (max-width: 991px) {\n  header .navbar .navbar-toggle {\n    display: block;\n  }\n}\nheader .navbar .navbar-toggle .navbar-toggler-icon {\n  width: 100% !important;\n}\nheader .navbar .navbar-toggle .navbar-toggler-icon span {\n  position: absolute;\n  left: 0;\n  background: #191c1e;\n  width: 20px;\n  -webkit-transform: translateX(0) !important;\n  transform: translateX(0) !important;\n  height: 2px;\n}\nheader .navbar .navbar-toggle .navbar-toggler-icon span:nth-child(1) {\n  top: 0;\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n}\nheader .navbar .navbar-toggle .navbar-toggler-icon span:nth-child(2) {\n  top: 6px;\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n  opacity: 1;\n  -moz-opacity: 1;\n  -webkit-opacity: 1;\n}\nheader .navbar .navbar-toggle .navbar-toggler-icon span:nth-child(3) {\n  top: 12px;\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n}\nheader .navbar .navbar-toggle.expanded .navbar-toggler-icon span {\n  background: #00bcd4;\n}\nheader .navbar .navbar-toggle.expanded .navbar-toggler-icon span:nth-child(1) {\n  top: 6px;\n  -webkit-transform: rotate(45deg) !important;\n  transform: rotate(45deg) !important;\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n}\nheader .navbar .navbar-toggle.expanded .navbar-toggler-icon span:nth-child(2) {\n  opacity: 0;\n  -moz-opacity: 0;\n  -webkit-opacity: 0;\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n}\nheader .navbar .navbar-toggle.expanded .navbar-toggler-icon span:nth-child(3) {\n  top: 6px;\n  -webkit-transform: rotate(-45deg) !important;\n  transform: rotate(-45deg) !important;\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n}\nheader .navbar .navbar-collapse {\n  margin: -10px 0 0 0;\n}\n@media (max-width: 991px) {\n  header .navbar .navbar-collapse.expanded {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: calc(100vh + 15px);\n    background-color: #ffffff;\n    z-index: 1000;\n    overflow: hidden;\n  }\n  header .navbar .navbar-collapse.expanded:before {\n    content: \"\";\n    position: absolute;\n    width: 100% !important;\n    height: 100% !important;\n    top: 0;\n    left: 0px;\n  }\n  header .navbar .navbar-collapse.expanded .navbar-nav {\n    margin: 30px 0 0 0 !important;\n    padding: 0 0 0 20px !important;\n  }\n  header .navbar .navbar-collapse.expanded .navbar-nav li {\n    margin: 0;\n    color: #ffffff;\n    -webkit-transition: color 0.15s ease-in-out;\n    transition: color 0.15s ease-in-out;\n  }\n  header .navbar .navbar-collapse.expanded .navbar-nav li .nav-link {\n    font-size: 2rem;\n    color: #191c1e;\n    display: inline-block;\n  }\n  header .navbar .navbar-collapse.expanded .navbar-nav li .nav-link:before {\n    content: none;\n  }\n  header .navbar .navbar-collapse.expanded .navbar-nav li .nav-link:hover, header .navbar .navbar-collapse.expanded .navbar-nav li .nav-link.active {\n    color: #00bcd4;\n    -webkit-transition: color 0.15s ease-in-out;\n    transition: color 0.15s ease-in-out;\n  }\n  header .navbar .navbar-collapse.expanded .navbar-nav li .nav-link.header-btn {\n    font-family: \"Lato\", sans-serif;\n    font-weight: 400;\n    letter-spacing: 0.3px;\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n    background: none;\n    border: 0;\n    padding: 7px 0px;\n    -webkit-transition: none;\n    transition: none;\n    text-transform: uppercase;\n    margin: 0;\n    text-align: left;\n  }\n  header .navbar .navbar-collapse.expanded .navbar-nav li .nav-link.header-btn:hover, header .navbar .navbar-collapse.expanded .navbar-nav li .nav-link.header-btn:focus {\n    background: none;\n    border: 0;\n  }\n}\n.content-block {\n  padding: 50px 0;\n}\n.content-block .title h2 {\n  text-transform: uppercase;\n  font-size: 2.8rem;\n}\n.content-block .desp {\n  padding: 40px 0 0 0;\n}\n.features-block {\n  background: #fff3f5;\n  border-bottom: 1px solid #f1dddd;\n}\n.features-block .feature-list h4 {\n  font-size: 2rem;\n  margin: 0 0 10px 0;\n}\n.features-block .feature-list ul li {\n  line-height: 44px;\n  padding: 0 0 0 24px;\n  position: relative;\n  font-size: 1.5rem;\n}\n.features-block .feature-list ul li:before {\n  content: \"\";\n  font-family: FontAwesome;\n  position: absolute;\n  font-size: 1.2rem;\n  left: 0;\n}\n.pricing-block {\n  background: #fffbfb;\n  border-top: 1px solid #ffffff;\n  border-bottom: 1px solid #f1dddd;\n}\n.pricing-block .price-plan {\n  background-color: #ffffff;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);\n  border: 0;\n  border-radius: 4px !important;\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n  overflow: hidden;\n}\n.pricing-block .price-plan:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);\n  -webkit-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.pricing-block .price-plan h4 {\n  font-size: 2.4rem;\n  padding: 15px 0;\n  color: #ffffff;\n}\n.pricing-block .price-plan.free h4, .pricing-block .price-plan .btn-free {\n  background: #03cca6;\n  border: 2px solid #03cca6;\n}\n.pricing-block .price-plan.premium h4, .pricing-block .price-plan .btn-premium {\n  background: #083d71;\n  border: 2px solid #083d71;\n}\n@media (max-width: 768px) {\n  .pricing-block .price-plan {\n    margin: 0 0 30px 0;\n  }\n}\n.pricing-block .btn-pricing {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  color: #ffffff;\n  padding: 10px 20px;\n  border-radius: 50px !important;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  font-size: 1.8rem;\n  width: 280px;\n  margin: 30px auto;\n}\n.pricing-block .btn-pricing:hover {\n  background: transparent !important;\n  color: #191c1e;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.pricing-block .price-points {\n  list-style-type: none;\n  padding: 0 30px 30px;\n}\n.pricing-block .price-points li {\n  padding: 15px 10px;\n  font-size: 1.5rem;\n}\n.pricing-block .price-points li:not(:last-of-type) {\n  border-bottom: 1px solid #f0f3f3;\n}\n.aboutus-block {\n  background: #ffffff;\n}\n.aboutus-block .desp h4 {\n  font-size: 2.2rem;\n}\n.aboutus-block .desp .lists {\n  padding: 70px 0 0 0;\n}\n.aboutus-block .desp .lists img {\n  height: 70px;\n}\n.aboutus-block .desp .lists p {\n  font-size: 1.5rem;\n  padding: 20px 10px 0 10px;\n}\n@media (max-width: 768px) {\n  .aboutus-block .desp .lists .column {\n    padding: 0 15px 30px 15px;\n  }\n  .aboutus-block .desp .lists .column:last-child {\n    padding-bottom: 0;\n  }\n}\n.bottom-block {\n  background: #3b6db1;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(70%, #40bda6), color-stop(70%, #09a596));\n  background: linear-gradient(to bottom, #40bda6 70%, #09a596 70%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#40bda6\", endColorstr=\"#09a596\",GradientType=0 );\n  /* IE6-9 */\n  position: relative;\n}\n.bottom-block .title h2 {\n  color: #ffffff;\n}\n.bottom-block .contact-form {\n  position: relative;\n}\n.bottom-block .contact-form .form-errors {\n  position: absolute;\n  top: -28px;\n  left: 0;\n  color: #022925;\n}\n.bottom-block .contact-form .form-group input, .bottom-block .contact-form .form-group textarea {\n  border: none;\n  font-size: 1.6rem;\n  border-radius: 4px !important;\n  border: 1px solid #ffffff;\n}\n.bottom-block .contact-form .form-group input.error, .bottom-block .contact-form .form-group textarea.error {\n  border: 1px solid #e2385e;\n}\n.bottom-block .contact-form .form-group input::-webkit-input-placeholder, .bottom-block .contact-form .form-group textarea::-webkit-input-placeholder {\n  text-transform: uppercase;\n  color: rgba(25, 28, 30, 0.7);\n}\n.bottom-block .contact-form .form-group input:-moz-placeholder, .bottom-block .contact-form .form-group textarea:-moz-placeholder {\n  text-transform: uppercase;\n  color: rgba(25, 28, 30, 0.7);\n}\n.bottom-block .contact-form .form-group input::-moz-placeholder, .bottom-block .contact-form .form-group textarea::-moz-placeholder {\n  text-transform: uppercase;\n  color: rgba(25, 28, 30, 0.7);\n}\n.bottom-block .contact-form .form-group input:-ms-input-placeholder, .bottom-block .contact-form .form-group textarea:-ms-input-placeholder {\n  text-transform: uppercase;\n  color: rgba(25, 28, 30, 0.7);\n}\n.bottom-block .contact-form .form-group input {\n  padding: 10px;\n  margin: 0 0 15px 0;\n  height: 45px;\n}\n.bottom-block .contact-form .form-group textarea {\n  margin: 0 0 15px 0;\n  resize: none;\n}\n.bottom-block .contact-form .form-group .btn-submit {\n  background: #236aaf;\n  color: #ffffff;\n  width: 100% !important;\n  padding: 6px 0;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 2rem;\n  border-radius: 4px !important;\n  text-transform: uppercase;\n}\n.bottom-block .contact-form .form-group .btn-submit:hover {\n  background-color: #134b82;\n}\n.bottom-block .bottom-box {\n  padding: 180px 0 0 0;\n}\n.bottom-block .bottom-box .desp {\n  margin: -130px 0 0 0;\n}\n.bottom-block .bottom-box .social-list {\n  padding-bottom: 15px;\n}\n.bottom-block .bottom-box .social-list .social-links li {\n  padding-right: 3px;\n}\n.bottom-block .bottom-box .social-list .social-links li:first-child {\n  padding-left: 0;\n}\n.bottom-block .bottom-box .social-list .social-links li a {\n  width: 38px;\n  height: 38px;\n  border-radius: 30px !important;\n  background: #ffffff;\n  display: -webkit-box;\n  display: flex;\n  color: #09a596;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 2rem;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.bottom-block .bottom-box .social-list .social-links li a:hover {\n  background: #006d6d;\n  color: #ffffff;\n  text-decoration: none;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.bottom-block .bottom-box .copyright p {\n  color: #ffffff;\n  font-size: 1.4rem;\n}\n.bottom-block .bottom-box .copyright p a {\n  color: #d8fffb;\n  text-decoration: underline;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.bottom-block .bottom-box .copyright p a:hover {\n  color: #ffffff;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.bottom-block .right-box .address-wrapper {\n  color: #ffffff;\n  margin: 70px 0 0 0;\n}\n.bottom-block .right-box .address-wrapper h4 {\n  font-size: 2.8rem;\n  color: inherit;\n  margin: 0 0 15px 0;\n}\n.bottom-block .right-box .address-wrapper address {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 300;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.5rem;\n}\n.bottom-block .right-box .map-wrapper {\n  margin: 30px 0 0 0;\n  border: 4px solid #ffffff;\n  border-radius: 4px !important;\n  box-shadow: 0px 2px 5px #1d3d6b;\n  -moz-box-shadow: 0px 2px 5px #1d3d6b;\n  -webkit-box-shadow: 0px 2px 5px #1d3d6b;\n}\n.bottom-block .right-box .map-wrapper iframe {\n  width: 100% !important;\n  display: block;\n  pointer-events: none;\n}\n.back-to-top {\n  position: fixed;\n  background: #134b82;\n  color: #ffffff;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  border-radius: 50px !important;\n  right: 15px;\n  bottom: 15px;\n  opacity: 0;\n  -moz-opacity: 0;\n  -webkit-opacity: 0;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.back-to-top:hover i {\n  color: #ffffff;\n}\n.back-to-top:focus {\n  color: #ffffff;\n}\n.back-to-top.show {\n  opacity: 1;\n  -moz-opacity: 1;\n  -webkit-opacity: 1;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.back-to-top i {\n  font-size: 2.4rem;\n  padding-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvYXBwL3B1YmxpYy9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0loQjtFQUNFLGlCQUFBO0VBQ0Esc0JDdUhJO0FGekhOO0FDR0U7RUFDQSxrQkNIRztFRElKLGNDMEZPO0VEekZQLGdCQUFBO0VBQ0EsMEdBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBREREO0FDRUM7RUFDRSxrQkNaRTtFRGFGLHNCQzRHRztFRDNHSCx1QkMyR0c7RUQxR0gsUUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtBREFIO0FDRUM7RUFDQyxrQkNwQkc7RURxQkgsVUFBQTtFQUNBLHNCQ21HSTtFRGxHSixrQkFBQTtBREFGO0FDQ0U7RUFDQyxjQ3NFSztBRnJFUjtBQ0NFO0VFbUJBLGlCQUFBO0FIakJGO0FDRUM7RUFDQyxrQkNoQ0c7RURpQ0gsU0FBQTtFQUNFLFNBQUE7RUdGSCw4Q0FBQTtFQUVBLHNDQUFBO0FKR0Q7QUNBQztFQUNDLGtCQUFBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QURFSjtBQ0RJO0VFS0YsaUJBQUE7RUZIRSxpQkFBQTtFQUNBLG1CQUFBO0FER0o7QUNESTtFRUFGLGlCQUFBO0VGRUUsaUJBQUE7QURHSjtBQ0RJO0VBQ0UsY0M0Q0U7RUV0RU4seUNIMkJ5QjtFRzFCekIsOENIMEJ5QjtFR3pCekIsaURIeUJ5QjtFQUN2QixxQkFBQTtBREtKO0FDSEk7RUFsQkg7SUFvQkcsa0JBQUE7SUFDQSxXQUFBO0VES0Y7RUNKRTtJRWJGLGlCQUFBO0lGZUksaUJBQUE7RURNSjtFQ0pFO0lFakJGLGlCQUFBO0lGbUJJLGlCQUFBO0VETUo7QUFDRjtBQ0RFO0VBQ0MsdUNBQUE7RUFDQSxtQkNzQks7RURyQkwsZUMzRUM7RUQ0RUQsTUFBQTtFQUNBLHNCQzZDRztFRDVDSCxhQUFBO0VHMURELDBDSDJEQztFRzFERCwrQ0gwREM7RUd6REQsa0RIeURDO0VHeENGLHdDSHlDRTtFR3ZDRixnQ0h1Q0U7QURPSDtBQ05HO0VBQ0MsdUNBQUE7RUc5REYsMENIK0RFO0VHOURGLCtDSDhERTtFRzdERixrREg2REU7RUFDQSxtQkFBQTtFRzdDSCx3Q0g4Q0c7RUc1Q0gsZ0NINENHO0FEWUo7QUNQTTtFQUNDLGlCQUFBO0FEU1A7QUNOSztFQUNFLG1CQ3RETTtFRHVEUiwyQ0FBQTtFQUNBLGNDREc7RURFSCxpQkFBQTtFRzlGSiw4QkFBQTtFQW1DQSx3Q0g2REk7RUczREosZ0NIMkRJO0VFckRILGlCQUFBO0VGdURNLGlCQUFBO0FEWVI7QUNYSztFQUNDLHdCQUFBO0FEYU47QUNYSztFQUNDLG1CQUFBO0VHcEVMLHdDSHFFTTtFR25FTixnQ0htRU07QURlUDtBQ1pPO0VBQ0csaUJBQUE7QURjVjtBQ1hNO0VBQ0UsY0M1Q0c7RUN6QlQsaUJBQUE7RUZ1RUssY0FBQTtFQUNBLGtCQ3JIRjtFRHNIRSxxQkFBQTtFQUNBLHlCQUFBO0FEYVA7QUNaTztFQUNDLFlBQUE7RUFDQSx3QkM5SEY7RUQrSEUsa0JDNUhIO0VENkhHLGFBQUE7RUFDQyxTQUFBO0VBQ0EsY0N4REU7RUN6QlQsaUJBQUE7RUNqQ0EsVUhvSHdCO0VHbkh4QixlSG1Id0I7RUdsSHhCLGtCSGtId0I7RUczRnpCLHlCSDRGUTtFRzFGUixpQkgwRlE7QURrQlQ7QUNmUTtFQUNFLGFBQUE7RUFDRCxjQ2xIQTtFRVJQLFVIMkh3QjtFRzFIeEIsZUgwSHdCO0VHekh4QixrQkh5SHdCO0FEbUIxQjtBQ2hCTztFQUNDLGNDdkhDO0FGeUlUO0FDakJRO0VBQ0MsY0N6SEE7QUY0SVQ7QUNkTztFQUNFLGFBQUE7RUFDSixjQ2hJSTtFRVJQLFVIeUlvQjtFR3hJcEIsZUh3SW9CO0VHdklwQixrQkh1SW9CO0FEa0J0QjtBQ2ZNO0VBQ0QsY0NySUk7QUZzSlQ7QUNkSztFQUNFLHlCQUFBO0FEZ0JQO0FDZE87RUFDRSxjQzVJQTtBRjRKVDtBQ1pLO0VBQ0UsY0NqSkU7QUYrSlQ7QUNYRztFQUNFLGNDckpJO0FGa0tUO0FDVkc7RUFDRCxVQUFBO0VBQ0EsU0FBQTtBRFlGO0FDWEU7RUFDRyxvSEFBQTtFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QURhTjtBQ1ZHO0VBQ0MsYUFBQTtFQUNBLFdBQUE7RUFDRixlQzNMRTtFRDRMRixXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFRzVMRCwyQkFBQTtBSjJNRDtBQ2JFO0VBVkM7SUFXQSxjQUFBO0VEZ0JEO0FBQ0Y7QUNmRTtFQUNDLHNCQzVFRztBRjZGTjtBQ2hCSztFQUNFLGtCQ3ZNRjtFRHdNQSxPQUFBO0VBQ0EsbUJDbElNO0VEbUlOLFdBQUE7RUcxS0osMkNBQUE7RUFFQSxtQ0FBQTtFSDBLSSxXQUFBO0FEb0JMO0FDbkJLO0VBQ0MsTUFBQTtFR3hLTCxrQ0h5S0s7RUd2S0wsMEJIdUtLO0FEdUJOO0FDckJLO0VBQ0MsUUFBQTtFRzVLTCxrQ0g2S0s7RUczS0wsMEJIMktLO0VHdE1KLFVIdU1xQjtFR3RNckIsZUhzTXFCO0VHck1yQixrQkhxTXFCO0FEMkJ2QjtBQ3pCSztFQUNDLFNBQUE7RUdqTEwsa0NIa0xLO0VHaExMLDBCSGdMSztBRDZCTjtBQ3ZCSTtFQUNDLG1CQzFNSTtBRm1PVDtBQ3hCSztFQUNHLFFBQUE7RUdqTVAsMkNBQUE7RUFFQSxtQ0FBQTtFQUlBLGtDSDZMUTtFRzNMUiwwQkgyTFE7QUQ4QlQ7QUM1Qks7RUd4TkgsVUh5TnFCO0VHeE5yQixlSHdOcUI7RUd2TnJCLGtCSHVOcUI7RUdoTXRCLGtDSGlNSztFRy9MTCwwQkgrTEs7QURrQ047QUNoQ0s7RUFDQyxRQUFBO0VHMU1MLDRDQUFBO0VBRUEsb0NBQUE7RUFJQSxrQ0hzTUs7RUdwTUwsMEJIb01LO0FEc0NOO0FDaENFO0VBQ0UsbUJBQUE7QURrQ0o7QUNoQ0s7RUFERDtJQUVFLGNBQUE7SUFDQSxlQ3hQRjtJRHlQRyxNQUFBO0lBQ0EsT0FBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLHlCQzdKQztJRDhKRCxhQUFBO0lBQ0EsZ0JBQUE7RURtQ0w7RUNsQ0s7SUFDQyxXQUFBO0lBQ0Esa0JDalFIO0lEa1FHLHNCQ3pJRjtJRDBJRSx1QkMxSUY7SUQySUUsTUFBQTtJQUNBLFNBQUE7RURvQ047RUNsQ0k7SUFDQyw2QkFBQTtJQUNDLDhCQUFBO0VEb0NOO0VDbkNNO0lBQ0MsU0FBQTtJQUNBLGNDN0tEO0lFekRQLDJDSHVPUTtJR3JPUixtQ0hxT1E7RUR1Q1A7RUN0Q087SUVoT1AsZUFBQTtJRmtPUSxjQ3pNQztJRDBNRCxxQkFBQTtFRHdDUjtFQ3ZDUTtJQUNDLGFBQUE7RUR5Q1Q7RUN2Q1E7SUFDQyxjQ2pRRjtJRWlCUiwyQ0hpUFU7SUcvT1YsbUNIK09VO0VEMkNUO0VDekNRO0lFNVBSLCtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxxQkFBQTtJQUNBLCtCQUFBO0lBQ0EsZ0NBQUE7SUYwUFEsZ0JBQUE7SUFDQyxTQUFBO0lBQ0EsZ0JBQUE7SUd2UFYsd0JId1BVO0lHdFBWLGdCSHNQVTtJQUNBLHlCQUFBO0lBQ08sU0FBQTtJQUNBLGdCQUFBO0VEaURoQjtFQ2hEUztJQUNDLGdCQUFBO0lBQ0EsU0FBQTtFRGtEVjtBQUNGO0FDdkNBO0VBQ0UsZUFBQTtBRDBDRjtBQ3hDRztFQUNDLHlCQUFBO0VFdFFGLGlCQUFBO0FIaVRGO0FDdkNFO0VBQ0MsbUJBQUE7QUR5Q0g7QUNwQ0E7RUFDRSxtQkM3U1c7RUQ4U1gsZ0NBQUE7QUR1Q0Y7QUNyQ0c7RUVwUkQsZUFBQTtFRnNSRSxrQkFBQTtBRHVDSjtBQ3BDSTtFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkN6VUE7RUM2Q0gsaUJBQUE7QUhtVUY7QUNyQ0s7RUFDQyxZQUFBO0VBQ0Esd0JDalZBO0VEa1ZBLGtCQy9VRDtFQzhDSCxpQkFBQTtFRm1TSSxPQUFBO0FEdUNOO0FDL0JBO0VBQ0UsbUJDdlVXO0VEd1VYLDZCQUFBO0VBQ0EsZ0NBQUE7QURrQ0Y7QUNqQ0U7RUFDRCx5QkMvUE87RUU1RU4sd0NINFVEO0VHM1VDLDZDSDJVRDtFRzFVQyxnREgwVUQ7RUFDQSxTQUFBO0VHN1ZBLDZCQUFBO0VIK1ZBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUR1Q0Q7QUN0Q0M7RUdsVkMsMEVIbVZBO0VHbFZBLCtFSGtWQTtFR2pWQSxrRkhpVkE7RUdoVUQsNkRIaVVDO0VHL1RELHFESCtUQztBRDRDRjtBQzFDQztFRTNUQyxpQkFBQTtFRjZUQSxlQUFBO0VBQ0EsY0M3UU07QUZ5VFI7QUMxQ0M7RUFDQyxtQkMzVU87RUQ0VVAseUJBQUE7QUQ0Q0Y7QUMxQ0M7RUFDQyxtQkMvV1U7RURnWFYseUJBQUE7QUQ0Q0Y7QUMxQ0M7RUF6QkM7SUEwQkMsa0JBQUE7RUQ2Q0Q7QUFDRjtBQzNDRTtFRW5YQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VGaVhDLGNDN1JLO0VEOFJMLGtCQUFBO0VHMVhGLDhCQUFBO0VBbUNBLHdDSHlWRTtFR3ZWRixnQ0h1VkU7RUVqVkQsaUJBQUE7RUZtVkMsWUFBQTtFQUNDLGlCQUFBO0FEcURKO0FDcERJO0VBQ0Msa0NBQUE7RUFDQSxjQzlUTTtFRWpDVix3Q0hnV0k7RUc5VkosZ0NIOFZJO0FEd0RMO0FDckRFO0VBQ0MscUJBQUE7RUFDQyxvQkFBQTtBRHVESjtBQ3RESTtFQUNDLGtCQUFBO0VFL1ZILGlCQUFBO0FId1pGO0FDdkRLO0VBQ0MsZ0NBQUE7QUR5RE47QUNqREE7RUFDRSxtQkMxVE07QUY4V1I7QUNsREc7RUU3V0QsaUJBQUE7QUhrYUY7QUNsREc7RUFDQyxtQkFBQTtBRG9ESjtBQ25ESTtFQUNDLFlBQUE7QURxREw7QUNuREk7RUVyWEYsaUJBQUE7RUZ1WEcseUJBQUE7QURxREw7QUNsREs7RUFERDtJQUVFLHlCQUFBO0VEcURKO0VDcERJO0lBQ0UsaUJBQUE7RURzRE47QUFDRjtBQy9DQTtFQUNFLG1CQUFBO0VBQXFCLGlCQUFBO0VBQzRDLGFBQUE7RUFDRSw0QkFBQTtFQUNuRSwrR0FBQTtFQUFBLGdFQUFBO0VBQWlFLHFEQUFBO0VBQ2pFLG1IQUFBO0VBQXFILFVBQUE7RUFDckgsa0JDeGJHO0FGK2VMO0FDckRHO0VBQ0MsY0M3Vkk7QUZvWlI7QUNwREU7RUFDQyxrQkMvYkU7QUZxZkw7QUNyREc7RUFDRCxrQkNsY0c7RURtY0gsVUFBQTtFQUNBLE9BQUE7RUFDQSxjQy9hTztBRnNlVDtBQ3BESTtFQUNDLFlBQUE7RUUzWkgsaUJBQUE7RUMzQ0QsNkJBQUE7RUh5Y08seUJBQUE7QUR3RFI7QUN2RFE7RUFDRSx5QkFBQTtBRHlEVjtBSTFhRTtFSG9YUSx5QkFBQTtFQUNBLDRCQUFBO0FEeURWO0FJN2FFO0VIbVhRLHlCQUFBO0VBQ0EsNEJBQUE7QUQ2RFY7QUloYkU7RUhrWFEseUJBQUE7RUFDQSw0QkFBQTtBRGlFVjtBSW5iRTtFSGlYUSx5QkFBQTtFQUNBLDRCQUFBO0FEcUVWO0FDbEVJO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0csWUFBQTtBRG9FUjtBQ2xFSTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtBRG9FTDtBQ2xFTTtFQUNBLG1CQzFkUztFRDJkVCxjQ2pZRTtFRGtZRixzQkN4V0E7RUR5V0EsY0FBQTtFRTNkSixxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBbUNBLGVBQUE7RUMzQ0QsNkJBQUE7RUhtZU8seUJBQUE7QUQwRVI7QUN6RU07RUFDQyx5QkNsZVE7QUY2aUJmO0FDdEVFO0VBQ0Msb0JBQUE7QUR3RUg7QUN2RUc7RUFDQyxvQkFBQTtBRHlFSjtBQ3ZFRztFQUNDLG9CQUFBO0FEeUVKO0FDeEVJO0VBQ0Msa0JBQUE7QUQwRUw7QUN6RUs7RUFDQyxlQUFBO0FEMkVOO0FDekVLO0VBQ0QsV0FBQTtFQUNBLFlBQUE7RUd4ZkgsOEJBQUE7RUgwZkcsbUJDOVpJO0VEK1pKLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGNDeGVRO0VEeWVSLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VFbmRGLGVBQUE7RUNSRCx3Q0g2ZEc7RUczZEgsZ0NIMmRHO0FEK0VKO0FDOUVJO0VBQ0MsbUJDN2VLO0VEOGVMLGNDdmFHO0VEd2FILHFCQUFBO0VHamVKLHdDSGtlSTtFR2hlSixnQ0hnZUk7QURrRkw7QUM3RUM7RUFDRyxjQy9hSTtFQ2pETixpQkFBQTtBSGdqQkY7QUM5RUk7RUFDQyxjQ3hmTztFRHlmUCwwQkFBQTtFRzVlSix3Q0g2ZUk7RUczZUosZ0NIMmVJO0FEa0ZMO0FDakZLO0VBQ0MsY0N0YkU7RUV6RFAsd0NIZ2ZLO0VHOWVMLGdDSDhlSztBRHFGTjtBQy9FRztFQUNDLGNDOWJJO0VEK2JKLGtCQUFBO0FEaUZKO0FDaEZJO0VFamZGLGlCQUFBO0VGbWZHLGNBQUE7RUFDQSxrQkFBQTtBRGtGTDtBQ2hGSTtFRXBpQkYscUNBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUEyQ0EsaUJBQUE7QUg2a0JGO0FDbEZHO0VBQ0Msa0JBQUE7RUFDQSx5QkFBQTtFR3hpQkgsNkJBQUE7RUFnQkMsK0JIMGhCRTtFR3poQkYsb0NIeWhCRTtFR3hoQkYsdUNId2hCRTtBRHdGSjtBQ3ZGSTtFQUNDLHNCQ3RiQztFRHViRCxjQUFBO0VBQ0Esb0JBQUE7QUR5Rkw7QUNuRkE7RUFDRSxlQ3pqQkU7RUQwakJGLG1CQ25qQmE7RURvakJiLGNDM2RNO0VENGROLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUcxakJELDhCQUFBO0VINGpCQyxXQUFBO0VBQ0EsWUFBQTtFR25qQkEsVUhvakJpQjtFR25qQmpCLGVIbWpCaUI7RUdsakJqQixrQkhrakJpQjtFRzNoQmxCLHdDSDRoQkM7RUcxaEJELGdDSDBoQkM7QUQ0RkY7QUMxRkc7RUFDQyxjQ3RlSTtBRmtrQlI7QUN6RkU7RUFDQyxjQzFlSztBRnFrQlI7QUN6RkU7RUc5akJBLFVIK2pCa0I7RUc5akJsQixlSDhqQmtCO0VHN2pCbEIsa0JINmpCa0I7RUd0aUJuQix3Q0h1aUJFO0VHcmlCRixnQ0hxaUJFO0FEK0ZIO0FDN0ZFO0VFamlCQSxpQkFBQTtFRm1pQkMsZ0JBQUE7QUQrRkgiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5oZWFkZXIge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbmhlYWRlci5oZXJvLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9ob21lLXBhZ2UtY292ZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuaGVhZGVyLmhlcm8td3JhcHBlciAub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NSk7XG59XG5oZWFkZXIuaGVyby13cmFwcGVyIC5tb3ZlLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNSU7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmhlYWRlci5oZXJvLXdyYXBwZXIgLm1vdmUtbmV4dCBhIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5oZWFkZXIuaGVyby13cmFwcGVyIC5tb3ZlLW5leHQgaSB7XG4gIGZvbnQtc2l6ZTogMy44cmVtO1xufVxuaGVhZGVyLmhlcm8td3JhcHBlciAuY292ZXItaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpICFpbXBvcnRhbnQ7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSAhaW1wb3J0YW50O1xufVxuaGVhZGVyLmhlcm8td3JhcHBlciAuY29udGVudHMge1xuICBwYWRkaW5nOiAyNSUgMCAwIDA7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuaGVhZGVyLmhlcm8td3JhcHBlciAuY29udGVudHMgaDIge1xuICBmb250LXNpemU6IDMuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5oZWFkZXIuaGVyby13cmFwcGVyIC5jb250ZW50cyBoMyB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBsaW5lLWhlaWdodDogMzZweDtcbn1cbmhlYWRlci5oZXJvLXdyYXBwZXIgLmNvbnRlbnRzIGgyLCBoZWFkZXIuaGVyby13cmFwcGVyIC5jb250ZW50cyBoMyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgLW1vei10ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIGhlYWRlci5oZXJvLXdyYXBwZXIgLmNvbnRlbnRzIHtcbiAgICBwYWRkaW5nOiA0NSUgMCAwIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgaGVhZGVyLmhlcm8td3JhcHBlciAuY29udGVudHMgaDIge1xuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICB9XG4gIGhlYWRlci5oZXJvLXdyYXBwZXIgLmNvbnRlbnRzIGgzIHtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgfVxufVxuaGVhZGVyIC5uYXZiYXIge1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTJweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDAxO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5oZWFkZXIgLm5hdmJhci5maXhlZCB7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxMnB4IDE1cHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXYgbGkubmF2LWl0ZW06bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cbmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IGxpIC5oZWFkZXItYnRuIHtcbiAgYmFja2dyb3VuZDogIzViY2M3MztcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDRweCAyNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtYXJnaW46IDJweCAwIDAgMDtcbn1cbmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IGxpIC5oZWFkZXItYnRuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IG5vbmUgIWltcG9ydGFudDtcbn1cbmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IGxpIC5oZWFkZXItYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNhYmE1NTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogIzE5MWMxZTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHBhZGRpbmc6IDdweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtbGluazpiZWZvcmUge1xuICBjb250ZW50OiBcIu+Eh1wiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMTJweDtcbiAgbGVmdDogNDUlO1xuICBjb2xvcjogIzE5MWMxZTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIG9wYWNpdHk6IDA7XG4gIC1tb3otb3BhY2l0eTogMDtcbiAgLXdlYmtpdC1vcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMTVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuMTVzO1xuICB0cmFuc2l0aW9uOiAwLjE1cztcbn1cbmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlcjpiZWZvcmUge1xuICBib3R0b206IC0xOHB4O1xuICBjb2xvcjogIzAwYmNkNDtcbiAgb3BhY2l0eTogMTtcbiAgLW1vei1vcGFjaXR5OiAxO1xuICAtd2Via2l0LW9wYWNpdHk6IDE7XG59XG5oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWxpbms6bm90KC5oZWFkZXItYnRuKTpob3ZlciB7XG4gIGNvbG9yOiAjMDBiY2Q0O1xufVxuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1saW5rOm5vdCguaGVhZGVyLWJ0bik6aG92ZXI6YmVmb3JlIHtcbiAgY29sb3I6ICMwMGJjZDQ7XG59XG5oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAuYWN0aXZlLWxpbms6YmVmb3JlIHtcbiAgYm90dG9tOiAtMThweDtcbiAgY29sb3I6ICMwMGJjZDQ7XG4gIG9wYWNpdHk6IDE7XG4gIC1tb3otb3BhY2l0eTogMTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAxO1xufVxuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXYgLmFjdGl2ZSA+IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjMDBiY2Q0O1xufVxuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZS1saW5rIHtcbiAgY29sb3I6ICMwMGJjZDQgIWltcG9ydGFudDtcbn1cbmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUtbGluazpiZWZvcmUge1xuICBjb2xvcjogIzAwYmNkNDtcbn1cbmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtbGluay5vcGVuIHtcbiAgY29sb3I6ICMwMGJjZDQ7XG59XG5oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAub3BlbiA+IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjMDBiY2Q0O1xufVxuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbmhlYWRlciAubmF2YmFyIC5uYXZiYXItYnJhbmQgLmxvZ28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvLWRhcmsucG5nXCIpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcbiAgd2lkdGg6IDI2NXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtaW5kZW50OiAtMzAwMHB4O1xufVxuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci10b2dnbGUge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMTVweDtcbiAgei1pbmRleDogMTAwMTtcbiAgdG9wOiAzOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgaGVhZGVyIC5uYXZiYXIgLm5hdmJhci10b2dnbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5oZWFkZXIgLm5hdmJhciAubmF2YmFyLXRvZ2dsZSAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5oZWFkZXIgLm5hdmJhciAubmF2YmFyLXRvZ2dsZSAubmF2YmFyLXRvZ2dsZXItaWNvbiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjMTkxYzFlO1xuICB3aWR0aDogMjBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgIWltcG9ydGFudDtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMnB4O1xufVxuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci10b2dnbGUgLm5hdmJhci10b2dnbGVyLWljb24gc3BhbjpudGgtY2hpbGQoMSkge1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xufVxuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci10b2dnbGUgLm5hdmJhci10b2dnbGVyLWljb24gc3BhbjpudGgtY2hpbGQoMikge1xuICB0b3A6IDZweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIG9wYWNpdHk6IDE7XG4gIC1tb3otb3BhY2l0eTogMTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAxO1xufVxuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci10b2dnbGUgLm5hdmJhci10b2dnbGVyLWljb24gc3BhbjpudGgtY2hpbGQoMykge1xuICB0b3A6IDEycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xufVxuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci10b2dnbGUuZXhwYW5kZWQgLm5hdmJhci10b2dnbGVyLWljb24gc3BhbiB7XG4gIGJhY2tncm91bmQ6ICMwMGJjZDQ7XG59XG5oZWFkZXIgLm5hdmJhciAubmF2YmFyLXRvZ2dsZS5leHBhbmRlZCAubmF2YmFyLXRvZ2dsZXItaWNvbiBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIHRvcDogNnB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSAhaW1wb3J0YW50O1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG59XG5oZWFkZXIgLm5hdmJhciAubmF2YmFyLXRvZ2dsZS5leHBhbmRlZCAubmF2YmFyLXRvZ2dsZXItaWNvbiBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIG9wYWNpdHk6IDA7XG4gIC1tb3otb3BhY2l0eTogMDtcbiAgLXdlYmtpdC1vcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbn1cbmhlYWRlciAubmF2YmFyIC5uYXZiYXItdG9nZ2xlLmV4cGFuZGVkIC5uYXZiYXItdG9nZ2xlci1pY29uIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgdG9wOiA2cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSAhaW1wb3J0YW50O1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbn1cbmhlYWRlciAubmF2YmFyIC5uYXZiYXItY29sbGFwc2Uge1xuICBtYXJnaW46IC0xMHB4IDAgMCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIGhlYWRlciAubmF2YmFyIC5uYXZiYXItY29sbGFwc2UuZXhwYW5kZWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoICsgMTVweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZS5leHBhbmRlZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDBweDtcbiAgfVxuICBoZWFkZXIgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlLmV4cGFuZGVkIC5uYXZiYXItbmF2IHtcbiAgICBtYXJnaW46IDMwcHggMCAwIDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwIDAgMCAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZS5leHBhbmRlZCAubmF2YmFyLW5hdiBsaSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dDtcbiAgfVxuICBoZWFkZXIgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlLmV4cGFuZGVkIC5uYXZiYXItbmF2IGxpIC5uYXYtbGluayB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiAjMTkxYzFlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBoZWFkZXIgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlLmV4cGFuZGVkIC5uYXZiYXItbmF2IGxpIC5uYXYtbGluazpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZS5leHBhbmRlZCAubmF2YmFyLW5hdiBsaSAubmF2LWxpbms6aG92ZXIsIGhlYWRlciAubmF2YmFyIC5uYXZiYXItY29sbGFwc2UuZXhwYW5kZWQgLm5hdmJhci1uYXYgbGkgLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMwMGJjZDQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIGhlYWRlciAubmF2YmFyIC5uYXZiYXItY29sbGFwc2UuZXhwYW5kZWQgLm5hdmJhci1uYXYgbGkgLm5hdi1saW5rLmhlYWRlci1idG4ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDdweCAwcHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xuICAgIC1tb3otdHJhbnNpdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZS5leHBhbmRlZCAubmF2YmFyLW5hdiBsaSAubmF2LWxpbmsuaGVhZGVyLWJ0bjpob3ZlciwgaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZS5leHBhbmRlZCAubmF2YmFyLW5hdiBsaSAubmF2LWxpbmsuaGVhZGVyLWJ0bjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuLmNvbnRlbnQtYmxvY2sge1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG4uY29udGVudC1ibG9jayAudGl0bGUgaDIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIuOHJlbTtcbn1cbi5jb250ZW50LWJsb2NrIC5kZXNwIHtcbiAgcGFkZGluZzogNDBweCAwIDAgMDtcbn1cblxuLmZlYXR1cmVzLWJsb2NrIHtcbiAgYmFja2dyb3VuZDogI2ZmZjNmNTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWRkZGQ7XG59XG4uZmVhdHVyZXMtYmxvY2sgLmZlYXR1cmUtbGlzdCBoNCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuLmZlYXR1cmVzLWJsb2NrIC5mZWF0dXJlLWxpc3QgdWwgbGkge1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgcGFkZGluZzogMCAwIDAgMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5mZWF0dXJlcy1ibG9jayAuZmVhdHVyZS1saXN0IHVsIGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CMXCI7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbGVmdDogMDtcbn1cblxuLnByaWNpbmctYmxvY2sge1xuICBiYWNrZ3JvdW5kOiAjZmZmYmZiO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWRkZGQ7XG59XG4ucHJpY2luZy1ibG9jayAucHJpY2UtcGxhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC1tb3otYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXI6IDA7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJpY2luZy1ibG9jayAucHJpY2UtcGxhbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbn1cbi5wcmljaW5nLWJsb2NrIC5wcmljZS1wbGFuIGg0IHtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucHJpY2luZy1ibG9jayAucHJpY2UtcGxhbi5mcmVlIGg0LCAucHJpY2luZy1ibG9jayAucHJpY2UtcGxhbiAuYnRuLWZyZWUge1xuICBiYWNrZ3JvdW5kOiAjMDNjY2E2O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDNjY2E2O1xufVxuLnByaWNpbmctYmxvY2sgLnByaWNlLXBsYW4ucHJlbWl1bSBoNCwgLnByaWNpbmctYmxvY2sgLnByaWNlLXBsYW4gLmJ0bi1wcmVtaXVtIHtcbiAgYmFja2dyb3VuZDogIzA4M2Q3MTtcbiAgYm9yZGVyOiAycHggc29saWQgIzA4M2Q3MTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJpY2luZy1ibG9jayAucHJpY2UtcGxhbiB7XG4gICAgbWFyZ2luOiAwIDAgMzBweCAwO1xuICB9XG59XG4ucHJpY2luZy1ibG9jayAuYnRuLXByaWNpbmcge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIHdpZHRoOiAyODBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG4ucHJpY2luZy1ibG9jayAuYnRuLXByaWNpbmc6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzE5MWMxZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ucHJpY2luZy1ibG9jayAucHJpY2UtcG9pbnRzIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwIDMwcHggMzBweDtcbn1cbi5wcmljaW5nLWJsb2NrIC5wcmljZS1wb2ludHMgbGkge1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLnByaWNpbmctYmxvY2sgLnByaWNlLXBvaW50cyBsaTpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjNmMztcbn1cblxuLmFib3V0dXMtYmxvY2sge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLmFib3V0dXMtYmxvY2sgLmRlc3AgaDQge1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cbi5hYm91dHVzLWJsb2NrIC5kZXNwIC5saXN0cyB7XG4gIHBhZGRpbmc6IDcwcHggMCAwIDA7XG59XG4uYWJvdXR1cy1ibG9jayAuZGVzcCAubGlzdHMgaW1nIHtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLmFib3V0dXMtYmxvY2sgLmRlc3AgLmxpc3RzIHAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZzogMjBweCAxMHB4IDAgMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYWJvdXR1cy1ibG9jayAuZGVzcCAubGlzdHMgLmNvbHVtbiB7XG4gICAgcGFkZGluZzogMCAxNXB4IDMwcHggMTVweDtcbiAgfVxuICAuYWJvdXR1cy1ibG9jayAuZGVzcCAubGlzdHMgLmNvbHVtbjpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxufVxuXG4uYm90dG9tLWJsb2NrIHtcbiAgYmFja2dyb3VuZDogIzNiNmRiMTtcbiAgLyogT2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzQwYmRhNiA3MCUsICMwOWE1OTYgNzAlKTtcbiAgLyogRkYzLjYtMTUgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNDBiZGE2IDcwJSwgIzA5YTU5NiA3MCUpO1xuICAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNDBiZGE2IDcwJSwgIzA5YTU5NiA3MCUpO1xuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9XCIjNDBiZGE2XCIsIGVuZENvbG9yc3RyPVwiIzA5YTU5NlwiLEdyYWRpZW50VHlwZT0wICk7XG4gIC8qIElFNi05ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib3R0b20tYmxvY2sgLnRpdGxlIGgyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYm90dG9tLWJsb2NrIC5jb250YWN0LWZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm90dG9tLWJsb2NrIC5jb250YWN0LWZvcm0gLmZvcm0tZXJyb3JzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yOHB4O1xuICBsZWZ0OiAwO1xuICBjb2xvcjogIzAyMjkyNTtcbn1cbi5ib3R0b20tYmxvY2sgLmNvbnRhY3QtZm9ybSAuZm9ybS1ncm91cCBpbnB1dCwgLmJvdHRvbS1ibG9jayAuY29udGFjdC1mb3JtIC5mb3JtLWdyb3VwIHRleHRhcmVhIHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG59XG4uYm90dG9tLWJsb2NrIC5jb250YWN0LWZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQuZXJyb3IsIC5ib3R0b20tYmxvY2sgLmNvbnRhY3QtZm9ybSAuZm9ybS1ncm91cCB0ZXh0YXJlYS5lcnJvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMjM4NWU7XG59XG4uYm90dG9tLWJsb2NrIC5jb250YWN0LWZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIC5ib3R0b20tYmxvY2sgLmNvbnRhY3QtZm9ybSAuZm9ybS1ncm91cCB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiByZ2JhKDI1LCAyOCwgMzAsIDAuNyk7XG59XG4uYm90dG9tLWJsb2NrIC5jb250YWN0LWZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciwgLmJvdHRvbS1ibG9jayAuY29udGFjdC1mb3JtIC5mb3JtLWdyb3VwIHRleHRhcmVhOi1tb3otcGxhY2Vob2xkZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogcmdiYSgyNSwgMjgsIDMwLCAwLjcpO1xufVxuLmJvdHRvbS1ibG9jayAuY29udGFjdC1mb3JtIC5mb3JtLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyLCAuYm90dG9tLWJsb2NrIC5jb250YWN0LWZvcm0gLmZvcm0tZ3JvdXAgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogcmdiYSgyNSwgMjgsIDMwLCAwLjcpO1xufVxuLmJvdHRvbS1ibG9jayAuY29udGFjdC1mb3JtIC5mb3JtLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgLmJvdHRvbS1ibG9jayAuY29udGFjdC1mb3JtIC5mb3JtLWdyb3VwIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiByZ2JhKDI1LCAyOCwgMzAsIDAuNyk7XG59XG4uYm90dG9tLWJsb2NrIC5jb250YWN0LWZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDAgMCAxNXB4IDA7XG4gIGhlaWdodDogNDVweDtcbn1cbi5ib3R0b20tYmxvY2sgLmNvbnRhY3QtZm9ybSAuZm9ybS1ncm91cCB0ZXh0YXJlYSB7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgcmVzaXplOiBub25lO1xufVxuLmJvdHRvbS1ibG9jayAuY29udGFjdC1mb3JtIC5mb3JtLWdyb3VwIC5idG4tc3VibWl0IHtcbiAgYmFja2dyb3VuZDogIzIzNmFhZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYm90dG9tLWJsb2NrIC5jb250YWN0LWZvcm0gLmZvcm0tZ3JvdXAgLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM0YjgyO1xufVxuLmJvdHRvbS1ibG9jayAuYm90dG9tLWJveCB7XG4gIHBhZGRpbmc6IDE4MHB4IDAgMCAwO1xufVxuLmJvdHRvbS1ibG9jayAuYm90dG9tLWJveCAuZGVzcCB7XG4gIG1hcmdpbjogLTEzMHB4IDAgMCAwO1xufVxuLmJvdHRvbS1ibG9jayAuYm90dG9tLWJveCAuc29jaWFsLWxpc3Qge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5ib3R0b20tYmxvY2sgLmJvdHRvbS1ib3ggLnNvY2lhbC1saXN0IC5zb2NpYWwtbGlua3MgbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG4uYm90dG9tLWJsb2NrIC5ib3R0b20tYm94IC5zb2NpYWwtbGlzdCAuc29jaWFsLWxpbmtzIGxpOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmJvdHRvbS1ibG9jayAuYm90dG9tLWJveCAuc29jaWFsLWxpc3QgLnNvY2lhbC1saW5rcyBsaSBhIHtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzhweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjMDlhNTk2O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5ib3R0b20tYmxvY2sgLmJvdHRvbS1ib3ggLnNvY2lhbC1saXN0IC5zb2NpYWwtbGlua3MgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDZkNmQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmJvdHRvbS1ibG9jayAuYm90dG9tLWJveCAuY29weXJpZ2h0IHAge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG4uYm90dG9tLWJsb2NrIC5ib3R0b20tYm94IC5jb3B5cmlnaHQgcCBhIHtcbiAgY29sb3I6ICNkOGZmZmI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5ib3R0b20tYmxvY2sgLmJvdHRvbS1ib3ggLmNvcHlyaWdodCBwIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uYm90dG9tLWJsb2NrIC5yaWdodC1ib3ggLmFkZHJlc3Mtd3JhcHBlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDcwcHggMCAwIDA7XG59XG4uYm90dG9tLWJsb2NrIC5yaWdodC1ib3ggLmFkZHJlc3Mtd3JhcHBlciBoNCB7XG4gIGZvbnQtc2l6ZTogMi44cmVtO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xufVxuLmJvdHRvbS1ibG9jayAucmlnaHQtYm94IC5hZGRyZXNzLXdyYXBwZXIgYWRkcmVzcyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmJvdHRvbS1ibG9jayAucmlnaHQtYm94IC5tYXAtd3JhcHBlciB7XG4gIG1hcmdpbjogMzBweCAwIDAgMDtcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZmZmZjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNXB4ICMxZDNkNmI7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCA1cHggIzFkM2Q2YjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDVweCAjMWQzZDZiO1xufVxuLmJvdHRvbS1ibG9jayAucmlnaHQtYm94IC5tYXAtd3JhcHBlciBpZnJhbWUge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrLXRvLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogIzEzNGI4MjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3R0b206IDE1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIC1tb3otb3BhY2l0eTogMDtcbiAgLXdlYmtpdC1vcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5iYWNrLXRvLXRvcDpob3ZlciBpIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYmFjay10by10b3A6Zm9jdXMge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5iYWNrLXRvLXRvcC5zaG93IHtcbiAgb3BhY2l0eTogMTtcbiAgLW1vei1vcGFjaXR5OiAxO1xuICAtd2Via2l0LW9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmJhY2stdG8tdG9wIGkge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgcGFkZGluZy10b3A6IDZweDtcbn0iLCJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuaGVhZGVyIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAkZnVsbDtcbiAgJi5oZXJvLXdyYXBwZXIge1xuICBwb3NpdGlvbjogJHJlbDtcblx0Y29sb3I6ICR3aGl0ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcjeyRpbWFnZXN9L2hvbWUtcGFnZS1jb3Zlci5qcGcnKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcblx0aGVpZ2h0OiAxMDB2aDtcblx0Lm92ZXJsYXkge1xuXHQgIHBvc2l0aW9uOiAkYWJzO1xuXHQgIHdpZHRoOiAkZnVsbDtcblx0ICBoZWlnaHQ6ICRmdWxsO1xuXHQgIHRvcDogMHB4O1xuXHQgIGxlZnQ6IDBweDtcblx0ICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibGFjaywgMC41NSk7XG5cdH1cblx0Lm1vdmUtbmV4dCB7XG5cdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0Ym90dG9tOiA1JTtcblx0XHR3aWR0aDogJGZ1bGw7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGEge1xuXHRcdFx0Y29sb3I6ICR3aGl0ZTtcblx0XHR9XG5cdFx0aSB7XG5cdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LWJpZyk7XG5cdFx0fVxuXHR9XG5cdC5jb3Zlci1pY29uIHtcblx0XHRwb3NpdGlvbjogJGFicztcblx0XHRsZWZ0OiA1MCU7XG4gIFx0XHRib3R0b206IDA7XG4gIFx0XHRAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgtNTAlKSk7XG5cdH1cblx0LmNvbnRlbnRzIHtcblx0XHRwYWRkaW5nOiAyNSUgMCAwIDA7XG4gIFx0XHR3aWR0aDogODAlO1xuICBcdFx0bWFyZ2luOiAwIGF1dG87XG4gIFx0XHRoMiB7XG5cdFx0ICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LWgyKTtcblx0XHQgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuXHRcdCAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgXHRcdH1cbiAgXHRcdGgzIHtcbiAgXHRcdCAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1tZWRpdW0tMDIpO1xuXHRcdCAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIFx0XHR9XG4gIFx0XHRoMiwgaDMge1xuICBcdFx0ICBjb2xvcjogJHdoaXRlO1xuICBcdFx0ICBAaW5jbHVkZSB0ZXh0LXNoYWRvdygwIDFweCAycHggcmdiYSgkYmxhY2ssIC42KSk7XG5cdFx0ICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gIFx0XHR9XG4gIFx0XHRAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcblx0XHQgIFxuXHRcdCAgcGFkZGluZzogNDUlIDAgMCAwO1xuXHRcdCAgd2lkdGg6IDEwMCU7XG5cdFx0ICBoMiB7XG5cdFx0ICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbWVkaXVtLTAzKTtcblx0XHQgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG5cdFx0ICB9XG5cdFx0ICBoMyB7XG5cdFx0ICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtaDQpO1xuXHRcdCAgICBsaW5lLWhlaWdodDogMzJweDtcblx0XHQgIH1cblxuXHRcdH1cblx0fVxuICB9XG4gIC5uYXZiYXIge1xuICBcdHBhZGRpbmc6IDE1cHggMTVweCAxMnB4IDE1cHggIWltcG9ydGFudDtcbiAgXHRiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIFx0cG9zaXRpb246ICRmZDtcbiAgXHR0b3A6IDA7XG4gIFx0d2lkdGg6ICRmdWxsO1xuICBcdHotaW5kZXg6IDEwMDE7XG4gIFx0QGluY2x1ZGUgYm94LXNoYWRvdygwcHggMHB4IDJweCByZ2JhKCRibGFjaywgMC4yKSk7XG4gIFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4ycyBlYXNlLWluLW91dCk7XG4gIFx0Ji5maXhlZCB7XG4gIFx0XHRwYWRkaW5nOiAxNXB4IDE1cHggMTJweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIFx0XHRAaW5jbHVkZSBib3gtc2hhZG93KDBweCAwcHggNnB4IHJnYmEoJGJsYWNrLCAwLjIpKTtcbiAgXHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG4gIFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjJzIGVhc2UtaW4tb3V0KTtcbiAgXHR9XG4gIFx0Lm5hdmJhci1uYXYge1xuICBcdFx0bGkge1xuICBcdFx0XHQmLm5hdi1pdGVtIHtcbiAgXHRcdFx0XHQmOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICBcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDMwcHg7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHRcdC5oZWFkZXItYnRuIHtcbiAgXHRcdFx0ICBiYWNrZ3JvdW5kOiAkbGltZS1ncmVlbjtcblx0XHRcdCAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkd2hpdGUsIDAuMTIpO1xuXHRcdFx0ICBjb2xvcjogJHdoaXRlO1xuXHRcdFx0ICBwYWRkaW5nOiA0cHggMjVweDtcblx0XHRcdCAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyg1MHB4KTtcblx0XHRcdCAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4ycyBlYXNlLWluLW91dCk7XG5cdFx0XHQgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuICAgICAgICBtYXJnaW46IDJweCAwIDAgMDtcblx0XHRcdCAgJjpiZWZvcmUge1xuXHRcdFx0ICBcdGNvbnRlbnQ6IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdCAgfVxuXHRcdFx0ICAmOmhvdmVyIHtcblx0XHRcdCAgXHRiYWNrZ3JvdW5kOiBkYXJrZW4oJGxpbWUtZ3JlZW4sIDEwJSk7XG5cdFx0XHQgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4ycyBlYXNlLWluLW91dCk7XG5cdFx0XHQgIH1cbiAgXHRcdCAgIH1cbiAgXHRcdCAgICY6bGFzdC1jaGlsZCB7XG4gIFx0XHQgICBcdCAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIFx0XHQgICB9XG4gIFx0ICAgfVxuICBcdCAgIC5uYXYtbGluayB7XG4gICAgXHQgICBjb2xvcjogJGdyZXktOTAwO1xuICAgIFx0XHQgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG4gICAgXHRcdCBwYWRkaW5nOiA3cHggMDtcbiAgICBcdFx0IHBvc2l0aW9uOiAkcmVsO1xuICAgIFx0XHQgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICAgIFx0XHQgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBcdFx0ICY6YmVmb3JlIHtcbiAgICBcdFx0IFx0Y29udGVudDogJ1xcZjEwNyc7XG4gICAgXHRcdCBcdGZvbnQtZmFtaWx5OiAkZnRhO1xuICAgIFx0XHQgXHRwb3NpdGlvbjogJGFicztcbiAgICBcdFx0IFx0Ym90dG9tOiAtMTJweDtcbiAgICAgIFx0XHRcdGxlZnQ6IDQ1JTtcbiAgICAgIFx0XHRcdGNvbG9yOiAkZ3JleS05MDA7XG4gICAgICBcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LWJhc2UpO1xuICAgICAgXHRcdFx0QGluY2x1ZGUgb3BhY2l0eSgwKTtcbiAgICAgIFx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oMC4xNXMpO1xuICAgIFx0XHQgfVxuICAgIFx0XHQgJjpob3ZlciB7XG4gICAgXHRcdCBcdCY6YmVmb3JlIHtcbiAgICBcdFx0IFx0ICBib3R0b206IC0xOHB4O1xuICAgIFx0XHRcdCAgY29sb3I6ICRzLWN5YW47XG4gICAgXHRcdFx0ICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xuICAgIFx0XHQgXHR9XG4gICAgXHRcdCB9XG4gICAgXHRcdCAmOm5vdCguaGVhZGVyLWJ0bik6aG92ZXIge1xuICAgIFx0XHQgXHRjb2xvcjogJHMtY3lhbjtcbiAgICBcdFx0IFx0JjpiZWZvcmUge1xuICAgIFx0XHQgXHRcdGNvbG9yOiAkcy1jeWFuO1xuICAgIFx0XHQgXHR9XG4gICAgXHRcdCB9XG4gIFx0ICAgfVxuICBcdCAgIC5hY3RpdmUtbGluayB7XG5cdCAgIFx0IFx0JjpiZWZvcmUge1xuXHQgICBcdCBcdCAgYm90dG9tOiAtMThweDtcblx0XHRcdCAgY29sb3I6ICRzLWN5YW47XG5cdFx0XHQgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XG5cdCAgIFx0IH1cbiAgXHQgICB9XG4gIFx0ICAgLmFjdGl2ZSA+IC5uYXYtbGluayB7XG5cdCAgICBjb2xvcjogJHMtY3lhbjtcblx0ICAgfVxuXHQgICAubmF2LWxpbmsge1xuXHQgICAgJi5hY3RpdmUtbGluayB7XG5cdCAgICAgIGNvbG9yOiAkcy1jeWFuICFpbXBvcnRhbnQ7XG5cblx0ICAgICAgJjpiZWZvcmUge1xuXHQgICAgICAgIGNvbG9yOiAkcy1jeWFuO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgICYub3BlbiB7XG5cdCAgICAgIGNvbG9yOiAkcy1jeWFuO1xuXHQgICAgfVxuXHQgIH1cblx0ICAub3BlbiA+IC5uYXYtbGluayB7XG5cdCAgICBjb2xvcjogJHMtY3lhbjtcblx0ICB9XG4gIFx0fVxuICBcdC5uYXZiYXItYnJhbmQge1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdC5sb2dvIHtcbiAgXHRcdFx0YmFja2dyb3VuZDogdXJsKCcjeyRpbWFnZXN9L2xvZ28tZGFyay5wbmcnKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7XG4gICAgXHRcdHdpZHRoOiAyNjVweDtcbiAgIFx0XHRcdGhlaWdodDogNTBweDtcbiAgICBcdFx0dGV4dC1pbmRlbnQ6IC0zMDAwcHg7XG5cdFx0ICB9XG4gIFx0fVxuICBcdC5uYXZiYXItdG9nZ2xlIHtcbiAgXHRcdGRpc3BsYXk6IG5vbmU7XG4gIFx0XHR3aWR0aDogMjBweDtcblx0XHRwb3NpdGlvbjogJGZkO1xuXHRcdHJpZ2h0OiAxNXB4O1xuXHRcdHotaW5kZXg6IDEwMDE7XG5cdFx0dG9wOiAzOHB4O1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0QGluY2x1ZGUgYm9yZGVyLXJhZGl1cygwKTtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdH1cblx0XHQubmF2YmFyLXRvZ2dsZXItaWNvbiB7XG5cdFx0XHR3aWR0aDogJGZ1bGw7XG4gIFx0XHRcdHNwYW4ge1xuICBcdFx0XHQgIHBvc2l0aW9uOiAkYWJzO1xuXHRcdFx0ICBsZWZ0OiAwO1xuXHRcdFx0ICBiYWNrZ3JvdW5kOiAkZ3JleS05MDA7XG5cdFx0XHQgIHdpZHRoOiAyMHB4O1xuXHRcdFx0ICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgwKSk7XG5cdFx0XHQgIGhlaWdodDogMnB4O1xuXHRcdFx0ICAmOm50aC1jaGlsZCgxKSB7XG5cdFx0XHQgIFx0dG9wOiAwO1xuXHRcdFx0ICBcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuMTVzIGVhc2UpO1xuXHRcdFx0ICB9XG5cdFx0XHQgICY6bnRoLWNoaWxkKDIpIHtcblx0XHRcdCAgXHR0b3A6IDZweDtcblx0XHRcdCAgXHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcblx0XHRcdCAgXHRAaW5jbHVkZSBvcGFjaXR5KDEpO1xuXHRcdFx0ICB9XG5cdFx0XHQgICY6bnRoLWNoaWxkKDMpIHtcblx0XHRcdCAgXHR0b3A6IDEycHg7XG5cdFx0XHQgIFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XG5cdFx0XHQgIH1cbiAgXHRcdFx0fVxuXHRcdH1cblx0XHQmLmV4cGFuZGVkIHtcblx0XHRcdC5uYXZiYXItdG9nZ2xlci1pY29uIHtcblx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJHMtY3lhbjtcblx0XHRcdFx0XHQmOm50aC1jaGlsZCgxKSB7XG5cdFx0XHRcdFx0ICAgdG9wOiA2cHg7XG4gXHRcdFx0XHRcdCAgIEBpbmNsdWRlIHRyYW5zZm9ybShyb3RhdGUoNDVkZWcpKTtcbiBcdFx0XHRcdFx0ICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCY6bnRoLWNoaWxkKDIpIHtcblx0XHRcdFx0XHRcdEBpbmNsdWRlIG9wYWNpdHkoMCk7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JjpudGgtY2hpbGQoMykge1xuXHRcdFx0XHRcdFx0dG9wOiA2cHg7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlKC00NWRlZykpO1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHQgfVxuXHQgLm5hdmJhci1jb2xsYXBzZSB7XG4gIFx0XHRtYXJnaW46IC0xMHB4IDAgMCAwO1xuICBcdFx0Ji5leHBhbmRlZCB7XG4gIFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICBcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuICBcdFx0XHRcdHBvc2l0aW9uOiAkZmQ7XG5cdFx0XHQgICAgdG9wOiAwO1xuXHRcdFx0ICAgIGxlZnQ6IDA7XG5cdFx0XHQgICAgd2lkdGg6IDEwMHZ3O1xuXHRcdFx0ICAgIGhlaWdodDogY2FsYygxMDB2aCArIDE1cHgpO1xuXHRcdFx0ICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblx0XHRcdCAgICB6LWluZGV4OiAxMDAwO1xuXHRcdFx0ICAgIG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHQgICAgJjpiZWZvcmUge1xuXHRcdFx0ICAgIFx0Y29udGVudDogJyc7XG5cdFx0XHRcdCAgICBwb3NpdGlvbjogJGFicztcblx0XHRcdFx0ICAgIHdpZHRoOiAkZnVsbDtcblx0XHRcdFx0ICAgIGhlaWdodDogJGZ1bGw7XG5cdFx0XHRcdCAgICB0b3A6IDA7XG5cdFx0XHRcdCAgICBsZWZ0OiAwcHg7XG5cdFx0XHQgICAgfVxuICBcdFx0XHRcdC5uYXZiYXItbmF2IHtcbiAgXHRcdFx0XHRcdG1hcmdpbjogMzBweCAwIDAgMCAhaW1wb3J0YW50O1xuICAgIFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMjBweCAhaW1wb3J0YW50O1xuICAgIFx0XHRcdFx0bGkge1xuICAgIFx0XHRcdFx0XHRtYXJnaW46IDA7XG4gICAgXHRcdFx0XHRcdGNvbG9yOiAkd2hpdGU7XG4gICAgXHRcdFx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQpO1xuICAgIFx0XHRcdFx0XHQubmF2LWxpbmsge1xuXHQgICAgXHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbWVkaXVtKTtcblx0ICAgIFx0XHRcdFx0XHRjb2xvcjogJGdyZXktOTAwO1xuXHQgICAgXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0ICAgIFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdCAgICBcdFx0XHRcdFx0XHRjb250ZW50OiBub25lO1xuXHQgICAgXHRcdFx0XHRcdH1cblx0ICAgIFx0XHRcdFx0XHQmOmhvdmVyLCAmLmFjdGl2ZSB7XG5cdCAgICBcdFx0XHRcdFx0XHRjb2xvcjogJHMtY3lhbjtcblx0ICAgIFx0XHRcdFx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQpO1xuXHQgICAgXHRcdFx0XHRcdH1cblx0ICAgIFx0XHRcdFx0XHQmLmhlYWRlci1idG4ge1xuICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZGVzcC1yZWd1bGFyO1xuXHRcdFx0ICBcdFx0XHRcdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRcdFx0XHRcdFx0ICAgIGJvcmRlcjowO1xuXHRcdFx0XHRcdFx0XHQgICAgcGFkZGluZzogN3B4IDBweDtcblx0XHRcdFx0XHRcdFx0ICAgIEBpbmNsdWRlIHRyYW5zaXRpb24obm9uZSk7XG5cdFx0XHRcdFx0XHRcdCAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0XHRcdFx0ICAgICY6aG92ZXIsICY6Zm9jdXMge1xuXHRcdFx0XHRcdFx0XHQgICAgXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdFx0XHRcdFx0XHQgICAgXHRib3JkZXI6MDtcblx0XHRcdFx0XHRcdFx0ICAgIH1cblx0XHRcdCAgXHRcdFx0XHR9XG4gICAgXHRcdFx0XHRcdH1cbiAgICBcdFx0XHRcdH1cbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9XG4gIH1cbn1cblxuLmNvbnRlbnQtYmxvY2sge1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIC50aXRsZSB7XG4gIFx0aDIge1xuICBcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgXHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtaDMpO1xuICBcdH1cbiAgfVxuICAuZGVzcCB7XG4gIFx0cGFkZGluZzogNDBweCAwIDAgMDtcbiAgfVxufVxuXG5cbi5mZWF0dXJlcy1ibG9ja3tcbiAgYmFja2dyb3VuZDogJGwtcGFsZS1yZWQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleS1yZWQ7XG4gIC5mZWF0dXJlLWxpc3Qge1xuICBcdGg0IHtcbiAgXHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbWVkaXVtKTtcbiAgXHRcdG1hcmdpbjogMCAwIDEwcHggMDtcdFxuICBcdH1cbiAgXHR1bCB7XG4gIFx0XHRsaSB7XG4gIFx0XHRcdGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBcdFx0XHRwYWRkaW5nOiAwIDAgMCAyNHB4O1xuICBcdFx0XHRwb3NpdGlvbjogJHJlbDtcbiAgXHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwtMDIpO1xuICBcdFx0XHQmOmJlZm9yZSB7XG4gIFx0XHRcdFx0Y29udGVudDogJ1xcZjAwYyc7XG4gIFx0XHRcdFx0Zm9udC1mYW1pbHk6ICRmdGE7XG4gIFx0XHRcdFx0cG9zaXRpb246ICRhYnM7XG4gIFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC10aW55KTtcbiAgXHRcdFx0XHRsZWZ0OiAwO1x0XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9XG4gIH1cbn1cblxuXG4ucHJpY2luZy1ibG9jayB7XG4gIGJhY2tncm91bmQ6ICRoLXBhbGUtcmVkO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyZXktcmVkO1xuICAucHJpY2UtcGxhbiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblx0QGluY2x1ZGUgYm94LXNoYWRvdygwIDJweCAzcHggcmdiYSgkYmxhY2ssIDAuMikpO1xuXHRib3JkZXI6IDA7XG5cdEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoNHB4KTtcblx0ZmxleDogMTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHQmOmhvdmVyIHtcblx0XHRAaW5jbHVkZSBib3gtc2hhZG93KDAgMTRweCAyOHB4IHJnYmEoJGJsYWNrLCAwLjEpLCAwIDEwcHggMTBweCByZ2JhKCRibGFjaywgMC4xKSk7XG5cdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSk7XG5cdH1cblx0aDQge1xuXHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbWVkaXVtLTAyKTtcblx0XHRwYWRkaW5nOiAxNXB4IDA7XG5cdFx0Y29sb3I6ICR3aGl0ZTtcblx0fVxuXHQmLmZyZWUgaDQsIC5idG4tZnJlZSB7XG5cdFx0YmFja2dyb3VuZDogJGgtY3lhbjtcblx0XHRib3JkZXI6IDJweCBzb2xpZCAkaC1jeWFuO1xuXHR9XG5cdCYucHJlbWl1bSBoNCwgLmJ0bi1wcmVtaXVtIHtcblx0XHRiYWNrZ3JvdW5kOiAkZGFyay1ibHVlO1xuXHRcdGJvcmRlcjogMnB4IHNvbGlkICRkYXJrLWJsdWU7XG5cdH1cblx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0IG1hcmdpbjogMCAwIDMwcHggMDtcblx0fVxuICB9XG4gIC5idG4tcHJpY2luZyB7XG4gIFx0QGluY2x1ZGUgaGVhZC1yZWd1bGFyO1xuICBcdGNvbG9yOiAkd2hpdGU7XG4gIFx0cGFkZGluZzogMTBweCAyMHB4O1xuICBcdEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoNTBweCk7XG4gIFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4ycyBlYXNlLWluLW91dCk7XG4gIFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1iYXNlKTtcbiAgXHR3aWR0aDogMjgwcHg7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgJjpob3ZlciB7XG4gICAgXHRiYWNrZ3JvdW5kOiAkdHJhbnMgIWltcG9ydGFudDtcbiAgICBcdGNvbG9yOiAkZ3JleS05MDA7XG4gICAgXHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjJzIGVhc2UtaW4tb3V0KTtcbiAgICB9XG4gIH1cbiAgLnByaWNlLXBvaW50cyB7XG4gIFx0bGlzdC1zdHlsZS10eXBlOm5vbmU7XG4gICAgcGFkZGluZzogMCAzMHB4IDMwcHg7XG4gICAgbGkge1xuICAgIFx0cGFkZGluZzoxNXB4IDEwcHg7XG4gICAgXHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbC0wMik7XG4gICAgXHQmOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gICAgXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleS0zMDA7XG4gICAgXHR9XG4gICAgfVxuICB9XG59XG5cblxuXG4uYWJvdXR1cy1ibG9jayB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgLmRlc3Age1xuICBcdGg0IHtcbiAgXHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtaDQpO1xuICBcdH1cbiAgXHQubGlzdHMge1xuICBcdFx0cGFkZGluZzogNzBweCAwIDAgMDtcbiAgXHRcdGltZyB7XG4gIFx0XHRcdGhlaWdodDogNzBweDtcbiAgXHRcdH1cbiAgXHRcdHAge1xuICBcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbC0wMik7XG4gIFx0XHRcdHBhZGRpbmc6IDIwcHggMTBweCAwIDEwcHg7XHRcbiAgXHRcdH1cbiAgXHRcdC5jb2x1bW4ge1xuICBcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgXHRcdFx0XHRwYWRkaW5nOiAwIDE1cHggMzBweCAxNXB4O1xuICBcdFx0XHRcdCY6bGFzdC1jaGlsZCB7XG4gICAgXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMDtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH1cblx0IH1cbiAgfVxufVxuXG4uYm90dG9tLWJsb2NrIHtcbiAgYmFja2dyb3VuZDogIzNiNmRiMTsgLyogT2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzQwYmRhNiA3MCUsICMwOWE1OTYgNzAlKTsgLyogRkYzLjYtMTUgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNDBiZGE2IDcwJSwjMDlhNTk2IDcwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0MGJkYTYgNzAlLCMwOWE1OTYgNzAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjNDBiZGE2JywgZW5kQ29sb3JzdHI9JyMwOWE1OTYnLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXG4gIHBvc2l0aW9uOiAkcmVsO1xuICAudGl0bGUge1xuICBcdGgyIHtcbiAgXHRcdGNvbG9yOiAkd2hpdGU7XG4gIFx0fVxuICB9XG4gIC5jb250YWN0LWZvcm0ge1xuICBcdHBvc2l0aW9uOiAkcmVsO1xuICBcdC5mb3JtLWVycm9ycyB7XG5cdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0dG9wOiAtMjhweDtcblx0XHRsZWZ0OiAwO1xuXHRcdGNvbG9yOiAkZC1jeWFuO1xuICBcdH1cbiAgXHQuZm9ybS1ncm91cCB7XG4gIFx0XHRpbnB1dCwgdGV4dGFyZWEge1xuICBcdFx0XHRib3JkZXI6IG5vbmU7XG4gIFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbm9ybWFsKTtcbiAgXHRcdFx0QGluY2x1ZGUgYm9yZGVyLXJhZGl1cyg0cHgpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XG4gICAgICAgICYuZXJyb3Ige1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRicmlnaHQtcmVkO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyIHtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKCRncmV5LTkwMCwgMC43KTtcbiAgICAgICAgfVxuICBcdFx0fVxuICBcdFx0aW5wdXQge1xuICBcdFx0XHRwYWRkaW5nOiAxMHB4O1xuICBcdFx0XHRtYXJnaW46IDAgMCAxNXB4IDA7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgXHRcdH1cbiAgXHRcdHRleHRhcmVhIHtcbiAgXHRcdFx0bWFyZ2luOiAwIDAgMTVweCAwO1xuICBcdFx0XHRyZXNpemU6IG5vbmU7XG4gIFx0XHR9XG4gICAgICAuYnRuLXN1Ym1pdCB7XG4gICAgXHRcdGJhY2tncm91bmQ6ICRkYXJrLWJsdWUtMDI7XG4gICAgXHRcdGNvbG9yOiAkd2hpdGU7XG4gICAgXHRcdHdpZHRoOiAkZnVsbDtcbiAgICBcdFx0cGFkZGluZzogNnB4IDA7XG4gICAgXHRcdEBpbmNsdWRlIGhlYWQtcmVndWxhcjtcbiAgICBcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1tZWRpdW0pO1xuICAgIFx0XHRAaW5jbHVkZSBib3JkZXItcmFkaXVzKDRweCk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgXHRcdCY6aG92ZXIge1xuICAgIFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJsdWUtMDM7XG4gICAgXHRcdH1cbiAgICAgIH1cbiAgXHR9XG4gIH1cbiAgLmJvdHRvbS1ib3gge1xuICBcdHBhZGRpbmc6IDE4MHB4IDAgMCAwO1xuICBcdC5kZXNwIHtcbiAgXHRcdG1hcmdpbjogLTEzMHB4IDAgMCAwO1xuICBcdH1cbiAgXHQuc29jaWFsLWxpc3Qge1xuICBcdFx0cGFkZGluZy1ib3R0b206IDE1cHg7XG4gIFx0XHQuc29jaWFsLWxpbmtzIGxpIHtcbiAgXHRcdFx0cGFkZGluZy1yaWdodDogM3B4O1xuICBcdFx0XHQmOmZpcnN0LWNoaWxkIHtcbiAgXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XG4gIFx0XHRcdH1cbiAgXHRcdFx0YSB7XG5cdFx0XHRcdHdpZHRoOiAzOHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDM4cHg7XG5cdFx0XHRcdEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMzBweCk7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICR3aGl0ZTtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0Y29sb3I6ICRkLWN5YW4tMDI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW1lZGl1bSk7XG5cdFx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuMnMgZWFzZS1pbi1vdXQpO1xuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAkdmQtY3lhbjtcblx0XHRcdFx0XHRjb2xvcjogJHdoaXRlO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjJzIGVhc2UtaW4tb3V0KTtcblx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9XG5cdH1cblx0LmNvcHlyaWdodCBwIHtcbiAgXHRcdGNvbG9yOiAkd2hpdGU7XG4gIFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcbiAgXHRcdGEge1xuICBcdFx0XHRjb2xvcjogJHBhbGUtY3lhbjtcbiAgXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIFx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuMnMgZWFzZS1pbi1vdXQpO1xuICBcdFx0XHQmOmhvdmVyIHtcbiAgXHRcdFx0XHRjb2xvcjogJHdoaXRlO1xuICBcdFx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuMnMgZWFzZS1pbi1vdXQpO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cdH1cbiAgfVxuICAucmlnaHQtYm94IHtcbiAgXHQuYWRkcmVzcy13cmFwcGVyIHtcbiAgXHRcdGNvbG9yOiAkd2hpdGU7XG4gIFx0XHRtYXJnaW46IDcwcHggMCAwIDA7XG4gIFx0XHRoNCB7XG4gIFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtaDMpO1xuICBcdFx0XHRjb2xvcjogaW5oZXJpdDtcbiAgXHRcdFx0bWFyZ2luOiAwIDAgMTVweCAwO1xuICBcdFx0fVxuICBcdFx0YWRkcmVzcyB7XG4gIFx0XHRcdEBpbmNsdWRlIGhlYWQtbGlnaHQ7XG4gIFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbm9ybWFsLTAyKTtcbiAgXHRcdH1cbiAgXHR9XG4gIFx0Lm1hcC13cmFwcGVyIHtcbiAgXHRcdG1hcmdpbjogMzBweCAwIDAgMDtcbiAgXHRcdGJvcmRlcjogNHB4IHNvbGlkICR3aGl0ZTtcbiAgXHRcdEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoNHB4KTtcbiAgXHRcdEBpbmNsdWRlIGJveC1zaGFkb3coMHB4IDJweCA1cHggcmdiKDI5LCA2MSwgMTA3KSk7XG4gIFx0XHRpZnJhbWUge1xuICBcdFx0XHR3aWR0aDogJGZ1bGw7XG4gIFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuICBcdFx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgXHRcdH1cbiAgXHR9XG4gIH1cbn1cblxuLmJhY2stdG8tdG9wIHtcbiAgcG9zaXRpb246ICRmZDtcbiAgYmFja2dyb3VuZDogJGRhcmstYmx1ZS0wMztcbiAgY29sb3I6ICR3aGl0ZTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDUwcHgpO1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xuICBAaW5jbHVkZSBvcGFjaXR5KDApO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjJzIGVhc2UtaW4tb3V0KTtcbiAgJjpob3ZlciB7XG4gIFx0aSB7XG4gIFx0XHRjb2xvcjogJHdoaXRlO1xuICBcdH1cbiAgfVxuICAmOmZvY3VzIHtcbiAgXHRjb2xvcjogJHdoaXRlO1xuICB9XG4gICYuc2hvdyB7XG4gIFx0QGluY2x1ZGUgb3BhY2l0eSgxKTtcbiAgXHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjJzIGVhc2UtaW4tb3V0KTtcbiAgfVxuICBpIHtcbiAgXHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW1lZGl1bS0wMik7XG4gIFx0cGFkZGluZy10b3A6IDZweDtcbiAgfVxufVxuXG5cblxuXG5cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzViY2M3MztcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/public/components/home/home.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/public/components/home/home.component.ts ***!
    \**********************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPublicComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nicky-lenaers/ngx-scroll-to */
    "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(_scrollToService, fb) {
        _classCallCheck(this, HomeComponent);

        this._scrollToService = _scrollToService;
        this.fb = fb;
        this.isNavExpanded = false;
        this.isMobile = false;
        this.activeLink = "";
      }

      _createClass(HomeComponent, [{
        key: "toggleNav",
        value: function toggleNav() {
          this.isNavExpanded = !this.isNavExpanded;
        }
      }, {
        key: "gotoContentSection",
        value: function gotoContentSection(id) {
          var config = {
            target: id,
            offset: -90
          };
          this.activeLink = id;
          this.isNavExpanded = !this.isNavExpanded;

          this._scrollToService.scrollTo(config);
        }
      }, {
        key: "isActiveLink",
        value: function isActiveLink(id) {
          return id == this.activeLink ? 'active-link' : '';
        }
      }, {
        key: "onWindowScroll",
        value: function onWindowScroll($event) {
          if (!this.isMobile) {
            var navHeight = document.querySelector('.navbar-collapse').clientHeight;
            var navItems = this.allNavs.nativeElement.querySelectorAll('.nav-link');
            var fromTop = window.scrollY + navHeight + 70;
            var scrollItems = [];
            var curElem = [];
            navItems.forEach(function (elem) {
              var target = elem.id.split('-');
              scrollItems.push(target[0]);
            });
            scrollItems.forEach(function (elem, index) {
              if (elem != "") {
                if (document.getElementById(elem).offsetTop < fromTop) {
                  return curElem.push(elem);
                }
              }
            });
            curElem = curElem[curElem.length - 1];
            if (this.activeLink != "" || this.activeLink != "contact") this.activeLink = curElem;
          }
        }
      }, {
        key: "submitContactForm",
        value: function submitContactForm() {
          var _this6 = this;

          if (this.contactForm.invalid) {
            Object.keys(this.contactForm.controls).forEach(function (key) {
              var abstractControl = _this6.contactForm.get(key);

              if (abstractControl.value == "") {
                abstractControl.markAsDirty();
              }
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          if (window.innerWidth <= 991) this.isMobile = true;else this.isMobile = false;

          window.onresize = function () {
            _this7.isMobile = window.innerWidth <= 991;
          };

          this.contactForm = this.fb.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nav', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], HomeComponent.prototype, "allNavs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], HomeComponent.prototype, "onWindowScroll", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/public/components/home/home.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/public/components/login/login.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/public/components/login/login.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicComponentsLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-header {\n  position: fixed;\n  width: 100% !important;\n  top: 0;\n  z-index: 1001;\n}\n.login-header .navbar {\n  padding: 15px 15px 12px 15px !important;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);\n}\n.login-header .navbar .navbar-brand {\n  width: 265px;\n  height: 50px;\n  background: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/logo-dark.png') no-repeat left center;\n  text-indent: -1000px;\n  margin: 0;\n  padding: 0;\n}\n.login-container {\n  background: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/login-cover.jpg') no-repeat center center;\n  background-size: cover;\n  height: 100vh;\n}\n.login-container:before {\n  content: \"\";\n  position: absolute;\n  width: 100% !important;\n  height: 100% !important;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.login-container .login-form-wrapper {\n  margin: 150px 0 0 0;\n}\n.login-container .login-form-wrapper h5 {\n  font-size: 1.6rem;\n  padding: 10px 0 25px 0;\n  color: #191c1e;\n}\n.login-container .login-form-wrapper h5 a {\n  font-size: inherit !important;\n}\n.login-container .login-form-wrapper h4 {\n  padding: 0;\n  margin: 0 0 20px 0;\n  font-size: 2.2rem;\n  padding: 0;\n  color: #ffffff;\n}\n.login-container .login-form-wrapper .input-box .forgot-password {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #5bcc73;\n}\n.login-container .submit-box {\n  position: relative;\n  clear: both;\n  text-align: center;\n  margin: 30px 0 10px 0;\n  float: left;\n  width: 100% !important;\n}\n.login-container .submit-box .btn {\n  height: 40px;\n}\n.login-container .submit-box .login-loader {\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 27px;\n  width: 27px;\n  margin: -14px 0 0 -14px;\n  border: 3px rgba(255, 255, 255, 0.25) solid;\n  border-top: 3px #ffffff solid;\n  border-radius: 50% !important;\n  -webkit-animation: spin2 1s infinite linear;\n  animation: spin2 1s infinite linear;\n}\n@-webkit-keyframes spin2 {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes spin2 {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9wdWJsaWMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3B1YmxpYy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy9taXhpbnMuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNDLGVDRkc7RURHSCxzQkN1SEs7RUR0SEwsTUFBQTtFQUNBLGFBQUE7QUVIRDtBRklDO0VBQ0MsdUNBQUE7RUFDQSx5QkN3Rk07RUU1RU4sMENIWEE7RUdZQSwrQ0haQTtFR2FBLGtESGJBO0FFQUY7QUZDRTtFQUNDLFlBQUE7RUFDRyxZQUFBO0VBQ0gsb0hBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FFQ0g7QUZHQTtFQUNDLHdIQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FFQUQ7QUZDQztFQUNDLFdBQUE7RUFDQSxrQkN6Qkc7RUQwQkgsc0JDK0ZJO0VEOUZKLHVCQzhGSTtFRDdGSixvQ0FBQTtBRUNGO0FGQ0M7RUFDQSxtQkFBQTtBRUNEO0FGQUM7RUljQyxpQkFBQTtFSlpBLHNCQUFBO0VBQ0EsY0NvQ1M7QUNsQ1g7QUZERTtFQUNDLDZCQUFBO0FFR0g7QUZBQztFQUNDLFVBQUE7RUFDQSxrQkFBQTtFSUlBLGlCQUFBO0VKRkEsVUFBQTtFQUNBLGNDa0RNO0FDaERSO0FGQ0U7RUluQkEsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQWFBLGlCQUFBO0VKS0csY0NYUTtBQ2dCYjtBRkRBO0VBQ0Msa0JDdkRJO0VEd0RKLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQzRESztBQ3pETjtBRkZDO0VBQ0MsWUFBQTtBRUlGO0FGRkM7RUFDQyxjQUFBO0VBQ0Esa0JDbkVHO0VEb0VILFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDJDQUFBO0VBQ0EsNkJBQUE7RUd2RUQsNkJBQUE7RUh5RUMsMkNBQUE7RUFDUSxtQ0FBQTtBRU1WO0FGSEE7RUFDRTtJQUNFLCtCQUFBO0lBQ1EsdUJBQUE7RUVLVjtFRkhBO0lBQ0UsaUNBQUE7SUFDUSx5QkFBQTtFRUtWO0FBQ0Y7QUZIQTtFQUNFO0lBQ0UsK0JBQUE7SUFDUSx1QkFBQTtJQUNSLCtCQUFBO0lBQ1EsdUJBQUE7RUVLVjtFRkhBO0lBQ0UsaUNBQUE7SUFDUSx5QkFBQTtJQUNSLGlDQUFBO0lBQ1EseUJBQUE7RUVLVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHVibGljL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmxvZ2luLWhlYWRlciB7XG5cdHBvc2l0aW9uOiAkZmQ7XG5cdHdpZHRoOiAkZnVsbDtcblx0dG9wOiAwO1xuXHR6LWluZGV4OiAxMDAxO1xuXHQubmF2YmFyIHtcblx0XHRwYWRkaW5nOiAxNXB4IDE1cHggMTJweCAxNXB4ICFpbXBvcnRhbnQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuXHRcdEBpbmNsdWRlIGJveC1zaGFkb3coMHB4IDBweCAycHggcmdiYSgkYmxhY2ssIDAuMikpO1xuXHRcdC5uYXZiYXItYnJhbmQge1xuXHRcdFx0d2lkdGg6IDI2NXB4O1xuICAgXHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0YmFja2dyb3VuZDogdXJsKCcjeyRpbWFnZXN9L2xvZ28tZGFyay5wbmcnKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7XG5cdFx0XHR0ZXh0LWluZGVudDogLTEwMDBweDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0fVxuXHR9XG59XG4ubG9naW4tY29udGFpbmVyIHtcblx0YmFja2dyb3VuZDogdXJsKCcjeyRpbWFnZXN9L2xvZ2luLWNvdmVyLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHQmOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0d2lkdGg6ICRmdWxsO1xuXHRcdGhlaWdodDogJGZ1bGw7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkYmxhY2ssIDAuNik7XG5cdH1cblx0LmxvZ2luLWZvcm0td3JhcHBlciB7XG5cdG1hcmdpbjogMTUwcHggMCAwIDA7XG5cdGg1IHtcblx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbCk7XG5cdFx0cGFkZGluZzogMTBweCAwIDI1cHggMDtcblx0XHRjb2xvcjogJGdyZXktOTAwO1xuXHRcdGEge1xuXHRcdFx0Zm9udC1zaXplOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG5cdFx0fVx0XG5cdH1cblx0aDQge1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bWFyZ2luOiAwIDAgMjBweCAwO1xuXHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtaDQpO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0Y29sb3I6ICR3aGl0ZTtcblx0fVxuXHQuaW5wdXQtYm94IHtcblx0XHQuZm9yZ290LXBhc3N3b3JkIHtcblx0XHRcdEBpbmNsdWRlIGRlc3AtcmVndWxhcjtcbiAgXHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG4gIFx0XHRcdGNvbG9yOiAkbGltZS1ncmVlbjtcblx0XHR9XG5cdH1cbn1cbi5zdWJtaXQtYm94IHtcblx0cG9zaXRpb246ICRyZWw7XG5cdGNsZWFyOiBib3RoO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbjogMzBweCAwIDEwcHggMDtcblx0ZmxvYXQ6IGxlZnQ7XG5cdHdpZHRoOiAkZnVsbDtcblx0LmJ0biB7XG5cdFx0aGVpZ2h0OiA0MHB4O1xuXHR9XG5cdC5sb2dpbi1sb2FkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246ICRhYnM7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGhlaWdodDogMjdweDtcbiAgd2lkdGg6IDI3cHg7XG4gIG1hcmdpbjogLTE0cHggMCAwIC0xNHB4O1xuICBib3JkZXI6IDNweCByZ2JhKCR3aGl0ZSwgMC4yNSkgc29saWQ7XG4gIGJvcmRlci10b3A6IDNweCAkd2hpdGUgc29saWQ7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoNTAlKTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4yIDFzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICBhbmltYXRpb246IHNwaW4yIDFzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4yIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4yIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG59XG5cblxuXG59XG4iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1YmNjNzM7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4OyIsIi5sb2dpbi1oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMTtcbn1cbi5sb2dpbi1oZWFkZXIgLm5hdmJhciB7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxMnB4IDE1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubG9naW4taGVhZGVyIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIHdpZHRoOiAyNjVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvLWRhcmsucG5nXCIpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcbiAgdGV4dC1pbmRlbnQ6IC0xMDAwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ2luLWNvdmVyLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5sb2dpbi1jb250YWluZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4tZm9ybS13cmFwcGVyIHtcbiAgbWFyZ2luOiAxNTBweCAwIDAgMDtcbn1cbi5sb2dpbi1jb250YWluZXIgLmxvZ2luLWZvcm0td3JhcHBlciBoNSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwYWRkaW5nOiAxMHB4IDAgMjVweCAwO1xuICBjb2xvcjogIzE5MWMxZTtcbn1cbi5sb2dpbi1jb250YWluZXIgLmxvZ2luLWZvcm0td3JhcHBlciBoNSBhIHtcbiAgZm9udC1zaXplOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tY29udGFpbmVyIC5sb2dpbi1mb3JtLXdyYXBwZXIgaDQge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5sb2dpbi1jb250YWluZXIgLmxvZ2luLWZvcm0td3JhcHBlciAuaW5wdXQtYm94IC5mb3Jnb3QtcGFzc3dvcmQge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzViY2M3Mztcbn1cbi5sb2dpbi1jb250YWluZXIgLnN1Ym1pdC1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNsZWFyOiBib3RoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMzBweCAwIDEwcHggMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tY29udGFpbmVyIC5zdWJtaXQtYm94IC5idG4ge1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubG9naW4tY29udGFpbmVyIC5zdWJtaXQtYm94IC5sb2dpbi1sb2FkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBoZWlnaHQ6IDI3cHg7XG4gIHdpZHRoOiAyN3B4O1xuICBtYXJnaW46IC0xNHB4IDAgMCAtMTRweDtcbiAgYm9yZGVyOiAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSBzb2xpZDtcbiAgYm9yZGVyLXRvcDogM3B4ICNmZmZmZmYgc29saWQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjIgMXMgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb246IHNwaW4yIDFzIGluZmluaXRlIGxpbmVhcjtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluMiB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4yIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/public/components/login/login.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/public/components/login/login.component.ts ***!
    \************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPublicComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_services_login_check_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../.././api/services/login-check.service */
    "./src/app/api/services/login-check.service.ts");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../.././api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, loginCheckService, userService, sharedService, cookieService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.loginCheckService = loginCheckService;
        this.userService = userService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.userEmailId = "";
        this.userPassword = "";
        this.userType = "";
        this.isInvalidPassword = false;
        this.isInvalidLogin = false;
        this.isSubmitted = true;
      }

      _createClass(LoginComponent, [{
        key: "clearErrors",
        value: function clearErrors() {}
      }, {
        key: "onInputChange",
        value: function onInputChange() {
          this.isInvalidLogin = false;
          this.isInvalidPassword = false;
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails(id) {
          var _this8 = this;

          this.userService.getUserById(id).subscribe(function (res) {
            var user = res[0];

            _this8.userService.getRolesByUserId(id).subscribe(function (data) {
              user.role = data[0].roleName;

              _this8.sharedService.setUserDetails(user);

              _this8.sharedService.isUserLogged(true);

              _this8.cookieService.set('userRole', user.role);

              if (user.role == 'Admin' || user.role == 'Staff' || user.role == 'Security') {
                _this8.router.navigateByUrl('/ams');
              } else if (user.role == 'Owner' || user.role == 'Tenant') {
                _this8.router.navigateByUrl('/user');
              } else {}

              _this8.isSubmitted = true;
            }, function (error) {
              console.log(error);
              _this8.isSubmitted = true;
            });
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this9 = this;

          this.isSubmitted = false;
          var params = {
            password: this.userPassword,
            emailId: this.userEmailId
          };
          this.loginCheckService.AuthenticateUserByIdPassword(params).subscribe(function (res) {
            if (res.length > 0) {
              _this9.isInvalidLogin = false;
              _this9.isInvalidPassword = false;
              var data = res[0]; //store the tooken in cookie

              _this9.cookieService.set('token', data.tokenString);

              _this9.cookieService.set('userId', data.userId);

              _this9.getUserDetails(data.userId);
            } else {
              if (res.errorMessage) {
                _this9.isInvalidLogin = true;
              } else {
                _this9.isInvalidPassword = true;
              }
            }
          }, function (error) {
            console.log(error);
            _this9.isSubmitted = true;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _api_services_login_check_service__WEBPACK_IMPORTED_MODULE_3__["LoginCheckService"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/public/components/login/login.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_services_login_check_service__WEBPACK_IMPORTED_MODULE_3__["LoginCheckService"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/public/components/privacy/privacy.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/public/components/privacy/privacy.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicComponentsPrivacyPrivacyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9jb21wb25lbnRzL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/public/components/privacy/privacy.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/public/components/privacy/privacy.component.ts ***!
    \****************************************************************/

  /*! exports provided: PrivacyComponent */

  /***/
  function srcAppPublicComponentsPrivacyPrivacyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function () {
      return PrivacyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrivacyComponent =
    /*#__PURE__*/
    function () {
      function PrivacyComponent() {
        _classCallCheck(this, PrivacyComponent);
      }

      _createClass(PrivacyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivacyComponent;
    }();

    PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privacy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/components/privacy/privacy.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacy.component.scss */
      "./src/app/public/components/privacy/privacy.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PrivacyComponent);
    /***/
  },

  /***/
  "./src/app/public/components/signup/signup.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/public/components/signup/signup.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicComponentsSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".signup-header {\n  position: fixed;\n  width: 100% !important;\n  top: 0;\n  z-index: 1001;\n}\n.signup-header .navbar {\n  padding: 15px 15px 12px 15px !important;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);\n}\n.signup-header .navbar .navbar-brand {\n  width: 265px;\n  height: 50px;\n  background: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/logo-dark.png') no-repeat left center;\n  text-indent: -1000px;\n  margin: 0;\n  padding: 0;\n}\n.signup-container {\n  background: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/login-cover.jpg') no-repeat center center;\n  background-size: cover;\n  height: 100vh;\n}\n.signup-container:before {\n  content: \"\";\n  position: absolute;\n  width: 100% !important;\n  height: 100% !important;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.signup-container .signup-form-wrapper {\n  margin: 150px 0 0 0;\n}\n.signup-container .signup-form-wrapper h5 {\n  font-size: 1.6rem;\n  padding: 10px 0 25px 0;\n  color: #191c1e;\n}\n.signup-container .signup-form-wrapper h5 a {\n  font-size: inherit !important;\n}\n.signup-container .signup-form-wrapper h4 {\n  padding: 0;\n  margin: 0 0 20px 0;\n  font-size: 2.2rem;\n  padding: 0;\n  color: #ffffff;\n}\n.signup-container .signup-form-wrapper input {\n  border-bottom: 1px solid #eaeaea;\n}\n.signup-container .signup-form-wrapper .input-box .forgot-password {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #5bcc73;\n}\n.signup-container .signup-form-wrapper .submit-box {\n  clear: both;\n  text-align: center;\n  padding: 30px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9wdWJsaWMvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcHVibGljL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDQyxlQ0ZHO0VER0gsc0JDdUhLO0VEdEhMLE1BQUE7RUFDQSxhQUFBO0FFSEQ7QUZJQztFQUNDLHVDQUFBO0VBQ0EseUJDd0ZNO0VFNUVOLDBDSFhBO0VHWUEsK0NIWkE7RUdhQSxrREhiQTtBRUFGO0FGQ0U7RUFDQyxZQUFBO0VBQ0csWUFBQTtFQUNILG9IQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRUNIO0FGR0E7RUFDQyx3SEFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBRUFEO0FGQ0M7RUFDQyxXQUFBO0VBQ0Esa0JDekJHO0VEMEJILHNCQytGSTtFRDlGSix1QkM4Rkk7RUQ3Rkosb0NBQUE7QUVDRjtBRkNDO0VBQ0EsbUJBQUE7QUVDRDtBRkFDO0VJY0MsaUJBQUE7RUpaQSxzQkFBQTtFQUNBLGNDb0NTO0FDbENYO0FGREU7RUFDQyw2QkFBQTtBRUdIO0FGQUM7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7RUlJQSxpQkFBQTtFSkZBLFVBQUE7RUFDQSxjQ2tETTtBQ2hEUjtBRkFDO0VBQ0MsZ0NBQUE7QUVFRjtBRkNFO0VJdEJBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFhQSxpQkFBQTtFSlFHLGNDZFE7QUNtQmI7QUZGQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FFSUYiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5zaWdudXAtaGVhZGVyIHtcblx0cG9zaXRpb246ICRmZDtcblx0d2lkdGg6ICRmdWxsO1xuXHR0b3A6IDA7XG5cdHotaW5kZXg6IDEwMDE7XG5cdC5uYXZiYXIge1xuXHRcdHBhZGRpbmc6IDE1cHggMTVweCAxMnB4IDE1cHggIWltcG9ydGFudDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG5cdFx0QGluY2x1ZGUgYm94LXNoYWRvdygwcHggMHB4IDJweCByZ2JhKCRibGFjaywgMC4yKSk7XG5cdFx0Lm5hdmJhci1icmFuZCB7XG5cdFx0XHR3aWR0aDogMjY1cHg7XG4gICBcdFx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiB1cmwoJyN7JGltYWdlc30vbG9nby1kYXJrLnBuZycpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcblx0XHRcdHRleHQtaW5kZW50OiAtMTAwMHB4O1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0cGFkZGluZzogMDtcblx0XHR9XG5cdH1cbn1cbi5zaWdudXAtY29udGFpbmVyIHtcblx0YmFja2dyb3VuZDogdXJsKCcjeyRpbWFnZXN9L2xvZ2luLWNvdmVyLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHQmOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0d2lkdGg6ICRmdWxsO1xuXHRcdGhlaWdodDogJGZ1bGw7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkYmxhY2ssIDAuNik7XG5cdH1cblx0LnNpZ251cC1mb3JtLXdyYXBwZXIge1xuXHRtYXJnaW46IDE1MHB4IDAgMCAwO1xuXHRoNSB7XG5cdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xuXHRcdHBhZGRpbmc6IDEwcHggMCAyNXB4IDA7XG5cdFx0Y29sb3I6ICRncmV5LTkwMDtcdFxuXHRcdGEge1xuXHRcdFx0Zm9udC1zaXplOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG5cdFx0fVx0XG5cdH1cblx0aDQge1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bWFyZ2luOiAwIDAgMjBweCAwO1xuXHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtaDQpO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0Y29sb3I6ICR3aGl0ZTtcblx0fVxuXHRpbnB1dCB7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmV5LTQwMDtcblx0fVxuXHQuaW5wdXQtYm94IHtcblx0XHQuZm9yZ290LXBhc3N3b3JkIHtcblx0XHRcdEBpbmNsdWRlIGRlc3AtcmVndWxhcjtcbiAgXHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG4gIFx0XHRcdGNvbG9yOiAkbGltZS1ncmVlbjtcblx0XHR9XG5cdH1cblx0LnN1Ym1pdC1ib3gge1xuXHRcdGNsZWFyOiBib3RoO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRwYWRkaW5nOiAzMHB4IDAgMCAwO1xuXHR9XG59XG59XG4iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1YmNjNzM7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4OyIsIi5zaWdudXAtaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDE7XG59XG4uc2lnbnVwLWhlYWRlciAubmF2YmFyIHtcbiAgcGFkZGluZzogMTVweCAxNXB4IDEycHggMTVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5zaWdudXAtaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIHdpZHRoOiAyNjVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvLWRhcmsucG5nXCIpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcbiAgdGV4dC1pbmRlbnQ6IC0xMDAwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNpZ251cC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dpbi1jb3Zlci5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uc2lnbnVwLWNvbnRhaW5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uc2lnbnVwLWNvbnRhaW5lciAuc2lnbnVwLWZvcm0td3JhcHBlciB7XG4gIG1hcmdpbjogMTUwcHggMCAwIDA7XG59XG4uc2lnbnVwLWNvbnRhaW5lciAuc2lnbnVwLWZvcm0td3JhcHBlciBoNSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwYWRkaW5nOiAxMHB4IDAgMjVweCAwO1xuICBjb2xvcjogIzE5MWMxZTtcbn1cbi5zaWdudXAtY29udGFpbmVyIC5zaWdudXAtZm9ybS13cmFwcGVyIGg1IGEge1xuICBmb250LXNpemU6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cbi5zaWdudXAtY29udGFpbmVyIC5zaWdudXAtZm9ybS13cmFwcGVyIGg0IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uc2lnbnVwLWNvbnRhaW5lciAuc2lnbnVwLWZvcm0td3JhcHBlciBpbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xufVxuLnNpZ251cC1jb250YWluZXIgLnNpZ251cC1mb3JtLXdyYXBwZXIgLmlucHV0LWJveCAuZm9yZ290LXBhc3N3b3JkIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM1YmNjNzM7XG59XG4uc2lnbnVwLWNvbnRhaW5lciAuc2lnbnVwLWZvcm0td3JhcHBlciAuc3VibWl0LWJveCB7XG4gIGNsZWFyOiBib3RoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMCAwIDA7XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIGNvbG9yOiAkdGM7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHIpO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICAvLyBEaXJlY3Rpb24gaGFzIGJlZW4gb21pdHRlZCBhbmQgaGFwcGVucyB0byBiZSBhIGNvbG9yLXN0b3BcbiAgQGlmIGlzLWRpcmVjdGlvbigkZGlyZWN0aW9uKSA9PSBmYWxzZSB7XG4gICAgJGNvbG9yLXN0b3BzOiAkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHM7XG4gICAgJGRpcmVjdGlvbjogMTgwZGVnO1xuICB9XG5cbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/public/components/signup/signup.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/public/components/signup/signup.component.ts ***!
    \**************************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppPublicComponentsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent() {
        _classCallCheck(this, SignupComponent);

        this.userEmailId = "";
        this.userPassword = "";
        this.userTerms = false;
        this.isEmailAlreadyExists = false;
      }

      _createClass(SignupComponent, [{
        key: "clearErrors",
        value: function clearErrors() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/components/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/public/components/signup/signup.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SignupComponent);
    /***/
  },

  /***/
  "./src/app/public/public-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/public/public-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: routes, PublicRoutingModule */

  /***/
  function srcAppPublicPublicRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicRoutingModule", function () {
      return PublicRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/public/components/home/home.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/public/components/login/login.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/public/components/signup/signup.component.ts");
    /* harmony import */


    var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/forgot-password/forgot-password.component */
    "./src/app/public/components/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/privacy/privacy.component */
    "./src/app/public/components/privacy/privacy.component.ts");

    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'signup',
      component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    }, {
      path: 'forgotpassword',
      component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"]
    }, {
      path: 'privacy',
      component: _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyComponent"]
    }];

    var PublicRoutingModule = function PublicRoutingModule() {
      _classCallCheck(this, PublicRoutingModule);
    };

    PublicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PublicRoutingModule);
    /***/
  },

  /***/
  "./src/app/public/public.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/public/public.module.ts ***!
    \*****************************************/

  /*! exports provided: PublicModule */

  /***/
  function srcAppPublicPublicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicModule", function () {
      return PublicModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _public_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./public-routing.module */
    "./src/app/public/public-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_wow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-wow */
    "./node_modules/ngx-wow/esm2015/ngx-wow.js");
    /* harmony import */


    var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @nicky-lenaers/ngx-scroll-to */
    "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! .././auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/public/components/home/home.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/public/components/login/login.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/public/components/signup/signup.component.ts");
    /* harmony import */


    var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/forgot-password/forgot-password.component */
    "./src/app/public/components/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/privacy/privacy.component */
    "./src/app/public/components/privacy/privacy.component.ts");

    var PublicModule = function PublicModule() {
      _classCallCheck(this, PublicModule);
    };

    PublicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"], _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_14__["PrivacyComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_public_routing_module__WEBPACK_IMPORTED_MODULE_3__["routes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _public_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublicRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_7__["NgwWowModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_8__["ScrollToModule"].forRoot()],
      providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    })], PublicModule);
    /***/
  }
}]);
//# sourceMappingURL=public-public-module-es5.js.map