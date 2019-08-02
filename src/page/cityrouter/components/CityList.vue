<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title  border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title  border-topbottom">热门城市</div>
        <!-- 循环城市 -->
        <div class="button-list">
          <div class="button-wrapper"  v-for="item of hotCities" :key='item.id' >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 循环字母 -->
      <div class="area" v-for="(item,key) of cities" :key='key' :ref='key'>
        <div class="title  border-topbottom" >{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for='innerItem of item' :key='innerItem.id'>{{innerItem.name}}</div>
        </div>
      </div>   
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name:'CityList',
  props:{
    // 热门城市
     hotCities:Array,
    // 按字母分城市
    cities:Object,
    // 同级组件传送的值
    letter:String
  },
  // BetterScroll第三方模块，监听时需要改变成this.BScroll
  mounted (){
    this.BScroll= new BScroll(this.$refs.wrapper)
  },
   // vue自带监听作用
  watch:{
    letter (){
      // console.log(this.letter)
      // console.log(this.$refs[this.letter][0])
      if(this.letter){
        const element=this.$refs[this.letter][0]
        this.BScroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl';
  .border-topbottom
    &:before
      border-color #cccccc
    &:after
      border-color #cccccc
  .border-bottom
     &:before
      border-color #cccccc
  .list
    overflow hidden
    position absolute
    top 1.65rem
    left 0
    right 0
    bottom 0
    .title
      line-height .55rem
      background #eeeeee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left 
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #cccccc
          border-radius .06rem
    .item-list
      .item 
        line-height .76rem
        padding-left .2rem

</style>


