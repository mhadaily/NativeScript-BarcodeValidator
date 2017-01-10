"use strict";
var core_1 = require("@angular/core");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var CameraComponent = (function () {
    function CameraComponent(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
    }
    CameraComponent.prototype.onClick = function () {
        this.barcodeScanner.available().then(function (avail) {
            console.log("Available? " + avail);
        });
        this.barcodeScanner.hasCameraPermission().then(function (granted) {
            console.log("Has Camera Permission? " + granted);
        });
        this.barcodeScanner.requestCameraPermission().then(function () {
            console.log("Camera permission requested");
        });
        this.barcodeScanner.scan({
            //Android only "DATA_MATRIX, CODABAR, MAXICODE, ITF, RSS_14, UPC_A]
            formats: "CODE_39, CODE_93, CODE_128, EAN_8, EAN_13, QR_CODE, UPC_E, AZTEC, PDF_417",
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: true,
            torchOn: false,
        }).then(function (result) {
            alert({
                title: "Scan result",
                message: "Format: " + result.format + ",\nValue: " + result.text,
                okButtonText: "OK"
            });
        }, function (errorMessage) {
            console.log("No scan. " + errorMessage);
        });
    };
    CameraComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-camera",
            templateUrl: "camera.component.html",
        }), 
        __metadata('design:paramtypes', [nativescript_barcodescanner_1.BarcodeScanner])
    ], CameraComponent);
    return CameraComponent;
}());
exports.CameraComponent = CameraComponent;
//# sourceMappingURL=camera.component.js.map