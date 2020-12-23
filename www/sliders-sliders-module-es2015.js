(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sliders-sliders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sliders/sliders.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sliders/sliders.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class = \"background\">\n  <ion-slides [options]=\"slideOpts\">\n    <ion-slide >\n      <img id = \"logo\" src = \"../../assets/icon final 2.png\" />\n      <ion-text color=\"danger\">\n        <h1>MyFitMeals</h1>\n      </ion-text>\n      <ion-text >\n        <p>- Accès complet et illimité à toutes les recettes MyFitMeals</p>\n        <p>- Accès complet et illimité à toutes les recettes MyFitMeals</p>\n        <p>- Nouvelles recettes chaque semaine !</p>\n      </ion-text>\n      \n\n      <ion-button  color = \"danger\" mode = \"ios\" fill = \"clear\" (click) = \"continue()\">Continuer <ion-icon name=\"arrow-forward\"></ion-icon>   \n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "./src/app/sliders/sliders-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sliders/sliders-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SlidersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidersPageRoutingModule", function() { return SlidersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sliders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sliders.page */ "./src/app/sliders/sliders.page.ts");




const routes = [
    {
        path: '',
        component: _sliders_page__WEBPACK_IMPORTED_MODULE_3__["SlidersPage"]
    }
];
let SlidersPageRoutingModule = class SlidersPageRoutingModule {
};
SlidersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SlidersPageRoutingModule);



/***/ }),

/***/ "./src/app/sliders/sliders.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sliders/sliders.module.ts ***!
  \*******************************************/
/*! exports provided: SlidersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidersPageModule", function() { return SlidersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sliders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sliders-routing.module */ "./src/app/sliders/sliders-routing.module.ts");
/* harmony import */ var _sliders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sliders.page */ "./src/app/sliders/sliders.page.ts");







let SlidersPageModule = class SlidersPageModule {
};
SlidersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sliders_routing_module__WEBPACK_IMPORTED_MODULE_5__["SlidersPageRoutingModule"]
        ],
        declarations: [_sliders_page__WEBPACK_IMPORTED_MODULE_6__["SlidersPage"]]
    })
], SlidersPageModule);



/***/ }),

/***/ "./src/app/sliders/sliders.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sliders/sliders.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Without setting height the slides will take up the height of the slide's content */\nion-slides {\n  height: 100%;\n}\nion-slide {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n#logo {\n  width: 30%;\n  text-align: center;\n}\n.background {\n  --background: #fff url('backgroundRegister.png') no-repeat center center / cover;\n}\np {\n  text-align: left;\n  margin: 10px 0;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGVycy9DOlxcVXNlcnNcXE5vYVxcRG9jdW1lbnRzXFxNeURldlByb2plY3RzXFxNeUZpdE1lYWxzXFxNeUZpdE1lYWxzLUlvbmljL3NyY1xcYXBwXFxzbGlkZXJzXFxzbGlkZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2xpZGVycy9zbGlkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBQTtBQUNBO0VBQ0ksWUFBQTtBQ0NKO0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FESUE7RUFFSSxVQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREtBO0VBRUksZ0ZBQUE7QUNISjtBRE1DO0VBQ0csZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlcnMvc2xpZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBXaXRob3V0IHNldHRpbmcgaGVpZ2h0IHRoZSBzbGlkZXMgd2lsbCB0YWtlIHVwIHRoZSBoZWlnaHQgb2YgdGhlIHNsaWRlJ3MgY29udGVudCAqL1xyXG5pb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG5pb24tc2xpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuXHJcblxyXG4jbG9nb1xyXG57XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZFxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKCcuLi8uLi9hc3NldHMvYmFja2dyb3VuZFJlZ2lzdGVyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuXHJcbiBwIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59IiwiLyogV2l0aG91dCBzZXR0aW5nIGhlaWdodCB0aGUgc2xpZGVzIHdpbGwgdGFrZSB1cCB0aGUgaGVpZ2h0IG9mIHRoZSBzbGlkZSdzIGNvbnRlbnQgKi9cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNsb2dvIHtcbiAgd2lkdGg6IDMwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja2dyb3VuZFJlZ2lzdGVyLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/sliders/sliders.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sliders/sliders.page.ts ***!
  \*****************************************/
/*! exports provided: SlidersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidersPage", function() { return SlidersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let SlidersPage = class SlidersPage {
    constructor(router) {
        this.router = router;
        // Optional parameters to pass to the swiper instance.
        // See http://idangero.us/swiper/api/ for valid options.
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() {
    }
    continue() {
        this.router.navigate(['register']);
    }
};
SlidersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SlidersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sliders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sliders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sliders/sliders.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sliders.page.scss */ "./src/app/sliders/sliders.page.scss")).default]
    })
], SlidersPage);



/***/ })

}]);
//# sourceMappingURL=sliders-sliders-module-es2015.js.map