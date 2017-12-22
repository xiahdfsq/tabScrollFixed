<template>
  <div id="app" style="height:100%;">
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenu" @on-click-menu="changeLocale"></actionsheet>
    </div>
    <!--<x-header id="jq-header" style="background-color:#fff;">
      <span>意外保險</span>
    </x-header>-->
    <!--  <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <!-- 以下是公共组件 -->
    <!-- <loading v-model="showLoading" text="载入中"></loading>
    <toast v-model="toastOPT.show" type="text" :width="toastOPT.width" :class="{ 'toast-text':toastOPT.type =='text' }">
      <div slot>
        <img v-show="toastOPT.type!='text'" class="g-toast-img" :src="'../static/img/' +toastOPT.type+ '.png'"/>
        <p :class="{ 'g-toast-p':toastOPT.type!='text' }">{{toastOPT.msg}}</p>
      </div>
    </toast> -->
    <!-- 样式待优化 -->
    <!-- <x-dialog v-model="prompt.show" class="g-dialog">
      <h3 class="popue-title">提示</h3>
      <div class="popue-content">
        {{prompt.msg}}
      </div>
      <div class="popue-footer">
        <button class="defaul_btn" @click="closePromp">确定</button>
        <button v-show="prompt.cancel" class="defaul_btn" @click="prompt.show=false">取消</button>
      </div>
    </x-dialog> -->
    <!-- <view-box ref="viewBox" body-padding-top="50px" body-padding-bottom="50px"> -->
      <!-- <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" :right-options="{showMore: true}" @on-click-more="onClickMore" :left-options="leftOptions" :right-options="rightOptions" :transition="headerTransition"></x-header> -->
      <x-header :left-options="leftOptions" :right-options="rightOptions" :title="title" @on-click-more="onClickMore">
      </x-header>
      <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
      <transition @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')" :name="viewTransition" :css="!!direction">
        <router-view class="router-view"></router-view>
      </transition>
      <tabbar v-show="!isTabbarDemo">
        <tabbar-item :link="{path:'/tabbar/home'}" :selected="route.path === '/tabbar/home'"> 
          <img slot="icon" :src="homeSrc">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/tabbar/info'}" :selected="route.path === '/tabbar/info'">
          <img slot="icon" :src="personalSrc">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    <!-- </view-box> -->
  </div>
</template>
<script>
import { XHeader, Loading, XDialog, Toast, ViewBox, Tabbar, TabbarItem, TransferDom, Actionsheet } from 'vux'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      showMenu: false,
      menus: {
        'language.noop': '<span class="menu-title">Language</span>',
        'zh-CN': '中文',
        'en': 'English'
      },
    }
  }, 
  methods: { 
    onClickMore () {
      this.showMenu = true
    },
    changeLocale (locale) {
      // this.$i18n.set(locale)
      // this.$locale.set(locale)
    },
    ...mapActions([
      'updateDemoPosition'
    ])
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      direction: state => state.vux.direction,
      title: state => state.vux.title,
      isShowMore: state => state.vux.isShowMore 
    }),
    headerTransition () {
      if (!this.direction) return ''
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    leftOptions () {
      return {
        backText: '',
        showBack: !(this.route.path == '/tabbar/home' || this.route.path == '/tabbar/info')
      }
    },
    rightOptions () { 
      return {
        showMore: this.isShowMore
      }
    },
    isTabbarDemo () {
      // console.log(/info/.test(this.route.path))
      return !/tabbar/.test(this.route.path)
    },
    viewTransition () {
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    },
    homeSrc () {
      return this.route.path === '/tabbar/home' ? 'static/img/home_active.png' : 'static/img/home.png'
    },
    personalSrc () {
      return this.route.path === '/tabbar/info' ? 'static/img/ures_active.png' : 'static/img/ures.png'
    }
  },
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Loading,
    XDialog,
    Toast,
    ViewBox,
    Tabbar,
    TabbarItem,
    Actionsheet
  }
}

</script>
<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
/* html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
} */
.router-view {
  width: 100%;

}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
