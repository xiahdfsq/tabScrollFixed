// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Vuex from 'vuex'
import { ConfigPlugin, AppPlugin, DevicePlugin} from 'vux'
import { sync } from 'vuex-router-sync'

// import Hello from './components/layout/Hello'
// import Home from '@/components/layout/HelloFromVux'
// 引入样式
require('@/assets/less/app.less')
import './config'

Vue.use(Vuex)

Vue.use(VueRouter)
Vue.use(DevicePlugin)

let store = new Vuex.Store({})

store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: 'forward',
    title: '主頁',
    isShowMore: true,
    action: {}
  },
  mutations: {
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    },
    updateTitle (state, payload) { 
      state.title = payload.title
    },
    updateIsShowMore (state, boolean){
      state.isShowMore = boolean
    },
    updateRightTxt (state, obj){
      state.action = obj
    },
  },
  actions: {
    updateDemoPosition ({commit}, top) {
      commit({type: 'updateDemoPosition', top: top})
    }
  }
})
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})
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

const OrderInfo = (resolve) => {
  import('./components/OrderInfo').then((module) => {
    resolve(module)
  })
}
const Info = (resolve) => {
  import('./components/info/Info').then((module) => {
    resolve(module)
  })
}
const Setting = (resolve) => {
  import('./components/info/Setting').then((module) => {
    resolve(module)
  })
}
const Login = (resolve) => {
  import('./components/Login').then((module) => {
    resolve(module)
  })
}
const ProduceIntroduce = (resolve) => {
  import('./components/ProduceIntroduce').then((module) => {
    resolve(module)
  })
}
const routes = [{
  path: '/',
  redirect: '/tabbar/home'
}, {
  path: '/tabbar/home',
  component: Home
}, {
  path: '/tabbar/info',
  component: Info
}, {
  path: '/product-detail',
  component: ProductDetail
}, {
  path: '/order-info',
  component: OrderInfo
}, {
  path: '/setting',
  component: Setting
}, {
  path: '/login',
  component: Login
}, {
  path: '/produce-introduce',
  component: ProduceIntroduce
}]


FastClick.attach(document.body)

Vue.config.productionTip = false
const router = new VueRouter({
  routes
})
if (process.env.platform === 'app') {
  Vue.use(AppPlugin, store)
}
sync(store, router)

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']
document.addEventListener('touchend', () => {
  endTime = Date.now()
})
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function (...args) {
    isPush = true
    method.apply(null, args)
  }
})
router.beforeEach(function (to, from, next) {

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updateDirection', {direction: ''})
      } else {
        store.commit('updateDirection', { direction: 'reverse' })
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})
router.afterEach(function (to) {
  isPush = false
})
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
