"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var app_api_1 = require("../app.api");
var app_error_handler_1 = require("../app.error-handler");
var RestaurantsServices = /** @class */ (function () {
    function RestaurantsServices(http) {
        this.http = http;
    }
    RestaurantsServices.prototype.restaurants = function () {
        return this.http.get(app_api_1.MEAT_API + "/restaurants")
            .map(function (response) { return response.json(); })["catch"](app_error_handler_1.ErrorHandler.handleError);
    };
    RestaurantsServices.prototype.restaurantById = function (id) {
        return this.http.get(app_api_1.MEAT_API + "/restaurants/" + id)
            .map(function (response) { return response.json(); })["catch"](app_error_handler_1.ErrorHandler.handleError);
    };
    RestaurantsServices.prototype.reviewsOfRestaurant = function (id) {
        return this.http.get(app_api_1.MEAT_API + "/restaurants/" + id + "/reviews")
            .map(function (response) { return response.json(); })["catch"](app_error_handler_1.ErrorHandler.handleError);
    };
    RestaurantsServices = __decorate([
        core_1.Injectable()
    ], RestaurantsServices);
    return RestaurantsServices;
}());
exports.RestaurantsServices = RestaurantsServices;
