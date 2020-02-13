"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var OrderItemsComponent = /** @class */ (function () {
    function OrderItemsComponent() {
        this.increaseQty = new core_1.EventEmitter();
        this.decreaseQty = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
    }
    OrderItemsComponent.prototype.ngOnInit = function () {
    };
    OrderItemsComponent.prototype.emitIncreaseQty = function (item) {
        this.increaseQty.emit(item);
    };
    OrderItemsComponent.prototype.emitDecreaseQty = function (item) {
        this.decreaseQty.emit(item);
    };
    OrderItemsComponent.prototype.emitRemove = function (item) {
        this.remove.emit(item);
    };
    __decorate([
        core_1.Input()
    ], OrderItemsComponent.prototype, "items");
    __decorate([
        core_1.Output()
    ], OrderItemsComponent.prototype, "increaseQty");
    __decorate([
        core_1.Output()
    ], OrderItemsComponent.prototype, "decreaseQty");
    __decorate([
        core_1.Output()
    ], OrderItemsComponent.prototype, "remove");
    OrderItemsComponent = __decorate([
        core_1.Component({
            selector: 'mt-order-items',
            templateUrl: './order-items.component.html'
        })
    ], OrderItemsComponent);
    return OrderItemsComponent;
}());
exports.OrderItemsComponent = OrderItemsComponent;
