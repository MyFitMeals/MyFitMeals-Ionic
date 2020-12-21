function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-recipe-add-recipe-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-recipe/add-recipe.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-recipe/add-recipe.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddRecipeAddRecipePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Ajouter une recette</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup] = \"registerForm\">\n\n      <ion-item>\n        <ion-label position = \"floating\">Nom recette</ion-label>\n        <ion-input type = \"text\" name = \"recipeName\" formControlName=\"name\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Calories</ion-label>\n        <ion-input type = \"number\" name = \"calories\" formControlName=\"calories\" ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Protéines</ion-label>\n        <ion-input type = \"number\" name = \"proteins\" formControlName=\"proteins\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Lipides</ion-label>\n        <ion-input type = \"number\" name = \"fats\" formControlName=\"fats\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Glucides</ion-label>\n        <ion-input type = \"number\" name = \"carbs\" formControlName=\"carbs\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Instructions</ion-label>\n        <ion-textarea type = \"text\" name = \"instructions\" formControlName=\"instructions\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Ingredients</ion-label>\n        <ion-textarea type = \"text\" name = \"ingredients\" formControlName=\"ingredients\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Temps de préparation</ion-label>\n        <ion-input type = \"number\" name = \"preparationTime\" formControlName=\"preparationTime\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Conseils</ion-label>\n        <ion-textarea type = \"text\" name = \"tips\" formControlName=\"tips\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type = \"file\" name = \"image\" (change) = \"selectImage($event)\"></ion-input>\n      </ion-item>\n\n\n          <ion-button type = \"submit\" (click) = \"onSubmit()\" style=\"font-size: 20px; margin-left: 10px;\">Ajouter recette</ion-button>\n\n    </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/add-recipe/add-recipe-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/add-recipe/add-recipe-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddRecipePageRoutingModule */

  /***/
  function srcAppAddRecipeAddRecipeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRecipePageRoutingModule", function () {
      return AddRecipePageRoutingModule;
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


    var _add_recipe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-recipe.page */
    "./src/app/add-recipe/add-recipe.page.ts");

    var routes = [{
      path: '',
      component: _add_recipe_page__WEBPACK_IMPORTED_MODULE_3__["AddRecipePage"]
    }];

    var AddRecipePageRoutingModule = function AddRecipePageRoutingModule() {
      _classCallCheck(this, AddRecipePageRoutingModule);
    };

    AddRecipePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddRecipePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-recipe/add-recipe.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/add-recipe/add-recipe.module.ts ***!
    \*************************************************/

  /*! exports provided: AddRecipePageModule */

  /***/
  function srcAppAddRecipeAddRecipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRecipePageModule", function () {
      return AddRecipePageModule;
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


    var _add_recipe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-recipe-routing.module */
    "./src/app/add-recipe/add-recipe-routing.module.ts");
    /* harmony import */


    var _add_recipe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-recipe.page */
    "./src/app/add-recipe/add-recipe.page.ts");

    var AddRecipePageModule = function AddRecipePageModule() {
      _classCallCheck(this, AddRecipePageModule);
    };

    AddRecipePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _add_recipe_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddRecipePageRoutingModule"]],
      declarations: [_add_recipe_page__WEBPACK_IMPORTED_MODULE_6__["AddRecipePage"]]
    })], AddRecipePageModule);
    /***/
  },

  /***/
  "./src/app/add-recipe/add-recipe.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/add-recipe/add-recipe.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddRecipeAddRecipePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1yZWNpcGUvYWRkLXJlY2lwZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/add-recipe/add-recipe.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/add-recipe/add-recipe.page.ts ***!
    \***********************************************/

  /*! exports provided: AddRecipePage */

  /***/
  function srcAppAddRecipeAddRecipePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRecipePage", function () {
      return AddRecipePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_recipes_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/recipes-loader.service */
    "./src/app/services/recipes-loader.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AddRecipePage = /*#__PURE__*/function () {
      function AddRecipePage(http, popoverController, toastController, router, recipesLoader) {
        _classCallCheck(this, AddRecipePage);

        this.http = http;
        this.popoverController = popoverController;
        this.toastController = toastController;
        this.router = router;
        this.recipesLoader = recipesLoader;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          calories: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          proteins: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          fats: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          carbs: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          instructions: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          preparationTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          ingredients: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          tips: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
      }

      _createClass(AddRecipePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectImage",
        value: function selectImage(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.images = file;
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          var formData = new FormData();
          formData.append('file', this.images);
          formData.append('name', this.registerForm.value.name);
          formData.append('calories', this.registerForm.value.calories);
          formData.append('proteins', this.registerForm.value.proteins);
          formData.append('fats', this.registerForm.value.fats);
          formData.append('carbs', this.registerForm.value.carbs);
          formData.append('instructions', this.registerForm.value.instructions);
          formData.append('preparationTime', this.registerForm.value.preparationTime);
          formData.append('ingredients', this.registerForm.value.ingredients);
          formData.append('tips', this.registerForm.value.tips);
          this.http.post('https://myfitmeals.herokuapp.com/recipes/', formData).subscribe(function (res) {
            _this.presentToast('Recette ajoutée avec succès !');

            console.log(res);

            _this.recipesLoader.loadRecipes().then(function (result) {
              _this.router.navigate(['tabs/tab1']);
            });
          }, function (err) {
            console.log(err);

            _this.presentToast('Echec d\'ajout de la recette... !');
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: msg,
                      duration: 1000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AddRecipePage;
    }();

    AddRecipePage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_recipes_loader_service__WEBPACK_IMPORTED_MODULE_1__["RecipesLoaderService"]
      }];
    };

    AddRecipePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-add-recipe',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-recipe.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-recipe/add-recipe.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-recipe.page.scss */
      "./src/app/add-recipe/add-recipe.page.scss"))["default"]]
    })], AddRecipePage);
    /***/
  }
}]);
//# sourceMappingURL=add-recipe-add-recipe-module-es5.js.map