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
var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.rowState = 'ready';
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent.prototype.items = function () {
        return this.shoppingCartService.items;
    };
    ShoppingCartComponent.prototype.total = function () {
        return this.shoppingCartService.total();
    };
    ShoppingCartComponent.prototype.clear = function () {
        this.shoppingCartService.clear();
    };
    ShoppingCartComponent.prototype.removeItem = function (item) {
        this.shoppingCartService.removeItem(item);
    };
    ShoppingCartComponent.prototype.addItem = function (item) {
        this.shoppingCartService.addItem(item);
    };
    ShoppingCartComponent = __decorate([
        core_1.Component({
            selector: 'mt-shopping-cart',
            templateUrl: './shopping-cart.component.html',
            animations: [
                animations_1.trigger('row', [
                    animations_1.state('ready', animations_1.style({ opacity: 1 })),
                    animations_1.transition('void => ready', animations_1.animate('300ms 0s ease-in', animations_1.keyframes([
                        animations_1.style({ opacity: 0, transform: 'translateX(-30px)', offset: 0 }),
                        animations_1.style({ opacity: 0.8, transform: 'translateX(10px)', offset: 0.8 }),
                        animations_1.style({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
                    ]))),
                    animations_1.transition('ready => void', animations_1.animate('300ms 0s ease-out', animations_1.keyframes([
                        animations_1.style({ opacity: 1, transform: 'translateX(0px)', offset: 0 }),
                        animations_1.style({ opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2 }),
                        animations_1.style({ opacity: 0, transform: 'translateX(30px)', offset: 1 })
                    ])))
                ])
            ]
        })
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
exports.ShoppingCartComponent = ShoppingCartComponent;
