import Vue from 'vue'

/**
 * @Description 前后缀
 * @Param label 标签
 * @Param isFront boolean 是否为前缀 [默认为 false/undefined]
 */
Vue.filter('suffix', (value, label, isFront) => {
  if (value === 'undefined' || value === '') {
    return ''
  }
  return !isFront ? (value + label) : (label + value)
})
