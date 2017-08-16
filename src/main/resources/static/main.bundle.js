webpackJsonp([1,4],{

/***/ 344:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 344;


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(453);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/jaroslavgnatjuk/workout-notebook/src/main/frontend/src/main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(284);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.exercisesMap = [];
        this.selectedCategory = 'грудь';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getExercises().subscribe(function (result) {
            _this.exercises = result.json();
            console.log(result);
            _this.exercisesMap = _this.exerciseToMap(_this.exercises);
            _this.categories = Object.keys(_this.exercisesMap);
        });
        this.refreshFacts();
    };
    AppComponent.prototype.refreshFacts = function () {
        var _this = this;
        this.getExerciseFacts().subscribe(function (result) {
            _this.exerciseFacts = result.json();
            console.log(result);
        });
    };
    AppComponent.prototype.getExerciseById = function (id) {
        return this.exercises && this.exercises.filter(function (item) { return item.id === id; })[0];
    };
    AppComponent.prototype.exerciseToMap = function (exercises) {
        var exercisesMap = {};
        exercises.forEach(function (item) {
            if (!exercisesMap[item.category]) {
                exercisesMap[item.category] = [];
            }
            exercisesMap[item.category].push(item);
        });
        return exercisesMap;
    };
    AppComponent.prototype.getExercises = function () {
        return this.http.get('/api/exercises');
    };
    AppComponent.prototype.getExerciseFacts = function () {
        return this.http.get('/api/exercise-facts-today');
    };
    AppComponent.prototype.addExerciseFact = function (exerciseId, count, weight) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var exerciseFact = {
            exerciseId: exerciseId,
            count: count,
            weight: weight
        };
        var body = JSON.stringify(exerciseFact);
        this.http.post('/api/exercise-facts', body, options).subscribe(function (result) {
            console.log(result);
            _this.refreshFacts();
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(611),
            styles: [__webpack_require__(627)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/jaroslavgnatjuk/workout-notebook/src/main/frontend/src/app.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(452);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/jaroslavgnatjuk/workout-notebook/src/main/frontend/src/app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/jaroslavgnatjuk/workout-notebook/src/main/frontend/src/environment.js.map

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = "<div class=\"categories\">\n  <div *ngFor=\"let category of categories\">\n    {{category}}\n    <input name=\"category\" type=\"radio\" [value]=\"category\" [(ngModel)]=\"selectedCategory\">\n  </div>\n</div>\n\n<div class=\"select-exercise\">\n  <select [(ngModel)]=\"selectedExerciseId\">\n    <option *ngFor=\"let exercise of exercisesMap[selectedCategory]\" [value]=\"exercise.id\">{{exercise.title}}</option>\n  </select>\n</div>\n\n<div class=\"digits\">\n  к-во:\n  <input type=\"number\" [(ngModel)]=\"count\">\n  вес:\n  <input type=\"number\" [(ngModel)]=\"weight\">\n  <button (click)=\"addExerciseFact(selectedExerciseId, count, weight)\">\n    save\n  </button>\n</div>\n\n<div class=\"done\">\n  <table>\n    <tr *ngFor=\"let exercise of exerciseFacts\">\n      <td>{{getExerciseById(exercise?.exerciseId)?.title}}</td>\n      <td>{{exercise.count}}</td>\n      <td>{{exercise.weight}}</td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(345);


/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = ".categories, .digits {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.select-exercise {\n  width: 100%; }\n\n.done {\n  margin-top: 10px;\n  border-top: 1px solid gray; }\n"

/***/ })

},[624]);
//# sourceMappingURL=main.bundle.map