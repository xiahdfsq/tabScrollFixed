import _ from 'lodash'
import Vue from 'vue'

const state = {
  insurer: {
    // 香港身份证号码
    identityNoHK: 'kkkk',
    // 投保人名称（中文）
    appliNameC: '请问',
    // 投保人名称（英文）
    appliNameE: 'rtwr',
    // 郵箱
    appliEmail: '',
    // 出生日期
    birthDate: '',
    // 年龄
    appliAge: '',
    // 性别 1男 2女
    appliSex: '1',
    // 投保类型名称（产品代码）
    riskCodeTname: '公共交通意外保險',
    // 投保类型代码（产品代码）
    riskCode: '',
    // 缴费模式
    payType: '1年',
    // 保障年期
    projectCode: '1年',
    // 保险金额
    sumInsured: '',
    // 年保费
    yearPremium: '60.00',
    // 保险公司代码
    companyCode: '',
    // 保险公司名称
    companyTname: '中國太平保險(香港)有限公司',
    // 订单号
    orderId: '',
    // 产品Id
    productId: '',
    // 支付号账号
    aliPayCode: '',
    // 支付宝唯一标识
    aliPayOid: ''
    // 投保項目
    // yearPremium: ''
    // 出生地
    // birthPlace: '香港',
    // 过去12个月吸烟标志 0否 1是
    // smokeInd: ''
  },
  orderInfo: {
    // 投保类型名称（产品代码）
    riskCodeTname: '公共交通意外保險',
    // 投保类型代码（产品代码）
    riskCode: '1166',
    // 缴费模式
    payType: '1年',
    // 保障年期
    projectCode: '1年',
    // 保险金额
    sumInsured: '',
    // 年保费
    yearPremium: '60.00',
    // 保险公司代码
    companyCode: '01',
    // 保险公司名称
    companyTname: '中國太平保險(香港)有限公司',
    // 订单号
    orderId: ''
  }
}

const getters = {}

const mutations = {
  // 給 insurer 賦值
  insure_setInsurer (state, insurer) {
    _.assign(state.insurer, insurer)
  },
  // 給 orderInfo 賦值
  insure_setOrderInfo (state, orderInfo) {
    _.assign(state.orderInfo, orderInfo)
  }
}

const actions = {
  // 生成訂單
  async saveOrderInfo ({
    commit,
    state
  }, option) {
    let insurer = option.insurer
    let res = await Vue.http.request({
      procedure: 'saveOrderInfo',
      data: {
        ...insurer
      }
    })
    let response = res.Envelope.Body.saveOrderInfoResponse.return
    let orderId = response.orderId
    let resultInfo = response.resultInfo
    let message = resultInfo.message
    let returnCode = resultInfo.returnCode
    if (returnCode === '1') {
      commit('insure_setInsurer', insurer)
      commit('insure_setOrderInfo', {
        orderId
      })
      return true
    } else {
      Vue.prompt(message)
      return false
    }
  },
  async updateOrderInfo ({
    commit,
    state
  }, option) {
    let orderInfo = option.orderInfo
    let res = await Vue.http.request({
      procedure: 'updateOrderInfo',
      data: {
        ...orderInfo
      }
    })
    let response = res.Envelope.Body.updateOrderInfoResponse.return
    let resultInfo = response.resultInfo
    let message = resultInfo.message
    let returnCode = resultInfo.returnCode
    let orderStr = response.order_Str
    if (returnCode === '1') {
      console.log(resultInfo)
      console.log(orderStr)
      commit('insure_setOrderInfo', orderInfo)
      return true
    } else {
      Vue.prompt(message)
      return false
    }
  },
  async autoProposal ({
    commit,
    state
  }, option) {
    let orderInfo = option.orderInfo
    let res = await Vue.http.request({
      procedure: 'autoUnderWriteForProposal',
      data: {
        ...orderInfo
      }
    })
    console.log(response)
    let response = res.Envelope.Body.updateOrderInfoResponse.return
    let resultInfo = response.resultInfo
    let message = resultInfo.message
    let returnCode = resultInfo.returnCode
    if (returnCode === '1') {
      console.log(resultInfo)
      commit('insure_setOrderInfo', orderInfo)
      return true
    } else {
      Vue.prompt(message)
      return false
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
