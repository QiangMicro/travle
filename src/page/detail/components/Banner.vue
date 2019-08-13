<template>
  <div>
    <div class="banner">
      <img 
        class="banner-imge"
        @click="hadShowImge"
        :src="this.bannerImg" 
        alt="北京欢乐谷"
      >
      <div class="banner-info">
        <div class="banner-tittle">{{this.sightName}}</div>
        <div class="banner-number"><i class="iconfont banner-icon">&#xe616;</i>{{this.gallaryImgs.length}}</div>
      </div>
    </div>
    <FadeAnimation>
      <CommonGallary :gallaryImgs='gallaryImgs' v-show='imgShow' @hadClick='hadhiddenImge'></CommonGallary>
    </FadeAnimation>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
import { ALPN_ENABLED } from 'constants';
export default {
  name:'Banner',
  props:{
    sightName:String,
    bannerImg:String,
    gallaryImgs:Array
  },
  data(){
    return{
      imgShow:false
    }
  },
  components:{
    CommonGallary,
    FadeAnimation
  },
  methods:{
    hadShowImge(){
      this.imgShow=true
    },
    hadhiddenImge(){
      this.imgShow=false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-imge
      width 100%
    .banner-info
      position  absolute
      display flex
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #ffffff
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-tittle  
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        margin-top .14rem
        padding  0 .4rem
        line-height .4rem
        height .32rem
        border-radius .2rem
        background rgba(0,0,0,.8)
        font-size .24rem
        .banner-icon
          font-size .24rem
          margin 0 .1rem

</style>


