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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ams-ams-module"], {
  /***/
  "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js ***!
    \******************************************************************/

  /*! exports provided: AgmBicyclingLayer, AgmCircle, AgmCoreModule, AgmDataLayer, AgmFitBounds, AgmGeocoder, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer, CircleManager, ControlPosition, DataLayerManager, FitBoundsAccessor, GeocoderLocationType, GeocoderStatus, GoogleMapsAPIWrapper, GoogleMapsScriptProtocol, InfoWindowManager, KmlLayerManager, LAZY_MAPS_API_CONFIG, LayerManager, LazyMapsAPILoader, MapTypeId, MapsAPILoader, MarkerManager, NoOpMapsAPILoader, PolygonManager, PolylineManager, RectangleManager, ScaleControlStyle, ZoomControlStyle, ɵa, ɵb, ɵc, ɵd, ɵe */

  /***/
  function node_modulesAgmCore__ivy_ngcc__Fesm2015AgmCoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmBicyclingLayer", function () {
      return AgmBicyclingLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmCircle", function () {
      return AgmCircle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function () {
      return AgmCoreModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function () {
      return AgmDataLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function () {
      return AgmFitBounds;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmGeocoder", function () {
      return AgmGeocoder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function () {
      return AgmInfoWindow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function () {
      return AgmKmlLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmMap", function () {
      return AgmMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmMarker", function () {
      return AgmMarker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolygon", function () {
      return AgmPolygon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolyline", function () {
      return AgmPolyline;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolylineIcon", function () {
      return AgmPolylineIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function () {
      return AgmPolylinePoint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmRectangle", function () {
      return AgmRectangle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmTransitLayer", function () {
      return AgmTransitLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CircleManager", function () {
      return CircleManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlPosition", function () {
      return ControlPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataLayerManager", function () {
      return DataLayerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function () {
      return FitBoundsAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeocoderLocationType", function () {
      return GeocoderLocationType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeocoderStatus", function () {
      return GeocoderStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function () {
      return GoogleMapsAPIWrapper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function () {
      return GoogleMapsScriptProtocol;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function () {
      return InfoWindowManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function () {
      return KmlLayerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function () {
      return LAZY_MAPS_API_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayerManager", function () {
      return LayerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function () {
      return LazyMapsAPILoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapTypeId", function () {
      return MapTypeId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function () {
      return MapsAPILoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkerManager", function () {
      return MarkerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function () {
      return NoOpMapsAPILoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolygonManager", function () {
      return PolygonManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolylineManager", function () {
      return PolylineManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RectangleManager", function () {
      return RectangleManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScaleControlStyle", function () {
      return ScaleControlStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZoomControlStyle", function () {
      return ZoomControlStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return FitBoundsService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return coreDirectives;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return WindowRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return DocumentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return BROWSER_GLOBALS_PROVIDERS;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["*"];

    var MapsAPILoader = function MapsAPILoader() {
      _classCallCheck(this, MapsAPILoader);
    };

    MapsAPILoader.ɵfac = function MapsAPILoader_Factory(t) {
      return new (t || MapsAPILoader)();
    };

    MapsAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MapsAPILoader,
      factory: MapsAPILoader.ɵfac
    });
    /**
     * Wrapper class that handles the communication with the Google Maps Javascript
     * API v3
     */

    var GoogleMapsAPIWrapper =
    /*#__PURE__*/
    function () {
      function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;

        _classCallCheck(this, GoogleMapsAPIWrapper);

        this._loader = _loader;
        this._zone = _zone;
        this._map = new Promise(function (resolve) {
          _this._mapResolver = resolve;
        });
      }

      _createClass(GoogleMapsAPIWrapper, [{
        key: "createMap",
        value: function createMap(el, mapOptions) {
          var _this2 = this;

          return this._zone.runOutsideAngular(function () {
            return _this2._loader.load().then(function () {
              var map = new google.maps.Map(el, mapOptions);

              _this2._mapResolver(map);

              return;
            });
          });
        }
      }, {
        key: "setMapOptions",
        value: function setMapOptions(options) {
          var _this3 = this;

          return this._zone.runOutsideAngular(function () {
            _this3._map.then(function (m) {
              m.setOptions(options);
            });
          });
        }
        /**
         * Creates a google map marker with the map context
         */

      }, {
        key: "createMarker",
        value: function createMarker() {
          var _this4 = this;

          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var addToMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this._zone.runOutsideAngular(function () {
            return _this4._map.then(function (map) {
              if (addToMap) {
                options.map = map;
              }

              return new google.maps.Marker(options);
            });
          });
        }
      }, {
        key: "createInfoWindow",
        value: function createInfoWindow(options) {
          var _this5 = this;

          return this._zone.runOutsideAngular(function () {
            return _this5._map.then(function () {
              return new google.maps.InfoWindow(options);
            });
          });
        }
        /**
         * Creates a google.map.Circle for the current map.
         */

      }, {
        key: "createCircle",
        value: function createCircle(options) {
          var _this6 = this;

          return this._zone.runOutsideAngular(function () {
            return _this6._map.then(function (map) {
              if (typeof options.strokePosition === 'string') {
                options.strokePosition = google.maps.StrokePosition[options.strokePosition];
              }

              options.map = map;
              return new google.maps.Circle(options);
            });
          });
        }
        /**
         * Creates a google.map.Rectangle for the current map.
         */

      }, {
        key: "createRectangle",
        value: function createRectangle(options) {
          var _this7 = this;

          return this._zone.runOutsideAngular(function () {
            return _this7._map.then(function (map) {
              options.map = map;
              return new google.maps.Rectangle(options);
            });
          });
        }
      }, {
        key: "createPolyline",
        value: function createPolyline(options) {
          var _this8 = this;

          return this._zone.runOutsideAngular(function () {
            return _this8.getNativeMap().then(function (map) {
              var line = new google.maps.Polyline(options);
              line.setMap(map);
              return line;
            });
          });
        }
      }, {
        key: "createPolygon",
        value: function createPolygon(options) {
          var _this9 = this;

          return this._zone.runOutsideAngular(function () {
            return _this9.getNativeMap().then(function (map) {
              var polygon = new google.maps.Polygon(options);
              polygon.setMap(map);
              return polygon;
            });
          });
        }
        /**
         * Creates a new google.map.Data layer for the current map
         */

      }, {
        key: "createDataLayer",
        value: function createDataLayer(options) {
          var _this10 = this;

          return this._zone.runOutsideAngular(function () {
            return _this10._map.then(function (m) {
              var data = new google.maps.Data(options);
              data.setMap(m);
              return data;
            });
          });
        }
        /**
         * Creates a TransitLayer instance for a map
         * @param {TransitLayerOptions} options - used for setting layer options
         * @returns {Promise<TransitLayer>} a new transit layer object
         */

      }, {
        key: "createTransitLayer",
        value: function createTransitLayer(options) {
          var _this11 = this;

          return this._zone.runOutsideAngular(function () {
            return _this11._map.then(function (map) {
              var newLayer = new google.maps.TransitLayer();
              newLayer.setMap(options.visible ? map : null);
              return newLayer;
            });
          });
        }
        /**
         * Creates a BicyclingLayer instance for a map
         * @param {BicyclingLayerOptions} options - used for setting layer options
         * @returns {Promise<BicyclingLayer>} a new bicycling layer object
         */

      }, {
        key: "createBicyclingLayer",
        value: function createBicyclingLayer(options) {
          var _this12 = this;

          return this._zone.runOutsideAngular(function () {
            return _this12._map.then(function (map) {
              var newLayer = new google.maps.BicyclingLayer();
              newLayer.setMap(options.visible ? map : null);
              return newLayer;
            });
          });
        }
        /**
         * Determines if given coordinates are insite a Polygon path.
         */

      }, {
        key: "containsLocation",
        value: function containsLocation(latLng, polygon) {
          return google.maps.geometry.poly.containsLocation(latLng, polygon);
        }
      }, {
        key: "subscribeToMapEvent",
        value: function subscribeToMapEvent(eventName) {
          var _this13 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this13._map.then(function (m) {
              m.addListener(eventName, function (arg) {
                _this13._zone.run(function () {
                  return observer.next(arg);
                });
              });
            });
          });
        }
      }, {
        key: "clearInstanceListeners",
        value: function clearInstanceListeners() {
          var _this14 = this;

          return this._zone.runOutsideAngular(function () {
            _this14._map.then(function (map) {
              google.maps.event.clearInstanceListeners(map);
            });
          });
        }
      }, {
        key: "setCenter",
        value: function setCenter(latLng) {
          var _this15 = this;

          return this._zone.runOutsideAngular(function () {
            return _this15._map.then(function (map) {
              return map.setCenter(latLng);
            });
          });
        }
      }, {
        key: "getZoom",
        value: function getZoom() {
          var _this16 = this;

          return this._zone.runOutsideAngular(function () {
            return _this16._map.then(function (map) {
              return map.getZoom();
            });
          });
        }
      }, {
        key: "getBounds",
        value: function getBounds() {
          var _this17 = this;

          return this._zone.runOutsideAngular(function () {
            return _this17._map.then(function (map) {
              return map.getBounds();
            });
          });
        }
      }, {
        key: "getMapTypeId",
        value: function getMapTypeId() {
          var _this18 = this;

          return this._zone.runOutsideAngular(function () {
            return _this18._map.then(function (map) {
              return map.getMapTypeId();
            });
          });
        }
      }, {
        key: "setZoom",
        value: function setZoom(zoom) {
          var _this19 = this;

          return this._zone.runOutsideAngular(function () {
            return _this19._map.then(function (map) {
              return map.setZoom(zoom);
            });
          });
        }
      }, {
        key: "getCenter",
        value: function getCenter() {
          var _this20 = this;

          return this._zone.runOutsideAngular(function () {
            return _this20._map.then(function (map) {
              return map.getCenter();
            });
          });
        }
      }, {
        key: "panTo",
        value: function panTo(latLng) {
          var _this21 = this;

          return this._zone.runOutsideAngular(function () {
            return _this21._map.then(function (map) {
              return map.panTo(latLng);
            });
          });
        }
      }, {
        key: "panBy",
        value: function panBy(x, y) {
          var _this22 = this;

          return this._zone.runOutsideAngular(function () {
            return _this22._map.then(function (map) {
              return map.panBy(x, y);
            });
          });
        }
      }, {
        key: "fitBounds",
        value: function fitBounds(latLng, padding) {
          var _this23 = this;

          return this._zone.runOutsideAngular(function () {
            return _this23._map.then(function (map) {
              return map.fitBounds(latLng, padding);
            });
          });
        }
      }, {
        key: "panToBounds",
        value: function panToBounds(latLng, padding) {
          var _this24 = this;

          return this._zone.runOutsideAngular(function () {
            return _this24._map.then(function (map) {
              return map.panToBounds(latLng, padding);
            });
          });
        }
        /**
         * Returns the native Google Maps Map instance. Be careful when using this instance directly.
         */

      }, {
        key: "getNativeMap",
        value: function getNativeMap() {
          return this._map;
        }
        /**
         * Triggers the given event name on the map instance.
         */

      }, {
        key: "triggerMapEvent",
        value: function triggerMapEvent(eventName) {
          return this._map.then(function (m) {
            return google.maps.event.trigger(m, eventName);
          });
        }
      }]);

      return GoogleMapsAPIWrapper;
    }();

    GoogleMapsAPIWrapper.ɵfac = function GoogleMapsAPIWrapper_Factory(t) {
      return new (t || GoogleMapsAPIWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    GoogleMapsAPIWrapper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GoogleMapsAPIWrapper,
      factory: GoogleMapsAPIWrapper.ɵfac
    });

    GoogleMapsAPIWrapper.ctorParameters = function () {
      return [{
        type: MapsAPILoader
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    GoogleMapsAPIWrapper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], GoogleMapsAPIWrapper);
    /**
     * This class manages Transit and Bicycling Layers for a Google Map instance.
     */

    var LayerManager =
    /*#__PURE__*/
    function () {
      function LayerManager(_wrapper) {
        _classCallCheck(this, LayerManager);

        this._wrapper = _wrapper;
        this._layers = new Map();
      }
      /**
       * Adds a transit layer to a map instance.
       * @param {AgmTransitLayer} layer - a TransitLayer object
       * @param {TransitLayerOptions} options - TransitLayerOptions options
       * @returns void
       */


      _createClass(LayerManager, [{
        key: "addTransitLayer",
        value: function addTransitLayer(layer, options) {
          var newLayer = this._wrapper.createTransitLayer(options);

          this._layers.set(layer, newLayer);
        }
        /**
         * Adds a bicycling layer to a map instance.
         * @param {AgmBicyclingLayer} layer - a bicycling layer object
         * @param {BicyclingLayerOptions} options - BicyclingLayer options
         * @returns void
         */

      }, {
        key: "addBicyclingLayer",
        value: function addBicyclingLayer(layer, options) {
          var newLayer = this._wrapper.createBicyclingLayer(options);

          this._layers.set(layer, newLayer);
        }
        /**
         * Deletes a map layer
         * @param {AgmTransitLayer|AgmBicyclingLayer} layer - the layer to delete
         * @returns  Promise<void>
         */

      }, {
        key: "deleteLayer",
        value: function deleteLayer(layer) {
          var _this25 = this;

          return this._layers.get(layer).then(function (currentLayer) {
            currentLayer.setMap(null);

            _this25._layers["delete"](layer);
          });
        }
        /**
         * Hide/Show a google map layer
         * @param { AgmTransitLayer|AgmBicyclingLayer} layer - the layer to hide/show
         * @param {TransitLayerOptions|BicyclingLayerOptions} options - used to set visibility of the layer
         * @returns Promise<void>
         */

      }, {
        key: "toggleLayerVisibility",
        value: function toggleLayerVisibility(layer, options) {
          var _this26 = this;

          return this._layers.get(layer).then(function (currentLayer) {
            if (!options.visible) {
              currentLayer.setMap(null);
              return;
            } else {
              return _this26._wrapper.getNativeMap().then(function (map) {
                currentLayer.setMap(map);
              });
            }
          });
        }
      }]);

      return LayerManager;
    }();

    LayerManager.ɵfac = function LayerManager_Factory(t) {
      return new (t || LayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper));
    };

    LayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LayerManager,
      factory: LayerManager.ɵfac
    });

    LayerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }];
    };

    LayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper])], LayerManager);
    var layerId = 0;
    /*
     * This directive adds a bicycling layer to a google map instance
     * <agm-bicycling-layer [visible]="true|false"> <agm-bicycling-layer>
     * */

    var AgmBicyclingLayer =
    /*#__PURE__*/
    function () {
      function AgmBicyclingLayer(_manager) {
        _classCallCheck(this, AgmBicyclingLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        /**
         * Hide/show bicycling layer
         */

        this.visible = true;
      }

      _createClass(AgmBicyclingLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addBicyclingLayer(this, {
            visible: this.visible
          });

          this._addedToManager = true;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._addedToManager) {
            return;
          }

          if (changes['visible'] != null) {
            this._manager.toggleLayerVisibility(this, {
              visible: changes['visible'].currentValue
            });
          }
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmBicyclingLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteLayer(this);
        }
      }]);

      return AgmBicyclingLayer;
    }();

    AgmBicyclingLayer.ɵfac = function AgmBicyclingLayer_Factory(t) {
      return new (t || AgmBicyclingLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerManager));
    };

    AgmBicyclingLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmBicyclingLayer,
      selectors: [["agm-bicycling-layer"]],
      inputs: {
        visible: "visible"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    AgmBicyclingLayer.ctorParameters = function () {
      return [{
        type: LayerManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmBicyclingLayer.prototype, "visible", void 0);
    AgmBicyclingLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [LayerManager])], AgmBicyclingLayer);

    var CircleManager =
    /*#__PURE__*/
    function () {
      function CircleManager(_apiWrapper, _zone) {
        _classCallCheck(this, CircleManager);

        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
      }

      _createClass(CircleManager, [{
        key: "addCircle",
        value: function addCircle(circle) {
          this._circles.set(circle, this._apiWrapper.createCircle({
            center: {
              lat: circle.latitude,
              lng: circle.longitude
            },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
          }));
        }
        /**
         * Removes the given circle from the map.
         */

      }, {
        key: "removeCircle",
        value: function removeCircle(circle) {
          var _this27 = this;

          return this._circles.get(circle).then(function (c) {
            c.setMap(null);

            _this27._circles["delete"](circle);
          });
        }
      }, {
        key: "setOptions",
        value: function setOptions(circle, options) {
          return this._circles.get(circle).then(function (c) {
            if (typeof options.strokePosition === 'string') {
              options.strokePosition = google.maps.StrokePosition[options.strokePosition];
            }

            c.setOptions(options);
          });
        }
      }, {
        key: "getBounds",
        value: function getBounds(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.getBounds();
          });
        }
      }, {
        key: "getCenter",
        value: function getCenter(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.getCenter();
          });
        }
      }, {
        key: "getRadius",
        value: function getRadius(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.getRadius();
          });
        }
      }, {
        key: "setCenter",
        value: function setCenter(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setCenter({
              lat: circle.latitude,
              lng: circle.longitude
            });
          });
        }
      }, {
        key: "setEditable",
        value: function setEditable(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setEditable(circle.editable);
          });
        }
      }, {
        key: "setDraggable",
        value: function setDraggable(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setDraggable(circle.draggable);
          });
        }
      }, {
        key: "setVisible",
        value: function setVisible(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setVisible(circle.visible);
          });
        }
      }, {
        key: "setRadius",
        value: function setRadius(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setRadius(circle.radius);
          });
        }
      }, {
        key: "getNativeCircle",
        value: function getNativeCircle(circle) {
          return this._circles.get(circle);
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, circle) {
          var _this28 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var listener = null;

            _this28._circles.get(circle).then(function (c) {
              listener = c.addListener(eventName, function (e) {
                return _this28._zone.run(function () {
                  return observer.next(e);
                });
              });
            });

            return function () {
              if (listener !== null) {
                listener.remove();
              }
            };
          });
        }
      }]);

      return CircleManager;
    }();

    CircleManager.ɵfac = function CircleManager_Factory(t) {
      return new (t || CircleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CircleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CircleManager,
      factory: CircleManager.ɵfac
    });

    CircleManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CircleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CircleManager);
    var AgmCircle_1;

    var AgmCircle = AgmCircle_1 =
    /*#__PURE__*/
    function () {
      function AgmCircle(_manager) {
        _classCallCheck(this, AgmCircle);

        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */

        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */

        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */

        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */

        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */

        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */

        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */

        this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */

        this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */

        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the circle.
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the circle.
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */

        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */

        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on circle mouseout.
         */

        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on circle mouseover.
         */

        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */

        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the circle's radius is changed.
         */

        this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the circle is right-clicked on.
         */

        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
      }
      /** @internal */


      _createClass(AgmCircle, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._manager.addCircle(this);

          this._circleAddedToManager = true;

          this._registerEventListeners();
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._circleAddedToManager) {
            return;
          }

          if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
          }

          if (changes['editable']) {
            this._manager.setEditable(this);
          }

          if (changes['draggable']) {
            this._manager.setDraggable(this);
          }

          if (changes['visible']) {
            this._manager.setVisible(this);
          }

          if (changes['radius']) {
            this._manager.setRadius(this);
          }

          this._updateCircleOptionsChanges(changes);
        }
      }, {
        key: "_updateCircleOptionsChanges",
        value: function _updateCircleOptionsChanges(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmCircle_1._mapOptions.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
          }
        }
      }, {
        key: "_registerEventListeners",
        value: function _registerEventListeners() {
          var _this29 = this;

          var events = new Map();
          events.set('center_changed', this.centerChange);
          events.set('click', this.circleClick);
          events.set('dblclick', this.circleDblClick);
          events.set('drag', this.drag);
          events.set('dragend', this.dragEnd);
          events.set('dragstart', this.dragStart);
          events.set('mousedown', this.mouseDown);
          events.set('mousemove', this.mouseMove);
          events.set('mouseout', this.mouseOut);
          events.set('mouseover', this.mouseOver);
          events.set('mouseup', this.mouseUp);
          events.set('radius_changed', this.radiusChange);
          events.set('rightclick', this.rightClick);
          events.forEach(function (eventEmitter, eventName) {
            _this29._eventSubscriptions.push(_this29._manager.createEventObservable(eventName, _this29).subscribe(function (value) {
              switch (eventName) {
                case 'radius_changed':
                  _this29._manager.getRadius(_this29).then(function (radius) {
                    return eventEmitter.emit(radius);
                  });

                  break;

                case 'center_changed':
                  _this29._manager.getCenter(_this29).then(function (center) {
                    return eventEmitter.emit({
                      lat: center.lat(),
                      lng: center.lng()
                    });
                  });

                  break;

                default:
                  eventEmitter.emit({
                    coords: {
                      lat: value.latLng.lat(),
                      lng: value.latLng.lng()
                    }
                  });
              }
            }));
          });
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._eventSubscriptions.forEach(function (s) {
            s.unsubscribe();
          });

          this._eventSubscriptions = null;

          this._manager.removeCircle(this);
        }
        /**
         * Gets the LatLngBounds of this Circle.
         */

      }, {
        key: "getBounds",
        value: function getBounds() {
          return this._manager.getBounds(this);
        }
      }, {
        key: "getCenter",
        value: function getCenter() {
          return this._manager.getCenter(this);
        }
      }]);

      return AgmCircle;
    }();

    AgmCircle.ɵfac = function AgmCircle_Factory(t) {
      return new (t || AgmCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CircleManager));
    };

    AgmCircle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmCircle,
      selectors: [["agm-circle"]],
      inputs: {
        clickable: "clickable",
        draggable: ["circleDraggable", "draggable"],
        editable: "editable",
        radius: "radius",
        strokePosition: "strokePosition",
        strokeWeight: "strokeWeight",
        visible: "visible",
        latitude: "latitude",
        longitude: "longitude",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        zIndex: "zIndex"
      },
      outputs: {
        centerChange: "centerChange",
        circleClick: "circleClick",
        circleDblClick: "circleDblClick",
        drag: "drag",
        dragEnd: "dragEnd",
        dragStart: "dragStart",
        mouseDown: "mouseDown",
        mouseMove: "mouseMove",
        mouseOut: "mouseOut",
        mouseOver: "mouseOver",
        mouseUp: "mouseUp",
        radiusChange: "radiusChange",
        rightClick: "rightClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmCircle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

    AgmCircle.ctorParameters = function () {
      return [{
        type: CircleManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('circleDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmCircle.prototype, "fillColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "fillOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmCircle.prototype, "strokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "strokeOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmCircle.prototype, "strokePosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "strokeWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "centerChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "circleClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "circleDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "drag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "dragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "dragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "radiusChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "rightClick", void 0);
    AgmCircle = AgmCircle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CircleManager])], AgmCircle);
    /**
     * Manages all Data Layers for a Google Map instance.
     */

    var DataLayerManager =
    /*#__PURE__*/
    function () {
      function DataLayerManager(_wrapper, _zone) {
        _classCallCheck(this, DataLayerManager);

        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
      }
      /**
       * Adds a new Data Layer to the map.
       */


      _createClass(DataLayerManager, [{
        key: "addDataLayer",
        value: function addDataLayer(layer) {
          var _this30 = this;

          var newLayer = this._wrapper.createDataLayer({
            style: layer.style
          }).then(function (d) {
            if (layer.geoJson) {
              _this30.getDataFeatures(d, layer.geoJson).then(function (features) {
                return d.features = features;
              });
            }

            return d;
          });

          this._layers.set(layer, newLayer);
        }
      }, {
        key: "deleteDataLayer",
        value: function deleteDataLayer(layer) {
          var _this31 = this;

          this._layers.get(layer).then(function (l) {
            l.setMap(null);

            _this31._layers["delete"](layer);
          });
        }
      }, {
        key: "updateGeoJson",
        value: function updateGeoJson(layer, geoJson) {
          var _this32 = this;

          this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
              l.remove(feature);
              var index = l.features.indexOf(feature, 0);

              if (index > -1) {
                l.features.splice(index, 1);
              }
            });

            _this32.getDataFeatures(l, geoJson).then(function (features) {
              return l.features = features;
            });
          });
        }
      }, {
        key: "setDataOptions",
        value: function setDataOptions(layer, options) {
          this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
          });
        }
        /**
         * Creates a Google Maps event listener for the given DataLayer as an Observable
         */

      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, layer) {
          var _this33 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this33._layers.get(layer).then(function (d) {
              d.addListener(eventName, function (e) {
                return _this33._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
        /**
         * Extract features from a geoJson using google.maps Data Class
         * @param d : google.maps.Data class instance
         * @param geoJson : url or geojson object
         */

      }, {
        key: "getDataFeatures",
        value: function getDataFeatures(d, geoJson) {
          return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
              try {
                var features = d.addGeoJson(geoJson);
                resolve(features);
              } catch (e) {
                reject(e);
              }
            } else if (typeof geoJson === 'string') {
              d.loadGeoJson(geoJson, null, resolve);
            } else {
              reject("Impossible to extract features from geoJson: wrong argument type");
            }
          });
        }
      }]);

      return DataLayerManager;
    }();

    DataLayerManager.ɵfac = function DataLayerManager_Factory(t) {
      return new (t || DataLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    DataLayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DataLayerManager,
      factory: DataLayerManager.ɵfac
    });

    DataLayerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    DataLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], DataLayerManager);
    var AgmDataLayer_1;
    var layerId$1 = 0;
    /**
     * AgmDataLayer enables the user to add data layers to the map.
     *
     * ### Example
     * ```typescript
     * import { Component } from 'angular2/core';
     * import { AgmMap, AgmDataLayer } from
     * 'angular-google-maps/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  directives: [AgmMap, AgmDataLayer],
     *  styles: [`
     *    .agm-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
     * 	  </agm-data-layer>
     * </agm-map>
     *  `
     * })
     * export class MyMapCmp {
     *   lat: number = -25.274449;
     *   lng: number = 133.775060;
     *   zoom: number = 5;
     *
     * clicked(clickEvent) {
     *    console.log(clickEvent);
     *  }
     *
     *  styleFunc(feature) {
     *    return ({
     *      clickable: false,
     *      fillColor: feature.getProperty('color'),
     *      strokeWeight: 1
     *    });
     *  }
     *
     *  geoJsonObject: Object = {
     *    "type": "FeatureCollection",
     *    "features": [
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "G",
     *          "color": "blue",
     *          "rank": "7",
     *          "ascii": "71"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
     *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
     *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
     *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
     *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
     *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
     *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
     *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "o",
     *          "color": "red",
     *          "rank": "15",
     *          "ascii": "111"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
     *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
     *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
     *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
     *            ],
     *            [
     *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
     *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "o",
     *          "color": "yellow",
     *          "rank": "15",
     *          "ascii": "111"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
     *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
     *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
     *              [132.71, -25.64], [131.87, -25.76]
     *            ],
     *            [
     *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
     *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "g",
     *          "color": "blue",
     *          "rank": "7",
     *          "ascii": "103"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
     *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
     *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
     *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
     *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
     *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
     *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
     *            ],
     *            [
     *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
     *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "l",
     *          "color": "green",
     *          "rank": "12",
     *          "ascii": "108"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "e",
     *          "color": "red",
     *          "rank": "5",
     *          "ascii": "101"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
     *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
     *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
     *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
     *              [144.31, -28.26], [144.14, -27.41]
     *            ],
     *            [
     *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
     *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
     *            ]
     *          ]
     *        }
     *      }
     *    ]
     *  };
     * }
     * ```
     */

    var AgmDataLayer = AgmDataLayer_1 =
    /*#__PURE__*/
    function () {
      function AgmDataLayer(_manager) {
        _classCallCheck(this, AgmDataLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$1++).toString();
        this._subscriptions = [];
        /**
         * This event is fired when a feature in the layer is clicked.
         */

        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The geoJson to be displayed
         */

        this.geoJson = null;
      }

      _createClass(AgmDataLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addDataLayer(this);

          this._addedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this34 = this;

          var listeners = [{
            name: 'click',
            handler: function handler(ev) {
              return _this34.layerClick.emit(ev);
            }
          }];
          listeners.forEach(function (obj) {
            var os = _this34._manager.createEventObservable(obj.name, _this34).subscribe(obj.handler);

            _this34._subscriptions.push(os);
          });
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmDataLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteDataLayer(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this35 = this;

          if (!this._addedToManager) {
            return;
          }

          var geoJsonChange = changes['geoJson'];

          if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
          }

          var dataOptions = {};

          AgmDataLayer_1._dataOptionsAttributes.forEach(function (k) {
            return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this35[k];
          });

          this._manager.setDataOptions(this, dataOptions);
        }
      }]);

      return AgmDataLayer;
    }();

    AgmDataLayer.ɵfac = function AgmDataLayer_Factory(t) {
      return new (t || AgmDataLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DataLayerManager));
    };

    AgmDataLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmDataLayer,
      selectors: [["agm-data-layer"]],
      inputs: {
        geoJson: "geoJson",
        style: "style"
      },
      outputs: {
        layerClick: "layerClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmDataLayer._dataOptionsAttributes = ['style'];

    AgmDataLayer.ctorParameters = function () {
      return [{
        type: DataLayerManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmDataLayer.prototype, "layerClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmDataLayer.prototype, "geoJson", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], AgmDataLayer.prototype, "style", void 0);
    AgmDataLayer = AgmDataLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DataLayerManager])], AgmDataLayer);
    /**
     * Class to implement when you what to be able to make it work with the auto fit bounds feature
     * of AGM.
     */

    var FitBoundsAccessor = function FitBoundsAccessor() {
      _classCallCheck(this, FitBoundsAccessor);
    };
    /**
     * The FitBoundsService is responsible for computing the bounds of the a single map.
     */


    var FitBoundsService =
    /*#__PURE__*/
    function () {
      function FitBoundsService(loader) {
        var _this36 = this;

        _classCallCheck(this, FitBoundsService);

        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () {
          return _this36._includeInBounds$;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (time) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, time);
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (includeInBounds) {
          return _this36._generateBounds(includeInBounds);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
      }

      _createClass(FitBoundsService, [{
        key: "_generateBounds",
        value: function _generateBounds(includeInBounds) {
          var bounds = new google.maps.LatLngBounds();
          includeInBounds.forEach(function (b) {
            return bounds.extend(b);
          });
          return bounds;
        }
      }, {
        key: "addToBounds",
        value: function addToBounds(latLng) {
          var id = this._createIdentifier(latLng);

          if (this._includeInBounds$.value.has(id)) {
            return;
          }

          var map = this._includeInBounds$.value;
          map.set(id, latLng);

          this._includeInBounds$.next(map);
        }
      }, {
        key: "removeFromBounds",
        value: function removeFromBounds(latLng) {
          var map = this._includeInBounds$.value;
          map["delete"](this._createIdentifier(latLng));

          this._includeInBounds$.next(map);
        }
      }, {
        key: "changeFitBoundsChangeSampleTime",
        value: function changeFitBoundsChangeSampleTime(timeMs) {
          this._boundsChangeSampleTime$.next(timeMs);
        }
      }, {
        key: "getBounds$",
        value: function getBounds$() {
          return this.bounds$;
        }
      }, {
        key: "_createIdentifier",
        value: function _createIdentifier(latLng) {
          return "".concat(latLng.lat, "+").concat(latLng.lng);
        }
      }]);

      return FitBoundsService;
    }();

    FitBoundsService.ɵfac = function FitBoundsService_Factory(t) {
      return new (t || FitBoundsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader));
    };

    FitBoundsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FitBoundsService,
      factory: FitBoundsService.ɵfac
    });

    FitBoundsService.ctorParameters = function () {
      return [{
        type: MapsAPILoader
      }];
    };

    FitBoundsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader])], FitBoundsService);
    /**
     * Adds the given directive to the auto fit bounds feature when the value is true.
     * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
     * @example
     * <agm-marker [agmFitBounds]="true"></agm-marker>
     */

    var AgmFitBounds =
    /*#__PURE__*/
    function () {
      function AgmFitBounds(_fitBoundsAccessor, _fitBoundsService) {
        _classCallCheck(this, AgmFitBounds);

        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
         * If the value is true, the element gets added to the bounds of the map.
         * Default: true.
         */

        this.agmFitBounds = true;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._latestFitBoundsDetails = null;
      }
      /**
       * @internal
       */


      _createClass(AgmFitBounds, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this._updateBounds();
        }
        /**
         * @internal
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this._fitBoundsAccessor.getFitBoundsDetails$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) {
            return x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$)).subscribe(function (details) {
            return _this37._updateBounds(details);
          });
        }
        /*
         Either the location changed, or visible status changed.
         Possible state changes are
         invisible -> visible
         visible -> invisible
         visible -> visible (new location)
        */

      }, {
        key: "_updateBounds",
        value: function _updateBounds(newFitBoundsDetails) {
          // either visibility will change, or location, so remove the old one anyway
          if (this._latestFitBoundsDetails) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng); // don't set latestFitBoundsDetails to null, because we can toggle visibility from
            // true -> false -> true, in which case we still need old value cached here

          }

          if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
          }

          if (!this._latestFitBoundsDetails) {
            return;
          }

          if (this.agmFitBounds === true) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
          }
        }
        /**
         * @internal
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed$.next();

          this._destroyed$.complete();

          if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
          }
        }
      }]);

      return AgmFitBounds;
    }();

    AgmFitBounds.ɵfac = function AgmFitBounds_Factory(t) {
      return new (t || AgmFitBounds)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsAccessor, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsService));
    };

    AgmFitBounds.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmFitBounds,
      selectors: [["", "agmFitBounds", ""]],
      inputs: {
        agmFitBounds: "agmFitBounds"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    AgmFitBounds.ctorParameters = function () {
      return [{
        type: FitBoundsAccessor,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }]
      }, {
        type: FitBoundsService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmFitBounds.prototype, "agmFitBounds", void 0);
    AgmFitBounds = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [FitBoundsAccessor, FitBoundsService])], AgmFitBounds);

    var MarkerManager =
    /*#__PURE__*/
    function () {
      function MarkerManager(_mapsWrapper, _zone) {
        _classCallCheck(this, MarkerManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
      }

      _createClass(MarkerManager, [{
        key: "convertAnimation",
        value: function convertAnimation(uiAnim) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(uiAnim === null)) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt("return", null);

                  case 4:
                    return _context.abrupt("return", this._mapsWrapper.getNativeMap().then(function () {
                      return google.maps.Animation[uiAnim];
                    }));

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "deleteMarker",
        value: function deleteMarker(marker) {
          var _this38 = this;

          var m = this._markers.get(marker);

          if (m == null) {
            // marker already deleted
            return Promise.resolve();
          }

          return m.then(function (m) {
            return _this38._zone.run(function () {
              m.setMap(null);

              _this38._markers["delete"](marker);
            });
          });
        }
      }, {
        key: "updateMarkerPosition",
        value: function updateMarkerPosition(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setPosition({
              lat: marker.latitude,
              lng: marker.longitude
            });
          });
        }
      }, {
        key: "updateTitle",
        value: function updateTitle(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setTitle(marker.title);
          });
        }
      }, {
        key: "updateLabel",
        value: function updateLabel(marker) {
          return this._markers.get(marker).then(function (m) {
            m.setLabel(marker.label);
          });
        }
      }, {
        key: "updateDraggable",
        value: function updateDraggable(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setDraggable(marker.draggable);
          });
        }
      }, {
        key: "updateIcon",
        value: function updateIcon(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setIcon(marker.iconUrl);
          });
        }
      }, {
        key: "updateOpacity",
        value: function updateOpacity(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setOpacity(marker.opacity);
          });
        }
      }, {
        key: "updateVisible",
        value: function updateVisible(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setVisible(marker.visible);
          });
        }
      }, {
        key: "updateZIndex",
        value: function updateZIndex(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setZIndex(marker.zIndex);
          });
        }
      }, {
        key: "updateClickable",
        value: function updateClickable(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setClickable(marker.clickable);
          });
        }
      }, {
        key: "updateAnimation",
        value: function updateAnimation(marker) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var m;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this._markers.get(marker);

                  case 2:
                    m = _context2.sent;
                    _context2.t0 = m;
                    _context2.next = 6;
                    return this.convertAnimation(marker.animation);

                  case 6:
                    _context2.t1 = _context2.sent;

                    _context2.t0.setAnimation.call(_context2.t0, _context2.t1);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addMarker",
        value: function addMarker(marker) {
          var _this39 = this;

          var markerPromise = new Promise(function (resolve) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this39, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.t0 = this._mapsWrapper;
                      _context3.t1 = {
                        lat: marker.latitude,
                        lng: marker.longitude
                      };
                      _context3.t2 = marker.label;
                      _context3.t3 = marker.draggable;
                      _context3.t4 = marker.iconUrl;
                      _context3.t5 = marker.opacity;
                      _context3.t6 = marker.visible;
                      _context3.t7 = marker.zIndex;
                      _context3.t8 = marker.title;
                      _context3.t9 = marker.clickable;
                      _context3.next = 12;
                      return this.convertAnimation(marker.animation);

                    case 12:
                      _context3.t10 = _context3.sent;
                      _context3.t11 = {
                        position: _context3.t1,
                        label: _context3.t2,
                        draggable: _context3.t3,
                        icon: _context3.t4,
                        opacity: _context3.t5,
                        visible: _context3.t6,
                        zIndex: _context3.t7,
                        title: _context3.t8,
                        clickable: _context3.t9,
                        animation: _context3.t10
                      };
                      return _context3.abrupt("return", _context3.t0.createMarker.call(_context3.t0, _context3.t11).then(resolve));

                    case 15:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });

          this._markers.set(marker, markerPromise);
        }
      }, {
        key: "getNativeMarker",
        value: function getNativeMarker(marker) {
          return this._markers.get(marker);
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, marker) {
          var _this40 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this40._markers.get(marker).then(function (m) {
              m.addListener(eventName, function (e) {
                return _this40._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }]);

      return MarkerManager;
    }();

    MarkerManager.ɵfac = function MarkerManager_Factory(t) {
      return new (t || MarkerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    MarkerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MarkerManager,
      factory: MarkerManager.ɵfac
    });

    MarkerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    MarkerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], MarkerManager);

    var InfoWindowManager =
    /*#__PURE__*/
    function () {
      function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        _classCallCheck(this, InfoWindowManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
      }

      _createClass(InfoWindowManager, [{
        key: "deleteInfoWindow",
        value: function deleteInfoWindow(infoWindow) {
          var _this41 = this;

          var iWindow = this._infoWindows.get(infoWindow);

          if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
          }

          return iWindow.then(function (i) {
            return _this41._zone.run(function () {
              i.close();

              _this41._infoWindows["delete"](infoWindow);
            });
          });
        }
      }, {
        key: "setPosition",
        value: function setPosition(infoWindow) {
          return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setPosition({
              lat: infoWindow.latitude,
              lng: infoWindow.longitude
            });
          });
        }
      }, {
        key: "setZIndex",
        value: function setZIndex(infoWindow) {
          return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setZIndex(infoWindow.zIndex);
          });
        }
      }, {
        key: "open",
        value: function open(infoWindow) {
          var _this42 = this;

          return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
              return _this42._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                return _this42._mapsWrapper.getNativeMap().then(function (map) {
                  return w.open(map, marker);
                });
              });
            }

            return _this42._mapsWrapper.getNativeMap().then(function (map) {
              return w.open(map);
            });
          });
        }
      }, {
        key: "close",
        value: function close(infoWindow) {
          return this._infoWindows.get(infoWindow).then(function (w) {
            return w.close();
          });
        }
      }, {
        key: "setOptions",
        value: function setOptions(infoWindow, options) {
          return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setOptions(options);
          });
        }
      }, {
        key: "addInfoWindow",
        value: function addInfoWindow(infoWindow) {
          var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
          };

          if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = {
              lat: infoWindow.latitude,
              lng: infoWindow.longitude
            };
          }

          var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);

          this._infoWindows.set(infoWindow, infoWindowPromise);
        }
        /**
         * Creates a Google Maps event listener for the given InfoWindow as an Observable
         */

      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, infoWindow) {
          var _this43 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this43._infoWindows.get(infoWindow).then(function (i) {
              i.addListener(eventName, function (e) {
                return _this43._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }]);

      return InfoWindowManager;
    }();

    InfoWindowManager.ɵfac = function InfoWindowManager_Factory(t) {
      return new (t || InfoWindowManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MarkerManager));
    };

    InfoWindowManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: InfoWindowManager,
      factory: InfoWindowManager.ɵfac
    });

    InfoWindowManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: MarkerManager
      }];
    };

    InfoWindowManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], MarkerManager])], InfoWindowManager);
    var AgmInfoWindow_1;
    var infoWindowId = 0;
    /**
     * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    .agm-map-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
     *        <agm-info-window [disableAutoPan]="true">
     *          Hi, this is the content of the <strong>info window</strong>
     *        </agm-info-window>
     *      </agm-marker>
     *    </agm-map>
     *  `
     * })
     * ```
     */

    var AgmInfoWindow = AgmInfoWindow_1 =
    /*#__PURE__*/
    function () {
      function AgmInfoWindow(_infoWindowManager, _el) {
        _classCallCheck(this, AgmInfoWindow);

        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */

        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */

        this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
      }

      _createClass(AgmInfoWindow, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.content = this._el.nativeElement.querySelector('.agm-info-window-content');

          this._infoWindowManager.addInfoWindow(this);

          this._infoWindowAddedToManager = true;

          this._updateOpenState();

          this._registerEventListeners();
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._infoWindowAddedToManager) {
            return;
          }

          if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' && typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
          }

          if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
          }

          if (changes['isOpen']) {
            this._updateOpenState();
          }

          this._setInfoWindowOptions(changes);
        }
      }, {
        key: "_registerEventListeners",
        value: function _registerEventListeners() {
          var _this44 = this;

          this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this44.isOpen = false;

            _this44.infoWindowClose.emit();
          });
        }
      }, {
        key: "_updateOpenState",
        value: function _updateOpenState() {
          this.isOpen ? this.open() : this.close();
        }
      }, {
        key: "_setInfoWindowOptions",
        value: function _setInfoWindowOptions(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmInfoWindow_1._infoWindowOptionsInputs.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          this._infoWindowManager.setOptions(this, options);
        }
        /**
         * Opens the info window.
         */

      }, {
        key: "open",
        value: function open() {
          return this._infoWindowManager.open(this);
        }
        /**
         * Closes the info window.
         */

      }, {
        key: "close",
        value: function close() {
          var _this45 = this;

          return this._infoWindowManager.close(this).then(function () {
            _this45.infoWindowClose.emit();
          });
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return 'AgmInfoWindow-' + this._id.toString();
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._infoWindowManager.deleteInfoWindow(this);
        }
      }]);

      return AgmInfoWindow;
    }();

    AgmInfoWindow.ɵfac = function AgmInfoWindow_Factory(t) {
      return new (t || AgmInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](InfoWindowManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    AgmInfoWindow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AgmInfoWindow,
      selectors: [["agm-info-window"]],
      inputs: {
        isOpen: "isOpen",
        latitude: "latitude",
        longitude: "longitude",
        disableAutoPan: "disableAutoPan",
        zIndex: "zIndex",
        maxWidth: "maxWidth"
      },
      outputs: {
        infoWindowClose: "infoWindowClose"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "agm-info-window-content"]],
      template: function AgmInfoWindow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];

    AgmInfoWindow.ctorParameters = function () {
      return [{
        type: InfoWindowManager
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmInfoWindow.prototype, "disableAutoPan", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "maxWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmInfoWindow.prototype, "isOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmInfoWindow.prototype, "infoWindowClose", void 0);
    AgmInfoWindow = AgmInfoWindow_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [InfoWindowManager, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], AgmInfoWindow);
    /**
     * Manages all KML Layers for a Google Map instance.
     */

    var KmlLayerManager =
    /*#__PURE__*/
    function () {
      function KmlLayerManager(_wrapper, _zone) {
        _classCallCheck(this, KmlLayerManager);

        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
      }
      /**
       * Adds a new KML Layer to the map.
       */


      _createClass(KmlLayerManager, [{
        key: "addKmlLayer",
        value: function addKmlLayer(layer) {
          var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
              clickable: layer.clickable,
              map: m,
              preserveViewport: layer.preserveViewport,
              screenOverlays: layer.screenOverlays,
              suppressInfoWindows: layer.suppressInfoWindows,
              url: layer.url,
              zIndex: layer.zIndex
            });
          });

          this._layers.set(layer, newLayer);
        }
      }, {
        key: "setOptions",
        value: function setOptions(layer, options) {
          this._layers.get(layer).then(function (l) {
            return l.setOptions(options);
          });
        }
      }, {
        key: "deleteKmlLayer",
        value: function deleteKmlLayer(layer) {
          var _this46 = this;

          this._layers.get(layer).then(function (l) {
            l.setMap(null);

            _this46._layers["delete"](layer);
          });
        }
        /**
         * Creates a Google Maps event listener for the given KmlLayer as an Observable
         */

      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, layer) {
          var _this47 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this47._layers.get(layer).then(function (m) {
              m.addListener(eventName, function (e) {
                return _this47._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }]);

      return KmlLayerManager;
    }();

    KmlLayerManager.ɵfac = function KmlLayerManager_Factory(t) {
      return new (t || KmlLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    KmlLayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: KmlLayerManager,
      factory: KmlLayerManager.ɵfac
    });

    KmlLayerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    KmlLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], KmlLayerManager);
    var AgmKmlLayer_1;
    var layerId$2 = 0;

    var AgmKmlLayer = AgmKmlLayer_1 =
    /*#__PURE__*/
    function () {
      function AgmKmlLayer(_manager) {
        _classCallCheck(this, AgmKmlLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$2++).toString();
        this._subscriptions = [];
        /**
         * If true, the layer receives mouse events. Default value is true.
         */

        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */

        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */

        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */

        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */

        this.url = null;
        /**
         * The z-index of the layer.
         */

        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */

        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */

        this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */

        this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AgmKmlLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addKmlLayer(this);

          this._addedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._addedToManager) {
            return;
          }

          this._updatePolygonOptions(changes);
        }
      }, {
        key: "_updatePolygonOptions",
        value: function _updatePolygonOptions(changes) {
          var options = Object.keys(changes).filter(function (k) {
            return AgmKmlLayer_1._kmlLayerOptions.indexOf(k) !== -1;
          }).reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
          }, {});

          if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
          }
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this48 = this;

          var listeners = [{
            name: 'click',
            handler: function handler(ev) {
              return _this48.layerClick.emit(ev);
            }
          }, {
            name: 'defaultviewport_changed',
            handler: function handler() {
              return _this48.defaultViewportChange.emit();
            }
          }, {
            name: 'status_changed',
            handler: function handler() {
              return _this48.statusChange.emit();
            }
          }];
          listeners.forEach(function (obj) {
            var os = _this48._manager.createEventObservable(obj.name, _this48).subscribe(obj.handler);

            _this48._subscriptions.push(os);
          });
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmKmlLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteKmlLayer(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return AgmKmlLayer;
    }();

    AgmKmlLayer.ɵfac = function AgmKmlLayer_Factory(t) {
      return new (t || AgmKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](KmlLayerManager));
    };

    AgmKmlLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmKmlLayer,
      selectors: [["agm-kml-layer"]],
      inputs: {
        clickable: "clickable",
        preserveViewport: "preserveViewport",
        screenOverlays: "screenOverlays",
        suppressInfoWindows: "suppressInfoWindows",
        url: "url",
        zIndex: "zIndex"
      },
      outputs: {
        layerClick: "layerClick",
        defaultViewportChange: "defaultViewportChange",
        statusChange: "statusChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];

    AgmKmlLayer.ctorParameters = function () {
      return [{
        type: KmlLayerManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "preserveViewport", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "screenOverlays", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "suppressInfoWindows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmKmlLayer.prototype, "url", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmKmlLayer.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmKmlLayer.prototype, "layerClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmKmlLayer.prototype, "defaultViewportChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmKmlLayer.prototype, "statusChange", void 0);
    AgmKmlLayer = AgmKmlLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KmlLayerManager])], AgmKmlLayer);

    function createMVCEventObservable(array) {
      var eventNames = ['insert_at', 'remove_at', 'set_at'];
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])(function (handler) {
        return eventNames.map(function (evName) {
          return array.addListener(evName, function (index, previous) {
            return handler.apply(array, [{
              'newArr': array.getArray(),
              evName: evName,
              index: index,
              previous: previous
            }]);
          });
        });
      }, function (_handler, evListeners) {
        return evListeners.forEach(function (evListener) {
          return evListener.remove();
        });
      });
    }

    var MvcArrayMock =
    /*#__PURE__*/
    function () {
      function MvcArrayMock() {
        _classCallCheck(this, MvcArrayMock);

        this.vals = [];
        this.listeners = {
          'remove_at': [],
          'insert_at': [],
          'set_at': []
        };
      }

      _createClass(MvcArrayMock, [{
        key: "clear",
        value: function clear() {
          for (var i = this.vals.length - 1; i >= 0; i--) {
            this.removeAt(i);
          }
        }
      }, {
        key: "getArray",
        value: function getArray() {
          return _toConsumableArray(this.vals);
        }
      }, {
        key: "getAt",
        value: function getAt(i) {
          return this.vals[i];
        }
      }, {
        key: "getLength",
        value: function getLength() {
          return this.vals.length;
        }
      }, {
        key: "insertAt",
        value: function insertAt(i, elem) {
          this.vals.splice(i, 0, elem);
          this.listeners.insert_at.map(function (listener) {
            return listener(i);
          });
        }
      }, {
        key: "pop",
        value: function pop() {
          var _this49 = this;

          var deleted = this.vals.pop();
          this.listeners.remove_at.map(function (listener) {
            return listener(_this49.vals.length, deleted);
          });
          return deleted;
        }
      }, {
        key: "push",
        value: function push(elem) {
          var _this50 = this;

          this.vals.push(elem);
          this.listeners.insert_at.map(function (listener) {
            return listener(_this50.vals.length - 1);
          });
          return this.vals.length;
        }
      }, {
        key: "removeAt",
        value: function removeAt(i) {
          var deleted = this.vals.splice(i, 1)[0];
          this.listeners.remove_at.map(function (listener) {
            return listener(i, deleted);
          });
          return deleted;
        }
      }, {
        key: "setAt",
        value: function setAt(i, elem) {
          var deleted = this.vals[i];
          this.vals[i] = elem;
          this.listeners.set_at.map(function (listener) {
            return listener(i, deleted);
          });
        }
      }, {
        key: "forEach",
        value: function forEach(callback) {
          this.vals.forEach(callback);
        }
      }, {
        key: "addListener",
        value: function addListener(eventName, handler) {
          var listenerArr = this.listeners[eventName];
          listenerArr.push(handler);
          return {
            remove: function remove() {
              listenerArr.splice(listenerArr.indexOf(handler), 1);
            }
          };
        }
      }]);

      return MvcArrayMock;
    }();

    var PolygonManager =
    /*#__PURE__*/
    function () {
      function PolygonManager(_mapsWrapper, _zone) {
        _classCallCheck(this, PolygonManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
      }

      _createClass(PolygonManager, [{
        key: "addPolygon",
        value: function addPolygon(path) {
          var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex
          });

          this._polygons.set(path, polygonPromise);
        }
      }, {
        key: "updatePolygon",
        value: function updatePolygon(polygon) {
          var _this51 = this;

          var m = this._polygons.get(polygon);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this51._zone.run(function () {
              l.setPaths(polygon.paths);
            });
          });
        }
      }, {
        key: "setPolygonOptions",
        value: function setPolygonOptions(path, options) {
          return this._polygons.get(path).then(function (l) {
            l.setOptions(options);
          });
        }
      }, {
        key: "deletePolygon",
        value: function deletePolygon(paths) {
          var _this52 = this;

          var m = this._polygons.get(paths);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this52._zone.run(function () {
              l.setMap(null);

              _this52._polygons["delete"](paths);
            });
          });
        }
      }, {
        key: "getPath",
        value: function getPath(polygon) {
          return this._polygons.get(polygon).then(function (polygon) {
            return polygon.getPath().getArray();
          });
        }
      }, {
        key: "getPaths",
        value: function getPaths(polygon) {
          return this._polygons.get(polygon).then(function (polygon) {
            return polygon.getPaths().getArray().map(function (p) {
              return p.getArray();
            });
          });
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, path) {
          var _this53 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this53._polygons.get(path).then(function (l) {
              l.addListener(eventName, function (e) {
                return _this53._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }, {
        key: "createPathEventObservable",
        value: function createPathEventObservable(agmPolygon) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var polygon, paths, pathsChanges$;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this._polygons.get(agmPolygon);

                  case 2:
                    polygon = _context4.sent;
                    paths = polygon.getPaths();
                    pathsChanges$ = createMVCEventObservable(paths);
                    return _context4.abrupt("return", pathsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
                      newArr: paths.getArray()
                    }), // in order to subscribe to them all
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (parentMVEvent) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, _toConsumableArray( // rest parameter
                      parentMVEvent.newArr.map(function (chMVC, index) {
                        return createMVCEventObservable(chMVC).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (chMVCEvent) {
                          return {
                            parentMVEvent: parentMVEvent,
                            chMVCEvent: chMVCEvent,
                            pathIndex: index
                          };
                        }));
                      }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
                        parentMVEvent: parentMVEvent,
                        chMVCEvent: null,
                        pathIndex: null
                      }));
                    }), // start the merged ob with an event signinifing change to parent
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), // skip the manually added event
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
                      var parentMVEvent = _ref.parentMVEvent,
                          chMVCEvent = _ref.chMVCEvent,
                          pathIndex = _ref.pathIndex;
                      var retVal;

                      if (!chMVCEvent) {
                        retVal = {
                          newArr: parentMVEvent.newArr.map(function (subArr) {
                            return subArr.getArray().map(function (latLng) {
                              return latLng.toJSON();
                            });
                          }),
                          eventName: parentMVEvent.evName,
                          index: parentMVEvent.index
                        };

                        if (parentMVEvent.previous) {
                          retVal.previous = parentMVEvent.previous.getArray();
                        }
                      } else {
                        retVal = {
                          newArr: parentMVEvent.newArr.map(function (subArr) {
                            return subArr.getArray().map(function (latLng) {
                              return latLng.toJSON();
                            });
                          }),
                          pathIndex: pathIndex,
                          eventName: chMVCEvent.evName,
                          index: chMVCEvent.index
                        };

                        if (chMVCEvent.previous) {
                          retVal.previous = chMVCEvent.previous;
                        }
                      }

                      return retVal;
                    })));

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return PolygonManager;
    }();

    PolygonManager.ɵfac = function PolygonManager_Factory(t) {
      return new (t || PolygonManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    PolygonManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PolygonManager,
      factory: PolygonManager.ɵfac
    });

    PolygonManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    PolygonManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], PolygonManager);
    var PolylineManager_1;

    var PolylineManager = PolylineManager_1 =
    /*#__PURE__*/
    function () {
      function PolylineManager(_mapsWrapper, _zone) {
        _classCallCheck(this, PolylineManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
      }

      _createClass(PolylineManager, [{
        key: "addPolyline",
        value: function addPolyline(line) {
          var _this54 = this;

          var polylinePromise = this._mapsWrapper.getNativeMap().then(function () {
            return [PolylineManager_1._convertPoints(line), PolylineManager_1._convertIcons(line)];
          }).then(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                path = _ref3[0],
                icons = _ref3[1];

            return _this54._mapsWrapper.createPolyline({
              clickable: line.clickable,
              draggable: line.draggable,
              editable: line.editable,
              geodesic: line.geodesic,
              strokeColor: line.strokeColor,
              strokeOpacity: line.strokeOpacity,
              strokeWeight: line.strokeWeight,
              visible: line.visible,
              zIndex: line.zIndex,
              path: path,
              icons: icons
            });
          });

          this._polylines.set(line, polylinePromise);
        }
      }, {
        key: "updatePolylinePoints",
        value: function updatePolylinePoints(line) {
          var _this55 = this;

          var path = PolylineManager_1._convertPoints(line);

          var m = this._polylines.get(line);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this55._zone.run(function () {
              l.setPath(path);
            });
          });
        }
      }, {
        key: "updateIconSequences",
        value: function updateIconSequences(line) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this56 = this;

            var icons, m;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this._mapsWrapper.getNativeMap();

                  case 2:
                    icons = PolylineManager_1._convertIcons(line);
                    m = this._polylines.get(line);

                    if (!(m == null)) {
                      _context5.next = 6;
                      break;
                    }

                    return _context5.abrupt("return");

                  case 6:
                    return _context5.abrupt("return", m.then(function (l) {
                      return _this56._zone.run(function () {
                        return l.setOptions({
                          icons: icons
                        });
                      });
                    }));

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "setPolylineOptions",
        value: function setPolylineOptions(line, options) {
          return this._polylines.get(line).then(function (l) {
            l.setOptions(options);
          });
        }
      }, {
        key: "deletePolyline",
        value: function deletePolyline(line) {
          var _this57 = this;

          var m = this._polylines.get(line);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this57._zone.run(function () {
              l.setMap(null);

              _this57._polylines["delete"](line);
            });
          });
        }
      }, {
        key: "getMVCPath",
        value: function getMVCPath(agmPolyline) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var polyline;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this._polylines.get(agmPolyline);

                  case 2:
                    polyline = _context6.sent;
                    return _context6.abrupt("return", polyline.getPath());

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getPath",
        value: function getPath(agmPolyline) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.getMVCPath(agmPolyline);

                  case 2:
                    return _context7.abrupt("return", _context7.sent.getArray());

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, line) {
          var _this58 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this58._polylines.get(line).then(function (l) {
              l.addListener(eventName, function (e) {
                return _this58._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }, {
        key: "createPathEventObservable",
        value: function createPathEventObservable(line) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var mvcPath;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.getMVCPath(line);

                  case 2:
                    mvcPath = _context8.sent;
                    return _context8.abrupt("return", createMVCEventObservable(mvcPath));

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }], [{
        key: "_convertPoints",
        value: function _convertPoints(line) {
          var path = line._getPoints().map(function (point) {
            return {
              lat: point.latitude,
              lng: point.longitude
            };
          });

          return path;
        }
      }, {
        key: "_convertPath",
        value: function _convertPath(path) {
          var symbolPath = google.maps.SymbolPath[path];

          if (typeof symbolPath === 'number') {
            return symbolPath;
          } else {
            return path;
          }
        }
      }, {
        key: "_convertIcons",
        value: function _convertIcons(line) {
          var icons = line._getIcons().map(function (agmIcon) {
            return {
              fixedRotation: agmIcon.fixedRotation,
              offset: agmIcon.offset,
              repeat: agmIcon.repeat,
              icon: {
                anchor: new google.maps.Point(agmIcon.anchorX, agmIcon.anchorY),
                fillColor: agmIcon.fillColor,
                fillOpacity: agmIcon.fillOpacity,
                path: PolylineManager_1._convertPath(agmIcon.path),
                rotation: agmIcon.rotation,
                scale: agmIcon.scale,
                strokeColor: agmIcon.strokeColor,
                strokeOpacity: agmIcon.strokeOpacity,
                strokeWeight: agmIcon.strokeWeight
              }
            };
          }); // prune undefineds;


          icons.forEach(function (icon) {
            Object.entries(icon).forEach(function (_ref4) {
              var _ref5 = _slicedToArray(_ref4, 2),
                  key = _ref5[0],
                  val = _ref5[1];

              if (typeof val === 'undefined') {
                delete icon[key];
              }
            });

            if (typeof icon.icon.anchor.x === 'undefined' || typeof icon.icon.anchor.y === 'undefined') {
              delete icon.icon.anchor;
            }
          });
          return icons;
        }
      }]);

      return PolylineManager;
    }();

    PolylineManager.ɵfac = function PolylineManager_Factory(t) {
      return new (t || PolylineManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    PolylineManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PolylineManager,
      factory: PolylineManager.ɵfac
    });

    PolylineManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    PolylineManager = PolylineManager_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], PolylineManager);

    var RectangleManager =
    /*#__PURE__*/
    function () {
      function RectangleManager(_apiWrapper, _zone) {
        _classCallCheck(this, RectangleManager);

        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
      }

      _createClass(RectangleManager, [{
        key: "addRectangle",
        value: function addRectangle(rectangle) {
          this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
              north: rectangle.north,
              east: rectangle.east,
              south: rectangle.south,
              west: rectangle.west
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex
          }));
        }
        /**
         * Removes the given rectangle from the map.
         */

      }, {
        key: "removeRectangle",
        value: function removeRectangle(rectangle) {
          var _this59 = this;

          return this._rectangles.get(rectangle).then(function (r) {
            r.setMap(null);

            _this59._rectangles["delete"](rectangle);
          });
        }
      }, {
        key: "setOptions",
        value: function setOptions(rectangle, options) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setOptions(options);
          });
        }
      }, {
        key: "getBounds",
        value: function getBounds(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.getBounds();
          });
        }
      }, {
        key: "setBounds",
        value: function setBounds(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setBounds({
              north: rectangle.north,
              east: rectangle.east,
              south: rectangle.south,
              west: rectangle.west
            });
          });
        }
      }, {
        key: "setEditable",
        value: function setEditable(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setEditable(rectangle.editable);
          });
        }
      }, {
        key: "setDraggable",
        value: function setDraggable(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setDraggable(rectangle.draggable);
          });
        }
      }, {
        key: "setVisible",
        value: function setVisible(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setVisible(rectangle.visible);
          });
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, rectangle) {
          var _this60 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var listener = null;

            _this60._rectangles.get(rectangle).then(function (r) {
              listener = r.addListener(eventName, function (e) {
                return _this60._zone.run(function () {
                  return observer.next(e);
                });
              });
            });

            return function () {
              if (listener !== null) {
                listener.remove();
              }
            };
          });
        }
      }]);

      return RectangleManager;
    }();

    RectangleManager.ɵfac = function RectangleManager_Factory(t) {
      return new (t || RectangleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    RectangleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RectangleManager,
      factory: RectangleManager.ɵfac
    });

    RectangleManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    RectangleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], RectangleManager);
    var AgmMap_1;
    /**
     * AgmMap renders a Google Map.
     * **Important note**: To be able see a map in the browser, you have to define a height for the
     * element `agm-map`.
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    agm-map {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *    </agm-map>
     *  `
     * })
     * ```
     */

    var AgmMap = AgmMap_1 =
    /*#__PURE__*/
    function () {
      function AgmMap(_elem, _mapsWrapper, _platformId, _fitBoundsService, _zone) {
        _classCallCheck(this, AgmMap);

        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._platformId = _platformId;
        this._fitBoundsService = _fitBoundsService;
        this._zone = _zone;
        /**
         * The longitude that defines the center of the map.
         */

        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */

        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */

        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */

        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */

        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */

        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */

        this.keyboardShortcuts = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */

        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */

        this.usePanning = false;
        /**
         * Sets the viewport to contain the given bounds.
         * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
         */

        this.fitBounds = false;
        /**
         * The initial enabled/disabled state of the Scale control. This is disabled by default.
         */

        this.scaleControl = false;
        /**
         * The initial enabled/disabled state of the Map type control.
         */

        this.mapTypeControl = false;
        /**
         * The initial enabled/disabled state of the Pan control.
         */

        this.panControl = false;
        /**
         * The initial enabled/disabled state of the Rotate control.
         */

        this.rotateControl = false;
        /**
         * The initial enabled/disabled state of the Fullscreen control.
         */

        this.fullscreenControl = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */

        this.mapTypeId = 'roadmap';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */

        this.clickableIcons = true;
        /**
         * A map icon represents a point of interest, also known as a POI.
         * When map icons are clickable by default, an info window is displayed.
         * When this property is set to false, the info window will not be shown but the click event
         * will still fire
         */

        this.showDefaultInfoWindow = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */

        this.gestureHandling = 'auto';
        /**
         * Controls the automatic switching behavior for the angle of incidence of
         * the map. The only allowed values are 0 and 45. The value 0 causes the map
         * to always use a 0° overhead view regardless of the zoom level and
         * viewport. The value 45 causes the tilt angle to automatically switch to
         * 45 whenever 45° imagery is available for the current zoom level and
         * viewport, and switch back to 0 whenever 45° imagery is not available
         * (this is the default behavior). 45° imagery is only available for
         * satellite and hybrid map types, within some locations, and at some zoom
         * levels. Note: getTilt returns the current tilt angle, not the value
         * specified by this option. Because getTilt and this option refer to
         * different things, do not bind() the tilt property; doing so may yield
         * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
         */

        this.tilt = 0;
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */

        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */

        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */

        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter is fired when the map center changes.
         */

        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the viewport bounds have changed.
         */

        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the mapTypeId property changes.
         */

        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */

        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the zoom level has changed.
         */

        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */

        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the visible tiles have finished loading.
         */

        this.tilesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /** @internal */


      _createClass(AgmMap, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(this._platformId)) {
            // The code is running on the server, do nothing
            return;
          } // todo: this should be solved with a new component and a viewChild decorator


          var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');

          this._initMapInstance(container);
        }
      }, {
        key: "_initMapInstance",
        value: function _initMapInstance(el) {
          var _this61 = this;

          this._mapsWrapper.createMap(el, {
            center: {
              lat: this.latitude || 0,
              lng: this.longitude || 0
            },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            controlSize: this.controlSize,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling,
            tilt: this.tilt,
            restriction: this.restriction
          }).then(function () {
            return _this61._mapsWrapper.getNativeMap();
          }).then(function (map) {
            return _this61.mapReady.emit(map);
          }); // register event listeners


          this._handleMapCenterChange();

          this._handleMapZoomChange();

          this._handleMapMouseEvents();

          this._handleBoundsChange();

          this._handleMapTypeIdChange();

          this._handleTilesLoadedEvent();

          this._handleIdleEvent();
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // unsubscribe all registered observable subscriptions
          this._observableSubscriptions.forEach(function (s) {
            return s.unsubscribe();
          }); // remove all listeners from the map instance


          this._mapsWrapper.clearInstanceListeners();

          if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
          }
        }
        /* @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._updateMapOptionsChanges(changes);

          this._updatePosition(changes);
        }
      }, {
        key: "_updateMapOptionsChanges",
        value: function _updateMapOptionsChanges(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmMap_1._mapOptionsAttributes.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          this._mapsWrapper.setMapOptions(options);
        }
        /**
         * Triggers a resize event on the google map instance.
         * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
         * Returns a promise that gets resolved after the event was triggered.
         */

      }, {
        key: "triggerResize",
        value: function triggerResize() {
          var _this62 = this;

          var recenter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          // Note: When we would trigger the resize event and show the map in the same turn (which is a
          // common case for triggering a resize event), then the resize event would not
          // work (to show the map), so we trigger the event in a timeout.
          return new Promise(function (resolve) {
            setTimeout(function () {
              return _this62._mapsWrapper.triggerMapEvent('resize').then(function () {
                if (recenter) {
                  _this62.fitBounds != null ? _this62._fitBounds() : _this62._setCenter();
                }

                resolve();
              });
            });
          });
        }
      }, {
        key: "_updatePosition",
        value: function _updatePosition(changes) {
          if (changes['latitude'] == null && changes['longitude'] == null && !changes['fitBounds']) {
            // no position update needed
            return;
          } // we prefer fitBounds in changes


          if ('fitBounds' in changes) {
            this._fitBounds();

            return;
          }

          if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
          }

          this._setCenter();
        }
      }, {
        key: "_setCenter",
        value: function _setCenter() {
          var newCenter = {
            lat: this.latitude,
            lng: this.longitude
          };

          if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
          } else {
            this._mapsWrapper.setCenter(newCenter);
          }
        }
      }, {
        key: "_fitBounds",
        value: function _fitBounds() {
          switch (this.fitBounds) {
            case true:
              this._subscribeToFitBoundsUpdates();

              break;

            case false:
              if (this._fitBoundsSubscription) {
                this._fitBoundsSubscription.unsubscribe();
              }

              break;

            default:
              this._updateBounds(this.fitBounds, this.fitBoundsPadding);

          }
        }
      }, {
        key: "_subscribeToFitBoundsUpdates",
        value: function _subscribeToFitBoundsUpdates() {
          var _this63 = this;

          this._zone.runOutsideAngular(function () {
            _this63._fitBoundsSubscription = _this63._fitBoundsService.getBounds$().subscribe(function (b) {
              _this63._zone.run(function () {
                return _this63._updateBounds(b, _this63.fitBoundsPadding);
              });
            });
          });
        }
      }, {
        key: "_updateBounds",
        value: function _updateBounds(bounds, padding) {
          if (!bounds) {
            return;
          }

          if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
            var newBounds = new google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
          }

          if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds, padding);

            return;
          }

          this._mapsWrapper.fitBounds(bounds, padding);
        }
      }, {
        key: "_isLatLngBoundsLiteral",
        value: function _isLatLngBoundsLiteral(bounds) {
          return bounds != null && bounds.extend === undefined;
        }
      }, {
        key: "_handleMapCenterChange",
        value: function _handleMapCenterChange() {
          var _this64 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this64._mapsWrapper.getCenter().then(function (center) {
              _this64.latitude = center.lat();
              _this64.longitude = center.lng();

              _this64.centerChange.emit({
                lat: _this64.latitude,
                lng: _this64.longitude
              });
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleBoundsChange",
        value: function _handleBoundsChange() {
          var _this65 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this65._mapsWrapper.getBounds().then(function (bounds) {
              _this65.boundsChange.emit(bounds);
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleMapTypeIdChange",
        value: function _handleMapTypeIdChange() {
          var _this66 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this66._mapsWrapper.getMapTypeId().then(function (mapTypeId) {
              _this66.mapTypeIdChange.emit(mapTypeId);
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleMapZoomChange",
        value: function _handleMapZoomChange() {
          var _this67 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this67._mapsWrapper.getZoom().then(function (z) {
              _this67.zoom = z;

              _this67.zoomChange.emit(z);
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleIdleEvent",
        value: function _handleIdleEvent() {
          var _this68 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () {
            _this68.idle.emit(void 0);
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleTilesLoadedEvent",
        value: function _handleTilesLoadedEvent() {
          var _this69 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(function () {
            return _this69.tilesLoaded.emit(void 0);
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleMapMouseEvents",
        value: function _handleMapMouseEvents() {
          var _this70 = this;

          var events = [{
            name: 'click',
            emitter: this.mapClick
          }, {
            name: 'rightclick',
            emitter: this.mapRightClick
          }, {
            name: 'dblclick',
            emitter: this.mapDblClick
          }];
          events.forEach(function (e) {
            var s = _this70._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
              var value = {
                coords: {
                  lat: event.latLng.lat(),
                  lng: event.latLng.lng()
                },
                placeId: event.placeId
              }; // the placeId will be undefined in case the event was not an IconMouseEvent (google types)

              if (value.placeId && !_this70.showDefaultInfoWindow) {
                event.stop();
              }

              e.emitter.emit(value);
            });

            _this70._observableSubscriptions.push(s);
          });
        }
      }]);

      return AgmMap;
    }();

    AgmMap.ɵfac = function AgmMap_Factory(t) {
      return new (t || AgmMap)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    AgmMap.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AgmMap,
      selectors: [["agm-map"]],
      hostVars: 2,
      hostBindings: function AgmMap_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sebm-google-map-container", true);
        }
      },
      inputs: {
        longitude: "longitude",
        latitude: "latitude",
        zoom: "zoom",
        draggable: ["mapDraggable", "draggable"],
        disableDoubleClickZoom: "disableDoubleClickZoom",
        disableDefaultUI: "disableDefaultUI",
        scrollwheel: "scrollwheel",
        keyboardShortcuts: "keyboardShortcuts",
        styles: "styles",
        usePanning: "usePanning",
        fitBounds: "fitBounds",
        scaleControl: "scaleControl",
        mapTypeControl: "mapTypeControl",
        panControl: "panControl",
        rotateControl: "rotateControl",
        fullscreenControl: "fullscreenControl",
        mapTypeId: "mapTypeId",
        clickableIcons: "clickableIcons",
        showDefaultInfoWindow: "showDefaultInfoWindow",
        gestureHandling: "gestureHandling",
        tilt: "tilt",
        minZoom: "minZoom",
        maxZoom: "maxZoom",
        controlSize: "controlSize",
        backgroundColor: "backgroundColor",
        draggableCursor: "draggableCursor",
        draggingCursor: "draggingCursor",
        zoomControl: "zoomControl",
        zoomControlOptions: "zoomControlOptions",
        streetViewControl: "streetViewControl",
        streetViewControlOptions: "streetViewControlOptions",
        fitBoundsPadding: "fitBoundsPadding",
        scaleControlOptions: "scaleControlOptions",
        mapTypeControlOptions: "mapTypeControlOptions",
        panControlOptions: "panControlOptions",
        rotateControlOptions: "rotateControlOptions",
        fullscreenControlOptions: "fullscreenControlOptions",
        restriction: "restriction"
      },
      outputs: {
        mapClick: "mapClick",
        mapRightClick: "mapRightClick",
        mapDblClick: "mapDblClick",
        centerChange: "centerChange",
        boundsChange: "boundsChange",
        mapTypeIdChange: "mapTypeIdChange",
        idle: "idle",
        zoomChange: "zoomChange",
        mapReady: "mapReady",
        tilesLoaded: "tilesLoaded"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 0,
      consts: [[1, "agm-map-container-inner", "sebm-google-map-container-inner"], [1, "agm-map-content"]],
      template: function AgmMap_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"]
    });
    /**
     * Map option attributes that can change over time
     */

    AgmMap._mapOptionsAttributes = ['disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor', 'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl', 'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom', 'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions', 'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions', 'mapTypeId', 'clickableIcons', 'gestureHandling', 'tilt', 'restriction'];

    AgmMap.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: GoogleMapsAPIWrapper
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }, {
        type: FitBoundsService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "zoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMap.prototype, "minZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMap.prototype, "maxZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMap.prototype, "controlSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mapDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "disableDoubleClickZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "disableDefaultUI", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "scrollwheel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "backgroundColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "draggableCursor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "draggingCursor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "keyboardShortcuts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmMap.prototype, "zoomControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "zoomControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], AgmMap.prototype, "styles", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "usePanning", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmMap.prototype, "streetViewControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "streetViewControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fitBounds", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fitBoundsPadding", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "scaleControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "scaleControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "mapTypeControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "mapTypeControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "panControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "panControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "rotateControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "rotateControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fullscreenControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fullscreenControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "mapTypeId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "clickableIcons", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "showDefaultInfoWindow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "gestureHandling", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "tilt", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "restriction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapRightClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "centerChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "boundsChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapTypeIdChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "idle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "zoomChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapReady", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "tilesLoaded", void 0);
    AgmMap = AgmMap_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GoogleMapsAPIWrapper, Object, FitBoundsService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], AgmMap);
    var AgmMarker_1;
    var markerId = 0;
    /**
     * AgmMarker renders a map marker inside a {@link AgmMap}.
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    .agm-map-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
     *      </agm-marker>
     *    </agm-map>
     *  `
     * })
     * ```
     */

    var AgmMarker = AgmMarker_1 =
    /*#__PURE__*/
    function () {
      function AgmMarker(_markerManager) {
        _classCallCheck(this, AgmMarker);

        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If true, the marker is visible
         */

        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */

        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */

        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */

        this.zIndex = 1;
        /**
         * If true, the marker can be clicked. Default value is true.
         */
        // tslint:disable-next-line:no-input-rename

        this.clickable = true;
        /**
         * This event is fired when the marker's animation property changes.
         *
         * @memberof AgmMarker
         */

        this.animationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */

        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks twice on the marker.
         */

        this.markerDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user rightclicks on the marker.
         */

        this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the marker.
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the marker.
         */

        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the marker.
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user mouses over the marker.
         */

        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user mouses outside the marker.
         */

        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** @internal */

        this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this._id = (markerId++).toString();
      }
      /* @internal */


      _createClass(AgmMarker, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this71 = this;

          this.handleInfoWindowUpdate();
          this.infoWindow.changes.subscribe(function () {
            return _this71.handleInfoWindowUpdate();
          });
        }
      }, {
        key: "handleInfoWindowUpdate",
        value: function handleInfoWindowUpdate() {
          var _this72 = this;

          if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
          }

          this.infoWindow.forEach(function (marker) {
            marker.hostMarker = _this72;
          });
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (typeof this.latitude === 'string') {
            this.latitude = Number(this.latitude);
          }

          if (typeof this.longitude === 'string') {
            this.longitude = Number(this.longitude);
          }

          if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
          }

          if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);

            this._updateFitBoundsDetails();

            this._markerAddedToManger = true;

            this._addEventListeners();

            return;
          }

          if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);

            this._updateFitBoundsDetails();
          }

          if (changes['title']) {
            this._markerManager.updateTitle(this);
          }

          if (changes['label']) {
            this._markerManager.updateLabel(this);
          }

          if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
          }

          if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
          }

          if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
          }

          if (changes['visible']) {
            this._markerManager.updateVisible(this);
          }

          if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
          }

          if (changes['clickable']) {
            this._markerManager.updateClickable(this);
          }

          if (changes['animation']) {
            this._markerManager.updateAnimation(this);
          }
        }
        /** @internal */

      }, {
        key: "getFitBoundsDetails$",
        value: function getFitBoundsDetails$() {
          return this._fitBoundsDetails$.asObservable();
        }
      }, {
        key: "_updateFitBoundsDetails",
        value: function _updateFitBoundsDetails() {
          this._fitBoundsDetails$.next({
            latLng: {
              lat: this.latitude,
              lng: this.longitude
            }
          });
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this73 = this;

          var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this73.openInfoWindow) {
              _this73.infoWindow.forEach(function (infoWindow) {
                return infoWindow.open();
              });
            }

            _this73.markerClick.emit(_this73);
          });

          this._observableSubscriptions.push(cs);

          var dcs = this._markerManager.createEventObservable('dblclick', this).subscribe(function () {
            _this73.markerDblClick.emit(null);
          });

          this._observableSubscriptions.push(dcs);

          var rc = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
            _this73.markerRightClick.emit(null);
          });

          this._observableSubscriptions.push(rc);

          var ds = this._markerManager.createEventObservable('dragstart', this).subscribe(function (e) {
            _this73.dragStart.emit({
              coords: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              }
            });
          });

          this._observableSubscriptions.push(ds);

          var d = this._markerManager.createEventObservable('drag', this).subscribe(function (e) {
            _this73.drag.emit({
              coords: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              }
            });
          });

          this._observableSubscriptions.push(d);

          var de = this._markerManager.createEventObservable('dragend', this).subscribe(function (e) {
            _this73.dragEnd.emit({
              coords: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              }
            });
          });

          this._observableSubscriptions.push(de);

          var mover = this._markerManager.createEventObservable('mouseover', this).subscribe(function (e) {
            _this73.mouseOver.emit({
              coords: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              }
            });
          });

          this._observableSubscriptions.push(mover);

          var mout = this._markerManager.createEventObservable('mouseout', this).subscribe(function (e) {
            _this73.mouseOut.emit({
              coords: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              }
            });
          });

          this._observableSubscriptions.push(mout);

          var anChng = this._markerManager.createEventObservable('animation_changed', this).subscribe(function () {
            _this73.animationChange.emit(_this73.animation);
          });

          this._observableSubscriptions.push(anChng);
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return 'AgmMarker-' + this._id.toString();
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._markerManager.deleteMarker(this); // unsubscribe all registered observable subscriptions


          this._observableSubscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return AgmMarker;
    }();

    AgmMarker.ɵfac = function AgmMarker_Factory(t) {
      return new (t || AgmMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MarkerManager));
    };

    AgmMarker.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmMarker,
      selectors: [["agm-marker"]],
      contentQueries: function AgmMarker_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmInfoWindow, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infoWindow = _t);
        }
      },
      inputs: {
        latitude: "latitude",
        longitude: "longitude",
        title: "title",
        label: "label",
        draggable: ["markerDraggable", "draggable"],
        iconUrl: "iconUrl",
        openInfoWindow: "openInfoWindow",
        opacity: "opacity",
        visible: "visible",
        zIndex: "zIndex",
        animation: "animation",
        clickable: ["markerClickable", "clickable"]
      },
      outputs: {
        markerClick: "markerClick",
        dragStart: "dragStart",
        drag: "drag",
        dragEnd: "dragEnd",
        mouseOver: "mouseOver",
        mouseOut: "mouseOut",
        animationChange: "animationChange",
        markerDblClick: "markerDblClick",
        markerRightClick: "markerRightClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: FitBoundsAccessor,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return AgmMarker_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    AgmMarker.ctorParameters = function () {
      return [{
        type: MarkerManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMarker.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMarker.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMarker.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMarker.prototype, "iconUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "openInfoWindow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "opacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerClickable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMarker.prototype, "animation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "animationChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "markerClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "markerDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "markerRightClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "dragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "drag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "dragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "mouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "mouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmInfoWindow), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AgmMarker.prototype, "infoWindow", void 0);
    AgmMarker = AgmMarker_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MarkerManager])], AgmMarker);
    var AgmPolygon_1;
    /**
     * AgmPolygon renders a polygon on a {@link AgmMap}
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    agm-map {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-polygon [paths]="paths">
     *      </agm-polygon>
     *    </agm-map>
     *  `
     * })
     * export class MyMapCmp {
     *   lat: number = 0;
     *   lng: number = 0;
     *   zoom: number = 10;
     *   paths: Array<LatLngLiteral> = [
     *     { lat: 0,  lng: 10 },
     *     { lat: 0,  lng: 20 },
     *     { lat: 10, lng: 20 },
     *     { lat: 10, lng: 10 },
     *     { lat: 0,  lng: 10 }
     *   ]
     *   // Nesting paths will create a hole where they overlap;
     *   nestedPaths: Array<Array<LatLngLiteral>> = [[
     *     { lat: 0,  lng: 10 },
     *     { lat: 0,  lng: 20 },
     *     { lat: 10, lng: 20 },
     *     { lat: 10, lng: 10 },
     *     { lat: 0,  lng: 10 }
     *   ], [
     *     { lat: 0, lng: 15 },
     *     { lat: 0, lng: 20 },
     *     { lat: 5, lng: 20 },
     *     { lat: 5, lng: 15 },
     *     { lat: 0, lng: 15 }
     *   ]]
     * }
     * ```
     */

    var AgmPolygon = AgmPolygon_1 =
    /*#__PURE__*/
    function () {
      function AgmPolygon(_polygonManager) {
        _classCallCheck(this, AgmPolygon);

        this._polygonManager = _polygonManager;
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic
         * property defines the mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */

        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */

        this.geodesic = false;
        /**
         * The ordered sequence of coordinates that designates a closed loop.
         * Unlike polylines, a polygon may consist of one or more paths.
         *  As a result, the paths property may specify one or more arrays of
         * LatLng coordinates. Paths are closed automatically; do not repeat the
         * first vertex of the path as the last vertex. Simple polygons may be
         * defined using a single array of LatLngs. More complex polygons may
         * specify an array of arrays. Any simple arrays are converted into Arrays.
         * Inserting or removing LatLngs from the Array will automatically update
         * the polygon on the map.
         */

        this.paths = [];
        /**
         * This event is fired when the DOM click event is fired on the Polygon.
         */

        this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polygon.
         */

        this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polygon.
         */

        this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polygon.
         */

        this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polygon.
         */

        this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polygon.
         */

        this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polygon.
         */

        this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseout.
         */

        this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseover.
         */

        this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polygon
         */

        this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the Polygon is right-clicked on.
         */

        this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired after Polygon first path changes.
         */

        this.polyPathsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
      }
      /** @internal */


      _createClass(AgmPolygon, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          if (!this._polygonAddedToManager) {
            this._init();
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._polygonAddedToManager) {
            this._init();

            return;
          }

          this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
        }
      }, {
        key: "_init",
        value: function _init() {
          this._polygonManager.addPolygon(this);

          this._polygonAddedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this74 = this;

          var handlers = [{
            name: 'click',
            handler: function handler(ev) {
              return _this74.polyClick.emit(ev);
            }
          }, {
            name: 'dblclick',
            handler: function handler(ev) {
              return _this74.polyDblClick.emit(ev);
            }
          }, {
            name: 'drag',
            handler: function handler(ev) {
              return _this74.polyDrag.emit(ev);
            }
          }, {
            name: 'dragend',
            handler: function handler(ev) {
              return _this74.polyDragEnd.emit(ev);
            }
          }, {
            name: 'dragstart',
            handler: function handler(ev) {
              return _this74.polyDragStart.emit(ev);
            }
          }, {
            name: 'mousedown',
            handler: function handler(ev) {
              return _this74.polyMouseDown.emit(ev);
            }
          }, {
            name: 'mousemove',
            handler: function handler(ev) {
              return _this74.polyMouseMove.emit(ev);
            }
          }, {
            name: 'mouseout',
            handler: function handler(ev) {
              return _this74.polyMouseOut.emit(ev);
            }
          }, {
            name: 'mouseover',
            handler: function handler(ev) {
              return _this74.polyMouseOver.emit(ev);
            }
          }, {
            name: 'mouseup',
            handler: function handler(ev) {
              return _this74.polyMouseUp.emit(ev);
            }
          }, {
            name: 'rightclick',
            handler: function handler(ev) {
              return _this74.polyRightClick.emit(ev);
            }
          }];
          handlers.forEach(function (obj) {
            var os = _this74._polygonManager.createEventObservable(obj.name, _this74).subscribe(obj.handler);

            _this74._subscriptions.push(os);
          });

          this._polygonManager.createPathEventObservable(this).then(function (paths$) {
            var os = paths$.subscribe(function (pathEvent) {
              return _this74.polyPathsChange.emit(pathEvent);
            });

            _this74._subscriptions.push(os);
          });
        }
      }, {
        key: "_updatePolygonOptions",
        value: function _updatePolygonOptions(changes) {
          return Object.keys(changes).filter(function (k) {
            return AgmPolygon_1._polygonOptionsAttributes.indexOf(k) !== -1;
          }).reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
          }, {});
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._polygonManager.deletePolygon(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }, {
        key: "getPath",
        value: function getPath() {
          return this._polygonManager.getPath(this);
        }
      }, {
        key: "getPaths",
        value: function getPaths() {
          return this._polygonManager.getPaths(this);
        }
      }]);

      return AgmPolygon;
    }();

    AgmPolygon.ɵfac = function AgmPolygon_Factory(t) {
      return new (t || AgmPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PolygonManager));
    };

    AgmPolygon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolygon,
      selectors: [["agm-polygon"]],
      inputs: {
        clickable: "clickable",
        draggable: ["polyDraggable", "draggable"],
        editable: "editable",
        geodesic: "geodesic",
        paths: "paths",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        strokeWeight: "strokeWeight",
        visible: "visible",
        zIndex: "zIndex"
      },
      outputs: {
        polyClick: "polyClick",
        polyDblClick: "polyDblClick",
        polyDrag: "polyDrag",
        polyDragEnd: "polyDragEnd",
        polyDragStart: "polyDragStart",
        polyMouseDown: "polyMouseDown",
        polyMouseMove: "polyMouseMove",
        polyMouseOut: "polyMouseOut",
        polyMouseOver: "polyMouseOver",
        polyMouseUp: "polyMouseUp",
        polyRightClick: "polyRightClick",
        polyPathsChange: "polyPathsChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmPolygon._polygonOptionsAttributes = ['clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map', 'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable', 'editable', 'visible'];

    AgmPolygon.ctorParameters = function () {
      return [{
        type: PolygonManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('polyDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolygon.prototype, "fillColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "fillOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "geodesic", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], AgmPolygon.prototype, "paths", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolygon.prototype, "strokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "strokeOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "strokeWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmPolygon.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDrag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyRightClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "polyPathsChange", void 0);
    AgmPolygon = AgmPolygon_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [PolygonManager])], AgmPolygon);
    /**
     * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
     * or custom icons either along the entire line, or in a specific part of it.
     * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
     *
     * ### Example
     * ```html
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-polyline>
     *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
     *          </agm-icon-sequence>
     *      </agm-polyline>
     *    </agm-map>
     * ```
     *
     * @export
     * @class AgmPolylineIcon
     */

    var AgmPolylineIcon =
    /*#__PURE__*/
    function () {
      function AgmPolylineIcon() {
        _classCallCheck(this, AgmPolylineIcon);
      }

      _createClass(AgmPolylineIcon, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.path == null) {
            throw new Error('Icon Sequence path is required');
          }
        }
      }]);

      return AgmPolylineIcon;
    }();

    AgmPolylineIcon.ɵfac = function AgmPolylineIcon_Factory(t) {
      return new (t || AgmPolylineIcon)();
    };

    AgmPolylineIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolylineIcon,
      selectors: [["agm-icon-sequence"]],
      inputs: {
        fixedRotation: "fixedRotation",
        offset: "offset",
        repeat: "repeat",
        anchorX: "anchorX",
        anchorY: "anchorY",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        path: "path",
        rotation: "rotation",
        scale: "scale",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        strokeWeight: "strokeWeight"
      }
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmPolylineIcon.prototype, "fixedRotation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "offset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "repeat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "anchorX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "anchorY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "fillColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "fillOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "path", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "rotation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "scale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "strokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "strokeOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "strokeWeight", void 0);
    var AgmPolylinePoint_1;
    /**
     * AgmPolylinePoint represents one element of a polyline within a  {@link
     * AgmPolyline}
     */

    var AgmPolylinePoint = AgmPolylinePoint_1 =
    /*#__PURE__*/
    function () {
      function AgmPolylinePoint() {
        _classCallCheck(this, AgmPolylinePoint);

        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AgmPolylinePoint, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['latitude'] || changes['longitude']) {
            var position = {
              lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
              lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude
            };
            this.positionChanged.emit(position);
          }
        }
        /** @internal */

      }, {
        key: "getFitBoundsDetails$",
        value: function getFitBoundsDetails$() {
          return this.positionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
            lat: this.latitude,
            lng: this.longitude
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (position) {
            return {
              latLng: position
            };
          }));
        }
      }]);

      return AgmPolylinePoint;
    }();

    AgmPolylinePoint.ɵfac = function AgmPolylinePoint_Factory(t) {
      return new (t || AgmPolylinePoint)();
    };

    AgmPolylinePoint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolylinePoint,
      selectors: [["agm-polyline-point"]],
      inputs: {
        latitude: "latitude",
        longitude: "longitude"
      },
      outputs: {
        positionChanged: "positionChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: FitBoundsAccessor,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return AgmPolylinePoint_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylinePoint.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylinePoint.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolylinePoint.prototype, "positionChanged", void 0);
    AgmPolylinePoint = AgmPolylinePoint_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AgmPolylinePoint);
    var AgmPolyline_1;
    var polylineId = 0;
    /**
     * AgmPolyline renders a polyline on a {@link AgmMap}
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    .agm-map-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-polyline>
     *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
     *          </agm-polyline-point>
     *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
     *          </agm-polyline-point>
     *      </agm-polyline>
     *    </agm-map>
     *  `
     * })
     * ```
     */

    var AgmPolyline = AgmPolyline_1 =
    /*#__PURE__*/
    function () {
      function AgmPolyline(_polylineManager) {
        _classCallCheck(this, AgmPolyline);

        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */

        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */

        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */

        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */

        this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */

        this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */

        this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polyline.
         */

        this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polyline.
         */

        this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */

        this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */

        this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseout.
         */

        this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseover.
         */

        this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */

        this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the Polyline is right-clicked on.
         */

        this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired after Polyline's path changes.
         */

        this.polyPathChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
      }
      /** @internal */


      _createClass(AgmPolyline, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this75 = this;

          if (this.points.length) {
            this.points.forEach(function (point) {
              var s = point.positionChanged.subscribe(function () {
                _this75._polylineManager.updatePolylinePoints(_this75);
              });

              _this75._subscriptions.push(s);
            });
          }

          if (!this._polylineAddedToManager) {
            this._init();
          }

          var pointSub = this.points.changes.subscribe(function () {
            return _this75._polylineManager.updatePolylinePoints(_this75);
          });

          this._subscriptions.push(pointSub);

          this._polylineManager.updatePolylinePoints(this);

          var iconSub = this.iconSequences.changes.subscribe(function () {
            return _this75._polylineManager.updateIconSequences(_this75);
          });

          this._subscriptions.push(iconSub);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._polylineAddedToManager) {
            this._init();

            return;
          }

          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmPolyline_1._polylineOptionsAttributes.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            return options[k] = changes[k].currentValue;
          });

          this._polylineManager.setPolylineOptions(this, options);
        }
      }, {
        key: "getPath",
        value: function getPath() {
          return this._polylineManager.getPath(this);
        }
      }, {
        key: "_init",
        value: function _init() {
          this._polylineManager.addPolyline(this);

          this._polylineAddedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this76 = this;

          var handlers = [{
            name: 'click',
            handler: function handler(ev) {
              return _this76.lineClick.emit(ev);
            }
          }, {
            name: 'dblclick',
            handler: function handler(ev) {
              return _this76.lineDblClick.emit(ev);
            }
          }, {
            name: 'drag',
            handler: function handler(ev) {
              return _this76.lineDrag.emit(ev);
            }
          }, {
            name: 'dragend',
            handler: function handler(ev) {
              return _this76.lineDragEnd.emit(ev);
            }
          }, {
            name: 'dragstart',
            handler: function handler(ev) {
              return _this76.lineDragStart.emit(ev);
            }
          }, {
            name: 'mousedown',
            handler: function handler(ev) {
              return _this76.lineMouseDown.emit(ev);
            }
          }, {
            name: 'mousemove',
            handler: function handler(ev) {
              return _this76.lineMouseMove.emit(ev);
            }
          }, {
            name: 'mouseout',
            handler: function handler(ev) {
              return _this76.lineMouseOut.emit(ev);
            }
          }, {
            name: 'mouseover',
            handler: function handler(ev) {
              return _this76.lineMouseOver.emit(ev);
            }
          }, {
            name: 'mouseup',
            handler: function handler(ev) {
              return _this76.lineMouseUp.emit(ev);
            }
          }, {
            name: 'rightclick',
            handler: function handler(ev) {
              return _this76.lineRightClick.emit(ev);
            }
          }];
          handlers.forEach(function (obj) {
            var os = _this76._polylineManager.createEventObservable(obj.name, _this76).subscribe(obj.handler);

            _this76._subscriptions.push(os);
          });

          this._polylineManager.createPathEventObservable(this).then(function (ob$) {
            var os = ob$.subscribe(function (pathEvent) {
              return _this76.polyPathChange.emit(pathEvent);
            });

            _this76._subscriptions.push(os);
          });
        }
        /** @internal */

      }, {
        key: "_getPoints",
        value: function _getPoints() {
          if (this.points) {
            return this.points.toArray();
          }

          return [];
        }
      }, {
        key: "_getIcons",
        value: function _getIcons() {
          if (this.iconSequences) {
            return this.iconSequences.toArray();
          }

          return [];
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._polylineManager.deletePolyline(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return AgmPolyline;
    }();

    AgmPolyline.ɵfac = function AgmPolyline_Factory(t) {
      return new (t || AgmPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PolylineManager));
    };

    AgmPolyline.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolyline,
      selectors: [["agm-polyline"]],
      contentQueries: function AgmPolyline_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmPolylinePoint, false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmPolylineIcon, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.points = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.iconSequences = _t);
        }
      },
      inputs: {
        clickable: "clickable",
        draggable: ["polylineDraggable", "draggable"],
        editable: "editable",
        geodesic: "geodesic",
        visible: "visible",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        strokeWeight: "strokeWeight",
        zIndex: "zIndex"
      },
      outputs: {
        lineClick: "lineClick",
        lineDblClick: "lineDblClick",
        lineDrag: "lineDrag",
        lineDragEnd: "lineDragEnd",
        lineDragStart: "lineDragStart",
        lineMouseDown: "lineMouseDown",
        lineMouseMove: "lineMouseMove",
        lineMouseOut: "lineMouseOut",
        lineMouseOver: "lineMouseOver",
        lineMouseUp: "lineMouseUp",
        lineRightClick: "lineRightClick",
        polyPathChange: "polyPathChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmPolyline._polylineOptionsAttributes = ['draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'zIndex'];

    AgmPolyline.ctorParameters = function () {
      return [{
        type: PolylineManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('polylineDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "geodesic", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolyline.prototype, "strokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "strokeOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "strokeWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDrag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineRightClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "polyPathChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmPolylinePoint), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AgmPolyline.prototype, "points", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmPolylineIcon), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AgmPolyline.prototype, "iconSequences", void 0);
    AgmPolyline = AgmPolyline_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [PolylineManager])], AgmPolyline);
    var AgmRectangle_1;

    var AgmRectangle = AgmRectangle_1 =
    /*#__PURE__*/
    function () {
      function AgmRectangle(_manager) {
        _classCallCheck(this, AgmRectangle);

        this._manager = _manager;
        /**
         * Indicates whether this Rectangle handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this rectangle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this rectangle by dragging the control points shown at
         * the center and around the circumference of the rectangle. Defaults to false.
         */

        this.editable = false;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */

        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */

        this.strokeWeight = 0;
        /**
         * Whether this rectangle is visible on the map. Defaults to true.
         */

        this.visible = true;
        /**
         * This event is fired when the rectangle's is changed.
         */

        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */

        this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */

        this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the rectangle.
         */

        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the rectangle.
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the rectangle.
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the rectangle.
         */

        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the rectangle.
         */

        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseout.
         */

        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseover.
         */

        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the rectangle.
         */

        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the rectangle is right-clicked on.
         */

        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
      }
      /** @internal */


      _createClass(AgmRectangle, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._manager.addRectangle(this);

          this._rectangleAddedToManager = true;

          this._registerEventListeners();
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._rectangleAddedToManager) {
            return;
          }

          if (changes['north'] || changes['east'] || changes['south'] || changes['west']) {
            this._manager.setBounds(this);
          }

          if (changes['editable']) {
            this._manager.setEditable(this);
          }

          if (changes['draggable']) {
            this._manager.setDraggable(this);
          }

          if (changes['visible']) {
            this._manager.setVisible(this);
          }

          this._updateRectangleOptionsChanges(changes);
        }
      }, {
        key: "_updateRectangleOptionsChanges",
        value: function _updateRectangleOptionsChanges(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmRectangle_1._mapOptions.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
          }
        }
      }, {
        key: "_registerEventListeners",
        value: function _registerEventListeners() {
          var _this77 = this;

          var events = new Map();
          events.set('bounds_changed', this.boundsChange);
          events.set('click', this.rectangleClick);
          events.set('dblclick', this.rectangleDblClick);
          events.set('drag', this.drag);
          events.set('dragend', this.dragEnd);
          events.set('dragStart', this.dragStart);
          events.set('mousedown', this.mouseDown);
          events.set('mousemove', this.mouseMove);
          events.set('mouseout', this.mouseOut);
          events.set('mouseover', this.mouseOver);
          events.set('mouseup', this.mouseUp);
          events.set('rightclick', this.rightClick);
          events.forEach(function (eventEmitter, eventName) {
            _this77._eventSubscriptions.push(_this77._manager.createEventObservable(eventName, _this77).subscribe(function (value) {
              switch (eventName) {
                case 'bounds_changed':
                  _this77._manager.getBounds(_this77).then(function (bounds) {
                    return eventEmitter.emit({
                      north: bounds.getNorthEast().lat(),
                      east: bounds.getNorthEast().lng(),
                      south: bounds.getSouthWest().lat(),
                      west: bounds.getSouthWest().lng()
                    });
                  });

                  break;

                default:
                  eventEmitter.emit({
                    coords: {
                      lat: value.latLng.lat(),
                      lng: value.latLng.lng()
                    }
                  });
              }
            }));
          });
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._eventSubscriptions.forEach(function (s) {
            s.unsubscribe();
          });

          this._eventSubscriptions = null;

          this._manager.removeRectangle(this);
        }
        /**
         * Gets the LatLngBounds of this Rectangle.
         */

      }, {
        key: "getBounds",
        value: function getBounds() {
          return this._manager.getBounds(this);
        }
      }]);

      return AgmRectangle;
    }();

    AgmRectangle.ɵfac = function AgmRectangle_Factory(t) {
      return new (t || AgmRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](RectangleManager));
    };

    AgmRectangle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmRectangle,
      selectors: [["agm-rectangle"]],
      inputs: {
        clickable: "clickable",
        draggable: ["rectangleDraggable", "draggable"],
        editable: "editable",
        strokePosition: "strokePosition",
        strokeWeight: "strokeWeight",
        visible: "visible",
        north: "north",
        east: "east",
        south: "south",
        west: "west",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        zIndex: "zIndex"
      },
      outputs: {
        boundsChange: "boundsChange",
        rectangleClick: "rectangleClick",
        rectangleDblClick: "rectangleDblClick",
        drag: "drag",
        dragEnd: "dragEnd",
        dragStart: "dragStart",
        mouseDown: "mouseDown",
        mouseMove: "mouseMove",
        mouseOut: "mouseOut",
        mouseOver: "mouseOver",
        mouseUp: "mouseUp",
        rightClick: "rightClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmRectangle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

    AgmRectangle.ctorParameters = function () {
      return [{
        type: RectangleManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "north", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "east", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "south", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "west", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rectangleDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmRectangle.prototype, "fillColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "fillOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmRectangle.prototype, "strokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "strokeOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmRectangle.prototype, "strokePosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "strokeWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "boundsChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "rectangleClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "rectangleDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "drag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "dragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "dragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "rightClick", void 0);
    AgmRectangle = AgmRectangle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [RectangleManager])], AgmRectangle);
    var layerId$3 = 0;
    /*
     * This directive adds a transit layer to a google map instance
     * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
     * */

    var AgmTransitLayer =
    /*#__PURE__*/
    function () {
      function AgmTransitLayer(_manager) {
        _classCallCheck(this, AgmTransitLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$3++).toString();
        /**
         * Hide/show transit layer
         */

        this.visible = true;
      }

      _createClass(AgmTransitLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addTransitLayer(this, {
            visible: this.visible
          });

          this._addedToManager = true;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._addedToManager) {
            return;
          }

          if (changes['visible'] != null) {
            this._manager.toggleLayerVisibility(this, {
              visible: changes['visible'].currentValue
            });
          }
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmTransitLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteLayer(this);
        }
      }]);

      return AgmTransitLayer;
    }();

    AgmTransitLayer.ɵfac = function AgmTransitLayer_Factory(t) {
      return new (t || AgmTransitLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerManager));
    };

    AgmTransitLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmTransitLayer,
      selectors: [["agm-transit-layer"]],
      inputs: {
        visible: "visible"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    AgmTransitLayer.ctorParameters = function () {
      return [{
        type: LayerManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmTransitLayer.prototype, "visible", void 0);
    AgmTransitLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [LayerManager])], AgmTransitLayer);
    var google$1;
    var SymbolPath;

    (function (SymbolPath) {
      SymbolPath[SymbolPath["BACKWARD_CLOSED_ARROW"] = 3] = "BACKWARD_CLOSED_ARROW";
      SymbolPath[SymbolPath["BACKWARD_OPEN_ARROW"] = 4] = "BACKWARD_OPEN_ARROW";
      SymbolPath[SymbolPath["CIRCLE"] = 0] = "CIRCLE";
      SymbolPath[SymbolPath["FORWARD_CLOSED_ARROW"] = 1] = "FORWARD_CLOSED_ARROW";
      SymbolPath[SymbolPath["FORWARD_OPEN_ARROW"] = 2] = "FORWARD_OPEN_ARROW";
    })(SymbolPath || (SymbolPath = {}));
    /**
     * Identifiers used to specify the placement of controls on the map. Controls are
     * positioned relative to other controls in the same layout position. Controls that
     * are added first are positioned closer to the edge of the map.
     */


    var ControlPosition;

    (function (ControlPosition) {
      ControlPosition[ControlPosition["RIGHT_BOTTOM"] = 0] = "RIGHT_BOTTOM";
      ControlPosition[ControlPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
      ControlPosition[ControlPosition["TOP_CENTER"] = 2] = "TOP_CENTER";
      ControlPosition[ControlPosition["TOP_RIGHT"] = 3] = "TOP_RIGHT";
      ControlPosition[ControlPosition["LEFT_CENTER"] = 4] = "LEFT_CENTER";
      ControlPosition[ControlPosition["LEFT_TOP"] = 5] = "LEFT_TOP";
      ControlPosition[ControlPosition["LEFT_BOTTOM"] = 6] = "LEFT_BOTTOM";
      ControlPosition[ControlPosition["RIGHT_TOP"] = 7] = "RIGHT_TOP";
      ControlPosition[ControlPosition["RIGHT_CENTER"] = 8] = "RIGHT_CENTER";
      ControlPosition[ControlPosition["BOTTOM_RIGHT"] = 9] = "BOTTOM_RIGHT";
      ControlPosition[ControlPosition["BOTTOM_LEFT"] = 10] = "BOTTOM_LEFT";
      ControlPosition[ControlPosition["BOTTOM_CENTER"] = 11] = "BOTTOM_CENTER";
    })(ControlPosition || (ControlPosition = {}));

    var MapTypeId;

    (function (MapTypeId) {
      /** This map type displays a transparent layer of major streets on satellite images. */
      MapTypeId[MapTypeId["HYBRID"] = 0] = "HYBRID";
      /** This map type displays a normal street map. */

      MapTypeId[MapTypeId["ROADMAP"] = 1] = "ROADMAP";
      /** This map type displays satellite images. */

      MapTypeId[MapTypeId["SATELLITE"] = 2] = "SATELLITE";
      /** This map type displays maps with physical features such as terrain and vegetation. */

      MapTypeId[MapTypeId["TERRAIN"] = 3] = "TERRAIN";
    })(MapTypeId || (MapTypeId = {}));

    var MapTypeControlStyle;

    (function (MapTypeControlStyle) {
      MapTypeControlStyle[MapTypeControlStyle["DEFAULT"] = 0] = "DEFAULT";
      MapTypeControlStyle[MapTypeControlStyle["DROPDOWN_MENU"] = 2] = "DROPDOWN_MENU";
      MapTypeControlStyle[MapTypeControlStyle["HORIZONTAL_BAR"] = 1] = "HORIZONTAL_BAR";
    })(MapTypeControlStyle || (MapTypeControlStyle = {}));

    var ScaleControlStyle;

    (function (ScaleControlStyle) {
      ScaleControlStyle[ScaleControlStyle["DEFAULT"] = 0] = "DEFAULT";
    })(ScaleControlStyle || (ScaleControlStyle = {}));

    var ZoomControlStyle;

    (function (ZoomControlStyle) {
      ZoomControlStyle[ZoomControlStyle["DEFAULT"] = 0] = "DEFAULT";
      ZoomControlStyle[ZoomControlStyle["LARGE"] = 1] = "LARGE";
      ZoomControlStyle[ZoomControlStyle["SMALL"] = 2] = "SMALL";
    })(ZoomControlStyle || (ZoomControlStyle = {}));

    var GeocoderLocationType;

    (function (GeocoderLocationType) {
      GeocoderLocationType["APPROXIMATE"] = "APPROXIMATE";
      GeocoderLocationType["GEOMETRIC_CENTER"] = "GEOMETRIC_CENTER";
      GeocoderLocationType["RANGE_INTERPOLATED"] = "RANGE_INTERPOLATED";
      GeocoderLocationType["ROOFTOP"] = "ROOFTOP";
    })(GeocoderLocationType || (GeocoderLocationType = {}));

    var GeocoderStatus;

    (function (GeocoderStatus) {
      GeocoderStatus["ERROR"] = "ERROR";
      GeocoderStatus["INVALID_REQUEST"] = "INVALID_REQUEST";
      GeocoderStatus["OK"] = "OK";
      GeocoderStatus["OVER_QUERY_LIMIT"] = "OVER_QUERY_LIMIT";
      GeocoderStatus["REQUEST_DENIED"] = "REQUEST_DENIED";
      GeocoderStatus["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
      GeocoderStatus["ZERO_RESULTS"] = "ZERO_RESULTS";
    })(GeocoderStatus || (GeocoderStatus = {}));

    var AgmGeocoder =
    /*#__PURE__*/
    function () {
      function AgmGeocoder(loader) {
        var _this78 = this;

        _classCallCheck(this, AgmGeocoder);

        var connectableGeocoder$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
          loader.load().then(function () {
            return subscriber.next();
          });
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return _this78._createGeocoder();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["multicast"])(new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1)));
        connectableGeocoder$.connect(); // ignore the subscription
        // since we will remain subscribed till application exits

        this.geocoder$ = connectableGeocoder$;
      }

      _createClass(AgmGeocoder, [{
        key: "geocode",
        value: function geocode(request) {
          var _this79 = this;

          return this.geocoder$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (geocoder) {
            return _this79._getGoogleResults(geocoder, request);
          }));
        }
      }, {
        key: "_getGoogleResults",
        value: function _getGoogleResults(geocoder, request) {
          var geocodeObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["bindCallback"])(geocoder.geocode);
          return geocodeObservable(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref6) {
            var _ref7 = _slicedToArray(_ref6, 2),
                results = _ref7[0],
                status = _ref7[1];

            if (status === GeocoderStatus.OK) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(results);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(status);
          }));
        }
      }, {
        key: "_createGeocoder",
        value: function _createGeocoder() {
          return new google.maps.Geocoder();
        }
      }]);

      return AgmGeocoder;
    }();

    AgmGeocoder.ɵfac = function AgmGeocoder_Factory(t) {
      return new (t || AgmGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader));
    };

    AgmGeocoder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AgmGeocoder,
      factory: AgmGeocoder.ɵfac,
      providedIn: 'root'
    });

    AgmGeocoder.ctorParameters = function () {
      return [{
        type: MapsAPILoader
      }];
    };

    AgmGeocoder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function AgmGeocoder_Factory() {
        return new AgmGeocoder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MapsAPILoader));
      },
      token: AgmGeocoder,
      providedIn: "root"
    });
    AgmGeocoder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader])], AgmGeocoder);

    var WindowRef =
    /*#__PURE__*/
    function () {
      function WindowRef() {
        _classCallCheck(this, WindowRef);
      }

      _createClass(WindowRef, [{
        key: "getNativeWindow",
        value: function getNativeWindow() {
          return window;
        }
      }]);

      return WindowRef;
    }();

    var DocumentRef =
    /*#__PURE__*/
    function () {
      function DocumentRef() {
        _classCallCheck(this, DocumentRef);
      }

      _createClass(DocumentRef, [{
        key: "getNativeDocument",
        value: function getNativeDocument() {
          return document;
        }
      }]);

      return DocumentRef;
    }();

    var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
    var GoogleMapsScriptProtocol;

    (function (GoogleMapsScriptProtocol) {
      GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
      GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
      GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
    })(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
    /**
     * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
     * LazyMapsAPILoaderConfig}.
     */


    var LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');

    var LazyMapsAPILoader =
    /*#__PURE__*/
    function (_MapsAPILoader) {
      _inherits(LazyMapsAPILoader, _MapsAPILoader);

      var _super = _createSuper(LazyMapsAPILoader);

      function LazyMapsAPILoader() {
        var _this80;

        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var w = arguments.length > 1 ? arguments[1] : undefined;
        var d = arguments.length > 2 ? arguments[2] : undefined;
        var localeId = arguments.length > 3 ? arguments[3] : undefined;

        _classCallCheck(this, LazyMapsAPILoader);

        _this80 = _super.call(this);
        _this80.localeId = localeId;
        _this80._SCRIPT_ID = 'agmGoogleMapsApiScript';
        _this80.callbackName = "agmLazyMapsAPILoader";
        _this80._config = config || {};
        _this80._windowRef = w;
        _this80._documentRef = d;
        return _this80;
      }

      _createClass(LazyMapsAPILoader, [{
        key: "load",
        value: function load() {
          var window = this._windowRef.getNativeWindow();

          if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            return Promise.resolve();
          }

          if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
          } // this can happen in HMR situations or Stackblitz.io editors.


          var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);

          if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);

            return this._scriptLoadingPromise;
          }

          var script = this._documentRef.getNativeDocument().createElement('script');

          script.type = 'text/javascript';
          script.async = true;
          script.defer = true;
          script.id = this._SCRIPT_ID;
          script.src = this._getScriptSrc(this.callbackName);

          this._assignScriptLoadingPromise(script);

          this._documentRef.getNativeDocument().body.appendChild(script);

          return this._scriptLoadingPromise;
        }
      }, {
        key: "_assignScriptLoadingPromise",
        value: function _assignScriptLoadingPromise(scriptElem) {
          var _this81 = this;

          this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this81._windowRef.getNativeWindow()[_this81.callbackName] = function () {
              resolve();
            };

            scriptElem.onerror = function (error) {
              reject(error);
            };
          });
        }
      }, {
        key: "_getScriptSrc",
        value: function _getScriptSrc(callbackName) {
          var protocolType = this._config && this._config.protocol || GoogleMapsScriptProtocol.HTTPS;
          var protocol;

          switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
              protocol = '';
              break;

            case GoogleMapsScriptProtocol.HTTP:
              protocol = 'http:';
              break;

            case GoogleMapsScriptProtocol.HTTPS:
              protocol = 'https:';
              break;
          }

          var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
          var queryParams = {
            v: this._config.apiVersion || 'quarterly',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language || this.localeId !== 'en-US' ? this.localeId : null
          };
          var params = Object.keys(queryParams).filter(function (k) {
            return queryParams[k] != null;
          }).filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) || Array.isArray(queryParams[k]) && queryParams[k].length > 0;
          }).map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];

            if (Array.isArray(i)) {
              return {
                key: k,
                value: i.join(',')
              };
            }

            return {
              key: k,
              value: queryParams[k]
            };
          }).map(function (entry) {
            return "".concat(entry.key, "=").concat(entry.value);
          }).join('&');
          return "".concat(protocol, "//").concat(hostAndPath, "?").concat(params);
        }
      }]);

      return LazyMapsAPILoader;
    }(MapsAPILoader);

    LazyMapsAPILoader.ɵfac = function LazyMapsAPILoader_Factory(t) {
      return new (t || LazyMapsAPILoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LAZY_MAPS_API_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DocumentRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]));
    };

    LazyMapsAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LazyMapsAPILoader,
      factory: LazyMapsAPILoader.ɵfac
    });

    LazyMapsAPILoader.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [LAZY_MAPS_API_CONFIG]
        }]
      }, {
        type: WindowRef
      }, {
        type: DocumentRef
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }];
    };

    LazyMapsAPILoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(LAZY_MAPS_API_CONFIG)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, WindowRef, DocumentRef, String])], LazyMapsAPILoader);
    /**
     * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
     * Tag.
     * It's important that the Google Maps API script gets loaded first on the page.
     */

    var NoOpMapsAPILoader =
    /*#__PURE__*/
    function () {
      function NoOpMapsAPILoader() {
        _classCallCheck(this, NoOpMapsAPILoader);
      }

      _createClass(NoOpMapsAPILoader, [{
        key: "load",
        value: function load() {
          if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
          }

          return Promise.resolve();
        }
      }]);

      return NoOpMapsAPILoader;
    }(); // exported map types


    var AgmCoreModule_1;
    /**
     * @internal
     */

    function coreDirectives() {
      return [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer];
    }
    /**
     * The angular-google-maps core module. Contains all Directives/Services/Pipes
     * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
     */


    var AgmCoreModule = AgmCoreModule_1 =
    /*#__PURE__*/
    function () {
      function AgmCoreModule() {
        _classCallCheck(this, AgmCoreModule);
      }

      _createClass(AgmCoreModule, null, [{
        key: "forRoot",

        /**
         * Please use this method when you register the module at the root level.
         */
        value: function forRoot(lazyMapsAPILoaderConfig) {
          return {
            ngModule: AgmCoreModule_1,
            providers: [].concat(BROWSER_GLOBALS_PROVIDERS, [{
              provide: MapsAPILoader,
              useClass: LazyMapsAPILoader
            }, {
              provide: LAZY_MAPS_API_CONFIG,
              useValue: lazyMapsAPILoaderConfig
            }])
          };
        }
      }]);

      return AgmCoreModule;
    }();

    AgmCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AgmCoreModule
    });
    AgmCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AgmCoreModule_Factory(t) {
        return new (t || AgmCoreModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapsAPILoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleMapsAPIWrapper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: MapsAPILoader
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmBicyclingLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-bicycling-layer'
        }]
      }], function () {
        return [{
          type: LayerManager
        }];
      }, {
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CircleManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmCircle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-circle'
        }]
      }], function () {
        return [{
          type: CircleManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['circleDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        centerChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        circleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        circleDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        radiusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataLayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmDataLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-data-layer'
        }]
      }], function () {
        return [{
          type: DataLayerManager
        }];
      }, {
        layerClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        geoJson: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FitBoundsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: MapsAPILoader
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmFitBounds, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[agmFitBounds]'
        }]
      }], function () {
        return [{
          type: FitBoundsAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: FitBoundsService
        }];
      }, {
        agmFitBounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarkerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InfoWindowManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: MarkerManager
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmInfoWindow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'agm-info-window',
          template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: InfoWindowManager
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        infoWindowClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disableAutoPan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KmlLayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmKmlLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-kml-layer'
        }]
      }], function () {
        return [{
          type: KmlLayerManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        screenOverlays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        suppressInfoWindows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        layerClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        defaultViewportChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        statusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PolygonManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PolylineManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RectangleManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'agm-map',
          providers: [CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager],
          host: {
            // todo: deprecated - we will remove it with the next version
            '[class.sebm-google-map-container]': 'true'
          },
          template: "\n              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n              <div class='agm-map-content'>\n                <ng-content></ng-content>\n              </div>\n  ",
          styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: GoogleMapsAPIWrapper
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: FitBoundsService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['mapDraggable']
        }],
        disableDoubleClickZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disableDefaultUI: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollwheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        keyboardShortcuts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        styles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        usePanning: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fitBounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scaleControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapTypeControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        panControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotateControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fullscreenControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapTypeId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clickableIcons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showDefaultInfoWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        gestureHandling: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tilt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        centerChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        boundsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapTypeIdChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        idle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        zoomChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapReady: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tilesLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        minZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        controlSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggableCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggingCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        streetViewControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        streetViewControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fitBoundsPadding: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scaleControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapTypeControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        panControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotateControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fullscreenControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        restriction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMarker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-marker',
          providers: [{
            provide: FitBoundsAccessor,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return AgmMarker_1;
            })
          }],
          inputs: ['latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl', 'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation'],
          outputs: ['markerClick', 'dragStart', 'drag', 'dragEnd', 'mouseOver', 'mouseOut']
        }]
      }], function () {
        return [{
          type: MarkerManager
        }];
      }, {
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['markerDraggable']
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        openInfoWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        opacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['markerClickable']
        }],
        animationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        markerClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        markerDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        markerRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        infoWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [AgmInfoWindow]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        iconUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolygon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polygon'
        }]
      }], function () {
        return [{
          type: PolygonManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['polyDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        geodesic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        paths: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        polyClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyPathsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolylineIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polyline agm-icon-sequence'
        }]
      }], null, {
        fixedRotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        repeat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        anchorX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        anchorY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        path: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolylinePoint, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polyline-point',
          providers: [{
            provide: FitBoundsAccessor,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return AgmPolylinePoint_1;
            })
          }]
        }]
      }], function () {
        return [];
      }, {
        positionChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolyline, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polyline'
        }]
      }], function () {
        return [{
          type: PolylineManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['polylineDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        geodesic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        lineClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyPathChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        points: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [AgmPolylinePoint]
        }],
        iconSequences: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [AgmPolylineIcon]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmRectangle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-rectangle'
        }]
      }], function () {
        return [{
          type: RectangleManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['rectangleDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        boundsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rectangleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rectangleDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        north: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        east: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        south: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        west: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmTransitLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-transit-layer'
        }]
      }], function () {
        return [{
          type: LayerManager
        }];
      }, {
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmGeocoder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: MapsAPILoader
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LazyMapsAPILoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LAZY_MAPS_API_CONFIG]
          }]
        }, {
          type: WindowRef
        }, {
          type: DocumentRef
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }];
      }, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AgmCoreModule, {
        declarations: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer],
        exports: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmCoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: coreDirectives(),
          exports: coreDirectives()
        }]
      }], null, null);
    })(); // main modules

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=agm-core.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAmsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<section class=\"inner-wrapper\">\n\t<app-sidebar></app-sidebar>\n\t<div class=\"main-container\" [ngClass]=\"showMiniSideBar()\">\n\t\t<!-- <app-breadcrumb class=\"d-none d-sm-block\" [title]=\"outletData.activatedRouteData.title\" [icon]=\"outletData.activatedRouteData.icon\"></app-breadcrumb>\n\t\t<app-mobile-breadcrumb class=\"d-block d-sm-none\"></app-mobile-breadcrumb> -->\n\t\t<div class=\"content\">\n\t\t\t<app-alert-air></app-alert-air>\n\t\t\t<app-custom-alert-messages></app-custom-alert-messages>\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t\t<app-footer class=\"d-none d-sm-block\"></app-footer>\n\t\t<app-ams-bottom-menu class=\"d-block d-sm-none\"></app-ams-bottom-menu>\n\t</div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/ams-bottom-menu/ams-bottom-menu.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/ams-bottom-menu/ams-bottom-menu.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsComponentsAmsBottomMenuAmsBottomMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bottom-menu-wrapper\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row no-gutter\">\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<a href=\"javascript:void(0)\" \n\t\t\t\t\trouterLink=\"dashboard\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/home-icon.svg\" class=\"svg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<h4>Home</h4>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<a href=\"javascript:void(0)\" \n\t\t\t\t\trouterLink=\"unit&users/unapproved\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/user-icon.svg\" class=\"svg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<h4>Unit & users</h4>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<a href=\"javascript:void(0)\" \n\t\t\t\t\trouterLink=\"helpdesk/settings\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/credit-icon-02.svg\" class=\"svg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<h4>Help Desk</h4>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<a href=\"javascript:void(0)\" \n\t\t\t\t\trouterLink=\"visitor/settings\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/visitor-icon.svg\" class=\"svg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<h4>Visitors</h4>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/settings/admin/admin.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/settings/admin/admin.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsComponentsSettingsAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  admin works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/settings/payment-setup/payment-setup.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/settings/payment-setup/payment-setup.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsComponentsSettingsPaymentSetupPaymentSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  payment-setup works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/settings/settings.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/settings/settings.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsComponentsSettingsSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/sidebar/sidebar.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/sidebar/sidebar.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sidebar\" [ngClass]=\"showMiniSideBar()\">\n\t<div class=\"hero-info\">\n\t\t<div class=\"apartment\" *ngIf=\"isApartmentSelected\" (click)=\"showApartments()\">\n\t\t\t<div class=\"icon\"><img src=\"assets/images/apartment2-icon.svg\" width=\"24\" /></div>\n\t\t\t<h5>{{apartmentName}}</h5>\n\t\t</div>\n\t\t<div class=\"user d-none\" (click)=\"showUserInfo()\" *ngIf=\"userLoggedIn\">\n\t\t\t<div class=\"profile\">\n\t\t\t\t<figure class=\"profile-picture\">\n\t\t\t\t\t<img src=\"https://randomuser.me/api/portraits/men/9.jpg\" id=\"userProfile\">\n\t\t\t\t</figure>\n\t\t\t\t<div class=\"profile-info\">\n\t      \t\t\t<h5 class=\"text-capitalize\">{{user.firstName}}</h5>\n               \t\t<p>{{user.role}}</p>\n\t      \t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<nav class=\"nav-main\">\n\t\t<ul id=\"leftMenuScroller\"  class=\"navs scroller\" malihu-scrollbar>\n\n\t\t\t<app-loader *ngIf=\"!isMenuLoaded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isMenuLoaded\">\n\n\t\t\t\t<ng-container *ngFor=\"let menu of sidebarMenuDataList\">\n\t\t\t\t\t\n\n\t\t\t\t\t<ng-container *ngIf=\"menu.submenus.length != 0\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<li class=\"nav-list nav-parent\" [ngClass]=\"isNavActive(menu.name)\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"toggleNav(menu.name)\">\n\t\t\t\t\t\t\t\t<div class=\"icon\"><img class=\"svg\" src=\"assets/images/{{menu.icon}}-icon.svg\" width=\"17\" /></div>\n\t\t\t\t\t\t\t\t<span>{{menu.label}}</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul class=\"nav nav-children\" [ngClass]=\"isNavActive(menu.name)\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let submenu of menu.submenus\">\n\t\t\t\t\t\t\t\t\t<li >\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\t\t\t\t\t\tdata-name=\"{{menu.name}}\"\n\t\t\t\t\t\t\t\t\t\tclass=\"nav-link\"\n\t\t\t\t\t\t\t\t\t\t[routerLink] = \"submenu.link\" \n\t\t\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">{{submenu.label}}</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ng-container>\n\n\n\t\t\t\t\t <ng-container *ngIf=\"menu.submenus.length == 0\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<li class=\"nav-list\" [ngClass]=\"isNavActive(menu.name)\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\t\t\t\tclass=\"nav-link\"\n\t\t\t\t\t\t\t\tdata-name=\"{{menu.name}}\"\n\t\t\t\t\t\t\t\t(click)=\"toggleNav(menu.name)\"\n\t\t\t\t\t\t\t\t[routerLink] = \"menu.link\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<div class=\"icon\"><img class=\"svg\" src=\"assets/images/{{menu.icon}}-icon.svg\" width=\"17\" /></div>\n\t\t\t\t\t\t\t\t<span>{{menu.label}}</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ng-container> \n\n\t\t\t\t</ng-container>\n\n\t\t\t</ng-container>\n\n\t\t</ul> \n\t</nav>\n</div>";
    /***/
  },

  /***/
  "./src/app/ams/ams-routing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/ams/ams-routing.module.ts ***!
    \*******************************************/

  /*! exports provided: routes, AmsRoutingModule */

  /***/
  function srcAppAmsAmsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmsRoutingModule", function () {
      return AmsRoutingModule;
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


    var _ams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ams.component */
    "./src/app/ams/ams.component.ts");

    var routes = [{
      path: '',
      component: _ams_component__WEBPACK_IMPORTED_MODULE_3__["AmsComponent"],
      children: [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-dashboard-module */
          "dashboard-dashboard-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/dashboard.module */
          "./src/app/ams/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: 'my-property',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | my-property-my-property-module */
          "my-property-my-property-module").then(__webpack_require__.bind(null,
          /*! ./my-property/my-property.module */
          "./src/app/ams/my-property/my-property.module.ts")).then(function (m) {
            return m.MyPropertyModule;
          });
        }
      }, {
        path: 'unit&users',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | unit-users-unit-users-module */
          [__webpack_require__.e("default~my-profile-my-profile-module~unit-users-unit-users-module"), __webpack_require__.e("unit-users-unit-users-module")]).then(__webpack_require__.bind(null,
          /*! ./unit-users/unit-users.module */
          "./src/app/ams/unit-users/unit-users.module.ts")).then(function (m) {
            return m.UnitUsersModule;
          });
        }
      }, {
        path: 'inbox',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | ams-inbox-ams-inbox-module */
          "ams-inbox-ams-inbox-module").then(__webpack_require__.bind(null,
          /*! ./ams-inbox/ams-inbox.module */
          "./src/app/ams/ams-inbox/ams-inbox.module.ts")).then(function (m) {
            return m.AmsInboxModule;
          });
        }
      }, {
        path: 'helpdesk',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | helpdesk-helpdesk-module */
          "helpdesk-helpdesk-module").then(__webpack_require__.bind(null,
          /*! ./helpdesk/helpdesk.module */
          "./src/app/ams/helpdesk/helpdesk.module.ts")).then(function (m) {
            return m.HelpdeskModule;
          });
        }
      }, {
        path: 'income',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | income-tracker-income-tracker-module */
          "income-tracker-income-tracker-module").then(__webpack_require__.bind(null,
          /*! ./income-tracker/income-tracker.module */
          "./src/app/ams/income-tracker/income-tracker.module.ts")).then(function (m) {
            return m.IncomeTrackerModule;
          });
        }
      }, {
        path: 'expense',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | expense-tracker-expense-tracker-module */
          "expense-tracker-expense-tracker-module").then(__webpack_require__.bind(null,
          /*! ./expense-tracker/expense-tracker.module */
          "./src/app/ams/expense-tracker/expense-tracker.module.ts")).then(function (m) {
            return m.ExpenseTrackerModule;
          });
        }
      }, {
        path: 'general-ledger',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | general-ledger-general-ledger-module */
          "general-ledger-general-ledger-module").then(__webpack_require__.bind(null,
          /*! ./general-ledger/general-ledger.module */
          "./src/app/ams/general-ledger/general-ledger.module.ts")).then(function (m) {
            return m.GeneralLedgerModule;
          });
        }
      }, {
        path: 'bank',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | bank-cash-bank-cash-module */
          "bank-cash-bank-cash-module").then(__webpack_require__.bind(null,
          /*! ./bank-cash/bank-cash.module */
          "./src/app/ams/bank-cash/bank-cash.module.ts")).then(function (m) {
            return m.BankCashModule;
          });
        }
      }, {
        path: 'work-permit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | work-permit-work-permit-module */
          [__webpack_require__.e("default~broadcast-broadcast-module~work-permit-work-permit-module"), __webpack_require__.e("work-permit-work-permit-module")]).then(__webpack_require__.bind(null,
          /*! ./work-permit/work-permit.module */
          "./src/app/ams/work-permit/work-permit.module.ts")).then(function (m) {
            return m.WorkPermitModule;
          });
        }
      }, {
        path: 'utility',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | utility-utility-module */
          "utility-utility-module").then(__webpack_require__.bind(null,
          /*! ./utility/utility.module */
          "./src/app/ams/utility/utility.module.ts")).then(function (m) {
            return m.UtilityModule;
          });
        }
      }, {
        path: 'broadcast',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | broadcast-broadcast-module */
          [__webpack_require__.e("default~broadcast-broadcast-module~work-permit-work-permit-module"), __webpack_require__.e("broadcast-broadcast-module")]).then(__webpack_require__.bind(null,
          /*! ./broadcast/broadcast.module */
          "./src/app/ams/broadcast/broadcast.module.ts")).then(function (m) {
            return m.BroadcastModule;
          });
        }
      }, {
        path: 'security',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | security-security-module */
          "security-security-module").then(__webpack_require__.bind(null,
          /*! ./security/security.module */
          "./src/app/ams/security/security.module.ts")).then(function (m) {
            return m.SecurityModule;
          });
        }
      }, {
        path: 'visitor',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | visitor-visitor-module */
          [__webpack_require__.e("common"), __webpack_require__.e("visitor-visitor-module")]).then(__webpack_require__.bind(null,
          /*! ./visitor/visitor.module */
          "./src/app/ams/visitor/visitor.module.ts")).then(function (m) {
            return m.VisitorModule;
          });
        }
      }, {
        path: 'staff',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | staff-manager-staff-manager-module */
          "staff-manager-staff-manager-module").then(__webpack_require__.bind(null,
          /*! ./staff-manager/staff-manager.module */
          "./src/app/ams/staff-manager/staff-manager.module.ts")).then(function (m) {
            return m.StaffManagerModule;
          });
        }
      }, {
        path: 'moveinout-tracker',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | moveinout-tracker-moveinout-tracker-module */
          "moveinout-tracker-moveinout-tracker-module").then(__webpack_require__.bind(null,
          /*! ./moveinout-tracker/moveinout-tracker.module */
          "./src/app/ams/moveinout-tracker/moveinout-tracker.module.ts")).then(function (m) {
            return m.MoveinoutTrackerModule;
          });
        }
      }, {
        path: 'profile-settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-settings-profile-settings-module */
          "profile-settings-profile-settings-module").then(__webpack_require__.bind(null,
          /*! ./profile-settings/profile-settings.module */
          "./src/app/ams/profile-settings/profile-settings.module.ts")).then(function (m) {
            return m.ProfileSettingsModule;
          });
        }
      }, {
        path: 'my-profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-area-profile-area-module */
          "profile-area-profile-area-module").then(__webpack_require__.bind(null,
          /*! ./profile-area/profile-area.module */
          "./src/app/ams/profile-area/profile-area.module.ts")).then(function (m) {
            return m.ProfileAreaModule;
          });
        }
      }, {
        path: 'parking-management',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | parking-management-parking-management-module */
          "parking-management-parking-management-module").then(__webpack_require__.bind(null,
          /*! ./parking-management/parking-management.module */
          "./src/app/ams/parking-management/parking-management.module.ts")).then(function (m) {
            return m.ParkingManagementModule;
          });
        }
      }, {
        path: 'facility',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | facility-facility-module */
          "facility-facility-module").then(__webpack_require__.bind(null,
          /*! ./facility/facility.module */
          "./src/app/ams/facility/facility.module.ts")).then(function (m) {
            return m.FacilityModule;
          });
        }
      }, {
        path: 'meetings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | meetings-meetings-module */
          "meetings-meetings-module").then(__webpack_require__.bind(null,
          /*! ./meetings/meetings.module */
          "./src/app/ams/meetings/meetings.module.ts")).then(function (m) {
            return m.MeetingsModule;
          });
        }
      }, {
        path: 'assets',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | assets-assets-module */
          "assets-assets-module").then(__webpack_require__.bind(null,
          /*! ./assets/assets.module */
          "./src/app/ams/assets/assets.module.ts")).then(function (m) {
            return m.AssetsModule;
          });
        }
      }, {
        path: 'inventory',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | inventory-inventory-module */
          "inventory-inventory-module").then(__webpack_require__.bind(null,
          /*! ./inventory/inventory.module */
          "./src/app/ams/inventory/inventory.module.ts")).then(function (m) {
            return m.InventoryModule;
          });
        }
      }, {
        path: 'notice',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | notice-notice-module */
          "notice-notice-module").then(__webpack_require__.bind(null,
          /*! ./notice/notice.module */
          "./src/app/ams/notice/notice.module.ts")).then(function (m) {
            return m.NoticeModule;
          });
        }
      }, {
        path: 'vendor',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | vendor-vendor-module */
          "vendor-vendor-module").then(__webpack_require__.bind(null,
          /*! ./vendor/vendor.module */
          "./src/app/ams/vendor/vendor.module.ts")).then(function (m) {
            return m.VendorModule;
          });
        }
      }, {
        path: 'documents',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | documents-documents-module */
          "documents-documents-module").then(__webpack_require__.bind(null,
          /*! ./documents/documents.module */
          "./src/app/ams/documents/documents.module.ts")).then(function (m) {
            return m.DocumentsModule;
          });
        }
      }, {
        path: 'directory',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | directory-directory-module */
          "directory-directory-module").then(__webpack_require__.bind(null,
          /*! ./directory/directory.module */
          "./src/app/ams/directory/directory.module.ts")).then(function (m) {
            return m.DirectoryModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }]
    }];

    var AmsRoutingModule = function AmsRoutingModule() {
      _classCallCheck(this, AmsRoutingModule);
    };

    AmsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AmsRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/ams.component.scss":
  /*!****************************************!*\
    !*** ./src/app/ams/ams.component.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAmsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hbXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/ams.component.ts":
  /*!**************************************!*\
    !*** ./src/app/ams/ams.component.ts ***!
    \**************************************/

  /*! exports provided: AmsComponent */

  /***/
  function srcAppAmsAmsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmsComponent", function () {
      return AmsComponent;
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var AmsComponent =
    /*#__PURE__*/
    function () {
      function AmsComponent(injector, sharedService, cookieService) {
        _classCallCheck(this, AmsComponent);

        this.injector = injector;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isSidebarMini = false;
        this.isApartmentSelected = false;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]);
      }

      _createClass(AmsComponent, [{
        key: "showMiniSideBar",
        value: function showMiniSideBar() {
          return this.isSidebarMini ? 'mini' : '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this82 = this;

          if (this.cookieService.get('apartmentId') != "") {
            this.sharedService.setApartmentSelected(true);
          } else {
            this.sharedService.setApartmentSelected(false);
            this.modalService.showApartmentModal();
          }

          this.sharedService.sidebarminicast.subscribe(function (isSidebarMini) {
            return _this82.isSidebarMini = isSidebarMini;
          });
        }
      }]);

      return AmsComponent;
    }();

    AmsComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    AmsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ams',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ams.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ams.component.scss */
      "./src/app/ams/ams.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], AmsComponent);
    /***/
  },

  /***/
  "./src/app/ams/ams.module.ts":
  /*!***********************************!*\
    !*** ./src/app/ams/ams.module.ts ***!
    \***********************************/

  /*! exports provided: AmsModule */

  /***/
  function srcAppAmsAmsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmsModule", function () {
      return AmsModule;
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


    var _ams_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ams-routing.module */
    "./src/app/ams/ams-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _icons_icons_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! .././icons/icons.module */
    "./src/app/icons/icons.module.ts");
    /* harmony import */


    var ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-malihu-scrollbar */
    "./node_modules/ngx-malihu-scrollbar/__ivy_ngcc__/fesm2015/ngx-malihu-scrollbar.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var ngx_quill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-quill */
    "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");
    /* harmony import */


    var _ams_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./ams.component */
    "./src/app/ams/ams.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! .././auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _redirect_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! .././redirect.guard */
    "./src/app/redirect.guard.ts");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component */
    "./src/app/ams/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _components_ams_bottom_menu_ams_bottom_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/ams-bottom-menu/ams-bottom-menu.component */
    "./src/app/ams/components/ams-bottom-menu/ams-bottom-menu.component.ts");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/settings/settings.component */
    "./src/app/ams/components/settings/settings.component.ts");
    /* harmony import */


    var _components_settings_payment_setup_payment_setup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/settings/payment-setup/payment-setup.component */
    "./src/app/ams/components/settings/payment-setup/payment-setup.component.ts");
    /* harmony import */


    var _components_settings_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/settings/admin/admin.component */
    "./src/app/ams/components/settings/admin/admin.component.ts");

    var AmsModule = function AmsModule() {
      _classCallCheck(this, AmsModule);
    };

    AmsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_ams_component__WEBPACK_IMPORTED_MODULE_13__["AmsComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"], _components_settings_payment_setup_payment_setup_component__WEBPACK_IMPORTED_MODULE_19__["PaymentSetupComponent"], _components_settings_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"], _components_ams_bottom_menu_ams_bottom_menu_component__WEBPACK_IMPORTED_MODULE_17__["AmsBottomMenuComponent"]],
      entryComponents: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_ams_routing_module__WEBPACK_IMPORTED_MODULE_3__["routes"]), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _icons_icons_module__WEBPACK_IMPORTED_MODULE_9__["IconsModule"], ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_10__["MalihuScrollbarModule"].forRoot(), ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_12__["QuillModule"].forRoot({
        modules: {
          syntax: false,
          toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
            'header': 1
          }, {
            'header': 2
          }], [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }], [{
            'script': 'sub'
          }, {
            'script': 'super'
          }], [{
            'indent': '-1'
          }, {
            'indent': '+1'
          }], [{
            'direction': 'rtl'
          }], [{
            'size': ['small', false, 'large', 'huge']
          }], [{
            'header': [1, 2, 3, 4, 5, 6, false]
          }], [{
            'color': []
          }, {
            'background': []
          }], [{
            'font': []
          }], [{
            'align': []
          }], ['clean']]
        }
      }), _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyB9ICX2NvOVnCx6TvyUM5gBHB_vGJANCUw'
      }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _ams_routing_module__WEBPACK_IMPORTED_MODULE_3__["AmsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
      exports: [_ams_component__WEBPACK_IMPORTED_MODULE_13__["AmsComponent"]],
      providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _redirect_guard__WEBPACK_IMPORTED_MODULE_15__["RedirectGuard"]],
      bootstrap: [_ams_component__WEBPACK_IMPORTED_MODULE_13__["AmsComponent"]]
    })], AmsModule);
    /***/
  },

  /***/
  "./src/app/ams/components/ams-bottom-menu/ams-bottom-menu.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/ams/components/ams-bottom-menu/ams-bottom-menu.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsComponentsAmsBottomMenuAmsBottomMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bottom-menu-wrapper {\n  position: fixed;\n  bottom: 0;\n  height: 60px;\n  border-top: 1px solid #eaeaea;\n  background-color: #ffffff;\n  z-index: 1000;\n  width: 100% !important;\n  box-shadow: 0 0px 10px 1px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 0px 10px 1px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 0px 10px 1px rgba(0, 0, 0, 0.1);\n}\n.bottom-menu-wrapper a {\n  display: block;\n  text-align: center;\n  margin: 8px 0 0 0;\n  height: 70px;\n}\n.bottom-menu-wrapper a .icon {\n  padding: 0 0 6px 0;\n}\n.bottom-menu-wrapper a .icon .svg {\n  width: 18px;\n  height: 16px;\n  fill: #585858;\n}\n.bottom-menu-wrapper a .icon path {\n  fill: #585858;\n}\n.bottom-menu-wrapper a h4 {\n  color: #585858;\n  font-size: 1.4rem;\n}\n.bottom-menu-wrapper a:hover, .bottom-menu-wrapper a.active {\n  text-decoration: none;\n}\n.bottom-menu-wrapper a:hover .icon .svg, .bottom-menu-wrapper a.active .icon .svg {\n  fill: #5cd694;\n}\n.bottom-menu-wrapper a:hover h4, .bottom-menu-wrapper a.active h4 {\n  color: #5cd694;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvY29tcG9uZW50cy9hbXMtYm90dG9tLW1lbnUvYW1zLWJvdHRvbS1tZW51LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Ftcy9jb21wb25lbnRzL2Ftcy1ib3R0b20tbWVudS9hbXMtYm90dG9tLW1lbnUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDQyxlQ0ZHO0VER0gsU0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQzBHTztFRHpHUCxhQUFBO0VBQ0Esc0JDb0pLO0VDeElKLDZDRlhEO0VFWUMsa0RGWkQ7RUVhQyxxREZiRDtBR0REO0FIRUM7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUdBRjtBSENFO0VBQ0Msa0JBQUE7QUdDSDtBSEFHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQ3VFTztBRXJFWDtBSEFHO0VBQ0MsYUNvRU87QUVsRVg7QUhDRTtFQUNDLGNDZ0VRO0VHaEJULGlCQUFBO0FEOUNGO0FIQ0U7RUFDQyxxQkFBQTtBR0NIO0FIQ0k7RUFDQyxhQ2FRO0FFWmI7QUhFRztFQUNDLGNDU1M7QUVUYiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9jb21wb25lbnRzL2Ftcy1ib3R0b20tbWVudS9hbXMtYm90dG9tLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmJvdHRvbS1tZW51LXdyYXBwZXIge1xuXHRwb3NpdGlvbjogJGZkO1xuXHRib3R0b206IDA7XG5cdGhlaWdodDogNjBweDtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICRncmV5LTQ1MDtcblx0YmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuXHR6LWluZGV4OiAxMDAwO1xuXHR3aWR0aDogJGZ1bGw7XG5cdEBpbmNsdWRlIGJveC1zaGFkb3coMCAwcHggMTBweCAxcHggcmdiYSgkYmxhY2ssMC4xKSk7XG5cdGEge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW46IDhweCAwIDAgMDtcblx0XHRoZWlnaHQ6IDcwcHg7XG5cdFx0Lmljb24ge1xuXHRcdFx0cGFkZGluZzogMCAwIDZweCAwO1xuXHRcdFx0LnN2ZyB7XG5cdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDE2cHg7XG5cdFx0XHRcdGZpbGw6ICRncmV5LTcwMDtcblx0XHRcdH1cblx0XHRcdHBhdGgge1xuXHRcdFx0XHRmaWxsOiAkZ3JleS03MDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGg0IHtcblx0XHRcdGNvbG9yOiAkZ3JleS03MDA7XG5cdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHR9XG5cdFx0Jjpob3ZlciwgJi5hY3RpdmUge1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0Lmljb24ge1xuXHRcdFx0XHQuc3ZnIHtcblx0XHRcdFx0XHRmaWxsOiAkbGltZS1ncmVlbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aDQge1xuXHRcdFx0XHRjb2xvcjogJGxpbWUtZ3JlZW47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDsiLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iLCIuYm90dG9tLW1lbnUtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiAxMDAwO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5ib3R0b20tbWVudS13cmFwcGVyIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDhweCAwIDAgMDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLmJvdHRvbS1tZW51LXdyYXBwZXIgYSAuaWNvbiB7XG4gIHBhZGRpbmc6IDAgMCA2cHggMDtcbn1cbi5ib3R0b20tbWVudS13cmFwcGVyIGEgLmljb24gLnN2ZyB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGZpbGw6ICM1ODU4NTg7XG59XG4uYm90dG9tLW1lbnUtd3JhcHBlciBhIC5pY29uIHBhdGgge1xuICBmaWxsOiAjNTg1ODU4O1xufVxuLmJvdHRvbS1tZW51LXdyYXBwZXIgYSBoNCB7XG4gIGNvbG9yOiAjNTg1ODU4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi5ib3R0b20tbWVudS13cmFwcGVyIGE6aG92ZXIsIC5ib3R0b20tbWVudS13cmFwcGVyIGEuYWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJvdHRvbS1tZW51LXdyYXBwZXIgYTpob3ZlciAuaWNvbiAuc3ZnLCAuYm90dG9tLW1lbnUtd3JhcHBlciBhLmFjdGl2ZSAuaWNvbiAuc3ZnIHtcbiAgZmlsbDogIzVjZDY5NDtcbn1cbi5ib3R0b20tbWVudS13cmFwcGVyIGE6aG92ZXIgaDQsIC5ib3R0b20tbWVudS13cmFwcGVyIGEuYWN0aXZlIGg0IHtcbiAgY29sb3I6ICM1Y2Q2OTQ7XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/components/ams-bottom-menu/ams-bottom-menu.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/ams/components/ams-bottom-menu/ams-bottom-menu.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AmsBottomMenuComponent */

  /***/
  function srcAppAmsComponentsAmsBottomMenuAmsBottomMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmsBottomMenuComponent", function () {
      return AmsBottomMenuComponent;
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


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../.././api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../.././api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/constants.service */
    "./src/app/shared/services/constants.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var AmsBottomMenuComponent =
    /*#__PURE__*/
    function () {
      function AmsBottomMenuComponent(userService, apartmentService, constantsService, sharedService, cookieService) {
        _classCallCheck(this, AmsBottomMenuComponent);

        this.userService = userService;
        this.apartmentService = apartmentService;
        this.constantsService = constantsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isSideBarMini = false;
      }

      _createClass(AmsBottomMenuComponent, [{
        key: "toggleSidebar",
        value: function toggleSidebar() {
          this.isSideBarMini = !this.isSideBarMini;
          this.sharedService.setSideBarMini(this.isSideBarMini);
        }
      }, {
        key: "isSideBarActive",
        value: function isSideBarActive() {
          return this.isSideBarMini == true ? 'active' : '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this83 = this;

          this.sharedService.sidebarminicast.subscribe(function (isSideBarMini) {
            return _this83.isSideBarMini = isSideBarMini;
          });
        }
      }]);

      return AmsBottomMenuComponent;
    }();

    AmsBottomMenuComponent.ctorParameters = function () {
      return [{
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"]
      }, {
        type: _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    AmsBottomMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ams-bottom-menu',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ams-bottom-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/ams-bottom-menu/ams-bottom-menu.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ams-bottom-menu.component.scss */
      "./src/app/ams/components/ams-bottom-menu/ams-bottom-menu.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"], _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], AmsBottomMenuComponent);
    /***/
  },

  /***/
  "./src/app/ams/components/settings/admin/admin.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/ams/components/settings/admin/admin.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsComponentsSettingsAdminAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9jb21wb25lbnRzL3NldHRpbmdzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/components/settings/admin/admin.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/ams/components/settings/admin/admin.component.ts ***!
    \******************************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAmsComponentsSettingsAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent() {
        _classCallCheck(this, AdminComponent);
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminComponent;
    }();

    AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/settings/admin/admin.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin.component.scss */
      "./src/app/ams/components/settings/admin/admin.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AdminComponent);
    /***/
  },

  /***/
  "./src/app/ams/components/settings/payment-setup/payment-setup.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/components/settings/payment-setup/payment-setup.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsComponentsSettingsPaymentSetupPaymentSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9jb21wb25lbnRzL3NldHRpbmdzL3BheW1lbnQtc2V0dXAvcGF5bWVudC1zZXR1cC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/components/settings/payment-setup/payment-setup.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/ams/components/settings/payment-setup/payment-setup.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: PaymentSetupComponent */

  /***/
  function srcAppAmsComponentsSettingsPaymentSetupPaymentSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentSetupComponent", function () {
      return PaymentSetupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PaymentSetupComponent =
    /*#__PURE__*/
    function () {
      function PaymentSetupComponent() {
        _classCallCheck(this, PaymentSetupComponent);
      }

      _createClass(PaymentSetupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaymentSetupComponent;
    }();

    PaymentSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payment-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./payment-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/settings/payment-setup/payment-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./payment-setup.component.scss */
      "./src/app/ams/components/settings/payment-setup/payment-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PaymentSetupComponent);
    /***/
  },

  /***/
  "./src/app/ams/components/settings/settings.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/ams/components/settings/settings.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsComponentsSettingsSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/components/settings/settings.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ams/components/settings/settings.component.ts ***!
    \***************************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppAmsComponentsSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SettingsComponent =
    /*#__PURE__*/
    function () {
      function SettingsComponent() {
        _classCallCheck(this, SettingsComponent);
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SettingsComponent;
    }();

    SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/settings/settings.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./settings.component.scss */
      "./src/app/ams/components/settings/settings.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SettingsComponent);
    /***/
  },

  /***/
  "./src/app/ams/components/sidebar/sidebar.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/ams/components/sidebar/sidebar.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsComponentsSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.sidebar {\n  position: fixed;\n  width: 240px;\n  float: left;\n  margin-left: 0;\n  background-color: #ffffff;\n  box-shadow: 7px 0 60px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 7px 0 60px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 7px 0 60px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n  z-index: 1;\n}\n.sidebar .hero-info .apartment {\n  padding: 20px 20px 0 20px;\n  border-bottom: 1px solid #eaeaea;\n  opacity: 1;\n  -moz-opacity: 1;\n  -webkit-opacity: 1;\n  height: 130px;\n  visibility: visible;\n  overflow: hidden;\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.sidebar .hero-info .apartment h5 {\n  color: #373946;\n  letter-spacing: 0.6px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  margin: 15px 0 0 0;\n  clear: both;\n  text-align: center;\n}\n.sidebar .hero-info .apartment .icon {\n  margin: 0 auto;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffeb3b;\n  border-radius: 50px !important;\n}\n.sidebar .navs {\n  height: calc(100vh - 200px);\n}\n@media (max-width: 576px) {\n  .sidebar .navs {\n    height: calc(100vh - 190px);\n  }\n}\n.sidebar .navs .nav-list {\n  cursor: pointer;\n  min-height: 48px;\n}\n.sidebar .navs .nav-list > a {\n  color: #373946;\n  display: block;\n  padding: 2px 20px 0 20px;\n  text-decoration: none;\n  line-height: 48px;\n  width: 100% !important;\n}\n.sidebar .navs .nav-list > a .icon {\n  display: inline-block;\n  width: 25px;\n  position: relative;\n  top: -2px;\n}\n.sidebar .navs .nav-list > a span {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.3rem;\n  margin: 0 0 0 4px;\n}\n.sidebar .navs .nav-list:hover, .sidebar .navs .nav-list.nav-active {\n  background-color: #e0e3ec;\n}\n.sidebar .navs .nav-list:hover a, .sidebar .navs .nav-list:hover:after, .sidebar .navs .nav-list.nav-active a, .sidebar .navs .nav-list.nav-active:after {\n  color: #191c1e;\n}\n.sidebar .navs .nav-list .svg {\n  width: 18px;\n  height: 18px;\n  fill: #373946;\n}\n.sidebar .navs .nav-list.nav-parent {\n  position: relative;\n}\n.sidebar .navs .nav-list.nav-parent:after {\n  position: absolute;\n  content: \"\";\n  font-family: FontAwesome;\n  top: 18px;\n  right: 15px;\n  color: #585858;\n  font-size: 1.4rem;\n  font-weight: 400;\n}\n.sidebar .navs .nav-list.nav-parent:hover a, .sidebar .navs .nav-list.nav-parent:hover:after {\n  color: #191c1e;\n}\n.sidebar .navs .nav-list.nav-parent.nav-active:after {\n  content: \"\";\n}\n.sidebar .navs .nav-list.nav-parent .nav-children {\n  background-color: #ffffff;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  padding: 0 0 0 12px !important;\n}\n.sidebar .navs .nav-list.nav-parent .nav-children li {\n  width: 100% !important;\n}\n.sidebar .navs .nav-list.nav-parent .nav-children li a {\n  display: block;\n  padding: 10px 20px 10px 34px;\n  position: relative;\n  color: #68696b;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.3rem;\n  letter-spacing: 0.7px;\n}\n.sidebar .navs .nav-list.nav-parent .nav-children li a:before {\n  position: absolute;\n  content: \"\";\n  font-family: FontAwesome;\n  top: 10px;\n  left: 20px;\n  color: #68696b;\n  font-size: 1.4rem;\n  font-weight: 400;\n}\n.sidebar .navs .nav-list.nav-parent .nav-children li a.active, .sidebar .navs .nav-list.nav-parent .nav-children li a:hover {\n  color: #3f51b5;\n  text-decoration: none;\n}\n.sidebar .navs .nav-list.nav-parent .nav-children li a.active:before, .sidebar .navs .nav-list.nav-parent .nav-children li a:hover:before {\n  color: #3f51b5;\n}\n.sidebar .navs .nav-list.nav-parent .nav-children li a.active {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n}\n.sidebar .navs .nav-list.nav-parent .nav-children.nav-active {\n  max-height: 1000px;\n  overflow: auto;\n  border-bottom: 1px solid #dedede;\n  transition: max-height 0.5s ease;\n}\n.sidebar .navs.scroller .mCSB_inside > .mCSB_container {\n  padding: 0 0 20px 0;\n}\n@media (min-width: 991px) {\n  .sidebar.mini {\n    margin-left: 0;\n    width: 70px;\n    transition: all 0.2s ease;\n  }\n  .sidebar.mini .user {\n    display: none !important;\n  }\n  .sidebar.mini .navs {\n    height: 100vh;\n  }\n  .sidebar.mini .navs .nav-list {\n    min-height: 30px !important;\n  }\n  .sidebar.mini .navs .nav-list.nav-parent .nav-children {\n    padding: 0 0 0 5px !important;\n    border: none;\n  }\n  .sidebar.mini .navs .nav-list > a {\n    padding: 14px 20px !important;\n    line-height: inherit;\n  }\n  .sidebar.mini .navs .nav-list > a .icon {\n    position: static;\n  }\n  .sidebar.mini .navs .nav-list > a span {\n    opacity: 0;\n    -moz-opacity: 0;\n    -webkit-opacity: 0;\n    visibility: hidden;\n    overflow: hidden;\n    transition: all 0.2s ease;\n    position: fixed !important;\n  }\n  .sidebar.mini .navs .nav-list:after {\n    top: 16px !important;\n    right: 18px !important;\n  }\n  .sidebar.mini .hero-info .apartment {\n    padding: 0 !important;\n    opacity: 0;\n    -moz-opacity: 0;\n    -webkit-opacity: 0;\n    max-height: 0;\n    visibility: hidden;\n    overflow: hidden;\n    transition: all 0.15s ease;\n  }\n  .sidebar.mini .hero-info .user {\n    padding: 0 !important;\n  }\n  .sidebar.mini .hero-info .user .profile-picture {\n    width: 32px !important;\n    height: 32px !important;\n    padding: 6px 0 !important;\n    transition: all 0.2s ease;\n  }\n  .sidebar.mini .hero-info .user .profile-picture img {\n    width: 100% !important;\n    border-radius: 50% !important;\n  }\n  .sidebar.mini .nav-children {\n    position: absolute;\n    left: 70px;\n    top: 0;\n    min-width: 180px;\n    background-color: #ffffff !important;\n    box-shadow: 6px 22px 60px rgba(0, 0, 0, 0.2);\n    -moz-box-shadow: 6px 22px 60px rgba(0, 0, 0, 0.2);\n    -webkit-box-shadow: 6px 22px 60px rgba(0, 0, 0, 0.2);\n  }\n  .sidebar.mini .nav-children a {\n    padding: 10px 28px !important;\n  }\n  .sidebar.mini .nav-children a:before {\n    left: 12px !important;\n  }\n  .sidebar.mini .scroller {\n    overflow: visible !important;\n    margin: -1px 0 0 0 !important;\n    padding: 0 0 60px 0 !important;\n  }\n}\n@media (max-width: 991px) {\n  .sidebar {\n    margin-left: -240px;\n    transition: all 0.2s ease;\n  }\n  .sidebar.mini {\n    width: 100% !important;\n    margin-left: 0;\n    z-index: 1000;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1zL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvYXBwL2Ftcy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL21peGlucy5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0loQjtFQUNDLGVDRkc7RURHSCxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkMwR087RUM1Rk4seUNGYkQ7RUVjQyw4Q0ZkRDtFRWVDLGlERmZEO0VFa0NBLHlCRmpDQTtFQUNBLFVBQUE7QURFRDtBQ0FFO0VBQ0MseUJBQUE7RUFDRyxnQ0FBQTtFRUNKLFVBQUE7RUFDQSxlRkRxQjtFRUVyQixrQkZGcUI7RUFDakIsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUV3QkwsMEJGdkJLO0VBQ0EsZUFBQTtBRE1OO0FDTEc7RUFDQyxjQ29FTztFRG5FUCxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FET0o7QUNMRztFQUNDLGNBQUE7RUV3Q0YsV0Z2Q21CO0VFd0NuQixZRnhDbUI7RUV5Q25CLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJEeENTO0VDaENWLDhCQUFBO0FIMkNEO0FDVkM7RUFDQywyQkFBQTtBRFlGO0FDWEU7RUFGRDtJQUdFLDJCQUFBO0VEY0Q7QUFDRjtBQ2JFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FEZUg7QUNkRztFQUNDLGNDMkNPO0VEMUNQLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkN5R0U7QUZ6Rk47QUNmSTtFQUNDLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQ3JEQTtFRHNERyxTQUFBO0FEaUJSO0FDZkk7RUd0QkYscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQW1DQSxpQkFBQTtFSGRHLGlCQUFBO0FEcUJMO0FDbEJHO0VBQ0MseUJDSk07QUZ3QlY7QUNuQkk7RUFDQyxjQ29CTTtBRkNYO0FDbEJHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQ2dCTztBRklYO0FDbEJHO0VBQ0Msa0JDMUVDO0FGOEZMO0FDbkJJO0VBQ0Msa0JDN0VBO0VEOEVBLFlBQUE7RUFDQSx3QkNsRkM7RURtRkQsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQ1FNO0VFaEJULGlCQUFBO0VIVUcsZ0JBQUE7QURxQkw7QUNsQks7RUFDQyxjQ0ZLO0FGc0JYO0FDaEJLO0VBQ0MsWUFBQTtBRGtCTjtBQ2ZJO0VBQ0MseUJDY0c7RURiQSxhQUFBO0VBQ0EsZ0JBQUE7RUUzRFAsZ0NGNERPO0VBQ0EsOEJBQUE7QURtQlI7QUNqQks7RUFDQyxzQkNtREE7QUZoQ047QUNsQk07RUFDQyxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkMzR0Y7RUQ0R0UsY0N0Qkk7RUVwRFQscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQW1DQSxpQkFBQTtFSHNDSyxxQkFBQTtBRHdCUDtBQ3ZCTztFQUNDLGtCQ2xISDtFRG1IRyxZQUFBO0VBQ0Esd0JDdkhGO0VEd0hFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0NoQ0c7RUViVCxpQkFBQTtFSCtDTSxnQkFBQTtBRHlCUjtBQ3ZCTztFQUNDLGNDckVDO0VEc0VELHFCQUFBO0FEeUJSO0FDeEJRO0VBQ0MsY0N4RUE7QUZrR1Q7QUN2Qk87RUd2RkwscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FKaUhGO0FDdkJLO0VBQ0Msa0JBQUE7RUFDRyxjQUFBO0VBQ0EsZ0NBQUE7RUVsR1IsZ0NGbUdRO0FEMkJUO0FDckJHO0VBQ0MsbUJBQUE7QUR1Qko7QUNsQkU7RUFERDtJQUVDLGNBQUE7SUFDQSxXQUFBO0lFakhELHlCRmtIQztFRHVCQTtFQ3RCQTtJQUNDLHdCQUFBO0VEd0JEO0VDdEJBO0lBQ0MsYUFBQTtFRHdCRDtFQ3ZCQztJQUNDLDJCQUFBO0VEeUJGO0VDeEJFO0lBQ0MsNkJBQUE7SUFDQSxZQUFBO0VEMEJIO0VDeEJFO0lBQ0MsNkJBQUE7SUFDQSxvQkFBQTtFRDBCSDtFQ3pCRztJQUNDLGdCQ3hLRjtFRm1NRjtFQ3pCRztJRS9KSCxVRmdLcUI7SUUvSnJCLGVGK0pxQjtJRTlKckIsa0JGOEpxQjtJQUNqQixrQkFBQTtJQUNBLGdCQUFBO0lFdklMLHlCRndJSztJQUNBLDBCQUFBO0VEK0JKO0VDNUJFO0lBQ0Msb0JBQUE7SUFDRyxzQkFBQTtFRDhCTjtFQ3pCQztJQUNDLHFCQUFBO0lFL0tGLFVGZ0xtQjtJRS9LbkIsZUYrS21CO0lFOUtuQixrQkY4S21CO0lBQ2pCLGFBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lFeEpILDBCRnlKRztFRCtCRjtFQzdCQztJQUNDLHFCQUFBO0VEK0JGO0VDOUJFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtJQUNBLHlCQUFBO0lFaEtMLHlCRmlLSztFRGtDSjtFQ2pDSTtJQUNDLHNCQ2hERDtJQ3hKTCw2QkFBQTtFSDhPQztFQ2hDRztJQUNDLGtCQ2xORDtJRG1OQyxVQUFBO0lBQ0EsTUFBQTtJQUNBLGdCQUFBO0lBQ0Esb0NBQUE7SUVuTUosNENGb01JO0lFbk1KLGlERm1NSTtJRWxNSixvREZrTUk7RURvQ0o7RUNuQ0k7SUFDQyw2QkFBQTtFRHFDTDtFQ3BDSztJQUNDLHFCQUFBO0VEc0NOO0VDbENHO0lBQ0UsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLDhCQUFBO0VEb0NMO0FBQ0Y7QUNqQ0M7RUF0T0Q7SUF1T0UsbUJBQUE7SUUvTEQseUJGZ01DO0VEc0NBO0VDckNBO0lBQ0Msc0JDL0VHO0lEZ0ZILGNBQUE7SUFDQSxhQUFBO0VEdUNEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hbXMvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI0MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDdweCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDdweCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDdweCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgei1pbmRleDogMTtcbn1cbi5zaWRlYmFyIC5oZXJvLWluZm8gLmFwYXJ0bWVudCB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xuICBvcGFjaXR5OiAxO1xuICAtbW96LW9wYWNpdHk6IDE7XG4gIC13ZWJraXQtb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zaWRlYmFyIC5oZXJvLWluZm8gLmFwYXJ0bWVudCBoNSB7XG4gIGNvbG9yOiAjMzczOTQ2O1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW46IDE1cHggMCAwIDA7XG4gIGNsZWFyOiBib3RoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lkZWJhciAuaGVyby1pbmZvIC5hcGFydG1lbnQgLmljb24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViM2I7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xufVxuLnNpZGViYXIgLm5hdnMge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNpZGViYXIgLm5hdnMge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE5MHB4KTtcbiAgfVxufVxuLnNpZGViYXIgLm5hdnMgLm5hdi1saXN0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xufVxuLnNpZGViYXIgLm5hdnMgLm5hdi1saXN0ID4gYSB7XG4gIGNvbG9yOiAjMzczOTQ2O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMnB4IDIwcHggMCAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLnNpZGViYXIgLm5hdnMgLm5hdi1saXN0ID4gYSAuaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xufVxuLnNpZGViYXIgLm5hdnMgLm5hdi1saXN0ID4gYSBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWFyZ2luOiAwIDAgMCA0cHg7XG59XG4uc2lkZWJhciAubmF2cyAubmF2LWxpc3Q6aG92ZXIsIC5zaWRlYmFyIC5uYXZzIC5uYXYtbGlzdC5uYXYtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTNlYztcbn1cbi5zaWRlYmFyIC5uYXZzIC5uYXYtbGlzdDpob3ZlciBhLCAuc2lkZWJhciAubmF2cyAubmF2LWxpc3Q6aG92ZXI6YWZ0ZXIsIC5zaWRlYmFyIC5uYXZzIC5uYXYtbGlzdC5uYXYtYWN0aXZlIGEsIC5zaWRlYmFyIC5uYXZzIC5uYXYtbGlzdC5uYXYtYWN0aXZlOmFmdGVyIHtcbiAgY29sb3I6ICMxOTFjMWU7XG59XG4uc2lkZWJhciAubmF2cyAubmF2LWxpc3QgLnN2ZyB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGZpbGw6ICMzNzM5NDY7XG59XG4uc2lkZWJhciAubmF2cyAubmF2LWxpc3QubmF2LXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zaWRlYmFyIC5uYXZzIC5uYXYtbGlzdC5uYXYtcGFyZW50OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIu+EhVwiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIHRvcDogMThweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjNTg1ODU4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5zaWRlYmFyIC5uYXZzIC5uYXYtbGlzdC5uYXYtcGFyZW50OmhvdmVyIGEsIC5zaWRlYmFyIC5uYXZzIC5uYXYtbGlzdC5uYXYtcGFyZW50OmhvdmVyOmFmdGVyIHtcbiAgY29sb3I6ICMxOTFjMWU7XG59XG4uc2lkZWJhciAubmF2cyAubmF2LWxpc3QubmF2LXBhcmVudC5uYXYtYWN0aXZlOmFmdGVyIHtcbiAgY29udGVudDogXCLvhIdcIjtcbn1cbi5zaWRlYmFyIC5uYXZzIC5uYXYtbGlzdC5uYXYtcGFyZW50IC5uYXYtY2hpbGRyZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3MgZWFzZTtcbiAgcGFkZGluZzogMCAwIDAgMTJweCAhaW1wb3J0YW50O1xufVxuLnNpZGViYXIgLm5hdnMgLm5hdi1saXN0Lm5hdi1wYXJlbnQgLm5hdi1jaGlsZHJlbiBsaSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uc2lkZWJhciAubmF2cyAubmF2LWxpc3QubmF2LXBhcmVudCAubmF2LWNoaWxkcmVuIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMzRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzY4Njk2YjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xufVxuLnNpZGViYXIgLm5hdnMgLm5hdi1saXN0Lm5hdi1wYXJlbnQgLm5hdi1jaGlsZHJlbiBsaSBhOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCLvhIVcIjtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGNvbG9yOiAjNjg2OTZiO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5zaWRlYmFyIC5uYXZzIC5uYXYtbGlzdC5uYXYtcGFyZW50IC5uYXYtY2hpbGRyZW4gbGkgYS5hY3RpdmUsIC5zaWRlYmFyIC5uYXZzIC5uYXYtbGlzdC5uYXYtcGFyZW50IC5uYXYtY2hpbGRyZW4gbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc2lkZWJhciAubmF2cyAubmF2LWxpc3QubmF2LXBhcmVudCAubmF2LWNoaWxkcmVuIGxpIGEuYWN0aXZlOmJlZm9yZSwgLnNpZGViYXIgLm5hdnMgLm5hdi1saXN0Lm5hdi1wYXJlbnQgLm5hdi1jaGlsZHJlbiBsaSBhOmhvdmVyOmJlZm9yZSB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLnNpZGViYXIgLm5hdnMgLm5hdi1saXN0Lm5hdi1wYXJlbnQgLm5hdi1jaGlsZHJlbiBsaSBhLmFjdGl2ZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuLnNpZGViYXIgLm5hdnMgLm5hdi1saXN0Lm5hdi1wYXJlbnQgLm5hdi1jaGlsZHJlbi5uYXYtYWN0aXZlIHtcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlO1xufVxuLnNpZGViYXIgLm5hdnMuc2Nyb2xsZXIgLm1DU0JfaW5zaWRlID4gLm1DU0JfY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xuICAuc2lkZWJhci5taW5pIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB3aWR0aDogNzBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIH1cbiAgLnNpZGViYXIubWluaSAudXNlciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5zaWRlYmFyLm1pbmkgLm5hdnMge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgLnNpZGViYXIubWluaSAubmF2cyAubmF2LWxpc3Qge1xuICAgIG1pbi1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuICAuc2lkZWJhci5taW5pIC5uYXZzIC5uYXYtbGlzdC5uYXYtcGFyZW50IC5uYXYtY2hpbGRyZW4ge1xuICAgIHBhZGRpbmc6IDAgMCAwIDVweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAuc2lkZWJhci5taW5pIC5uYXZzIC5uYXYtbGlzdCA+IGEge1xuICAgIHBhZGRpbmc6IDE0cHggMjBweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICB9XG4gIC5zaWRlYmFyLm1pbmkgLm5hdnMgLm5hdi1saXN0ID4gYSAuaWNvbiB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuICAuc2lkZWJhci5taW5pIC5uYXZzIC5uYXYtbGlzdCA+IGEgc3BhbiB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtbW96LW9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC1vcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgfVxuICAuc2lkZWJhci5taW5pIC5uYXZzIC5uYXYtbGlzdDphZnRlciB7XG4gICAgdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgfVxuICAuc2lkZWJhci5taW5pIC5oZXJvLWluZm8gLmFwYXJ0bWVudCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1vei1vcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtb3BhY2l0eTogMDtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgfVxuICAuc2lkZWJhci5taW5pIC5oZXJvLWluZm8gLnVzZXIge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuc2lkZWJhci5taW5pIC5oZXJvLWluZm8gLnVzZXIgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA2cHggMCAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgfVxuICAuc2lkZWJhci5taW5pIC5oZXJvLWluZm8gLnVzZXIgLnByb2ZpbGUtcGljdHVyZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5zaWRlYmFyLm1pbmkgLm5hdi1jaGlsZHJlbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDcwcHg7XG4gICAgdG9wOiAwO1xuICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDZweCAyMnB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIC1tb3otYm94LXNoYWRvdzogNnB4IDIycHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA2cHggMjJweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuICAuc2lkZWJhci5taW5pIC5uYXYtY2hpbGRyZW4gYSB7XG4gICAgcGFkZGluZzogMTBweCAyOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNpZGViYXIubWluaSAubmF2LWNoaWxkcmVuIGE6YmVmb3JlIHtcbiAgICBsZWZ0OiAxMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNpZGViYXIubWluaSAuc2Nyb2xsZXIge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAtMXB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAwIDYwcHggMCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjQwcHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB9XG4gIC5zaWRlYmFyLm1pbmkge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxufSIsIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4uc2lkZWJhciB7XG5cdHBvc2l0aW9uOiAkZmQ7XG5cdHdpZHRoOiAyNDBweDtcblx0ZmxvYXQ6IGxlZnQ7XG5cdG1hcmdpbi1sZWZ0OiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG5cdEBpbmNsdWRlIGJveC1zaGFkb3coN3B4IDAgNjBweCByZ2JhKCRibGFjaywwLjEpKTtcblx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4ycyBlYXNlKTtcblx0ei1pbmRleDogMTtcblx0Lmhlcm8taW5mbyB7XG5cdFx0LmFwYXJ0bWVudCB7XG5cdFx0XHRwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4O1xuICAgIFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyZXktNDUwO1xuICAgIFx0XHRAaW5jbHVkZSBvcGFjaXR5KDEpO1xuICAgIFx0XHRoZWlnaHQ6IDEzMHB4O1xuICAgIFx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuICAgIFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcbiAgICBcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0aDUge1xuXHRcdFx0XHRjb2xvcjogJGdyZXktODAwO1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC42cHg7XG5cdFx0XHRcdHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XG5cdFx0XHRcdG92ZXJmbG93OmhpZGRlbjtcblx0XHRcdFx0d2hpdGUtc3BhY2U6bm93cmFwO1xuXHRcdFx0XHRtYXJnaW46IDE1cHggMCAwIDA7XG5cdFx0XHRcdGNsZWFyOiBib3RoO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHR9XG5cdFx0XHQuaWNvbiB7XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRAaW5jbHVkZSBjaXJjbGVzKDUwcHgsICRzLXllbGxvdyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblx0Lm5hdnMge1xuXHRcdGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcblx0XHRcdGhlaWdodDogY2FsYygxMDB2aCAtIDE5MHB4KTtcblx0XHR9XG5cdFx0Lm5hdi1saXN0IHtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdG1pbi1oZWlnaHQ6IDQ4cHg7XG5cdFx0XHQ+IGEge1xuXHRcdFx0XHRjb2xvcjogJGdyZXktODAwO1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0cGFkZGluZzogMnB4IDIwcHggMCAyMHB4O1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiA0OHB4O1xuXHRcdFx0XHR3aWR0aDogJGZ1bGw7XG5cdFx0XHRcdC5pY29uIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0d2lkdGg6IDI1cHg7XG5cdFx0XHRcdFx0cG9zaXRpb246ICRyZWw7XG4gICAgXHRcdFx0XHR0b3A6IC0ycHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3BhbiB7XHRcdFx0XG5cdFx0XHRcdFx0QGluY2x1ZGUgaGVhZC1yZWd1bGFyO1xuXHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGxlcik7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDAgMCA0cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCY6aG92ZXIsICYubmF2LWFjdGl2ZSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRsZy1ibHVlO1xuXHRcdFx0XHRhLCAmOmFmdGVyIHtcblx0XHRcdFx0XHRjb2xvcjogJGdyZXktOTAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuc3ZnIHtcblx0XHRcdFx0d2lkdGg6IDE4cHg7XG5cdFx0XHRcdGhlaWdodDogMThweDtcblx0XHRcdFx0ZmlsbDogJGdyZXktODAwO1xuXHRcdFx0fVxuXHRcdFx0Ji5uYXYtcGFyZW50IHtcblx0XHRcdFx0cG9zaXRpb246ICRyZWw7XG5cdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAkYWJzO1xuXHRcdFx0XHRcdGNvbnRlbnQ6ICdcXGYxMDUnO1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAkZnRhO1xuXHRcdFx0XHRcdHRvcDogMThweDtcblx0XHRcdFx0XHRyaWdodDogMTVweDtcblx0XHRcdFx0XHRjb2xvcjogJGdyZXktNzAwO1xuXHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0YSwgJjphZnRlciB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJGdyZXktOTAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQmLm5hdi1hY3RpdmUge1xuXHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0Y29udGVudDogJ1xcZjEwNyc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC5uYXYtY2hpbGRyZW4ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICBcdFx0XHRcdG1heC1oZWlnaHQ6IDA7XG4gICAgXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuICAgIFx0XHRcdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihtYXgtaGVpZ2h0IDAuM3MgZWFzZSk7XG4gICAgXHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAxMnB4ICFpbXBvcnRhbnQ7XG5cblx0XHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogJGZ1bGw7XG5cdFx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDM0cHg7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiAkcmVsO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogJGdyZXktODUwO1xuXHRcdFx0XHRcdFx0XHRAaW5jbHVkZSBoZWFkLXJlZ3VsYXI7XG5cdFx0XHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGxlcik7XG5cdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjdweDtcblx0XHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiAkYWJzO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICdcXGYxMDUnO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAkZnRhO1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogMTBweDtcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAkZ3JleS04NTA7XG5cdFx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQmLmFjdGl2ZSwgJjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICRtLWJsdWU7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAkbS1ibHVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQmLmFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgaGVhZC1tZWRpdW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ji5uYXYtYWN0aXZlIHtcblx0XHRcdFx0XHRcdG1heC1oZWlnaHQ6IDEwMDBweDtcbiAgICBcdFx0XHRcdFx0b3ZlcmZsb3c6IGF1dG87XG4gICAgXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleS02MDA7XG4gICAgXHRcdFx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24obWF4LWhlaWdodCAwLjVzIGVhc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQmLnNjcm9sbGVyIHtcblx0XHRcdC5tQ1NCX2luc2lkZSA+IC5tQ1NCX2NvbnRhaW5lciB7XG5cdFx0XHRcdHBhZGRpbmc6IDAgMCAyMHB4IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdCYubWluaSB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XG5cdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdFx0d2lkdGg6IDcwcHg7XG5cdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4ycyBlYXNlKTtcblx0XHQudXNlciB7XG5cdFx0XHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHRcdC5uYXZzIHtcblx0XHRcdGhlaWdodDogMTAwdmg7XG5cdFx0XHQubmF2LWxpc3R7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcblx0XHRcdFx0Ji5uYXYtcGFyZW50IC5uYXYtY2hpbGRyZW4ge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDVweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQ+IGEge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDE0cHggMjBweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuXHRcdFx0XHRcdC5pY29uIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiAkc3Q7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgb3BhY2l0eSgwKTtcblx0XHRcdFx0XHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjJzIGVhc2UpO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246ICRmZCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHR0b3A6IDE2cHggIWltcG9ydGFudDtcblx0ICAgIFx0XHRcdHJpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Lmhlcm8taW5mbyB7XG5cdFx0XHQuYXBhcnRtZW50IHtcblx0XHRcdFx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRAaW5jbHVkZSBvcGFjaXR5KDApO1xuXHRcdFx0XHRtYXgtaGVpZ2h0OiAwO1xuXHRcdFx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuMTVzIGVhc2UpO1xuXHRcdFx0fVxuXHRcdFx0LnVzZXIge1xuXHRcdFx0XHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdC5wcm9maWxlLXBpY3R1cmUge1xuXHRcdFx0XHQgIHdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdCAgaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdCAgcGFkZGluZzogNnB4IDAgIWltcG9ydGFudDtcblx0XHRcdFx0ICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjJzIGVhc2UpO1xuXHRcdFx0XHQgIGltZyB7XG5cdFx0XHRcdCAgXHR3aWR0aDogJGZ1bGw7XG5cdFx0XHQgICAgXHRAaW5jbHVkZSBib3JkZXItcmFkaXVzKDUwJSk7XG5cdFx0XHRcdCAgfVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHQgICAgLm5hdi1jaGlsZHJlbiB7XG5cdCAgICBcdHBvc2l0aW9uOiAkYWJzO1xuXHRcdCAgICBsZWZ0OiA3MHB4O1xuXHRcdCAgICB0b3A6IDA7XG5cdFx0ICAgIG1pbi13aWR0aDogMTgwcHg7XG5cdFx0ICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xuXHRcdCAgICBAaW5jbHVkZSBib3gtc2hhZG93KDZweCAyMnB4IDYwcHggcmdiYSgkYmxhY2ssMC4yKSk7XG5cdFx0ICAgIGEge1xuXHRcdCAgICBcdHBhZGRpbmc6IDEwcHggMjhweCAhaW1wb3J0YW50O1xuXHRcdCAgICBcdCY6YmVmb3JlIHtcblx0XHQgICAgXHRcdGxlZnQ6IDEycHggIWltcG9ydGFudDtcblx0XHQgICAgXHR9XG5cdFx0ICAgIH1cblx0ICAgIH1cblx0ICAgIC5zY3JvbGxlciB7XG5cdFx0ICAgIFx0b3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcblx0XHQgICAgXHRtYXJnaW46IC0xcHggMCAwIDAgIWltcG9ydGFudDtcblx0XHQgICAgXHRwYWRkaW5nOiAwIDAgNjBweCAwICFpbXBvcnRhbnQ7XG5cdCAgICBcdH1cblx0XHR9XG5cdH1cblx0QG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG5cdFx0bWFyZ2luLWxlZnQ6IC0yNDBweDtcblx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjJzIGVhc2UpO1xuXHRcdCYubWluaSB7XG5cdFx0XHR3aWR0aDogJGZ1bGw7XG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcblx0XHRcdHotaW5kZXg6IDEwMDA7XG5cdFx0fVxuXHR9XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDsiLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/components/sidebar/sidebar.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ams/components/sidebar/sidebar.component.ts ***!
    \*************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppAmsComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
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


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../.././api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../.././api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_screen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../.././api/services/screen.service */
    "./src/app/api/services/screen.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/services/constants.service */
    "./src/app/shared/services/constants.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-malihu-scrollbar */
    "./node_modules/ngx-malihu-scrollbar/__ivy_ngcc__/fesm2015/ngx-malihu-scrollbar.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(injector, router, route, apartmentService, userService, screenService, cookieService, constantsService, sharedService, mScrollbarService) {
        var _this84 = this;

        _classCallCheck(this, SidebarComponent);

        this.injector = injector;
        this.router = router;
        this.route = route;
        this.apartmentService = apartmentService;
        this.userService = userService;
        this.screenService = screenService;
        this.cookieService = cookieService;
        this.constantsService = constantsService;
        this.sharedService = sharedService;
        this.mScrollbarService = mScrollbarService;
        this.activeNav = "";
        this.isSideBarMini = false;
        this.isApartmentSelected = false;
        this.apartmentName = "";
        this.userLoggedIn = false;
        this.isMenuLoaded = false;
        this.sidebarMenuDataList = [];
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            if (window.innerWidth <= 991) {
              _this84.isSideBarMini = false;

              _this84.sharedService.setSideBarMini(_this84.isSideBarMini);
            }

            _this84.activePath = _this84.router.url;
          }
        });
      }

      _createClass(SidebarComponent, [{
        key: "toggleNav",
        value: function toggleNav(name) {
          if (this.activeNav != name) {
            this.activeNav = name;
          } else {
            this.activeNav = "";
          }
        }
      }, {
        key: "isCurrentPath",
        value: function isCurrentPath() {}
      }, {
        key: "isNavActive",
        value: function isNavActive(name) {
          return this.activeNav == name ? 'nav-active' : '';
        }
      }, {
        key: "showMiniSideBar",
        value: function showMiniSideBar() {
          return this.isSideBarMini ? 'mini' : '';
        }
      }, {
        key: "showApartments",
        value: function showApartments() {
          this.modalService.showApartmentModal();
        }
      }, {
        key: "showUserInfo",
        value: function showUserInfo() {
          this.modalService.showUserInfoModal(this.user);
        }
      }, {
        key: "gotoExtPage",
        value: function gotoExtPage() {
          this.router.navigate(['http://108.179.237.164/~actualso/projects/99apartment/']);
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          if (window.innerWidth <= 991) {
            this.mScrollbarService.destroy('#leftMenuScroller');
          } else {
            this.mScrollbarService.initScrollbar('#leftMenuScroller', {});
          }
        }
      }, {
        key: "stopPropagation",
        value: function stopPropagation(event) {
          event.stopPropagation();
        }
      }, {
        key: "isSubMenusAvailable",
        value: function isSubMenusAvailable(submenu) {
          return submenu == undefined || submenu.length == 0 ? false : true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this85 = this;

          this.isMenuLoaded = false;
          this.menusDataList = this.constantsService.getAllMenus();
          this.screenService.getAllScreensByStatus(1).subscribe(function (res) {
            _this85.availableScreensDataList = res;
            _this85.isMenuLoaded = true;
            underscore__WEBPACK_IMPORTED_MODULE_11__["each"](_this85.availableScreensDataList, function (item) {
              var menus = _this85.menusDataList.filter(function (menu) {
                return menu.name == item.screenName;
              }); //undefined check if local json doesnt have corrosponding menu data


              if (menus[0] != undefined) _this85.sidebarMenuDataList.push(menus[0]);
            }); // console.log(this.sidebarMenuDataList);

            setTimeout(function () {
              var navItems = $(".nav-list");
              $.each(navItems, function (index, elem) {
                if ($(elem).find('.nav-link').hasClass('active')) {
                  _this85.activeNav = $(elem).find('.nav-link').attr('name');
                }
              });
            }, 1000);
          }, function (error) {
            _this85.isMenuLoaded = true;
          });
          var userId = parseInt(this.cookieService.get('userId'));
          this.userService.getUserById(userId).subscribe(function (res) {
            _this85.user = res[0];
            _this85.user.role = _this85.cookieService.get('userRole');

            _this85.sharedService.setUserDetails(_this85.user);

            _this85.sharedService.isUserLogged(true);
          }, function (error) {
            console.log(error);
          });
          this.sharedService.apartmentselectedcast.subscribe(function (isSelected) {
            _this85.isApartmentSelected = isSelected;

            if (_this85.isApartmentSelected) {
              var params = {
                apartmentId: parseInt(_this85.cookieService.get('apartmentId')),
                active: 1
              };

              _this85.apartmentService.getApartmentByApartmentId(params).subscribe(function (res) {
                _this85.apartmentName = res[0].apartmentName;
              }, function (error) {
                console.log(error);
              });
            }
          });
          this.sharedService.userdetailscast.subscribe(function (user) {
            _this85.user = user;
          });
          this.sharedService.sidebarminicast.subscribe(function (isSideBarMini) {
            return _this85.isSideBarMini = isSideBarMini;
          });
          this.sharedService.userlogin.subscribe(function (userLoggedIn) {
            return _this85.userLoggedIn = userLoggedIn;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (window.innerWidth <= 991) {
            this.mScrollbarService.destroy('#leftMenuScroller');
          } else {
            this.mScrollbarService.initScrollbar('#leftMenuScroller', {});
          }
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _api_services_screen_service__WEBPACK_IMPORTED_MODULE_5__["ScreenService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]
      }, {
        type: _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_8__["ConstantsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_10__["MalihuScrollbarService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], SidebarComponent.prototype, "onResize", null);
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/sidebar/sidebar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/ams/components/sidebar/sidebar.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _api_services_screen_service__WEBPACK_IMPORTED_MODULE_5__["ScreenService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"], _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_8__["ConstantsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_10__["MalihuScrollbarService"]])], SidebarComponent);
    /***/
  }
}]);
//# sourceMappingURL=ams-ams-module-es5.js.map