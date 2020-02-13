"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var restaurants_component_1 = require("./restaurants.component");
describe('RestaurantsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [restaurants_component_1.RestaurantsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(restaurants_component_1.RestaurantsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
