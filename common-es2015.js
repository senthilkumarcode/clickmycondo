(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js ***!
  \*************************************************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/ngx-cookie-service/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





let CookieService = class CookieService {
    constructor(
    // The type `Document` may not be used here. Although a fix is on its way,
    // we will go with `any` for now to support Angular 2.4.x projects.
    // Issue: https://github.com/angular/angular/issues/12631
    // Fix: https://github.com/angular/angular/pull/14894
    document, 
    // Get the `PLATFORM_ID` so we can check if we're in a browser.
    platformId) {
        this.document = document;
        this.platformId = platformId;
        this.documentIsAccessible = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId);
    }
    /**
     * @param name Cookie name
     * @returns boolean - whether cookie with specified name exists
     */
    check(name) {
        if (!this.documentIsAccessible) {
            return false;
        }
        name = encodeURIComponent(name);
        const regExp = this.getCookieRegExp(name);
        const exists = regExp.test(this.document.cookie);
        return exists;
    }
    /**
     * @param name Cookie name
     * @returns property value
     */
    get(name) {
        if (this.documentIsAccessible && this.check(name)) {
            name = encodeURIComponent(name);
            const regExp = this.getCookieRegExp(name);
            const result = regExp.exec(this.document.cookie);
            return this.safeDecodeURIComponent(result[1]);
        }
        else {
            return '';
        }
    }
    /**
     * @returns all the cookies in json
     */
    getAll() {
        if (!this.documentIsAccessible) {
            return {};
        }
        const cookies = {};
        const document = this.document;
        if (document.cookie && document.cookie !== '') {
            document.cookie.split(';').forEach((currentCookie) => {
                const [cookieName, cookieValue] = currentCookie.split('=');
                cookies[this.safeDecodeURIComponent(cookieName.replace(/^ /, ''))] = this.safeDecodeURIComponent(cookieValue);
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
    set(name, value, expires, path, domain, secure, sameSite = 'Lax') {
        if (!this.documentIsAccessible) {
            return;
        }
        let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
        if (expires) {
            if (typeof expires === 'number') {
                const dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                cookieString += 'expires=' + dateExpires.toUTCString() + ';';
            }
            else {
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
            console.warn(`[ngx-cookie-service] Cookie ${name} was forced with secure flag because sameSite=None.` +
                `More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`);
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
    delete(name, path, domain, secure, sameSite = 'Lax') {
        if (!this.documentIsAccessible) {
            return;
        }
        this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain, secure, sameSite);
    }
    /**
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    deleteAll(path, domain, secure, sameSite = 'Lax') {
        if (!this.documentIsAccessible) {
            return;
        }
        const cookies = this.getAll();
        for (const cookieName in cookies) {
            if (cookies.hasOwnProperty(cookieName)) {
                this.delete(cookieName, path, domain, secure, sameSite);
            }
        }
    }
    /**
     * @param name Cookie name
     * @returns property RegExp
     */
    getCookieRegExp(name) {
        const escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi, '\\$1');
        return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
    }
    safeDecodeURIComponent(encodedURIComponent) {
        try {
            return decodeURIComponent(encodedURIComponent);
        }
        catch (_a) {
            // probably it is not uri encoded. return as is
            return encodedURIComponent;
        }
    }
};
CookieService.ɵfac = function CookieService_Factory(t) { return new (t || CookieService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])); };
CookieService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
CookieService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function CookieService_Factory() { return new CookieService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])); }, token: CookieService, providedIn: "root" });
CookieService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))
], CookieService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CookieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }]; }, null); })();

/*
 * Public API Surface of ngx-cookie-service
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-cookie-service.js.map

/***/ }),

/***/ "./src/@condo/directives/scrollbar/index.ts":
/*!**************************************************!*\
  !*** ./src/@condo/directives/scrollbar/index.ts ***!
  \**************************************************/
/*! exports provided: CondoScrollbarDirective, CondoScrollbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_condo_directives_scrollbar_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@condo/directives/scrollbar/public-api */ "./src/@condo/directives/scrollbar/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CondoScrollbarDirective", function() { return src_condo_directives_scrollbar_public_api__WEBPACK_IMPORTED_MODULE_0__["CondoScrollbarDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CondoScrollbarModule", function() { return src_condo_directives_scrollbar_public_api__WEBPACK_IMPORTED_MODULE_0__["CondoScrollbarModule"]; });




/***/ }),

/***/ "./src/@condo/pipes/find-by-key/find-by-key.module.ts":
/*!************************************************************!*\
  !*** ./src/@condo/pipes/find-by-key/find-by-key.module.ts ***!
  \************************************************************/
/*! exports provided: CondoFindByKeyPipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondoFindByKeyPipeModule", function() { return CondoFindByKeyPipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_condo_pipes_find_by_key_find_by_key_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@condo/pipes/find-by-key/find-by-key.pipe */ "./src/@condo/pipes/find-by-key/find-by-key.pipe.ts");



let CondoFindByKeyPipeModule = class CondoFindByKeyPipeModule {
};
CondoFindByKeyPipeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            src_condo_pipes_find_by_key_find_by_key_pipe__WEBPACK_IMPORTED_MODULE_2__["CondoFindByKeyPipe"]
        ],
        exports: [
            src_condo_pipes_find_by_key_find_by_key_pipe__WEBPACK_IMPORTED_MODULE_2__["CondoFindByKeyPipe"]
        ]
    })
], CondoFindByKeyPipeModule);



/***/ }),

/***/ "./src/@condo/pipes/find-by-key/find-by-key.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/@condo/pipes/find-by-key/find-by-key.pipe.ts ***!
  \**********************************************************/
/*! exports provided: CondoFindByKeyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondoFindByKeyPipe", function() { return CondoFindByKeyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * Finds an object from given source using the given key - value pairs
 */
let CondoFindByKeyPipe = class CondoFindByKeyPipe {
    /**
     * Constructor
     */
    constructor() {
    }
    /**
     * Transform
     *
     * @param value A string or an array of strings to find from source
     * @param key Key of the object property to look for
     * @param source Array of objects to find from
     */
    transform(value, key, source) {
        // If the given value is an array of strings...
        if (Array.isArray(value)) {
            return value.map((item) => {
                return source.find((sourceItem) => sourceItem[key] === item);
            });
        }
        // If the value is a string...
        return source.find(sourceItem => sourceItem[key] === value);
    }
};
CondoFindByKeyPipe.ctorParameters = () => [];
CondoFindByKeyPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'condoFindByKey',
        pure: false
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CondoFindByKeyPipe);



/***/ }),

/***/ "./src/@condo/pipes/find-by-key/index.ts":
/*!***********************************************!*\
  !*** ./src/@condo/pipes/find-by-key/index.ts ***!
  \***********************************************/
/*! exports provided: CondoFindByKeyPipe, CondoFindByKeyPipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_condo_pipes_find_by_key_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@condo/pipes/find-by-key/public-api */ "./src/@condo/pipes/find-by-key/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CondoFindByKeyPipe", function() { return src_condo_pipes_find_by_key_public_api__WEBPACK_IMPORTED_MODULE_0__["CondoFindByKeyPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CondoFindByKeyPipeModule", function() { return src_condo_pipes_find_by_key_public_api__WEBPACK_IMPORTED_MODULE_0__["CondoFindByKeyPipeModule"]; });




/***/ }),

/***/ "./src/@condo/pipes/find-by-key/public-api.ts":
/*!****************************************************!*\
  !*** ./src/@condo/pipes/find-by-key/public-api.ts ***!
  \****************************************************/
/*! exports provided: CondoFindByKeyPipe, CondoFindByKeyPipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_condo_pipes_find_by_key_find_by_key_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@condo/pipes/find-by-key/find-by-key.pipe */ "./src/@condo/pipes/find-by-key/find-by-key.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CondoFindByKeyPipe", function() { return src_condo_pipes_find_by_key_find_by_key_pipe__WEBPACK_IMPORTED_MODULE_0__["CondoFindByKeyPipe"]; });

/* harmony import */ var src_condo_pipes_find_by_key_find_by_key_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@condo/pipes/find-by-key/find-by-key.module */ "./src/@condo/pipes/find-by-key/find-by-key.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CondoFindByKeyPipeModule", function() { return src_condo_pipes_find_by_key_find_by_key_module__WEBPACK_IMPORTED_MODULE_1__["CondoFindByKeyPipeModule"]; });





/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map