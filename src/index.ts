import { UserDetailsType, State_Values } from './_models';
import { apiCall } from './_helpers';

/**
 * @param {UserDetailsType}  request_obj - Required: Property Details with MLS and Public Record.
 * @return {object} Based on the return type param.
 */

export class KYCModule {
  request_obj: UserDetailsType;
  constructor(request_obj: UserDetailsType) {
    if (!request_obj) {
      throw new Error('Invalid Parameters.');
    }
    this.request_obj = request_obj;
  }
  public async verifyUser(): Promise<ResponseType> {
    return new Promise(async (resolve, reject) => {
      try {
        const verifyStatus = await apiCall(this.request_obj);
        console.log(verifyStatus);
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
