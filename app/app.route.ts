import { BARCODE_ROUTE } from "./barcode/barcode.route";
import { Routes } from "@angular/router";
import { HomeComponent } from "./barcode/home/home.component";

export const ROUTE: Routes = [
	{
		path:'',
		redirectTo:'/barcode',
		pathMatch:'full'
	},
	{
		path:'barcode',
		component: HomeComponent,
		children: BARCODE_ROUTE
	},

];

