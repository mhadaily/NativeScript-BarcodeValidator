import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppComponent } from "./app.component";
import { ROUTE } from "./app.route";
import { NativeScriptRouterModule } from "nativescript-angular";
import { TnsBarcodeModule } from "./barcode/barcode.module";

@NgModule({
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	imports: [
		NativeScriptModule,
		TnsBarcodeModule,
		NativeScriptRouterModule.forRoot(ROUTE)
	],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
