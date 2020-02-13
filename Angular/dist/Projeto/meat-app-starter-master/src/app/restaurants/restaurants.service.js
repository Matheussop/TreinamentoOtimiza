"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var app_api_1 = require("../app.api");
var RestaurantsService = /** @class */ (function () {
    function RestaurantsService(http) {
        this.http = http;
    }
    RestaurantsService.prototype.restaurants = function (search) {
        var params = undefined;
        if (search) {
            params = new http_1.HttpParams().append('q', search);
        }
        return this.http.get(app_api_1.MEAT_API + "/restaurants", { params: params });
    };
    RestaurantsService.prototype.restaurantById = function (id) {
        return this.http.get(app_api_1.MEAT_API + "/restaurants/" + id);
    };
    RestaurantsService.prototype.reviewsOfRestaurant = function (id) {
        return this.http.get(app_api_1.MEAT_API + "/restaurants/" + id + "/reviews");
    };
    RestaurantsService.prototype.menuOfRestaurant = function (id) {
        return this.http.get(app_api_1.MEAT_API + "/restaurants/" + id + "/menu");
    };
    RestaurantsService = __decorate([
        core_1.Injectable()
    ], RestaurantsService);
    return RestaurantsService;
}());
exports.RestaurantsService = RestaurantsService;
