<template>
  <div :style="{height:strokeWidth+'px',width:'100%','border-radius':'10px',backgroundColor:'#ccc',overflow:'hidden'}">
    <div :style="{height:strokeWidth+'px','border-radius':'10px',width:(now/total)*100+'%',backgroundColor:(now===0?'#ccc':now===total? fullColor:color)+' !important'}" class="bar-box">
      <div style="width:100%;height: 100%;position: absolute;text-align: right;left: 0;top: 0;white-space: nowrap;display: inline-block;" :style="{lineHeight:strokeWidth+'px'}">
        {{type==='percentage' ? getNumber():now+'/'+total}}
      </div>
    </div>
  </div>
</template>
<script >
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Process",
  props:{
    strokeWidth:{
      type:Number,
      default:20
    },
    now:{
      type:Number,
      default:0
    },
    total:{
      type:Number,
      default:1
    },
    color:{
      type:String,
      default:'#409eff'
    },
    fullColor:{
      type:String,
      default:'#67c23a'
    },
    type:{
      type:String,
      default:'slash' // slash  percentage
    }
  },
  methods:{
    getNumber(){
      return (this.now / this.total *100).toFixed(0) +'%'
    }
  }
}
</script>

<style scoped>
.bar-box{
  display: flex;
  align-items: center;
  color: white;
  padding-right: 4px;
  font-size: 12px;
  position: relative;
}
</style>
