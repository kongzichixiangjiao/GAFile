
import { ga_jsonp } from './http'
export const HomeSliderAPI = "home/slider";
export const HomeRecommendURL = "https://ju.taobao.com/json/tg/ajaxGetItemsV2.json";

export const HomeRecommendData = (params) => {
  return new Promise(res => {
    ga_jsonp(HomeRecommendURL, params).then((data) => {
      res(data.itemList)
    });
  })

}
