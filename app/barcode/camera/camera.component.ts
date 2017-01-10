import { Component } from "@angular/core";
import { BarcodeScanner } from "nativescript-barcodescanner";

@Component({
	moduleId: module.id,
	selector: "app-camera",
	templateUrl: "camera.component.html",
})
export class CameraComponent {
	constructor(private barcodeScanner: BarcodeScanner) {
	}
	
	onClick() {
		this.barcodeScanner.available().then(
				function(avail) {
					console.log("Available? " + avail);
				}
		);
		
		this.barcodeScanner.hasCameraPermission().then(
				function(granted) {
					console.log("Has Camera Permission? " + granted);
				}
		);
		
		this.barcodeScanner.requestCameraPermission().then(
				function() {
					console.log("Camera permission requested");
				}
		);
		this.barcodeScanner.scan({
			//Android only "DATA_MATRIX, CODABAR, MAXICODE, ITF, RSS_14, UPC_A]
			formats: "CODE_39, CODE_93, CODE_128, EAN_8, EAN_13, QR_CODE, UPC_E, AZTEC, PDF_417",
			showFlipCameraButton: true,
			preferFrontCamera: false,
			showTorchButton: true,
			torchOn: false,
		}).then((result) => {
					alert({
						title: "Scan result",
						message: "Format: " + result.format + ",\nValue: " + result.text,
						okButtonText: "OK"
					});
				}, (errorMessage) => {
					console.log("No scan. " + errorMessage);
				}
		);
	}
}
