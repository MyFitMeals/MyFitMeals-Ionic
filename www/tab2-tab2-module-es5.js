function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Ajouter une recette\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Ajouter une recette</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<form [formGroup] = \"registerForm\">\n  <div>\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n      <ion-item>\n        <ion-label position = \"floating\">Nom recette</ion-label>\n        <ion-input type = \"text\" name = \"recipeName\" formControlName=\"name\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Calories</ion-label>\n        <ion-input type = \"number\" name = \"calories\" formControlName=\"calories\" ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Protéines</ion-label>\n        <ion-input type = \"number\" name = \"proteins\" formControlName=\"proteins\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Lipides</ion-label>\n        <ion-input type = \"number\" name = \"fats\" formControlName=\"fats\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Glucides</ion-label>\n        <ion-input type = \"number\" name = \"carbs\" formControlName=\"carbs\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Instructions</ion-label>\n        <ion-textarea type = \"text\" name = \"instructions\" formControlName=\"instructions\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Ingredients</ion-label>\n        <ion-textarea type = \"text\" name = \"ingredients\" formControlName=\"ingredients\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Temps de préparation</ion-label>\n        <ion-input type = \"number\" name = \"preparationTime\" formControlName=\"preparationTime\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Conseils</ion-label>\n        <ion-textarea type = \"text\" name = \"tips\" formControlName=\"tips\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type = \"file\" name = \"image\" (change) = \"selectImage($event)\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n  </div>\n  <br/>\n  <div>\n    <button type = \"submit\" (click) = \"onSubmit()\" style=\"font-size: 20px; margin-left: 10px;\">Ajouter recette</button>\n  </div>\n\n</form>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab2/tab2-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab2/tab2-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab2PageRoutingModule */

  /***/
  function srcAppTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
      return Tab2PageRoutingModule;
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


    var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");

    var routes = [{
      path: '',
      component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
    }];

    var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
      _classCallCheck(this, Tab2PageRoutingModule);
    };

    Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab2-routing.module */
    "./src/app/tab2/tab2-routing.module.ts");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var Tab2Page = /*#__PURE__*/function () {
      function Tab2Page(http) {
        _classCallCheck(this, Tab2Page);

        this.http = http;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          calories: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          proteins: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          fats: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          carbs: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          instructions: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          preparationTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          ingredients: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          tips: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
      }

      _createClass(Tab2Page, [{
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
            return console.log(res);
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return Tab2Page;
    }();

    Tab2Page.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-tab2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss"))["default"]]
    })], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map