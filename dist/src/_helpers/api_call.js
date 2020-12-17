"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCall = void 0;
var tslib_1 = require("tslib");
var fetch = require("node-fetch");
var config_1 = require("../_config/config");
var creds = new config_1.Config().getConstants();
var apiEndpoint = creds.API_ENDPOINT;
var apiKey = creds.API_KEY;
function apiCall(_data) {
    var _this = this;
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var reqOptions;
        return tslib_1.__generator(this, function (_a) {
            reqOptions = {
                method: 'post',
                body: JSON.stringify(_data),
                headers: { Authorization: "Bearer " + apiKey, 'Content-Type': 'application/json' },
            };
            fetch(apiEndpoint, reqOptions)
                .then(function (response) {
                console.log(response);
            })
                .catch(function (error) {
                reject(error);
            });
            return [2];
        });
    }); });
}
exports.apiCall = apiCall;
//# sourceMappingURL=api_call.js.map