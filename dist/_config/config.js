"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var constants = require("./constant.json");
var Config = (function () {
    function Config() {
    }
    Config.prototype.getConstants = function (environent) {
        return constants;
    };
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map