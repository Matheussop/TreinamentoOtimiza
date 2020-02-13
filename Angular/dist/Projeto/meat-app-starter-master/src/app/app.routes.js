"use strict";
exports.__esModule = true;
var home_component_1 = require("./home/home.component");
var restaurants_component_1 = require("./restaurants/restaurants.component");
var restaurant_detail_component_1 = require("./restaurant-detail/restaurant-detail.component");
var menu_component_1 = require("./restaurant-detail/menu/menu.component");
var reviews_component_1 = require("./restaurant-detail/reviews/reviews.component");
var order_summary_component_1 = require("./order-summary/order-summary.component");
var not_found_component_1 = require("./not-found/not-found.component");
exports.ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'restaurants', component: restaurants_component_1.RestaurantsComponent },
    { path: 'restaurants/:id', component: restaurant_detail_component_1.RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: menu_component_1.MenuComponent },
            { path: 'reviews', component: reviews_component_1.ReviewsComponent }
        ] },
    { path: 'order', loadChildren: './order/order.module#OrderModule' },
    { path: 'order-summary', component: order_summary_component_1.OrderSummaryComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
