(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header appMainHeader></header>\n<main>\n  <form appSearchBox (submit)=\"search($event)\"></form>\n  <ul>\n    <li *ngFor=\"let hero of heroes\" appCardHero [hero]=\"hero\"></li>\n  </ul>\n</main>\n<footer></footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hero_hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/hero/hero.service */ "./src/app/services/hero/hero.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(hero) {
        this.hero = hero;
        this.heroes = [];
        this.search({ region_address: 'V' });
    }
    AppComponent.prototype.search = function (filters) {
        var _this = this;
        this.hero.get(filters).subscribe(function (e) { return _this.heroes = e; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'body[appMain]',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_hero_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/i18n/i18n.module */ "./src/app/i18n/i18n.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_services_mock_mock_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/mock/mock.service */ "./src/app/services/mock/mock.service.ts");
/* harmony import */ var src_app_services_hero_hero_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/hero/hero.service */ "./src/app/services/hero/hero.service.ts");











var AppModule = /** @class */ (function () {
    function AppModule(translate) {
        translate.setDefaultLang('pt');
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                src_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["InMemoryWebApiModule"].forRoot(src_app_services_mock_mock_service__WEBPACK_IMPORTED_MODULE_9__["MockService"], { passThruUnknownUrl: true }),
                src_app_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_7__["I18nModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            ],
            providers: [
                src_app_services_hero_hero_service__WEBPACK_IMPORTED_MODULE_10__["HeroService"],
            ],
            bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/i18n/i18n.module.ts":
/*!*************************************!*\
  !*** ./src/app/i18n/i18n.module.ts ***!
  \*************************************/
/*! exports provided: I18nModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nModule", function() { return I18nModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _loader_translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.translate */ "./src/app/i18n/loader.translate.ts");




var I18nModule = /** @class */ (function () {
    function I18nModule() {
    }
    I18nModule_1 = I18nModule;
    I18nModule.forRoot = function () {
        return {
            ngModule: I18nModule_1,
            providers: [],
        };
    };
    var I18nModule_1;
    I18nModule = I18nModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot({ loader: _loader_translate__WEBPACK_IMPORTED_MODULE_3__["loader"] })],
            exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
        })
    ], I18nModule);
    return I18nModule;
}());



/***/ }),

/***/ "./src/app/i18n/loader.translate.ts":
/*!******************************************!*\
  !*** ./src/app/i18n/loader.translate.ts ***!
  \******************************************/
/*! exports provided: loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loader", function() { return loader; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");



var loader = {
    useFactory: function (http) { return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__["TranslateHttpLoader"](http, './i18n/', '.json'); },
    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateLoader"],
    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
};


/***/ }),

/***/ "./src/app/services/hero/hero.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/hero/hero.service.ts ***!
  \***********************************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var HeroService = /** @class */ (function () {
    function HeroService(http) {
        this.http = http;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "heroes/";
    }
    HeroService.prototype.get = function (params, id) {
        if (id === void 0) { id = ''; }
        return this.http.get("" + this.URL + id, { params: params });
    };
    HeroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "./src/app/services/mock/mock.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/mock/mock.service.ts ***!
  \***********************************************/
/*! exports provided: MockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockService", function() { return MockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_data_payload_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/data/payload.json */ "./src/assets/data/payload.json");
var src_assets_data_payload_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/data/payload.json */ "./src/assets/data/payload.json", 1);



var MockService = /** @class */ (function () {
    function MockService() {
    }
    MockService.prototype.createDb = function () {
        return { heroes: src_assets_data_payload_json__WEBPACK_IMPORTED_MODULE_2__["lists"] };
    };
    MockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MockService);
    return MockService;
}());



/***/ }),

/***/ "./src/app/shared/components/card-hero/card-hero.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/card-hero/card-hero.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-hero__header\">\n  <figure>\n    <img [src]=\"hero.user?.image_url\">\n  </figure>\n  <div>\n    <h3>{{ hero.user?.first_name }}</h3>\n    <p>{{ hero.title | truncate : 16 : '...' }}</p>\n    <address>{{ hero.region_address }}</address>\n  </div>\n  <div>\n    <h4>\n      <sub>R$</sub>{{ hero.locale?.price }}\n    </h4>\n    <p>p/ noite</p>\n  </div>\n</div>\n<div class=\"card-hero__last-review\">\n  <blockquote>\n    <p>{{ hero.last_review?.body }}</p>\n  </blockquote>\n  <figure>\n    <img [src]=\"hero.last_review?.client_image_url\">\n  </figure>\n</div>\n<div class=\"card-hero__footer\">\n  <button>{{ 'app.cardHero.footer.call' | translate }} {{ hero.user?.first_name }}</button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/card-hero/card-hero.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/card-hero/card-hero.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 16px; }\n\n.card-hero__header,\n.card-hero__last-review,\n.card-hero__footer {\n  width: 100%;\n  display: flex; }\n\n.card-hero__header figure {\n  width: 64px;\n  height: 64px;\n  margin-right: 12px; }\n\n.card-hero__header h3 {\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 1.38;\n  color: rgba(0, 0, 0, 0.66); }\n\n.card-hero__header p {\n  font-size: 14px;\n  line-height: 1.38;\n  color: rgba(0, 0, 0, 0.42); }\n\n.card-hero__header address {\n  font-size: 12px;\n  line-height: 1.4;\n  color: rgba(0, 0, 0, 0.42); }\n\n.card-hero__last-review blockquote {\n  width: 88.5%;\n  padding: 14px 16px;\n  background-color: #f0f1f1;\n  border-radius: 5px;\n  margin-right: 10px;\n  font-size: 1rem;\n  font-style: italic;\n  line-height: 1.29;\n  position: relative;\n  color: rgba(0, 0, 0, 0.66); }\n\n.card-hero__last-review blockquote::after {\n    content: \"\";\n    width: 0;\n    height: 0;\n    border-color: #f0f1f1 transparent transparent;\n    border-width: 14px;\n    border-style: solid;\n    border-radius: 5px;\n    position: absolute;\n    right: -12px;\n    top: 0; }\n\n.card-hero__last-review figure {\n  width: 11.5%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content; }\n\nfigure {\n  overflow: hidden;\n  border-radius: 100%; }\n\nfigure img {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVybWFyY29zL2dpdC9kb2ctaGVyby9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhcmQtaGVyby9jYXJkLWhlcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFHZjs7O0VBR0UsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFHZjtFQUVJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBSnRCO0VBUUksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsMEJBQTBCLEVBQUE7O0FBWDlCO0VBZUksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQkFBMEIsRUFBQTs7QUFqQjlCO0VBcUJJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQTBCLEVBQUE7O0FBSTlCO0VBRUksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7O0FBWDlCO0lBY00sV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1QsNkNBQTZDO0lBQzdDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osTUFBTSxFQUFBOztBQXZCWjtFQTJCSSxZQUFZO0VBQ1osMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBRnJCO0lBS0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC1oZXJvL2NhcmQtaGVyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uY2FyZC1oZXJvX19oZWFkZXIsXG4uY2FyZC1oZXJvX19sYXN0LXJldmlldyxcbi5jYXJkLWhlcm9fX2Zvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2FyZC1oZXJvX19oZWFkZXIge1xuICBmaWd1cmUge1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjYpO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xuICB9XG5cbiAgYWRkcmVzcyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG4gIH1cbn1cblxuLmNhcmQtaGVyb19fbGFzdC1yZXZpZXcge1xuICBibG9ja3F1b3RlIHtcbiAgICB3aWR0aDogODguNSU7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYxZjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY2KTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIGJvcmRlci1jb2xvcjogI2YwZjFmMSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci13aWR0aDogMTRweDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogLTEycHg7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICB9XG4gIGZpZ3VyZSB7XG4gICAgd2lkdGg6IDExLjUlO1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIH1cbn1cblxuZmlndXJlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/card-hero/card-hero.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/card-hero/card-hero.component.ts ***!
  \********************************************************************/
/*! exports provided: CardHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHeroComponent", function() { return CardHeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardHeroComponent = /** @class */ (function () {
    function CardHeroComponent() {
        this.hero = {};
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardHeroComponent.prototype, "hero", void 0);
    CardHeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[appCardHero]',
            template: __webpack_require__(/*! ./card-hero.component.html */ "./src/app/shared/components/card-hero/card-hero.component.html"),
            styles: [__webpack_require__(/*! ./card-hero.component.scss */ "./src/app/shared/components/card-hero/card-hero.component.scss")]
        })
    ], CardHeroComponent);
    return CardHeroComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/main-header/main-header.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/main-header/main-header.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [ngClass]=\"{ open: open }\" [title]=\"'app.header.open' | translate\" (click)=\"toggle()\">\n  <span></span><span></span><span></span>\n</button>\n<img src=\"/images/group-5.png\" [alt]=\"'app.header.logo' | translate\" srcset=\"\">\n<nav [ngClass]=\"{ open: open }\">\n  <ul>\n    <li>\n      <a href=\"https://www.doghero.com.br/\" translate>app.header.menu.1</a>\n    </li>\n    <li>\n      <a href=\"https://www.doghero.com.br/busca\" translate>app.header.menu.1</a>\n    </li>\n    <li>\n      <a href=\"https://love.doghero.com.br/\" translate>app.header.menu.2</a>\n    </li>\n    <li>\n      <a href=\"https://store.doghero.com.br/\" translate>app.header.menu.3</a>\n    </li>\n    <li>\n      <a href=\"https://www.doghero.com.br/como-funciona\" translate>app.header.menu.4</a>\n    </li>\n    <li>\n      <a href=\"https://suporte.doghero.com.br/busca\" translate>app.header.menu.5</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/components/main-header/main-header.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/main-header/main-header.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  text-align: center;\n  position: relative; }\n\nbutton {\n  top: 16px;\n  left: 16px;\n  width: 25px;\n  height: 20px;\n  border: none;\n  background-color: transparent;\n  position: absolute;\n  transform: rotate(0deg);\n  transition: .5s ease-in-out;\n  cursor: pointer; }\n\nbutton.open span:nth-child(1) {\n    top: 50%;\n    transform: translateY(-50%) rotate(135deg); }\n\nbutton.open span:nth-child(2) {\n    opacity: 0;\n    left: -30px; }\n\nbutton.open span:nth-child(3) {\n    top: 50%;\n    transform: translateY(-50%) rotate(-135deg); }\n\nbutton span {\n    display: block;\n    position: absolute;\n    height: 3px;\n    width: 100%;\n    background: #333;\n    border-radius: 35%;\n    opacity: 1;\n    left: 0;\n    transform: rotate(0deg);\n    transition: .25s ease-in-out; }\n\nbutton span:nth-child(1) {\n      top: 0; }\n\nbutton span:nth-child(2) {\n      bottom: 50%;\n      transform: translateY(30%); }\n\nbutton span:nth-child(3) {\n      bottom: 0; }\n\nimg {\n  height: 37px;\n  margin-top: 9px; }\n\nnav {\n  position: fixed;\n  text-align: initial;\n  transform: translateX(-100%);\n  transition: .25s ease-in-out; }\n\nnav.open {\n    transform: translateX(0); }\n\nnav ul {\n    padding: 10px 16px; }\n\nnav li a {\n    padding: 10px 20px;\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVybWFyY29zL2dpdC9kb2ctaGVyby9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21haW4taGVhZGVyL21haW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLGVBQWUsRUFBQTs7QUFWakI7SUFlUSxRQUFRO0lBQ1IsMENBQTBDLEVBQUE7O0FBaEJsRDtJQW1CUSxVQUFVO0lBQ1YsV0FBVyxFQUFBOztBQXBCbkI7SUF1QlEsUUFBUTtJQUNSLDJDQUEyQyxFQUFBOztBQXhCbkQ7SUE4QkksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsNEJBQTRCLEVBQUE7O0FBdkNoQztNQTBDTSxNQUFNLEVBQUE7O0FBMUNaO01BOENNLFdBQVc7TUFDWCwwQkFBMEIsRUFBQTs7QUEvQ2hDO01BbURNLFNBQVMsRUFBQTs7QUFLZjtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsNEJBQTRCLEVBQUE7O0FBSjlCO0lBT0ksd0JBQXdCLEVBQUE7O0FBUDVCO0lBV0ksa0JBQWtCLEVBQUE7O0FBWHRCO0lBZ0JNLGtCQUFrQjtJQUNsQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmJ1dHRvbiB7XG4gIHRvcDogMTZweDtcbiAgbGVmdDogMTZweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJi5vcGVuIHtcbiAgICBzcGFuIHtcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTM1ZGVnKTtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgbGVmdDogLTMwcHg7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC0xMzVkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDM1JTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcblxuICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgIHRvcDogMDtcbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICBib3R0b206IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMCUpO1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAzN3B4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG59XG5cbm5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcblxuICAmLm9wZW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuXG4gIHVsIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIH1cblxuICBsaSB7XG4gICAgYSB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/main-header/main-header.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/main-header/main-header.component.ts ***!
  \************************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainHeaderComponent = /** @class */ (function () {
    function MainHeaderComponent() {
        this.open = false;
    }
    MainHeaderComponent.prototype.ngOnInit = function () { };
    MainHeaderComponent.prototype.toggle = function (force) {
        this.open = typeof force === 'boolean' ? force : !this.open;
    };
    MainHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header[appMainHeader]',
            template: __webpack_require__(/*! ./main-header.component.html */ "./src/app/shared/components/main-header/main-header.component.html"),
            styles: [__webpack_require__(/*! ./main-header.component.scss */ "./src/app/shared/components/main-header/main-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/search-box/search-box.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/search-box/search-box.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form__field\">\n  <label>\n    <i class=\"icon icon-location\"></i>\n    <input type=\"text\" [placeholder]=\"'app.searchBox.address' | translate\" [formControl]=\"address\">\n  </label>\n</div>\n\n<div class=\"form__group\">\n  <label>\n    <i class=\"icon icon-calendar\"></i>\n    <input type=\"date\" [placeholder]=\"'app.searchBox.startDate' | translate\" [formControl]=\"startDate\">\n  </label>\n  <label>\n    <i class=\"icon icon-calendar\"></i>\n    <input type=\"date\" [placeholder]=\"'app.searchBox.endDate' | translate\" [formControl]=\"endDate\">\n  </label>\n</div>\n\n<div class=\"form__buttons\">\n  <button type=\"button\" class=\"default\">\n    <i class=\"icon icon-filter\"></i>{{ 'app.searchBox.filters' | translate }}\n  </button>\n  <button type=\"button\" class=\"primary\" (click)=\"send()\">\n    <i class=\"icon icon-search\"></i>{{ 'app.searchBox.search' | translate }}\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/search-box/search-box.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/search-box/search-box.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 176px;\n  padding: 16px;\n  background-color: #525357; }\n\n.form__field {\n  display: flex; }\n\n.form__field label, .form__field input {\n    width: 100%;\n    display: flex;\n    align-items: center; }\n\n.form__buttons,\n.form__group {\n  display: flex;\n  margin-top: 8px;\n  margin-bottom: 16px;\n  justify-content: space-between; }\n\n.form__buttons label,\n  .form__group label {\n    flex-basis: 50%; }\n\n.form__buttons label:first-child,\n    .form__group label:first-child {\n      margin-right: .5px;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0; }\n\n.form__buttons label:last-child,\n    .form__group label:last-child {\n      margin-left: .5px;\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0; }\n\ninput {\n  color: #fff;\n  background-color: transparent; }\n\nlabel {\n  background-blend-mode: multiply;\n  background-color: rgba(0, 0, 0, 0.25); }\n\nlabel i {\n    color: #7f8185;\n    font-size: 24px; }\n\nbutton i {\n  margin-right: 8px;\n  font-size: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVybWFyY29zL2dpdC9kb2ctaGVyby9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsYUFBYSxFQUFBOztBQURmO0lBR0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUIsRUFBQTs7QUFJdkI7O0VBRUUsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUE7O0FBTGhDOztJQVFJLGVBQWUsRUFBQTs7QUFSbkI7O01BVU0sa0JBQWtCO01BQ2xCLDBCQUEwQjtNQUMxQiw2QkFBNkIsRUFBQTs7QUFabkM7O01BZU0saUJBQWlCO01BQ2pCLHlCQUF5QjtNQUN6Qiw0QkFBNEIsRUFBQTs7QUFLbEM7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsK0JBQStCO0VBQy9CLHFDQUFxQyxFQUFBOztBQUZ2QztJQUtJLGNBQWM7SUFDZCxlQUFlLEVBQUE7O0FBSW5CO0VBRUksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxNzZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTM1Nztcbn1cblxuLmZvcm1fX2ZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGFiZWwsIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cblxuLmZvcm1fX2J1dHRvbnMsXG4uZm9ybV9fZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBsYWJlbCB7XG4gICAgZmxleC1iYXNpczogNTAlO1xuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAuNXB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAuNXB4O1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG59XG5cbmlucHV0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5sYWJlbCB7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG5cbiAgaSB7XG4gICAgY29sb3I6ICM3ZjgxODU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5cbmJ1dHRvbiB7XG4gIGkge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/search-box/search-box.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/search-box/search-box.component.ts ***!
  \**********************************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent() {
        this.today = new Date();
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.startDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.today.toJSON().split('T')[0]);
        this.endDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.today.toJSON().split('T')[0]);
        this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    SearchBoxComponent.prototype.send = function () {
        var form = {};
        this.address.value && (form.region_address = "^" + this.address.value);
        this.submit.emit(form);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchBoxComponent.prototype, "submit", void 0);
    SearchBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'form[appSearchBox]',
            template: __webpack_require__(/*! ./search-box.component.html */ "./src/app/shared/components/search-box/search-box.component.html"),
            styles: [__webpack_require__(/*! ./search-box.component.scss */ "./src/app/shared/components/search-box/search-box.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _yellowspot_ng_truncate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @yellowspot/ng-truncate */ "./node_modules/@yellowspot/ng-truncate/fesm5/yellowspot-ng-truncate.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/main-header/main-header.component */ "./src/app/shared/components/main-header/main-header.component.ts");
/* harmony import */ var src_app_shared_components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/search-box/search-box.component */ "./src/app/shared/components/search-box/search-box.component.ts");
/* harmony import */ var src_app_shared_components_card_hero_card_hero_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/card-hero/card-hero.component */ "./src/app/shared/components/card-hero/card-hero.component.ts");









var shared = [
    src_app_shared_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_6__["MainHeaderComponent"],
    src_app_shared_components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_7__["SearchBoxComponent"],
    src_app_shared_components_card_hero_card_hero_component__WEBPACK_IMPORTED_MODULE_8__["CardHeroComponent"],
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [],
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: shared.slice(),
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _yellowspot_ng_truncate__WEBPACK_IMPORTED_MODULE_3__["TruncateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            ],
            exports: shared.slice(),
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/assets/data/payload.json":
/*!**************************************!*\
  !*** ./src/assets/data/payload.json ***!
  \**************************************/
/*! exports provided: lists, default */
/***/ (function(module) {

module.exports = {"lists":[{"availability_confirmed":true,"chopped_desc":"Os cachorros são sinceros, amorosos e confiáveis. O ser humano tem muito o que aprender com eles. Por isso gosto de receber esses seres maravilhosos em casa pra poder adquirir dele…","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165085,"is_superhero":false,"last_review":{"body":"Foi a melhor escolha q eu fiz!! O Zezinho foi super bem cuidado. Super recomendo!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Julia"},"locale":{"country":"bra","price":50,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":8,"title":"Find love here","user":{"first_name":"Thiago","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":false,"chopped_desc":"Olá! Temos o enorme prazer em cuidar do seu cão quando você precisar. Pode ser em qualquer dia da semana. Se...","highlights":[{"name":"loyal_customers","value":"2"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":false,"id":165000,"is_superhero":true,"last_review":{"body":"O Jeremiah foi super atencioso durante toda a estadia da Nina!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":65,"currency":"BRL"},"rating":0,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":0,"title":"Lar cheio de amor","user":{"first_name":"Jeremiah","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Temos o enorme prazer em cuidar do seu cão quando você precisar.","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165009,"is_superhero":true,"last_review":{"body":"A Lorena foi super atenciosa durante toda a estadia da Sushi!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":70,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":2,"title":"Amor para o seu pet","user":{"first_name":"Lorena","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Os cachorros são sinceros, amorosos e confiáveis. O ser humano tem muito o que aprender com eles. Por isso gosto de receber esses seres maravilhosos em casa pra poder adquirir dele…","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165085,"is_superhero":false,"last_review":{"body":"Foi a melhor escolha q eu fiz!! O Zezinho foi super bem cuidado. Super recomendo!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Julia"},"locale":{"country":"bra","price":50,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":8,"title":"Find love here","user":{"first_name":"Thiago","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":false,"chopped_desc":"Olá! Temos o enorme prazer em cuidar do seu cão quando você precisar. Pode ser em qualquer dia da semana. Se...","highlights":[{"name":"loyal_customers","value":"2"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":false,"id":165000,"is_superhero":true,"last_review":{"body":"O Jeremiah foi super atencioso durante toda a estadia da Nina!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":65,"currency":"BRL"},"rating":0,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":0,"title":"Lar cheio de amor","user":{"first_name":"Jeremiah","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Temos o enorme prazer em cuidar do seu cão quando você precisar.","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165009,"is_superhero":true,"last_review":{"body":"A Lorena foi super atenciosa durante toda a estadia da Sushi!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":70,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":2,"title":"Amor para o seu pet","user":{"first_name":"Lorena","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Os cachorros são sinceros, amorosos e confiáveis. O ser humano tem muito o que aprender com eles. Por isso gosto de receber esses seres maravilhosos em casa pra poder adquirir dele…","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165085,"is_superhero":false,"last_review":{"body":"Foi a melhor escolha q eu fiz!! O Zezinho foi super bem cuidado. Super recomendo!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Julia"},"locale":{"country":"bra","price":50,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":8,"title":"Find love here","user":{"first_name":"Thiago","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":false,"chopped_desc":"Olá! Temos o enorme prazer em cuidar do seu cão quando você precisar. Pode ser em qualquer dia da semana. Se...","highlights":[{"name":"loyal_customers","value":"2"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":false,"id":165000,"is_superhero":true,"last_review":{"body":"O Jeremiah foi super atencioso durante toda a estadia da Nina!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":65,"currency":"BRL"},"rating":0,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":0,"title":"Lar cheio de amor","user":{"first_name":"Jeremiah","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Temos o enorme prazer em cuidar do seu cão quando você precisar.","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165009,"is_superhero":true,"last_review":{"body":"A Lorena foi super atenciosa durante toda a estadia da Sushi!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":70,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":2,"title":"Amor para o seu pet","user":{"first_name":"Lorena","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Os cachorros são sinceros, amorosos e confiáveis. O ser humano tem muito o que aprender com eles. Por isso gosto de receber esses seres maravilhosos em casa pra poder adquirir dele…","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165085,"is_superhero":false,"last_review":{"body":"Foi a melhor escolha q eu fiz!! O Zezinho foi super bem cuidado. Super recomendo!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Julia"},"locale":{"country":"bra","price":50,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":8,"title":"Find love here","user":{"first_name":"Thiago","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":false,"chopped_desc":"Olá! Temos o enorme prazer em cuidar do seu cão quando você precisar. Pode ser em qualquer dia da semana. Se...","highlights":[{"name":"loyal_customers","value":"2"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":false,"id":165000,"is_superhero":true,"last_review":{"body":"O Jeremiah foi super atencioso durante toda a estadia da Nina!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":65,"currency":"BRL"},"rating":0,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":0,"title":"Lar cheio de amor","user":{"first_name":"Jeremiah","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Temos o enorme prazer em cuidar do seu cão quando você precisar.","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165009,"is_superhero":true,"last_review":{"body":"A Lorena foi super atenciosa durante toda a estadia da Sushi!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":70,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":2,"title":"Amor para o seu pet","user":{"first_name":"Lorena","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Os cachorros são sinceros, amorosos e confiáveis. O ser humano tem muito o que aprender com eles. Por isso gosto de receber esses seres maravilhosos em casa pra poder adquirir dele…","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165085,"is_superhero":false,"last_review":{"body":"Foi a melhor escolha q eu fiz!! O Zezinho foi super bem cuidado. Super recomendo!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Julia"},"locale":{"country":"bra","price":50,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":8,"title":"Find love here","user":{"first_name":"Thiago","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":false,"chopped_desc":"Olá! Temos o enorme prazer em cuidar do seu cão quando você precisar. Pode ser em qualquer dia da semana. Se...","highlights":[{"name":"loyal_customers","value":"2"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":false,"id":165000,"is_superhero":true,"last_review":{"body":"O Jeremiah foi super atencioso durante toda a estadia da Nina!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":65,"currency":"BRL"},"rating":0,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":0,"title":"Lar cheio de amor","user":{"first_name":"Jeremiah","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Temos o enorme prazer em cuidar do seu cão quando você precisar.","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165009,"is_superhero":true,"last_review":{"body":"A Lorena foi super atenciosa durante toda a estadia da Sushi!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":70,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":2,"title":"Amor para o seu pet","user":{"first_name":"Lorena","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Os cachorros são sinceros, amorosos e confiáveis. O ser humano tem muito o que aprender com eles. Por isso gosto de receber esses seres maravilhosos em casa pra poder adquirir dele…","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165085,"is_superhero":false,"last_review":{"body":"Foi a melhor escolha q eu fiz!! O Zezinho foi super bem cuidado. Super recomendo!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Julia"},"locale":{"country":"bra","price":50,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":8,"title":"Find love here","user":{"first_name":"Thiago","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":false,"chopped_desc":"Olá! Temos o enorme prazer em cuidar do seu cão quando você precisar. Pode ser em qualquer dia da semana. Se...","highlights":[{"name":"loyal_customers","value":"2"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":false,"id":165000,"is_superhero":true,"last_review":{"body":"O Jeremiah foi super atencioso durante toda a estadia da Nina!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":65,"currency":"BRL"},"rating":0,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":0,"title":"Lar cheio de amor","user":{"first_name":"Jeremiah","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Temos o enorme prazer em cuidar do seu cão quando você precisar.","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165009,"is_superhero":true,"last_review":{"body":"A Lorena foi super atenciosa durante toda a estadia da Sushi!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":70,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":2,"title":"Amor para o seu pet","user":{"first_name":"Lorena","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Os cachorros são sinceros, amorosos e confiáveis. O ser humano tem muito o que aprender com eles. Por isso gosto de receber esses seres maravilhosos em casa pra poder adquirir dele…","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165085,"is_superhero":false,"last_review":{"body":"Foi a melhor escolha q eu fiz!! O Zezinho foi super bem cuidado. Super recomendo!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Julia"},"locale":{"country":"bra","price":50,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":8,"title":"Find love here","user":{"first_name":"Thiago","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":false,"chopped_desc":"Olá! Temos o enorme prazer em cuidar do seu cão quando você precisar. Pode ser em qualquer dia da semana. Se...","highlights":[{"name":"loyal_customers","value":"2"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":false,"id":165000,"is_superhero":true,"last_review":{"body":"O Jeremiah foi super atencioso durante toda a estadia da Nina!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":65,"currency":"BRL"},"rating":0,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":0,"title":"Lar cheio de amor","user":{"first_name":"Jeremiah","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Temos o enorme prazer em cuidar do seu cão quando você precisar.","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165009,"is_superhero":true,"last_review":{"body":"A Lorena foi super atenciosa durante toda a estadia da Sushi!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":70,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":2,"title":"Amor para o seu pet","user":{"first_name":"Lorena","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Os cachorros são sinceros, amorosos e confiáveis. O ser humano tem muito o que aprender com eles. Por isso gosto de receber esses seres maravilhosos em casa pra poder adquirir dele…","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165085,"is_superhero":false,"last_review":{"body":"Foi a melhor escolha q eu fiz!! O Zezinho foi super bem cuidado. Super recomendo!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Julia"},"locale":{"country":"bra","price":50,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":8,"title":"Find love here","user":{"first_name":"Thiago","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":false,"chopped_desc":"Olá! Temos o enorme prazer em cuidar do seu cão quando você precisar. Pode ser em qualquer dia da semana. Se...","highlights":[{"name":"loyal_customers","value":"2"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":false,"id":165000,"is_superhero":true,"last_review":{"body":"O Jeremiah foi super atencioso durante toda a estadia da Nina!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":65,"currency":"BRL"},"rating":0,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":0,"title":"Lar cheio de amor","user":{"first_name":"Jeremiah","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Temos o enorme prazer em cuidar do seu cão quando você precisar.","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165009,"is_superhero":true,"last_review":{"body":"A Lorena foi super atenciosa durante toda a estadia da Sushi!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":70,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":2,"title":"Amor para o seu pet","user":{"first_name":"Lorena","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Os cachorros são sinceros, amorosos e confiáveis. O ser humano tem muito o que aprender com eles. Por isso gosto de receber esses seres maravilhosos em casa pra poder adquirir dele…","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165085,"is_superhero":false,"last_review":{"body":"Foi a melhor escolha q eu fiz!! O Zezinho foi super bem cuidado. Super recomendo!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Julia"},"locale":{"country":"bra","price":50,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":8,"title":"Find love here","user":{"first_name":"Thiago","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":false,"chopped_desc":"Olá! Temos o enorme prazer em cuidar do seu cão quando você precisar. Pode ser em qualquer dia da semana. Se...","highlights":[{"name":"loyal_customers","value":"2"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":false,"id":165000,"is_superhero":true,"last_review":{"body":"O Jeremiah foi super atencioso durante toda a estadia da Nina!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":65,"currency":"BRL"},"rating":0,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":0,"title":"Lar cheio de amor","user":{"first_name":"Jeremiah","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}},{"availability_confirmed":true,"chopped_desc":"Temos o enorme prazer em cuidar do seu cão quando você precisar.","highlights":[{"name":"loyal_customers","value":"4"},{"name":"room_type","value":"Apartment"},{"name":"supervision","value":null}],"favorite":true,"id":165009,"is_superhero":true,"last_review":{"body":"A Lorena foi super atenciosa durante toda a estadia da Sushi!","client_image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/2409131/DH_30102018170506576_1341.png?w=135&h=135","client_name":"Fábio"},"locale":{"country":"bra","price":70,"currency":"BRL"},"rating":5,"region_address":"Vila Mariana, São Paulo-SP","reviews_count":2,"title":"Amor para o seu pet","user":{"first_name":"Lorena","image_url":"https://media.doghero.com.br/i/doghero-uploads/uploads/photo/158365/531979_450544295021573_2024332009_n.jpg?w=135&h=135"}}]};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api_url: 'http://localhost:4200/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/codermarcos/git/dog-hero/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map