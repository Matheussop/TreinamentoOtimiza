"use strict";
exports.__esModule = true;
var Order = /** @class */ (function () {
    function Order(address, number, optinoalAdress, paymentOption, orderItems, id) {
        if (orderItems === void 0) { orderItems = []; }
        this.address = address;
        this.number = number;
        this.optinoalAdress = optinoalAdress;
        this.paymentOption = paymentOption;
        this.orderItems = orderItems;
        this.id = id;
    }
    return Order;
}());
exports.Order = Order;
var OrderItem = /** @class */ (function () {
    function OrderItem(quantity, menuId) {
        this.quantity = quantity;
        this.menuId = menuId;
    }
    return OrderItem;
}());
exports.OrderItem = OrderItem;
