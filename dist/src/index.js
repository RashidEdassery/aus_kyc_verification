"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KYCModule = void 0;
var tslib_1 = require("tslib");
var _helpers_1 = require("./_helpers");
var KYCModule = (function () {
    function KYCModule(request_obj) {
        if (!request_obj) {
            throw new Error('Invalid Parameters.');
        }
        this.request_obj = request_obj;
    }
    KYCModule.prototype.verifyUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var verifyStatus, error_1;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4, _helpers_1.apiCall(this.request_obj)];
                                case 1:
                                    verifyStatus = _a.sent();
                                    console.log(verifyStatus);
                                    return [3, 3];
                                case 2:
                                    error_1 = _a.sent();
                                    reject({
                                        success: false,
                                        message: 'KYC verification failed',
                                        error: error_1,
                                    });
                                    return [3, 3];
                                case 3: return [2];
                            }
                        });
                    }); })];
            });
        });
    };
    return KYCModule;
}());
exports.KYCModule = KYCModule;
//# sourceMappingURL=index.js.map