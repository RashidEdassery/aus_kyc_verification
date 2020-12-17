import { UserDetailsType, State_Values, ApiResponseType, ResponseType } from './_models';
import { apiCall } from './_helpers';

/**
 * @param {UserDetailsType}  request_obj - Required: Property Details with MLS and Public Record.
 * @return {object} Based on the return type param.
 */

export class KYCModule {
  request_obj: UserDetailsType;
  constructor(request_obj: UserDetailsType) {
    if (
      !request_obj.birthDate ||
      !request_obj.givenName ||
      !request_obj.middleName ||
      !request_obj.familyName ||
      !request_obj.licenceNumber ||
      !(request_obj.stateOfIssue in State_Values) ||
      !request_obj.expiryDate
    ) {
      throw new Error('Invalid Parameters.');
    }
    this.request_obj = request_obj;
  }
  public async verifyUser(): Promise<ResponseType> {
    return new Promise(async (resolve, reject) => {
      try {
        const verifyStatus = <ApiResponseType>await apiCall(this.request_obj);
        console.log(verifyStatus.verificationResultCode);
        switch (verifyStatus.verificationResultCode) {
          case 'Y':
            resolve({
              success: true,
              message: 'KYC verified',
            });
            break;
          case 'N':
            resolve({
              success: false,
              message: 'KYC not verified',
            });
            break;  
          case 'D':
            resolve({
              success: false,
              message: 'Document Error',
            });
            break;  
          default:
            resolve({
              success: false,
              message: 'Server Error',
            });
            break;
        }
      } catch (error) {
        reject({
          success: false,
          message: 'KYC verification failed',
          error,
        });
      }
    });
  }
}
