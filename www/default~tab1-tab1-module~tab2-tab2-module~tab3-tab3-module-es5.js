function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header-back/header-back.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header-back/header-back.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderBackHeaderBackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode = \"ios\" translucent>\n  <ion-toolbar mode = \"ios\" color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>MyFitMeals</ion-title>\n  </ion-toolbar>\n</ion-header>";
    /***/
  },

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


    __webpack_exports__["default"] = "<ion-header mode = \"ios\" translucent>\n  <ion-toolbar mode = \"ios\" color=\"danger\">\n\n    <ion-title>MyFitMeals</ion-title>\n  </ion-toolbar>\n</ion-header>";
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/macros-recipe/macros-recipe.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/macros-recipe/macros-recipe.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMacrosRecipeMacrosRecipeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-item mode =\"ios\" lines = \"none\">\n  <div class = \"macronutriments\">\n    <div id = \"proteins\" class = \"macros\">\n      \n      <span class = \"macrosInfos\">{{getRecipe()?.proteins}}g</span>\n      <br>\n      <span>Protéines</span>\n    </div>\n    <div id = \"carbs\" class = \"macros\">\n      <span class = \"macrosInfos\">{{getRecipe()?.carbs}}g</span>\n      <br>\n      <span>Glucides</span>\n    </div>\n\n    <div id = \"fats\" class = \"macros\">\n      <span class = \"macrosInfos\">{{getRecipe()?.fats}}g</span>\n      <br>\n      <span>Lipides</span>\n    </div>\n  </div>\n\n\n\n\n</ion-item>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/macros/macros.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/macros/macros.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMacrosMacrosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n\n  <ion-row>\n    <ion-col>\n      <ion-label position = \"floating\">Protéines</ion-label>\n      <ion-input type = \"number\" name = \"proteins\" (input)=\"setQuantity('proteins', $event.target.value)\"></ion-input>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-label position = \"floating\">Glucides</ion-label>\n      <ion-input type = \"number\" name = \"carbs\" (input)=\"setQuantity('carbs', $event.target.value)\"></ion-input>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-label position = \"floating\">Lipides</ion-label>\n      <ion-input type = \"number\" name = \"fats\" (input)=\"setQuantity('fats', $event.target.value)\"></ion-input>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row>\n    <ion-col>\n      <ion-button type = \"submit\" (click) = \"onSubmit()\" style=\"font-size: 20px; margin-left: 10px;\">Valider</ion-button>\n    </ion-col>\n\n    <ion-col>\n      <ion-button type = \"submit\" color = \"danger\" (click) = \"resetMacros()\">Reset</ion-button>\n    </ion-col>\n  </ion-row> -->\n\n  <form [formGroup]=\"macrosForm\" (ngSubmit)=\"onSubmit()\">\n \n    <ion-item mode = \"ios\">\n      <ion-label position=\"floating\">Protéines</ion-label>\n      <ion-input type = \"number\" name = \"proteins\" formControlName=\"proteins\" (input)=\"setQuantity('proteins', $event.target.value)\"></ion-input>\n    </ion-item>\n\n \n    <ion-item mode = \"ios\">\n      <ion-label position=\"floating\">Glucides</ion-label>\n      <ion-input type = \"number\" name = \"carbs\" formControlName=\"carbs\" (input)=\"setQuantity('carbs', $event.target.value)\"></ion-input>\n    </ion-item>\n\n    <ion-item mode = \"ios\">\n      <ion-label position=\"floating\">Lipides</ion-label>\n      <ion-input type = \"number\" name = \"fats\" formControlName=\"fats\" (input)=\"setQuantity('fats', $event.target.value)\"></ion-input>\n    </ion-item>\n \n    <ion-button mode = \"ios\" type = \"submit\" style=\"font-size: 20px; margin-left: 10px;\" [disabled]=\"!macrosForm.valid\">Valider</ion-button>\n    <ion-button mode = \"ios\" color = \"danger\" (click) = \"resetMacros()\">Reset</ion-button>\n\n  </form>\n";
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


    __webpack_exports__["default"] = "<ion-card mode = \"ios\" class=\"myCard\" >\n  <div class =\"testOverlay\">\n    <ion-badge mode =\"ios\" color=\"light\">\n      <ion-icon name=\"flame-outline\" style = \"color: red; font-size: 16px;\"></ion-icon>\n      {{recipe.calories}} cal</ion-badge>\n  </div>\n  <ion-img [src]=\"recipe.imageURL\"> </ion-img>\n  <ion-card-header>\n    <ion-card-title>{{recipe.name}}</ion-card-title>\n    <ion-card-subtitle>\n      <ion-icon name=\"star\" style = \"color: yellow; font-size: 16px;\"></ion-icon>\n      <ion-icon name=\"star\" style = \"color: yellow; font-size: 16px;\"></ion-icon>\n      <ion-icon name=\"star\" style = \"color: yellow; font-size: 16px;\"></ion-icon>\n      <ion-icon name=\"star\" style = \"color: yellow; font-size: 16px;\"></ion-icon>\n      <ion-icon name=\"star\" style = \"color: yellow; font-size: 16px;\"></ion-icon>\n      &nbsp;\n      <ion-icon name=\"alarm-outline\" style = \"color: red; font-size: 16px;\"></ion-icon> {{recipe.preparationTime}}min\n    </ion-card-subtitle>\n    \n  </ion-card-header>\n  <ion-card-content>\n    {{getRecipeIngredients(100)}}\n  </ion-card-content>\n</ion-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExploreContainerExploreContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>";
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


    var _macros_macros_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./macros/macros.component */
    "./src/app/components/macros/macros.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _macros_recipe_macros_recipe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./macros-recipe/macros-recipe.component */
    "./src/app/components/macros-recipe/macros-recipe.component.ts");
    /* harmony import */


    var _header_back_header_back_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header-back/header-back.component */
    "./src/app/components/header-back/header-back.component.ts");
    /* harmony import */


    var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./recipe/recipe.component */
    "./src/app/components/recipe/recipe.component.ts");
    /* harmony import */


    var _macronutriments_macronutriments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./macronutriments/macronutriments.component */
    "./src/app/components/macronutriments/macronutriments.component.ts");
    /* harmony import */


    var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./recipes/recipes.component */
    "./src/app/components/recipes/recipes.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/components/header/header.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
      declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _header_back_header_back_component__WEBPACK_IMPORTED_MODULE_4__["HeaderBackComponent"], _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__["RecipesComponent"], _macronutriments_macronutriments_component__WEBPACK_IMPORTED_MODULE_6__["MacronutrimentsComponent"], _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__["RecipeComponent"], _macros_recipe_macros_recipe_component__WEBPACK_IMPORTED_MODULE_3__["MacrosRecipeComponent"], _macros_macros_component__WEBPACK_IMPORTED_MODULE_1__["MacrosComponent"]],
      exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _header_back_header_back_component__WEBPACK_IMPORTED_MODULE_4__["HeaderBackComponent"], _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__["RecipesComponent"], _macronutriments_macronutriments_component__WEBPACK_IMPORTED_MODULE_6__["MacronutrimentsComponent"], _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__["RecipeComponent"], _macros_recipe_macros_recipe_component__WEBPACK_IMPORTED_MODULE_3__["MacrosRecipeComponent"], _macros_macros_component__WEBPACK_IMPORTED_MODULE_1__["MacrosComponent"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/header-back/header-back.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/header-back/header-back.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderBackHeaderBackComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#logoToolBar {\n  text-align: center;\n}\n\n#logo {\n  width: 50%;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXItYmFjay9DOlxcVXNlcnNcXE5vYVxcRG9jdW1lbnRzXFxNeURldlByb2plY3RzXFxNeUZpdE1lYWxzXFxNeUZpdE1lYWxzLUlvbmljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXItYmFja1xcaGVhZGVyLWJhY2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyLWJhY2svaGVhZGVyLWJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyLWJhY2svaGVhZGVyLWJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nb1Rvb2xCYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAjbG9nbyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgfSIsIiNsb2dvVG9vbEJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2xvZ28ge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/header-back/header-back.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/header-back/header-back.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HeaderBackComponent */

  /***/
  function srcAppComponentsHeaderBackHeaderBackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderBackComponent", function () {
      return HeaderBackComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderBackComponent = /*#__PURE__*/function () {
      function HeaderBackComponent() {
        _classCallCheck(this, HeaderBackComponent);
      }

      _createClass(HeaderBackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderBackComponent;
    }();

    HeaderBackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header-back',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header-back.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header-back/header-back.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./header-back.component.scss */
      "./src/app/components/header-back/header-back.component.scss"))["default"]]
    })], HeaderBackComponent);
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


    var _services_macros_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/macros.service */
    "./src/app/services/macros.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MacronutrimentsComponent = /*#__PURE__*/function () {
      function MacronutrimentsComponent(macrosService) {
        _classCallCheck(this, MacronutrimentsComponent);

        this.macrosService = macrosService;
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

    MacronutrimentsComponent.ctorParameters = function () {
      return [{
        type: _services_macros_service__WEBPACK_IMPORTED_MODULE_1__["MacrosService"]
      }];
    };

    MacronutrimentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
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
  "./src/app/components/macros-recipe/macros-recipe.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/macros-recipe/macros-recipe.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMacrosRecipeMacrosRecipeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".macronutriments {\n  width: 100%;\n  text-align: center;\n}\n\n#proteins {\n  float: left;\n}\n\n#carbs {\n  display: inline-block;\n  margin: 0 auto;\n}\n\n#fats {\n  float: right;\n}\n\n.macros {\n  border: pink;\n  /* border-width: thick; */\n  border-style: groove;\n  border-radius: 10%;\n  padding: 10px;\n}\n\n.macrosInfos {\n  font-size: 20px;\n  font-weight: bold;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWNyb3MtcmVjaXBlL0M6XFxVc2Vyc1xcTm9hXFxEb2N1bWVudHNcXE15RGV2UHJvamVjdHNcXE15Rml0TWVhbHNcXE15Rml0TWVhbHMtSW9uaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1hY3Jvcy1yZWNpcGVcXG1hY3Jvcy1yZWNpcGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFjcm9zLXJlY2lwZS9tYWNyb3MtcmVjaXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksV0FBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFFSSxXQUFBO0FDSEo7O0FETUE7RUFFSSxxQkFBQTtFQUNBLGNBQUE7QUNKSjs7QURPQTtFQUVJLFlBQUE7QUNMSjs7QURRQTtFQUVJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDTko7O0FEVUE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hY3Jvcy1yZWNpcGUvbWFjcm9zLXJlY2lwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLm1hY3JvbnV0cmltZW50c1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3Byb3RlaW5zXHJcbntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jY2FyYnNcclxue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbiNmYXRzXHJcbntcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG4ubWFjcm9zXHJcbntcclxuICAgIGJvcmRlcjogcGluaztcclxuICAgIC8qIGJvcmRlci13aWR0aDogdGhpY2s7ICovXHJcbiAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4gICAgLy9ib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibHVlO1xyXG59XHJcblxyXG4ubWFjcm9zSW5mb3Ncclxue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59IiwiLm1hY3JvbnV0cmltZW50cyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwcm90ZWlucyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4jY2FyYnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4jZmF0cyB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm1hY3JvcyB7XG4gIGJvcmRlcjogcGluaztcbiAgLyogYm9yZGVyLXdpZHRoOiB0aGljazsgKi9cbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1hY3Jvc0luZm9zIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/macros-recipe/macros-recipe.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/macros-recipe/macros-recipe.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MacrosRecipeComponent */

  /***/
  function srcAppComponentsMacrosRecipeMacrosRecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MacrosRecipeComponent", function () {
      return MacrosRecipeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MacrosRecipeComponent = /*#__PURE__*/function () {
      function MacrosRecipeComponent() {
        _classCallCheck(this, MacrosRecipeComponent);
      }

      _createClass(MacrosRecipeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getRecipe",
        value: function getRecipe() {
          return this.recipe;
        }
      }]);

      return MacrosRecipeComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MacrosRecipeComponent.prototype, "recipe", void 0);
    MacrosRecipeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-macros-recipe',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./macros-recipe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/macros-recipe/macros-recipe.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./macros-recipe.component.scss */
      "./src/app/components/macros-recipe/macros-recipe.component.scss"))["default"]]
    })], MacrosRecipeComponent);
    /***/
  },

  /***/
  "./src/app/components/macros/macros.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/macros/macros.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMacrosMacrosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFjcm9zL21hY3Jvcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/macros/macros.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/macros/macros.component.ts ***!
    \*******************************************************/

  /*! exports provided: MacrosComponent */

  /***/
  function srcAppComponentsMacrosMacrosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MacrosComponent", function () {
      return MacrosComponent;
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


    var _services_macros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/macros.service */
    "./src/app/services/macros.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var MacrosComponent = /*#__PURE__*/function () {
      function MacrosComponent(macroService, popOverController, formBuilder) {
        _classCallCheck(this, MacrosComponent);

        this.macroService = macroService;
        this.popOverController = popOverController;
        this.formBuilder = formBuilder;
      }

      _createClass(MacrosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.macrosForm = this.formBuilder.group({
            proteins: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            carbs: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            fats: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
          });
        }
      }, {
        key: "setQuantity",
        value: function setQuantity(macro, value) {
          if (macro === 'proteins') {
            this.proteins = value;
          }

          if (macro === 'carbs') {
            this.carbs = value;
          }

          if (macro === 'fats') {
            this.fats = value;
          }

          console.log(macro);
          console.log(value);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.macroService.applyMacros(this.proteins, this.fats, this.carbs);
          this.dismissPopover();
        }
      }, {
        key: "dismissPopover",
        value: function dismissPopover() {
          var _this = this;

          if (this.popOverController) {
            this.popOverController.dismiss().then(function () {
              _this.popOverController = null;
            });
          }
        }
      }, {
        key: "resetMacros",
        value: function resetMacros() {
          this.macroService.resetMacros();
        }
      }]);

      return MacrosComponent;
    }();

    MacrosComponent.ctorParameters = function () {
      return [{
        type: _services_macros_service__WEBPACK_IMPORTED_MODULE_2__["MacrosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    MacrosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-macros',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./macros.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/macros/macros.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./macros.component.scss */
      "./src/app/components/macros/macros.component.scss"))["default"]]
    })], MacrosComponent);
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


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  margin: 10px 0;\n}\n\nion-img {\n  width: 100%;\n  height: 100%;\n  border-radius: 20%;\n}\n\n.myCard {\n  position: relative;\n}\n\n.myOverlay {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  opacity: 0.5;\n  background: #000;\n  color: #fff;\n}\n\n.testOverlay {\n  width: 100%;\n  position: absolute;\n  text-align: right;\n  padding-right: 10px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGVzL0M6XFxVc2Vyc1xcTm9hXFxEb2N1bWVudHNcXE15RGV2UHJvamVjdHNcXE15Rml0TWVhbHNcXE15Rml0TWVhbHMtSW9uaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlY2lwZXNcXHJlY2lwZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlcy9yZWNpcGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURHRTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBTjs7QURJRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGVzL3JlY2lwZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcblxyXG4gIGlvbi1pbWd7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5teUNhcmR7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm15T3ZlcmxheXtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAudGVzdE92ZXJsYXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuaW9uLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbn1cblxuLm15Q2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm15T3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGJvdHRvbTogMHB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGVzdE92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */";
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
        value: function ngOnInit() {}
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
        key: "getRecipeIngredients",
        value: function getRecipeIngredients(limit) {
          return this.recipe.ingredients.substring(0, limit) + '...';
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
  "./src/app/explore-container/explore-container.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/explore-container/explore-container.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExploreContainerExploreContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvQzpcXFVzZXJzXFxOb2FcXERvY3VtZW50c1xcTXlEZXZQcm9qZWN0c1xcTXlGaXRNZWFsc1xcTXlGaXRNZWFscy1Jb25pYy9zcmNcXGFwcFxcZXhwbG9yZS1jb250YWluZXJcXGV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/explore-container/explore-container.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/explore-container/explore-container.component.ts ***!
    \******************************************************************/

  /*! exports provided: ExploreContainerComponent */

  /***/
  function srcAppExploreContainerExploreContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function () {
      return ExploreContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExploreContainerComponent = /*#__PURE__*/function () {
      function ExploreContainerComponent() {
        _classCallCheck(this, ExploreContainerComponent);
      }

      _createClass(ExploreContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExploreContainerComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ExploreContainerComponent.prototype, "name", void 0);
    ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-explore-container',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./explore-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./explore-container.component.scss */
      "./src/app/explore-container/explore-container.component.scss"))["default"]]
    })], ExploreContainerComponent);
    /***/
  },

  /***/
  "./src/app/explore-container/explore-container.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/explore-container/explore-container.module.ts ***!
    \***************************************************************/

  /*! exports provided: ExploreContainerComponentModule */

  /***/
  function srcAppExploreContainerExploreContainerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function () {
      return ExploreContainerComponentModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./explore-container.component */
    "./src/app/explore-container/explore-container.component.ts");

    var ExploreContainerComponentModule = function ExploreContainerComponentModule() {
      _classCallCheck(this, ExploreContainerComponentModule);
    };

    ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
      exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })], ExploreContainerComponentModule);
    /***/
  },

  /***/
  "./src/app/services/macros.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/macros.service.ts ***!
    \********************************************/

  /*! exports provided: MacrosService */

  /***/
  function srcAppServicesMacrosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MacrosService", function () {
      return MacrosService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _recipes_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./recipes-loader.service */
    "./src/app/services/recipes-loader.service.ts");
    /* harmony import */


    var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./backend.service */
    "./src/app/services/backend.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MacrosService = /*#__PURE__*/function () {
      function MacrosService(backendService, recipesLoader) {
        _classCallCheck(this, MacrosService);

        this.backendService = backendService;
        this.recipesLoader = recipesLoader;
      }

      _createClass(MacrosService, [{
        key: "getProteins",
        value: function getProteins() {
          return this.proteins;
        }
      }, {
        key: "getCarbs",
        value: function getCarbs() {
          return this.carbs;
        }
      }, {
        key: "getFats",
        value: function getFats() {
          return this.fats;
        }
      }, {
        key: "applyMacros",
        value: function applyMacros(proteins, fats, carbs) {
          this.proteins = proteins;
          this.fats = fats;
          this.carbs = carbs;
          this.recipesLoader.filterMacros(this.proteins, this.fats, this.carbs);
        }
      }, {
        key: "resetMacros",
        value: function resetMacros() {
          this.proteins = 0;
          this.fats = 0;
          this.carbs = 0;
          this.recipesLoader.loadRecipes();
        }
      }]);

      return MacrosService;
    }();

    MacrosService.ctorParameters = function () {
      return [{
        type: _backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]
      }, {
        type: _recipes_loader_service__WEBPACK_IMPORTED_MODULE_1__["RecipesLoaderService"]
      }];
    };

    MacrosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], MacrosService);
    /***/
  }
}]);
//# sourceMappingURL=default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module-es5.js.map