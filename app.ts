import {KYCModule} from './src'

const kycModule = new KYCModule({ 
    "birthDate" : "1985-02-08", 
    "givenName" : "James", 
    "middleName" : "Robert", 
    "familyName" : "Smith", 
    "licenceNumber" : "94977000", 
    "stateOfIssue" : "NSW", 
    "expiryDate" : "2020-01-01" 
    });

kycModule.verifyUser();