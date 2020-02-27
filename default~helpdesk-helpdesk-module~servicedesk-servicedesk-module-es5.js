function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~helpdesk-helpdesk-module~servicedesk-servicedesk-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-all-tickets/helpdesk-all-tickets.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-all-tickets/helpdesk-all-tickets.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsHelpdeskComponentsHelpdeskAllTicketsHelpdeskAllTicketsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"helpdesk-all-tickets-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isTicketDataLoaded\"></app-loader>\n\n\t<ul class=\"legends list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span><span>High</span></li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots medium\"></span>Medium</li>\n\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots low\"></span>Low</li>\n\t</ul>\n\t\n\n\t<div class=\"card clear card-table\" *ngIf=\"isTicketDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Tickets <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"ticketData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn trans-white mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/helpdesk/add-ticket\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add Ticket</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('ticketId')\">Ticket ID <span [ngClass]=\"getFieldOrderBy('ticketId')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('status')\">Status <span [ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('type')\">Type <span [ngClass]=\"getFieldOrderBy('type')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('category')\" *ngIf=\"!isAdmin()\">Category <span [ngClass]=\"getFieldOrderBy('category')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('subject')\">Subject <span [ngClass]=\"getFieldOrderBy('subject')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('assignto')\" *ngIf=\"isAdmin()\">Assigned to <span [ngClass]=\"getFieldOrderBy('assignto')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('requested')\" *ngIf=\"isAdmin()\">Requested By <span [ngClass]=\"getFieldOrderBy('requested')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Actions</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let ticket of ticketListData | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: ticketData ; let i = index\">\n\t\t\t\t      <td>{{ticket.ticketId}}</td>\n\t\t\t\t      <td><span class=\"badge small min text-capitalize\" [ngClass]=\"getTicketStatus(ticket.ticketStatusId)\">{{getTicketStatus(ticket.ticketStatusId)}}</span></td>\n\t\t\t\t      <td class=\"grey\">{{getTicketType(ticket.ticketTypeId)}}</td>\n\t\t\t\t      <td class=\"grey\" *ngIf=\"!isAdmin()\">{{getTicketCategory(ticket.ticketCategoryId)}}</td>\n\t\t\t\t      <td>{{ticket.title}}</td>\n\t\t\t\t      <td class=\"grey\" *ngIf=\"isAdmin()\">{{getTicketAssigned(ticket.assignedTo)}}</td>\n\t\t\t\t      <td class=\"grey\" *ngIf=\"isAdmin()\">{{getTicketRequested(ticket.raisedBy)}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \trouterLink=\"/ams/helpdesk/edit-ticket/{{ticket.ticketId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"  class=\"mr-2\" (click)=\"showConfirmModal(i)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"no-link\">\n\t\t\t\t\t\t\t<span class=\"dots rt-3\" [ngClass]=\"getTicketPriority(ticket.ticketPriorityId)\"></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-update-ticket/add-ticket/add-ticket.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-update-ticket/add-ticket/add-ticket.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsHelpdeskComponentsHelpdeskUpdateTicketAddTicketAddTicketComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"helpdesk-add-ticket-wrapper\">\n\t\n\t<div class=\"card mb-30\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditTicket\">Add Ticket</span>\n    \t\t\t\t<span *ngIf=\"isEditTicket\">Edit Ticket</span>\n    \t\t\t</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\" *ngIf=\"!isArrayOne()\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/helpdesk/all-tickets\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n    \t\t<div class=\"float-right\" *ngIf=\"isArrayOne() && !isEditTicket\" (click)=\"deleteTicket()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t\n\t\t<form #addTicketForm = \"ngForm\" name=\"addTicketForm\" (ngSubmit)=\"submitTicketForm(addTicketForm)\"  novalidate>\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-alert-message [message]=\"alertTicketMessage\" [isError]=\"isTicketError\" [isSuccess]=\"isTicketSuccess\"></app-alert-message>\n\n\t\t\t\t<app-loader *ngIf=\"isTicketSubmitted\"></app-loader>\n\n\t\t\t\t<ng-container *ngIf=\"!isTicketSubmitted\">\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isEditTicket && isAdmin()\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t                    <label>Status*</label>\n\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t        name=\"ticketStatus\" \n\t\t\t\t\t\t\t\t        id=\"ticketStatus\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"ticket.ticketStatusId\" required>\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of statusTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t                    <label>Type*</label>\n\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t        name=\"ticketCategory\" \n\t\t\t\t\t\t\t\t        id=\"ticketCategory\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"ticket.ticketTypeId\" \n\t\t\t\t\t\t\t\t        (ngModelChange)=\"getTicketType(ticket.ticketTypeId)\" required>\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of ticketTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isCategoryEnabled()\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t                    <label>Category*</label>\n\t\t\t\t                   <select \n\t\t\t\t\t\t\t\t        name=\"ticketType\" \n\t\t\t\t\t\t\t\t        id=\"ticketType\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"ticket.ticketCategoryId\" required>\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of ticketCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Subject*</label>\n\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"ticketSubject\" [(ngModel)]=\"ticket.title\" required>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box select-box\">\n\t\t\t\t\t\t\t\t\t<label>Priorty*</label>\n\t\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\t        name=\"priortyType\" \n\t\t\t\t\t\t\t\t        id=\"priortyType\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"ticket.ticketPriorityId\" required>\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of priortyTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box select-box\">\n\t\t\t\t\t\t\t\t\t<label>Requested By*</label>\n\t\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\t        name=\"raisedBy\" \n\t\t\t\t\t\t\t\t        id=\"raisedBy\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"ticket.raisedBy\" required>\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of raisedByData\" [value]=\"item.userId\">{{ item.firstName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isAdmin() && isEditTicket\">\n\t\t\t\t\t\t\t\t<div class=\"input-box select-box\">\n\t\t\t\t\t\t\t\t\t<label>Assigned To*</label>\n\t\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\t        name=\"raisedBy\" \n\t\t\t\t\t\t\t\t        id=\"raisedBy\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"ticket.assignedTo\" required>\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of assignedToData\" [value]=\"item.userId\">{{ item.firstName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4 d-none\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Due Date*</label>\n\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Pick date\" name=\"ticketDueDate\" [(ngModel)]=\"ticketDueDate\" matInput [matDatepicker]=\"picker\"  (click)=\"picker.open()\">\n\t  \t\t\t\t\t\t\t\t<mat-datepicker #picker></mat-datepicker>\n\t  \t\t\t\t\t\t\t\t<div class=\"date-btn\" mat-raised-button (click)=\"picker.open()\">\n\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t  \t\t\t\t\t\t\t\t</div>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Description*</label>\n\t\t\t\t                    <textarea placeholder=\"Enter value\" name=\"ticketDescription\" [(ngModel)]=\"ticket.description\" required></textarea>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label class=\"btn sf lime-green\" for=\"my-file-selector\" (click)=\"uploader.click()\">\n\t\t\t\t\t\t\t\t    <input class=\"form-control\"  #uploader type=\"file\"\n\t\t\t\t\t\t\t\t    (change)=\"uploadFile($event)\" multiple>\n\t\t\t\t\t\t\t\t    <i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Add Document</label>\n\t\t\t\t\t\t\t\t\t<div class=\"file-desp\" *ngIf=\"isFileAdded\">\n\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let item of listOfFiles; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"name mr-3\">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"size\">{{bytesToSize(item.size)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"deleteFile(i)\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t                \t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addTicketForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t</ng-container>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t</form>\n\n\t</div>\n\n\t<div class=\"card mb-20\" *ngIf=\"isTicketAdded\">\n\n\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t<form #addCommentForm = \"ngForm\" name=\"addCommentForm\" (ngSubmit)=\"submitCommentForm(addCommentForm)\"  novalidate>\n\n\t\t\t\t<app-alert-message [message]=\"alertCommentMessage\" [isError]=\"isCommentError\" [isSuccess]=\"isCommentSuccess\"></app-alert-message>\n\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Add Comment</label>\n\t\t                    <textarea placeholder=\"some text here\" name=\"ticketComment\" [(ngModel)]=\"ticketComment\" required></textarea>\n\t\t                </div>\n\n\t\t                <button class=\"btn blue float-right\" [disabled]=\"addCommentForm.invalid\">Submit</button>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t</div>\n\n\t<app-loader *ngIf=\"!isTicketCommentLoaded\"></app-loader>\n\n\t<ng-container *ngFor=\"let comment of ticketCommentsData; let i = index\">\n\n\n\t\t\t<div class=\"card mt-3 comments\" *ngIf=\"isTicketCommentLoaded\">\n\t\t\t\t\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t  <div class=\"icon mr-3\"><img src=\"assets/images/user-icon.svg\" width=\"28\" /></div>\n\t\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t\t    <div>\n\t\t\t\t\t\t    \t<h5 class=\"mt-0\">{{comment.userName}}</h5>\n\t\t\t\t\t\t    \t<span class=\"ml-3 date\">{{getCommentDate(comment.insertedOn)}}</span>\n\t\t\t\t\t\t    \t<div class=\"float-right menus\">\n\t\t\t\t\t\t    \t\t<span (click)=\"deleteTicketComment(comment.ticketCommentId, i)\" *ngIf=\"isLoggedUser(comment.userId)\"><i-feather class=\"icon del\" name=\"x\"></i-feather></span>\n\t\t\t\t\t\t    \t</div>\n\t\t\t\t\t\t    </div>\n\n\t\t\t\t\t\t    <p class=\"role\">{{comment.roleName}}</p>\n\t\t\t\t\t\t    <p class=\"desp\">{{comment.comments}}</p>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</li>\n\n\t\t\t\t</div>\t\t\n\n\t\t\t</div>\n\n\t</ng-container>\n\n\t<div class=\"card\">\n\t\t\n\t\t<div class=\"card-body comments\" *ngIf=\"isNoComments() && isEditTicket\">\n\t\t\t\n\t\t\t<li class=\"list-group-item no-comments no-border\">\n\t\t\t\t\t\t\n\t\t\t\t<div class=\"media\">\n\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t    <h5>No Comments Available</h5>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\n\t\t\t</li>\n\n\t</div>\t\t\t\n\n\t</div>\t\n\n</div>";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-all-tickets/helpdesk-all-tickets.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-all-tickets/helpdesk-all-tickets.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskAllTicketsHelpdeskAllTicketsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLWFsbC10aWNrZXRzL2hlbHBkZXNrLWFsbC10aWNrZXRzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-all-tickets/helpdesk-all-tickets.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-all-tickets/helpdesk-all-tickets.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: HelpdeskAllTicketsComponent */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskAllTicketsHelpdeskAllTicketsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpdeskAllTicketsComponent", function () {
      return HelpdeskAllTicketsComponent;
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


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/ticket.service */
    "./src/app/api/services/ticket.service.ts");
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
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/underscore.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);

    var HelpdeskAllTicketsComponent =
    /*#__PURE__*/
    function () {
      function HelpdeskAllTicketsComponent(injector, userService, ticketService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, HelpdeskAllTicketsComponent);

        this.injector = injector;
        this.userService = userService;
        this.ticketService = ticketService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.ticketData = "";
        this.isTicketDataLoaded = false;
        this.slotFieldType = "unitno";
        this.slotData = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.ticketStatusData = {};
        this.ticketTypeData = {};
        this.ticketPrivateCategoryData = {};
        this.ticketCommonCategoryData = {};
        this.ticketAssignedToData = {};
        this.ticketPriorityData = {};
        this.ticketType = "";
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
      }

      _createClass(HelpdeskAllTicketsComponent, [{
        key: "getTicketStatus",
        value: function getTicketStatus(statusId) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.ticketStatusData, function (item) {
            if (item.lookupValueId === statusId) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName.toLowerCase();
          }
        }
      }, {
        key: "getTicketCategory",
        value: function getTicketCategory(categoryId) {
          if (this.ticketType == "16") {
            var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.ticketPrivateCategoryData, function (item) {
              if (item.lookupValueId === categoryId) return item;
            });

            if (data === undefined || data.length == 0) {
              return '';
            } else {
              return data[0].lookupValueName;
            }
          } else {
            var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.ticketCommonCategoryData, function (item) {
              if (item.lookupValueId === categoryId) return item;
            });

            if (data === undefined || data.length == 0) {
              return '';
            } else {
              return data[0].lookupValueName;
            }
          }
        }
      }, {
        key: "getTicketType",
        value: function getTicketType(typeId) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.ticketTypeData, function (item) {
            if (item.lookupValueId === typeId) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.ticketType = data[0].lookupValueName;
            return data[0].lookupValueName;
          }
        }
      }, {
        key: "getTicketAssigned",
        value: function getTicketAssigned(assignedId) {
          return assignedId;
        }
      }, {
        key: "getTicketRequested",
        value: function getTicketRequested(raisedBy) {
          return raisedBy;
        }
      }, {
        key: "getTicketPriority",
        value: function getTicketPriority(priorityId) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.ticketPriorityData, function (item) {
            if (item.lookupValueId === priorityId) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName.toLowerCase();
          }
        }
      }, {
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.slotFieldType = type;
          this.slotData = !this.slotData;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.slotFieldType == type) {
            return this.slotData ? 'desc' : 'asc';
          } else return '';
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(index) {
          this.modalService.showConfirmModal(index);
        }
      }, {
        key: "isItemsAvailable",
        value: function isItemsAvailable() {
          return this.totalItems > 0 ? true : false;
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.cookieService.get('userRole') == 'Admin' || this.cookieService.get('userRole') == 'Staff' ? true : false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.cookieService.get('userRole') == 'Admin' || this.cookieService.get('userRole') == 'Staff') {
            this.ticketService.getAllTicketsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
              var ticketListData = res; //filter active true items

              _this.ticketListData = ticketListData.filter(function (data) {
                return data.isActive;
              });
              console.log(_this.ticketListData);
              _this.totalItems = _this.ticketListData.length;

              if (_this.totalItems > _this.itemLimit) {
                _this.ItemEndIndex = _this.itemLimit;
              } else {
                _this.ItemEndIndex = _this.totalItems;
              }

              _this.isTicketDataLoaded = true;
            }, function (error) {});
          }

          if (this.cookieService.get('userRole') == 'Tenant' || this.cookieService.get('userRole') == 'Owner') {
            this.ticketService.getTicketsByRaisedUserId(parseInt(this.cookieService.get('userId'))).subscribe(function (res) {
              var ticketListData = res; //filter active true items

              _this.ticketListData = ticketListData.filter(function (data) {
                return data.isActive;
              });
              console.log(_this.ticketListData);
              _this.totalItems = _this.ticketListData.length;

              if (_this.totalItems > _this.itemLimit) {
                _this.ItemEndIndex = _this.itemLimit;
              } else {
                _this.ItemEndIndex = _this.totalItems;
              }

              _this.isTicketDataLoaded = true;
            }, function (error) {});
          } //get type


          this.lookupService.getLookupValueByLookupTypeId(7).subscribe(function (res) {
            _this.ticketTypeData = res;
          }, function (error) {}); //get private category

          this.lookupService.getLookupValueByLookupTypeId(16).subscribe(function (res) {
            _this.ticketPrivateCategoryData = res;
          }, function (error) {}); //get common category

          this.lookupService.getLookupValueByLookupTypeId(17).subscribe(function (res) {
            _this.ticketCommonCategoryData = res;
          }, function (error) {}); //get status

          this.lookupService.getLookupValueByLookupTypeId(9).subscribe(function (res) {
            _this.ticketStatusData = res;
            _this.totalFilterItems[0].data = _this.ticketStatusData;
          }, function (error) {}); //get priority

          this.lookupService.getLookupValueByLookupTypeId(14).subscribe(function (res) {
            _this.ticketPriorityData = res;
            _this.totalFilterItems[1].data = _this.ticketPriorityData;
          }, function (error) {}); // delete item

          this.sharedService.unitlistdeleteindexcast.subscribe(function (index) {
            if (index != null) {
              var params = {
                ticketId: _this.ticketListData[index].ticketId,
                deleteBy: parseInt(_this.cookieService.get('userId'))
              };
              _this.isTicketDataLoaded = false;

              _this.ticketService.deleteTicket(params).subscribe(function (res) {
                _this.ticketListData.splice(index, 1);

                _this.totalItems = _this.ticketListData.length;
                _this.isTicketDataLoaded = true;

                _this.sharedService.setUnitListDeleteIndex(null);
              }, function (error) {
                console.log(error);
              });
            }
          });
          this.totalFilterItems = [{
            label: 'Status'
          }, {
            label: 'Priority'
          }];
        }
      }]);

      return HelpdeskAllTicketsComponent;
    }();

    HelpdeskAllTicketsComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _api_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    HelpdeskAllTicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-helpdesk-all-tickets',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./helpdesk-all-tickets.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-all-tickets/helpdesk-all-tickets.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./helpdesk-all-tickets.component.scss */
      "./src/app/ams/helpdesk/components/helpdesk-all-tickets/helpdesk-all-tickets.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _api_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], HelpdeskAllTicketsComponent);
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-update-ticket/add-ticket/add-ticket.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-update-ticket/add-ticket/add-ticket.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskUpdateTicketAddTicketAddTicketComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".helpdesk-add-ticket-wrapper .card.comments li {\n  padding: 0;\n  border: none;\n  background-color: transparent;\n}\n.helpdesk-add-ticket-wrapper .card.comments li .media .icon {\n  position: relative;\n  z-index: 100;\n}\n.helpdesk-add-ticket-wrapper .card.comments li .media h5 {\n  float: left;\n  color: #373946;\n  margin: 0 0 6px 0;\n}\n.helpdesk-add-ticket-wrapper .card.comments li .media span {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #8391a1;\n  cursor: pointer;\n}\n.helpdesk-add-ticket-wrapper .card.comments li .media span .icon {\n  width: 14px;\n}\n.helpdesk-add-ticket-wrapper .card.comments li .media span .icon.del {\n  width: 16px;\n}\n.helpdesk-add-ticket-wrapper .card.comments li .media span .icon:hover {\n  color: #373946;\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n}\n.helpdesk-add-ticket-wrapper .card.comments li .media p.role {\n  background-color: #5bcc73;\n  float: left;\n  display: block;\n  padding: 0px 12px !important;\n  border-radius: 18px !important;\n  color: #ffffff;\n}\n.helpdesk-add-ticket-wrapper .card.comments li.no-comments:before {\n  content: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvaGVscGRlc2svY29tcG9uZW50cy9oZWxwZGVzay11cGRhdGUtdGlja2V0L2FkZC10aWNrZXQvYWRkLXRpY2tldC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXVwZGF0ZS10aWNrZXQvYWRkLXRpY2tldC9hZGQtdGlja2V0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRSTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJDMEZJO0FDakdSO0FGU0s7RUFDQyxrQkNURDtFRFVDLFlBQUE7QUVQTjtBRlNLO0VBQ0MsV0FBQTtFQUNBLGNDMERLO0VEekRMLGlCQUFBO0FFUE47QUZTSztFR1dILCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFhQSxpQkFBQTtFSHpCSSxjQ2RPO0VEZVAsZUFBQTtBRUhOO0FGSU07RUFJQyxXQUFBO0FFTFA7QUZFTztFQUNDLFdBQUE7QUVBUjtBRkdPO0VBQ0MsY0M0Q0c7RUduQ1Ysa0NKUk87RUlVUCwwQkpWTztBRUNSO0FGR0s7RUFDQyx5QkNLTztFREpKLFdBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUluQ1IsOEJBQUE7RUpxQ1EsY0N1REQ7QUN0RFI7QUZJSztFQUNDLGFBQUE7QUVGTiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXVwZGF0ZS10aWNrZXQvYWRkLXRpY2tldC9hZGQtdGlja2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5oZWxwZGVzay1hZGQtdGlja2V0LXdyYXBwZXJ7XG5cblx0LmNhcmQge1xuXHRcdCYuY29tbWVudHMge1xuXHRcdFx0XHRsaSB7XG5cdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHRyYW5zO1xuXHRcdFx0XHQubWVkaWEge1xuXHRcdFx0XHRcdC5pY29uIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiAkcmVsO1xuXHRcdFx0XHRcdFx0ei1pbmRleDogMTAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRoNSB7XG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0XHRcdGNvbG9yOiAkZ3JleS04MDA7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgMCA2cHggMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBkZXNwLXJlZ3VsYXI7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdFx0XHRcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdC5pY29uIHtcblx0XHRcdFx0XHRcdFx0Ji5kZWwge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxNnB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJGdyZXktODAwO1xuXHRcdFx0XHRcdFx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuMTVzIGVhc2UpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHAucm9sZSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkbGltZS1ncmVlbjtcblx0XHRcdFx0XHQgICAgZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdCAgICBwYWRkaW5nOiAwcHggMTJweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdCAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDE4cHgpO1xuXHRcdFx0XHRcdCAgICBjb2xvcjogJHdoaXRlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHQmLm5vLWNvbW1lbnRzIHtcblx0XHRcdFx0XHQmOmJlZm9yZXtcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWJjYzczO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDsiLCIuaGVscGRlc2stYWRkLXRpY2tldC13cmFwcGVyIC5jYXJkLmNvbW1lbnRzIGxpIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5oZWxwZGVzay1hZGQtdGlja2V0LXdyYXBwZXIgLmNhcmQuY29tbWVudHMgbGkgLm1lZGlhIC5pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDA7XG59XG4uaGVscGRlc2stYWRkLXRpY2tldC13cmFwcGVyIC5jYXJkLmNvbW1lbnRzIGxpIC5tZWRpYSBoNSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogIzM3Mzk0NjtcbiAgbWFyZ2luOiAwIDAgNnB4IDA7XG59XG4uaGVscGRlc2stYWRkLXRpY2tldC13cmFwcGVyIC5jYXJkLmNvbW1lbnRzIGxpIC5tZWRpYSBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM4MzkxYTE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWxwZGVzay1hZGQtdGlja2V0LXdyYXBwZXIgLmNhcmQuY29tbWVudHMgbGkgLm1lZGlhIHNwYW4gLmljb24ge1xuICB3aWR0aDogMTRweDtcbn1cbi5oZWxwZGVzay1hZGQtdGlja2V0LXdyYXBwZXIgLmNhcmQuY29tbWVudHMgbGkgLm1lZGlhIHNwYW4gLmljb24uZGVsIHtcbiAgd2lkdGg6IDE2cHg7XG59XG4uaGVscGRlc2stYWRkLXRpY2tldC13cmFwcGVyIC5jYXJkLmNvbW1lbnRzIGxpIC5tZWRpYSBzcGFuIC5pY29uOmhvdmVyIHtcbiAgY29sb3I6ICMzNzM5NDY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xufVxuLmhlbHBkZXNrLWFkZC10aWNrZXQtd3JhcHBlciAuY2FyZC5jb21tZW50cyBsaSAubWVkaWEgcC5yb2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViY2M3MztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwcHggMTJweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDE4cHggIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaGVscGRlc2stYWRkLXRpY2tldC13cmFwcGVyIC5jYXJkLmNvbW1lbnRzIGxpLm5vLWNvbW1lbnRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-update-ticket/add-ticket/add-ticket.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-update-ticket/add-ticket/add-ticket.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: AddTicketComponent */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskUpdateTicketAddTicketAddTicketComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTicketComponent", function () {
      return AddTicketComponent;
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


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_ticket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../api/services/ticket.service */
    "./src/app/api/services/ticket.service.ts");
    /* harmony import */


    var _api_services_staff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../api/services/staff.service */
    "./src/app/api/services/staff.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/underscore.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);

    var AddTicketComponent =
    /*#__PURE__*/
    function () {
      function AddTicketComponent(router, route, userService, ticketService, staffService, lookupService, cookieService) {
        _classCallCheck(this, AddTicketComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.ticketService = ticketService;
        this.staffService = staffService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isEditTicket = false;
        this.isTicketSubmitted = false;
        this.isTicketAdded = false;
        this.isTicketError = false;
        this.isTicketSuccess = false;
        this.alertTicketMessage = "";
        this.isCommentError = false;
        this.isCommentSuccess = false;
        this.alertCommentMessage = "";
        this.isTypeSelected = false;
        this.documentName = "";
        this.fileList = [];
        this.listOfFiles = [];
        this.isFileAdded = false;
        this.isTicketCommentLoaded = false;
        this.ticketComment = "";
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AddTicketComponent, [{
        key: "isArrayOne",
        value: function isArrayOne() {
          return this.ticketArray.length > 1 ? true : false;
        }
      }, {
        key: "deleteTicket",
        value: function deleteTicket() {
          this.ticketArray.splice(this.index, 1);
          this.outputParams.emit(this.ticketArray);
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.cookieService.get('userRole') == 'Admin' || this.cookieService.get('userRole') == 'Staff' ? true : false;
        }
      }, {
        key: "isCategoryEnabled",
        value: function isCategoryEnabled() {
          if (!this.isEditTicket) {
            if (this.isTypeSelected) return true;else return false;
          } else {
            return true;
          }
        }
      }, {
        key: "getTicketType",
        value: function getTicketType(typeId) {
          var _this2 = this;

          this.isTypeSelected = true;

          if (typeId == "26") {
            //ticket common category
            this.lookupService.getLookupValueByLookupTypeId(17).subscribe(function (res) {
              _this2.ticketCategoryData = res.filter(function (item) {
                return item.isActive;
              });
            }, function (error) {});
          } else {
            //ticket common category
            this.lookupService.getLookupValueByLookupTypeId(16).subscribe(function (res) {
              _this2.ticketCategoryData = res.filter(function (item) {
                return item.isActive;
              });
            }, function (error) {});
          }
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          this.isFileAdded = true;

          for (var i = 0; i <= event.target.files.length - 1; i++) {
            var selectedFile = event.target.files[i];
            this.fileList.push(selectedFile);
            this.listOfFiles.push({
              'name': selectedFile.name,
              'size': selectedFile.size
            });
          }
        }
      }, {
        key: "deleteFile",
        value: function deleteFile(index) {
          // Delete the item from fileNames list
          this.listOfFiles.splice(index, 1); // delete file from FileList

          this.fileList.splice(index, 1);
          this.selectedFile = null;

          if (this.fileList.length == 0 && this.listOfFiles.length == 0) {
            this.isFileAdded = false;
          }
        }
      }, {
        key: "bytesToSize",
        value: function bytesToSize(bytes) {
          if (bytes < 1024) return bytes + " Bytes";else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";else return (bytes / 1073741824).toFixed(3) + " GB";
        }
      }, {
        key: "getCommentDate",
        value: function getCommentDate(data) {
          var date = moment__WEBPACK_IMPORTED_MODULE_9__(data).fromNow();
          return date;
        }
      }, {
        key: "isNoComments",
        value: function isNoComments() {
          return this.ticketCommentsData.length == 0 ? true : false;
        }
      }, {
        key: "editTicketAgain",
        value: function editTicketAgain() {
          this.isTicketSubmitted = false;
        }
      }, {
        key: "submitTicketForm",
        value: function submitTicketForm(form) {
          var _this3 = this;

          this.isTicketSubmitted = true;
          this.isTicketError = false;

          if (!this.isEditTicket) {
            //add ticket
            var ticketDetails = {
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "ticketTypeId": parseInt(this.ticket.ticketTypeId),
              "title": this.ticket.title,
              "description": this.ticket.description,
              "raisedBy": parseInt(this.ticket.raisedBy),
              "ticketStatusId": parseInt(this.ticket.ticketStatusId),
              "ticketCategoryId": parseInt(this.ticket.ticketCategoryId),
              "assignedTo": parseInt(this.ticket.assignedTo),
              "ticketPriorityId": parseInt(this.ticket.ticketPriorityId),
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": "2019-11-11T14:50:55.782Z",
              "updatedBy": 0,
              "updatedOn": "2019-11-11T14:50:55.782Z"
            };
            this.ticketService.addTicket(ticketDetails).subscribe(function (res) {
              _this3.isTicketSubmitted = false;

              if (res.message) {
                _this3.isTicketSuccess = true;
                _this3.alertTicketMessage = "Ticket added successfully";
                _this3.isTicketAdded = true;
                _this3.ticketId = res.message;
              } else {
                _this3.isTicketError = true;
                _this3.alertTicketMessage = res.alertTicketMessage;
              }
            }, function (error) {});
          } else {
            //edit ticket
            var _ticketDetails = {
              "ticketId": parseInt(this.route.params['value'].id),
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "ticketTypeId": parseInt(this.ticket.ticketTypeId),
              "title": this.ticket.title,
              "description": this.ticket.description,
              "raisedBy": parseInt(this.ticket.raisedBy),
              "ticketStatusId": parseInt(this.ticket.ticketStatusId),
              "ticketCategoryId": parseInt(this.ticket.ticketCategoryId),
              "assignedTo": parseInt(this.ticket.assignedTo),
              "ticketPriorityId": parseInt(this.ticket.ticketPriorityId),
              "isActive": true,
              "insertedBy": 0,
              "insertedOn": "2019-11-11T14:50:55.782Z",
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": "2019-11-11T14:50:55.782Z"
            };
            this.ticketService.updateTicket(_ticketDetails).subscribe(function (res) {
              _this3.isTicketSubmitted = false;

              if (res.message) {
                _this3.isTicketSuccess = true;
                _this3.alertTicketMessage = "Ticket Updated successfully";
              } else {
                _this3.isTicketError = true;
                _this3.alertTicketMessage = res.alertTicketMessage;
              }
            }, function (error) {});
          }
        }
      }, {
        key: "deleteTicketComment",
        value: function deleteTicketComment(id, index) {
          var _this4 = this;

          this.isTicketCommentLoaded = false;
          var params = {
            ticketCommentId: id,
            deleteBy: parseInt(this.cookieService.get('userId'))
          };
          this.ticketService.deleteTicketComment(params).subscribe(function (res) {
            _this4.ticketCommentsData.splice(index, 1);

            _this4.isTicketCommentLoaded = true;
          }, function (error) {});
        }
      }, {
        key: "submitCommentForm",
        value: function submitCommentForm(form) {
          var _this5 = this;

          var dateNow = new Date();
          var commentDetails = {
            "ticketId": this.ticketId,
            "comments": this.ticketComment,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": dateNow.toISOString(),
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": dateNow.toISOString()
          };
          this.ticketService.addTicketComment(commentDetails).subscribe(function (res) {
            if (res.message) {
              _this5.isCommentSuccess = true;
              _this5.alertCommentMessage = "Comment added successfully";
              _this5.isTicketCommentLoaded = false;

              _this5.ticketService.getAllTicketCommentsByTicketId(_this5.ticketId).subscribe(function (res) {
                _this5.isTicketCommentLoaded = true;
                _this5.ticketCommentsData = res.filter(function (item) {
                  return item.isActive;
                });
                underscore__WEBPACK_IMPORTED_MODULE_8__["each"](_this5.ticketCommentsData, function (item, index) {
                  _this5.userService.getUserById(_this5.ticketCommentsData[index].insertedBy).subscribe(function (data) {
                    _this5.ticketCommentsData[index].userName = data[0].firstName + ' ' + data[0].lastName;
                    _this5.ticketCommentsData[index].userId = data[0].userId;
                  });
                });
              });
            } else {
              _this5.isCommentError = true;
              _this5.alertCommentMessage = res.message;
            }
          }, function (error) {});
        }
      }, {
        key: "isLoggedUser",
        value: function isLoggedUser(id) {
          return id == parseInt(this.cookieService.get('userId')) ? true : false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.ticket = {};
          this.ticket.ticketCategoryId = "";
          this.ticket.ticketTypeId = "";
          this.ticket.ticketPriorityId = "";
          this.ticket.ticketStatusId = "32";
          this.ticket.raisedBy = "";
          this.ticket.assignedTo = "";
          this.ticketArray = [];
          this.ticketCommentsData = [];

          if (this.route.params['value'].id != undefined) {
            this.isEditTicket = true;
            this.isTicketAdded = true;
            this.ticketId = this.route.params['value'].id;
            this.ticketService.getTicketById(this.route.params['value'].id).subscribe(function (res) {
              _this6.ticket = res[0];

              _this6.getTicketType(_this6.ticket.ticketTypeId);
            }, function (error) {});
            this.ticketService.getAllTicketCommentsByTicketId(this.route.params['value'].id).subscribe(function (res) {
              _this6.isTicketCommentLoaded = true;
              _this6.ticketCommentsData = res.filter(function (item) {
                return item.isActive;
              });
              underscore__WEBPACK_IMPORTED_MODULE_8__["each"](_this6.ticketCommentsData, function (item, index) {
                _this6.userService.getUserById(_this6.ticketCommentsData[index].insertedBy).subscribe(function (data) {
                  _this6.ticketCommentsData[index].userName = data[0].firstName + ' ' + data[0].lastName;
                  _this6.ticketCommentsData[index].userId = data[0].userId;
                }, function (error) {
                  _this6.isTicketCommentLoaded = true;
                });

                _this6.userService.getRolesByUserId(_this6.ticketCommentsData[index].insertedBy).subscribe(function (role) {
                  if (role === undefined || role.length == 0) {
                    _this6.ticketCommentsData[index].roleName = "-";
                  } else {
                    _this6.ticketCommentsData[index].roleName = role[0].roleName;
                  }
                }, function (error) {});
              });
            });
          } else {
            this.isTicketCommentLoaded = true;
            this.ticketCommentsData = [];
          } //ticket type


          this.lookupService.getLookupValueByLookupTypeId(7).subscribe(function (res) {
            _this6.ticketTypeData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {}); //category type

          this.lookupService.getLookupValueByLookupTypeId(16).subscribe(function (res) {
            _this6.ticketCategoryData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {}); //priority 

          this.lookupService.getLookupValueByLookupTypeId(14).subscribe(function (res) {
            _this6.priortyTypeData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {}); //status 

          this.lookupService.getLookupValueByLookupTypeId(9).subscribe(function (res) {
            _this6.statusTypeData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {}); //get all users

          this.userService.getAllUsersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this6.raisedByData = res;

            if (_this6.cookieService.get('userRole') == 'Tenant' || _this6.cookieService.get('userRole') == 'Owner') {
              _this6.raisedByData = res.filter(function (item) {
                return item.userId == parseInt(_this6.cookieService.get('userId'));
              });
              _this6.ticket.raisedBy = _this6.raisedByData[0].userId;
            }
          }, function (error) {}); //get staffs

          this.staffService.getAllStaffs().subscribe(function (res) {
            _this6.assignedToData = res;
          }, function (error) {});
        }
      }]);

      return AddTicketComponent;
    }();

    AddTicketComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_ticket_service__WEBPACK_IMPORTED_MODULE_4__["TicketService"]
      }, {
        type: _api_services_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddTicketComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('array'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddTicketComponent.prototype, "ticketArray", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddTicketComponent.prototype, "outputParams", void 0);
    AddTicketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-ticket',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-ticket.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-update-ticket/add-ticket/add-ticket.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-ticket.component.scss */
      "./src/app/ams/helpdesk/components/helpdesk-update-ticket/add-ticket/add-ticket.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_ticket_service__WEBPACK_IMPORTED_MODULE_4__["TicketService"], _api_services_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], AddTicketComponent);
    /***/
  }
}]);
//# sourceMappingURL=default~helpdesk-helpdesk-module~servicedesk-servicedesk-module-es5.js.map