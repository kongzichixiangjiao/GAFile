import instance from "./request"
import { baseURL } from "./config.base"
import { _jsonp } from '../js/jsonp'
import { HOME_RECOMMEND_PAGE_SIZE } from './config.base'



function fullURL(api) {
  return baseURL + api;
}

export const ga_get = (api, params) => {

  // showloading
  return new Promise((resolve, reject) => {
    // console.log(fullURL(api));

    instance.get(fullURL(api), {
      params: params
    }).then(res => {
      // hideloading
      // console.log("hideloading");
      // console.log(res);

      resolve(res);
    }).catch(err => {
      // hideloading
      reject(err);
    });
  })
}

export const ga_post = (api, params) => {
  return new Promise((resolve, reject) => {
    instance.post(fullURL(api), {
      params: params
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
}

export const ga_jsonp = (url, params, successCode = '200', errorMessage = '没有获取数据') => {
  params = { ...{ page: 1, pageSize: HOME_RECOMMEND_PAGE_SIZE }, ...params }

  return new Promise((resolve, reject) => {
    _jsonp(url, params).then(res => {
      if (res.code === successCode) {
        resolve(res);
      }

      throw new Error(errorMessage);
    }).catch(err => {
      if (err) {
        reject(err);
      }
    });
  })
}

