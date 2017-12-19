const checkType = {
  NotNull: /\S+/,
  Email: /^([.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
}

/**
 * 遍历对象
 */
function each (obj, callback) {
  for (let i in obj) {
    if (callback.call(obj[i], i, obj[i]) === false) {
      break
    }
  }
}

/**
 * 单个检验
 * @Param item string 被检验值
 * @Param auth 测试对象
 */
function checkItem (item, auth) {
  let reg = checkType[auth] || auth
  let type = toString.call(reg)
  if (type === '[object Function]') {
    return reg(item)
  }
  if (item !== undefined && reg.test(item)) {
    return true
  }
  return false
}

class Check {
  constructor (obj, props) {
    let auth, messList, i, len
    each(props, (label, value) => {
      this.flag = true
      auth = value.auth
      messList = value.mess

      // Todo 遇到 对象 或 对象数组

      // 正常情况
      len = auth.length
      for (i = 0; i < len; i++) {
        if (!checkItem(obj[label], auth[i])) {
          this.message = messList[i] || messList[0]
          this.flag = false
          return false
        }
      }
    })
  }

  then (func) {
    !this.flag && func(this.message)
    return this.flag
  }
}

export {
  Check,
  checkType
}
