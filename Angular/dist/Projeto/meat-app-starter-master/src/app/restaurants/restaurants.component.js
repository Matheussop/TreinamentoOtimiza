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
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/from");
var Observable_1 = require("rxjs/Observable");
var RestaurantsComponent = /** @class */ (function () {
    function RestaurantsComponent(restaurantsService, fb) {
        this.restaurantsService = restaurantsService;
        this.fb = fb;
        this.searchBarState = 'hidden';
    }
    RestaurantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantsService.restaurants().subscribe(function (restaurants) { return _this.restaurants = restaurants; });
        this.searchControl = this.fb.control('');
        this.searchForm = this.fb.group({
            searchControl: this.searchControl
        });
        this.searchControl.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(function (searchTerm) { return _this.restaurantsService.restaurants(searchTerm)["catch"](function (error) { return Observable_1.Observable.from([]); }); })
            .subscribe(function (restaurants) { return _this.restaurants = restaurants; });
    };
    RestaurantsComponent.prototype.toggleSearch = function () {
        this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
    };
    RestaurantsComponent = __decorate([
        core_1.Component({
            selector: 'mt-restaurants',
            templateUrl: './restaurants.component.html',
            animations: [
                animations_1.trigger('toggleSearch', [
                    animations_1.state('hidden', animations_1.style({
                        opacity: 0,
                        "max-height": "0px"
                    })),
                    animations_1.state('visible', animations_1.style({
                        opacity: 1,
                        "max-height": "70px",
                        "margin-top": "10px"
                    })),
                    animations_1.transition('* => *', animations_1.animate('250ms 0s ease-in-out'))
                ])
            ]
        })
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());
exports.RestaurantsComponent = RestaurantsComponent;
