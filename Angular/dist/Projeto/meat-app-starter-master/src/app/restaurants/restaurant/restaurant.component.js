"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent() {
        this.restaurantState = 'ready';
    }
    RestaurantComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], RestaurantComponent.prototype, "restaurant");
    RestaurantComponent = __decorate([
        core_1.Component({
            selector: 'mt-restaurant',
            templateUrl: './restaurant.component.html',
            animations: [
                animations_1.trigger('restaurantAppeared', [
                    animations_1.state('ready', animations_1.style({ opacity: 1 })),
                    animations_1.transition('void => ready', [
                        animations_1.style({ opacity: 0, transform: 'translate(-30px,-10px)' }),
                        animations_1.animate('300ms 0s ease-in-out')
                    ])
                ])
            ]
        })
    ], RestaurantComponent);
    return RestaurantComponent;
}());
exports.RestaurantComponent = RestaurantComponent;
