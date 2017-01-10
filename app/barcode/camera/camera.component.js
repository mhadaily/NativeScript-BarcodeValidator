"use strict";
var core_1 = require("@angular/core");
var camera = require("nativescript-camera");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var CameraComponent = (function () {
    function CameraComponent(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
        this.cameraAvailable = false;
        this.saveToGallery = true;
        this.keepAspectRatio = true;
        this.width = 300;
        this.height = 300;
    }
    CameraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.barcodeScanner.available().then(function (res) {
            console.log("Is camera hardware available: " + res);
            _this.cameraAvailable = true;
        }).catch(function (e) {
            alert('Camera is not Available ' + e);
        });
    };
    CameraComponent.prototype.onTakePhoto = function () {
        var _this = this;
        var options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery
        };
        camera.takePicture(options)
            .then(function (imageAsset) {
            _this.imageTaken = imageAsset;
            console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
        }).catch(function (err) {
            console.log(err.message);
        });
    };
    CameraComponent.prototype.onRequestPermissions = function () {
        this.barcodeScanner.requestCameraPermission().then(function () {
            console.log("Camera permission requested");
        });
    };
    CameraComponent.prototype.onScan = function () {
        var _this = this;
        this.barcodeScanner.hasCameraPermission().then(function () {
            _this.barcodeScanner.scan({
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
        }).catch(function (e) {
            console.log(e);
            _this.onRequestPermissions();
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
