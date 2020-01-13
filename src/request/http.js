/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
import router from '../router'

// 请求超时时间
axios.defaults.timeout = 10000;

// 请求基础URL
axios.defaults.baseURL = 'http://192.168.180.154:33333';

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    }
  },
  //服务器状态码不是200的情况 
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录    
        // 未登录则跳转登录页面，并携带当前页面的路径    
        // 在登录成功后返回当前页面，这一步需要在登录页操作。    
        case 401:
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          });
          break;
        // 403 token过期    
        // 登录过期对用户进行提示       
        // 跳转登录页面    
        case 403:
          // alert("登录过期，请重新登录");
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
          break;
        // 404请求不存在    
        case 404:
          router.replace({
            path: '/404',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
          break;
        // 其他错误，直接抛出错误提示    
        default:
          // alert(error.response.data);
      }
    }
    return Promise.reject(error.response);
  }
);
/** 
* get方法，对应get请求 
*/
export function get(url, params, info = '') {
  return new Promise((resolve, reject) => {
    axios.get(url + info, {
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
/** 
 * post方法，对应post请求 
 */
export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

/**
 * 封装put请求
 */

export function put(url, params = {}, info = "") {
  return new Promise((resolve, reject) => {
    axios.put(url + info, params)
      .then(res => {
        resolve(res.data);
      }, err => {
        reject(err.data)
      })
  })
}

/**
* 封装delete请求
*/
export function axiosDelete(url, params = {}, info = "") {
  return new Promise((resolve, reject) => {
    axios.delete(url + info, {
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}