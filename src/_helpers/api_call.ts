import fetch = require('node-fetch');
import { Config } from '../_config/config';
const creds = new Config().getConstants();
const apiEndpoint = creds.API_ENDPOINT;
const apiKey = creds.API_KEY;

export function apiCall(_data: any): Promise<object> {
  return new Promise<object>(async (resolve, reject) => {
    const reqOptions = {
      method: 'post',
      body: JSON.stringify(_data),
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    };
    fetch(apiEndpoint, reqOptions)
      .then((res: { json: () => any }) => res.json())
      .then((json: any) => {
        resolve(json);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
}
