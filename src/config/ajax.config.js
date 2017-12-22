import Vue from 'vue'
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)
Vue.http.defaults.headers.post['Content-Type'] = 'application/json';
/**
 * axios 公共配置
 */
Vue.http.interceptors.request.use((config) => {
  // 超时设置
  config.timeout = config.timeout || Vue.tpUtil.config.timeout

  return config;
}, (error) => {

  return Promise.reject(error);
})

Vue.http.interceptors.response.use((response) => {
  // 关闭遮罩
  let shade = response.config.shade
  shade = shade == undefined ? true : shade

  return response.data;
}, (error) => {
  // 关闭遮罩
  let shade = error.config.shade
  shade = shade == undefined ? true : shade
  return Promise.reject(error);
});
