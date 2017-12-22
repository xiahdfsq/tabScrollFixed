import Vue from 'vue'
let config = {
  	context: '', //服务端上下文
    timeout: 60000, //ajax超时默认时间
    toastTimeout: 1500,//toast默认显示时间
    refreshTime: 300000, //刷新时间
    openMock: true, //是否打开mocks 模拟数据 true:打开 false:关闭
    version: '1.0.0.0'//版本号
}

function plugin(Vue) {
    Vue.tpUtil = Vue.tpUtil || {};
    Vue.tpUtil.config = config;
}

Vue.use(plugin)