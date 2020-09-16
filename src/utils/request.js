import axios from 'axios';
import DeviceStorage from '../utils/DeviceStorage'

const instance = axios.create();

instance.defaults.baseURL = '';

instance.interceptors.request.use(function (config) {
  return DeviceStorage.get('token').then(token => {
    if(token) {
      config['headers'] = {
        'Authorization': token
      }
    }
    return config;
  });
}, function (error) {
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  const { status, data } = response;
  if(status === 200 && data.code=== 200) {
    return {
      success: true,
      data: data.data,
      message: data.message,
    }
  } else {
    if(data.code === 401 || data.code === 403) {
      //网络请求返回401 | 403 token过期-------
    }
    return {
      success: false,
      data: data,
      message: data.message,
    }
  }
}, function (error) {
  console.log(error.toString());
  return Promise.reject({
    success: false,
    message: '网络开小差了'
  });
});


export default instance
