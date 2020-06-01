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
/* harmony default export */ __webpack_exports__["default"] = (".category .e-card {\n  margin: 0px 0 20px 0;\n}\n.category .e-card .card-body {\n  padding: 25px 20px;\n}\n.category .e-card .card-body .icon {\n  margin: -9px 20px 0 0;\n}\n.category .e-card .card-body .icon img {\n  width: 36px;\n}\n.category .e-card .card-body h4 {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC91c2VyL3NvY2lhbC1jaGF0L2NvbXBvbmVudHMvZm9ydW0tY2F0ZWdvcnkvZm9ydW0tY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvc29jaWFsLWNoYXQvY29tcG9uZW50cy9mb3J1bS1jYXRlZ29yeS9mb3J1bS1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNGLG9CQUFBO0FDSkY7QURLRTtFQUNDLGtCQUFBO0FDSEg7QURJRztFQUNDLHFCQUFBO0FDRko7QURHSTtFQUNDLFdBQUE7QUNETDtBRElHO0VFK0RELGVBQUE7QURoRUYiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NvY2lhbC1jaGF0L2NvbXBvbmVudHMvZm9ydW0tY2F0ZWdvcnkvZm9ydW0tY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmNhdGVnb3J5e1xuICAgIC5lLWNhcmQge1xuXHRcdG1hcmdpbjogMHB4IDAgMjBweCAwO1xuXHRcdC5jYXJkLWJvZHkge1xuXHRcdFx0cGFkZGluZzogMjVweCAyMHB4O1xuXHRcdFx0Lmljb24ge1xuXHRcdFx0XHRtYXJnaW46IC05cHggMjBweCAwIDA7XG5cdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDM2cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGg0IHtcblx0ICAgIFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW1lZGl1bSk7XG5cdFx0XHR9XG5cdFx0fVx0XG5cdH0gICBcbiAgICBcbn1cbiIsIi5jYXRlZ29yeSAuZS1jYXJkIHtcbiAgbWFyZ2luOiAwcHggMCAyMHB4IDA7XG59XG4uY2F0ZWdvcnkgLmUtY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMjVweCAyMHB4O1xufVxuLmNhdGVnb3J5IC5lLWNhcmQgLmNhcmQtYm9keSAuaWNvbiB7XG4gIG1hcmdpbjogLTlweCAyMHB4IDAgMDtcbn1cbi5jYXRlZ29yeSAuZS1jYXJkIC5jYXJkLWJvZHkgLmljb24gaW1nIHtcbiAgd2lkdGg6IDM2cHg7XG59XG4uY2F0ZWdvcnkgLmUtY2FyZCAuY2FyZC1ib2R5IGg0IHtcbiAgZm9udC1zaXplOiAycmVtO1xufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIl19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".socialChat [postbutton] {\n  background-color: #3f51b5;\n}\n.socialChat [postbutton][disabled] {\n  background-color: #f0f3f3;\n}\n.socialChat .placeHolderImage {\n  color: #797979;\n  margin-right: 30px;\n}\n.socialChat .placeHolderImage .bottomIcon {\n  position: absolute;\n  margin-left: 5px;\n}\n.socialChat .desc {\n  font-size: 1.4rem;\n}\n.socialChat .topicCards #subject {\n  font-size: 1.8rem;\n  font-weight: bold;\n  color: #000000;\n}\n.socialChat .topicCards .topicsName {\n  display: table;\n  height: 40px;\n}\n.socialChat .topicCards .topicsName div {\n  display: table-cell;\n  vertical-align: middle;\n}\n.socialChat .topicCards .mat-card-image {\n  width: inherit;\n  height: inherit;\n  margin: 0;\n}\n.socialChat .comments .commentBtn {\n  position: absolute;\n  right: 0;\n  top: 2px;\n}\n.socialChat .comments .cBox {\n  padding-right: 80px;\n}\n.socialChat .comments .postCards {\n  font-size: 1.2rem;\n  background-color: #f5f5f5;\n}\n.socialChat .comments .postCards .layout {\n  width: 100% !important;\n  display: flex;\n}\n.socialChat .comments .postCards [mat-card-avatar] {\n  float: left;\n  margin-right: 10px;\n}\n.socialChat mat-card.mat-card {\n  margin-bottom: 7px;\n}\n.socialChat .TopicsForums .profile-icon {\n  display: table;\n}\n.socialChat .TopicsForums .profile-icon img {\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n  border-radius: 50px !important;\n}\n.socialChat .TopicsForums .profile-icon span {\n  font-size: 1.8rem;\n  display: table-cell;\n  vertical-align: middle;\n  font-weight: bold;\n  color: #8e8e8e;\n}\n.socialChat .TopicsForums .uploadImg .form-control {\n  display: none;\n}\n.socialChat .TopicsForums .postInput {\n  width: 100% !important;\n}\n.socialChat .TopicsForums .bottomNavigation {\n  position: relative;\n}\n.socialChat .TopicsForums .bottomNavigation .uploadImg {\n  position: absolute;\n  left: 20px;\n}\n.socialChat .cardId {\n  padding-right: 30px;\n}\n.socialChat .timezone, .socialChat .cardId {\n  font-size: 1.2rem;\n}\n.socialChat .cardId, .socialChat .timezone {\n  color: #5f5f5f;\n}\n@media only screen and (min-width: 401px) and (max-width: 960px) {\n  .imgResponsive {\n    width: 100% !important;\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC91c2VyL3NvY2lhbC1jaGF0L2NvbXBvbmVudHMvZm9ydW0vZm9ydW0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC91c2VyL3NvY2lhbC1jaGF0L2NvbXBvbmVudHMvZm9ydW0vZm9ydW0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBSUkseUJDb0RDO0FDM0RUO0FGSVE7RUFDSSx5QkNxQ0Q7QUN2Q1g7QUZPSTtFQUNJLGNDbUZHO0VEbEZILGtCQUFBO0FFTFI7QUZNUTtFQUNJLGtCQ1pQO0VEYU8sZ0JBQUE7QUVKWjtBRlFJO0VHeURGLGlCQUFBO0FEOURGO0FGU1E7RUdxRE4saUJBQUE7RUhuRFUsaUJBQUE7RUFDQSxjQzJGSjtBQ2xHUjtBRlVRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUVSWjtBRlNZO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBRVBoQjtBRldRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FFVFo7QUZlUTtFQUNJLGtCQzlDUDtFRCtDTyxRQUFBO0VBQ0EsUUFBQTtBRWJaO0FGZVE7RUFDSSxtQkFBQTtBRWJaO0FGZVE7RUdxQk4saUJBQUE7RUhuQlUseUJDbUREO0FDaEVYO0FGY1k7RUFDSSxzQkNzR1Y7RURyR1UsYUFBQTtBRVpoQjtBRmNZO0VBQ0ksV0FBQTtFQUFZLGtCQUFBO0FFWDVCO0FGZUk7RUFDSSxrQkFBQTtBRWJSO0FGa0JRO0VBQ0ksY0FBQTtBRWhCWjtBRmlCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUl6RWYsOEJBQUE7QUY2REQ7QUZlWTtFR0xWLGlCQUFBO0VIT2MsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NxQkw7QUNsQ1g7QUZpQlE7RUFDSSxhQUFBO0FFZlo7QUZpQlE7RUFDSSxzQkNtRU47QUNsRk47QUZpQlE7RUFDSSxrQkM5RlA7QUMrRUw7QUZnQlk7RUFDSSxrQkNqR1g7RURrR1csVUFBQTtBRWRoQjtBRm1CSTtFQUNJLG1CQUFBO0FFakJSO0FGbUJJO0VHaENGLGlCQUFBO0FEZ0JGO0FGbUJJO0VBQ0ksY0NmRztBQ0ZYO0FGc0JBO0VBQ0k7SUFDSSxzQkMwQ0Y7SUR6Q0UsWUFBQTtFRW5CTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zb2NpYWwtY2hhdC9jb21wb25lbnRzL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG4uc29jaWFsQ2hhdHtcbiAgICBcbiAgICBbcG9zdGJ1dHRvbl0ge1xuICAgICAgICAmW2Rpc2FibGVkXSB7ICAgICAgIFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokZ3JleS0zMDA7ICAgICAgIFxuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokbS1ibHVlICAgIFxuICAgIH1cbiAgIFxuICAgIC5wbGFjZUhvbGRlckltYWdle1xuICAgICAgICBjb2xvcjokZ3JleS03NTA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgLmJvdHRvbUljb257XG4gICAgICAgICAgICBwb3NpdGlvbjogJGFicztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmRlc2N7XG4gICAgICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuICAgIH1cbiAgICAudG9waWNDYXJkc3tcbiAgICAgICAgI3N1YmplY3R7XG4gICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LWJhc2UpOyBcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb2xvcjokYmxhY2tcbiAgICAgICAgfSAgICAgIFxuICAgICAgIFxuICAgICAgICAudG9waWNzTmFtZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4OyAgICAgICAgICAgXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm1hdC1jYXJkLWltYWdlIHtcbiAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuXG4gICAgLmNvbW1lbnRze1xuICAgICAgICAuY29tbWVudEJ0bntcbiAgICAgICAgICAgIHBvc2l0aW9uOiAkYWJzO1xuICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgICAgIHRvcDoycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNCb3h7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wb3N0Q2FyZHN7ICAgICAgICAgICAgXG4gICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXRpbnkpOyBcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JGdyZXktMjUwO1xuICAgICAgICAgICAgLmxheW91dHtcbiAgICAgICAgICAgICAgICB3aWR0aDokZnVsbDsgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbbWF0LWNhcmQtYXZhdGFyXXtcbiAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0OyBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWF0LWNhcmQubWF0LWNhcmR7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDsgICAgICAgIFxuICAgIH1cblxuICAgIC5Ub3BpY3NGb3J1bXMge1xuICAgICAgXG4gICAgICAgIC5wcm9maWxlLWljb257XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDozMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDUwcHgpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1iYXNlKTsgXG4gICAgICAgICAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgY29sb3I6JGdyZXktMzUwOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnVwbG9hZEltZyAuZm9ybS1jb250cm9se1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucG9zdElucHV0e1xuICAgICAgICAgICAgd2lkdGg6JGZ1bGxcbiAgICAgICAgfVxuICAgICAgICAuYm90dG9tTmF2aWdhdGlvbntcbiAgICAgICAgICAgIHBvc2l0aW9uOiAkcmVsO1xuICAgICAgICAgICAgLnVwbG9hZEltZ3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJGFicztcbiAgICAgICAgICAgICAgICBsZWZ0OjIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICAgIFxuICAgXG4gICAgLmNhcmRJZHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDsgICAgICAgIFxuICAgIH1cbiAgICAudGltZXpvbmUsIC5jYXJkSWR7XG4gICAgICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtdGlueSk7ICAgICAgIFxuICAgIH1cbiAgICAuY2FyZElkLCAudGltZXpvbmV7XG4gICAgICAgIGNvbG9yOiRncmV5LTY1MFxuICAgIH0gICBcbiAgICBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDFweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgLmltZ1Jlc3BvbnNpdmUge1xuICAgICAgICB3aWR0aDogJGZ1bGw7XG4gICAgICAgIGhlaWdodDphdXRvXG4gICAgICB9XG59XG5cblxuICAiLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIiwiLnNvY2lhbENoYXQgW3Bvc3RidXR0b25dIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cbi5zb2NpYWxDaGF0IFtwb3N0YnV0dG9uXVtkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmM2YzO1xufVxuLnNvY2lhbENoYXQgLnBsYWNlSG9sZGVySW1hZ2Uge1xuICBjb2xvcjogIzc5Nzk3OTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLnNvY2lhbENoYXQgLnBsYWNlSG9sZGVySW1hZ2UgLmJvdHRvbUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc29jaWFsQ2hhdCAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLnNvY2lhbENoYXQgLnRvcGljQ2FyZHMgI3N1YmplY3Qge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnNvY2lhbENoYXQgLnRvcGljQ2FyZHMgLnRvcGljc05hbWUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLnNvY2lhbENoYXQgLnRvcGljQ2FyZHMgLnRvcGljc05hbWUgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5zb2NpYWxDaGF0IC50b3BpY0NhcmRzIC5tYXQtY2FyZC1pbWFnZSB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbn1cbi5zb2NpYWxDaGF0IC5jb21tZW50cyAuY29tbWVudEJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMnB4O1xufVxuLnNvY2lhbENoYXQgLmNvbW1lbnRzIC5jQm94IHtcbiAgcGFkZGluZy1yaWdodDogODBweDtcbn1cbi5zb2NpYWxDaGF0IC5jb21tZW50cyAucG9zdENhcmRzIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4uc29jaWFsQ2hhdCAuY29tbWVudHMgLnBvc3RDYXJkcyAubGF5b3V0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zb2NpYWxDaGF0IC5jb21tZW50cyAucG9zdENhcmRzIFttYXQtY2FyZC1hdmF0YXJdIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zb2NpYWxDaGF0IG1hdC1jYXJkLm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuLnNvY2lhbENoYXQgLlRvcGljc0ZvcnVtcyAucHJvZmlsZS1pY29uIHtcbiAgZGlzcGxheTogdGFibGU7XG59XG4uc29jaWFsQ2hhdCAuVG9waWNzRm9ydW1zIC5wcm9maWxlLWljb24gaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbn1cbi5zb2NpYWxDaGF0IC5Ub3BpY3NGb3J1bXMgLnByb2ZpbGUtaWNvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzhlOGU4ZTtcbn1cbi5zb2NpYWxDaGF0IC5Ub3BpY3NGb3J1bXMgLnVwbG9hZEltZyAuZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zb2NpYWxDaGF0IC5Ub3BpY3NGb3J1bXMgLnBvc3RJbnB1dCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uc29jaWFsQ2hhdCAuVG9waWNzRm9ydW1zIC5ib3R0b21OYXZpZ2F0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNvY2lhbENoYXQgLlRvcGljc0ZvcnVtcyAuYm90dG9tTmF2aWdhdGlvbiAudXBsb2FkSW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMHB4O1xufVxuLnNvY2lhbENoYXQgLmNhcmRJZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4uc29jaWFsQ2hhdCAudGltZXpvbmUsIC5zb2NpYWxDaGF0IC5jYXJkSWQge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5zb2NpYWxDaGF0IC5jYXJkSWQsIC5zb2NpYWxDaGF0IC50aW1lem9uZSB7XG4gIGNvbG9yOiAjNWY1ZjVmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmltZ1Jlc3BvbnNpdmUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBkZXNlbGVjdCAoKSB7XG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcblx0LWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQtby11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIGNvbG9yOiAkdGM7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHIpO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICAvLyBEaXJlY3Rpb24gaGFzIGJlZW4gb21pdHRlZCBhbmQgaGFwcGVucyB0byBiZSBhIGNvbG9yLXN0b3BcbiAgQGlmIGlzLWRpcmVjdGlvbigkZGlyZWN0aW9uKSA9PSBmYWxzZSB7XG4gICAgJGNvbG9yLXN0b3BzOiAkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHM7XG4gICAgJGRpcmVjdGlvbjogMTgwZGVnO1xuICB9XG5cbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIl19 */");

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
/* harmony import */ var src_app_api_controllers_ForumTopics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/ForumTopics */ "./src/app/api/controllers/ForumTopics.ts");
/* harmony import */ var src_app_api_controllers_ForumPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/ForumPosts */ "./src/app/api/controllers/ForumPosts.ts");
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
        let params = {
            id: apartmentId
        };
        this.ForumTopicsService.getAllForumTopicsByApartmentId(params).subscribe((res) => {
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
        let params = {
            forumPosts: topicsPost
        };
        this.ForumPostsService.addForumPosts(params).subscribe((res) => {
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
        let params = {
            forumTopics: postDetails
        };
        this.ForumTopicsService.addForumTopics(params).subscribe((res) => {
            this.sharedService.setAlertMessage("Posted successfully");
        }, error => {
            console.log(error);
        });
    }
};
ForumComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_ForumPosts__WEBPACK_IMPORTED_MODULE_4__["ForumPostsService"] },
    { type: src_app_api_controllers_ForumTopics__WEBPACK_IMPORTED_MODULE_3__["ForumTopicsService"] },
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
        src_app_api_controllers_ForumPosts__WEBPACK_IMPORTED_MODULE_4__["ForumPostsService"],
        src_app_api_controllers_ForumTopics__WEBPACK_IMPORTED_MODULE_3__["ForumTopicsService"],
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