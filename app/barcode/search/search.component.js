"use strict";
var core_1 = require("@angular/core");
var validator_services_1 = require("../validator.services");
var Subject_1 = require("rxjs/Subject");
var page_1 = require("ui/page");
var SearchComponent = (function () {
    function SearchComponent(validator, page) {
        this.validator = validator;
        this.page = page;
        this.isSearching = false;
        this.code$ = new Subject_1.Subject();
    }
    ;
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.focusTextfield();
        this.validator.doSearchbyCode(this.code$)
            .subscribe(function (result) { return _this.onGetDataSuccess(result); }, function (error) { return _this.onGetDataError(error); });
    };
    SearchComponent.prototype.showAlert = function (result) {
        alert("Result: " + result);
    };
    SearchComponent.prototype.submit = function (result) {
        alert("Result: " + result);
    };
    SearchComponent.prototype.onSearching = function (code) {
        var _this = this;
        this.isSearching = true;
        this.validator.rawSearchByCode(code)
            .subscribe(function (result) { return _this.onGetDataSuccess(result); }, function (error) { return _this.onGetDataError(error); });
    };
    SearchComponent.prototype.focusTextfield = function () {
        this.barcodeText.nativeElement.focus();
        var firstTextfield = this.page.getViewById("textBarcode");
        firstTextfield.focus();
    };
    SearchComponent.prototype.onGetDataSuccess = function (res) {
        this.showAlert(res);
        this.isSearching = false;
    };
    SearchComponent.prototype.onGetDataError = function (error) {
        var body = error.json() || "";
        var err = body.error || JSON.stringify(body);
        this.showAlert("An Error! " + err.json().error);
        this.isSearching = false;
    };
    __decorate([
        core_1.ViewChild('barcodeText'), 
        __metadata('design:type', core_1.ElementRef)
    ], SearchComponent.prototype, "barcodeText", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-search",
            templateUrl: "search.component.html"
        }), 
        __metadata('design:paramtypes', [validator_services_1.BarcodeValidatorService, page_1.Page])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
