function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-us-contact-us-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-us/contact-us.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-us/contact-us.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContactUsContactUsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode = \"ios\" translucent>\n  <ion-toolbar mode = \"ios\" color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Nous contacter</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class = \"sousHeader\">\n    <img src = \"../../../assets/niklas-rhose-FlmXvqlD-nI-unsplash-1@3x.png\">\n    <ion-button expand=\"block\" (click)=\"showPicker()\">Sélectionnez un sujet</ion-button>\n  </div>\n\n  <form [formGroup]=\"contactUsForm\" (ngSubmit)=\"onSubmit()\" class = \"loginForm\">\n \n    <ion-item>\n      <ion-textarea type=\"text\" formControlName=\"message\" placeholder=\"Entrez plus d'informations ici...\"></ion-textarea>\n    </ion-item>\n \n    <div style = \"text-align: center; margin-top: 2em;\">\n      <ion-button  color=\"danger\" type=\"submit\" [disabled]=\"!contactUsForm.valid\">Envoyer</ion-button>\n    </div>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/contact-us/contact-us-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/contact-us/contact-us-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ContactUsPageRoutingModule */

  /***/
  function srcAppPagesContactUsContactUsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsPageRoutingModule", function () {
      return ContactUsPageRoutingModule;
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


    var _contact_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact-us.page */
    "./src/app/pages/contact-us/contact-us.page.ts");

    var routes = [{
      path: '',
      component: _contact_us_page__WEBPACK_IMPORTED_MODULE_3__["ContactUsPage"]
    }];

    var ContactUsPageRoutingModule = function ContactUsPageRoutingModule() {
      _classCallCheck(this, ContactUsPageRoutingModule);
    };

    ContactUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactUsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/contact-us/contact-us.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/contact-us/contact-us.module.ts ***!
    \*******************************************************/

  /*! exports provided: ContactUsPageModule */

  /***/
  function srcAppPagesContactUsContactUsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function () {
      return ContactUsPageModule;
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


    var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact-us-routing.module */
    "./src/app/pages/contact-us/contact-us-routing.module.ts");
    /* harmony import */


    var _contact_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact-us.page */
    "./src/app/pages/contact-us/contact-us.page.ts");

    var ContactUsPageModule = function ContactUsPageModule() {
      _classCallCheck(this, ContactUsPageModule);
    };

    ContactUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactUsPageRoutingModule"]],
      declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]]
    })], ContactUsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/contact-us/contact-us.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/contact-us/contact-us.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContactUsContactUsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/contact-us/contact-us.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/contact-us/contact-us.page.ts ***!
    \*****************************************************/

  /*! exports provided: ContactUsPage */

  /***/
  function srcAppPagesContactUsContactUsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsPage", function () {
      return ContactUsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ContactUsPage = /*#__PURE__*/function () {
      function ContactUsPage(pickerController, router, toast, formBuilder) {
        _classCallCheck(this, ContactUsPage);

        this.pickerController = pickerController;
        this.router = router;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.animals = ["Problème de paiement", "Problème de compte", "Problème de recette"];
      }

      _createClass(ContactUsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.contactUsForm = this.formBuilder.group({
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }
      }, {
        key: "showPicker",
        value: function showPicker() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var options, picker;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    options = {
                      buttons: [{
                        text: "Cancel",
                        role: 'cancel'
                      }, {
                        text: 'Ok',
                        handler: function handler(value) {
                          console.log(value);
                        }
                      }],
                      columns: [{
                        name: 'Animals',
                        options: this.getColumnOptions()
                      }]
                    };
                    _context.next = 3;
                    return this.pickerController.create(options);

                  case 3:
                    picker = _context.sent;
                    picker.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getColumnOptions",
        value: function getColumnOptions() {
          var options = [];
          this.animals.forEach(function (x) {
            options.push({
              text: x,
              value: x
            });
          });
          return options;
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toast.create({
                      message: 'Votre message a bien été envoyé !',
                      duration: 500,
                      animated: true,
                      mode: 'ios'
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.presentToast();
          this.router.navigate(['/tabs/tab1']);
        }
      }]);

      return ContactUsPage;
    }();

    ContactUsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };

    ContactUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-contact-us',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./contact-us.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-us/contact-us.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./contact-us.page.scss */
      "./src/app/pages/contact-us/contact-us.page.scss"))["default"]]
    })], ContactUsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-contact-us-contact-us-module-es5.js.map