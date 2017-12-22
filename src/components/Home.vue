<template>
  <div class="page home">
      <section>
        <swiper :list="imgList" v-model="defaultFirstImg" dots-position="center" :aspect-ratio="0.48"></swiper>
      </section>
      <div class="tab-icon-menu">
        <div class="menu-item" v-for="item in menuList">
          <img :src="item.imgUrl" class="menuIcon" @click="goMenuItem(item.id)">
          <span class="size-aid ellipsis">{{item.name}}</span>
        </div> 
      </div>
      <div class="new-product">
        <div class="new-product_title">新品推舉</div>
        <div class="new-product_body">
          <div class="new-product_item ci-border-b" @click="goDetail">
            <img src="static/img/product_one.jpg" alt="" class="new-product_infoImg">
            <div class="new-product_info">
              <h4 class="title">旅遊綜合保險</h4>
              <p class="profile size-aid">無自負額</p>
              <span class="num">￥50.22</span>
            </div>
          </div>
          <div class="new-product_item ci-border-b" @click="goDetail"> 
            <img src="static/img/timg.jpg" alt="" class="new-product_infoImg">
            <div class="new-product_info">
              <h4 class="title">传世臻宝</h4>
              <p class="profile size-aid">传富、传爱、传未来</p>
              <span class="num">火爆产品</span>
            </div>
          </div>
          <div class="new-product_item ci-border-b" @click="goDetail">
            <img src="static/img/timg.jpg" alt="" class="new-product_infoImg">
            <div class="new-product_info">
              <h4 class="title">产品1</h4>
              <p class="profile size-aid">专为儿童家长量身定做</p>
              <span class="num">￥150</span>
              <span class="smaller-size">起</span>
            </div>
          </div>
          <div class="new-product_item ci-border-b" @click="goDetail">
            <img src="static/img/timg.jpg" alt="" class="new-product_infoImg">
            <div class="new-product_info">
              <h4 class="title">产品1</h4>
              <p class="profile size-aid">专为儿童家长量身定做</p>
              <span class="num">￥150</span>
              <span class="smaller-size">起</span>
            </div>
          </div>
          <div class="new-product_item ci-border-b" @click="goDetail">
            <img src="static/img/timg.jpg" alt="" class="new-product_infoImg">
            <div class="new-product_info">
              <h4 class="title">产品1</h4>
              <p class="profile size-aid">专为儿童家长量身定做</p>
              <span class="num">￥150</span>
              <span class="smaller-size">起</span>
            </div>
          </div>
        </div> 
      </div> 
  </div>
</template>
<script>
import { Swiper, XImg } from 'vux'
import { mapMutations  } from 'vuex'  
const baseList = [{
  url: 'javascript:',
  img: 'static/img/swiper1.png'
}, {
  url: 'javascript:',
  img: 'static/img/swiper2.jpg'
}, {
  url: 'javascript:',
  img: 'static/img/swiper3.jpg'
}]
export default {
  name: 'Home',
  data () {
    return {
      defaultFirstImg: 0,
      imgList: baseList,
      defaulImg: 'static/img/defaul-img.jpg',
      menuList: [{
        imgUrl: 'static/img/index_cpjs.png',
        name: '產品簡介',
        id: 'produce-introduce'
      }, {
        imgUrl: 'static/img/index_bj.png',
        name: '報價及投保',
        id: 'price'
      }, {
        imgUrl: 'static/img/index_tg.png',
        name: '推廣及優惠'
      }, {
        imgUrl: 'static/img/index_bdcx.png',
        name: '保單查詢'
      }, {
        imgUrl: 'static/img/index_khfw.png',
        name: '客戶服務'
      }, {
        imgUrl: 'static/img/index_ylx.png',
        name: '團體醫療險'
      }, {
        imgUrl: 'static/img/index_jjjy.png',
        name: '常用電話'
      }, {
        imgUrl: 'static/img/index_xxzx.png',
        name: '信息中心'
      }]
    }
  },
  created() {
    console.log(document.body.scrollTop)
    this.updateTitle({
      title: '主頁'
    }) 
  },
  methods: { 
    ...mapMutations ([
      'updateTitle'
    ]),
    goMenuItem (name) {
      this.$router.push(`/${name}`)
    },  
    goDetail () {
      this.$router.push('/product-detail')
    }
  },
  components: { Swiper, XImg }
}
</script>
