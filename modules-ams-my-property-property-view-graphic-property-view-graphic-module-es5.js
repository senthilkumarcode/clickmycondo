(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-my-property-property-view-graphic-property-view-graphic-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-view-graphic/property-view-graphic.component.html":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-view-graphic/property-view-graphic.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsMyPropertyPropertyViewGraphicPropertyViewGraphicComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"poiManagement m-5\">\n    <div class=\"topBar\">\n      <div class=\"row pos-r\">\n        <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 d-flex\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n            <label>Select Tower</label>\n            <select class=\"form-control\" name=\"tower\" [(ngModel)]=\"selectedTower\" (change)=\"getFloorList()\" >\n              <option *ngFor=\"let tower of towerList\"  [(value)]=\"tower.apartmentBlockId\">{{tower.description}}</option>\n            </select>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n            <label>Select Floor</label>\n            <select class=\"form-control\" name=\"floor\" [(ngModel)]=\"selectedFloor\" (change)=\"selectFloor()\">\n              <option *ngFor=\"let floor of floorList\"  [(value)]=\"floor.apartmentBlockFloorId\">{{floor.floorLabel}}</option>\n            </select>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\" *ngIf=\"selectedFloor\" >\n            <label>Property Type</label>\n            <select  name=\"selectedPropertyType\" class=\"form-control\" [(ngModel)]=\"selectedPropertyType\" (change)=\"selectPropertyType()\" >\n              <option value=\"\" disabled selected hidden>Select</option>\n              <option *ngFor=\"let item of propertyTypeList\" value=\"{{item.lookupValueId}}\">\n                  {{item.lookupValueName}}</option>\n          </select>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\" *ngIf=\"selectedFloor\" >\n            <label>Unit Category</label>\n            <select [(ngModel)]=\"selectedUnitFilterValue\" name=\"selectedUnitFilterValue\" class=\"form-control\" (change)=\"selectedUnitFilter()\" >\n              <option value=\"\" disabled selected hidden>Select</option>\n              <option *ngFor=\"let item of unitFilterList\" value=\"{{item.id}}\">{{item?.name}}</option>\n          </select>\n          </div>\n        </div>\n        <div [hidden]=\"true\">\n          <input type=\"text\" id=\"buildingNo\" value=\"\" placeholder=\"Building No\" [(ngModel)]=\"bNo\">\n          <input type=\"text\" id=\"floorNo\" value=\"\" placeholder=\"Floor No\" [(ngModel)]=\"fNo\">\n        <input  #nodeId type=\"text\" id=\"spanNode\">\n        <input  #poiId type=\"text\" id=\"poiId\">\n        <input  #nodeKind type=\"text\" id=\"nodeKind\">\n        <input  #type type=\"text\" id=\"type\">\n        </div>\n      </div>\n    </div>\n  <div class=\"pathBuilder\">\n      <!--<md-progress-bar mode=\"indeterminate\"></md-progress-bar>-->\n      <div class=\"dragContainer\" id=\"lcanvas\" [ngStyle]=\"isShowBuilder ? {'display':'flex','justify-content':'center'} : ''\">\n        <!--<div class=\"floor\" id=\"lcanvas\">-->\n        <!--<div id=\"image-wrapper\" *ngIf=\"isShowBuilder\">-->\n        <!--</div>-->\n        <!--</div>-->\n        <ng-template #property>\n          <div>\n              <span>Unit</span>\n          </div>\n      </ng-template>\n        <div class=\"upload\" [appDragAndDrop] *ngIf=\"!isShowBuilder\"\n             id=\"setFloorImg\">    \n          <!-- <img class=\"mb-5\" src=\"../../../../../assets/images/plus-circle-icon.png\" alt=\"\"> -->\n          <p  class=\"addFloor\">Floor Plan Not Configured</p>\n          <div class=\"legends\">\n            <!-- <span class=\"d-flex\" >\n             <img class=\"mr-20\" src=\"../../../../../assets/images/folder-icon.png\" alt=\"\">\n              Browse File Computer</span> -->\n          </div>\n          <div class=\"borderLine\"></div>\n          <span class=\"support\" >Supported File Formats</span>\n          <div class=\"brandIcons\">\n            <img src=\"../../../../../assets/images/jpg-icon.png\" alt=\"\">\n            <img src=\"../../../../../assets/images/png-icon.png\" alt=\"\">\n          </div>\n          <span class=\"smallText\">Supported File Formats<span [style.direction]=\"'LTR'\">1000*1200 px</span></span>\n        </div>\n        <!-- <input type=\"file\" #fileInput (change)=\"uploadFile($event.target.files)\" id=\"hidden-bg-upload\" accept=\"image/x-png,image/jpeg\"> -->\n        <!--<input type=\"file\" id=\"hidden-graph-upload\">-->\n        <!--<img *ngIf=\"false\" id=\"pinch-zoom-image-id\" class=\"pinch-zoom-image\" src=\"../assets/images/floor_plan.jpg\">-->\n      </div>\n      <div class=\"customPopOver\" [style.display]=\"isShowOver\" [style.top]=\"styleTop\" [style.left]=\"styleLeft\" >\n        <div class=\"customPopOverContent\">\n          Property Details...\n        </div>\n      </div>\n      <!-- <div class=\"floorLegendLeft\" *ngIf=\"isShowBuilder\">\n        <img src=\"../../assets/icons/legend.png\" alt=\"\" (click)=\"isShowLegend = !isShowLegend\">\n        <app-floating-btn class=\"applgout\"   [position]=\"{ top: '-6px', left: '40px'}\"\n                          [custom]=\"true\"\n                          *ngIf=\"isShowLegend\">\n          <div class=\"legendBody\">\n            <span class=\"legendData\" [style.direction]=\"langDirection\">{{langObj?.poi}}<span class=\"ml-2\">:</span> <span class=\"ml-2\" [style.color]=\"'#0fce21'\">{{rawPOIList?.poiCount ? rawPOIList?.poiCount : 0}}</span></span>\n            <span class=\"legendData\" [style.direction]=\"langDirection\">{{langObj?.facility}} <span class=\"ml-2\">:</span> <span class=\"ml-2\" [style.color]=\"'#440084'\">{{rawPOIList?.facilityCount ? rawPOIList?.facilityCount : 0}}</span></span>\n            <span class=\"legendData\" [style.direction]=\"langDirection\">{{langObj?.active}} <span class=\"ml-2\">:</span> <span class=\"ml-2\" [style.color]=\"'#12991f'\">{{rawPOIList?.activeCount ? rawPOIList?.activeCount : 0}}</span></span>\n            <span class=\"dataLastChild\" [style.direction]=\"langDirection\">{{langObj?.inactive}} <span class=\"ml-2\">:</span> <span class=\"ml-2\" [style.color]=\"'#fd001a'\">{{rawPOIList?.inActiveCount ? rawPOIList?.inActiveCount : 0}}</span></span>\n          </div>\n        </app-floating-btn>\n      </div> -->\n      <!-- <div class=\"floorLegend\" *ngIf=\"isShowBuilder\">\n        <div class=\"mb-12\">\n          <label class=\"mr-8\"> To Add POI</label>\n          <span>Shift+Click</span>\n        </div>\n        <div>\n          <label  class=\"mr-8 ml-12\">To Delete POI/Path</label>\n          <span>Shift+Delete</span>\n        </div>\n      </div> -->\n    </div>\n    </div>";
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-view-graphic/property-view-graphic-routing.module.ts":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-view-graphic/property-view-graphic-routing.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: routes, PropertyViewGraphicRoutingModule */

    /***/
    function srcAppModulesAmsMyPropertyPropertyViewGraphicPropertyViewGraphicRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyViewGraphicRoutingModule", function () {
        return PropertyViewGraphicRoutingModule;
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


      var _property_view_graphic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./property-view-graphic.component */
      "./src/app/modules/ams/my-property/property-view-graphic/property-view-graphic.component.ts");

      var routes = [{
        path: '',
        component: _property_view_graphic_component__WEBPACK_IMPORTED_MODULE_3__["PropertyViewGraphicComponent"]
      }];

      var PropertyViewGraphicRoutingModule = function PropertyViewGraphicRoutingModule() {
        _classCallCheck(this, PropertyViewGraphicRoutingModule);
      };

      PropertyViewGraphicRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PropertyViewGraphicRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-view-graphic/property-view-graphic.component.scss":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-view-graphic/property-view-graphic.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsMyPropertyPropertyViewGraphicPropertyViewGraphicComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL215LXByb3BlcnR5L3Byb3BlcnR5LXZpZXctZ3JhcGhpYy9wcm9wZXJ0eS12aWV3LWdyYXBoaWMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-view-graphic/property-view-graphic.component.ts":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-view-graphic/property-view-graphic.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: PropertyViewGraphicComponent */

    /***/
    function srcAppModulesAmsMyPropertyPropertyViewGraphicPropertyViewGraphicComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyViewGraphicComponent", function () {
        return PropertyViewGraphicComponent;
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


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Document */
      "./src/app/api/controllers/Document.ts");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var src_app_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/file-upload.service */
      "./src/app/shared/services/file-upload.service.ts");
      /* harmony import */


      var src_app_shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/file-download.service */
      "./src/app/shared/services/file-download.service.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var src_app_api_controllers_FileDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/api/controllers/FileDetails */
      "./src/app/api/controllers/FileDetails.ts");
      /* harmony import */


      var src_app_modules_ams_profile_settings_components_add_property_dialog_add_property_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component */
      "./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/api/controllers/PropertyManager */
      "./src/app/api/controllers/PropertyManager.ts");

      var graph;

      var PropertyViewGraphicComponent = /*#__PURE__*/function () {
        function PropertyViewGraphicComponent(element, apartmentService, documentService, cookieService, fileUploadService, fileDownloadService, sanitizer, lookupService, propertyManagerService, dialog, sessionService, fileDetailService) {
          _classCallCheck(this, PropertyViewGraphicComponent);

          this.element = element;
          this.apartmentService = apartmentService;
          this.documentService = documentService;
          this.cookieService = cookieService;
          this.fileUploadService = fileUploadService;
          this.fileDownloadService = fileDownloadService;
          this.sanitizer = sanitizer;
          this.lookupService = lookupService;
          this.propertyManagerService = propertyManagerService;
          this.dialog = dialog;
          this.sessionService = sessionService;
          this.fileDetailService = fileDetailService;
          this.loading = true;
          this.isShowBuilder = false;
          this.bNo = 0;
          this.fNo = 0;
          this.towerList = [];
          this.floorList = [];
          this.propertyTypeList = [];
          this.unitFilterList = [];
          this.isShowOver = 'none';
          localStorage.setItem('preventGraph', 'true');
        }

        _createClass(PropertyViewGraphicComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.bootMe();
            this.getBlockList();
            this.getPropertyType();
            this.unitFilterList = [{
              id: 'isAvailableForRent',
              name: "Available For Rent"
            }, {
              id: 'isPetsAllowed',
              name: "Pets Allowed"
            }, {
              id: 'isFurnished',
              name: "Furnished"
            }, {
              id: 'isVacant',
              name: "Vacant"
            }, {
              id: 'isSold',
              name: "Sold"
            }, {
              id: 'constructionInProgress',
              name: "Construction In Progress"
            }, {
              id: 'twoBR',
              name: "2 BR"
            }];
          }
        }, {
          key: "selectPropertyType",
          value: function selectPropertyType() {
            switch (Number(this.selectedPropertyType)) {
              case 318:
                this.getUnitProperty();
                break;

              case 319:
                this.getAssetProperty();
                break;

              case 320:
                this.getFacilityProperty();
                break;

              case 321:
                this.getMaintananceProperty();
                break;

              default:
                break;
            }
          }
        }, {
          key: "getUnitProperty",
          value: function getUnitProperty() {
            var getParam = {
              apartmentId: this.sessionService.apartmentId,
              propertyPOIType: this.selectedPropertyType
            };
            this.propertyManagerService.getAllPropertyPoiUnitByPropertyPoiType(getParam).subscribe(function (resp) {});
          }
        }, {
          key: "getAssetProperty",
          value: function getAssetProperty() {
            var getParam = {
              apartmentId: this.sessionService.apartmentId,
              propertyPOIType: this.selectedPropertyType
            };
            this.propertyManagerService.getAllPropertyPoiAssetByPropertyPoiType(getParam).subscribe(function (resp) {});
          }
        }, {
          key: "getFacilityProperty",
          value: function getFacilityProperty() {
            var getParam = {
              apartmentId: this.sessionService.apartmentId,
              propertyPOIType: this.selectedPropertyType
            };
            this.propertyManagerService.getAllPropertyPoiFacilityByPropertyPoiType(getParam).subscribe(function (resp) {});
          }
        }, {
          key: "getMaintananceProperty",
          value: function getMaintananceProperty() {
            var getParam = {
              apartmentId: this.sessionService.apartmentId,
              propertyPOIType: this.selectedPropertyType
            };
            this.propertyManagerService.getAllPropertyPoiOpMaintenanceByPropertyPoiType(getParam).subscribe(function (resp) {});
          }
        }, {
          key: "getBlockList",
          value: function getBlockList() {
            var _this = this;

            var param = {
              apartmentId: this.sessionService.apartmentId
            };
            this.apartmentService.getApartmentBlockByApartmentId(param).subscribe(function (resp) {
              _this.towerList = resp;
              _this.selectedTower = _this.towerList[0].apartmentBlockId;

              _this.getFloorList();
            }, function (error) {});
          }
        }, {
          key: "getFloorList",
          value: function getFloorList() {
            var _this2 = this;

            var getFloorParam = {
              apartmentId: this.sessionService.apartmentId,
              apartmentblockId: this.selectedTower
            };
            this.apartmentService.getApartmentBlockFloorByApartmentIdBlockId(getFloorParam).subscribe(function (resp) {
              if (resp && resp.length) {
                _this2.floorList = resp;
                _this2.selectedFloor = _this2.floorList[0].apartmentBlockFloorId;

                _this2.selectFloor(); // this.getPropertyMap(this.floorList[0].propertyMapFileId);

              }
            }, function (error) {});
          }
        }, {
          key: "selectFloor",
          value: function selectFloor() {
            var _this3 = this;

            if (this.selectedFloor) {
              this.floorList.filter(function (key) {
                if (key.apartmentBlockFloorId == _this3.selectedFloor) {
                  _this3.selectedFloorLabel = key.floorLabel;
                  _this3.selectedFloorNo = key.floorno;

                  _this3.getPropertyMap(key.propertyMapFileId);
                }
              });
            }
          }
        }, {
          key: "getPropertyType",
          value: function getPropertyType() {
            var _this4 = this;

            var getLookUpParam = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 196
            };
            this.lookupService.getLookupValueByLookupTypeId(getLookUpParam).subscribe(function (resp) {
              _this4.propertyTypeList = resp;
            }, function (error) {});
          }
        }, {
          key: "addProperty",
          value: function addProperty(type) {
            var _this5 = this;

            var data = this.onChangeVal;
            data['type'] = type;
            data['apartmentBlockId'] = this.selectedFloor;
            var dialogRef = this.dialog.open(src_app_modules_ams_profile_settings_components_add_property_dialog_add_property_dialog_component__WEBPACK_IMPORTED_MODULE_11__["AddPropertyDialogComponent"], {
              width: '20%',
              position: {
                right: '10%'
              },
              data: data
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                var objectVal = [];

                for (var key in result) {
                  objectVal.push(key);
                }

                objectVal.splice(0, 2); // let arrObjVal = JSON.stringify(objectVal);

                console.log(objectVal.toString());
                $('#nodeKind').val(objectVal.toString());
                $('#spanNode').val(_this5.onChangeVal.nodeId);
                $('#poiId').val(result.poiId);
                $('#type').val(result.type);

                _this5.updatePOI();
              }
            });
          }
        }, {
          key: "isUploadCompleted",
          value: function isUploadCompleted() {
            return this.uploadResponse.status == "completed" ? true : false;
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(event) {
            var _this6 = this;

            var file = event[0];
            var userId = parseInt(this.cookieService.get('userId'));
            this.fileUploadService.upload(file, userId).subscribe(function (res) {
              if (res != undefined) {
                _this6.uploadResponse = res;
              }

              if (_this6.isUploadCompleted()) {
                _this6.addPropertyMap(_this6.uploadResponse.fileId);
              }
            });
          }
        }, {
          key: "getPropertyMap",
          value: function getPropertyMap(propertyId) {
            var _this7 = this;

            var getFloorProperty = {
              propertyMapFileId: propertyId
            };
            this.apartmentService.getPropertyMapFileById(getFloorProperty).subscribe(function (resp) {
              if (resp && resp.length) {
                _this7.floorPropertyData = resp[0];

                _this7.assignData(_this7.floorPropertyData);
              }
            }, function (error) {});
          }
        }, {
          key: "assignData",
          value: function assignData(data) {
            var _this8 = this;

            if (data && data.floorPictureFileDetailsId && data.floorPictureFileDetailsId != 0 && data.mapJsonFile != "") {
              this.isShowBuilder = true;
              setTimeout(function () {
                var svgElem = document.getElementById('bgimage');

                if (svgElem) {
                  svgElem.parentNode.removeChild(svgElem);
                }

                _this8.getFileDetails(data.floorPictureFileDetailsId);

                graph.deleteGraph();
                graph.customGraphUpdate(data.mapJsonFile, undefined);
              }, 1);
            } else if (data && data.floorPictureFileDetailsId && data.floorPictureFileDetailsId != 0) {
              this.isShowBuilder = true;
              setTimeout(function () {
                var svgElem = document.getElementById('bgimage');

                if (svgElem) {
                  svgElem.parentNode.removeChild(svgElem);
                }

                _this8.getFileDetails(data.floorPictureFileDetailsId); // graph.customImageUpdalod(this.getImage(data.floorPictureFileDetailsId));

              }, 1);
            } else {
              this.isShowBuilder = false;
            }
          }
        }, {
          key: "getFileDetails",
          value: function getFileDetails(imageId) {
            var _this9 = this;

            var newParams = {
              fileDetailsId: imageId,
              apartmentId: this.sessionService.apartmentId
            };
            this.fileDetailService.getFileDetailsById(newParams).subscribe(function (res) {
              _this9.downloadFile(res[0].filePath);
            });
          }
        }, {
          key: "downloadFile",
          value: function downloadFile(filePath) {
            var _this10 = this;

            this.fileDownloadService.downloadFile(filePath).subscribe(function (res) {
              var blob = res.body;
              var objectURL = URL.createObjectURL(blob);

              var sanitizeUrl = _this10.sanitizer.bypassSecurityTrustUrl(objectURL);

              graph.customImageUpdalod(sanitizeUrl.changingThisBreaksApplicationSecurity);
            });
          }
        }, {
          key: "getImage",
          value: function getImage(floorPictureFileDetailsId) {
            var downloadParam = {
              fileNameOnBlob: floorPictureFileDetailsId,
              savefileNameWithPath: ''
            };
            this.fileDetailService.downloadAsync(downloadParam).subscribe(function (resp) {
              return resp;
            }, function (error) {});
          }
        }, {
          key: "bootMe",
          value: function bootMe() {
            var docEl = document.documentElement,
                bodyEl = document.getElementsByTagName('body')[0];
            var width = window.innerWidth || docEl.clientWidth || bodyEl.clientWidth,
                height = window.innerHeight || docEl.clientHeight || bodyEl.clientHeight; // initial node data

            var nodes = [];
            var edges = [];
            /** MAIN SVG **/

            var svg = d3.select("#lcanvas").append("svg").attr("width", width).attr("height", height);
            graph = new GraphCreator(svg, nodes, edges);
            graph.setIdCt(0); // this.graph.updateGraph();
          }
        }, {
          key: "addPropertyMap",
          value: function addPropertyMap(imageId) {
            var _this11 = this;

            this.downloadGraph();
            var addPropertyMap = {
              propertyMapFile: {
                "propertyMapFileId": 0,
                "apartmentId": this.sessionService.apartmentId,
                "apartmentBlockId": this.selectedTower,
                "description": "",
                "isIndoor": true,
                "floorno": this.selectedFloorNo,
                "floorLabel": this.selectedFloorLabel,
                "floorPictureFileDetailsId": imageId,
                "mapJsonFile": JSON.stringify(this.updatedGraph),
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": new Date().toISOString(),
                "apartmentBlockFloorId": this.selectedFloor
              }
            };
            this.apartmentService.addPropertyMapFile(addPropertyMap).subscribe(function (resp) {
              _this11.floorPropertyData = resp;

              _this11.assignData(_this11.floorPropertyData);
            }, function (error) {});
          }
        }, {
          key: "updateProperty",
          value: function updateProperty() {
            var _this12 = this;

            this.downloadGraph();
            var updatePropertyMap = {
              propertyMapFile: {
                "propertyMapFileId": this.floorPropertyData.propertyMapFileId,
                "apartmentId": this.sessionService.apartmentId,
                "apartmentBlockId": this.selectedFloor,
                "description": "",
                "isIndoor": true,
                "floorno": this.selectedFloorNo,
                "floorLabel": this.selectedFloorLabel,
                "floorPictureFileDetailsId": this.floorPropertyData.floorPictureFileDetailsId,
                "mapJsonFile": JSON.stringify(this.updatedGraph),
                "isActive": true,
                "insertedBy": 0,
                "insertedOn": new Date().toISOString(),
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString(),
                "apartmentBlockFloorId": this.selectedTower
              }
            };
            this.apartmentService.updatePropertyMapFile(updatePropertyMap).subscribe(function (resp) {
              _this12.floorPropertyData = resp; // this.assignData(this.floorPropertyData)
            }, function (error) {});
          }
        }, {
          key: "downloadGraph",
          value: function downloadGraph() {
            var savePFNodes = [];
            var saveEdges = [];
            var savePFEdges = [];
            var prefix = this.bNo + "_" + this.fNo + "_";
            var sid, tid;
            var nobj;
            this.savePFNode = [];
            graph.nodes.forEach(function (val, i) {
              nobj = {};
              nobj.id = prefix + val.id;
              nobj.x = val.x;
              nobj.y = val.y;
              nobj.poiId = val.poiId;
              nobj.kind = val.kind;
              savePFNodes.push(nobj);
            });
            this.savePFNode = savePFNodes;
            graph.edges.forEach(function (val, i) {
              saveEdges.push({
                source: val.source.id,
                target: val.target.id
              });
              sid = prefix + val.source.id;
              tid = prefix + val.target.id;
              savePFEdges.push({
                source: sid,
                target: tid
              });
            });
            var fullObj = {
              maponly: {
                idct: graph.idct,
                buildingNo: this.bNo,
                floorNo: this.fNo,
                nodes: graph.nodes,
                edges: saveEdges
              },
              output: {
                floorNo: this.fNo,
                nodes: savePFNodes,
                edges: savePFEdges
              }
            };
            this.updatedGraph = fullObj;
            /*fullObj.maponly.idct = graph.idct
            fullObj.maponly.buildingNo = this.bNo
            fullObj.maponly.floorNo = this.fNo
            fullObj.maponly.nodes = graph.nodes
            fullObj.maponly.edges = saveEdges
            fullObj.output.floorNo = this.fNo
            fullObj.output.nodes = savePFNodes
            fullObj.output.edges = savePFEdges*/
            // var blob = new Blob([JSON.stringify(fullObj)], {type: "text/plain;charset=utf-8"});
            // //for time being commented out
            // saveAs(blob, "mydag.json");
          }
        }, {
          key: "selectedUnitFilter",
          value: function selectedUnitFilter() {
            var selectedObj = {
              type: this.selectedPropertyType,
              selectedCategory: this.selectedUnitFilterValue
            };
            graph.customGraphUpdate(this.floorPropertyData.mapJsonFile, selectedObj);
          }
        }, {
          key: "updatePOI",
          value: function updatePOI() {
            if ($('#poiId').val() && $('#nodeKind').val() && $('#spanNode').val()) {
              graph.setPOIId();
              this.updateProperty();
            }
          }
        }, {
          key: "browseFile",
          value: function browseFile() {
            var fileUpload = $(this.element.nativeElement).find("input[id='hidden-bg-upload']");
            fileUpload.trigger("click");
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var svgElem = document.getElementById('bgimage');

            if (svgElem) {
              svgElem.parentNode.removeChild(svgElem);
            }

            graph.deleteGraph();
            localStorage.removeItem('preventGraph');
          }
        }]);

        return PropertyViewGraphicComponent;
      }();

      PropertyViewGraphicComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
        }, {
          type: src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_3__["DocumentService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
        }, {
          type: src_app_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_5__["FileUploadService"]
        }, {
          type: src_app_shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_6__["FileDownloadService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_8__["LookupService"]
        }, {
          type: src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_13__["PropertyManagerService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"]
        }, {
          type: src_app_api_controllers_FileDetails__WEBPACK_IMPORTED_MODULE_10__["FileDetailsService"]
        }];
      };

      PropertyViewGraphicComponent.propDecorators = {
        poiId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['poiId']
        }],
        nodeId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['nodeId']
        }],
        nodeKind: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['nodeKind']
        }],
        Nodetype: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['type']
        }]
      };
      PropertyViewGraphicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-view-graphic',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./property-view-graphic.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-view-graphic/property-view-graphic.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./property-view-graphic.component.scss */
        "./src/app/modules/ams/my-property/property-view-graphic/property-view-graphic.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_3__["DocumentService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], src_app_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_5__["FileUploadService"], src_app_shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_6__["FileDownloadService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_8__["LookupService"], src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_13__["PropertyManagerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"], src_app_api_controllers_FileDetails__WEBPACK_IMPORTED_MODULE_10__["FileDetailsService"]])], PropertyViewGraphicComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-view-graphic/property-view-graphic.module.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-view-graphic/property-view-graphic.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: PropertyViewGraphicModule */

    /***/
    function srcAppModulesAmsMyPropertyPropertyViewGraphicPropertyViewGraphicModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyViewGraphicModule", function () {
        return PropertyViewGraphicModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _property_view_graphic_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./property-view-graphic-routing.module */
      "./src/app/modules/ams/my-property/property-view-graphic/property-view-graphic-routing.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");
      /* harmony import */


      var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/ui/select/select.module */
      "./src/app/modules/ui/select/select.module.ts");
      /* harmony import */


      var _property_view_graphic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./property-view-graphic.component */
      "./src/app/modules/ams/my-property/property-view-graphic/property-view-graphic.component.ts");

      var PropertyViewGraphicModule = function PropertyViewGraphicModule() {
        _classCallCheck(this, PropertyViewGraphicModule);
      };

      PropertyViewGraphicModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_property_view_graphic_component__WEBPACK_IMPORTED_MODULE_8__["PropertyViewGraphicComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_6__["CondoCardModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_7__["SelectModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_property_view_graphic_routing_module__WEBPACK_IMPORTED_MODULE_4__["routes"]), _property_view_graphic_routing_module__WEBPACK_IMPORTED_MODULE_4__["PropertyViewGraphicRoutingModule"]],
        bootstrap: [_property_view_graphic_component__WEBPACK_IMPORTED_MODULE_8__["PropertyViewGraphicComponent"]]
      })], PropertyViewGraphicModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-ams-my-property-property-view-graphic-property-view-graphic-module-es5.js.map