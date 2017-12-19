<template>
    <div class="page home">
        <section>
          <swiper :list="imgList" v-model="defaultFirstImg" dots-position="center"></swiper>
        </section>
        <div class="tab-icon-menu">
      		<div class="menu-item" v-for="item in menuList">
      			<img :src="item.imgUrl" class="menuIcon">
      			<span class="size-aid ellipsis">{{item.name}}</span>
      		</div> 
        </div>
        <div class="new-product">
        	<div class="new-product_title">新品推荐</div>
        	<div class="new-product_body">
        		<div class="new-product_item ci-border-b" @click="goDetail">
        			<img src="static/img/timg.jpg" alt="" class="new-product_infoImg">
        			<div class="new-product_info">
        				<h4 class="title">保宝乐少儿意外保险</h4>
        				<p class="profile size-aid">全面少儿意外保险,150保费反额</p>
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
        	</div> 
        </div> 
    </div>
</template>
<script>
import { Swiper } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'static/img/1.jpg'
}, {
  url: 'javascript:',
  img: 'static/img/2.jpg'
}, {
  url: 'javascript:',
  img: 'static/img/3.jpg'
}]
export default {
  name: 'Home',
  data () {
    return {
      defaultFirstImg: 0,
      imgList: baseList,
      menuList: [{
        imgUrl: 'static/img/aa.png',
        name: '活动'
      }, {
        imgUrl: 'static/img/bb.png',
        name: '保单服务'
      }, {
        imgUrl: 'static/img/aa.png',
        name: '问医生'
      }, {
        imgUrl: 'static/img/bb.png',
        name: '旺财'
      }, {
        imgUrl: 'static/img/bb.png',
        name: '进圈子'
      }, {
        imgUrl: 'static/img/aa.png',
        name: '平安RUN'
      }, {
        imgUrl: 'static/img/bb.png',
        name: '优惠多'
      }, {
        imgUrl: 'static/img/aa.png',
        name: '入基金'
      }]
    }
  },
  methods: {
    goDetail () {
      this.$router.push('/product-detail')
    }
  },
  components: { Swiper }
}
</script>
