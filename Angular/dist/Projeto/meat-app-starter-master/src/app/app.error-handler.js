"use strict";
exports.__esModule = true;
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handleError = function (error) {
        var errorMessage;
        if (error instanceof http_1.HttpErrorResponse) {
            var body = error.error;
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
