import AppConfig from '../../../../config/main.js';
import * as url from 'url';
const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path, params = {}) {
  return url.format({
    host: AppConfig.apiUrl,
    query: params,
    pathname: path
  });
}

interface IRequestPayload {
  params?: Object;
  data?: Object;
  headers?: Object;
}

interface IRequestFunc {
  (path: string, info: IRequestPayload): Promise<Response>; 
}

export class ApiClient {
  constructor(public req?: any, public res?: any) {
    req && (this.req = req);
    methods.forEach((method) => {
      
      this[method] = async (path, { params, data, headers }: IRequestPayload) => {
        console.log(req);
        try {

          const payload = {};
          const reqUrl = formatUrl(path, params);
          data && (payload['body'] = data);
          headers && (payload['headers'] = headers);
          const response = await fetch(reqUrl, {
            method,
            ...payload
          });

          if (!response.ok || response.status >= 400) {
            throw (response);
          }

          const contentType = response.headers.get('content-type');

          if (contentType && contentType.indexOf('json')!==-1) {
            return await response.json();
          } else {
            return await response.text();
          }
        } catch (e) {
          throw e;
        }
      }
    });
  }
  
  public post: IRequestFunc;
  public get: IRequestFunc;
  public del: IRequestFunc;
  public put: IRequestFunc;
  public patch: IRequestFunc;
}
