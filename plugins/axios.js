/*
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-11-01 15:23:19
 * @LastEditors: nut
 * @LastEditTime: 2019-11-06 13:42:06
 */
import Vue from 'vue'
import axios from 'axios'
import elementUi from 'element-ui'

const myaxios = axios.create({
  baseURL: 'http://127.0.0.1:7001',
  timeout: 1000,
})
// 添加请求拦截器
myaxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myaxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let resData = response.data;
    if(resData.code==='000'){
      return resData.data
    }else{
      elementUi.Notification({
        title: "错误",
        message: resData.msg,
        type: "error"
      });
      return Promise.reject(resData.msg);
    }
}, function (error) {
    console.log(error)
    // 对响应错误做点什么
    return Promise.reject(error);
});

Vue.config.productionTip = false

export default myaxios;