import Vue from 'vue'
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

let util = {
  toastShow(obj = {}) {
  	let o = {
      width: '18.9em',
      time: Vue.tpUtil.config.toastTimeout,
      type: 'text',
      text: 'Loading'
    };
  	Object.assign(o, obj)
    Vue.$vux.toast.show(o);
  }
};


function plugin(Vue) {
  Vue.tpUtil = Object.assign(Vue.tpUtil, util);
}

Vue.use(plugin)
