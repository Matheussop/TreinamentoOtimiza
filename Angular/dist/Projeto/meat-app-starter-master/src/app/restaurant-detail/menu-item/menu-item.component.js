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
var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent() {
        this.menuItemState = 'ready';
        this.add = new core_1.EventEmitter();
    }
    MenuItemComponent.prototype.ngOnInit = function () {
    };
    MenuItemComponent.prototype.emitAddEvent = function () {
        this.add.emit(this.menuItem);
    };
    __decorate([
        core_1.Input()
    ], MenuItemComponent.prototype, "menuItem");
    __decorate([
        core_1.Output()
    ], MenuItemComponent.prototype, "add");
    MenuItemComponent = __decorate([
        core_1.Component({
            selector: 'mt-menu-item',
            templateUrl: './menu-item.component.html',
            animations: [
                animations_1.trigger('menuItemAppeared', [
                    animations_1.state('ready', animations_1.style({ opacity: 1 })),
                    animations_1.transition('void => ready', [
                        animations_1.style({ opacity: 0, transform: 'translateY(-20px)' }),
                        animations_1.animate('300ms 0s ease-in')
                    ])
                ])
            ]
        })
    ], MenuItemComponent);
    return MenuItemComponent;
}());
exports.MenuItemComponent = MenuItemComponent;
