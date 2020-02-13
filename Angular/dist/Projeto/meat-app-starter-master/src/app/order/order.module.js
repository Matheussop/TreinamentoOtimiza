"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var order_component_1 = require("./order.component");
var order_items_component_1 = require("./order-items/order-items.component");
var delivery_cost_component_1 = require("./delivery-cost/delivery-cost.component");
var shared_module_1 = require("../shared/shared.module");
var router_1 = require("@angular/router");
var ROUTES = [
    { path: '', component: order_component_1.OrderComponent }
];
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        core_1.NgModule({
            declarations: [order_component_1.OrderComponent, order_items_component_1.OrderItemsComponent, delivery_cost_component_1.DeliveryCostComponent],
            imports: [shared_module_1.SharedModule, router_1.RouterModule.forChild(ROUTES)]
        })
    ], OrderModule);
    return OrderModule;
}());
exports.OrderModule = OrderModule;
