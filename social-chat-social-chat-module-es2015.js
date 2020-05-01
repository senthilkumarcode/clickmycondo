(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-chat-social-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/social-chat/components/forum-category/forum-category.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/social-chat/components/forum-category/forum-category.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"category\">\n    \n    <a href=\"javascript:void(0)\" class=\"n-text\" routerLink=\"/user/social-chat/forum/Health\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t<div class=\"card e-card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t  <div class=\"icon float-left\">\n\t\t\t\t\t\t\t<img src=\"assets/images/health-icon.svg\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4 class=\"float-left\">Health</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n    </a>\n\n\n    <a href=\"javascript:void(0)\" class=\"n-text\" routerLink=\"/user/social-chat/forum/Kids\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t<div class=\"card e-card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"icon float-left\">\n\t\t\t\t\t\t\t<img src=\"assets/images/kids-icon.svg\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4 class=\"float-left\">Kids</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n    </a>\n\n    <a href=\"javascript:void(0)\" class=\"n-text\" routerLink=\"/user/social-chat/forum/Parenting\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t<div class=\"card e-card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"icon float-left\">\n\t\t\t\t\t\t\t<img src=\"assets/images/parenting-icon.svg\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4 class=\"float-left\">Parenting</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n    </a>\n\n\n    <a href=\"javascript:void(0)\" class=\"n-text\" routerLink=\"/user/social-chat/forum/Elder-care\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t<div class=\"card e-card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"icon float-left\">\n\t\t\t\t\t\t\t<img src=\"assets/images/elder-care-icon.svg\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4 class=\"float-left\">Elder care</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n    </a>\n\n    <a href=\"javascript:void(0)\" class=\"n-text\" routerLink=\"/user/social-chat/forum/Outdoor\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t<div class=\"card e-card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"icon float-left\">\n\t\t\t\t\t\t\t<img src=\"assets/images/outdoor-icon.svg\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4 class=\"float-left\">Outdoor</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n    </a>\n\n    <a href=\"javascript:void(0)\" class=\"n-text\" routerLink=\"/user/social-chat/forum/Others\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t<div class=\"card e-card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"icon float-left\">\n\t\t\t\t\t\t\t<img src=\"assets/images/others-icon.svg\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4 class=\"float-left\">Others</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n    </a>\n    \n   \n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/social-chat/components/forum/forum.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/social-chat/components/forum/forum.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"socialChat\">  \n  <div class=\"row\" style=\"margin: 0px\">  \n    <div class=\"col-lg-12 col-md-12\"> \n\n      <mat-card class= \"TopicsForums\">\n\n        <mat-expansion-panel [expanded]=\"panelOpenState\"  (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\"> \n\n          <mat-expansion-panel-header>\n            <div class=\"profile-icon\" >\n              <img class=\"img-fluid\" src=\"https://randomuser.me/api/portraits/men/9.jpg\">\n              <span>What is your question?</span>\n            </div>\n          </mat-expansion-panel-header> \n\n          <mat-form-field class=\"postInput\">\n            <input matInput  #submessage maxlength=\"50\" placeholder='Start your question with \"What\", \"How\", \"Why\", etc.' [(ngModel)]=\"user.subject\">\n            <mat-hint align=\"end\">{{submessage.value.length}} / 50</mat-hint>\n          </mat-form-field>\n\n          <mat-form-field class=\"postInput\">\n            <input matInput #descmessage maxlength=\"150\" placeholder='Leave a description here...' [(ngModel)]=\"user.description\">\n            <mat-hint align=\"end\">{{descmessage.value.length}} / 150</mat-hint>           \n          </mat-form-field>\n\n          <img [src]=\"user.postImg\" *ngIf=\"user.postImg\">\n\n          <mat-action-row class=\"bottomNavigation\">\n            <div class=\"input-box uploadImg\">\n              <label class=\"btn sf lime-green\" for=\"my-file-selector\" (click)=\"uploader.click()\">\n                <input class=\"form-control\"  #uploader type=\"file\" [(ngModel)]=\"uploadFileItem\" (change)=\"uploadImage($event)\" multiple>                \n                <i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i>Add image</label>\n            </div>            \n            <button mat-raised-button postbutton [disabled]=\"!user.subject\" color=\"primary\" (click)=\"userPost()\">Post</button>\n          </mat-action-row>\n\n        </mat-expansion-panel> \n        <mat-progress-bar *ngIf=\"!loaded\" mode=\"query\"></mat-progress-bar>  \n      </mat-card>      \n     \n      <mat-card class=\"topicCards\" *ngFor=\"let item of getallTopics\">       \n        \n        <mat-card-header> \n                   \n          <div mat-card-avatar><img mat-card-image src=\"assets/images/user-icon.svg\"> </div>\n          <mat-card-title class=\"topicsName\">\n            <div class=\"cardId\">{{item.insertPersonName}}</div> <div class=\"timezone\">{{item.insertedOn | date: 'dd/MM/yyyy, h:mm a'}}</div> \n          </mat-card-title>  \n                \n        </mat-card-header>\n\n        <span id=\"subject\">{{item.subject}}</span><br>\n        <img  *ngIf=\"item.img\" mat-card-image class=\"imgResponsive\" src= {{item.img}} >\n\n        <mat-card-content>\n          <p class=\"desc\">{{item.description}}</p>\n        </mat-card-content> \n\n        <mat-card-actions>\n\n          <button mat-icon-button class=\"placeHolderImage\" (click)=\"likesUpdate(item)\" [disabled] = \"item.toggle\">\n            <span class=\"icon\" [style.color]=\"item.toggle ? 'blue' : '#666'\">\n              <img class=\"svg\" src=\"assets/images/thumbs-up.svg\" width=\"20\" />              \n            </span>\n            <span class=\"bottomIcon\">{{item.likes}}</span>\n          </button>\n\n          <button mat-icon-button  class=\"placeHolderImage\" (click)=\"openComments(item)\">\n            <span class=\"icon\">\n              <img class=\"svg\" src=\"assets/images/message-square.svg\" width=\"20\" />              \n            </span>\n            <span class=\"bottomIcon\">{{item.totalComments}}</span>\n          </button>\n\n          <button mat-stroked-button  color=\"warn\" style=\"float: right; \">Report</button>\n\n         </mat-card-actions>\n\n         <div *ngIf=\"item.hide\" class=\"comments\">\n\n            <mat-form-field appearance=\"outline\" style=\"font-size: 16px; width:100%\">\n              <mat-label>Comments</mat-label>\n              <button mat-raised-button color=\"primary\" postbutton [disabled]=\"!item.postDescription\" class=\"commentBtn\" (click) ='addPost(item)'>Post</button>\n              <input matInput #coomentsmessage class=\"cBox\" maxlength=\"150\" [(ngModel)]=\"item.postDescription\">\n              <mat-hint align=\"end\">{{coomentsmessage.value.length}} / 150</mat-hint>\n            </mat-form-field>\n          \n            <mat-card class=\"postCards\" *ngFor=\"let post of item.postArr\">\n              \n              <div class=\"layout\">\n                <div mat-card-avatar>\n                  <img mat-card-image src=\"assets/images/user-icon.svg\">                 \n                </div>               \n                <div>\n                  <span class=\"cardId desc\">{{user.name}}</span> \n                  <span class=\"timezone\">{{item.insertedOn | date: 'dd/MM/yyyy, h:mm a'}}</span><br>\n                  <span class=\"desc\">{{post.description}}</span>\n                </div>  \n                \n              </div>    \n                    \n            </mat-card>\n\n          </div>\n      </mat-card>\n    </div>    \n  </div>\n</div>\n\n \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/social-chat/social-chat.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/social-chat/social-chat.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/user/social-chat/components/forum-category/forum-category.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/user/social-chat/components/forum-category/forum-category.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".category .e-card {\n  margin: 0px 0 20px 0;\n}\n.category .e-card .card-body {\n  padding: 25px 20px;\n}\n.category .e-card .card-body .icon {\n  margin: -9px 20px 0 0;\n}\n.category .e-card .card-body .icon img {\n  width: 36px;\n}\n.category .e-card .card-body h4 {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC91c2VyL3NvY2lhbC1jaGF0L2NvbXBvbmVudHMvZm9ydW0tY2F0ZWdvcnkvZm9ydW0tY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvc29jaWFsLWNoYXQvY29tcG9uZW50cy9mb3J1bS1jYXRlZ29yeS9mb3J1bS1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNGLG9CQUFBO0FDSkY7QURLRTtFQUNDLGtCQUFBO0FDSEg7QURJRztFQUNDLHFCQUFBO0FDRko7QURHSTtFQUNDLFdBQUE7QUNETDtBRElHO0VFK0RELGVBQUE7QURoRUYiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NvY2lhbC1jaGF0L2NvbXBvbmVudHMvZm9ydW0tY2F0ZWdvcnkvZm9ydW0tY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmNhdGVnb3J5e1xuICAgIC5lLWNhcmQge1xuXHRcdG1hcmdpbjogMHB4IDAgMjBweCAwO1xuXHRcdC5jYXJkLWJvZHkge1xuXHRcdFx0cGFkZGluZzogMjVweCAyMHB4O1xuXHRcdFx0Lmljb24ge1xuXHRcdFx0XHRtYXJnaW46IC05cHggMjBweCAwIDA7XG5cdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDM2cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGg0IHtcblx0ICAgIFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW1lZGl1bSk7XG5cdFx0XHR9XG5cdFx0fVx0XG5cdH0gICBcbiAgICBcbn1cbiIsIi5jYXRlZ29yeSAuZS1jYXJkIHtcbiAgbWFyZ2luOiAwcHggMCAyMHB4IDA7XG59XG4uY2F0ZWdvcnkgLmUtY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMjVweCAyMHB4O1xufVxuLmNhdGVnb3J5IC5lLWNhcmQgLmNhcmQtYm9keSAuaWNvbiB7XG4gIG1hcmdpbjogLTlweCAyMHB4IDAgMDtcbn1cbi5jYXRlZ29yeSAuZS1jYXJkIC5jYXJkLWJvZHkgLmljb24gaW1nIHtcbiAgd2lkdGg6IDM2cHg7XG59XG4uY2F0ZWdvcnkgLmUtY2FyZCAuY2FyZC1ib2R5IGg0IHtcbiAgZm9udC1zaXplOiAycmVtO1xufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/user/social-chat/components/forum-category/forum-category.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/user/social-chat/components/forum-category/forum-category.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ForumCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumCategoryComponent", function() { return ForumCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ForumCategoryComponent = class ForumCategoryComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
ForumCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forum-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forum-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/social-chat/components/forum-category/forum-category.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forum-category.component.scss */ "./src/app/user/social-chat/components/forum-category/forum-category.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ForumCategoryComponent);



/***/ }),

/***/ "./src/app/user/social-chat/components/forum/forum.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/user/social-chat/components/forum/forum.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".socialChat [postbutton] {\n  background-color: #3f51b5;\n}\n.socialChat [postbutton][disabled] {\n  background-color: #f0f3f3;\n}\n.socialChat .placeHolderImage {\n  color: #797979;\n  margin-right: 30px;\n}\n.socialChat .placeHolderImage .bottomIcon {\n  position: absolute;\n  margin-left: 5px;\n}\n.socialChat .desc {\n  font-size: 1.4rem;\n}\n.socialChat .topicCards #subject {\n  font-size: 1.8rem;\n  font-weight: bold;\n  color: #000000;\n}\n.socialChat .topicCards .topicsName {\n  display: table;\n  height: 40px;\n}\n.socialChat .topicCards .topicsName div {\n  display: table-cell;\n  vertical-align: middle;\n}\n.socialChat .topicCards .mat-card-image {\n  width: inherit;\n  height: inherit;\n  margin: 0;\n}\n.socialChat .comments .commentBtn {\n  position: absolute;\n  right: 0;\n  top: 2px;\n}\n.socialChat .comments .cBox {\n  padding-right: 80px;\n}\n.socialChat .comments .postCards {\n  font-size: 1.2rem;\n  background-color: #f5f5f5;\n}\n.socialChat .comments .postCards .layout {\n  width: 100% !important;\n  display: flex;\n}\n.socialChat .comments .postCards [mat-card-avatar] {\n  float: left;\n  margin-right: 10px;\n}\n.socialChat mat-card.mat-card {\n  margin-bottom: 7px;\n}\n.socialChat .TopicsForums .profile-icon {\n  display: table;\n}\n.socialChat .TopicsForums .profile-icon img {\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n  border-radius: 50px !important;\n}\n.socialChat .TopicsForums .profile-icon span {\n  font-size: 1.8rem;\n  display: table-cell;\n  vertical-align: middle;\n  font-weight: bold;\n  color: #8e8e8e;\n}\n.socialChat .TopicsForums .uploadImg .form-control {\n  display: none;\n}\n.socialChat .TopicsForums .postInput {\n  width: 100% !important;\n}\n.socialChat .TopicsForums .bottomNavigation {\n  position: relative;\n}\n.socialChat .TopicsForums .bottomNavigation .uploadImg {\n  position: absolute;\n  left: 20px;\n}\n.socialChat .cardId {\n  padding-right: 30px;\n}\n.socialChat .timezone, .socialChat .cardId {\n  font-size: 1.2rem;\n}\n.socialChat .cardId, .socialChat .timezone {\n  color: #5f5f5f;\n}\n@media only screen and (min-width: 401px) and (max-width: 960px) {\n  .imgResponsive {\n    width: 100% !important;\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC91c2VyL3NvY2lhbC1jaGF0L2NvbXBvbmVudHMvZm9ydW0vZm9ydW0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC91c2VyL3NvY2lhbC1jaGF0L2NvbXBvbmVudHMvZm9ydW0vZm9ydW0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBSUkseUJDK0NDO0FDdERUO0FGSVE7RUFDSSx5QkNpQ0Q7QUNuQ1g7QUZPSTtFQUNJLGNDNkVHO0VENUVILGtCQUFBO0FFTFI7QUZNUTtFQUNJLGtCQ1pQO0VEYU8sZ0JBQUE7QUVKWjtBRlFJO0VHeURGLGlCQUFBO0FEOURGO0FGU1E7RUdxRE4saUJBQUE7RUhuRFUsaUJBQUE7RUFDQSxjQ3FGSjtBQzVGUjtBRlVRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUVSWjtBRlNZO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBRVBoQjtBRldRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FFVFo7QUZlUTtFQUNJLGtCQzlDUDtFRCtDTyxRQUFBO0VBQ0EsUUFBQTtBRWJaO0FGZVE7RUFDSSxtQkFBQTtBRWJaO0FGZVE7RUdxQk4saUJBQUE7RUhuQlUseUJDNkNEO0FDMURYO0FGY1k7RUFDSSxzQkMrRlY7RUQ5RlUsYUFBQTtBRVpoQjtBRmNZO0VBQ0ksV0FBQTtFQUFZLGtCQUFBO0FFWDVCO0FGZUk7RUFDSSxrQkFBQTtBRWJSO0FGa0JRO0VBQ0ksY0FBQTtBRWhCWjtBRmlCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUl6RWYsOEJBQUE7QUY2REQ7QUZlWTtFR0xWLGlCQUFBO0VIT2MsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NlTDtBQzVCWDtBRmlCUTtFQUNJLGFBQUE7QUVmWjtBRmlCUTtFQUNJLHNCQzRETjtBQzNFTjtBRmlCUTtFQUNJLGtCQzlGUDtBQytFTDtBRmdCWTtFQUNJLGtCQ2pHWDtFRGtHVyxVQUFBO0FFZGhCO0FGbUJJO0VBQ0ksbUJBQUE7QUVqQlI7QUZtQkk7RUdoQ0YsaUJBQUE7QURnQkY7QUZtQkk7RUFDSSxjQ3JCRztBQ0lYO0FGc0JBO0VBQ0k7SUFDSSxzQkNtQ0Y7SURsQ0UsWUFBQTtFRW5CTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zb2NpYWwtY2hhdC9jb21wb25lbnRzL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG4uc29jaWFsQ2hhdHtcbiAgICBcbiAgICBbcG9zdGJ1dHRvbl0ge1xuICAgICAgICAmW2Rpc2FibGVkXSB7ICAgICAgIFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokZ3JleS0zMDA7ICAgICAgIFxuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokbS1ibHVlICAgIFxuICAgIH1cbiAgIFxuICAgIC5wbGFjZUhvbGRlckltYWdle1xuICAgICAgICBjb2xvcjokZ3JleS03NTA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgLmJvdHRvbUljb257XG4gICAgICAgICAgICBwb3NpdGlvbjogJGFicztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmRlc2N7XG4gICAgICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuICAgIH1cbiAgICAudG9waWNDYXJkc3tcbiAgICAgICAgI3N1YmplY3R7XG4gICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LWJhc2UpOyBcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb2xvcjokYmxhY2tcbiAgICAgICAgfSAgICAgIFxuICAgICAgIFxuICAgICAgICAudG9waWNzTmFtZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4OyAgICAgICAgICAgXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm1hdC1jYXJkLWltYWdlIHtcbiAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuXG4gICAgLmNvbW1lbnRze1xuICAgICAgICAuY29tbWVudEJ0bntcbiAgICAgICAgICAgIHBvc2l0aW9uOiAkYWJzO1xuICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgICAgIHRvcDoycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNCb3h7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wb3N0Q2FyZHN7ICAgICAgICAgICAgXG4gICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXRpbnkpOyBcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JGdyZXktMjUwO1xuICAgICAgICAgICAgLmxheW91dHtcbiAgICAgICAgICAgICAgICB3aWR0aDokZnVsbDsgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbbWF0LWNhcmQtYXZhdGFyXXtcbiAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0OyBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWF0LWNhcmQubWF0LWNhcmR7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDsgICAgICAgIFxuICAgIH1cblxuICAgIC5Ub3BpY3NGb3J1bXMge1xuICAgICAgXG4gICAgICAgIC5wcm9maWxlLWljb257XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDozMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDUwcHgpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1iYXNlKTsgXG4gICAgICAgICAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgY29sb3I6JGdyZXktMzUwOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnVwbG9hZEltZyAuZm9ybS1jb250cm9se1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucG9zdElucHV0e1xuICAgICAgICAgICAgd2lkdGg6JGZ1bGxcbiAgICAgICAgfVxuICAgICAgICAuYm90dG9tTmF2aWdhdGlvbntcbiAgICAgICAgICAgIHBvc2l0aW9uOiAkcmVsO1xuICAgICAgICAgICAgLnVwbG9hZEltZ3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJGFicztcbiAgICAgICAgICAgICAgICBsZWZ0OjIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICAgIFxuICAgXG4gICAgLmNhcmRJZHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDsgICAgICAgIFxuICAgIH1cbiAgICAudGltZXpvbmUsIC5jYXJkSWR7XG4gICAgICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtdGlueSk7ICAgICAgIFxuICAgIH1cbiAgICAuY2FyZElkLCAudGltZXpvbmV7XG4gICAgICAgIGNvbG9yOiRncmV5LTY1MFxuICAgIH0gICBcbiAgICBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDFweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgLmltZ1Jlc3BvbnNpdmUge1xuICAgICAgICB3aWR0aDogJGZ1bGw7XG4gICAgICAgIGhlaWdodDphdXRvXG4gICAgICB9XG59XG5cblxuICAiLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7IiwiLnNvY2lhbENoYXQgW3Bvc3RidXR0b25dIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cbi5zb2NpYWxDaGF0IFtwb3N0YnV0dG9uXVtkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YzO1xufVxuLnNvY2lhbENoYXQgLnBsYWNlSG9sZGVySW1hZ2Uge1xuICBjb2xvcjogIzc5Nzk3OTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLnNvY2lhbENoYXQgLnBsYWNlSG9sZGVySW1hZ2UgLmJvdHRvbUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc29jaWFsQ2hhdCAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLnNvY2lhbENoYXQgLnRvcGljQ2FyZHMgI3N1YmplY3Qge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnNvY2lhbENoYXQgLnRvcGljQ2FyZHMgLnRvcGljc05hbWUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLnNvY2lhbENoYXQgLnRvcGljQ2FyZHMgLnRvcGljc05hbWUgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5zb2NpYWxDaGF0IC50b3BpY0NhcmRzIC5tYXQtY2FyZC1pbWFnZSB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbn1cbi5zb2NpYWxDaGF0IC5jb21tZW50cyAuY29tbWVudEJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMnB4O1xufVxuLnNvY2lhbENoYXQgLmNvbW1lbnRzIC5jQm94IHtcbiAgcGFkZGluZy1yaWdodDogODBweDtcbn1cbi5zb2NpYWxDaGF0IC5jb21tZW50cyAucG9zdENhcmRzIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4uc29jaWFsQ2hhdCAuY29tbWVudHMgLnBvc3RDYXJkcyAubGF5b3V0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zb2NpYWxDaGF0IC5jb21tZW50cyAucG9zdENhcmRzIFttYXQtY2FyZC1hdmF0YXJdIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zb2NpYWxDaGF0IG1hdC1jYXJkLm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuLnNvY2lhbENoYXQgLlRvcGljc0ZvcnVtcyAucHJvZmlsZS1pY29uIHtcbiAgZGlzcGxheTogdGFibGU7XG59XG4uc29jaWFsQ2hhdCAuVG9waWNzRm9ydW1zIC5wcm9maWxlLWljb24gaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbn1cbi5zb2NpYWxDaGF0IC5Ub3BpY3NGb3J1bXMgLnByb2ZpbGUtaWNvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzhlOGU4ZTtcbn1cbi5zb2NpYWxDaGF0IC5Ub3BpY3NGb3J1bXMgLnVwbG9hZEltZyAuZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zb2NpYWxDaGF0IC5Ub3BpY3NGb3J1bXMgLnBvc3RJbnB1dCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uc29jaWFsQ2hhdCAuVG9waWNzRm9ydW1zIC5ib3R0b21OYXZpZ2F0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNvY2lhbENoYXQgLlRvcGljc0ZvcnVtcyAuYm90dG9tTmF2aWdhdGlvbiAudXBsb2FkSW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMHB4O1xufVxuLnNvY2lhbENoYXQgLmNhcmRJZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4uc29jaWFsQ2hhdCAudGltZXpvbmUsIC5zb2NpYWxDaGF0IC5jYXJkSWQge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5zb2NpYWxDaGF0IC5jYXJkSWQsIC5zb2NpYWxDaGF0IC50aW1lem9uZSB7XG4gIGNvbG9yOiAjNWY1ZjVmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmltZ1Jlc3BvbnNpdmUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/user/social-chat/components/forum/forum.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user/social-chat/components/forum/forum.component.ts ***!
  \**********************************************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_services_forum_topics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/forum-topics.service */ "./src/app/api/services/forum-topics.service.ts");
/* harmony import */ var _api_services_forum_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/forum-posts.service */ "./src/app/api/services/forum-posts.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");







let ForumComponent = class ForumComponent {
    constructor(router, route, ForumPostsService, ForumTopicsService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.ForumPostsService = ForumPostsService;
        this.ForumTopicsService = ForumTopicsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        this.user = {};
        this.getallTopics = [];
        const apartmentId = parseInt(this.cookieService.get('apartmentId'));
        //console.log(this.route.params['value'].id)
        this.ForumTopicsService.getAllForumTopicsByApartmentId(apartmentId).subscribe((res) => {
            if (res) {
                this.loaded = true;
                this.getallTopics = res.reverse();
                this.user.name = res[0].insertPersonName;
            }
        });
    }
    uploadImage(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.user.postImg = reader.result;
            };
        }
    }
    openComments(event) {
        event.hide = !event.hide;
        if (!event.hasOwnProperty('postArr')) {
            event.postArr = [];
        }
        if (event.hide) {
            this.ForumPostsService.getAllForumPostsByTopicsId(event.id).subscribe((res) => {
                event.postArr = res;
            }, error => {
                console.log(error);
            });
        }
    }
    addPost(event) {
        let topicsPost = {
            "description": event.postDescription,
            "likes": 0,
            "forumTopicsId": event.id,
            "img": "string",
            "active": true,
            "insertedBy": 0,
            "updatedBy": 0,
        };
        event.totalComments++;
        event.postArr.push(topicsPost);
        event.postDescription = "";
        this.ForumPostsService.addForumPosts(topicsPost).subscribe((res) => {
        }, error => {
            console.log(error);
        });
    }
    likesUpdate(event) {
        event.likeBtn = 0;
        event.toggle = true ? 'Disable' : undefined;
        //event.status = event.toggle ? 'Disable' : 'Disable';
        this.ForumTopicsService.addLike(event.id).subscribe((res) => {
            event.likes++;
        }, error => {
            console.log(error);
        });
    }
    userPost() {
        let postDetails = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "subject": this.user.subject,
            "description": this.user.description,
            "likes": 0,
            "img": this.user.postImg,
            "categoryId": 1,
            "active": true,
            "insertedBy": 1,
            "updatedBy": 0
        };
        this.getallTopics.unshift(postDetails);
        this.panelOpenState = false;
        this.user = {};
        this.ForumTopicsService.addForumTopics(postDetails).subscribe((res) => {
            this.sharedService.setAlertMessage("Posted successfully");
        }, error => {
            console.log(error);
        });
    }
};
ForumComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_forum_posts_service__WEBPACK_IMPORTED_MODULE_4__["ForumPostsService"] },
    { type: _api_services_forum_topics_service__WEBPACK_IMPORTED_MODULE_3__["ForumTopicsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
ForumComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forum',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/social-chat/components/forum/forum.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forum.component.scss */ "./src/app/user/social-chat/components/forum/forum.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_forum_posts_service__WEBPACK_IMPORTED_MODULE_4__["ForumPostsService"],
        _api_services_forum_topics_service__WEBPACK_IMPORTED_MODULE_3__["ForumTopicsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], ForumComponent);



/***/ }),

/***/ "./src/app/user/social-chat/social-chat-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/user/social-chat/social-chat-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: SocialChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialChatRoutingModule", function() { return SocialChatRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _social_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-chat.component */ "./src/app/user/social-chat/social-chat.component.ts");
/* harmony import */ var _components_forum_category_forum_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/forum-category/forum-category.component */ "./src/app/user/social-chat/components/forum-category/forum-category.component.ts");
/* harmony import */ var _components_forum_forum_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/forum/forum.component */ "./src/app/user/social-chat/components/forum/forum.component.ts");






const routes = [
    { path: '', component: _social_chat_component__WEBPACK_IMPORTED_MODULE_3__["SocialChatComponent"],
        children: [
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
            { path: 'categories', component: _components_forum_category_forum_category_component__WEBPACK_IMPORTED_MODULE_4__["ForumCategoryComponent"] },
            { path: 'forum/:id', component: _components_forum_forum_component__WEBPACK_IMPORTED_MODULE_5__["ForumComponent"] },
            { path: '**', redirectTo: 'categories', pathMatch: 'full' }
        ]
    }
];
let SocialChatRoutingModule = class SocialChatRoutingModule {
};
SocialChatRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SocialChatRoutingModule);



/***/ }),

/***/ "./src/app/user/social-chat/social-chat.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/user/social-chat/social-chat.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc29jaWFsLWNoYXQvc29jaWFsLWNoYXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/social-chat/social-chat.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/social-chat/social-chat.component.ts ***!
  \***********************************************************/
/*! exports provided: SocialChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialChatComponent", function() { return SocialChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SocialChatComponent = class SocialChatComponent {
    constructor() { }
    ngOnInit() {
    }
};
SocialChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-social-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./social-chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/social-chat/social-chat.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./social-chat.component.scss */ "./src/app/user/social-chat/social-chat.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SocialChatComponent);



/***/ }),

/***/ "./src/app/user/social-chat/social-chat.module.ts":
/*!********************************************************!*\
  !*** ./src/app/user/social-chat/social-chat.module.ts ***!
  \********************************************************/
/*! exports provided: SocialChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialChatModule", function() { return SocialChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _social_chat_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-chat-routing.module */ "./src/app/user/social-chat/social-chat-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _social_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./social-chat.component */ "./src/app/user/social-chat/social-chat.component.ts");
/* harmony import */ var _components_forum_category_forum_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/forum-category/forum-category.component */ "./src/app/user/social-chat/components/forum-category/forum-category.component.ts");
/* harmony import */ var _components_forum_forum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/forum/forum.component */ "./src/app/user/social-chat/components/forum/forum.component.ts");








let SocialChatModule = class SocialChatModule {
};
SocialChatModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _social_chat_component__WEBPACK_IMPORTED_MODULE_5__["SocialChatComponent"],
            _components_forum_category_forum_category_component__WEBPACK_IMPORTED_MODULE_6__["ForumCategoryComponent"],
            _components_forum_forum_component__WEBPACK_IMPORTED_MODULE_7__["ForumComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _social_chat_routing_module__WEBPACK_IMPORTED_MODULE_3__["SocialChatRoutingModule"]
        ]
    })
], SocialChatModule);



/***/ })

}]);
//# sourceMappingURL=social-chat-social-chat-module-es2015.js.map