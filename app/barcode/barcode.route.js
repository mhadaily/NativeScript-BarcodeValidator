"use strict";
var search_component_1 = require("./search/search.component");
var camera_component_1 = require("./camera/camera.component");
exports.BARCODE_ROUTE = [
    {
        path: '',
        component: search_component_1.SearchComponent
    },
    {
        path: 'camera',
        component: camera_component_1.CameraComponent
    }
];
