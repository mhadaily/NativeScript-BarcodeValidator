"use strict";
var core_1 = require("@angular/core");
var validator_services_1 = require("../validator.services");
var Subject_1 = require("rxjs/Subject");
var page_1 = require("ui/page");
var SearchComponent = (function () {
    function SearchComponent(validator, page) {
        this.validator = validator;
        this.page = page;
        this.code$ = new Subject_1.Subject();
    }
    ;
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.validator.doSearchbyCode(this.code$)
            .subscribe(function (result) { return _this.onGetDataSuccess(result); }, function (error) { return _this.onGetDataError(error); });
    };
    SearchComponent.prototype.showAlert = function (result) {
        alert("Text: " + result);
    };
    SearchComponent.prototype.focusTextfield = function () {
        this.barcodeText.nativeElement.focus();
        var firstTextfield = this.page.getViewById("textBarcode");
        firstTextfield.focus();
    };
    SearchComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: {
                x: 1.0,
                y: 1.0
            },
            duration: 10000
        });
    };
    SearchComponent.prototype.onGetDataSuccess = function (res) {
        this.showAlert(res);
    };
    SearchComponent.prototype.onGetDataError = function (error) {
        var body = error.json() || "";
        var err = body.error || JSON.stringify(body);
        this.showAlert("An Error! " + err.json().error);
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
