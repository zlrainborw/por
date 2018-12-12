
import axios from 'axios'
import Qs from 'qs'

axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//配置请求头

//添加一个请求拦截器
// axios.interceptors.request.use(function (config) {
//   console.dir(config);
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.common['x-requested-with'] = 'XMLHttpRequest'; //给后台区分异步请求
// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
if(response.data && response.data.status && response.data.status!=302){
  alert(response.data.desc);
  let url=location.host.replace("mpf","");
  location.href="//erm"+url;
}else if(response.data && response.data.status && response.data.status==302){ //未登录
  let url=location.host.replace("mpf","");
  location.href="//erm"+url
}
  return response;
}, function (error) {
   alert('系统繁忙')
  // Do something with response error
  return Promise.reject(error);
});



//通用方法
export const POST = (url, params) => {
  return axios.post(`https://easy-mock.com/mock/5bbd6d13a265c57419b8fa38/example/${url}`, params).then(res => res.data)
}

// export const POST = (url, params) => {
//   return axios.post(`http://172.24.150.182:8080/${url}`, params).then(res => res.data)
// }

export const POSTS = (url, params) => {
  return axios.post(`https://easy-mock.com/mock/5bbd6d13a265c57419b8fa38/example/${url}`, Qs.stringify(params)).then(res => res.data)
}


export const GET = (url, params) => {
  return axios.get(`https://www.easy-mock.com/mock/5bf4bf4d77b4ba288c1ed92b/example/${url}`, {params: params}).then(res => res.data)
}

// export const GET = (url, params) => {
//   return axios.get(`http://172.24.150.182:8080/${url}`, {params: params}).then(res => res.data)
// }

export const PUT = (url, params) => {
  return axios.put(`https://easy-mock.com/mock/5bbd6d13a265c57419b8fa38/example/${url}`, params).then(res => res.data)
}

export const DELETE = (url, params) => {
  return axios.delete(`https://easy-mock.com/mock/5bbd6d13a265c57419b8fa38/example/${url}`, {params: params}).then(res => res.data)
}

export const PATCH = (url, params) => {
  return axios.patch(`https://easy-mock.com/mock/5bbd6d13a265c57419b8fa38/example/${url}`, params).then(res => res.data)
}

