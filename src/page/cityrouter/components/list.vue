<template>
  <ul class="list" >
    <!-- 触屏事件 -->
    <li class="item"
     v-for='item of letters' 
     :key='item' 
     :ref='item'
     @click="hadClick" 
     @touchstart='hadtouchstart'
     @touchmove='hadtouchmove'
     @touchend='hadtouchend'
    >{{item}}</li>
  </ul>
</template>
<script>
import { constants } from 'zlib';
import { log } from 'util';
export default {
  name:'List',
  props:{
    //字母
    cities:Object
  },
  data(){
    return{
      touchshow:false
    }
  },
  // 利用计算属性定义名为letters的城市数组
  computed:{
    letters(){
      const letters=[]
      for(let i in this.cities){
        letters.push(i)
      }
      // 返回结果为["A","B","C"]的数组
      return letters
    }
  },
  methods:{
    hadClick(e){
      this.$emit('change',e.target.innerText)
    },
    hadtouchstart(){
      this.touchshow=true
    },
    hadtouchmove(e){
      if(this.touchshow){
        // 首个字母距离顶部的距离
        const startY=this.$refs["A"][0].offsetTop
        const toucheY=e.touches[0].clientY-79
        console.log(toucheY)
      }
    },
    hadtouchend(){
      this.touchshow=false
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl';
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top:1.66rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .34rem
      text-align center
      color $bgColor
</style>

