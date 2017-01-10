"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var home_component_1 = require("./home/home.component");
var search_component_1 = require("./search/search.component");
var camera_component_1 = require("./camera/camera.component");
var nativescript_angular_1 = require("nativescript-angular");
var validator_services_1 = require("./validator.services");
var COMPONENTS = [
    home_component_1.HomeComponent,
    search_component_1.SearchComponent,
    camera_component_1.CameraComponent,
];
var TnsBarcodeModule = (function () {
    function TnsBarcodeModule() {
    }
    TnsBarcodeModule = __decorate([
        core_1.NgModule({
            schemas: [core_1.NO_ERRORS_SCHEMA],
            imports: [
                nativescript_module_1.NativeScriptModule,
                nativescript_angular_1.NativeScriptRouterModule
            ],
            declarations: [
                COMPONENTS
            ],
            providers: [
                nativescript_barcodescanner_1.BarcodeScanner,
                validator_services_1.BarcodeValidatorService
            ],
            exports: [
                COMPONENTS,
                http_1.NativeScriptHttpModule,
                forms_1.NativeScriptFormsModule,
                nativescript_module_1.NativeScriptModule,
                nativescript_angular_1.NativeScriptRouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TnsBarcodeModule);
    return TnsBarcodeModule;
}());
exports.TnsBarcodeModule = TnsBarcodeModule;
