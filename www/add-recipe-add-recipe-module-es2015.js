(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-recipe-add-recipe-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-recipe/add-recipe.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-recipe/add-recipe.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Ajouter une recette</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup] = \"registerForm\">\n\n      <ion-item>\n        <ion-label position = \"floating\">Nom recette</ion-label>\n        <ion-input type = \"text\" name = \"recipeName\" formControlName=\"name\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Calories</ion-label>\n        <ion-input type = \"number\" name = \"calories\" formControlName=\"calories\" ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Protéines</ion-label>\n        <ion-input type = \"number\" name = \"proteins\" formControlName=\"proteins\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Lipides</ion-label>\n        <ion-input type = \"number\" name = \"fats\" formControlName=\"fats\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Glucides</ion-label>\n        <ion-input type = \"number\" name = \"carbs\" formControlName=\"carbs\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Instructions</ion-label>\n        <ion-textarea type = \"text\" name = \"instructions\" formControlName=\"instructions\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Ingredients</ion-label>\n        <ion-textarea type = \"text\" name = \"ingredients\" formControlName=\"ingredients\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Temps de préparation</ion-label>\n        <ion-input type = \"number\" name = \"preparationTime\" formControlName=\"preparationTime\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"floating\">Conseils</ion-label>\n        <ion-textarea type = \"text\" name = \"tips\" formControlName=\"tips\"></ion-textarea>\n      </ion-item>\n\n      <ion-list>\n        <ion-radio-group\n        allow-empty-selection = \"true\"\n        name=\"radio-group\"\n        (ionChange)=\"radioGroupChange($event, 'Temperature')\">\n          <ion-list-header>\n            <ion-label>Plat...</ion-label>\n          </ion-list-header>\n      \n          <ion-item *ngFor = \"let temperature of getAllValuesEnum('Temperature')\">\n            <ion-label>{{temperature}}</ion-label>\n            <ion-radio slot=\"start\" [value]=\"getTemperature(temperature)\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n\n      <ion-list>\n        <ion-radio-group\n        allow-empty-selection = \"true\"\n        name=\"radio-group\"\n        (ionChange)=\"radioGroupChange($event, 'Type')\">\n        <ion-list-header>\n          <ion-label>Sucré/Salé</ion-label>\n        </ion-list-header>\n\n        <ion-item *ngFor = \"let type of getAllValuesEnum('Type')\">\n          <ion-label>{{type}}</ion-label>\n          <ion-radio slot=\"start\" [value]=\"getType(type)\"></ion-radio>\n        </ion-item>\n        </ion-radio-group>\n      </ion-list>\n\n\n      <ion-list>\n        <ion-radio-group\n        allow-empty-selection = \"true\"\n        name=\"radio-group\"\n        (ionChange)=\"radioGroupChange($event, 'Diet')\">\n        <ion-list-header>\n          <ion-label>Régime/Allergies</ion-label>\n        </ion-list-header>\n\n        <ion-item *ngFor = \"let diet of getAllValuesEnum('Diet')\">\n          <ion-label>{{diet}}</ion-label>\n          <ion-radio slot=\"start\" [value]=\"getDiet(diet)\"></ion-radio>\n        </ion-item>\n        </ion-radio-group>\n      </ion-list>\n\n      <ion-item>\n        <ion-input type = \"file\" name = \"image\" (change) = \"selectImage($event)\"></ion-input>\n      </ion-item>\n\n\n          <ion-button type = \"submit\" (click) = \"onSubmit()\" style=\"font-size: 20px; margin-left: 10px;\">Ajouter recette</ion-button>\n\n    </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/add-recipe/add-recipe-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/add-recipe/add-recipe-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddRecipePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipePageRoutingModule", function() { return AddRecipePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_recipe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-recipe.page */ "./src/app/add-recipe/add-recipe.page.ts");




const routes = [
    {
        path: '',
        component: _add_recipe_page__WEBPACK_IMPORTED_MODULE_3__["AddRecipePage"]
    }
];
let AddRecipePageRoutingModule = class AddRecipePageRoutingModule {
};
AddRecipePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddRecipePageRoutingModule);



/***/ }),

/***/ "./src/app/add-recipe/add-recipe.module.ts":
/*!*************************************************!*\
  !*** ./src/app/add-recipe/add-recipe.module.ts ***!
  \*************************************************/
/*! exports provided: AddRecipePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipePageModule", function() { return AddRecipePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_recipe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-recipe-routing.module */ "./src/app/add-recipe/add-recipe-routing.module.ts");
/* harmony import */ var _add_recipe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-recipe.page */ "./src/app/add-recipe/add-recipe.page.ts");







let AddRecipePageModule = class AddRecipePageModule {
};
AddRecipePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _add_recipe_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddRecipePageRoutingModule"]
        ],
        declarations: [_add_recipe_page__WEBPACK_IMPORTED_MODULE_6__["AddRecipePage"]]
    })
], AddRecipePageModule);



/***/ }),

/***/ "./src/app/add-recipe/add-recipe.page.scss":
/*!*************************************************!*\
  !*** ./src/app/add-recipe/add-recipe.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1yZWNpcGUvYWRkLXJlY2lwZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/add-recipe/add-recipe.page.ts":
/*!***********************************************!*\
  !*** ./src/app/add-recipe/add-recipe.page.ts ***!
  \***********************************************/
/*! exports provided: AddRecipePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipePage", function() { return AddRecipePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_diet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/diet */ "./src/app/models/diet.ts");
/* harmony import */ var _models_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/type */ "./src/app/models/type.ts");
/* harmony import */ var _services_recipes_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/recipes-loader.service */ "./src/app/services/recipes-loader.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_temperature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/temperature */ "./src/app/models/temperature.ts");










let AddRecipePage = class AddRecipePage {
    constructor(http, popoverController, toastController, router, recipesLoader) {
        this.http = http;
        this.popoverController = popoverController;
        this.toastController = toastController;
        this.router = router;
        this.recipesLoader = recipesLoader;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            calories: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            proteins: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            fats: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            carbs: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            instructions: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            preparationTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            ingredients: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            tips: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
        });
    }
    ngOnInit() {
    }
    selectImage(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.images = file;
        }
    }
    onSubmit() {
        const formData = new FormData();
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
        if (this.temperature != null && this.temperature != undefined) {
            formData.append('temperature', this.temperature);
        }
        if (this.type != null && this.type != undefined) {
            formData.append('type', this.type);
        }
        if (this.diet != null && this.diet != undefined) {
            formData.append('diet', this.diet);
        }
        this.http.post('https://myfitmeals.herokuapp.com/recipes/', formData).subscribe((res) => {
            this.presentToast('Recette ajoutée avec succès !');
            console.log(res);
            this.recipesLoader.loadRecipes().then(result => {
                this.router.navigate(['tabs/tab1']);
            });
        }, (err) => {
            console.log(err);
            this.presentToast('Echec d\'ajout de la recette... !');
        });
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 1000
            });
            toast.present();
        });
    }
    radioGroupChange(event, categorie) {
        console.log(event.detail);
        if ("Temperature" === categorie)
            this.temperature = event.detail.value;
        if ("Type" === categorie)
            this.type = event.detail.value;
        if ("Diet" === categorie)
            this.diet = event.detail.value;
    }
    getTemperature(value) {
        console.log(value);
        if ("Chaud" === value) {
            return src_app_models_temperature__WEBPACK_IMPORTED_MODULE_9__["Temperature"].CHAUD;
        }
        else if ("Froid" === value) {
            return src_app_models_temperature__WEBPACK_IMPORTED_MODULE_9__["Temperature"].FROID;
        }
    }
    getType(value) {
        console.log(value);
        if ("Sucré" === value) {
            return _models_type__WEBPACK_IMPORTED_MODULE_2__["Type"].SUCRE;
        }
        else if ("Salé" === value) {
            return _models_type__WEBPACK_IMPORTED_MODULE_2__["Type"].SALE;
        }
    }
    getDiet(value) {
        return _models_diet__WEBPACK_IMPORTED_MODULE_1__["Diet"].getValue(value);
    }
    getAllValuesEnum(value) {
        if (value === 'Type')
            return Object.values(_models_type__WEBPACK_IMPORTED_MODULE_2__["Type"]).slice(0, Object.values(_models_type__WEBPACK_IMPORTED_MODULE_2__["Type"]).length - 1);
        if (value === 'Diet')
            return Object.values(_models_diet__WEBPACK_IMPORTED_MODULE_1__["Diet"]).slice(0, Object.values(_models_diet__WEBPACK_IMPORTED_MODULE_1__["Diet"]).length - 1);
        if (value === 'Temperature')
            return Object.values(src_app_models_temperature__WEBPACK_IMPORTED_MODULE_9__["Temperature"]).slice(0, Object.values(src_app_models_temperature__WEBPACK_IMPORTED_MODULE_9__["Temperature"]).length - 1);
    }
};
AddRecipePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_recipes_loader_service__WEBPACK_IMPORTED_MODULE_3__["RecipesLoaderService"] }
];
AddRecipePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-recipe',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-recipe.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-recipe/add-recipe.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-recipe.page.scss */ "./src/app/add-recipe/add-recipe.page.scss")).default]
    })
], AddRecipePage);



/***/ }),

/***/ "./src/app/models/diet.ts":
/*!********************************!*\
  !*** ./src/app/models/diet.ts ***!
  \********************************/
/*! exports provided: Diet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diet", function() { return Diet; });
var Diet;
(function (Diet) {
    Diet["LOW_CARB"] = "Low Carb";
    Diet["VEGETARIAN"] = "V\u00E9g\u00E9tarien";
    Diet["GLUTEN_FREE"] = "Gluten Free";
})(Diet || (Diet = {}));
(function (Diet) {
    function getValue(value) {
        if ("Low Carb" === value)
            return Diet.LOW_CARB;
        if ("Végétarien" === value)
            return Diet.VEGETARIAN;
        if ("Gluten Free" === value)
            return Diet.GLUTEN_FREE;
    }
    Diet.getValue = getValue;
})(Diet || (Diet = {}));


/***/ }),

/***/ "./src/app/models/temperature.ts":
/*!***************************************!*\
  !*** ./src/app/models/temperature.ts ***!
  \***************************************/
/*! exports provided: Temperature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Temperature", function() { return Temperature; });
var Temperature;
(function (Temperature) {
    Temperature["CHAUD"] = "Chaud";
    Temperature["FROID"] = "Froid";
})(Temperature || (Temperature = {}));
(function (Temperature) {
    function getValue(value) {
        if ("Chaud" === value)
            return Temperature.CHAUD;
        if ("Froid" === value)
            return Temperature.FROID;
    }
    Temperature.getValue = getValue;
})(Temperature || (Temperature = {}));


/***/ }),

/***/ "./src/app/models/type.ts":
/*!********************************!*\
  !*** ./src/app/models/type.ts ***!
  \********************************/
/*! exports provided: Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
var Type;
(function (Type) {
    Type["SUCRE"] = "Sucr\u00E9";
    Type["SALE"] = "Sal\u00E9";
})(Type || (Type = {}));
(function (Type) {
    function getValue(value) {
        if ("Sucré" === value)
            return Type.SUCRE;
        if ("Salé" === value)
            return Type.SALE;
    }
    Type.getValue = getValue;
})(Type || (Type = {}));


/***/ })

}]);
//# sourceMappingURL=add-recipe-add-recipe-module-es2015.js.map