"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var input_component_1 = require("./input/input.component");
var radio_component_1 = require("./radio/radio.component");
var rating_component_1 = require("./rating/rating.component");
var shopping_cart_service_1 = require("app/restaurant-detail/shopping-cart/shopping-cart.service");
var order_service_1 = require("../order/order.service");
var restaurants_service_1 = require("../restaurants/restaurants.service");
var snackbar_component_1 = require("./messages/snackbar/snackbar.component");
var notification_service_1 = require("./messages/notification.service");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [shopping_cart_service_1.ShoppingCartService, restaurants_service_1.RestaurantsService, order_service_1.OrderService, notification_service_1.NotificationService]
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            declarations: [input_component_1.InputComponent, rating_component_1.RatingComponent, radio_component_1.RadioComponent, snackbar_component_1.SnackbarComponent],
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            exports: [input_component_1.InputComponent, rating_component_1.RatingComponent, radio_component_1.RadioComponent, snackbar_component_1.SnackbarComponent,
                common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
