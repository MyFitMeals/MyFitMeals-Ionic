(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content padding class = \"background\">\n\n  <!-- <ion-img [src]=\"item.src\"></ion-img> -->\n  <!-- <img src = \"../../../assets/niklas-rhose-FlmXvqlD-nI-unsplash-1@3x.png\" /> -->\n\n  \n    <h1 id = \"logo\">MyFitMeals</h1>\n\n    <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmit()\" class = \"loginForm\">\n \n      <ion-item mode = \"ios\" color = \"transparent\">\n        <ion-label position=\"floating\" color = \"primary\">\n          <ion-icon name=\"person-circle-outline\" style = \"color: #FF4757;\"></ion-icon>\n          Email</ion-label>\n        <ion-input type=\"email\" formControlName=\"email\" color = \"primary\"></ion-input>\n      </ion-item>\n   \n      <ion-item mode = \"ios\" color = \"transparent\">\n        <ion-label position=\"floating\" color = \"primary\">\n          <ion-icon name=\"lock-closed-outline\" style = \"color: #FF4757;\"></ion-icon>\n          Mot de passe</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\" color = \"primary\"></ion-input>\n      </ion-item>\n\n      <ion-item mode = \"ios\" color = \"transparent\">\n        <ion-label position=\"floating\" color = \"primary\">\n          <ion-icon name=\"person-outline\" style = \"color: #FF4757;\"></ion-icon>\n          Prénom</ion-label>\n        <ion-input type=\"text\" formControlName=\"firstName\" color = \"primary\"></ion-input>\n      </ion-item>\n\n      <ion-item mode = \"ios\" color = \"transparent\">\n        <ion-label position=\"floating\" color = \"primary\">\n          <ion-icon name=\"person-outline\" style = \"color: #FF4757;\"></ion-icon>\n          Nom</ion-label>\n        <ion-input type=\"text\" formControlName=\"lastName\" color = \"primary\"></ion-input>\n      </ion-item>\n\n      <div class = \"loginButtons\">\n        <ion-button mode = \"ios\" id = \"logButton\" expand=\"block\" color=\"danger\" type=\"submit\" >Créer mon compte</ion-button>\n        <a mode = \"ios\" type=\"button\" [routerLink] = \"['/login']\" style = \"color: black\">Me connecter</a>\n      </div>\n   \n\n      <!-- <ion-button expand=\"full\" type=\"button\" (click)=\"register()\" [disabled]=\"!credentialsForm.valid\">Register</ion-button> -->\n   \n    </form>\n  \n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/register/register-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  --background: #fff url('backgroundRegister.png') no-repeat center center / cover;\n}\n\n.loginForm {\n  text-align: center;\n  padding: 0.7em;\n  margin-top: 2em;\n}\n\n.loginButtons {\n  margin-top: 3em;\n}\n\n.loginButtons #logButton {\n  margin-bottom: 1em;\n}\n\n#logo {\n  margin-top: 5em;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxOb2FcXERvY3VtZW50c1xcTXlEZXZQcm9qZWN0c1xcTXlGaXRNZWFsc1xcTXlGaXRNZWFscy1Jb25pYy9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdJLGdGQUFBO0FDSEo7O0FETUE7RUFFSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSko7O0FEUUE7RUFFSSxlQUFBO0FDTko7O0FEU0E7RUFDSSxrQkFBQTtBQ05KOztBRFNBO0VBRUksZUFBQTtFQUVBLGtCQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5iYWNrZ3JvdW5kXHJcbntcclxuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZC5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kUmVnaXN0ZXIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxufVxyXG5cclxuLmxvZ2luRm9ybVxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjdlbTtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuXHJcbn1cclxuXHJcbi5sb2dpbkJ1dHRvbnNcclxue1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG59XHJcblxyXG4ubG9naW5CdXR0b25zICNsb2dCdXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4jbG9nb1xyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn0iLCIuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZFJlZ2lzdGVyLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuXG4ubG9naW5Gb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjdlbTtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG4ubG9naW5CdXR0b25zIHtcbiAgbWFyZ2luLXRvcDogM2VtO1xufVxuXG4ubG9naW5CdXR0b25zICNsb2dCdXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbiNsb2dvIHtcbiAgbWFyZ2luLXRvcDogNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




let RegisterPage = class RegisterPage {
    constructor(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
    }
    ngOnInit() {
        this.credentialsForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    onSubmit() {
        this.authService.register(this.credentialsForm.value).subscribe(res => {
            // Call Login to automatically login the new user
            this.authService.login(this.credentialsForm.value).subscribe();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es2015.js.map