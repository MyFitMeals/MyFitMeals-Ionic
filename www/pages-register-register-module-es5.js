function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode = \"ios\">\n  <ion-toolbar mode = \"ios\" color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Inscription</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- <ion-img [src]=\"item.src\"></ion-img> -->\n  <img src = \"../../../assets/niklas-rhose-FlmXvqlD-nI-unsplash-1@3x.png\" />\n\n  \n    <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmit()\" class = \"loginForm\">\n \n      <ion-item mode = \"ios\">\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n      </ion-item>\n   \n      <ion-item mode = \"ios\">\n        <ion-label position=\"floating\">Mot de passe</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n\n      <ion-item mode = \"ios\">\n        <ion-label position=\"floating\">Prénom</ion-label>\n        <ion-input type=\"text\" formControlName=\"firstName\"></ion-input>\n      </ion-item>\n\n      <ion-item mode = \"ios\">\n        <ion-label position=\"floating\">Nom</ion-label>\n        <ion-input type=\"text\" formControlName=\"lastName\"></ion-input>\n      </ion-item>\n   \n      <ion-button mode = \"ios\" expand=\"full\" color=\"danger\" type=\"submit\" [disabled]=\"!credentialsForm.valid\">Créer mon compte</ion-button>\n      <a mode = \"ios\" type=\"button\" [routerLink] = \"['/register']\">Me connecter</a>\n      <!-- <ion-button expand=\"full\" type=\"button\" (click)=\"register()\" [disabled]=\"!credentialsForm.valid\">Register</ion-button> -->\n   \n    </form>\n  \n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/register/register-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/register/register-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppPagesRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.module.ts ***!
    \***************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppPagesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/pages/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login {\n  background-image: url('niklas-rhose-FlmXvqlD-nI-unsplash-1@3x.png');\n  background-size: cover;\n  text-align: center;\n}\n\n.loginForm {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxOb2FcXERvY3VtZW50c1xcTXlEZXZQcm9qZWN0c1xcTXlGaXRNZWFsc1xcTXlGaXRNZWFscy1Jb25pYy9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLG1FQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBRUksa0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmxvZ2luXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL25pa2xhcy1yaG9zZS1GbG1YdnFsRC1uSS11bnNwbGFzaC0xQDN4LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luRm9ybVxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIubG9naW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbmlrbGFzLXJob3NlLUZsbVh2cWxELW5JLXVuc3BsYXNoLTFAM3gucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbkZvcm0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/register/register.page.ts ***!
    \*************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppPagesRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(formBuilder, authService) {
        _classCallCheck(this, RegisterPage);

        this.formBuilder = formBuilder;
        this.authService = authService;
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.credentialsForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this.authService.register(this.credentialsForm.value).subscribe(function (res) {
            // Call Login to automatically login the new user
            _this.authService.login(_this.credentialsForm.value).subscribe();
          });
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/pages/register/register.page.scss"))["default"]]
    })], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map