import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { BarcodeScanner } from "nativescript-barcodescanner";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { CameraComponent } from "./camera/camera.component";
import { NativeScriptRouterModule } from "nativescript-angular";
import { BarcodeValidatorService } from "./validator.services";

const COMPONENTS = [
	HomeComponent,
	SearchComponent,
	CameraComponent,
];

@NgModule({
	schemas: [NO_ERRORS_SCHEMA],
	imports: [
		NativeScriptModule,
		NativeScriptRouterModule
	],
	declarations: [
		COMPONENTS
	],
	providers:[
		BarcodeScanner,
		BarcodeValidatorService
	],
	exports: [
		COMPONENTS,
		NativeScriptHttpModule,
		NativeScriptFormsModule,
		NativeScriptModule,
		NativeScriptRouterModule
	]
})
export class TnsBarcodeModule {
}
