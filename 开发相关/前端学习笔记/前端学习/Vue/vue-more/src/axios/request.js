import axios from "axios"
import Cookies from "js-cookie"
import { TIMEOUT, SUCC_CODE, LOGIN_CODE } from "./config.base"

let instance = axios.create({
  // 请求头设置
  headers: {
    'content-type': 'application/json',
    'Authorization': Cookies.get("Authorization")
  }
})

instance.defaults.withCredentials = true
instance.defaults.timeout = TIMEOUT;

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.channelToken = Cookies.get('channelToken')
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  console.log("添加响应拦截器");
  // 对响应数据做点什么  
  if (response.status == SUCC_CODE) {
    if (response.data.code == LOGIN_CODE) {
      const loginUrl = Cookies.get("sysUrl")
      Cookies.remove("userName", {
        domain: "com.hjn"
      })
      Cookies.remove("token", {
        domain: "com.hjn"
      })
      localStorage.clear()
      window.location.href = loginUrl
    }
  }
  return response.data
}, function (error) {
  // 对响应错误做点什么
  console.log('--- 401 res error response ---')
  console.log(error.response)
  if (error && error.response && error.response.status == '401') {
    const loginUrl = Cookies.get("sysUrl")
    Cookies.remove("userName", {
      domain: "com.hjn"
    })
    Cookies.remove("token", {
      domain: "com.hjn"
    })
    localStorage.clear()
    window.location.href = loginUrl
  }
  return Promise.reject(error)
})

export default instance