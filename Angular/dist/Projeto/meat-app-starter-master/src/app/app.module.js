"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var home_component_1 = require("./home/home.component");
var restaurants_component_1 = require("./restaurants/restaurants.component");
var restaurant_component_1 = require("./restaurants/restaurant/restaurant.component");
var restaurant_detail_component_1 = require("./restaurant-detail/restaurant-detail.component");
var menu_component_1 = require("./restaurant-detail/menu/menu.component");
var shopping_cart_component_1 = require("./restaurant-detail/shopping-cart/shopping-cart.component");
var menu_item_component_1 = require("./restaurant-detail/menu-item/menu-item.component");
var reviews_component_1 = require("./restaurant-detail/reviews/reviews.component");
var order_summary_component_1 = require("./order-summary/order-summary.component");
var shared_module_1 = require("./shared/shared.module");
var not_found_component_1 = require("./not-found/not-found.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                restaurants_component_1.RestaurantsComponent,
                restaurant_component_1.RestaurantComponent,
                restaurant_detail_component_1.RestaurantDetailComponent,
                menu_component_1.MenuComponent,
                shopping_cart_component_1.ShoppingCartComponent,
                menu_item_component_1.MenuItemComponent,
                reviews_component_1.ReviewsComponent,
                order_summary_component_1.OrderSummaryComponent,
                not_found_component_1.NotFoundComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                shared_module_1.SharedModule.forRoot(),
                router_1.RouterModule.forRoot(app_routes_1.ROUTES, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, { provide: core_1.LOCALE_ID, useValue: 'pt-BR' }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
