import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { CameraComponent } from "./camera/camera.component";
import { UploadComponent } from "./upload/upload.component";
import { NativeScriptRouterModule } from "nativescript-angular";

const COMPONENTS = [
	HomeComponent,
	SearchComponent,
	CameraComponent,
	UploadComponent
];

@NgModule({
	imports: [
		NativeScriptModule,
		NativeScriptRouterModule
	],
	declarations: [
		COMPONENTS
	],
	providers:[
		BarcodeScanner
	],
	exports: [
		COMPONENTS,
		NativeScriptModule,
		NativeScriptRouterModule,
	]
})
export class TnsBarcodeModule {
}
