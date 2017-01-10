import { Routes } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { CameraComponent } from "./camera/camera.component";
import { UploadComponent } from "./upload/upload.component";


export const BARCODE_ROUTE: Routes = [
	{
		path:'',
		component: SearchComponent
	},
	{
		path:'camera',
		component: CameraComponent
	},
	{
		path:'upload',
		component: UploadComponent
	},
		
];

