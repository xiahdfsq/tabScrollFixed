// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import '@/libs'
// import VueLazyload from 'vue-lazyload'
// 引入样式
require('@/assets/less/app.less')

const Home = (resolve) => {
  import('./components/Home').then((module) => {
    resolve(module)
  })
}
const ProductDetail = (resolve) => {
  import('./components/ProductDetail').then((module) => {
    resolve(module)
  })
}
// 引入配置
import './config'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/product-detail',
  component: ProductDetail
}]

const router = new VueRouter({
  routes
})

// Todo, 注册layeload插件，以便全局运用
/* Vue.use(VueLazyload, {
  loading: './assets/logo.png'
}) */

FastClick.attach(document.body)

Vue.config.productionTip = false
const AlipayJSBridge = window.AlipayJSBridge
if (AlipayJSBridge) {
  AlipayJSBridge.call('setTitle', {
    title: '太平行安保'
  })
}

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
