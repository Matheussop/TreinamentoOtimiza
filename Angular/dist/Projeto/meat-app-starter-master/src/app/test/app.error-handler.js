"use strict";
exports.__esModule = true;
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handleError = function (error) {
        var errorMessage;
        if (error instanceof http_1.Response) {
            errorMessage = "Erro " + error.status + " ao acessar a URL " + error.url + " - " + error.statusText;
        }
        else {
            errorMessage = error.toString();
        }
        console.log(errorMessage);
        return Observable_1.Observable["throw"](errorMessage);
    };
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
