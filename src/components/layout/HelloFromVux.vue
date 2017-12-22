<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
  </div>
</template>
<script>
import { Group, Cell } from 'vux'
import Vue from 'vue'
export default {
  components: {
    Group,
    Cell
  },
  data() {
    return {
      msg: 'Hello World!'
    }
  },
  mounted() {
    //console.log(this.$http);
    //Vue.tpUtil.toastShow({text: '保存成功'});
    // this.$vux.toast.show({
    //   width: '18.9em',
    //   time: 1500,
    //   type: 'text',
    //   text: 'Loading'
    // })
  }
}

</script>
<style>
.vux-demo {
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}

</style>
