import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { BarcodeValidatorService } from "../validator.services";
import { Subject } from "rxjs/Subject";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";

@Component({
	moduleId: module.id,
	selector: "app-search",
	templateUrl: "search.component.html"
})
export class SearchComponent implements OnInit {
	public message: any;
	@ViewChild('barcodeText') barcodeText: ElementRef;
	
	constructor(private validator: BarcodeValidatorService, private page: Page) {};
	
	code$ = new Subject<any>();
	
	ngOnInit() {
		this.validator.doSearchbyCode(this.code$)
		    .subscribe(
				    (result) => this.onGetDataSuccess(result),
				    (error) => this.onGetDataError(error)
		    );
	}
	
	public showAlert(result) {
		alert("Text: " + result);
	}
	
	focusTextfield() {
		this.barcodeText.nativeElement.focus();
		let firstTextfield: TextField = <TextField> this.page.getViewById("textBarcode");
		firstTextfield.focus();
	}
	
	startBackgroundAnimation(background) {
		background.animate({
			scale: {
				x: 1.0,
				y: 1.0
			},
			duration: 10000
		});
	}
	
	
	private onGetDataSuccess(res) {
		this.showAlert(res);
	}
	
	private onGetDataError(error: Response | any) {
		const body = error.json() || "";
		const err = body.error || JSON.stringify(body);
		this.showAlert(`An Error! ${err.json().error}`);
	}
	
}
