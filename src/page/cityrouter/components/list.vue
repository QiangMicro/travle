<template>
  <ul class="list" >
    <!-- 触屏事件 -->
    <li class="item"
     v-for='item of letters' 
     :key='item' 
     :ref='item'
     @click="hadClick" 
     @touchstart.prevent='hadtouchstart'
     @touchmove='hadtouchmove'
     @touchend='hadtouchend'
    >{{item}}</li>
  </ul>
</template>
<script>
import { constants } from 'zlib';
import { log } from 'util';
import { clearTimeout, setTimeout } from 'timers';
export default {
  name:'List',
  props:{
    //字母
    cities:Object
  },
  data(){
    return{
      touchshow:false,
      timer:null
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
    // 通过函数截流的方法优化代码
    hadtouchmove(e){
      if(this.touchshow){
        if(this.timer){
          clearTimeout(this.timer)
        }
        this.timer=setTimeout(()=>{
          // 首个字母距离顶部的距离
          const startY=this.$refs["A"][0].offsetTop
          // 手指区域距离顶部的高度
          const touchY=e.touches[0].clientY-79
          // 判断手指所在的下标
          const index=-( Math.floor((startY-touchY)/20))
          if(index>=0 && index<this.letters.length){
            this.$emit('change',this.letters[index])
          }
        },16)
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

