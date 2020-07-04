function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <!-- <ion-icon name=\"arrow-back-outline\"></ion-icon> -->\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>MyFitMeals</ion-title>\n  </ion-toolbar>\n</ion-header>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/macronutriments/macronutriments.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/macronutriments/macronutriments.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMacronutrimentsMacronutrimentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-segment color = \"primary\" [(ngModel)] = \"yudsegment\">\n  <ion-segment-button value=\"proteins\">\n    \n    <ion-label>Protéines</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"carbs\">\n    <ion-label>Glucides</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"fats\">\n    <ion-label>Lipides</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<div [ngSwitch] = \"yudsegment\">\n  <ion-list *ngSwitchCase = \"'proteins'\">\n    <ion-item>\n\n      <ion-range [(ngModel)] = \"proteinsRange\" min=\"0\" max=\"800\" pin color=\"danger\">\n        <ion-icon slot=\"start\" size=\"small\" name=\"pizza-outline\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"fast-food-outline\"></ion-icon>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngSwitchCase = \"'carbs'\">\n    <ion-item>\n\n      <ion-range [(ngModel)] = \"carbsRange\" min=\"0\" max=\"800\" pin color=\"danger\">\n        <ion-icon slot=\"start\" size=\"small\" name=\"pizza-outline\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"fast-food-outline\"></ion-icon>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngSwitchCase = \"'fats'\">\n    <ion-item>\n\n      <ion-range [(ngModel)] = \"fatsRange\" min=\"0\" max=\"800\" pin color=\"danger\">\n        <ion-icon slot=\"start\" size=\"small\" name=\"pizza-outline\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"fast-food-outline\"></ion-icon>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n</div>";
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


    __webpack_exports__["default"] = "<app-header></app-header>\n<p>\n  {{getRecipe()?.name}}\n  {{getRecipe()?.calories}}\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipes/recipes.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipes/recipes.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRecipesRecipesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card class=\"myCard\" >\n  <div class =\"testOverlay\">\n    <ion-badge color=\"light\">{{recipe.calories}} cal</ion-badge>\n  </div>\n  <img src=\"{{getRecipeImage()}}\"  />\n  <ion-card-header>\n    <ion-card-title>{{recipe.name}}</ion-card-title>\n    <ion-card-subtitle>\n      <ion-icon name=\"star\" style = \"color: yellow; font-size: 16px;\"></ion-icon>\n      <ion-icon name=\"star\" style = \"color: yellow; font-size: 16px;\"></ion-icon>\n      <ion-icon name=\"star\" style = \"color: yellow; font-size: 16px;\"></ion-icon>\n      <ion-icon name=\"star\" style = \"color: yellow; font-size: 16px;\"></ion-icon>\n      <ion-icon name=\"star\" style = \"color: yellow; font-size: 16px;\"></ion-icon>\n      &nbsp;\n      <ion-icon name=\"alarm-outline\" style = \"color: red; font-size: 16px;\"></ion-icon> {{recipe.preparationTime}}min\n    </ion-card-subtitle>\n    \n  </ion-card-header>\n  <ion-card-content>\n    {{recipe.ingredients}}\n  </ion-card-content>\n</ion-card>";
    /***/
  },

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


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content>\n\n  <app-macronutriments></app-macronutriments>\n  <app-recipes *ngFor = \"let recipe of getRecipes()\" [recipe] = \"recipe\" [routerLink]=\"['./', recipe._id]\"></app-recipes>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./recipe/recipe.component */
    "./src/app/components/recipe/recipe.component.ts");
    /* harmony import */


    var _macronutriments_macronutriments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./macronutriments/macronutriments.component */
    "./src/app/components/macronutriments/macronutriments.component.ts");
    /* harmony import */


    var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./recipes/recipes.component */
    "./src/app/components/recipes/recipes.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/components/header/header.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
      declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__["RecipesComponent"], _macronutriments_macronutriments_component__WEBPACK_IMPORTED_MODULE_2__["MacronutrimentsComponent"], _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_1__["RecipeComponent"]],
      exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__["RecipesComponent"], _macronutriments_macronutriments_component__WEBPACK_IMPORTED_MODULE_2__["MacronutrimentsComponent"], _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_1__["RecipeComponent"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/header/header.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/macronutriments/macronutriments.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/macronutriments/macronutriments.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMacronutrimentsMacronutrimentsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFjcm9udXRyaW1lbnRzL21hY3JvbnV0cmltZW50cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/macronutriments/macronutriments.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/macronutriments/macronutriments.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MacronutrimentsComponent */

  /***/
  function srcAppComponentsMacronutrimentsMacronutrimentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MacronutrimentsComponent", function () {
      return MacronutrimentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MacronutrimentsComponent = /*#__PURE__*/function () {
      function MacronutrimentsComponent() {
        _classCallCheck(this, MacronutrimentsComponent);
      }

      _createClass(MacronutrimentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.yudsegment = "proteins";
          this.proteinsRange = "0";
          this.carbsRange = "0";
          this.fatsRange = "0";
        }
      }]);

      return MacronutrimentsComponent;
    }();

    MacronutrimentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-macronutriments',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./macronutriments.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/macronutriments/macronutriments.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./macronutriments.component.scss */
      "./src/app/components/macronutriments/macronutriments.component.scss"))["default"]]
    })], MacronutrimentsComponent);
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS5jb21wb25lbnQuc2NzcyJ9 */";
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


    var _services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/backend.service */
    "./src/app/services/backend.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RecipeComponent = /*#__PURE__*/function () {
      function RecipeComponent(activatedRoute, backendService) {
        _classCallCheck(this, RecipeComponent);

        this.activatedRoute = activatedRoute;
        this.backendService = backendService;
      }

      _createClass(RecipeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('recipeId')) {
              //redirect
              return;
            }

            _this.recipeId = paramMap.get('recipeId');
            console.log(_this.recipeId);

            _this.loadRecipe();
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
                    console.log(this.backendService.getRecipe());
                    this.recipe = this.backendService.getRecipe();

                  case 4:
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
      }]);

      return RecipeComponent;
    }();

    RecipeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]
      }];
    };

    RecipeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
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
  "./src/app/components/recipes/recipes.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/recipes/recipes.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRecipesRecipesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  margin: 10px 0;\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n  border-radius: 10%;\n}\n\n.myCard {\n  position: relative;\n}\n\n.myOverlay {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  opacity: 0.5;\n  background: #000;\n  color: #fff;\n}\n\n.testOverlay {\n  width: 100%;\n  position: absolute;\n  text-align: right;\n  padding-right: 10px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGVzL0M6XFxVc2Vyc1xcTm9hXFxEb2N1bWVudHNcXE15RGV2UHJvamVjdHNcXE15Rml0TWVhbHNcXE15Rml0TWVhbHMtSW9uaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlY2lwZXNcXHJlY2lwZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlcy9yZWNpcGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURHRTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBTjs7QURJRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGVzL3JlY2lwZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcblxyXG4gIGltZ3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICB9XHJcbiAgXHJcbiAgLm15Q2FyZHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAubXlPdmVybGF5e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICBcclxuICB9XHJcblxyXG4gIC50ZXN0T3ZlcmxheSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH0iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbi5teUNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5teU92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBib3R0b206IDBweDtcbiAgb3BhY2l0eTogMC41O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRlc3RPdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/recipes/recipes.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/recipes/recipes.component.ts ***!
    \*********************************************************/

  /*! exports provided: RecipesComponent */

  /***/
  function srcAppComponentsRecipesRecipesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesComponent", function () {
      return RecipesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/backend.service */
    "./src/app/services/backend.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var RecipesComponent = /*#__PURE__*/function () {
      function RecipesComponent(sanitizer, backendService) {
        _classCallCheck(this, RecipesComponent);

        this.sanitizer = sanitizer;
        this.backendService = backendService;
      }

      _createClass(RecipesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.getImage();
          this.getRecipeImage();
        }
        /*   getImage() {
            this.recipe.image.base64 = this.arrayBufferToBase64(this.recipe.image.data.data);
          }
        
          arrayBufferToBase64 = function(buffer) {
            var binary = '';
            var bytes = new Uint8Array(buffer);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            return window.btoa(binary);
          } */

      }, {
        key: "getRecipeImage",
        value: function getRecipeImage() {
          return this.backendService.getRecipeImage(this.recipe);
        }
      }]);

      return RecipesComponent;
    }();

    RecipesComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: _services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], RecipesComponent.prototype, "recipe", void 0);
    RecipesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-recipes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./recipes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipes/recipes.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./recipes.component.scss */
      "./src/app/components/recipes/recipes.component.scss"))["default"]]
    })], RecipesComponent);
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BackendService = /*#__PURE__*/function () {
      function BackendService(http, httpNative, plt, loadingCtrl) {
        _classCallCheck(this, BackendService);

        this.http = http;
        this.httpNative = httpNative;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
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
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall).pipe().toPromise();
        }
      }, {
        key: "getHelloWorld",
        value: function getHelloWorld() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log('Im here in service !');

                    if (!this.plt.is('cordova')) {
                      _context2.next = 6;
                      break;
                    }

                    _context2.next = 4;
                    return this.getHttpNative('https://myfitmeals.herokuapp.com/').then(function (data) {
                      console.log(data);
                      _this2.data = JSON.parse(data.data);
                    });

                  case 4:
                    _context2.next = 8;
                    break;

                  case 6:
                    _context2.next = 8;
                    return this.getHttp('https://myfitmeals.herokuapp.com/').then(function (data) {
                      console.log(data);
                      _this2.data = data;
                    });

                  case 8:
                    console.log(this.data);
                    return _context2.abrupt("return", this.data);

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!this.plt.is('cordova')) {
                      _context3.next = 5;
                      break;
                    }

                    _context3.next = 3;
                    return this.getHttpNative('https://myfitmeals.herokuapp.com/recipes').then(function (data) {
                      console.log(data);
                      _this3.recipes = JSON.parse(data.data);
                    });

                  case 3:
                    _context3.next = 7;
                    break;

                  case 5:
                    _context3.next = 7;
                    return this.getHttp('https://myfitmeals.herokuapp.com/recipes').then(function (data) {
                      console.log(data);
                      _this3.recipes = data;
                    });

                  case 7:
                    console.log(this.recipes);
                    return _context3.abrupt("return", this.recipes);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!this.plt.is('cordova')) {
                      _context4.next = 5;
                      break;
                    }

                    _context4.next = 3;
                    return this.getHttpNative('https://myfitmeals.herokuapp.com/recipes/' + recipeId).then(function (data) {
                      console.log(data);
                      _this4.recipe = JSON.parse(data.data);
                    });

                  case 3:
                    _context4.next = 7;
                    break;

                  case 5:
                    _context4.next = 7;
                    return this.getHttp('https://myfitmeals.herokuapp.com/recipes/' + recipeId).then(function (data) {
                      console.log(data);
                      _this4.recipe = data;
                    });

                  case 7:
                    console.log(this.recipe);
                    return _context4.abrupt("return", this.recipe);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getRecipe",
        value: function getRecipe() {
          return this.recipe;
        }
      }, {
        key: "getRecipeImage",
        value: function getRecipeImage(recipe) {
          return recipe.imageURL;
        }
      }]);

      return BackendService;
    }();

    BackendService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
      }];
    };

    BackendService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], BackendService);
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


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  margin: 10px 0;\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n  border-radius: 10%;\n}\n\n.myCard {\n  position: relative;\n}\n\n.myOverlay {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  opacity: 0.5;\n  background: #000;\n  color: #fff;\n}\n\n.testOverlay {\n  width: 100%;\n  position: absolute;\n  text-align: right;\n  padding-right: 10px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXE5vYVxcRG9jdW1lbnRzXFxNeURldlByb2plY3RzXFxNeUZpdE1lYWxzXFxNeUZpdE1lYWxzLUlvbmljL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0FDQ0o7O0FER0U7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQU47O0FESUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcblxyXG4gIGltZ3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICB9XHJcbiAgXHJcbiAgLm15Q2FyZHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAubXlPdmVybGF5e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICBcclxuICB9XHJcblxyXG4gIC50ZXN0T3ZlcmxheSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH0iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbi5teUNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5teU92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBib3R0b206IDBweDtcbiAgb3BhY2l0eTogMC41O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRlc3RPdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */";
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/backend.service */
    "./src/app/services/backend.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(backendService, loadingController) {
        _classCallCheck(this, Tab1Page);

        this.backendService = backendService;
        this.loadingController = loadingController;
      }

      _createClass(Tab1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Tab 1 entering Ion');
          this.loadRecipes();
          this.presentLoading();
        }
      }, {
        key: "getHelloWorld",
        value: function getHelloWorld() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.backendService.getHelloWorld();

                  case 2:
                    this.value = this.backendService.getData();
                    console.log('value : ');
                    console.log(this.value);

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "loadRecipes",
        value: function loadRecipes() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.backendService.loadRecipes();

                  case 2:
                    console.log(this.backendService.getRecipes());
                    this.recipes = this.backendService.getRecipes();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getRecipes",
        value: function getRecipes() {
          return this.recipes;
        }
      }, {
        key: "getValue",
        value: function getValue() {
          console.log(this.value);
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var loading, _yield$loading$onDidD, role, data;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.loadingController.create({
                      cssClass: 'my-custom-class',
                      message: 'Veuillez patienter..',
                      duration: 1000
                    });

                  case 2:
                    loading = _context7.sent;
                    _context7.next = 5;
                    return loading.present();

                  case 5:
                    _context7.next = 7;
                    return loading.onDidDismiss();

                  case 7:
                    _yield$loading$onDidD = _context7.sent;
                    role = _yield$loading$onDidD.role;
                    data = _yield$loading$onDidD.data;
                    console.log('Loading dismissed!');

                  case 11:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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