(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-us-contact-us-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-us/contact-us.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-us/contact-us.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode = \"ios\" translucent>\n  <ion-toolbar mode = \"ios\" color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Nous contacter</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode = 'ios'>\n  <div class = \"sousHeader\">\n    <img src = \"../../../assets/niklas-rhose-FlmXvqlD-nI-unsplash-1@3x.png\">\n    <ion-button expand=\"block\" (click)=\"showPicker()\">Sélectionnez un sujet</ion-button>\n  </div>\n  \n  <div *ngIf = 'subjectSelected' class = 'subject'>\n    <ion-text color = 'primary'>\n      <h3>{{subject}}</h3>\n    </ion-text>\n  </div>\n\n\n  <form [formGroup]=\"contactUsForm\" (ngSubmit)=\"onSubmit()\" class = \"loginForm\">\n \n    <ion-item>\n      <ion-textarea type=\"text\" formControlName=\"message\" placeholder=\"Entrez plus d'informations ici...\"></ion-textarea>\n    </ion-item>\n \n    <div style = \"text-align: center; margin-top: 2em;\">\n      <ion-button  color=\"danger\" type=\"submit\" [disabled]=\"!contactUsForm.valid\">Envoyer</ion-button>\n    </div>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageRoutingModule", function() { return ContactUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/pages/contact-us/contact-us.page.ts");




const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_3__["ContactUsPage"]
    }
];
let ContactUsPageRoutingModule = class ContactUsPageRoutingModule {
};
ContactUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactUsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us-routing.module */ "./src/app/pages/contact-us/contact-us-routing.module.ts");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/pages/contact-us/contact-us.page.ts");







let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactUsPageRoutingModule"]
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]]
    })
], ContactUsPageModule);



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subject {\n  text-align: center;\n  padding-top: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC11cy9DOlxcVXNlcnNcXE5vYVxcRG9jdW1lbnRzXFxNeURldlByb2plY3RzXFxNeUZpdE1lYWxzXFxNeUZpdE1lYWxzLUlvbmljL3NyY1xcYXBwXFxwYWdlc1xcY29udGFjdC11c1xcY29udGFjdC11cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtFQUNBLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0LXVzL2NvbnRhY3QtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YmplY3Rcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xyXG59IiwiLnN1YmplY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.ts ***!
  \*****************************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let ContactUsPage = class ContactUsPage {
    constructor(pickerController, router, toast, formBuilder) {
        this.pickerController = pickerController;
        this.router = router;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.subjects = [
            "Problème de paiement",
            "Problème de compte",
            "Problème de recette"
        ];
        this.subjectSelected = false;
    }
    ngOnInit() {
        this.contactUsForm = this.formBuilder.group({
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    showPicker() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options = {
                buttons: [
                    {
                        text: "Annuler",
                        role: 'cancel'
                    },
                    {
                        text: 'Ok',
                        handler: (value) => {
                            this.subjectSelected = true;
                            this.subject = value.Subjects.text;
                            console.log(value);
                        }
                    }
                ],
                columns: [{
                        name: 'Subjects',
                        options: this.getColumnOptions()
                    }]
            };
            let picker = yield this.pickerController.create(options);
            picker.present().then(res => console.log(res));
        });
    }
    getColumnOptions() {
        let options = [];
        this.subjects.forEach(x => {
            options.push({ text: x, value: x });
        });
        return options;
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Votre message a bien été envoyé !',
                duration: 500,
                animated: true,
                mode: 'ios'
            });
            toast.present();
        });
    }
    onSubmit() {
        this.presentToast();
        this.router.navigate(['/tabs/tab1']);
    }
};
ContactUsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
ContactUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact-us',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-us/contact-us.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact-us.page.scss */ "./src/app/pages/contact-us/contact-us.page.scss")).default]
    })
], ContactUsPage);



/***/ })

}]);
//# sourceMappingURL=pages-contact-us-contact-us-module-es2015.js.map