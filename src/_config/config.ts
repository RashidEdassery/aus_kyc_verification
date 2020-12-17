import * as constants from './constant.json';
export class Config {
  getConstants(environent?: string) {
    // We can use the environment variable like DEV, STAGING, PROD to return the constants of the specific.
    // Here for the demo purpose I'm just returning the data from constant.json
    // Note: In real apps I use either .env files(won't commit to repo) or server envs like AWS Systems Manager Parameter Store
    return constants;
  }
}
