<template>
    <div class="page product-detail"> 
    	<section class="product_bananer">
    		<x-img :src="src" :default-src="defaulImg" class="ximg-bananer" :offset="-100"></x-img>
    		<ul class="info-list">
    			<li class="info-item guarantee">未成年人的专属意外产品</li>
    			<li class="info-item num">满期生存返回1.5倍已交保额</li>
    			<li class="info-item heart">意外医疗0免赔</li>
    			<li class="info-item plus">意外伤残+意外身故双保险</li>
    		</ul>
    	</section>
    	<section class="product_guarantee_range" ref="range">
    		<div class="title">
    			<div class="line"></div>
    			<span>保障范围</span>
    			<div class="line"></div>
    		</div>
    		<ul class="range-list">
    			<li class="range-item cell-left-size">
    				<span class="left">满期生存保险金</span>
    				<span class="right">1.5*主副险已交保费</span>
    			</li>
    			<li class="range-item cell-left-size">
    				<span class="left">残疾事故保险金</span>
    				<span class="right">1.5*主副险已交保费</span>
    			</li>
    			<li class="range-item cell-left-size">
    				<span class="left">意外事故保险金</span>
    				<span class="right">1.5*主副险已交保费</span>
    			</li>
    			<li class="range-item cell-left-size">
    				<span class="left">意外伤残保险金</span>
    				<span class="right">意外保额+1.5*主副险已交保费</span>
    			</li>
    			<li class="range-item cell-left-size">
    				<span class="left">意外医疗保险金</span>
    				<span class="right">1万</span>
    			</li>
    		</ul>
    	</section>
    	<section class="product_detail">
	        <tab active-color="#00aaee" defaultColor="#666">
		      <tab-item :selected="detailTab === index" v-for="(item,index) in detailTabList" @on-item-click="onItemClick(index)" :key="index">{{item}}</tab-item> 
		    </tab>
		    <div class="detail-img" ref="detailImg">
		    	<div class="detailTitle char"><span class="bor-line">产品特色</span></div>
		    	<div class="describe char" ref="char">
		    		<x-img :src="desSrc1" :default-src="defaulImg" :offset="-100"></x-img>
            <x-img :src="desSrc2" :default-src="defaulImg" :offset="-100"></x-img>
		    	</div>
          <div class="detailTitle range"><span class="bor-line">保障范围</span></div>
		    	<div class="describe range" ref="range">
		    		<x-img :src="desSrc2" :default-src="defaulImg" :offset="-100"></x-img>
		    	</div>
          <div class="detailTitle case"><span class="bor-line">保险案例</span></div>
		    	<div class="describe case" ref="case">
		    		<x-img :src="desSrc3" :default-src="defaulImg" :offset="-100"></x-img>
		    	</div>
		    </div>
	    </section>
      <div class="fix-tab" v-show="fixTab">
        <tab active-color="#00aaee" defaultColor="#666">
          <tab-item :selected="detailTab === index" v-for="(item,index) in detailTabList" @on-item-click="onItemClick(index)" :key="index">{{item}}</tab-item> 
        </tab>
      </div>
        <div class="footer-tab">
	      <a class="tab-item period">
	        <span class="goods-tabbar-label ellipsis">HK0</span>
	      </a>
	      <a class="tab-item pay">
	        <span class="goods-tabbar-label ellipsis">立即投保</span>
	      </a>
	    </div>
    </div>
</template>

<script>
import { Tab, TabItem, XImg } from 'vux'
const ClientHeight = screen.height / 3
export default {
  name: 'ProductDetail',
  data () {
    return {
      fixTab: false,
      detailTab: 0,
      detailTabList: ['产品特色', '保障范围', '保险案例'],
      defaulImg: 'static/img/defaul-img.jpg',
      src: 'static/img/timg.jpg',
      desSrc1: 'static/img/des1.png',
      desSrc2: 'static/img/des2.png',
      desSrc3: 'static/img/des1.png'
    }
  },
  methods: {
    onItemClick (index) {
      this.detailTab = index
      this.screenScrollTo(index)
    },
    screenScrollTo (index) {
      var dom = this.$refs.detailImg.querySelectorAll('.detailTitle')[index]
      document.body.scrollTop = dom.offsetTop - 44
      console.log(dom.offsetTop)
      this.fixTab = true
    },
    cacultHeight () {
      var imgList = this.$refs.detailImg.querySelectorAll('.detailTitle')
      var heightArray = []
      imgList.forEach((item) => {
        heightArray.push(item.offsetTop)
      })
      return heightArray
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = this.$refs.detailImg.offsetTop - 44
      if (scrollTop >= offsetTop) {
        this.fixTab = true
        this.cacultHeight().forEach((item, index) => {
          if (scrollTop > item - ClientHeight) {
            this.detailTab = index
          }
        })
      } else {
        this.fixTab = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    this.fixTab = false
    window.removeEventListener('scroll', this.handleScroll)
  },
  components: { Tab, TabItem, XImg }
}
</script>
