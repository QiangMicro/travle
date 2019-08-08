<template>
  <div>
    <div class="banner">
      <img 
        class="banner-imge"
        @click="hadShowImge"
        src="//img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_600x330_93d96bdf.jpg" 
        alt="北京欢乐谷"
      >
      <div class="banner-info">
        <div class="banner-tittle">北京欢乐谷(AAAA景区)</div>
        <div class="banner-number"><i class="iconfont banner-icon">&#xe616;</i>27</div>
      </div>
    </div>
    <CommonGallary :imgs='imgs' v-show='imgShow' @hadClick='hadhiddenImge'></CommonGallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import { ALPN_ENABLED } from 'constants';
export default {
  name:'Banner',
  data(){
    return{
      imgShow:false,
      imgs:['http://img1.qunarzz.com/sight/p0/1907/40/401b7b735008f7f4a3.img.jpg_r_800x800_e01bd6ac.jpg','http://img1.qunarzz.com/sight/p0/1908/dc/dca4c1a2ded2e776a3.img.jpg_r_800x800_c3e44e68.jpg']
    }
  },
  components:{
    CommonGallary
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


