import jsonp from 'jsonp';
import Extension from './extension'

const TIMEOUT = 180000;
export const jsonpOptions = {
  param: 'callback',
  timeout: TIMEOUT
};

export const _jsonp = (url, data, options) => {
  url += (url.indexOf('?') < 0 ? '?' : '&') + Extension.dicToUrlParamString(data);
  options = { ...jsonpOptions, ...options }
  return new Promise((resolve, reject) => {
    jsonp(url, options, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
