<template>
    <div class="page user"> 
      <group gutter=".5em">  
        <cell is-link title="个人信息"></cell>  
        <cell is-link title="实名认证"> </cell>
      </group> 
      <group gutter=".5em">  
        <cell is-link title="关于"></cell>  
      </group>
      <div class="pad-100">
        <button class="main-btn" @click="loginOut()">退出登陸</button> 
      </div>
    </div>
</template>
<script>
import { Group, Cell } from 'vux'
import { mapMutations  } from 'vuex'
const title = {
  title: '個人設置'
}
export default {
  name: 'Info',
  data () {
    return {
      
    }
  }, 
  created() {
    this.updateTitle(title)
  },
  methods: { 
    ...mapMutations ([
      'updateTitle'
    ]),
    loginOut () {
      this.$router.push('/login')
    }
  },
  components: { Group, Cell }
}
</script>
