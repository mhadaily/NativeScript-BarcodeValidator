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
	public isSearching: boolean = false;
	@ViewChild('barcodeText') barcodeText: ElementRef;
	
	constructor(private validator: BarcodeValidatorService, private page: Page) {};
	
	code$ = new Subject<any>();
	
	ngOnInit() {
		this.focusTextfield();
		this.validator.doSearchbyCode(this.code$)
		    .subscribe(
				    (result) => this.onGetDataSuccess(result),
				    (error) => this.onGetDataError(error)
		    );
	}
	
	public showAlert(result) {
		alert("Result: " + result);
	}
	
	submit(result) {
		alert("Result: " + result);
	}
	
	onSearching(code) {
		this.isSearching = true;
		this.validator.rawSearchByCode(code)
		    .subscribe(
				    (result) => this.onGetDataSuccess(result),
				    (error) => this.onGetDataError(error)
		    );
	}
	
	focusTextfield() {
		this.barcodeText.nativeElement.focus();
		let firstTextfield: TextField = <TextField> this.page.getViewById("textBarcode");
		firstTextfield.focus();
	}
	
	private onGetDataSuccess(res) {
		this.showAlert(res);
		this.isSearching = false;
	}
	
	private onGetDataError(error: Response | any) {
		const body = error.json() || "";
		const err = body.error || JSON.stringify(body);
		this.showAlert(`An Error! ${err.json().error}`);
		this.isSearching = false;
	}
	
}
