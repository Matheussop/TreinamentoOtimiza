"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.rated = new core_1.EventEmitter();
        this.rates = [1, 2, 3, 4, 5];
        this.rate = 0;
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    RatingComponent.prototype.setRate = function (rate) {
        this.rate = rate;
        this.previousRate = undefined;
        this.rated.emit(this.rate);
    };
    RatingComponent.prototype.setTemporaryRate = function (r) {
        if (this.previousRate === undefined) {
            this.previousRate = this.rate;
        }
        this.rate = r;
    };
    RatingComponent.prototype.clearTemporaryRate = function () {
        if (this.previousRate !== undefined) {
            this.rate = this.previousRate;
            this.previousRate = undefined;
        }
    };
    __decorate([
        core_1.Output()
    ], RatingComponent.prototype, "rated");
    RatingComponent = __decorate([
        core_1.Component({
            selector: 'mt-rating',
            templateUrl: './rating.component.html'
        })
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
