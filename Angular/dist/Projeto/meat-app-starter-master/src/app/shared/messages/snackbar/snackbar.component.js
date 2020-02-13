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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/timer");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/do");
var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(notificationService) {
        this.notificationService = notificationService;
        this.message = "Hello there";
        this.snackVisibility = 'hidden';
    }
    SnackbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationService.notifier["do"](function (message) {
            _this.message = message;
            _this.snackVisibility = 'visible';
        }).switchMap(function (message) { return Observable_1.Observable.timer(3000); })
            .subscribe(function (timer) { return _this.snackVisibility = 'hidden'; });
    };
    SnackbarComponent = __decorate([
        core_1.Component({
            selector: 'mt-snackbar',
            templateUrl: './snackbar.component.html',
            styleUrls: ['./snackbar.component.css'],
            animations: [
                animations_1.trigger('snack-visibility', [
                    animations_1.state('hidden', animations_1.style({
                        opacity: 0,
                        bottom: '0px'
                    })),
                    animations_1.state('visible', animations_1.style({
                        opacity: 1,
                        bottom: '30px'
                    })),
                    animations_1.transition('hidden => visible', animations_1.animate('500ms 0s ease-in')),
                    animations_1.transition('visible => hidden', animations_1.animate('500ms 0s ease-out'))
                ])
            ]
        })
    ], SnackbarComponent);
    return SnackbarComponent;
}());
exports.SnackbarComponent = SnackbarComponent;
