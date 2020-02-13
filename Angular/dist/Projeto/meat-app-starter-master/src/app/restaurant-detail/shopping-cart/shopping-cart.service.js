"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var cart_item_model_1 = require("./cart-item.model");
var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(notificationService) {
        this.notificationService = notificationService;
        this.items = [];
    }
    ShoppingCartService.prototype.clear = function () {
        this.items = [];
    };
    ShoppingCartService.prototype.addItem = function (item) {
        var foundItem = this.items.find(function (mItem) { return mItem.menuItem.id === item.id; });
        if (foundItem) {
            this.increaseQty(foundItem);
        }
        else {
            this.items.push(new cart_item_model_1.CartItem(item));
        }
        this.notificationService.notify("Voc\u00EA adicionou o item " + item.name);
    };
    ShoppingCartService.prototype.increaseQty = function (item) {
        item.quantity = item.quantity + 1;
    };
    ShoppingCartService.prototype.decreaseQty = function (item) {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    };
    ShoppingCartService.prototype.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify("Voc\u00EA removeu o item " + item.menuItem.name);
    };
    ShoppingCartService.prototype.total = function () {
        return this.items.map(function (item) { return item.value(); }).reduce(function (prev, value) { return prev + value; }, 0);
    };
    ShoppingCartService = __decorate([
        core_1.Injectable()
    ], ShoppingCartService);
    return ShoppingCartService;
}());
exports.ShoppingCartService = ShoppingCartService;
