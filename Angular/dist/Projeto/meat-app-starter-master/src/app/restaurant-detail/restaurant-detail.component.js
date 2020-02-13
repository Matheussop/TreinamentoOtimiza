"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var RestaurantDetailComponent = /** @class */ (function () {
    function RestaurantDetailComponent(restaurantsServices, route) {
        this.restaurantsServices = restaurantsServices;
        this.route = route;
    }
    RestaurantDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantsServices.restaurantById(this.route.snapshot.params['id'])
            .subscribe(function (restaurant) { return _this.restaurant = restaurant; });
    };
    RestaurantDetailComponent = __decorate([
        core_1.Component({
            selector: 'mt-restaurant-detail',
            templateUrl: './restaurant-detail.component.html'
        })
    ], RestaurantDetailComponent);
    return RestaurantDetailComponent;
}());
exports.RestaurantDetailComponent = RestaurantDetailComponent;
