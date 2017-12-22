<template>
  <div>
    <group>
      <cell is-link title="Simple" link="/component/tabbar-simple"></cell>
      <cell is-link title="Switch icons" link="/component/tabbar-icon"></cell>
    </group>
    <tabbar>
      <tabbar-item selected link="/home">
        <img slot="icon">
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" >
        <span slot="label">我的</span>
      </tabbar-item>
      <!-- <tabbar-item selected link="/component/demo">
        <img slot="icon" >
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" >
        <span slot="label">News</span>
      </tabbar-item> -->
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>
