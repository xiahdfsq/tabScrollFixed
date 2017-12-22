<template>
    <div class="page user">
      <group gutter="0">  
        <cell is-link value-align="left" link="/setting"> 
          <img slot="icon" src="static/img/ures.png" width="48" height="48">
          <span>冰雪</span>
          <p>158****2513</p>
        </cell>     
      </group>
      <group>  
        <cell is-link title="客户服务"> 
          <img slot="icon" src="static/img/grzl.png" width="30" height="30"> 
        </cell>
        <cell is-link title="常用电话"> 
          <img slot="icon" src="static/img/grzl.png" width="30" height="30"> 
        </cell>    
      </group> 
      <group>  
        <cell is-link title="私隐政策"> 
          <img slot="icon" src="static/img/grzl.png" width="30" height="30"> 
        </cell>
        <cell is-link title="免责声明及知识产权"> 
          <img slot="icon" src="static/img/grzl.png" width="30" height="30"> 
        </cell>
        <cell is-link title="保安政策"> 
          <img slot="icon" src="static/img/grzl.png" width="30" height="30"> 
        </cell>    
      </group> 
    </div>
</template>
<script>
import { Group, Cell } from 'vux'
import { mapMutations } from 'vuex'
const title = {
  title: '我的'
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
    ])
  },
  components: { Group, Cell }
}
</script>
