(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-ams-my-property-my-property-module~modules-ams-profile-settings-profile-settings-module"], {
    /***/
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js":
    /*!*************************************************************************************!*\
      !*** ./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js ***!
      \*************************************************************************************/

    /*! exports provided: CookieService */

    /***/
    function node_modulesNgxCookieService__ivy_ngcc__Fesm2015NgxCookieServiceJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CookieService", function () {
        return CookieService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/ngx-intl-tel-input/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var CookieService = /*#__PURE__*/function () {
        function CookieService( // The type `Document` may not be used here. Although a fix is on its way,
        // we will go with `any` for now to support Angular 2.4.x projects.
        // Issue: https://github.com/angular/angular/issues/12631
        // Fix: https://github.com/angular/angular/pull/14894
        document, // Get the `PLATFORM_ID` so we can check if we're in a browser.
        platformId) {
          _classCallCheck(this, CookieService);

          this.document = document;
          this.platformId = platformId;
          this.documentIsAccessible = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId);
        }
        /**
         * @param name Cookie name
         * @returns boolean - whether cookie with specified name exists
         */


        _createClass(CookieService, [{
          key: "check",
          value: function check(name) {
            if (!this.documentIsAccessible) {
              return false;
            }

            name = encodeURIComponent(name);
            var regExp = this.getCookieRegExp(name);
            var exists = regExp.test(this.document.cookie);
            return exists;
          }
          /**
           * @param name Cookie name
           * @returns property value
           */

        }, {
          key: "get",
          value: function get(name) {
            if (this.documentIsAccessible && this.check(name)) {
              name = encodeURIComponent(name);
              var regExp = this.getCookieRegExp(name);
              var result = regExp.exec(this.document.cookie);
              return this.safeDecodeURIComponent(result[1]);
            } else {
              return '';
            }
          }
          /**
           * @returns all the cookies in json
           */

        }, {
          key: "getAll",
          value: function getAll() {
            var _this = this;

            if (!this.documentIsAccessible) {
              return {};
            }

            var cookies = {};
            var document = this.document;

            if (document.cookie && document.cookie !== '') {
              document.cookie.split(';').forEach(function (currentCookie) {
                var _currentCookie$split = currentCookie.split('='),
                    _currentCookie$split2 = _slicedToArray(_currentCookie$split, 2),
                    cookieName = _currentCookie$split2[0],
                    cookieValue = _currentCookie$split2[1];

                cookies[_this.safeDecodeURIComponent(cookieName.replace(/^ /, ''))] = _this.safeDecodeURIComponent(cookieValue);
              });
            }

            return cookies;
          }
          /**
           * @param name     Cookie name
           * @param value    Cookie value
           * @param expires  Number of days until the cookies expires or an actual `Date`
           * @param path     Cookie path
           * @param domain   Cookie domain
           * @param secure   Secure flag
           * @param sameSite OWASP samesite token `Lax`, `None`, or `Strict`. Defaults to `Lax`
           */

        }, {
          key: "set",
          value: function set(name, value, expires, path, domain, secure) {
            var sameSite = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'Lax';

            if (!this.documentIsAccessible) {
              return;
            }

            var cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';

            if (expires) {
              if (typeof expires === 'number') {
                var dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                cookieString += 'expires=' + dateExpires.toUTCString() + ';';
              } else {
                cookieString += 'expires=' + expires.toUTCString() + ';';
              }
            }

            if (path) {
              cookieString += 'path=' + path + ';';
            }

            if (domain) {
              cookieString += 'domain=' + domain + ';';
            }

            if (secure === false && sameSite === 'None') {
              secure = true;
              console.warn("[ngx-cookie-service] Cookie ".concat(name, " was forced with secure flag because sameSite=None.") + "More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130");
            }

            if (secure) {
              cookieString += 'secure;';
            }

            cookieString += 'sameSite=' + sameSite + ';';
            this.document.cookie = cookieString;
          }
          /**
           * @param name   Cookie name
           * @param path   Cookie path
           * @param domain Cookie domain
           */

        }, {
          key: "delete",
          value: function _delete(name, path, domain, secure) {
            var sameSite = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'Lax';

            if (!this.documentIsAccessible) {
              return;
            }

            this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain, secure, sameSite);
          }
          /**
           * @param path   Cookie path
           * @param domain Cookie domain
           */

        }, {
          key: "deleteAll",
          value: function deleteAll(path, domain, secure) {
            var sameSite = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Lax';

            if (!this.documentIsAccessible) {
              return;
            }

            var cookies = this.getAll();

            for (var cookieName in cookies) {
              if (cookies.hasOwnProperty(cookieName)) {
                this["delete"](cookieName, path, domain, secure, sameSite);
              }
            }
          }
          /**
           * @param name Cookie name
           * @returns property RegExp
           */

        }, {
          key: "getCookieRegExp",
          value: function getCookieRegExp(name) {
            var escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi, '\\$1');
            return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
          }
        }, {
          key: "safeDecodeURIComponent",
          value: function safeDecodeURIComponent(encodedURIComponent) {
            try {
              return decodeURIComponent(encodedURIComponent);
            } catch (_a) {
              // probably it is not uri encoded. return as is
              return encodedURIComponent;
            }
          }
        }]);

        return CookieService;
      }();

      CookieService.ɵfac = function CookieService_Factory(t) {
        return new (t || CookieService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
      };

      CookieService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }];
      };

      CookieService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function CookieService_Factory() {
          return new CookieService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
        },
        token: CookieService,
        providedIn: "root"
      });
      CookieService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))], CookieService);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CookieService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();
      /*
       * Public API Surface of ngx-cookie-service
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-cookie-service.js.map

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.html":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsProfileSettingsComponentsAddPropertyDialogAddPropertyDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<condo-card>\n    <div CondoCardHeader>\n        <div class=\"d-flex\">\n            <h4>Add Property</h4>\n        </div>\n    </div>\n    <div CondoCardBody>\n        <div class=\"p-5\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                    <div class=\"input-box\">\n                        <label>Node Id</label>\n                        <input type=\"text\" class=\"form-control\" disabled [ngModel]=\"addPropertyParam.nodeId\"\n                            name=\"nodeId\">\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                    <div class=\"input-box\">\n                        <label>POI Id</label>\n                        <input type=\"text\" class=\"form-control\" disabled [ngModel]=\"addPropertyParam.propertyPoiid\"\n                            name=\"propertyPoiid\">\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3 \">\n                    <div class=\"select-box\">\n                        <label>Property Type</label>\n                        <select [(ngModel)]=\"addPropertyParam.propertyPoitype\" (change)=\"selectPropertyType()\"\n                            name=\"propertyPoitype\" class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                            <option *ngFor=\"let item of propertyTypeList\" value=\"{{item.lookupValueId}}\">\n                                {{item.lookupValueName}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3\"\n                    *ngIf=\"addPropertyParam.propertyPoitype == 318\">\n                    <div class=\"select-box\">\n                        <label>Units</label>\n                        <select [(ngModel)]=\"addPropertyParam.blockUnitId\" name=\"blockUnitId\" class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                            <option *ngFor=\"let item of unitList\" value=\"{{item.apartmentBlockUnitId}}\">\n                                {{item.apartmentBlockUnitNumber}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3\"\n                    *ngIf=\"addPropertyParam.propertyPoitype == 320\">\n                    <div class=\"select-box\">\n                        <label>Facility Type</label>\n                        <select [(ngModel)]=\"addPropertyParam.facilityId\" name=\"facilityId\" class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                            <option *ngFor=\"let item of facilityList\" value=\"{{item.apartmentFacilityId}}\">\n                                {{item.facilityName}}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3\"\n                    *ngIf=\"addPropertyParam.propertyPoitype == 319\">\n                    <div class=\"select-box\">\n                        <label>Asset Category</label>\n                        <select [(ngModel)]=\"assetCategory\" name=\"assetCategory\" (change)=\"getAssetSubCategory()\"\n                            class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                            <option *ngFor=\"let item of assetCategoryList\" value=\"{{item.id}}\">{{item.name}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3\"\n                    *ngIf=\"addPropertyParam.propertyPoitype == 319 && assetCategory\">\n                    <div class=\"select-box\">\n                        <label>Asset Sub Category</label>\n                        <select [(ngModel)]=\"assetSubCategory\" name=\"assetSubCategory\" (change)=\"selectAsset()\"\n                            class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                            <option *ngFor=\"let item of assetSubCategoryList\" value=\"{{item.id}}\">{{item.name}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3\"\n                    *ngIf=\"addPropertyParam.propertyPoitype == 319 && assetCategory && assetSubCategory\">\n                    <div class=\"select-box\">\n                        <label>Asset</label>\n                        <select [(ngModel)]=\"addPropertyParam.assetId\" name=\"assetId\" class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                            <option *ngFor=\"let item of assetList\" value=\"{{item.assetId}}\">{{item.assetName}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3\">\n                    <div class=\"select-box\">\n                        <label>Infrastrcuture</label>\n                        <select [(ngModel)]=\"addPropertyParam.infrastructureId\" name=\"infrastructureId\"\n                            class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3\">\n                    <div class=\"select-box\">\n                        <label>Operational Maintanance</label>\n                        <select [(ngModel)]=\"addPropertyParam.opMaintenanceId\" name=\"opMaintenanceId\"\n                            class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 d-flex justify-content-end mt-3\">\n                    <button mat-flat-button mat-dialog-close>Cancel</button>\n                    <button mat-flat-button [color]=\"'primary'\" (click)=\"addProperty()\">Submit</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</condo-card>";
      /***/
    },

    /***/
    "./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.scss":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.scss ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsProfileSettingsComponentsAddPropertyDialogAddPropertyDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3Byb2ZpbGUtc2V0dGluZ3MvY29tcG9uZW50cy9hZGQtcHJvcGVydHktZGlhbG9nL2FkZC1wcm9wZXJ0eS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.ts":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: AddPropertyDialogComponent */

    /***/
    function srcAppModulesAmsProfileSettingsComponentsAddPropertyDialogAddPropertyDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPropertyDialogComponent", function () {
        return AddPropertyDialogComponent;
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


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Facility */
      "./src/app/api/controllers/Facility.ts");
      /* harmony import */


      var src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/controllers/PropertyManager */
      "./src/app/api/controllers/PropertyManager.ts");
      /* harmony import */


      var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/api/controllers/Asset */
      "./src/app/api/controllers/Asset.ts");

      var AddPropertyDialogComponent = /*#__PURE__*/function () {
        function AddPropertyDialogComponent(lookupService, apartmentService, facilityService, cookieService, propertyService, assetService, dialogRef, data) {
          _classCallCheck(this, AddPropertyDialogComponent);

          this.lookupService = lookupService;
          this.apartmentService = apartmentService;
          this.facilityService = facilityService;
          this.cookieService = cookieService;
          this.propertyService = propertyService;
          this.assetService = assetService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.propertyTypeList = [];
          this.unitList = [];
          this.facilityList = [];
          this.assetCategoryList = [];
          this.assetSubCategoryList = [];
          this.assetList = [];
          this.assetRawList = [];
          this.addPropertyParam = {
            "propertyPoiid": 0,
            "propertyPoitype": 0,
            "nodeId": 0,
            "x": 0,
            "y": 0,
            "id": 0,
            "blockUnitId": null,
            "assetId": null,
            "facilityId": null,
            "infrastructureId": null,
            "opMaintenanceId": null,
            "apartmentId": Number(this.cookieService.get('apartmentId')),
            "isActive": true,
            "insertedBy": null,
            "insertedOn": "2020-07-06T14:48:10.120Z",
            "updatedBy": null,
            "updatedOn": "2020-07-06T14:48:10.120Z"
          };

          for (var key in this.data) {
            if (this.addPropertyParam.hasOwnProperty(key)) {
              this.addPropertyParam[key] = this.data[key];
            }
          }
        }

        _createClass(AddPropertyDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('........', this.addPropertyParam);
            this.getPropertyType();
          }
        }, {
          key: "getPropertyType",
          value: function getPropertyType() {
            var _this2 = this;

            var getLookUpParam = {
              ApartmentId: Number(this.cookieService.get('apartmentId')),
              LookupTypeId: 196
            };
            this.lookupService.getLookupValueByLookupTypeId(getLookUpParam).subscribe(function (resp) {
              _this2.propertyTypeList = resp;
            }, function (error) {});
          }
        }, {
          key: "selectPropertyType",
          value: function selectPropertyType() {
            switch (Number(this.addPropertyParam.propertyPoitype)) {
              case 316:
                break;

              case 318:
                this.getUnitList();
                break;

              case 319:
                this.getAssetCategory();
                this.getAsset();
                break;

              case 320:
                this.getFacilityList();
                break;

              case 321:
                break;

              case 322:
                break;

              default:
                break;
            }
          }
        }, {
          key: "getUnitList",
          value: function getUnitList() {
            var _this3 = this;

            var getUnitParam = {
              apartmentBlockId: this.data.apartmentBlockId
            };
            this.apartmentService.getApartmentBlockUnitByBlockId(getUnitParam).subscribe(function (resp) {
              _this3.unitList = resp;
            });
          }
        }, {
          key: "getFacilityList",
          value: function getFacilityList() {
            var _this4 = this;

            var getFacilityParam = {
              apartmentId: Number(this.cookieService.get('apartmentId'))
            };
            this.facilityService.getApartmentFacilitiesByApartmentId(getFacilityParam).subscribe(function (resp) {
              _this4.facilityList = resp;
            });
          }
        }, {
          key: "getAssetCategory",
          value: function getAssetCategory() {
            var _this5 = this;

            var queryParamBase = {
              apartmentId: Number(this.cookieService.get('apartmentId')),
              lookupTypeId: 19,
              subCategoryLookupTypeId: 68
            };
            this.lookupService.getSubcategory(queryParamBase).subscribe(function (res) {
              if (res) {
                _this5.assetCategoryList = res ? res : [];
              }
            });
          }
        }, {
          key: "getAssetSubCategory",
          value: function getAssetSubCategory() {
            var _this6 = this;

            this.assetCategoryList.filter(function (key) {
              if (key.id == _this6.assetCategory) {
                _this6.assetSubCategoryList = key.subCategory;
              }
            });
          }
        }, {
          key: "getAsset",
          value: function getAsset() {
            var _this7 = this;

            var getAllAsset = {
              apartmentId: Number(this.cookieService.get('apartmentId'))
            };
            this.assetService.getAllAssetByApartmentId(getAllAsset).subscribe(function (resp) {
              _this7.assetRawList = resp;
            });
          }
        }, {
          key: "selectAsset",
          value: function selectAsset() {
            var _this8 = this;

            this.assetRawList.filter(function (key) {
              if (key.assetSubcategoryId == _this8.assetSubCategory) {
                _this8.assetList.push(key);
              }
            });
          }
        }, {
          key: "assignUnitData",
          value: function assignUnitData(poiId) {
            var _this9 = this;

            var unitData = new Object();
            unitData['type'] = "318";
            unitData['poiId'] = poiId;
            this.unitList.filter(function (key) {
              if (key.apartmentBlockUnitId == _this9.addPropertyParam.blockUnitId) {
                for (var item in key) {
                  if (key[item] === true && key[item] != null) {
                    unitData[item] = item;
                  }
                }
              }
            });
            delete unitData.isActive;
            this.dialogRef.close(unitData);
          }
        }, {
          key: "addProperty",
          value: function addProperty() {
            var _this10 = this;

            this.addPropertyParam.insertedOn = new Date().toISOString();
            this.addPropertyParam.updatedOn = new Date().toISOString();
            this.addPropertyParam.insertedBy = parseInt(this.cookieService.get('userId'));
            var addProperty = {
              propertyPoi: this.addPropertyParam
            };
            this.propertyService.addPropertyPoi(addProperty).subscribe(function (resp) {
              if (resp && resp.message) {
                switch (_this10.addPropertyParam.propertyPoitype) {
                  case 316:
                    break;

                  case 318:
                    _this10.assignUnitData(resp.message);

                    break;

                  case 319:
                    break;

                  case 320:
                    break;

                  case 321:
                    break;

                  case 322:
                    break;

                  default:
                    break;
                }
              }
            });
          }
        }, {
          key: "updateProperty",
          value: function updateProperty() {
            this.addPropertyParam.updatedOn = new Date().toISOString();
            var addProperty = {
              propertyPoi: this.addPropertyParam
            };
            this.propertyService.updatePropertyPoi(addProperty).subscribe(function (resp) {});
          }
        }]);

        return AddPropertyDialogComponent;
      }();

      AddPropertyDialogComponent.ctorParameters = function () {
        return [{
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
        }, {
          type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_6__["FacilityService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
        }, {
          type: src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_7__["PropertyManagerService"]
        }, {
          type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_8__["AssetService"]
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

      AddPropertyDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-property-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-property-dialog.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-property-dialog.component.scss */
        "./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_6__["FacilityService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_7__["PropertyManagerService"], src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_8__["AssetService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], AddPropertyDialogComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~modules-ams-my-property-my-property-module~modules-ams-profile-settings-profile-settings-module-es5.js.map