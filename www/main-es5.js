function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe/recipe.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe/recipe.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRecipeRecipeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header-back></app-header-back>\n<ion-content>\n  <div class =\"testOverlay\">\n    <ion-badge mode =\"ios\" color=\"light\">\n      <ion-icon name=\"flame-outline\" style = \"color: red; font-size: 16px;\"></ion-icon>\n      {{getRecipe()?.calories}} cal</ion-badge>\n      <br>\n    <ion-badge mode =\"ios\" color=\"light\">\n      <ion-icon name=\"alarm-outline\" style = \"color: red; font-size: 16px;\"></ion-icon>\n            {{getRecipe()?.preparationTime}} min \n    </ion-badge>\n\n    <ion-fab horizontal=\"start\" vertical=\"bottom\" slot=\"fixed\">\n      <ion-fab-button color=\"warning\" (click) = \"favoriteRecipe()\" *ngIf = \"!isFavorite\">\n        <ion-icon name=\"star-outline\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button color=\"warning\" (click) = \"unfavoriteRecipe()\" *ngIf = \"isFavorite\">\n        <ion-icon name=\"star\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n  <div class = \"recipeImage\">\n    <ion-img [src] = \"getRecipe()?.imageURL\"></ion-img>\n  </div>\n  <div class = \"name\">\n    <span id = \"recipeName\">{{getRecipe()?.name}}</span>  \n  </div>\n\n  <div class = \"features\">\n    <ion-segment color = \"danger\" [(ngModel)] = \"featureSegment\" mode = \"ios\">\n      <ion-segment-button value=\"Ingredients\">\n        <ion-label>Ingredients</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"Instructions\">\n        <ion-label>Préparation</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"Conseils\">\n        <ion-label>Conseils</ion-label>\n      </ion-segment-button>\n\n<!--       <ion-segment-button value=\"Conseils\">\n        <ion-label>Conseils</ion-label>\n      </ion-segment-button> -->\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch] = \"featureSegment\">\n    <ion-list mode =\"ios\" *ngSwitchCase = \"'Ingredients'\" inset =\"true\">\n      <app-macros-recipe [recipe] = \"getRecipe()\"></app-macros-recipe>\n      \n        <ion-text color=\"primary\">\n          <h1>Ingrédients</h1>\n        </ion-text>\n      <ion-item class = 'instrucText' *ngFor = \"let element of splitIngredients()\" text-wrap>\n        -{{element}}\n      </ion-item>\n\n      <div *ngIf = \"isAdmin()\" style = \"text-align: center; margin-top: 2em;\">\n        <ion-button color = \"danger\" (click) = \"deleteRecipe()\">Supprimer recette</ion-button>\n      </div>\n      \n\n    </ion-list>\n  \n    <ion-list mode =\"ios\" *ngSwitchCase = \"'Instructions'\" inset =\"true\">\n      <app-macros-recipe [recipe] = \"getRecipe()\"></app-macros-recipe>\n      <ion-text color=\"primary\">\n        <h1>Instructions</h1>\n      </ion-text>\n      <ion-item class = 'instrucText' *ngFor = \"let element of splitInstructions()\" text-wrap>\n        -{{element}}\n      </ion-item>\n    </ion-list>\n\n    <ion-list mode =\"ios\" *ngSwitchCase = \"'Conseils'\" inset = \"true\">\n      <app-macros-recipe [recipe] = \"getRecipe()\"></app-macros-recipe>\n      <ion-text color=\"primary\">\n        <h1>Conseils</h1>\n      </ion-text>\n      <ng-container *ngIf=\"toSplit; else notSplit\">\n        <ion-item class = 'instrucText' *ngFor = \"let element of splitTips()\" text-wrap>\n          -{{element}}\n        </ion-item>\n      </ng-container>\n\n\n      <ng-template #notSplit>\n        <ion-item  class = 'instrucText' text-wrap>\n          -{{getRecipe().tips}}\n        </ion-item>\n      </ng-template>\n\n\n    </ion-list>\n<!--   \n    <ion-list *ngSwitchCase = \"'Conseils'\">\n      <app-macros-recipe [recipe] = \"getRecipe()\"></app-macros-recipe>\n      <ion-item class = 'instrucText' *ngFor = \"let element of splitTips()\" text-wrap>\n        -{{element}}\n      </ion-item>\n    </ion-list> -->\n  </div>\n  \n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/recipe/recipe.component */
    "./src/app/components/recipe/recipe.component.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'add-recipe',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | add-recipe-add-recipe-module */
        "add-recipe-add-recipe-module").then(__webpack_require__.bind(null,
        /*! ./add-recipe/add-recipe.module */
        "./src/app/add-recipe/add-recipe.module.ts")).then(function (m) {
          return m.AddRecipePageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'inside',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-inside-inside-module */
        "pages-inside-inside-module").then(__webpack_require__.bind(null,
        /*! ./pages/inside/inside.module */
        "./src/app/pages/inside/inside.module.ts")).then(function (m) {
          return m.InsidePageModule;
        });
      },
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    }, {
      path: 'recipes/:recipeId',
      component: _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_1__["RecipeComponent"]
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-register-register-module */
        "pages-register-register-module").then(__webpack_require__.bind(null,
        /*! ./pages/register/register.module */
        "./src/app/pages/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'contact-us',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-contact-us-contact-us-module */
        "pages-contact-us-contact-us-module").then(__webpack_require__.bind(null,
        /*! ./pages/contact-us/contact-us.module */
        "./src/app/pages/contact-us/contact-us.module.ts")).then(function (m) {
          return m.ContactUsPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, auth, router) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.auth = auth;
        this.router = router;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.auth.authenticationState.subscribe(function (state) {
              if (state) {
                _this.router.navigate(['tabs']);
              } else {
                _this.router.navigate(['login']);
              }
            });
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: jwtOptionsFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function () {
      return jwtOptionsFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");

    function jwtOptionsFactory(storage) {
      return {
        tokenGetter: function tokenGetter() {
          return storage.get('access_token');
        },
        allowedDomains: [_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host]
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"].forRoot(), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JwtModule"].forRoot({
        jwtOptionsProvider: {
          provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JWT_OPTIONS"],
          useFactory: jwtOptionsFactory,
          deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"]]
        }
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"]
      }, _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__["HTTP"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/recipe/recipe.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/recipe/recipe.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRecipeRecipeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#recipeName {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.name {\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.macronutriments {\n  width: 100%;\n  text-align: center;\n  padding: 2%;\n  margin-bottom: 1em;\n}\n\n#proteins {\n  float: left;\n}\n\n#carbs {\n  display: inline-block;\n  margin: 0 auto;\n}\n\n#fats {\n  float: right;\n}\n\n.macros {\n  border: pink;\n  /* border-width: thick; */\n  border-style: groove;\n  border-radius: 10%;\n  padding: 10px;\n}\n\n.macrosInfos {\n  font-size: 20px;\n  font-weight: bold;\n  color: red;\n}\n\n.myOverlay {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  opacity: 0.5;\n  background: #000;\n  color: #fff;\n}\n\n.testOverlay {\n  width: 100%;\n  position: absolute;\n  text-align: right;\n  padding-right: 10px;\n  padding-top: 10px;\n}\n\n.instrucText {\n  line-height: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGUvQzpcXFVzZXJzXFxOb2FcXERvY3VtZW50c1xcTXlEZXZQcm9qZWN0c1xcTXlGaXRNZWFsc1xcTXlGaXRNZWFscy1Jb25pYy9zcmNcXGFwcFxcY29tcG9uZW50c1xccmVjaXBlXFxyZWNpcGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBRUksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBRUksV0FBQTtBQ0hKOztBRE1BO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FDSko7O0FET0E7RUFFSSxZQUFBO0FDTEo7O0FEUUE7RUFFSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ05KOztBRFVBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ1JKOztBRFdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1JKOztBRFlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDVEY7O0FEWUE7RUFFSSxnQkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlY2lwZU5hbWVcclxue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5uYW1lXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLm1hY3JvbnV0cmltZW50c1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4jcHJvdGVpbnNcclxue1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNjYXJic1xyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuI2ZhdHNcclxue1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuXHJcbi5tYWNyb3Ncclxue1xyXG4gICAgYm9yZGVyOiBwaW5rO1xyXG4gICAgLyogYm9yZGVyLXdpZHRoOiB0aGljazsgKi9cclxuICAgIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgcGFkZGluZzogMTBweDsgXHJcbiAgICAvL2JvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsdWU7XHJcbn1cclxuXHJcbi5tYWNyb3NJbmZvc1xyXG57XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5teU92ZXJsYXl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG59XHJcblxyXG4udGVzdE92ZXJsYXkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaW5zdHJ1Y1RleHRcclxue1xyXG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcclxufSIsIiNyZWNpcGVOYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubWFjcm9udXRyaW1lbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMiU7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuI3Byb3RlaW5zIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbiNjYXJicyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbiNmYXRzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubWFjcm9zIHtcbiAgYm9yZGVyOiBwaW5rO1xuICAvKiBib3JkZXItd2lkdGg6IHRoaWNrOyAqL1xuICBib3JkZXItc3R5bGU6IGdyb292ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWFjcm9zSW5mb3Mge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmVkO1xufVxuXG4ubXlPdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgYm90dG9tOiAwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50ZXN0T3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmluc3RydWNUZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/recipe/recipe.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/recipe/recipe.component.ts ***!
    \*******************************************************/

  /*! exports provided: RecipeComponent */

  /***/
  function srcAppComponentsRecipeRecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeComponent", function () {
      return RecipeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_recipes_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/recipes-loader.service */
    "./src/app/services/recipes-loader.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/favorites.service */
    "./src/app/services/favorites.service.ts");
    /* harmony import */


    var _services_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/backend.service */
    "./src/app/services/backend.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var RecipeComponent = /*#__PURE__*/function () {
      function RecipeComponent(activatedRoute, backendService, loadingController, toastController, favoritesService, auth, router, recipeLoader) {
        _classCallCheck(this, RecipeComponent);

        this.activatedRoute = activatedRoute;
        this.backendService = backendService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.favoritesService = favoritesService;
        this.auth = auth;
        this.router = router;
        this.recipeLoader = recipeLoader;
      }

      _createClass(RecipeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('recipeId')) {
              //redirect
              return;
            }

            _this2.recipeId = paramMap.get('recipeId');
            console.log(_this2.recipeId);

            _this2.loadRecipe().then(function (res) {
              loading.then(function (loaded) {
                loaded.dismiss();
              });
              console.log(_this2.recipe);
              _this2.isFavorite = _this2.favoritesService.isFavorite(_this2.recipe);
              console.log(_this2.isFavorite);

              _this2.splitOrNot();

              _this2.featureSegment = "Ingredients";
            });

            var loading = _this2.presentLoading();
          });
        }
      }, {
        key: "loadRecipe",
        value: function loadRecipe() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.backendService.loadRecipeById(this.recipeId);

                  case 2:
                    this.recipe = this.backendService.getRecipe();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getRecipe",
        value: function getRecipe() {
          return this.recipe;
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      cssClass: 'my-custom-class',
                      message: 'Veuillez patienter..'
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    return _context2.abrupt("return", loading);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "favoriteRecipe",
        value: function favoriteRecipe() {
          this.isFavorite = true;
          this.addFavorite();
          this.presentToast('La recette ajoutée aux favoris avec succès !');
          console.log(this.favoritesService.getFavorites());
        }
      }, {
        key: "unfavoriteRecipe",
        value: function unfavoriteRecipe() {
          this.isFavorite = false;
          this.removeFavorite();
          this.presentToast('La recette retirée de vos favoris');
          console.log(this.favoritesService.getFavorites());
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: msg,
                      duration: 600,
                      mode: 'ios'
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "addFavorite",
        value: function addFavorite() {
          this.favoritesService.addFavorite(this.recipe);
        }
      }, {
        key: "removeFavorite",
        value: function removeFavorite() {
          this.favoritesService.removeFavorite(this.recipe);
        }
      }, {
        key: "splitIngredients",
        value: function splitIngredients() {
          var array = this.recipe.ingredients.split('-');
          array.shift();
          return array;
        }
      }, {
        key: "splitInstructions",
        value: function splitInstructions() {
          var array = this.recipe.instructions.split('-');
          array.shift();
          return array;
        }
      }, {
        key: "splitTips",
        value: function splitTips() {
          var array;
          array = this.recipe.tips.split('-');
          array.shift();
          return array;
        }
      }, {
        key: "splitOrNot",
        value: function splitOrNot() {
          if (this.recipe.tips.includes('-')) {
            this.toSplit = true;
          } else this.toSplit = false;
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.auth.isAdmin();
        }
      }, {
        key: "deleteRecipe",
        value: function deleteRecipe() {
          var _this3 = this;

          this.backendService.deleteRecipe(this.recipe).then(function (res) {
            _this3.recipeLoader.loadRecipes().then(function (resultat) {
              _this3.router.navigate(['/tabs/tab1']);

              _this3.presentToast('Recette supprimée avec succès !');
            });
          });
        }
      }]);

      return RecipeComponent;
    }();

    RecipeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
      }, {
        type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_recipes_loader_service__WEBPACK_IMPORTED_MODULE_1__["RecipesLoaderService"]
      }];
    };

    RecipeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-recipe',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./recipe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe/recipe.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./recipe.component.scss */
      "./src/app/components/recipe/recipe.component.scss"))["default"]]
    })], RecipeComponent);
    /***/
  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(auth) {
        _classCallCheck(this, AuthGuardService);

        this.auth = auth;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          return this.auth.isAuthenticated();
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");

    var TOKEN_KEY = 'access_token';

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, helper, storage, plt, alertController, httpNative, loadingCtrl) {
        var _this4 = this;

        _classCallCheck(this, AuthService);

        this.http = http;
        this.helper = helper;
        this.storage = storage;
        this.plt = plt;
        this.alertController = alertController;
        this.httpNative = httpNative;
        this.loadingCtrl = loadingCtrl;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
        this.user = null;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.plt.ready().then(function () {
          _this4.checkToken();
        });
      }

      _createClass(AuthService, [{
        key: "checkToken",
        value: function checkToken() {
          var _this5 = this;

          this.storage.get(TOKEN_KEY).then(function (token) {
            if (token) {
              console.log(token);
              _this5.token = token;

              var decoded = _this5.helper.decodeToken(token);

              var isExpired = _this5.helper.isTokenExpired(token);

              if (!isExpired) {
                _this5.user = decoded;

                _this5.authenticationState.next(true);
              } else {
                _this5.storage.remove(TOKEN_KEY);
              }
            }
          });
        }
      }, {
        key: "getToken",
        value: function getToken(token) {
          var splitted = token.split(':')[1];
          var spl2 = splitted.substring(1);
          console.log(spl2.substring(0, spl2.length - 3));
          return spl2.substring(0, spl2.length - 3);
        }
      }, {
        key: "register",
        value: function register(credentials) {
          var _this6 = this;

          return this.http.post("".concat(this.url, "/users/register"), credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (e) {
            _this6.showAlert(e.error.msg);

            throw new Error(e);
          }));
        }
        /*     if(this.plt.is('cordova')) {
              return this.postHttpNative(`${this.url}/users/register`, credentials).pipe(
                catchError(e => {
                  this.showAlert(e.error.msg);
                  throw new Error(e);
                })
              )
            }
        
            else {
              return this.postHttp(`${this.url}/users/register`, credentials).pipe(
                catchError(e => {
                  this.showAlert(e.error.msg);
                  throw new Error(e);
                })
              )
            }
          } */

      }, {
        key: "login",
        value: function login(credentials) {
          var _this7 = this;

          return this.http.post("".concat(this.url, "/users/login"), credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (res) {
            _this7.storage.set(TOKEN_KEY, res['token']);

            _this7.user = _this7.helper.decodeToken(res['token']);

            _this7.authenticationState.next(true);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (e) {
            _this7.showAlert(e.error.msg);

            throw new Error(e);
          }));
          /*       if(this.plt.is('cordova')) {
                  return this.postHttpNative(`${this.url}/users/login`, credentials).pipe(
                    tap(res => {
                      console.log(res);
                      console.log(JSON.parse(res.data));
                      this.token = JSON.parse(res.data)['token'];
                      this.storage.set(TOKEN_KEY, JSON.parse(res.data)['token']);
                      this.user = this.helper.decodeToken(JSON.parse(res.data)['token']);
                      this.authenticationState.next(true);
                    }),
                    catchError(e => {
                      console.log(e);
                      this.showAlert(e.error.msg);
                      throw new Error(e);
                    })
                  )
                }
            
                else {
                  return this.postHttp(`${this.url}/users/login`, credentials).pipe(
                    tap(res => {
                      console.log(res);
                      console.log(res['token'])
                      this.storage.set(TOKEN_KEY, res['token']);
                      this.user = this.helper.decodeToken(res['token']);
                      this.authenticationState.next(true);
                    }),
                    catchError(e => {
                      console.log(e);
                      this.showAlert(e.error.msg);
                      throw new Error(e);
                    })
                  )
                } */
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this8 = this;

          this.storage.remove(TOKEN_KEY).then(function () {
            _this8.authenticationState.next(false);
          });
        }
      }, {
        key: "getSpecialData",
        value: function getSpecialData() {
          var _this9 = this;

          return this.http.get("".concat(this.url, "/users/special")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (e) {
            var status = e.status;

            if (status === 401) {
              _this9.showAlert('You are not authorized for this!');

              _this9.logout();
            }

            throw new Error(e);
          }));
        }
      }, {
        key: "getInformations",
        value: function getInformations() {
          var _this10 = this;

          return this.http.get("".concat(this.url, "/users/informations")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (e) {
            var status = e.status;

            if (status === 401) {
              _this10.showAlert('You are not authorized for this!');

              _this10.logout();
            }

            throw new Error(e);
          }));
        }
      }, {
        key: "addRecipeToFavorites",
        value: function addRecipeToFavorites(recipe) {
          var _this11 = this;

          console.log('inside addRecipe Auth');
          console.log(recipe);
          return this.http.post("".concat(this.url, "/users/addRecipe"), recipe).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (e) {
            var status = e.status;
            console.log(status);

            if (status === 401) {
              _this11.showAlert('You are not authorized for this!');

              _this11.logout();
            }

            throw new Error(e);
          }));
        }
      }, {
        key: "removeRecipeFromFavorites",
        value: function removeRecipeFromFavorites(recipe) {
          var _this12 = this;

          return this.http.post("".concat(this.url, "/users/removeRecipe"), recipe).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (e) {
            var status = e.status;
            console.log(status);

            if (status === 401) {
              _this12.showAlert('You are not authorized for this!');

              _this12.logout();
            }

            throw new Error(e);
          }));
        }
      }, {
        key: "getAllRecipes",
        value: function getAllRecipes() {
          var _this13 = this;

          console.log('inside getAllRecipes');
          return this.http.get("".concat(this.url, "/users/recipes")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (e) {
            var status = e.status;

            if (status === 401) {
              _this13.showAlert('You are not authorized for this!');

              _this13.logout();
            }

            throw new Error(e);
          }));
        }
      }, {
        key: "loadFavorites",
        value: function loadFavorites() {
          var _this14 = this;

          return this.http.get("".concat(this.url, "/users/recipes")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (e) {
            var status = e.status;

            if (status === 401) {
              _this14.showAlert('You are not authorized for this!');

              _this14.logout();
            }

            throw new Error(e);
          }));
        }
      }, {
        key: "setFavorites",
        value: function setFavorites(favorites) {
          this.favorites = favorites;
        }
      }, {
        key: "getFavorites",
        value: function getFavorites() {
          console.log('INSIDE GET FAVORITES');
          console.log(this.favorites);
          console.log(this.favorites.recipes);
          return this.favorites.recipes;
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.authenticationState.value;
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.user.admin;
        }
      }, {
        key: "showAlert",
        value: function showAlert(msg) {
          var alert = this.alertController.create({
            message: msg,
            header: 'Error',
            buttons: ['OK']
          });
          alert.then(function (alert) {
            return alert.present();
          });
        }
      }, {
        key: "getHttp",
        value: function getHttp(ApiURL) {
          console.log('calling standard Http');
          return this.http.get(ApiURL);
        }
      }, {
        key: "getHttpNative",
        value: function getHttpNative(ApiURL) {
          console.log('Calling Native Http');
          console.log(this.token);
          var nativeCall = this.httpNative.get(ApiURL, {}, {
            'Content-Type': 'application/json',
            'auth': this.token
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(nativeCall).pipe();
        }
      }, {
        key: "postHttp",
        value: function postHttp(ApiURL, credentials) {
          console.log('calling standard POST Http');
          return this.http.post(ApiURL, credentials);
        }
      }, {
        key: "postHttpNative",
        value: function postHttpNative(ApiURL, credentials) {
          console.log('Calling Native POST Http');
          var nativeCall = this.httpNative.post(ApiURL, credentials, {
            'Content-Type': 'application/json'
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(nativeCall).pipe();
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtHelperService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__["HTTP"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/backend.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/backend.service.ts ***!
    \*********************************************/

  /*! exports provided: BackendService */

  /***/
  function srcAppServicesBackendServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendService", function () {
      return BackendService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BackendService = /*#__PURE__*/function () {
      function BackendService(http, httpNative, plt, loadingCtrl) {
        _classCallCheck(this, BackendService);

        this.http = http;
        this.httpNative = httpNative;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].heroku;
      }

      _createClass(BackendService, [{
        key: "getHttp",
        value: function getHttp(ApiURL) {
          console.log('calling standard Http');
          return this.http.get(ApiURL).toPromise();
        }
      }, {
        key: "getHttpNative",
        value: function getHttpNative(ApiURL) {
          console.log('Calling Native Http');
          var nativeCall = this.httpNative.get(ApiURL, {}, {
            'Content-Type': 'application/json'
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(nativeCall).pipe().toPromise();
        }
      }, {
        key: "deleteHttp",
        value: function deleteHttp(ApiURL) {
          console.log('calling standard Http');
          return this.http["delete"](ApiURL).toPromise();
        }
      }, {
        key: "deleteHttpNative",
        value: function deleteHttpNative(ApiURL) {
          console.log('Calling Native Http');
          var nativeCall = this.httpNative["delete"](ApiURL, {}, {
            'Content-Type': 'application/json'
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(nativeCall).pipe().toPromise();
        }
      }, {
        key: "getHelloWorld",
        value: function getHelloWorld() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this15 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log('Im here in service !');

                    if (!this.plt.is('cordova')) {
                      _context4.next = 6;
                      break;
                    }

                    _context4.next = 4;
                    return this.getHttpNative(this.url).then(function (data) {
                      console.log(data);
                      _this15.data = JSON.parse(data.data);
                    });

                  case 4:
                    _context4.next = 8;
                    break;

                  case 6:
                    _context4.next = 8;
                    return this.getHttp(this.url).then(function (data) {
                      console.log(data);
                      _this15.data = data;
                    });

                  case 8:
                    console.log(this.data);
                    return _context4.abrupt("return", this.data);

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getData",
        value: function getData() {
          console.log(this.data);
          return this.data;
        }
      }, {
        key: "loadRecipes",
        value: function loadRecipes() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this16 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!this.plt.is('cordova')) {
                      _context5.next = 5;
                      break;
                    }

                    _context5.next = 3;
                    return this.getHttpNative("".concat(this.url, "/recipes")).then(function (data) {
                      console.log(data);
                      _this16.recipes = JSON.parse(data.data);
                    });

                  case 3:
                    _context5.next = 7;
                    break;

                  case 5:
                    _context5.next = 7;
                    return this.getHttp("".concat(this.url, "/recipes")).then(function (data) {
                      console.log(data);
                      _this16.recipes = data;
                    });

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getRecipes",
        value: function getRecipes() {
          return this.recipes;
        }
      }, {
        key: "loadRecipeById",
        value: function loadRecipeById(recipeId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this17 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!this.plt.is('cordova')) {
                      _context6.next = 5;
                      break;
                    }

                    _context6.next = 3;
                    return this.getHttpNative("".concat(this.url, "/recipes/").concat(recipeId)).then(function (data) {
                      console.log(data);
                      _this17.recipe = JSON.parse(data.data);
                    });

                  case 3:
                    _context6.next = 7;
                    break;

                  case 5:
                    _context6.next = 7;
                    return this.getHttp("".concat(this.url, "/recipes/").concat(recipeId)).then(function (data) {
                      console.log(data);
                      _this17.recipe = data;
                    });

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getRecipe",
        value: function getRecipe() {
          return this.recipe;
        }
      }, {
        key: "loadFavorites",
        value: function loadFavorites() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this18 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!this.plt.is('cordova')) {
                      _context7.next = 5;
                      break;
                    }

                    _context7.next = 3;
                    return this.getHttpNative("".concat(this.url, "/users/recipes")).then(function (data) {
                      console.log(data);
                      _this18.favorites = JSON.parse(data.data);
                    });

                  case 3:
                    _context7.next = 7;
                    break;

                  case 5:
                    _context7.next = 7;
                    return this.getHttp("".concat(this.url, "/users/recipes")).then(function (data) {
                      console.log(data);
                      _this18.favorites = data;
                    });

                  case 7:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getFavorites",
        value: function getFavorites() {
          return this.favorites;
        }
      }, {
        key: "deleteRecipe",
        value: function deleteRecipe(recipe) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!this.plt.is('cordova')) {
                      _context8.next = 5;
                      break;
                    }

                    _context8.next = 3;
                    return this.deleteHttpNative("".concat(this.url, "/recipes/").concat(recipe._id)).then(function (data) {
                      console.log(data);
                    });

                  case 3:
                    _context8.next = 7;
                    break;

                  case 5:
                    _context8.next = 7;
                    return this.deleteHttp("".concat(this.url, "/recipes/").concat(recipe._id)).then(function (data) {
                      console.log(data);
                    });

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return BackendService;
    }();

    BackendService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    BackendService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], BackendService);
    /***/
  },

  /***/
  "./src/app/services/favorites.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/favorites.service.ts ***!
    \***********************************************/

  /*! exports provided: FavoritesService */

  /***/
  function srcAppServicesFavoritesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesService", function () {
      return FavoritesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FavoritesService = /*#__PURE__*/function () {
      function FavoritesService(authService) {
        _classCallCheck(this, FavoritesService);

        this.authService = authService;
        this.favorites = [];
        console.log('I am in favorites services');
      }

      _createClass(FavoritesService, [{
        key: "addFavorite",
        value: function addFavorite(recipe) {
          this.favorites.push(recipe);
          this.addRecipe(recipe);
        }
      }, {
        key: "removeFavorite",
        value: function removeFavorite(recipe) {
          this.favorites = this.favorites.filter(function (favorite) {
            if (favorite._id !== recipe._id) {
              return true;
            }
          });
          this.removeRecipe(recipe);
        }
      }, {
        key: "isFavorite",
        value: function isFavorite(recipe) {
          return this.containsRecipe(recipe);
        }
      }, {
        key: "containsRecipe",
        value: function containsRecipe(recipe) {
          var result = false;
          this.favorites.forEach(function (favorite) {
            console.log(favorite._id);
            console.log(recipe._id);

            if (favorite._id == recipe._id) {
              console.log('INSIDE TRUE');
              result = true;
            }
          });
          return result;
        }
      }, {
        key: "addRecipe",
        value: function addRecipe(recipe) {
          console.log(recipe);
          this.authService.addRecipeToFavorites(recipe).subscribe(function (res) {
            console.log(res);
          });
        }
      }, {
        key: "removeRecipe",
        value: function removeRecipe(recipe) {
          this.authService.removeRecipeFromFavorites(recipe).subscribe(function (res) {
            console.log(res);
          });
        }
      }, {
        key: "loadFavorites",
        value: function loadFavorites() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this19 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.authService.loadFavorites().subscribe(function (result) {
                      console.log(result);

                      _this19.authService.setFavorites(result);

                      _this19.favorites = _this19.authService.getFavorites();
                      console.log(_this19.favorites);
                    });

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "getFavorites",
        value: function getFavorites() {
          return this.favorites;
        }
      }]);

      return FavoritesService;
    }();

    FavoritesService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    FavoritesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], FavoritesService);
    /***/
  },

  /***/
  "./src/app/services/recipes-loader.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/recipes-loader.service.ts ***!
    \****************************************************/

  /*! exports provided: RecipesLoaderService */

  /***/
  function srcAppServicesRecipesLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesLoaderService", function () {
      return RecipesLoaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./backend.service */
    "./src/app/services/backend.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RecipesLoaderService = /*#__PURE__*/function () {
      function RecipesLoaderService(backendService) {
        _classCallCheck(this, RecipesLoaderService);

        this.backendService = backendService;
      }

      _createClass(RecipesLoaderService, [{
        key: "loadRecipes",
        value: function loadRecipes() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.backendService.loadRecipes();

                  case 2:
                    this.recipes = this.backendService.getRecipes();
                    console.log(this.recipes);

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "getRecipes",
        value: function getRecipes() {
          return this.recipes;
        }
      }, {
        key: "filterMacros",
        value: function filterMacros(proteins, fats, carbs) {
          var _this20 = this;

          this.loadRecipes().then(function (result) {
            _this20.recipes = _this20.recipes.filter(function (recipe) {
              return Math.abs(recipe.proteins - proteins) <= 10 && Math.abs(recipe.fats - fats) <= 10 && Math.abs(recipe.carbs - carbs) <= 10;
            });
            console.log(_this20.recipes);
          });
        }
      }]);

      return RecipesLoaderService;
    }();

    RecipesLoaderService.ctorParameters = function () {
      return [{
        type: _backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]
      }];
    };

    RecipesLoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], RecipesLoaderService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      url: 'https://myfitmeals.herokuapp.com',
      host: 'myfitmeals.herokuapp.com',
      heroku: 'https://myfitmeals.herokuapp.com'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http */
    "./node_modules/@ionic-native/http/index.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _ionic_native_http__WEBPACK_IMPORTED_MODULE_4__["HTTP"].getPluginRef = function () {
      return "cordova.plugin.http";
    };

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Noa\Documents\MyDevProjects\MyFitMeals\MyFitMeals-Ionic\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map