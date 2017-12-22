<template>
  <div class="page login"> 
		<group class="weui-cells_form" gutter="50px">
			<h2>太平香港個人用戶</h2>
    		<x-input v-model="login.user" type="text" placeholder="请輸入用戶名" class="ci-border-b"></x-input> 
		    <x-input v-model="login.psw" value="login.psw" type="password" placeholder="请輸入密碼" class="ci-border-b">
          <!-- <i class="check-icon weui-vcode-img" :class="{'show': isPassword === 'text'}" @click="showPassword" slot="right"></i> -->
		    </x-input> 
  	</group>
    <div class="pad-100">
      <button class="main-btn" @click="loginOut()" :class="{'defalut': !btn}">登陸</button>
      <div class="login-fail size-aid">
        <span>忘記會員名稱</span>
        <span class="right">忘記密碼</span>
      </div> 
    </div> 	
    <div class="another-way">
      <div class="title">
        <div class="line"></div>
        <span>其他登陸方式</span>
        <div class="line"></div>
      </div>
      <div class="way-wrapper">
        <span>醫療險用戶</span>
        <em>|</em>
        <span>以訪客身份登陸</span>
      </div>
    </div>		
 	</div>  
</template>
<script>
import { Group, Cell, XInput } from 'vux'
import { mapMutations  } from 'vuex' 
export default {
  name: 'Info',
  data () {
    return { 
      login:{},
      user: '',
      psw: '',
      btn: false
      /*isPassword: 'password'*/
    }
  }, 
  created() {
    this.updateTitle({
      title: '用户登陸'
    }) 
  },
  methods: { 
    ...mapMutations ([
      'updateTitle' 
    ]),
    loginOut () {
      this.updateTitle({
        title: '主頁'
      }) 
      this.$router.push('/')
    },
    goLoginUp () {
      console.log('注冊')
    },
    initBtn () {   
      if(!!this.login.user && !!this.login.psw){
        this.btn = true
      }else {
        this.btn = false
      }
    }
    /*,showPassword () {
      this.isPassword !== 'password' ? this.isPassword = 'password' : this.isPassword = 'text';
    }*/
  }, 
  watch: {
    'login': {
      deep: true,
      handler: function(val, oldVal) {
        this.initBtn()
      }
    }
  },
  components: { Group, Cell, XInput }
}
</script>
<style lang="less">
  input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill{
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }
</style>