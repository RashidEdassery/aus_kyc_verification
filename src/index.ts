import { UserDetailsType, State_Values, ApiResponseType, ResponseType } from './_models';
import { apiCall, validate } from './_helpers';
const Ajv = require('ajv');
const ajv = new Ajv.default({ allErrors: true });

/**
 * @param {UserDetailsType}  request_obj - Required: Property Details with MLS and Public Record.
 * @return {object} Based on the return type param.
 */

export class KYCModule {
  request_obj: UserDetailsType;
  constructor(request_obj: UserDetailsType) {
    if (!validate(request_obj)) {
      console.log(ajv.errorsText(validate.errors));
      throw Error('Invalid Parameters.');
    }
    this.request_obj = request_obj;
  }
  public async verifyUser(): Promise<ResponseType> {
    return new Promise(async (resolve, reject) => {
      try {
        const verifyStatus = <ApiResponseType>await apiCall(this.request_obj);
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
