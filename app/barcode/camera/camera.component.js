"use strict";
var core_1 = require("@angular/core");
var camera = require("nativescript-camera");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var validator_services_1 = require("../validator.services");
var CameraComponent = (function () {
    function CameraComponent(barcodeScanner, validator) {
        this.barcodeScanner = barcodeScanner;
        this.validator = validator;
        this.cameraAvailable = false;
        this.saveToGallery = true;
        this.keepAspectRatio = true;
        this.width = 300;
        this.height = 300;
    }
    CameraComponent.prototype.ngOnInit = function () {
    };
    CameraComponent.prototype.onCheckingCamera = function () {
        var _this = this;
        this.barcodeScanner.available().then(function () {
            _this.cameraAvailable = true;
            _this.onGetPermission();
        }).catch(function (e) {
            alert('Camera is not Available ' + e);
        });
    };
    CameraComponent.prototype.onGetPermission = function () {
        var _this = this;
        this.barcodeScanner.hasCameraPermission().then(function () {
            console.log('Thank you , we are ready to can now');
        }).catch(function (e) {
            console.log(e);
            _this.onRequestPermissions();
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
        this.barcodeScanner.scan({
            //Android only "DATA_MATRIX, CODABAR, MAXICODE, ITF, RSS_14, UPC_A]
            formats: "CODE_39, CODE_93, CODE_128, EAN_8, EAN_13, QR_CODE, UPC_E, AZTEC, PDF_417",
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: true,
            torchOn: false,
        }).then(function (result) {
            _this.validator.rawSearchByCode(result.text).subscribe(function (result) { return alert(result); }, function (error) { return alert(error.json().error); });
        }, function (errorMessage) {
            alert("No scan. " + errorMessage);
        });
    };
    CameraComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-camera",
            templateUrl: "camera.component.html",
        }), 
        __metadata('design:paramtypes', [nativescript_barcodescanner_1.BarcodeScanner, validator_services_1.BarcodeValidatorService])
    ], CameraComponent);
    return CameraComponent;
}());
exports.CameraComponent = CameraComponent;
