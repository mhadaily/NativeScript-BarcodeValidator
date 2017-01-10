"use strict";
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require('rxjs/add/operator/map');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
var BarcodeValidatorService = (function () {
    function BarcodeValidatorService(_http) {
        this._http = _http;
        this.endpoints = {
            search: 'https://mutec.gomus.de/api/v3/barcodes/',
        };
    }
    BarcodeValidatorService.prototype.doSearchbyCode = function (codes, debounceMs) {
        var _this = this;
        if (debounceMs === void 0) { debounceMs = 400; }
        return codes
            .debounceTime(debounceMs)
            .distinctUntilChanged()
            .switchMap(function (code) { return _this.rawSearchByCode(code); });
    };
    BarcodeValidatorService.prototype.rawSearchByCode = function (code) {
        return this._http.get("" + this.endpoints.search + code)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BarcodeValidatorService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error);
    };
    BarcodeValidatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BarcodeValidatorService);
    return BarcodeValidatorService;
}());
exports.BarcodeValidatorService = BarcodeValidatorService;
