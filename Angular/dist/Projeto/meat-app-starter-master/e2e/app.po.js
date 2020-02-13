"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var MeatPage = /** @class */ (function () {
    function MeatPage() {
    }
    MeatPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    MeatPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('mt-root h1')).getText();
    };
    return MeatPage;
}());
exports.MeatPage = MeatPage;
