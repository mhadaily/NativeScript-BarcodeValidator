"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var home_component_1 = require("./home/home.component");
var search_component_1 = require("./search/search.component");
var camera_component_1 = require("./camera/camera.component");
var upload_component_1 = require("./upload/upload.component");
var nativescript_angular_1 = require("nativescript-angular");
var COMPONENTS = [
    home_component_1.HomeComponent,
    search_component_1.SearchComponent,
    camera_component_1.CameraComponent,
    upload_component_1.UploadComponent
];
var TnsBarcodeModule = (function () {
    function TnsBarcodeModule() {
    }
    TnsBarcodeModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                nativescript_angular_1.NativeScriptRouterModule
            ],
            declarations: [
                COMPONENTS
            ],
            providers: [
                nativescript_barcodescanner_1.BarcodeScanner
            ],
            exports: [
                COMPONENTS,
                nativescript_module_1.NativeScriptModule,
                nativescript_angular_1.NativeScriptRouterModule,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TnsBarcodeModule);
    return TnsBarcodeModule;
}());
exports.TnsBarcodeModule = TnsBarcodeModule;
//# sourceMappingURL=barcode.module.js.map