"use strict";
exports.__esModule = true;
require("./polyfills.ts");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var environment_1 = require("./environments/environment");
var app_1 = require("./app/");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_1.AppModule);
