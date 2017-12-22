<template>
  <div class="page pd-none pro-intro"> 
		<section class="pro-item" v-for="product in products" @click="goDetail">
       <img :src="product.src" alt=""/>
       <div class="describe title-font-size">
         <span>中國太平（香港）- {{product.name}}</span>
         <a class="detail">詳情</a>
       </div>
    </section>
 	</div>  
</template>
<script>
import { XImg } from 'vux'
import { mapMutations  } from 'vuex'
const title = {
  title: '產品簡介'
}
export default {
  name: 'Info',
  data () {
    return { 
      isPassword: 'password', 
      products: [{ 
        src: 'static/img/xinganbao.jpg',
        name: '意外險'
      }, { 
        src: 'static/img/anxinpei.png',
        name: '意外險'
      }, { 
        src: 'static/img/product_one.jpg',
        name: '意外險'
      }, { 
        src: 'static/img/anxinpei.png',
        name: '意外險'
      }, { 
        src: 'static/img/product_one.jpg',
        name: '意外險'
      }]
    }
  }, 
  created() {
    this.updateTitle(title)  
  },
  methods: { 
    ...mapMutations ([
      'updateTitle' 
    ]),
    goDetail () {
      this.$router.push('/product-detail')
    } 
  },
  mounted() { 
  },
  components: { XImg }
}
</script> 