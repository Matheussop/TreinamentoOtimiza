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
var InputComponent = /** @class */ (function () {
    function InputComponent() {
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.ngAfterContentInit = function () {
        this.input = this.model || this.control;
        if (this.input === undefined) {
            throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou FormControName');
        }
    };
    InputComponent.prototype.hasSuccess = function () {
        return this.input.valid && (this.input.dirty || this.input.touched);
    };
    InputComponent.prototype.hasError = function () {
        return this.input.invalid && (this.input.dirty || this.input.touched);
    };
    __decorate([
        core_1.Input()
    ], InputComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], InputComponent.prototype, "errorMessage");
    __decorate([
        core_1.ContentChild(forms_1.NgModel)
    ], InputComponent.prototype, "model");
    __decorate([
        core_1.ContentChild(forms_1.FormControlName)
    ], InputComponent.prototype, "control");
    InputComponent = __decorate([
        core_1.Component({
            selector: 'mt-input-container',
            templateUrl: './input.component.html'
        })
    ], InputComponent);
    return InputComponent;
}());
exports.InputComponent = InputComponent;
