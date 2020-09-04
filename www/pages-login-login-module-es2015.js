(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content padding class=\"background\">\n\n  <!-- <ion-img [src]=\"item.src\"></ion-img> -->\n   <!-- <img src = \"../../../assets/niklas-rhose-FlmXvqlD-nI-unsplash-1@3x.png\" />  -->\n\n   <h1 id = \"logo\">MyFitMeals</h1>\n    <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmit()\" class = \"loginForm\">\n \n      <ion-item mode = \"ios\" color = \"transparent\">\n        <ion-label position=\"floating\" color = \"light\">\n          <ion-icon name=\"person-circle-outline\" style = \"color: #FF4757;\"></ion-icon>\n          Email</ion-label>\n        <ion-input type=\"email\" formControlName=\"email\" color = \"light\"></ion-input>\n      </ion-item>\n   \n      <ion-item mode = \"ios\" color = \"transparent\">\n        <ion-label position=\"floating\" color = \"light\">\n          <ion-icon name=\"lock-closed-outline\" style = \"color: #FF4757;\"></ion-icon>\n          Mot de passe</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\" color = \"light\"></ion-input>\n      </ion-item>\n   \n      <div class = \"loginButtons\">\n        <ion-button id = \"logButton\" mode = \"ios\" expand=\"block\" color=\"danger\" type=\"submit\">Me connecter</ion-button>\n        <a mode = \"ios\" type=\"button\" [routerLink] = \"['/register']\" style = \"color: white\">Créer un compte</a>\n      </div>\n\n   \n    </form>\n\n  \n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ion-content {\n     --ion-background: url('../../../assets/background.png'); \n     --ion-background-color: #f5af19; \n} */\n.background {\n  --background: #fff url('background - Copy.png') no-repeat center center / cover;\n}\n.loginForm {\n  text-align: center;\n  padding: 0.7em;\n  margin-top: 2em;\n}\n.loginButtons {\n  margin-top: 3em;\n}\n.loginButtons #logButton {\n  margin-bottom: 1em;\n}\n#logo {\n  margin-top: 5em;\n  text-align: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxOb2FcXERvY3VtZW50c1xcTXlEZXZQcm9qZWN0c1xcTXlGaXRNZWFsc1xcTXlGaXRNZWFscy1Jb25pYy9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7O0dBQUE7QUFLQTtFQUdJLCtFQUFBO0FDSko7QURPQTtFQUVJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNMSjtBRFNBO0VBRUksZUFBQTtBQ1BKO0FEVUE7RUFDSSxrQkFBQTtBQ1BKO0FEVUE7RUFFSSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8qIGlvbi1jb250ZW50IHtcclxuICAgICAtLWlvbi1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZycpOyBcclxuICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVhZjE5OyBcclxufSAqL1xyXG5cclxuLmJhY2tncm91bmRcclxue1xyXG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmIHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmRcXCAtXFwgQ29weS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcblxyXG4ubG9naW5Gb3JtXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuN2VtO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG5cclxufVxyXG5cclxuLmxvZ2luQnV0dG9uc1xyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAzZW07XHJcbn1cclxuXHJcbi5sb2dpbkJ1dHRvbnMgI2xvZ0J1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbiNsb2dvXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDVlbTtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSIsIi8qIGlvbi1jb250ZW50IHtcbiAgICAgLS1pb24tYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZC5wbmcnKTsgXG4gICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNWFmMTk7IFxufSAqL1xuLmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQgLSBDb3B5LnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuXG4ubG9naW5Gb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjdlbTtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG4ubG9naW5CdXR0b25zIHtcbiAgbWFyZ2luLXRvcDogM2VtO1xufVxuXG4ubG9naW5CdXR0b25zICNsb2dCdXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbiNsb2dvIHtcbiAgbWFyZ2luLXRvcDogNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




let LoginPage = class LoginPage {
    constructor(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
    }
    ngOnInit() {
        this.credentialsForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    onSubmit() {
        console.log(this.credentialsForm.value);
        this.authService.login(this.credentialsForm.value).subscribe();
    }
    register() {
        this.authService.register(this.credentialsForm.value).subscribe(res => {
            // Call Login to automatically login the new user
            this.authService.login(this.credentialsForm.value).subscribe();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map