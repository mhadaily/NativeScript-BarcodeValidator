"use strict";
var barcode_route_1 = require("./barcode/barcode.route");
var home_component_1 = require("./barcode/home/home.component");
exports.ROUTE = [
    {
        path: '',
        redirectTo: '/barcode',
        pathMatch: 'full'
    },
    {
        path: 'barcode',
        component: home_component_1.HomeComponent,
        children: barcode_route_1.BARCODE_ROUTE
    },
];
