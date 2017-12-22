<template>
  <div class="page info">
  	<group gutter="0" label-width="4em" label-align="justify">
      <!-- <cell title="保險計劃" value-align="left" class="slotValue" value="至尊計劃" is-link> 
  		<div class="tpicon" slot="inline-desc">
                <i class="arrow-right"></i>
                <i class="arrow-tip"></i>
      </div> </cell>-->

      <selector title="保險計劃" ref="defaultValueRef"  :options="planList" v-model="plan" direction="rtl"></selector>
       
      <!-- <cell title="旅程種類" value-align="left" class="slotValue" value="單次旅行保期" is-link> 
  		<div class="tpicon" slot="inline-desc">
                <i class="arrow-right"></i>
                <i class="arrow-tip"></i>
      </div>
      </cell>  -->
      <selector title="旅程種類" ref="defaultValueRef"  :options="styleList" v-model="style" direction="rtl"></selector>
    </group>
    <group title="旅遊人數（最多8人）" label-width="8em"> 
      <checklist disabled label-position="left" :options="commonList" v-model="checklist002"></checklist> 
      <checklist label-position="left" :options="commonList2" v-model="checklist003"></checklist>
  		<!-- <cell title="配偶"> 
        <slot><check-icon :value.sync="demo2" disabled></check-icon></slot>
      </cell> -->
      <cell title="子女(18歲以下)" class="slotValue"> 
    		<inline-x-number style="display:block;" :min="0" width="50px" button-style="round"></inline-x-number>
      </cell> 
      <cell title="子女(18歲以上)" class="slotValue"> 
        <inline-x-number style="display:block;" :min="0" width="50px" button-style="round"></inline-x-number>
      </cell> 
      <cell title="朋友/親屬" class="slotValue"> 
        <inline-x-number style="display:block;" :min="0" width="50px" button-style="round"></inline-x-number>
      </cell>
      <datetime v-model="value1" title="旅行起期日" placeholder="點擊選擇日期"></datetime> 
      <datetime v-model="value2" title="旅行止期日" placeholder="點擊選擇日期"></datetime>
      <x-input title="推櫃代碼" text-align="right"></x-input>         
    </group>
    <div class="pad-15">
      <button class="main-btn">及時報價</button>
      <button class="main-btn aid">重置</button>
    </div> 
  </div>
</template>

<script>
import {  Group, Cell , Selector, InlineXNumber, Datetime, XInput, Checklist  } from 'vux' 
export default {
  data () {
    return { 
      planList: ['至尊計劃', '推举计划'],
      plan:'至尊計劃',
      styleList: ['單次旅行保期', '长期旅游'],
      style: '單次旅行保期',
    	commonList: ['自己'],
    	checklist002: ['自己'], 
      commonList2: ['配偶'],
      checklist003: [],
      demo2: false,
      value1: '',
      value2: ''
    }
  },
  created() {
    console.log(document.body.scrollTop)
    document.body.scrollTop = 0
  },
  components: {
    Selector, InlineXNumber, Datetime, Group, XInput, Cell, Checklist
  }
}
</script>
