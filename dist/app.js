"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("./src");
var kycModule = new src_1.KYCModule({
    "birthDate": "1985-02-08",
    "givenName": "James",
    "middleName": "Robert",
    "familyName": "Smith",
    "licenceNumber": "94977000",
    "stateOfIssue": "NSW",
    "expiryDate": "2020-01-01"
});
kycModule.verifyUser();
//# sourceMappingURL=app.js.map