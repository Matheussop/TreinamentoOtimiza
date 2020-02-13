"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var input_component_1 = require("./input.component");
describe('InputComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [input_component_1.InputComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(input_component_1.InputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
