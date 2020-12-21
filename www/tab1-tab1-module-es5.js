function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content>\n  <ion-toolbar>\n    <ion-searchbar mode = \"ios\" color=\"danger\" showCancelButton=\"never\" (ionInput)=\"filterList($event)\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button id=\"changeText\"  (click) = \"presentPopover($event)\">\n        <ion-icon slot=\"start\" name=\"apps-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n \n\n<!--   <div class = \"recipesFilters\">\n\n    <ion-chip outline = \"true\" color = \"primary\" [ngStyle] = \"{'visibility': proteinFiltered? 'inherit':'hidden'}\">\n      <ion-label>P {{getProteins()}}</ion-label>\n    </ion-chip>\n\n    <ion-chip outline = \"true\" color = \"primary\" [ngStyle] = \"{'visibility': carbsFiltered? 'inherit':'hidden'}\">\n      <ion-label>G {{getCarbs()}}</ion-label>\n    </ion-chip>\n\n    <ion-chip outline = \"true\" color = \"primary\" [ngStyle] = \"{'visibility': fatsFiltered? 'inherit':'hidden'}\">\n      <ion-label>L {{getFats()}}</ion-label>\n    </ion-chip>\n\n    <ion-chip mode = \"ios\" color = \"danger\" (click) = \"presentPopover($event)\">\n      <ion-icon name=\"apps-outline\"></ion-icon>\n    </ion-chip>\n  </div> -->\n\n  <!-- <app-macronutriments></app-macronutriments> -->\n\n  <ion-list>\n    <ion-item class=\"eventItem\" *ngFor = \"let recipe of getRecipes()\" [id]=\"recipe.id\" lines=\"none\" >\n      <app-recipes [recipe] = \"recipe\" [routerLink]=\"['/recipes', recipe._id]\"></app-recipes>\n    </ion-item>\n  </ion-list>\n\n\n  \n<!--   <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\" [routerLink] = \"['/tabs/tab2']\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n\n\n\n<!--   <ion-fab horizontal=\"start\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\" (click) = \"presentPopover($event)\">\n      <ion-icon name=\"pizza-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n\n\n</ion-content>\n\n<ion-footer>\n  <div *ngIf = \"isAdmin()\">\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n      <ion-fab-button color=\"danger\" [routerLink] = \"['/add-recipe']\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/tab1/tab1-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab1/tab1-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab1PageRoutingModule */

  /***/
  function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
      return Tab1PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../components/recipe/recipe.component */
    "./src/app/components/recipe/recipe.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");

    var routes = [{
      path: '',
      component: _tab1_page__WEBPACK_IMPORTED_MODULE_4__["Tab1Page"]
    }, {
      path: ':recipeId',
      component: _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_1__["RecipeComponent"]
    }];

    var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
      _classCallCheck(this, Tab1PageRoutingModule);
    };

    Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], Tab1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tab1-routing.module */
    "./src/app/tab1/tab1-routing.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab1PageRoutingModule"]],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  margin: 10px 0;\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n  border-radius: 10%;\n}\n\n.myCard {\n  position: relative;\n}\n\n.myOverlay {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  opacity: 0.5;\n  background: #000;\n  color: #fff;\n}\n\n.testOverlay {\n  width: 100%;\n  position: absolute;\n  text-align: right;\n  padding-right: 10px;\n  padding-top: 10px;\n}\n\n.recipesFilters {\n  text-align: right;\n}\n\n.my-custom-class .popover-content {\n  background: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXE5vYVxcRG9jdW1lbnRzXFxNeURldlByb2plY3RzXFxNeUZpdE1lYWxzXFxNeUZpdE1lYWxzLUlvbmljL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0FDQ0o7O0FER0U7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQU47O0FESUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJRTtFQUVFLGlCQUFBO0FDRko7O0FES0U7RUFDRSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxuXHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIH1cclxuICBcclxuICAubXlDYXJke1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5teU92ZXJsYXl7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLnRlc3RPdmVybGF5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAucmVjaXBlc0ZpbHRlcnNcclxuICB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLm15LWN1c3RvbS1jbGFzcyAucG9wb3Zlci1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgfSIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuLm15Q2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm15T3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGJvdHRvbTogMHB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGVzdE92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5yZWNpcGVzRmlsdGVycyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubXktY3VzdG9tLWNsYXNzIC5wb3BvdmVyLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_macros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/macros.service */
    "./src/app/services/macros.service.ts");
    /* harmony import */


    var _services_recipes_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/recipes-loader.service */
    "./src/app/services/recipes-loader.service.ts");
    /* harmony import */


    var _components_macros_macros_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/macros/macros.component */
    "./src/app/components/macros/macros.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_backend_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../services/backend.service */
    "./src/app/services/backend.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(backendService, loadingController, popoverController, recipesLoder, router, macrosService, authService) {
        _classCallCheck(this, Tab1Page);

        this.backendService = backendService;
        this.loadingController = loadingController;
        this.popoverController = popoverController;
        this.recipesLoder = recipesLoder;
        this.router = router;
        this.macrosService = macrosService;
        this.authService = authService;
        this.proteinFiltered = false;
        this.carbsFiltered = false;
        this.fatsFiltered = false;
      }
      /*   ngOnInit() {
          console.log('Tab 1 entering Ion')
          this.loadRecipes().then(res =>
            {
              loading.then(loaded =>
                {
                  loaded.dismiss();
                })
            });
          let loading = this.presentLoading();
        } */


      _createClass(Tab1Page, [{
        key: "filterList",
        value: function filterList(evt) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var searchTerm;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //this.recipesLoder. = this.foodListBackup;
                    searchTerm = evt.srcElement.value;

                    if (!searchTerm) {
                      console.log('empty');
                      this.recipesLoder.loadRecipes();
                    } else this.recipesLoder.filterBySearch(searchTerm);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "loadRecipes",
        value: function loadRecipes() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    /*     await this.backendService.loadRecipes();
                        this.recipes = this.backendService.getRecipes(); */
                    this.recipesLoder.loadRecipes();

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getRecipes",
        value: function getRecipes() {
          return this.recipesLoder.getRecipes();
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingController.create({
                      cssClass: 'my-custom-class',
                      message: 'Veuillez patienter..'
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                    return _context3.abrupt("return", loading);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var popover;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.popoverController.create({
                      component: _components_macros_macros_component__WEBPACK_IMPORTED_MODULE_4__["MacrosComponent"],
                      cssClass: 'my-custom-class',
                      event: ev,
                      translucent: true
                    });

                  case 2:
                    popover = _context4.sent;
                    _context4.next = 5;
                    return popover.present();

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "goToRecipeDetails",
        value: function goToRecipeDetails(recipe) {
          this.router.navigate(['/recipes', recipe]);
        }
      }, {
        key: "getProteins",
        value: function getProteins() {
          if (this.macrosService.getProteins() === 0 || !this.macrosService.getProteins()) {
            this.proteinFiltered = false;
            return 0;
          } else {
            this.proteinFiltered = true;
            return this.macrosService.getProteins();
          }
        }
      }, {
        key: "getCarbs",
        value: function getCarbs() {
          if (this.macrosService.getCarbs() === 0 || !this.macrosService.getCarbs()) {
            this.carbsFiltered = false;
            return 0;
          } else {
            this.carbsFiltered = true;
            return this.macrosService.getCarbs();
          }
        }
      }, {
        key: "getFats",
        value: function getFats() {
          if (this.macrosService.getFats() === 0 || !this.macrosService.getFats()) {
            this.fatsFiltered = false;
            return 0;
          } else {
            this.fatsFiltered = true;
            return this.macrosService.getFats();
          }
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.authService.isAdmin();
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _services_backend_service__WEBPACK_IMPORTED_MODULE_7__["BackendService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]
      }, {
        type: _services_recipes_loader_service__WEBPACK_IMPORTED_MODULE_3__["RecipesLoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_macros_service__WEBPACK_IMPORTED_MODULE_2__["MacrosService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'app-tab1',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss"))["default"]]
    })], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map