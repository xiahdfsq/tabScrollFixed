<template>
  <div id="app">
    <!--<x-header id="jq-header" style="background-color:#fff;">
      <span>意外保險</span>
    </x-header>-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 以下是公共组件 -->
    <loading v-model="showLoading" text="载入中"></loading>
    <toast v-model="toastOPT.show" type="text" :width="toastOPT.width" :class="{ 'toast-text':toastOPT.type =='text' }">
      <div slot>
        <img v-show="toastOPT.type!='text'" class="g-toast-img" :src="'../static/img/' +toastOPT.type+ '.png'"/>
        <p :class="{ 'g-toast-p':toastOPT.type!='text' }">{{toastOPT.msg}}</p>
      </div>
    </toast>
    <!-- 样式待优化 -->
    <x-dialog v-model="prompt.show" class="g-dialog">
      <h3 class="popue-title">提示</h3>
      <div class="popue-content">
        {{prompt.msg}}
      </div>
      <div class="popue-footer">
        <button class="defaul_btn" @click="closePromp">确定</button>
        <button v-show="prompt.cancel" class="defaul_btn" @click="prompt.show=false">取消</button>
      </div>
    </x-dialog>

  </div>
</template>
<script>
import { XHeader, Loading, XDialog, Toast } from 'vux'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'app',
  data () {
    return {}
  },
  created () {
    // this.onTipEntry()
  },
  methods: {
    onTipEntry () {
      this.$prompt('阁下已跳转至中国太平保险香港的场景')
    },
    closePromp () {
      this.closePromt()
      let callback = this.prompt.callback
      !!callback && callback()
    },
    ...mapMutations({
      closePromt: 'CLOSE_PROMPT'
    })
  },
  computed: {
    ...mapGetters([
      'prompt',
      'showLoading',
      'toastOPT'
    ])
  },
  components: {
    XHeader, Loading, XDialog, Toast
  }
}

</script>
<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}

</style>
