import { Component, OnInit } from "@angular/core";
import * as camera from "nativescript-camera";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { ImageAsset } from "image-asset";
import { BarcodeValidatorService } from "../validator.services";

@Component({
	moduleId: module.id,
	selector: "app-camera",
	templateUrl: "camera.component.html",
})
export class CameraComponent implements OnInit {
	
	constructor(private barcodeScanner: BarcodeScanner, private validator: BarcodeValidatorService) {
	}
	
	public cameraAvailable: boolean = false;
	public imageTaken: ImageAsset;
	public saveToGallery: boolean = true;
	public keepAspectRatio: boolean = true;
	public width: number = 300;
	public height: number = 300;
	
	ngOnInit() {
		
	}
	
	onCheckingCamera() {
		this.barcodeScanner.available().then(() => {
					this.cameraAvailable = true;
					this.onGetPermission();
				}
		).catch((e) => {
			alert('Camera is not Available ' + e);
		});
	}
	
	onGetPermission() {
		this.barcodeScanner.hasCameraPermission().then(() => {
			console.log('Thank you , we are ready to can now');
		}).catch((e) => {
			console.log(e);
			this.onRequestPermissions();
		});
	}
	
	onTakePhoto() {
		let options = {
			width: this.width,
			height: this.height,
			keepAspectRatio: this.keepAspectRatio,
			saveToGallery: this.saveToGallery
		};
		
		camera.takePicture(options)
		      .then(imageAsset => {
			      this.imageTaken = imageAsset;
			      console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
		      }).catch(err => {
			console.log(err.message);
		});
	}
	
	onRequestPermissions() {
		this.barcodeScanner.requestCameraPermission().then(
				function() {
					console.log("Camera permission requested");
				}
		);
	}
	
	onScan() {
		this.barcodeScanner.scan({
			//Android only "DATA_MATRIX, CODABAR, MAXICODE, ITF, RSS_14, UPC_A]
			formats: "CODE_39, CODE_93, CODE_128, EAN_8, EAN_13, QR_CODE, UPC_E, AZTEC, PDF_417",
			showFlipCameraButton: true,
			preferFrontCamera: false,
			showTorchButton: true,
			torchOn: false,
		}).then((result) => {
					this.validator.rawSearchByCode(result.text).subscribe(
							(result) => alert(result),
							(error) => alert(error.json().error)
					);
				}, (errorMessage) => {
					alert("No scan. " + errorMessage);
				}
		);
	}
}
